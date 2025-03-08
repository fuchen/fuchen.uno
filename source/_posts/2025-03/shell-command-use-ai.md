---
title: use-ai：用 AI 生成 shell 命令
date: 2025-03-09 00:41:15
tags: [AI, Shell]
---

用 AI 写了一个简单的命令行工具，可以用来调用 AI 模型来帮助生成 shell 命令。程序员还有什么存在感？

<!-- more -->

代码地址：https://github.com/fuchen/use-ai

功能：

- 自动检测用户的操作系统和 shell 环境
- 根据用户的查询生成相应的 shell 命令
- 支持连续对话，保持上下文
- 可自定义 OpenAI API 端点、模型和系统提示词

安装：

```bash
go install github.com/fuchen/use-ai@latest
```

使用：

```bash
use-ai
```
