---
title: "LLM 是如何调用 tools 的"
date: 2025-03-02 17:30:00
tags: [AI, LLM]
---

每次 LLM API 的调用实际上都是一次 HTTP request，发送的 json 数据包含了 API token，LLM 调用参数设置，消息上下文（messages）等。而 LLM 的 response 也是 json 数据，内容包括 token 用量（usage），模型输出的消息（choices/message）等。

那么 LLM 是如何调用本地 tools 的呢？

## 怎么提供工具给 LLM

以 OpenAI 为例，可以在 HTTP request 里告诉 LLM 有哪些可用的工具，以及如何调用。

### 通过 `tools` 字段告诉 LLM 有哪些可用的 tools。

Tool 的类型通常是 `function`，但是 GPT-4 还内置了 `code_interpreter` 和 `file_search` 工具。我们要关注的重点就是 `function`，因为很容易用 `function` tool 在本地实现 `code_interpreter` 和 `file_search`。

每个 function tool 都需要定义以下字段：

- `name`：工具名称，必须是唯一的。
- `description`：工具的功能描述，帮助 LLM 理解什么时候该用这个工具。
- `parameters`：工具的参数定义，采用 JSON Schema 格式。

### 通过 `tool_choice` 字段来设置 LLM 调用工具的方式。

- 默认是 `auto`：LLM 自己决定是否调用工具。
- `none`：禁止 LLM 调用工具。
- `required`：强制 LLM 调用工具，但调用哪些工具由 LLM 自己决定。
- `{"type": "function", "function": {"name": "tool_name"}}`：强制 LLM 调用指定的工具。

### HTTP 请求示例

下面的例子里，给 LLM 提供了一个简单的天气查询工具，并让 LLM 自己决定是否调用：

```JSON
{
  "messages": [
    {
      "content": "You are a helpful assistant, answer the user's question",
      "role": "system"
    },
    {
      "content": "杭州气温多少度?",
      "role": "user"
    },
  ],
  "tools": [{
    "type": "function",
    "function": {
      "name": "get_weather",
      "description": "Get weather of an location, the user should supply a location first",
      "parameters": {
        "type": "object",
        "properties": {
          "location": {
            "type": "string",
            "description": "The city and state, e.g. San Francisco, CA"
          }
        },
        "required": ["location"]
      }
    }
  }],
  "tool_choice": "auto",
  // 其他设置...
}
```

## LLM 是怎么调用工具的

当 LLM 收到请求之后，如果想调用工具，会在返回的 message 里包含 `tool_calls` 字段，来告诉客户端调用哪些工具。比如针对上面的请求，LLM 可能会返回这样的消息：

```JSON
{
  "id": "...",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "",
        "tool_calls": [
          {
            "index": 0,
            "id": "call_0_17746ac6-b94a-42c4-b630-31576d3712a7",
            "type": "function",
            "function": {
              "name": "get_weather",
              "arguments": "{\"location\":\"杭州\"}"
            }
          }
        ]
      },
      "logprobs": null,
      "finish_reason": "tool_calls"
    }
  ],
  // ...
}

```

这里我们需要注意两个地方：

1. `finish_reason` 是 `tool_calls`。
2. `tool_calls` 字段包含了要调用的工具信息，包括工具名称和参数。

接下来客户端可以运行工具函数，然后把函数结果通过 HTTP 请求发送给 LLM。注意这里的 `role` 取值为 `tool`，`tool_call_id` 必须与前面的调用 id 一致：

```JSON
{
  "messages": [
    // 重复前面的消息...
    {
      "role": "tool",
      "tool_call_id": "call_0_17746ac6-b94a-42c4-b630-31576d3712a7",
      "content": "27度"
    },
  ]
  // ...
}
```

接下来 LLM 会根据工具运行的结果来生成最终的回答：

```JSON
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "杭州目前气温约为27度。 ",
        "role": "assistant"
      }
    }
  ],
  // ...
}
```

### 错误处理

比如针对上面的请求，工具函数可以返回一个错误：

```JSON
{
  "role": "tool",
  "tool_call_id": "call_0_17746ac6-b94a-42c4-b630-31576d3712a7",
  "content": "error: 位置必须精确到城市的具体行政区（如西湖区，上城区等）",
},
```

LLM 能读懂错误信息，然后可能会返回如下消息：

```JSON
{
  "choices": [
    {
      "finish_reason": "stop",
      "index": 0,
      "logprobs": null,
      "message": {
        "content": "为了获取准确的杭州气温信息，我需要更精准的位置。你能告诉我杭州具体是哪个区，比如西湖区、上城区等，以便我调用相关功能查询该区域的天气情况。 ",
        "role": "assistant"
      }
    }
  ],
  // ...
}
```

## 其他

以上测试用例均用豆包 API 完成，模型是 `doubao-1-5-pro-32k-250115`。

Anthropic Claude 系列模型的数据格式有些不同，但原理类似。他的回应长这样：
```JSON
{
  "role": "assistant",
  "content": [
    {
      "type": "text",
      "text": "<thinking>To answer this question, I will: 1. Use the get_weather tool to get the current weather in San Francisco. 2. Use the get_time tool to get the current time in the America/Los_Angeles timezone, which covers San Francisco, CA.</thinking>"
    },
    {
      "type": "tool_use",
      "id": "toolu_01A09q90qw90lq917835lq9",
      "name": "get_weather",
      "input": {"location": "San Francisco, CA"}
    }
  ]
}
```
