"use strict";
(() => {
  // src/scenarios.ts
  function c(cityId, owner, generals, extra) {
    return { cityId, owner, generals, ...extra };
  }
  var SCENARIOS = [
    {
      id: "s184",
      name: "\u9EC4\u5DFE\u4E4B\u4E71",
      year: 184,
      desc: "\u5F20\u89D2\u63ED\u7AFF\u800C\u8D77\uFF0C\u5929\u4E0B\u54CD\u5E94\u3002\u6C49\u5BA4\u503E\u9893\uFF0C\u7FA4\u96C4\u521D\u9732\u950B\u8292\u3002\u6C49\u5BA4\u5730\u5E7F\u5175\u591A\uFF0C\u9EC4\u5DFE\u52BF\u4F17\u5C06\u52C7\uFF0C\u5B59\u575A\u3001\u5218\u5907\u5D2D\u9732\u5934\u89D2\u3002",
      factions: [
        { id: "han", name: "\u6C49\u5BA4", color: "#c23b3b", ruler: 102, aggression: 0.5, develop: 0.6 },
        { id: "huangjin", name: "\u9EC4\u5DFE\u519B", color: "#d8b53a", ruler: 96, aggression: 0.9, develop: 0.3 },
        { id: "sunjian", name: "\u5B59\u575A", color: "#d86a3a", ruler: 40, aggression: 0.85, develop: 0.55 },
        { id: "liubei", name: "\u5218\u5907", color: "#3f9e4d", ruler: 20, aggression: 0.6, develop: 0.8 }
      ],
      cities: [
        c("luoyang", "han", [102, 103, 104]),
        c("changan", "han", [105, 106]),
        c("xuchang", "han", []),
        c("xiangyang", "han", []),
        c("jiangling", "han", []),
        c("chengdu", "han", []),
        c("hanzhong", "han", []),
        c("tianshui", "han", []),
        c("ye", "huangjin", [96, 97, 98], { troops: 16e3 }),
        c("pingyuan", "huangjin", [99], { troops: 1e4 }),
        c("xiaopei", "huangjin", [100], { troops: 8e3 }),
        c("shouchun", "huangjin", [101], { troops: 1e4 }),
        c("jiangxia", "huangjin", [], { troops: 9e3 }),
        c("changsha", "sunjian", [40, 49, 50, 51], { troops: 9e3 }),
        c("xiapi", "liubei", [20, 21, 22], { troops: 6e3 })
      ]
    },
    {
      id: "s190",
      name: "\u53CD\u8463\u5353\u8054\u76DF",
      year: 190,
      desc: "\u8463\u5353\u5E9F\u7ACB\u5929\u5B50\uFF0C\u711A\u63A0\u6D1B\u9633\u3002\u5173\u4E1C\u8BF8\u4FAF\u6B43\u8840\u4E3A\u76DF\uFF0C\u5171\u8BA8\u56FD\u8D3C\u3002\u5415\u5E03\u9A81\u52C7\u65E0\u53CC\uFF0C\u8054\u519B\u4EBA\u591A\u52BF\u4F17\uFF0C\u4E71\u4E16\u7531\u6B64\u5F00\u7AEF\u3002",
      factions: [
        { id: "dongzhuo", name: "\u8463\u5353", color: "#5a4a6a", ruler: 69, aggression: 0.8, develop: 0.4 },
        { id: "caocao", name: "\u66F9\u64CD", color: "#3a6fd8", ruler: 1, aggression: 0.8, develop: 0.7 },
        { id: "yuanshao", name: "\u8881\u7ECD", color: "#c9a02a", ruler: 60, aggression: 0.7, develop: 0.6 },
        { id: "sunjian", name: "\u5B59\u575A", color: "#d86a3a", ruler: 40, aggression: 0.85, develop: 0.55 },
        { id: "liubei", name: "\u5218\u5907", color: "#3f9e4d", ruler: 20, aggression: 0.6, develop: 0.8 },
        { id: "gongsun", name: "\u516C\u5B59\u74D2", color: "#b8c4cc", ruler: 90, aggression: 0.7, develop: 0.5 },
        { id: "taoqian", name: "\u9676\u8C26", color: "#8a9a6a", ruler: 92, aggression: 0.2, develop: 0.6 },
        { id: "yuanshu", name: "\u8881\u672F", color: "#d88ab0", ruler: 94, aggression: 0.7, develop: 0.4 },
        { id: "liubiao", name: "\u5218\u8868", color: "#3aa0a0", ruler: 75, aggression: 0.3, develop: 0.8 },
        { id: "liuzhang", name: "\u5218\u748B", color: "#9a8a3a", ruler: 80, aggression: 0.2, develop: 0.7 },
        { id: "zhanglu", name: "\u5F20\u9C81", color: "#7ac0d8", ruler: 85, aggression: 0.2, develop: 0.6 },
        { id: "mateng", name: "\u9A6C\u817E", color: "#a06a3a", ruler: 88, aggression: 0.6, develop: 0.5 }
      ],
      cities: [
        c("changan", "dongzhuo", [69, 70, 71, 74], { troops: 14e3 }),
        c("luoyang", "dongzhuo", [65, 72, 73], { troops: 12e3 }),
        c("xuchang", "caocao", [1, 2, 3, 4, 5, 10], { troops: 1e4 }),
        c("ye", "yuanshao", [60, 61, 62, 8], { troops: 12e3 }),
        c("pingyuan", "yuanshao", [63, 64], { troops: 8e3 }),
        c("changsha", "sunjian", [40, 49, 50, 51], { troops: 9e3 }),
        c("xiaopei", "liubei", [20, 21, 22], { troops: 5e3 }),
        c("beihai", "gongsun", [90, 91, 23], { troops: 8e3 }),
        c("xiapi", "taoqian", [92, 93], { troops: 7e3 }),
        c("shouchun", "yuanshu", [94, 95], { troops: 9e3 }),
        c("xiangyang", "liubiao", [75, 76, 77, 78], { troops: 1e4 }),
        c("jiangxia", "liubiao", [79], { troops: 7e3 }),
        c("chengdu", "liuzhang", [80, 81, 82, 84], { troops: 9e3 }),
        c("hanzhong", "zhanglu", [85, 86, 87], { troops: 7e3 }),
        c("tianshui", "mateng", [88, 89], { troops: 8e3 })
      ]
    },
    {
      id: "s194",
      name: "\u7FA4\u96C4\u5272\u636E",
      year: 194,
      desc: "\u8463\u5353\u5DF2\u4EA1\uFF0C\u674E\u5095\u90ED\u6C5C\u4E71\u957F\u5B89\u3002\u66F9\u64CD\u636E\u5156\u5DDE\uFF0C\u5415\u5E03\u88AD\u5F90\u5DDE\uFF0C\u5B59\u7B56\u6E21\u6C5F\u4E1C\uFF0C\u8881\u7ECD\u96C4\u8E1E\u6CB3\u5317\u3002\u7FA4\u96C4\u5E76\u8D77\uFF0C\u9010\u9E7F\u4E2D\u539F\u3002",
      factions: [
        { id: "caocao", name: "\u66F9\u64CD", color: "#3a6fd8", ruler: 1, aggression: 0.8, develop: 0.7 },
        { id: "lvbu", name: "\u5415\u5E03", color: "#8a4ad8", ruler: 65, aggression: 0.95, develop: 0.3 },
        { id: "liubei", name: "\u5218\u5907", color: "#3f9e4d", ruler: 20, aggression: 0.6, develop: 0.8 },
        { id: "yuanshao", name: "\u8881\u7ECD", color: "#c9a02a", ruler: 60, aggression: 0.7, develop: 0.6 },
        { id: "sunce", name: "\u5B59\u7B56", color: "#d86a3a", ruler: 41, aggression: 0.85, develop: 0.6 },
        { id: "liubiao", name: "\u5218\u8868", color: "#3aa0a0", ruler: 75, aggression: 0.3, develop: 0.8 },
        { id: "yuanshu", name: "\u8881\u672F", color: "#d88ab0", ruler: 94, aggression: 0.7, develop: 0.4 },
        { id: "liuzhang", name: "\u5218\u748B", color: "#9a8a3a", ruler: 80, aggression: 0.2, develop: 0.7 },
        { id: "zhanglu", name: "\u5F20\u9C81", color: "#7ac0d8", ruler: 85, aggression: 0.2, develop: 0.6 },
        { id: "mateng", name: "\u9A6C\u817E", color: "#a06a3a", ruler: 88, aggression: 0.6, develop: 0.5 }
      ],
      cities: [
        c("xuchang", "caocao", [1, 2, 3, 4, 10, 11], { troops: 12e3 }),
        c("luoyang", "caocao", [6, 7, 9, 13], { troops: 9e3 }),
        c("xiapi", "lvbu", [65, 66, 67, 68], { troops: 11e3 }),
        c("xiaopei", "liubei", [20, 21, 22, 30], { troops: 6e3 }),
        c("ye", "yuanshao", [60, 61, 62, 8], { troops: 13e3 }),
        c("pingyuan", "yuanshao", [63, 64], { troops: 9e3 }),
        c("beihai", "yuanshao", [], { troops: 7e3 }),
        c("jianye", "sunce", [41, 42, 43, 47], { troops: 9e3 }),
        c("wu", "sunce", [49, 50, 52, 54], { troops: 7e3 }),
        c("kuaiji", "sunce", [51], { troops: 5e3 }),
        c("xiangyang", "liubiao", [75, 76, 77, 78], { troops: 11e3 }),
        c("jiangxia", "liubiao", [79], { troops: 7e3 }),
        c("jiangling", "liubiao", [], { troops: 7e3 }),
        c("shouchun", "yuanshu", [94, 95], { troops: 1e4 }),
        c("chengdu", "liuzhang", [80, 81, 82, 84], { troops: 9e3 }),
        c("hanzhong", "zhanglu", [85, 86, 87], { troops: 7e3 }),
        c("tianshui", "mateng", [88, 89, 26], { troops: 9e3 })
      ]
    },
    {
      id: "s207",
      name: "\u4E09\u987E\u8305\u5E90",
      year: 207,
      desc: "\u66F9\u64CD\u4E00\u7EDF\u5317\u65B9\uFF0C\u864E\u89C6\u8346\u8944\u3002\u5218\u5907\u4E09\u987E\u8305\u5E90\u5F97\u5367\u9F99\uFF0C\u5B59\u6743\u5750\u9886\u6C5F\u4E1C\u3002\u5927\u6218\u4E00\u89E6\u5373\u53D1\uFF0C\u4E09\u5206\u5929\u4E0B\u4E4B\u52BF\u5C06\u6210\u3002",
      factions: [
        { id: "caocao", name: "\u66F9\u64CD", color: "#3a6fd8", ruler: 1, aggression: 0.85, develop: 0.7 },
        { id: "liubei", name: "\u5218\u5907", color: "#3f9e4d", ruler: 20, aggression: 0.65, develop: 0.8 },
        { id: "sunquan", name: "\u5B59\u6743", color: "#d84a3a", ruler: 42, aggression: 0.55, develop: 0.8 },
        { id: "liubiao", name: "\u5218\u8868", color: "#3aa0a0", ruler: 75, aggression: 0.25, develop: 0.8 },
        { id: "liuzhang", name: "\u5218\u748B", color: "#9a8a3a", ruler: 80, aggression: 0.2, develop: 0.7 },
        { id: "zhanglu", name: "\u5F20\u9C81", color: "#7ac0d8", ruler: 85, aggression: 0.2, develop: 0.6 },
        { id: "mateng", name: "\u9A6C\u817E", color: "#a06a3a", ruler: 88, aggression: 0.6, develop: 0.5 }
      ],
      cities: [
        c("luoyang", "caocao", [1, 14, 15, 17], { troops: 14e3 }),
        c("changan", "caocao", [4, 8], { troops: 11e3 }),
        c("xuchang", "caocao", [2, 3, 9, 13, 16], { troops: 13e3 }),
        c("ye", "caocao", [6, 7, 10], { troops: 12e3 }),
        c("pingyuan", "caocao", [5], { troops: 8e3 }),
        c("beihai", "caocao", [], { troops: 6e3 }),
        c("xiaopei", "caocao", [11], { troops: 7e3 }),
        c("xiapi", "caocao", [], { troops: 7e3 }),
        c("shouchun", "caocao", [], { troops: 8e3 }),
        c("xiangyang", "liubei", [20, 21, 22, 23, 24, 29, 31, 32, 33], { troops: 11e3 }),
        c("jianye", "sunquan", [42, 43, 44, 46, 53], { troops: 11e3 }),
        c("wu", "sunquan", [45, 49, 50, 52], { troops: 8e3 }),
        c("kuaiji", "sunquan", [51], { troops: 5e3 }),
        c("chaisang", "sunquan", [48, 54], { troops: 7e3 }),
        c("jiangling", "liubiao", [75, 76, 78], { troops: 9e3 }),
        c("jiangxia", "liubiao", [77, 79], { troops: 8e3 }),
        c("changsha", "liubiao", [], { troops: 6e3 }),
        c("chengdu", "liuzhang", [80, 81, 82, 83, 84], { troops: 1e4 }),
        c("hanzhong", "zhanglu", [85, 86, 87], { troops: 8e3 }),
        c("tianshui", "mateng", [88, 89, 26, 18], { troops: 1e4 })
      ]
    }
  ];
  var SCENARIO_BY_ID = {};
  for (const s of SCENARIOS) SCENARIO_BY_ID[s.id] = s;

  // src/data.ts
  var RAW_GENERALS = [
    // 曹魏
    [1, "\u66F9\u64CD", 96, 72, 91, 94, 96],
    [2, "\u590F\u4FAF\u60C7", 88, 90, 60, 70, 80],
    [3, "\u590F\u4FAF\u6E0A", 87, 91, 55, 65, 75],
    [4, "\u66F9\u4EC1", 89, 86, 62, 70, 76],
    [5, "\u66F9\u6D2A", 79, 81, 45, 58, 68],
    [6, "\u5F20\u8FBD", 93, 92, 78, 70, 84],
    [7, "\u5F90\u6643", 88, 90, 70, 72, 78],
    [8, "\u5F20\u90C3", 89, 89, 68, 70, 76],
    [9, "\u4E8E\u7981", 84, 78, 70, 72, 70],
    [10, "\u4E50\u8FDB", 82, 84, 56, 60, 70],
    [11, "\u8BB8\u891A", 78, 96, 35, 40, 70],
    [12, "\u5178\u97E6", 68, 95, 30, 32, 58],
    [13, "\u90ED\u5609", 60, 28, 96, 84, 80],
    [14, "\u8340\u5F67", 58, 24, 95, 96, 88],
    [15, "\u8340\u6538", 70, 40, 93, 88, 82],
    [16, "\u7A0B\u6631", 68, 45, 90, 86, 76],
    [17, "\u53F8\u9A6C\u61FF", 94, 62, 98, 95, 86],
    [18, "\u5E9E\u5FB7", 86, 94, 60, 55, 72],
    // 蜀汉
    [20, "\u5218\u5907", 82, 70, 74, 80, 99],
    [21, "\u5173\u7FBD", 95, 97, 75, 70, 92],
    [22, "\u5F20\u98DE", 90, 98, 40, 45, 76],
    [23, "\u8D75\u4E91", 91, 96, 70, 72, 86],
    [24, "\u8BF8\u845B\u4EAE", 92, 45, 100, 98, 96],
    [25, "\u9EC4\u5FE0", 86, 93, 58, 55, 76],
    [26, "\u9A6C\u8D85", 89, 96, 50, 55, 80],
    [27, "\u9B4F\u5EF6", 84, 92, 62, 55, 70],
    [28, "\u5E9E\u7EDF", 82, 52, 97, 86, 82],
    [29, "\u5F90\u5EB6", 78, 65, 93, 80, 82],
    [30, "\u7CDC\u7AFA", 58, 38, 70, 82, 76],
    [31, "\u5218\u5C01", 74, 78, 48, 52, 64],
    [32, "\u5173\u5E73", 78, 82, 60, 58, 70],
    [33, "\u5468\u4ED3", 70, 84, 40, 38, 60],
    // 孙吴
    [40, "\u5B59\u575A", 90, 92, 70, 72, 86],
    [41, "\u5B59\u7B56", 92, 95, 65, 70, 90],
    [42, "\u5B59\u6743", 80, 68, 78, 85, 92],
    [43, "\u5468\u745C", 91, 71, 96, 88, 94],
    [44, "\u9C81\u8083", 76, 56, 90, 92, 86],
    [45, "\u5415\u8499", 86, 82, 89, 80, 82],
    [46, "\u9646\u900A", 91, 66, 95, 90, 86],
    [47, "\u592A\u53F2\u6148", 88, 93, 60, 60, 78],
    [48, "\u7518\u5B81", 84, 94, 55, 45, 76],
    [49, "\u9EC4\u76D6", 80, 85, 65, 70, 78],
    [50, "\u7A0B\u666E", 82, 80, 72, 75, 78],
    [51, "\u97E9\u5F53", 78, 82, 55, 60, 72],
    [52, "\u5468\u6CF0", 80, 88, 50, 50, 72],
    [53, "\u5F20\u662D", 55, 35, 85, 95, 85],
    [54, "\u848B\u94A6", 76, 80, 52, 55, 68],
    // 袁绍
    [60, "\u8881\u7ECD", 85, 70, 70, 80, 88],
    [61, "\u989C\u826F", 80, 93, 40, 45, 65],
    [62, "\u6587\u4E11", 80, 94, 38, 42, 65],
    [63, "\u6CAE\u6388", 72, 50, 88, 85, 76],
    [64, "\u7530\u4E30", 70, 45, 90, 82, 74],
    // 吕布
    [65, "\u5415\u5E03", 88, 100, 35, 40, 58],
    [66, "\u9AD8\u987A", 85, 88, 60, 60, 72],
    [67, "\u9648\u5BAB", 78, 55, 90, 80, 74],
    [68, "\u81E7\u9738", 80, 82, 55, 58, 70],
    // 董卓
    [69, "\u8463\u5353", 85, 85, 50, 45, 58],
    [70, "\u674E\u5095", 74, 78, 40, 35, 50],
    [71, "\u90ED\u6C5C", 73, 77, 38, 32, 48],
    [72, "\u534E\u96C4", 78, 90, 40, 38, 55],
    [73, "\u5F90\u8363", 82, 80, 65, 60, 68],
    [74, "\u674E\u5112", 70, 40, 88, 75, 62],
    // 刘表
    [75, "\u5218\u8868", 75, 60, 72, 80, 84],
    [76, "\u8521\u7441", 72, 70, 55, 60, 60],
    [77, "\u6587\u8058", 82, 85, 65, 65, 74],
    [78, "\u84AF\u8D8A", 65, 40, 82, 80, 72],
    [79, "\u9EC4\u7956", 72, 75, 45, 50, 58],
    // 刘璋
    [80, "\u5218\u748B", 58, 48, 58, 70, 74],
    [81, "\u5F20\u4EFB", 84, 86, 70, 68, 76],
    [82, "\u4E25\u989C", 80, 83, 60, 62, 72],
    [83, "\u6CD5\u6B63", 72, 45, 92, 88, 76],
    [84, "\u5434\u61FF", 76, 78, 60, 65, 68],
    // 张鲁
    [85, "\u5F20\u9C81", 65, 60, 68, 75, 80],
    [86, "\u5F20\u536B", 68, 72, 50, 55, 60],
    [87, "\u960E\u5703", 62, 40, 78, 76, 70],
    // 西凉
    [88, "\u9A6C\u817E", 82, 85, 55, 60, 78],
    [89, "\u97E9\u9042", 80, 80, 70, 65, 72],
    // 公孙瓒
    [90, "\u516C\u5B59\u74D2", 85, 88, 60, 60, 74],
    [91, "\u4E25\u7EB2", 72, 76, 45, 45, 60],
    // 陶谦
    [92, "\u9676\u8C26", 68, 55, 65, 75, 80],
    [93, "\u66F9\u8C79", 68, 72, 45, 48, 58],
    // 袁术
    [94, "\u8881\u672F", 76, 68, 58, 52, 72],
    [95, "\u7EAA\u7075", 78, 83, 50, 48, 62],
    // 黄巾
    [96, "\u5F20\u89D2", 82, 66, 86, 80, 92],
    [97, "\u5F20\u5B9D", 72, 70, 78, 70, 78],
    [98, "\u5F20\u6881", 74, 76, 72, 68, 76],
    [99, "\u7BA1\u4EA5", 72, 82, 35, 30, 50],
    [100, "\u6CE2\u624D", 70, 75, 45, 40, 55],
    [101, "\u5F20\u66FC\u6210", 70, 74, 48, 42, 55],
    // 汉室
    [102, "\u4F55\u8FDB", 70, 60, 55, 60, 72],
    [103, "\u7687\u752B\u5D69", 88, 85, 78, 75, 82],
    [104, "\u5362\u690D", 85, 70, 85, 85, 84],
    [105, "\u6731\u5101", 85, 80, 72, 72, 78],
    [106, "\u738B\u5141", 60, 40, 80, 85, 78]
  ];
  var GENERALS = {};
  for (const [id, name, lead, war, int, pol, cha] of RAW_GENERALS) {
    GENERALS[id] = { id, name, lead, war, int, pol, cha };
  }
  var SKILLS = {
    tuji: { id: "tuji", name: "\u7A81\u51FB", kind: "war", target: "enemy", power: 1.7, qiCost: 20, desc: "\u4EE5\u6B66\u529B\u731B\u653B\u654C\u5355\u4F53" },
    luanwu: { id: "luanwu", name: "\u4E71\u821E", kind: "war", target: "enemyAll", power: 0.95, qiCost: 30, desc: "\u653B\u51FB\u654C\u65B9\u5168\u519B" },
    huoji: { id: "huoji", name: "\u706B\u8BA1", kind: "int", target: "enemy", power: 1.6, qiCost: 20, desc: "\u4EE5\u667A\u529B\u706B\u70E7\u654C\u5355\u4F53" },
    luolei: { id: "luolei", name: "\u843D\u96F7", kind: "int", target: "enemyAll", power: 0.85, qiCost: 30, desc: "\u96F7\u51FB\u654C\u65B9\u5168\u519B" },
    hunluan: { id: "hunluan", name: "\u6DF7\u4E71", kind: "control", target: "enemy", power: 0, qiCost: 25, desc: "\u4F7F\u654C\u5355\u4F53\u4E0B\u56DE\u5408\u65E0\u6CD5\u884C\u52A8" },
    jili: { id: "jili", name: "\u6FC0\u52B1", kind: "heal", target: "ally", power: 1, qiCost: 20, desc: "\u6062\u590D\u5DF1\u65B9\u5355\u4F53\u5175\u529B" },
    shouzhen: { id: "shouzhen", name: "\u575A\u5B88", kind: "buff", target: "self", power: 0, qiCost: 15, desc: "\u81EA\u8EAB\u53D7\u5230\u4F24\u5BB3\u51CF\u534A\uFF0C\u6301\u7EED2\u56DE\u5408" }
  };
  function skillsFor(def) {
    const out = [];
    if (def.war >= 92) out.push("tuji", "luanwu");
    else if (def.war >= 82) out.push("tuji");
    if (def.int >= 94) out.push("huoji", "luolei", "hunluan");
    else if (def.int >= 86) out.push("huoji", "hunluan");
    else if (def.int >= 76) out.push("huoji");
    if (def.pol + def.cha >= 165 || def.cha >= 90) out.push("jili");
    if (def.lead >= 85) out.push("shouzhen");
    return out;
  }
  var LEVEL_MAX = 10;
  function troopCap(lead, level) {
    return 1200 + lead * 25 + level * 350;
  }
  var MILITIA_CAP = 2e3;
  var MAX_SQUADS = 5;
  var ATK_MILITIA_MAX = 1;
  var DEF_MILITIA_MAX = 2;

  // src/mapdata.ts
  var MAP_W = 44;
  var MAP_H = 30;
  var TILE = 24;
  var CITIES = [
    { id: "tianshui", name: "\u5929\u6C34", x: 6, y: 8, agri: 45, comm: 35, pop: 20 },
    { id: "changan", name: "\u957F\u5B89", x: 10, y: 10, agri: 65, comm: 70, pop: 40 },
    { id: "hanzhong", name: "\u6C49\u4E2D", x: 7, y: 15, agri: 60, comm: 40, pop: 22 },
    { id: "chengdu", name: "\u6210\u90FD", x: 4, y: 20, agri: 80, comm: 60, pop: 38 },
    { id: "luoyang", name: "\u6D1B\u9633", x: 16, y: 9, agri: 70, comm: 85, pop: 45 },
    { id: "ye", name: "\u90BA\u57CE", x: 22, y: 5, agri: 65, comm: 70, pop: 38 },
    { id: "pingyuan", name: "\u5E73\u539F", x: 27, y: 6, agri: 60, comm: 50, pop: 25 },
    { id: "beihai", name: "\u5317\u6D77", x: 32, y: 7, agri: 55, comm: 55, pop: 22 },
    { id: "xuchang", name: "\u8BB8\u660C", x: 19, y: 12, agri: 70, comm: 75, pop: 40 },
    { id: "xiaopei", name: "\u5C0F\u6C9B", x: 24, y: 10, agri: 50, comm: 45, pop: 15 },
    { id: "xiapi", name: "\u4E0B\u90B3", x: 27, y: 12, agri: 62, comm: 60, pop: 30 },
    { id: "shouchun", name: "\u5BFF\u6625", x: 23, y: 15, agri: 65, comm: 65, pop: 32 },
    { id: "xiangyang", name: "\u8944\u9633", x: 15, y: 17, agri: 68, comm: 70, pop: 35 },
    { id: "jiangxia", name: "\u6C5F\u590F", x: 20, y: 19, agri: 58, comm: 55, pop: 24 },
    { id: "jiangling", name: "\u6C5F\u9675", x: 12, y: 20, agri: 62, comm: 60, pop: 28 },
    { id: "chaisang", name: "\u67F4\u6851", x: 24, y: 21, agri: 55, comm: 58, pop: 22 },
    { id: "changsha", name: "\u957F\u6C99", x: 16, y: 24, agri: 64, comm: 50, pop: 26 },
    { id: "jianye", name: "\u5EFA\u4E1A", x: 29, y: 16, agri: 66, comm: 72, pop: 34 },
    { id: "wu", name: "\u5434\u90E1", x: 31, y: 19, agri: 68, comm: 70, pop: 30 },
    { id: "kuaiji", name: "\u4F1A\u7A3D", x: 32, y: 24, agri: 60, comm: 55, pop: 24 }
  ];
  var CITY_BY_ID = {};
  for (const c2 of CITIES) CITY_BY_ID[c2.id] = c2;
  var CITY_LINKS = {
    tianshui: ["changan", "hanzhong"],
    changan: ["tianshui", "hanzhong", "luoyang"],
    hanzhong: ["tianshui", "changan", "chengdu"],
    chengdu: ["hanzhong", "jiangling"],
    luoyang: ["changan", "ye", "xuchang"],
    ye: ["luoyang", "pingyuan", "xuchang"],
    pingyuan: ["ye", "beihai", "xiaopei"],
    beihai: ["pingyuan", "xiapi"],
    xuchang: ["luoyang", "ye", "xiaopei", "shouchun", "xiangyang"],
    xiaopei: ["pingyuan", "xuchang", "xiapi"],
    xiapi: ["xiaopei", "beihai", "shouchun"],
    shouchun: ["xiapi", "xuchang", "jianye", "jiangxia"],
    xiangyang: ["xuchang", "jiangling", "jiangxia"],
    jiangling: ["xiangyang", "chengdu", "jiangxia", "changsha"],
    jiangxia: ["xiangyang", "jiangling", "shouchun", "chaisang", "changsha"],
    chaisang: ["jiangxia", "jianye", "wu", "changsha", "kuaiji"],
    changsha: ["jiangling", "jiangxia", "chaisang"],
    jianye: ["shouchun", "wu", "chaisang"],
    wu: ["jianye", "kuaiji", "chaisang"],
    kuaiji: ["wu", "chaisang"]
  };
  function hash2(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }
  function genTerrain() {
    const t = new Array(MAP_W * MAP_H).fill(0 /* Plain */);
    for (let y = 0; y < MAP_H; y++) {
      for (let x = 0; x < MAP_W; x++) {
        const i = y * MAP_W + x;
        const h = hash2(x, y);
        if (x >= 41 || x >= 39 && y < 3) {
          t[i] = 3 /* Water */;
          continue;
        }
        const yr = 7 + Math.round(Math.sin(x * 0.35) * 1.6);
        if (x >= 9 && x <= 38 && (y === yr || h > 0.7 && y === yr + 1)) {
          t[i] = 3 /* Water */;
          continue;
        }
        const yj = 18 + Math.round(Math.sin(x * 0.3 + 2) * 1.4);
        if (x >= 8 && x <= 38 && (y === yj || h > 0.75 && y === yj - 1)) {
          t[i] = 3 /* Water */;
          continue;
        }
        if (x <= 3) {
          t[i] = h > 0.25 ? 2 /* Mountain */ : 1 /* Forest */;
          continue;
        }
        if (x <= 8 && y >= 12 && y <= 18 && h > 0.45) {
          t[i] = 2 /* Mountain */;
          continue;
        }
        if (x >= 18 && x <= 20 && y <= 7 && h > 0.4) {
          t[i] = 2 /* Mountain */;
          continue;
        }
        if (y >= 25 && h > 0.55) {
          t[i] = 2 /* Mountain */;
          continue;
        }
        if (h > 0.82) {
          t[i] = 1 /* Forest */;
          continue;
        }
      }
    }
    for (const c2 of CITIES) {
      t[c2.y * MAP_W + c2.x] = 0 /* Plain */;
    }
    return t;
  }

  // src/util.ts
  function clamp(v, lo, hi) {
    return v < lo ? lo : v > hi ? hi : v;
  }
  var RNG = class {
    constructor(seed) {
      this.s = seed >>> 0 || 1;
    }
    next() {
      let x = this.s;
      x ^= x << 13;
      x ^= x >>> 17;
      x ^= x << 5;
      this.s = x >>> 0;
      return this.s / 4294967296;
    }
    range(lo, hi) {
      return lo + this.next() * (hi - lo);
    }
    int(lo, hi) {
      return Math.floor(this.range(lo, hi + 1));
    }
    pick(arr) {
      return arr[Math.floor(this.next() * arr.length)];
    }
    chance(p) {
      return this.next() < p;
    }
  };
  var rng = new RNG((Date.now() ^ 2654435769) >>> 0);
  function fmt(n) {
    return Math.round(n).toLocaleString("zh-CN");
  }
  function esc(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // src/state.ts
  function newGame(scenarioId, playerFactionId) {
    const sc = SCENARIO_BY_ID[scenarioId];
    if (!sc) throw new Error("\u672A\u77E5\u5267\u672C: " + scenarioId);
    const factions = sc.factions.map((f) => ({
      id: f.id,
      name: f.name,
      color: f.color,
      ruler: f.ruler,
      aggression: f.aggression,
      develop: f.develop,
      alive: true
    }));
    const fidSet = new Set(factions.map((f) => f.id));
    const cities = CITIES.map((def) => {
      var _a, _b, _c, _d;
      const scCity = sc.cities.find((c2) => c2.cityId === def.id);
      const owner = scCity ? scCity.owner : null;
      if (owner && !fidSet.has(owner)) throw new Error(`\u5267\u672C ${scenarioId}: \u672A\u77E5\u52BF\u529B ${owner}`);
      const owned = !!owner;
      return {
        id: def.id,
        owner,
        gold: (_a = scCity == null ? void 0 : scCity.gold) != null ? _a : Math.round(def.comm * (owned ? 12 : 6)),
        food: (_b = scCity == null ? void 0 : scCity.food) != null ? _b : Math.round(def.agri * (owned ? 26 : 13)),
        troops: (_c = scCity == null ? void 0 : scCity.troops) != null ? _c : Math.round(def.pop * (owned ? 250 : 80)),
        agri: def.agri,
        comm: def.comm,
        wall: (_d = scCity == null ? void 0 : scCity.wall) != null ? _d : owned ? 30 : 10,
        loyalty: owned ? 70 : 50,
        train: owned ? 40 : 10,
        generals: scCity ? [...scCity.generals] : [],
        captives: [],
        acted: false
      };
    });
    const genStates = {};
    for (const c2 of cities) {
      for (const g of c2.generals) {
        if (!GENERALS[g]) throw new Error(`\u672A\u77E5\u6B66\u5C06 id ${g}`);
        const isRuler = factions.some((f) => f.ruler === g);
        genStates[g] = { loyalty: isRuler ? 100 : 68 + g % 9, level: 1, exp: 0 };
      }
    }
    return {
      scenarioId,
      year: sc.year,
      month: 1,
      playerFactionId,
      factions,
      cities,
      genStates,
      log: [`${sc.year}\u5E74\uFF0C${sc.name}\u3002`]
    };
  }
  function migrateState(state) {
    if (!state.genStates) state.genStates = {};
    const ensure = (g, loyalty) => {
      if (!state.genStates[g]) state.genStates[g] = { loyalty, level: 1, exp: 0 };
    };
    for (const c2 of state.cities) {
      if (!c2.captives) c2.captives = [];
      for (const g of c2.generals) ensure(g, 70);
      for (const cp of c2.captives) ensure(cp.genId, 50);
    }
    for (const f of state.factions) {
      const legacy = f.captives;
      if (legacy) {
        if (legacy.length > 0) {
          const home = factionCities(state, f.id)[0];
          for (const cp of legacy) {
            ensure(cp.genId, 50);
            if (home) home.captives.push(cp);
            else delete state.genStates[cp.genId];
          }
        }
        delete f.captives;
      }
    }
  }
  function cityById(state, id) {
    const c2 = state.cities.find((c3) => c3.id === id);
    if (!c2) throw new Error("\u672A\u77E5\u57CE\u6C60: " + id);
    return c2;
  }
  function factionById(state, id) {
    const f = state.factions.find((f2) => f2.id === id);
    if (!f) throw new Error("\u672A\u77E5\u52BF\u529B: " + id);
    return f;
  }
  function factionCities(state, fid) {
    return state.cities.filter((c2) => c2.owner === fid);
  }
  function neighborsOf(state, cityId) {
    return (CITY_LINKS[cityId] || []).map((id) => cityById(state, id));
  }
  function pushLog(state, msg) {
    state.log.push(msg);
    if (state.log.length > 200) state.log.splice(0, state.log.length - 200);
  }
  function nearestOwnedCity(state, fromId, fid) {
    const visited = /* @__PURE__ */ new Set([fromId]);
    let frontier = [fromId];
    while (frontier.length) {
      const next = [];
      for (const id of frontier) {
        for (const nb of CITY_LINKS[id] || []) {
          if (visited.has(nb)) continue;
          visited.add(nb);
          const c2 = cityById(state, nb);
          if (c2.owner === fid) return c2;
          next.push(nb);
        }
      }
      frontier = next;
    }
    return null;
  }
  function genLevel(state, genId) {
    var _a, _b;
    return (_b = (_a = state.genStates[genId]) == null ? void 0 : _a.level) != null ? _b : 1;
  }
  function troopCapOf(state, genId) {
    return troopCap(GENERALS[genId].lead, genLevel(state, genId));
  }
  function gainExp(state, genId, amount) {
    const gs = state.genStates[genId];
    if (!gs) return;
    gs.exp += amount;
    while (gs.exp >= 100 && gs.level < LEVEL_MAX) {
      gs.exp -= 100;
      gs.level++;
      const inPlayerCity = state.cities.some((c2) => c2.owner === state.playerFactionId && c2.generals.includes(genId));
      if (inPlayerCity) pushLog(state, `\u3010\u5347\u8FC1\u3011${GENERALS[genId].name} \u5347\u81F3 ${gs.level} \u7EA7\uFF0C\u5E26\u5175\u4E0A\u9650 ${troopCapOf(state, genId)}\uFF01`);
    }
    if (gs.level >= LEVEL_MAX) gs.exp = 0;
  }
  function splitWithCaps(total, caps) {
    const alloc = caps.map(() => 0);
    let rest = Math.max(0, Math.round(total));
    let active = caps.map((_, i) => i);
    while (rest > 0 && active.length > 0) {
      const share = Math.ceil(rest / active.length);
      const still = [];
      for (const i of active) {
        const give = Math.min(caps[i] - alloc[i], share, rest);
        if (give > 0) {
          alloc[i] += give;
          rest -= give;
        }
        if (alloc[i] < caps[i]) still.push(i);
      }
      if (still.length === active.length) break;
      active = still;
    }
    return alloc;
  }
  function attackCapacity(state, genIds) {
    const gens = genIds.slice(0, MAX_SQUADS);
    const sumCaps = gens.reduce((s, g) => s + troopCapOf(state, g), 0);
    return sumCaps + Math.min(ATK_MILITIA_MAX, MAX_SQUADS - gens.length) * MILITIA_CAP;
  }
  function buildAttackSquads(state, genIds, totalTroops) {
    const gens = genIds.slice(0, MAX_SQUADS);
    const caps = gens.map((g) => troopCapOf(state, g));
    const total = Math.min(Math.round(totalTroops), attackCapacity(state, genIds));
    const alloc = splitWithCaps(total, caps);
    const squads = [];
    gens.forEach((g, i) => {
      if (alloc[i] > 0) squads.push({ genId: g, troops: alloc[i] });
    });
    const rest = total - alloc.reduce((s, x) => s + x, 0);
    if (rest > 0) squads.push({ genId: null, troops: Math.min(rest, MILITIA_CAP) });
    return squads;
  }
  function buildMoveSquads(genIds, totalTroops) {
    const gens = genIds.slice(0, MAX_SQUADS);
    const total = Math.max(0, Math.round(totalTroops));
    if (gens.length === 0) return total > 0 ? [{ genId: null, troops: total }] : [];
    const per = Math.floor(total / gens.length);
    return gens.map((g, i) => ({
      genId: g,
      troops: per + (i === 0 ? total - per * gens.length : 0)
    }));
  }
  function bestStat(city, stat) {
    let best = 40;
    for (const g of city.generals) best = Math.max(best, GENERALS[g][stat]);
    return best;
  }
  function maxTroopsOf(city) {
    return CITY_BY_ID[city.id].pop * 1e3;
  }
  function recruitQuote(city) {
    const add = Math.min(400 + bestStat(city, "cha") * 8 + CITY_BY_ID[city.id].pop * 60, maxTroopsOf(city) - city.troops);
    return { add: Math.max(0, Math.round(add)), cost: Math.round(150 + add * 0.15) };
  }
  function validateCommand(state, cmd, fid) {
    const city = cityById(state, cmd.cityId);
    if (city.owner !== fid) return "\u8BE5\u57CE\u4E0D\u5C5E\u4E8E\u4F60";
    if (city.acted) return "\u8BE5\u57CE\u672C\u6708\u5DF2\u884C\u52A8";
    switch (cmd.type) {
      case "farm":
      case "commerce":
      case "wall":
        if (city.gold < 200) return "\u91D1\u94B1\u4E0D\u8DB3\uFF08\u9700\u8981200\uFF09";
        return null;
      case "train":
        if (city.gold < 100) return "\u91D1\u94B1\u4E0D\u8DB3\uFF08\u9700\u8981100\uFF09";
        if (city.troops < 500) return "\u5175\u529B\u592A\u5C11\uFF0C\u65E0\u6CD5\u8BAD\u7EC3";
        return null;
      case "recruit": {
        const q = recruitQuote(city);
        if (q.add <= 0) return "\u5DF2\u8FBE\u5F81\u5175\u4E0A\u9650";
        if (city.gold < q.cost) return `\u91D1\u94B1\u4E0D\u8DB3\uFF08\u9700\u8981${q.cost}\uFF09`;
        if (city.loyalty <= 35) return "\u6C11\u5FE0\u8FC7\u4F4E\uFF0C\u65E0\u4EBA\u5E94\u52DF";
        return null;
      }
      case "rest":
        return null;
      case "move": {
        const to = cityById(state, cmd.to);
        if (!(CITY_LINKS[city.id] || []).includes(cmd.to)) return "\u76EE\u6807\u57CE\u6C60\u4E0D\u76F8\u90BB";
        if (to.owner !== fid) return "\u53EA\u80FD\u8C03\u52A8\u5230\u5DF1\u65B9\u57CE\u6C60";
        if (cmd.squads.length > MAX_SQUADS) return `\u6700\u591A\u51FA\u52A8${MAX_SQUADS}\u652F\u961F\u4F0D`;
        let total = 0;
        const seen = /* @__PURE__ */ new Set();
        for (const s of cmd.squads) {
          if (s.troops < 0) return "\u5175\u529B\u4E0D\u80FD\u4E3A\u8D1F";
          if (s.genId == null && s.troops < 100) return "\u65E0\u6B66\u5C06\u961F\u4F0D\u5175\u529B\u81F3\u5C11100";
          total += s.troops;
          if (s.genId != null) {
            if (!city.generals.includes(s.genId)) return "\u6240\u9009\u6B66\u5C06\u4E0D\u5728\u57CE\u4E2D";
            if (seen.has(s.genId)) return "\u540C\u4E00\u6B66\u5C06\u53EA\u80FD\u5E26\u4E00\u652F\u961F\u4F0D";
            seen.add(s.genId);
          }
        }
        if (total > city.troops) return "\u57CE\u4E2D\u5175\u529B\u4E0D\u8DB3";
        if (cmd.gold < 0 || cmd.food < 0) return "\u6570\u91CF\u4E0D\u80FD\u4E3A\u8D1F";
        if (cmd.gold > city.gold) return "\u57CE\u4E2D\u91D1\u94B1\u4E0D\u8DB3";
        if (cmd.food > city.food) return "\u57CE\u4E2D\u7CAE\u8349\u4E0D\u8DB3";
        for (const g of cmd.captives) {
          if (!city.captives.some((cp) => cp.genId === g)) return "\u6240\u9009\u4FD8\u864F\u4E0D\u5728\u57CE\u4E2D";
        }
        if (seen.size + total + Math.floor(cmd.gold) + Math.floor(cmd.food) + cmd.captives.length === 0) return "\u6CA1\u6709\u8981\u8C03\u52A8\u7684\u5185\u5BB9";
        return null;
      }
      case "attack": {
        const to = cityById(state, cmd.to);
        if (!(CITY_LINKS[city.id] || []).includes(cmd.to)) return "\u76EE\u6807\u57CE\u6C60\u4E0D\u76F8\u90BB";
        if (cmd.squads.length === 0) return "\u81F3\u5C11\u6D3E\u51FA\u4E00\u652F\u961F\u4F0D";
        if (cmd.squads.length > MAX_SQUADS) return `\u6700\u591A\u51FA\u52A8${MAX_SQUADS}\u652F\u961F\u4F0D`;
        let total = 0;
        let militia = 0;
        const seen = /* @__PURE__ */ new Set();
        for (const s of cmd.squads) {
          if (s.troops < 100) return "\u6BCF\u961F\u5175\u529B\u81F3\u5C11100";
          total += s.troops;
          if (s.genId == null) {
            militia++;
            if (s.troops > MILITIA_CAP) return `\u6C11\u5175\u961F\u5E26\u5175\u4E0A\u9650\u4E3A${MILITIA_CAP}`;
          } else {
            if (!city.generals.includes(s.genId)) return "\u6240\u9009\u6B66\u5C06\u4E0D\u5728\u57CE\u4E2D";
            if (seen.has(s.genId)) return "\u540C\u4E00\u6B66\u5C06\u53EA\u80FD\u5E26\u4E00\u652F\u961F\u4F0D";
            seen.add(s.genId);
            if (s.troops > troopCapOf(state, s.genId)) {
              return `${GENERALS[s.genId].name} \u5E26\u5175\u4E0A\u9650\u4E3A${troopCapOf(state, s.genId)}`;
            }
          }
        }
        if (total > city.troops) return "\u57CE\u4E2D\u5175\u529B\u4E0D\u8DB3";
        if (militia > ATK_MILITIA_MAX) return `\u653B\u65B9\u6700\u591A\u51FA\u52A8${ATK_MILITIA_MAX}\u652F\u6C11\u5175\u961F`;
        if (total < 500) return "\u51FA\u5F81\u603B\u5175\u529B\u81F3\u5C11500";
        if (to.owner === fid) return "\u4E0D\u80FD\u653B\u6253\u5DF1\u65B9\u57CE\u6C60";
        return null;
      }
    }
  }
  function buildDefenseSquads(state, city) {
    const rulerId = city.owner ? factionById(state, city.owner).ruler : -1;
    const rank = (g) => GENERALS[g].lead + GENERALS[g].war + (g === rulerId ? -1e3 : 0);
    const gens = [...city.generals].sort((a, b) => rank(b) - rank(a)).slice(0, MAX_SQUADS);
    const total = Math.max(0, Math.round(city.troops));
    if (gens.length === 0) {
      const n = Math.min(DEF_MILITIA_MAX, Math.max(1, Math.ceil(total / 4e3) || 1));
      const per = Math.floor(total / n);
      const out2 = [];
      for (let i = 0; i < n; i++) out2.push({ genId: null, troops: per + (i === 0 ? total - per * n : 0) });
      return out2;
    }
    const caps = gens.map((g) => troopCapOf(state, g));
    const alloc = splitWithCaps(total, caps);
    const out = gens.map((g, i) => ({
      genId: g,
      troops: alloc[i],
      level: genLevel(state, g)
    }));
    for (const g of gens) city.generals.splice(city.generals.indexOf(g), 1);
    let rest = total - alloc.reduce((s, x) => s + x, 0);
    if (rest > 0) {
      const nMil = Math.min(DEF_MILITIA_MAX, MAX_SQUADS - gens.length);
      if (nMil > 0) {
        const per = Math.floor(rest / nMil);
        for (let i = 0; i < nMil; i++) out.push({ genId: null, troops: per + (i === 0 ? rest - per * nMil : 0) });
      } else {
        out[0].troops += rest;
      }
    }
    return out;
  }
  function executeCommand(state, cmd, fid) {
    const err = validateCommand(state, cmd, fid);
    if (err) return { ok: false, msg: err };
    const city = cityById(state, cmd.cityId);
    const fname = factionById(state, fid).name;
    switch (cmd.type) {
      case "farm": {
        city.gold -= 200;
        const gain = Math.round(3 + bestStat(city, "pol") / 10);
        city.agri = Math.min(100, city.agri + gain);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u5F00\u57A6\u519C\u4E1A +${gain}` };
      }
      case "commerce": {
        city.gold -= 200;
        const gain = Math.round(3 + bestStat(city, "pol") / 10);
        city.comm = Math.min(100, city.comm + gain);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u53D1\u5C55\u5546\u4E1A +${gain}` };
      }
      case "recruit": {
        const q = recruitQuote(city);
        city.gold -= q.cost;
        city.troops += q.add;
        city.loyalty = Math.max(20, city.loyalty - 3);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u5F81\u5175 ${q.add} \u4EBA\uFF08\u8017\u91D1 ${q.cost}\uFF09` };
      }
      case "train": {
        city.gold -= 100;
        const gain = Math.round(5 + bestStat(city, "lead") / 20);
        city.train = Math.min(100, city.train + gain);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u8BAD\u7EC3\u5EA6 +${gain}` };
      }
      case "wall": {
        city.gold -= 200;
        const gain = Math.round(5 + bestStat(city, "pol") / 20);
        city.wall = Math.min(100, city.wall + gain);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u57CE\u9632 +${gain}` };
      }
      case "rest": {
        city.loyalty = Math.min(100, city.loyalty + 3);
        city.acted = true;
        return { ok: true, msg: `${CITY_BY_ID[city.id].name} \u4F11\u517B\u5F85\u547D\uFF0C\u6C11\u5FE0\u4E0A\u5347` };
      }
      case "move": {
        const to = cityById(state, cmd.to);
        let total = 0;
        let gensMoved = 0;
        for (const s of cmd.squads) {
          total += s.troops;
          if (s.genId != null) {
            city.generals.splice(city.generals.indexOf(s.genId), 1);
            to.generals.push(s.genId);
            gensMoved++;
          }
        }
        city.troops -= total;
        to.troops += total;
        const gold = Math.floor(cmd.gold), food = Math.floor(cmd.food);
        city.gold -= gold;
        to.gold += gold;
        city.food -= food;
        to.food += food;
        for (const g of cmd.captives) {
          const i = city.captives.findIndex((cp) => cp.genId === g);
          if (i >= 0) to.captives.push(city.captives.splice(i, 1)[0]);
        }
        city.acted = true;
        const parts = [];
        if (total > 0) parts.push(`\u5175 ${total}`);
        if (gensMoved > 0) parts.push(`\u5C06 ${gensMoved}`);
        if (gold > 0) parts.push(`\u91D1 ${gold}`);
        if (food > 0) parts.push(`\u7CAE ${food}`);
        if (cmd.captives.length > 0) parts.push(`\u4FD8\u864F ${cmd.captives.length}`);
        return { ok: true, msg: `${fname}\u81EA${CITY_BY_ID[city.id].name}\u5411${CITY_BY_ID[to.id].name}\u8C03\u52A8 ${parts.join("\u3001")}` };
      }
      case "attack": {
        const to = cityById(state, cmd.to);
        const attackers = cmd.squads.map((s) => ({
          genId: s.genId,
          troops: s.troops,
          level: s.genId != null ? genLevel(state, s.genId) : void 0
        }));
        const total = cmd.squads.reduce((s, x) => s + x.troops, 0);
        city.troops -= total;
        for (const s of cmd.squads) {
          if (s.genId != null) city.generals.splice(city.generals.indexOf(s.genId), 1);
        }
        const defenders = buildDefenseSquads(state, to);
        to.troops = 0;
        city.acted = true;
        return {
          ok: true,
          msg: `${fname} \u51FA\u5175\u653B\u6253${CITY_BY_ID[to.id].name}\uFF01`,
          battle: {
            fromCityId: city.id,
            toCityId: to.id,
            attackerFactionId: fid,
            defenderFactionId: to.owner,
            attackers,
            defenders,
            wallBonus: Math.min(0.35, 0.1 + to.wall / 250),
            atkTrain: city.train,
            defTrain: to.train,
            // 守方没有其他己方城可退时背水一战
            defCanRetreat: to.owner ? nearestOwnedCity(state, to.id, to.owner) != null : false
          }
        };
      }
    }
  }
  function captureChance(genId) {
    const g = GENERALS[genId];
    return clamp(0.8 - (g.lead + g.war) / 400, 0.25, 0.75);
  }
  function recruitChance(state, fid, cp) {
    var _a, _b;
    const f = factionById(state, fid);
    const g = GENERALS[cp.genId];
    const gs = state.genStates[cp.genId];
    if (!gs) return 0;
    const fromF = cp.from ? state.factions.find((x) => x.id === cp.from && x.alive) : null;
    if (fromF && fromF.ruler === cp.genId) return 0;
    const rulerCha = (_b = (_a = GENERALS[f.ruler]) == null ? void 0 : _a.cha) != null ? _b : 60;
    let p = 0.78 - gs.loyalty * 6e-3 + (rulerCha - g.cha) * 2e-3;
    if (!fromF) p += 0.2;
    return clamp(p, 0.05, 0.95);
  }
  function collapseFaction(state, fid, winnerFid) {
    const f = state.factions.find((x) => x.id === fid && x.alive);
    if (!f || fid === winnerFid) return;
    f.alive = false;
    const winName = winnerFid ? factionById(state, winnerFid).name : null;
    for (const c2 of factionCities(state, fid)) {
      c2.owner = winnerFid;
      if (winnerFid) {
        c2.captives = c2.captives.filter((cp) => {
          if (cp.from === winnerFid) {
            c2.generals.push(cp.genId);
            return false;
          }
          return true;
        });
        for (const g of c2.generals) {
          const gs = state.genStates[g];
          if (gs) gs.loyalty = 55;
        }
      }
    }
    if (winName) {
      pushLog(state, `\u3010\u53D8\u5929\u3011${f.name} \u541B\u4E3B\u6709\u5931\uFF0C\u4E3E\u65CF\u5F52\u9644 ${winName}\uFF0C${f.name} \u52BF\u529B\u706D\u4EA1\uFF01`);
    } else {
      pushLog(state, `\u3010\u8BA3\u544A\u3011${f.name} \u541B\u4E3B\u6709\u5931\uFF0C\u52BF\u529B\u571F\u5D29\u74E6\u89E3\u2026\u2026`);
    }
  }
  function captiveAction(state, fid, cityId, genId, action) {
    var _a, _b;
    const f = factionById(state, fid);
    const city = cityById(state, cityId);
    if (city.owner !== fid) return { ok: false, msg: "\u8BE5\u57CE\u4E0D\u5C5E\u4E8E\u4F60" };
    const idx = city.captives.findIndex((c2) => c2.genId === genId);
    if (idx < 0) return { ok: false, msg: "\u8BE5\u4FD8\u864F\u5DF2\u4E0D\u5728\u62BC" };
    const cp = city.captives[idx];
    const g = GENERALS[genId];
    const gs = state.genStates[genId];
    if (action === "recruit") {
      if (cp.tried) return { ok: false, msg: "\u672C\u6708\u5DF2\u529D\u964D\u8FC7\uFF0C\u4E0B\u6708\u518D\u8BD5" };
      if (recruitChance(state, fid, cp) <= 0) {
        return { ok: false, msg: `${g.name} \u662F\u654C\u52BF\u529B\u541B\u4E3B\uFF0C\u5B81\u6B7B\u4E0D\u964D` };
      }
      if (rng.chance(recruitChance(state, fid, cp))) {
        city.captives.splice(idx, 1);
        city.generals.push(genId);
        gs.loyalty = 55 + Math.round(((_b = (_a = GENERALS[f.ruler]) == null ? void 0 : _a.cha) != null ? _b : 60) / 5);
        pushLog(state, `\u3010\u62DB\u964D\u3011${g.name} \u5F52\u987A\u4E86 ${f.name}\uFF01`);
        return { ok: true, msg: `${g.name} \u5FC3\u60A6\u8BDA\u670D\uFF0C\u5F52\u987A\u6211\u519B\uFF01` };
      }
      cp.tried = true;
      gs.loyalty = Math.max(5, gs.loyalty - 4);
      pushLog(state, `${g.name} \u62D2\u7EDD\u4E86 ${f.name} \u7684\u62DB\u964D\u3002`);
      return { ok: false, msg: `${g.name} \u62D2\u7EDD\u6295\u964D\u3002\uFF08\u5176\u5FC3\u5FD7\u5DF2\u52A8\u6447\uFF0C\u4E0B\u6708\u53EF\u518D\u8BD5\uFF09` };
    }
    if (action === "release") {
      const fromF2 = cp.from ? state.factions.find((x) => x.id === cp.from && x.alive) : null;
      const home = fromF2 ? factionCities(state, fromF2.id)[0] : null;
      if (!home) {
        return { ok: false, msg: `${g.name} \u6545\u4E3B\u5DF2\u4EA1\uFF0C\u65E0\u5904\u53EF\u53BB\uFF0C\u65E0\u6CD5\u91CA\u653E\u3002\uFF08\u53EF\u62DB\u964D\u6216\u65A9\u9996\uFF09` };
      }
      city.captives.splice(idx, 1);
      home.generals.push(genId);
      gs.loyalty = Math.min(100, gs.loyalty + 10);
      pushLog(state, `${f.name} \u91CA\u653E\u4E86 ${g.name}\uFF0C\u5176\u56DE\u5230 ${fromF2.name}\u3002`);
      return { ok: true, msg: `${g.name} \u88AB\u91CA\u653E\uFF0C\u56DE\u5230\u4E86\u6545\u4E3B\u5904\u3002` };
    }
    city.captives.splice(idx, 1);
    delete state.genStates[genId];
    pushLog(state, `\u3010\u65A9\u9996\u3011${f.name} \u5904\u6B7B\u4E86 ${g.name}\uFF01`);
    const fromF = cp.from ? state.factions.find((x) => x.id === cp.from && x.alive) : null;
    if (fromF) {
      if (fromF.ruler === genId) {
        collapseFaction(state, fromF.id, fid);
      } else {
        for (const c2 of factionCities(state, fromF.id)) {
          for (const gid of c2.generals) {
            const s2 = state.genStates[gid];
            if (s2) s2.loyalty = Math.min(100, s2.loyalty + 8);
          }
        }
      }
    }
    return { ok: true, msg: `${g.name} \u5DF2\u88AB\u5904\u51B3\u3002` };
  }
  function applyBattleResult(state, setup, result) {
    const from = cityById(state, setup.fromCityId);
    const to = cityById(state, setup.toCityId);
    const atkF = factionById(state, setup.attackerFactionId);
    const toName = CITY_BY_ID[to.id].name;
    const captures = [];
    const winSide = result.winner;
    const loseSide = winSide === "atk" ? "def" : "atk";
    const winFid = winSide === "atk" ? setup.attackerFactionId : setup.defenderFactionId;
    const loseFid = loseSide === "atk" ? setup.attackerFactionId : setup.defenderFactionId;
    const winF = winFid ? factionById(state, winFid) : null;
    for (const side of ["atk", "def"]) {
      for (const u of result.survivors[side]) {
        if (u.genId == null) continue;
        gainExp(state, u.genId, 10 + u.kills * 25 + (side === winSide ? 15 : 0));
      }
    }
    const destroyedOf = (side) => {
      const units = side === "atk" ? setup.attackers : setup.defenders;
      const aliveIds = new Set(result.survivors[side].map((u) => u.genId));
      return units.filter((u) => u.genId != null && !aliveIds.has(u.genId)).map((u) => u.genId);
    };
    for (const g of destroyedOf(winSide)) {
      const home = winSide === "atk" ? from : to;
      home.generals.push(g);
    }
    for (const g of destroyedOf(loseSide)) {
      to.captives.push({ genId: g, from: loseFid, tried: false });
      captures.push(g);
      pushLog(state, `\u3010\u4FD8\u864F\u3011${GENERALS[g].name} \u88AB ${winF ? winF.name : "\u5B88\u57CE\u6C11\u5175"} \u64D2\u83B7\uFF01`);
    }
    if (result.winner === "atk") {
      const defFid = setup.defenderFactionId;
      for (const u of result.survivors.def) {
        if (u.genId == null) continue;
        const refuge = defFid ? nearestOwnedCity(state, to.id, defFid) : null;
        if (refuge) {
          refuge.generals.push(u.genId);
        } else {
          to.captives.push({ genId: u.genId, from: defFid, tried: false });
          captures.push(u.genId);
          pushLog(state, `\u3010\u4FD8\u864F\u3011${GENERALS[u.genId].name} \u65E0\u8DEF\u53EF\u9000\uFF0C\u88AB ${atkF.name} \u64D2\u83B7\uFF01`);
        }
      }
      for (const g of [...to.generals]) {
        const refuge = defFid ? nearestOwnedCity(state, to.id, defFid) : null;
        if (refuge && !rng.chance(captureChance(g) * 0.6)) {
          refuge.generals.push(g);
        } else {
          to.captives.push({ genId: g, from: defFid, tried: false });
          captures.push(g);
          pushLog(state, `\u3010\u4FD8\u864F\u3011${GENERALS[g].name} \u5728\u57CE\u7834\u65F6\u88AB ${atkF.name} \u64D2\u83B7\uFF01`);
        }
      }
      to.generals = [];
      to.owner = setup.attackerFactionId;
      to.troops = Math.round(result.survivors.atk.reduce((s, u) => s + u.troops, 0));
      for (const u of result.survivors.atk) if (u.genId != null) to.generals.push(u.genId);
      const rescued = [];
      to.captives = to.captives.filter((cp) => {
        if (cp.from === setup.attackerFactionId) {
          rescued.push(cp.genId);
          return false;
        }
        return true;
      });
      for (const g of rescued) {
        to.generals.push(g);
        pushLog(state, `\u3010\u8425\u6551\u3011${GENERALS[g].name} \u83B7\u6551\u5F52\u961F\uFF01`);
      }
      to.wall = Math.max(5, to.wall - 20);
      to.loyalty = 55;
      to.acted = true;
      pushLog(state, `\u3010\u6218\u62A5\u3011${atkF.name} \u653B\u5360\u4E86${toName}\uFF01`);
    } else {
      for (const u of result.survivors.def) if (u.genId != null) to.generals.push(u.genId);
      to.troops += Math.round(result.survivors.def.reduce((s, u) => s + u.troops, 0));
      from.troops += Math.round(result.survivors.atk.reduce((s, u) => s + u.troops, 0));
      for (const u of result.survivors.atk) if (u.genId != null) from.generals.push(u.genId);
      to.wall = Math.max(5, to.wall - 8);
      pushLog(state, `\u3010\u6218\u62A5\u3011${toName} \u5B88\u4F4F\u4E86${atkF.name}\u7684\u8FDB\u653B\uFF01`);
    }
    for (const g of captures) {
      const rf = state.factions.find((x) => x.alive && x.ruler === g);
      if (rf) collapseFaction(state, rf.id, winFid);
    }
    for (const f of state.factions) {
      if (!f.alive) continue;
      if (factionCities(state, f.id).length === 0) {
        f.alive = false;
        pushLog(state, `\u3010\u8BA3\u544A\u3011${f.name} \u52BF\u529B\u706D\u4EA1\u4E86\u2026\u2026`);
      }
    }
    return captures;
  }
  function settleMonth(state) {
    for (const c2 of state.cities) {
      if (!c2.owner) continue;
      const ruler = factionById(state, c2.owner).ruler;
      const loyalFactor = 0.5 + c2.loyalty / 200;
      c2.gold += Math.round(c2.comm * 3.5 * loyalFactor - c2.troops * 5e-3);
      if (state.month === 9) c2.food += Math.round(c2.agri * 24 * loyalFactor);
      c2.food -= Math.round(c2.troops * 0.015);
      if (c2.food < 0) {
        c2.food = 0;
        c2.troops = Math.round(c2.troops * 0.95);
        c2.loyalty = Math.max(20, c2.loyalty - 3);
      } else {
        c2.loyalty = Math.min(90, c2.loyalty + 2);
      }
      for (const g of c2.generals) {
        const gs = state.genStates[g];
        if (!gs) continue;
        if (g === ruler) {
          gs.loyalty = 100;
          continue;
        }
        if (c2.loyalty >= 70) gs.loyalty = Math.min(95, gs.loyalty + 1);
        else if (c2.loyalty <= 35) gs.loyalty = Math.max(5, gs.loyalty - 1);
      }
      c2.train = Math.max(10, c2.train - 1);
      for (const cp of c2.captives) {
        cp.tried = false;
        const gs = state.genStates[cp.genId];
        if (gs) gs.loyalty = Math.max(5, gs.loyalty - 2);
      }
      c2.acted = false;
    }
    state.month++;
    if (state.month > 12) {
      state.month = 1;
      state.year++;
    }
    const alive = state.factions.filter((f) => f.alive);
    const player = factionById(state, state.playerFactionId);
    if (!player.alive) return { gameOver: true, playerWon: false };
    if (alive.length === 1 && alive[0].id === state.playerFactionId) return { gameOver: true, playerWon: true };
    if (state.year > 280) return { gameOver: true, playerWon: false };
    return { gameOver: false, playerWon: false };
  }

  // src/battle.ts
  var uidSeq = 1;
  function makeUnit(input, side, trainMult) {
    var _a;
    const def = input.genId != null ? GENERALS[input.genId] : null;
    const level = def ? Math.max(1, (_a = input.level) != null ? _a : 1) : 0;
    const statBonus = def ? Math.floor((level - 1) * 0.5) : 0;
    return {
      uid: "u" + uidSeq++,
      side,
      genId: input.genId,
      name: def ? def.name : "\u6C11\u5175\u961F",
      lead: def ? def.lead + statBonus : 50,
      war: def ? def.war + statBonus : 50,
      int: def ? def.int + statBonus : 40,
      level,
      kills: 0,
      troops: Math.max(1, Math.round(input.troops)),
      maxTroops: Math.max(1, Math.round(input.troops)),
      qi: 50,
      skills: def ? skillsFor(def) : [],
      confused: 0,
      guarding: false,
      ironWall: 0,
      trainMult,
      alive: true,
      retreated: false
    };
  }
  function createBattle(setup) {
    const atkMult = 0.9 + setup.atkTrain / 500;
    const defMult = 0.9 + setup.defTrain / 500;
    const units = [
      ...setup.attackers.map((u) => makeUnit(u, "atk", atkMult)),
      ...setup.defenders.map((u) => makeUnit(u, "def", defMult))
    ];
    const b = {
      units,
      order: [],
      turnIdx: 0,
      round: 0,
      over: false,
      winner: null,
      wallBonus: setup.wallBonus,
      defCanRetreat: setup.defCanRetreat,
      atkFactionId: setup.attackerFactionId,
      defFactionId: setup.defenderFactionId
    };
    newRound(b);
    return b;
  }
  function newRound(b) {
    b.round++;
    for (const u of b.units) {
      u.guarding = false;
      if (u.ironWall > 0) u.ironWall--;
    }
    const alive = b.units.filter((u) => u.alive && !u.retreated);
    alive.sort((x, y) => y.lead * 0.6 + y.war * 0.4 + rng.range(0, 12) - (x.lead * 0.6 + x.war * 0.4 + rng.range(0, 12)));
    b.order = alive.map((u) => u.uid);
    b.turnIdx = 0;
  }
  function unitOf(b, uid) {
    const u = b.units.find((u2) => u2.uid === uid);
    if (!u) throw new Error("bad uid " + uid);
    return u;
  }
  function enemiesOf(b, side) {
    return b.units.filter((u) => u.side !== side && u.alive && !u.retreated);
  }
  function alliesOf(b, side) {
    return b.units.filter((u) => u.side === side && u.alive && !u.retreated);
  }
  function currentUnit(b, events) {
    while (!b.over) {
      if (b.turnIdx >= b.order.length) newRound(b);
      const u = unitOf(b, b.order[b.turnIdx]);
      if (!u.alive || u.retreated) {
        b.turnIdx++;
        continue;
      }
      if (u.confused > 0) {
        u.confused--;
        b.turnIdx++;
        events.push({ msg: `${u.name} \u5904\u4E8E\u6DF7\u4E71\u4E2D\uFF0C\u65E0\u6CD5\u884C\u52A8\uFF01`, uid: u.uid, kind: "status" });
        continue;
      }
      return u;
    }
    return null;
  }
  function physDmg(b, a, d, mult) {
    const warEdge = 1 + (a.war - d.war) / 250;
    let dmg = a.troops * 0.105 * (0.6 + a.war / 120) * mult * warEdge * a.trainMult;
    dmg *= 1 - Math.min(0.3, d.lead * 3e-3);
    if (d.side === "def") dmg *= 1 - b.wallBonus;
    if (d.guarding || d.ironWall > 0) dmg *= 0.5;
    dmg *= rng.range(0.9, 1.1);
    return Math.max(20, Math.round(dmg));
  }
  function intDmg(b, a, d, mult) {
    const intEdge = 1 + (a.int - d.int) / 250;
    let dmg = a.troops * 0.09 * (0.6 + a.int / 120) * mult * intEdge * a.trainMult;
    dmg *= 1 - Math.min(0.3, d.int * 3e-3);
    if (d.side === "def") dmg *= 1 - b.wallBonus;
    if (d.guarding || d.ironWall > 0) dmg *= 0.5;
    dmg *= rng.range(0.9, 1.1);
    return Math.max(20, Math.round(dmg));
  }
  function hurt(u, dmg) {
    u.troops -= dmg;
    u.qi = Math.min(100, u.qi + 5);
    if (u.troops <= 0) {
      u.troops = 0;
      u.alive = false;
    }
  }
  function checkEnd(b, events) {
    const atkLeft = enemiesOf(b, "def").length;
    const defLeft = enemiesOf(b, "atk").length;
    if (atkLeft === 0 || defLeft === 0) {
      b.over = true;
      b.winner = defLeft === 0 ? "atk" : "def";
      events.push({
        msg: b.winner === "atk" ? "\u653B\u65B9\u53D6\u5F97\u4E86\u80DC\u5229\uFF01" : "\u5B88\u65B9\u51FB\u9000\u4E86\u8FDB\u653B\uFF01",
        kind: "end"
      });
    }
  }
  function applyAction(b, uid, act) {
    const events = [];
    if (b.over) return events;
    const u = unitOf(b, uid);
    u.qi = Math.min(100, u.qi + 10);
    if (act.type === "defend") {
      u.guarding = true;
      events.push({ msg: `${u.name} \u6446\u51FA\u9632\u5FA1\u59FF\u6001\u3002`, uid, kind: "info" });
    } else if (act.type === "retreat") {
      u.retreated = true;
      events.push({ msg: `${u.name} \u7387\u519B\u64A4\u9000\uFF01`, uid, kind: "retreat" });
    } else if (act.type === "attack") {
      const t = unitOf(b, act.target);
      const dmg = physDmg(b, u, t, 1);
      hurt(t, dmg);
      if (!t.alive) u.kills++;
      events.push({ msg: `${u.name} \u653B\u51FB ${t.name}\uFF0C\u6740\u4F24 ${dmg} \u4EBA\uFF01`, uid, target: t.uid, dmg, kind: "attack" });
      if (!t.alive) events.push({ msg: `${t.name} \u7684\u90E8\u961F\u88AB\u6B7C\u706D\u4E86\uFF01`, target: t.uid, kind: "info" });
    } else if (act.type === "skill") {
      const sk = SKILLS[act.skillId];
      if (!sk || u.qi < sk.qiCost) {
        events.push({ msg: `${u.name} \u6C14\u529B\u4E0D\u8DB3\uFF0C\u6218\u6CD5\u5931\u8D25\uFF01`, uid, kind: "info" });
      } else {
        u.qi -= sk.qiCost;
        if (sk.kind === "war" || sk.kind === "int") {
          const targets = sk.target === "enemyAll" ? enemiesOf(b, u.side) : [unitOf(b, act.target)];
          for (const t of targets) {
            const dmg = sk.kind === "war" ? physDmg(b, u, t, sk.power) : intDmg(b, u, t, sk.power);
            hurt(t, dmg);
            if (!t.alive) u.kills++;
            events.push({ msg: `${u.name} \u65BD\u5C55\u3010${sk.name}\u3011\uFF0C${t.name} \u635F\u5931 ${dmg} \u4EBA\uFF01`, uid, target: t.uid, dmg, kind: "skill" });
            if (!t.alive) events.push({ msg: `${t.name} \u7684\u90E8\u961F\u88AB\u6B7C\u706D\u4E86\uFF01`, target: t.uid, kind: "info" });
          }
        } else if (sk.kind === "heal") {
          const t = unitOf(b, act.target);
          const healAmt = Math.round(200 + t.maxTroops * 0.08 * (u.int / 100) + u.int * 2);
          t.troops = Math.min(t.maxTroops, t.troops + healAmt);
          events.push({ msg: `${u.name} \u65BD\u5C55\u3010\u6FC0\u52B1\u3011\uFF0C${t.name} \u6062\u590D\u5175\u529B ${healAmt}\uFF01`, uid, target: t.uid, dmg: -healAmt, kind: "heal" });
        } else if (sk.kind === "control") {
          const t = unitOf(b, act.target);
          const p = Math.min(0.9, Math.max(0.15, 0.55 + (u.int - t.int) / 120));
          if (rng.chance(p)) {
            t.confused = 1;
            events.push({ msg: `${u.name} \u65BD\u5C55\u3010\u6DF7\u4E71\u3011\uFF0C${t.name} \u4E2D\u8BA1\u4E86\uFF01`, uid, target: t.uid, kind: "status" });
          } else {
            events.push({ msg: `${u.name} \u65BD\u5C55\u3010\u6DF7\u4E71\u3011\uFF0C\u4F46\u88AB ${t.name} \u8BC6\u7834\u4E86\uFF01`, uid, target: t.uid, kind: "status" });
          }
        } else if (sk.kind === "buff") {
          u.ironWall = 2;
          events.push({ msg: `${u.name} \u65BD\u5C55\u3010\u575A\u5B88\u3011\uFF0C\u5168\u519B\u56FA\u5B88\uFF01`, uid, kind: "status" });
        }
      }
    }
    b.turnIdx++;
    checkEnd(b, events);
    return events;
  }
  function aiChooseAction(b, u) {
    const enemies = enemiesOf(b, u.side);
    const allies = alliesOf(b, u.side);
    const weakest = [...enemies].sort((a, b2) => a.troops - b2.troops)[0];
    if (u.troops < u.maxTroops * 0.18 && rng.chance(0.35) && (u.side === "atk" || b.defCanRetreat)) {
      return { type: "retreat" };
    }
    const healSkill = u.skills.find((s) => SKILLS[s].kind === "heal");
    if (healSkill && u.qi >= SKILLS[healSkill].qiCost) {
      const hurtAlly = [...allies].sort((a, b2) => a.troops / a.maxTroops - b2.troops / b2.maxTroops)[0];
      if (hurtAlly && hurtAlly.troops < hurtAlly.maxTroops * 0.55) {
        return { type: "skill", skillId: healSkill, target: hurtAlly.uid };
      }
    }
    const confuseSkill = u.skills.find((s) => SKILLS[s].kind === "control");
    if (confuseSkill && u.qi >= SKILLS[confuseSkill].qiCost && rng.chance(0.5)) {
      const strongest = [...enemies].sort((a, b2) => b2.troops - a.troops)[0];
      if (strongest && strongest.confused === 0) return { type: "skill", skillId: confuseSkill, target: strongest.uid };
    }
    const aoeSkill = u.skills.find((s) => SKILLS[s].target === "enemyAll" && (SKILLS[s].kind === "war" || SKILLS[s].kind === "int"));
    if (aoeSkill && u.qi >= SKILLS[aoeSkill].qiCost && enemies.length >= 3) {
      return { type: "skill", skillId: aoeSkill, target: weakest.uid };
    }
    const single = u.skills.find((s) => SKILLS[s].target === "enemy" && (SKILLS[s].kind === "war" || SKILLS[s].kind === "int"));
    if (single && u.qi >= SKILLS[single].qiCost) {
      return { type: "skill", skillId: single, target: weakest.uid };
    }
    return { type: "attack", target: weakest.uid };
  }
  function autoRunBattle(b, maxRounds = 60) {
    const events = [];
    while (!b.over && b.round <= maxRounds) {
      const u = currentUnit(b, events);
      if (!u) break;
      applyAction(b, u.uid, aiChooseAction(b, u));
    }
    if (!b.over) {
      b.over = true;
      b.winner = "def";
    }
    return extractResult(b);
  }
  function extractResult(b) {
    var _a;
    const collectAll = (side) => b.units.filter((u) => u.side === side && u.alive).map((u) => ({ genId: u.genId, troops: u.troops, kills: u.kills }));
    return {
      winner: (_a = b.winner) != null ? _a : "def",
      survivors: { atk: collectAll("atk"), def: collectAll("def") }
    };
  }

  // src/ai.ts
  function genCombatRank(id) {
    const g = GENERALS[id];
    return g.lead + g.war;
  }
  function planTurn(state, fid) {
    const f = factionById(state, fid);
    const cmds = [];
    const myCities = factionCities(state, fid).filter((c2) => !c2.acted);
    if (myCities.length === 0) return cmds;
    const frontier = /* @__PURE__ */ new Set();
    for (const c2 of myCities) {
      if (neighborsOf(state, c2.id).some((n) => n.owner !== fid)) frontier.add(c2.id);
    }
    const plans = [];
    for (const c2 of myCities) {
      if (!frontier.has(c2.id) || c2.generals.length === 0) continue;
      const enemies = neighborsOf(state, c2.id).filter((n) => n.owner !== fid);
      for (const e of enemies) {
        const defPower = e.troops * (1 + e.wall / 150) * (e.generals.length > 0 ? 1.1 : 0.65);
        const otherThreat = neighborsOf(state, c2.id).filter((n) => n.owner !== fid && n.id !== e.id).reduce((m, n) => Math.max(m, n.troops * 0.5), 0);
        const leave = Math.max(800, otherThreat);
        const avail = c2.troops - leave;
        if (avail < 2e3) continue;
        const ratio = avail / Math.max(1, defPower);
        const threshold = 1.15 - f.aggression * 0.35;
        if (ratio > threshold) {
          const pool = [...c2.generals].sort((a, b) => genCombatRank(b) - genCombatRank(a));
          const nonRuler = pool.filter((g) => g !== f.ruler);
          const gens = (nonRuler.length > 0 ? nonRuler : pool).slice(0, 5);
          plans.push({ from: c2, to: e, score: ratio * rng.range(0.9, 1.15), generals: gens, troops: Math.min(avail, 2e4), ratio });
        }
      }
    }
    plans.sort((a, b) => b.score - a.score);
    let attacksLeft = 1 + Math.round(f.aggression * 2);
    const busySrc = /* @__PURE__ */ new Set();
    const busyTgt = /* @__PURE__ */ new Set();
    for (const p of plans) {
      if (attacksLeft <= 0) break;
      if (busySrc.has(p.from.id) || busyTgt.has(p.to.id)) continue;
      const squads = buildAttackSquads(state, p.generals, Math.floor(p.troops));
      if (squads.length === 0) continue;
      cmds.push({
        cmd: { type: "attack", cityId: p.from.id, to: p.to.id, squads },
        note: `\u5175\u529B ${Math.round(p.ratio * 10) / 10} \u500D\u4E8E ${CITY_BY_ID[p.to.id].name} \u5B88\u519B\uFF0C\u5175\u53D1 ${CITY_BY_ID[p.to.id].name}\uFF01`
      });
      busySrc.add(p.from.id);
      busyTgt.add(p.to.id);
      attacksLeft--;
    }
    for (const c2 of myCities) {
      if (busySrc.has(c2.id)) continue;
      const isFront = frontier.has(c2.id);
      const name = CITY_BY_ID[c2.id].name;
      if (isFront) {
        const threatened = neighborsOf(state, c2.id).some((n) => n.owner !== fid && n.troops > c2.troops * 1.2);
        if (threatened) {
          if (c2.troops < maxTroopsOf(c2) && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
            cmds.push({ cmd: { type: "recruit", cityId: c2.id }, note: `${name} \u544A\u6025\uFF0C\u7D27\u6025\u5F81\u5175\u5907\u6218` });
            continue;
          }
          if (c2.wall < 85 && c2.gold >= 200) {
            cmds.push({ cmd: { type: "wall", cityId: c2.id }, note: `${name} \u544A\u6025\uFF0C\u52A0\u56FA\u57CE\u9632` });
            continue;
          }
          cmds.push({ cmd: { type: "rest", cityId: c2.id } });
          continue;
        }
        if (c2.troops < maxTroopsOf(c2) * 0.8 && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
          cmds.push({ cmd: { type: "recruit", cityId: c2.id }, note: `${name} \u6269\u519B\u5907\u6218` });
          continue;
        }
        if (c2.train < 70 && c2.troops >= 3e3 && c2.gold >= 100) {
          cmds.push({ cmd: { type: "train", cityId: c2.id }, note: `${name} \u64CD\u7EC3\u58EB\u5352` });
          continue;
        }
        if (c2.wall < 60 && c2.gold >= 200) {
          cmds.push({ cmd: { type: "wall", cityId: c2.id }, note: `${name} \u52A0\u56FA\u57CE\u9632` });
          continue;
        }
        if (c2.gold >= 200 && (c2.agri < 90 || c2.comm < 90)) {
          cmds.push(c2.agri <= c2.comm ? { cmd: { type: "farm", cityId: c2.id }, note: `${name} \u5F00\u57A6\u519C\u4E1A` } : { cmd: { type: "commerce", cityId: c2.id }, note: `${name} \u53D1\u5C55\u5546\u4E1A` });
          continue;
        }
        cmds.push({ cmd: { type: "rest", cityId: c2.id } });
        continue;
      }
      const selfNeed = c2.troops * 0.2;
      if (c2.food > selfNeed + 2e3) {
        const hungry = neighborsOf(state, c2.id).filter((n) => n.owner === fid && n.food < n.troops * 0.1 + 500).sort((a, b) => a.food / (a.troops + 1) - b.food / (b.troops + 1))[0];
        if (hungry) {
          const amount = Math.min(
            Math.floor(c2.food - selfNeed),
            Math.floor(hungry.troops * 0.2 + 1500 - hungry.food)
          );
          if (amount > 800) {
            cmds.push({
              cmd: { type: "move", cityId: c2.id, to: hungry.id, squads: [], gold: 0, food: amount, captives: [] },
              note: `${CITY_BY_ID[hungry.id].name} \u7F3A\u7CAE\uFF0C\u81EA ${name} \u8C03\u7CAE ${amount} \u6551\u6D4E`
            });
            continue;
          }
        }
      }
      const fwd = neighborsOf(state, c2.id).find((n) => n.owner === fid && frontier.has(n.id));
      if (fwd && c2.generals.length > 0 && c2.troops > 5e3 && rng.chance(0.5 + f.aggression * 0.3)) {
        const gens = [...c2.generals].sort((a, b) => genCombatRank(b) - genCombatRank(a)).slice(0, 2);
        const t = Math.floor(c2.troops * 0.4);
        if (t >= 500) {
          const squads = buildMoveSquads(gens, t);
          if (squads.length > 0) {
            cmds.push({
              cmd: { type: "move", cityId: c2.id, to: fwd.id, squads, gold: 0, food: 0, captives: [] },
              note: `\u81EA ${name} \u5411 ${CITY_BY_ID[fwd.id].name} \u524D\u7EBF\u8F93\u9001\u5175\u5458 ${t}`
            });
            continue;
          }
        }
      }
      if (c2.gold >= 200 && f.develop > 0.3) {
        if (c2.agri <= c2.comm && c2.agri < 95) {
          cmds.push({ cmd: { type: "farm", cityId: c2.id }, note: `${name} \u5F00\u57A6\u519C\u4E1A` });
          continue;
        }
        if (c2.comm < 95) {
          cmds.push({ cmd: { type: "commerce", cityId: c2.id }, note: `${name} \u53D1\u5C55\u5546\u4E1A` });
          continue;
        }
      }
      if (c2.troops < maxTroopsOf(c2) * 0.7 && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
        cmds.push({ cmd: { type: "recruit", cityId: c2.id }, note: `${name} \u6269\u519B\u5907\u6218` });
        continue;
      }
      cmds.push({ cmd: { type: "rest", cityId: c2.id } });
    }
    return cmds;
  }
  function aiResolveCaptives(state, fid) {
    var _a, _b;
    const f = factionById(state, fid);
    for (const city of factionCities(state, fid)) {
      for (const cp of [...city.captives]) {
        if (cp.tried) continue;
        const loyalty = (_b = (_a = state.genStates[cp.genId]) == null ? void 0 : _a.loyalty) != null ? _b : 50;
        const p = recruitChance(state, fid, cp);
        if (p >= 0.3) {
          captiveAction(state, fid, city.id, cp.genId, "recruit");
          continue;
        }
        if (loyalty <= 12) {
          captiveAction(state, fid, city.id, cp.genId, "release");
          continue;
        }
        if (f.aggression > 0.85 && loyalty < 30 && rng.chance(0.3)) {
          captiveAction(state, fid, city.id, cp.genId, "execute");
        }
      }
    }
  }

  // src/llmAi.ts
  var STORAGE_KEY = "sanguo-llm-config";
  function loadLLMConfig() {
    const def = { enabled: false, endpoint: "", apiKey: "", model: "" };
    try {
      if (typeof localStorage === "undefined") return def;
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return def;
      return { ...def, ...JSON.parse(raw) };
    } catch {
      return def;
    }
  }
  function saveLLMConfig(cfg) {
    try {
      if (typeof localStorage === "undefined") return;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cfg));
    } catch {
    }
  }
  function buildPrompt(state, fid) {
    const f = factionById(state, fid);
    const myCities = factionCities(state, fid);
    const lines = [];
    lines.push(`\u4F60\u6B63\u5728\u6E38\u73A9\u4E00\u6B3E\u4E09\u56FD\u7B56\u7565\u6E38\u620F\uFF0C\u73B0\u5728\u626E\u6F14\u3010${f.name}\u3011\u52BF\u529B\uFF0C\u4E3A${state.year}\u5E74${state.month}\u6708\u505A\u51FA\u51B3\u7B56\u3002`);
    lines.push(`\u4F60\u7684\u6027\u683C\uFF1A\u597D\u6218\u7A0B\u5EA6 ${Math.round(f.aggression * 100)}%\uFF0C\u7ECF\u8425\u503E\u5411 ${Math.round(f.develop * 100)}%\u3002`);
    lines.push("");
    lines.push("\u3010\u6211\u65B9\u57CE\u6C60\u3011");
    for (const c2 of myCities) {
      const def = CITY_BY_ID[c2.id];
      const gens = c2.generals.map((g) => GENERALS[g].name).join("\u3001") || "\u65E0";
      const nb = neighborsOf(state, c2.id).map((n) => {
        const ndef = CITY_BY_ID[n.id];
        const owner = n.owner ? factionById(state, n.owner).name : "\u7A7A\u57CE";
        return `${ndef.name}(${owner},\u7EA6${Math.round(n.troops / 500) * 500}\u5175,\u57CE\u9632${n.wall})`;
      }).join("\uFF1B");
      lines.push(`- ${def.name}\uFF1A\u5175${Math.round(c2.troops)} \u91D1${Math.round(c2.gold)} \u7CAE${Math.round(c2.food)} \u57CE\u9632${c2.wall} \u6C11\u5FE0${c2.loyalty} \u6B66\u5C06[${gens}] \u76F8\u90BB\uFF1A${nb}`);
    }
    lines.push("");
    lines.push("\u3010\u4EFB\u52A1\u3011\u4E3A\u6BCF\u5EA7\u57CE\u6C60\u9009\u62E9\u4E00\u6761\u672C\u6708\u6307\u4EE4\uFF0C\u4EE5 JSON \u6570\u7EC4\u8F93\u51FA\uFF0C\u4E0D\u8981\u8F93\u51FA\u4EFB\u4F55\u5176\u4ED6\u6587\u5B57\u3002");
    lines.push("\u6307\u4EE4\u7C7B\u578B\uFF1Afarm(\u5F00\u57A6) commerce(\u5546\u4E1A) recruit(\u5F81\u5175) train(\u8BAD\u7EC3) wall(\u4FEE\u57CE) rest(\u4F11\u517B) move(\u8C03\u52A8,\u9700to;\u53EF\u9009generals/troops/gold/food) attack(\u51FA\u5F81,\u9700to/generals/troops)");
    lines.push("\u89C4\u5219\uFF1A\u6BCF\u57CE\u4E00\u6761\uFF1Bmove/attack \u7684\u76EE\u6807\u5FC5\u987B\u662F\u76F8\u90BB\u57CE\u6C60\uFF1Bmove \u53EA\u80FD\u53D1\u5F80\u5DF1\u65B9\u57CE\uFF0Cattack \u76EE\u6807\u4E0D\u80FD\u662F\u5DF1\u65B9\u57CE\uFF1Bmove \u53EF\u540C\u65F6\u643A\u5E26\u6B66\u5C06(generals)\u3001\u58EB\u5175(troops)\u3001\u91D1\u94B1(gold)\u3001\u7CAE\u8349(food)\uFF0C\u7528\u4E8E\u5411\u524D\u7EBF\u8F93\u9001\u6216\u6551\u6D4E\u7F3A\u7CAE\u57CE\uFF1Bgenerals \u586B\u6B66\u5C06\u59D3\u540D\u6570\u7EC4(\u6700\u591A5\u4EBA,\u987B\u5728\u8BE5\u57CE\uFF1Battack \u53EF\u4E0D\u586B\uFF0C\u5219\u4E3A\u6C11\u5175\u961F\u51FA\u6218)\uFF1Btroops \u4E0D\u8D85\u8FC7\u57CE\u4E2D\u5175\u529B\uFF0Cattack \u8D85\u51FA\u6B66\u5C06\u5E26\u5175\u4E0A\u9650\u7684\u90E8\u5206\u4F1A\u81EA\u52A8\u7F16\u4E3A\u6C11\u5175\u961F(\u6700\u591A1\u652F,\u4E0A\u96502000)\uFF1B\u91D1\u4E0D\u8DB3200\u65F6\u4E0D\u8981\u53D1\u5C55\u3002");
    lines.push(`\u6BCF\u6761\u6307\u4EE4\u9644\u4E00\u4E2A "reason" \u5B57\u6BB5\uFF0C\u7528\u4E00\u53E5\u7B80\u77ED\u4E2D\u6587\u8BF4\u660E\u52A8\u673A\uFF08\u4F1A\u663E\u793A\u5728\u6218\u62A5\u65E5\u5FD7\u4E2D\uFF09\u3002`);
    lines.push(`\u8F93\u51FA\u683C\u5F0F\u793A\u4F8B\uFF1A[{"city":"\u8BB8\u660C","command":"recruit","reason":"\u6269\u519B\u5907\u6218"},{"city":"\u6D1B\u9633","command":"attack","to":"\u5C0F\u6C9B","generals":["\u5F20\u8FBD","\u5F90\u6643"],"troops":8000,"reason":"\u5C0F\u6C9B\u5175\u5C11\uFF0C\u4E00\u4E3E\u62FF\u4E0B"},{"city":"\u90BA\u57CE","command":"move","to":"\u6D1B\u9633","food":5000,"reason":"\u6D1B\u9633\u7F3A\u7CAE\uFF0C\u7D27\u6025\u6551\u6D4E"}]`);
    lines.push(`\u4F60\u53EA\u80FD\u4E3A\u4EE5\u4E0B\u57CE\u6C60\u4E0B\u4EE4\uFF1A${myCities.map((c2) => CITY_BY_ID[c2.id].name).join("\u3001")}`);
    return lines.join("\n");
  }
  function parseDecisions(text) {
    let t = text.trim();
    const fence = t.match(/```(?:json)?\s*([\s\S]*?)```/);
    if (fence) t = fence[1].trim();
    const start = t.indexOf("[");
    const end = t.lastIndexOf("]");
    if (start < 0 || end <= start) throw new Error("\u8F93\u51FA\u4E2D\u672A\u627E\u5230 JSON \u6570\u7EC4");
    const arr = JSON.parse(t.slice(start, end + 1));
    if (!Array.isArray(arr)) throw new Error("JSON \u4E0D\u662F\u6570\u7EC4");
    return arr.filter((d) => d && typeof d === "object" && typeof d.city === "string");
  }
  function decisionsToCommands(state, fid, decisions) {
    const cmds = [];
    const used = /* @__PURE__ */ new Set();
    const cityIdByName = new Map(Object.values(CITY_BY_ID).map((c2) => [c2.name, c2.id]));
    for (const d of decisions) {
      const cityId = cityIdByName.get(d.city);
      if (!cityId || used.has(cityId)) continue;
      let cmd = null;
      const type = (d.command || "").toLowerCase();
      if (["farm", "commerce", "recruit", "train", "wall", "rest"].includes(type)) {
        cmd = { type, cityId };
      } else if (type === "move" || type === "attack") {
        const toName = d.to || "";
        const toId = cityIdByName.get(toName);
        if (!toId) continue;
        const city = state.cities.find((c2) => c2.id === cityId);
        if (!city) continue;
        const genIds = [];
        for (const name of d.generals || []) {
          const g = city.generals.find((id) => GENERALS[id].name === name);
          if (g != null && !genIds.includes(g)) genIds.push(g);
          if (genIds.length >= 5) break;
        }
        const troops = Math.floor(Math.min(Number(d.troops) || 0, city.troops));
        if (type === "attack") {
          const squads = buildAttackSquads(state, genIds, troops).filter((s) => s.troops >= 100);
          if (squads.length === 0) continue;
          cmd = { type, cityId, to: toId, squads };
        } else {
          const squads = buildMoveSquads(genIds, troops).filter((s) => s.genId != null || s.troops >= 100);
          cmd = {
            type,
            cityId,
            to: toId,
            squads,
            gold: Math.max(0, Math.floor(Number(d.gold) || 0)),
            food: Math.max(0, Math.floor(Number(d.food) || 0)),
            captives: []
          };
        }
      }
      if (!cmd) continue;
      if (validateCommand(state, cmd, fid) === null) {
        cmds.push({ cmd, note: typeof d.reason === "string" && d.reason.trim() ? d.reason.trim().slice(0, 60) : void 0 });
        used.add(cityId);
      }
    }
    return cmds;
  }
  async function requestDecisions(cfg, prompt, fetchFn) {
    var _a, _b, _c, _d;
    const doFetch = fetchFn != null ? fetchFn : (url2, init) => fetch(url2, init);
    const base = cfg.endpoint.replace(/\/+$/, "");
    const url = /\/chat\/completions$/.test(base) ? base : base + "/chat/completions";
    const ctrl = typeof AbortController !== "undefined" ? new AbortController() : null;
    const timer = ctrl ? setTimeout(() => ctrl.abort(), 3e4) : null;
    try {
      const resp = await doFetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...cfg.apiKey ? { Authorization: `Bearer ${cfg.apiKey}` } : {}
        },
        body: JSON.stringify({
          model: cfg.model,
          messages: [
            { role: "system", content: "\u4F60\u662F\u4E09\u56FD\u7B56\u7565\u6E38\u620F\u7684 AI \u73A9\u5BB6\uFF0C\u53EA\u8F93\u51FA JSON\u3002" },
            { role: "user", content: prompt }
          ],
          temperature: 0.3
        }),
        ...ctrl ? { signal: ctrl.signal } : {}
      });
      if (!resp.ok) throw new Error("HTTP " + resp.status);
      const data = await resp.json();
      const text = (_d = (_c = (_b = (_a = data == null ? void 0 : data.choices) == null ? void 0 : _a[0]) == null ? void 0 : _b.message) == null ? void 0 : _c.content) != null ? _d : "";
      return parseDecisions(text);
    } finally {
      if (timer) clearTimeout(timer);
    }
  }
  async function planTurnLLM(state, fid, cfg, fetchFn) {
    if (!cfg.enabled || !cfg.endpoint || !cfg.model) {
      return { commands: planTurn(state, fid), usedLLM: false };
    }
    try {
      const prompt = buildPrompt(state, fid);
      const decisions = await requestDecisions(cfg, prompt, fetchFn);
      const cmds = decisionsToCommands(state, fid, decisions);
      const covered = new Set(cmds.map((p) => p.cmd.cityId));
      for (const rc of planTurn(state, fid)) {
        if (!covered.has(rc.cmd.cityId)) cmds.push(rc);
      }
      return { commands: cmds, usedLLM: true };
    } catch (e) {
      return {
        commands: planTurn(state, fid),
        usedLLM: false,
        error: e instanceof Error ? e.message : String(e)
      };
    }
  }

  // src/save.ts
  var DB_NAME = "sanguo-slg";
  var DB_VERSION = 1;
  var STORE = "saves";
  var AUTO_SLOT = "auto";
  var MANUAL_SLOTS = ["1", "2", "3"];
  function openDB() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open(DB_NAME, DB_VERSION);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "slot" });
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  function tx(db, mode, fn) {
    return new Promise((resolve, reject) => {
      const t = db.transaction(STORE, mode);
      const req = fn(t.objectStore(STORE));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }
  function makeRecord(slot, state, scenarioName, factionName) {
    return {
      slot,
      savedAt: Date.now(),
      scenarioId: state.scenarioId,
      scenarioName,
      factionId: state.playerFactionId,
      factionName,
      year: state.year,
      month: state.month,
      data: JSON.parse(JSON.stringify(state))
    };
  }
  async function saveRecord(rec) {
    const db = await openDB();
    await tx(db, "readwrite", (s) => s.put(rec));
    db.close();
  }
  async function loadRecord(slot) {
    const db = await openDB();
    const rec = await tx(db, "readonly", (s) => s.get(slot));
    db.close();
    return rec != null ? rec : null;
  }
  async function listRecords() {
    const db = await openDB();
    const all = await tx(db, "readonly", (s) => s.getAll());
    db.close();
    return all.sort((a, b) => b.savedAt - a.savedAt);
  }
  async function deleteRecord(slot) {
    const db = await openDB();
    await tx(db, "readwrite", (s) => s.delete(slot));
    db.close();
  }

  // src/ui.ts
  function showModal(html) {
    const modal = document.getElementById("modal");
    const box = document.getElementById("modal-box");
    box.innerHTML = html;
    modal.classList.remove("hidden");
    return box;
  }
  function closeModal() {
    document.getElementById("modal").classList.add("hidden");
  }
  function showMessage(title, body, onOk) {
    const box = showModal(`<h3>${esc(title)}</h3><div class="note">${body}</div>
    <div class="btn-row"><button class="btn primary" id="msg-ok">\u786E\u5B9A</button></div>`);
    box.querySelector("#msg-ok").addEventListener("click", () => {
      closeModal();
      onOk == null ? void 0 : onOk();
    });
  }
  function sliderRow(id, label, min, max, val, step = 100) {
    return `<div class="row slider-row"><label>${label}</label>
    <input type="range" id="${id}" min="${min}" max="${Math.max(min, max)}" step="${step}" value="${val}">
    <input type="text" class="num" id="${id}-n" value="${val}">
  </div>`;
  }
  function wireSlider(box, id, onChange) {
    const r = box.querySelector("#" + id);
    const n = box.querySelector("#" + id + "-n");
    r.addEventListener("input", () => {
      n.value = r.value;
      onChange == null ? void 0 : onChange(Number(r.value));
    });
    n.addEventListener("change", () => {
      let v = Math.floor(Number(n.value) || 0);
      v = Math.max(Number(r.min), Math.min(Number(r.max), v));
      r.value = String(v);
      n.value = String(v);
      onChange == null ? void 0 : onChange(v);
    });
  }
  function showHelp() {
    const html = `<h3>\u6E38\u620F\u8BF4\u660E</h3>
  <div class="help-body">
    <p class="help-h">\u25A0 \u57FA\u7840\u6D41\u7A0B</p>
    <p>\u6BCF\u6708\u6BCF\u5EA7\u5DF1\u65B9\u57CE\u53EF\u6267\u884C<b>\u4E00\u6761</b>\u6307\u4EE4\uFF1B\u70B9\u300C\u7ED3\u675F\u672C\u6708\u300D\u540E\uFF0C\u5176\u4ED6\u52BF\u529B\u4F9D\u6B21\u884C\u52A8\uFF0C\u968F\u540E\u7ED3\u7B97\u6536\u652F\u5E76\u81EA\u52A8\u5B58\u6863\u3002\u6D88\u706D\u6240\u6709\u5176\u4ED6\u52BF\u529B\u5373\u7EDF\u4E00\u5929\u4E0B\u3002</p>
    <p class="help-h">\u25A0 \u91D1\u94B1\u4E0E\u7CAE\u8349</p>
    <p>\xB7 \u6BCF\u6708\u91D1\u94B1\u6536\u5165 = \u5546\u4E1A \xD7 3.5 \xD7 \u6C11\u5FC3\u7CFB\u6570 \u2212 \u5175\u529B \xD7 0.005<br>
    \xB7 \u6BCF\u5E74 <b>9 \u6708\u79CB\u6536</b>\uFF1A\u7CAE\u8349 += \u519C\u4E1A \xD7 24 \xD7 \u6C11\u5FC3\u7CFB\u6570<br>
    \xB7 \u6C11\u5FC3\u7CFB\u6570 = 0.5 + \u6C11\u5FE0 \xF7 200\uFF08\u6C11\u5FE0\u8D8A\u9AD8\uFF0C\u94B1\u7CAE\u8D8A\u8DB3\uFF09<br>
    \xB7 \u6BCF\u540D\u58EB\u5175\u6BCF\u6708\u8017\u7CAE <b>0.015</b>\uFF081 \u4E07\u5175\u6708\u8017 150 \u7CAE\uFF09<br>
    \xB7 \u7CAE\u8349\u8017\u5C3D\uFF1A\u519B\u961F\u6BCF\u6708\u51CF\u5458 5%\uFF0C\u6C11\u5FE0\u4E0B\u964D \u2014\u2014 \u8BB0\u5F97\u7528\u300C\u8C03\u52A8\u300D\u4ECE\u4F59\u7CAE\u57CE\u6551\u6D4E\uFF01</p>
    <p class="help-h">\u25A0 \u5185\u653F\u6307\u4EE4</p>
    <p>\u5F00\u57A6/\u5546\u4E1A\uFF1A+3~13 \u70B9\uFF08\u653F\u6CBB\u8D8A\u9AD8\u8D8A\u591A\uFF0C\u8017 200 \u91D1\uFF09\xB7 \u4FEE\u57CE\uFF1A\u57CE\u9632 +5~9\uFF08200 \u91D1\uFF09\xB7 \u8BAD\u7EC3\uFF1A\u8BAD\u7EC3\u5EA6 +5~9\uFF08100 \u91D1\uFF0C\u9700 500 \u5175\uFF09\xB7 \u5F81\u5175\uFF1A\u6570\u91CF\u4E0E\u9B45\u529B\u76F8\u5173\uFF08\u8017\u91D1\uFF0C\u6C11\u5FE0\u8FC7\u4F4E\u65E0\u4EBA\u5E94\u52DF\uFF09\xB7 \u4F11\u517B\uFF1A\u6C11\u5FE0 +3</p>
    <p class="help-h">\u25A0 \u8C03\u52A8\u4E0E\u51FA\u5F81</p>
    <p>\xB7 <b>\u8C03\u52A8</b>\uFF1A\u5411\u76F8\u90BB\u5DF1\u65B9\u57CE\u8F93\u9001\u6B66\u5C06\u3001\u58EB\u5175\u3001\u91D1\u94B1\u3001\u7CAE\u8349\uFF0C\u8FD8\u53EF\u62BC\u9001\u4FD8\u864F\uFF1B\u6ED1\u6746\u62D6\u62FD\u5373\u53EF\uFF0C\u5373\u523B\u5230\u8FBE<br>
    \xB7 \u51FA\u5F81\u6700\u591A <b>5 \u652F\u961F\u4F0D</b>\uFF0C\u6BCF\u961F\u5175\u529B\u4E0D\u80FD\u8D85\u8FC7\u5C06\u9886\u7684<b>\u5E26\u5175\u4E0A\u9650</b>\uFF08= 1200 + \u7EDF\u5E05 \xD7 25 + \u7B49\u7EA7 \xD7 350\uFF09<br>
    \xB7 \u53EF\u4EE5\u6D3E\u65E0\u6B66\u5C06\u7684<b>\u6C11\u5175\u961F</b>\uFF08\u4E0A\u9650 2000\uFF09\uFF1A\u653B\u65B9\u6700\u591A 1 \u652F\uFF0C\u5B88\u65B9\u6700\u591A 2 \u652F<br>
    \xB7 \u57CE\u9632\u4E3A\u5B88\u65B9\u63D0\u4F9B\u51CF\u4F24\uFF08\u6700\u9AD8 35%\uFF09\uFF1B\u8BAD\u7EC3\u5EA6\u63D0\u5347\u5168\u519B\u653B\u9632\uFF1B\u5B88\u519B\u7531\u57CE\u5185\u6B66\u5C06\u81EA\u52A8\u7F16\u961F\u5E94\u6218<br>
    \xB7 \u5B88\u65B9\u82E5\u65E0\u5176\u4ED6\u5DF1\u65B9\u57CE\u53EF\u9000\uFF0C\u5219<b>\u65E0\u6CD5\u64A4\u9000</b>\uFF0C\u552F\u6709\u80CC\u6C34\u4E00\u6218</p>
    <p class="help-h">\u25A0 \u6B66\u5C06\u7B49\u7EA7\u4E0E\u5FE0\u8BDA</p>
    <p>\xB7 \u6218\u6597\u5F97\u7ECF\u9A8C\uFF1A\u53C2\u6218 +10\uFF0C\u6BCF\u6B7C\u706D\u4E00\u961F +25\uFF0C\u83B7\u80DC +15\uFF1B\u6EE1 100 \u5347 1 \u7EA7\uFF08\u6700\u9AD8 10 \u7EA7\uFF09\uFF0C\u7B49\u7EA7\u63D0\u5347\u5E26\u5175\u4E0A\u9650\u4E0E\u6218\u6597\u80FD\u529B<br>
    \xB7 \u90E8\u961F\u88AB\u6B7C\u706D\u540E\u6B66\u5C06<b>\u4E0D\u4F1A\u9635\u4EA1\uFF0C\u5FC5\u5B9A\u88AB\u64D2</b>\uFF0C\u5173\u62BC\u5728\u4EA4\u6218\u4E4B\u57CE\u4E2D<br>
    \xB7 <b>\u541B\u4E3B\u88AB\u64D2\u6216\u88AB\u65A9\u9996\uFF0C\u52BF\u529B\u5373\u523B\u706D\u4EA1</b>\uFF1A\u5176\u4F59\u57CE\u6C60\u4E0E\u57CE\u5185\u6B66\u5C06\u5168\u90E8\u5F52\u9644\u80DC\u5229\u65B9<br>
    \xB7 \u4FD8\u864F\u53EF\u88AB<b>\u62DB\u964D</b>\uFF08\u5FE0\u8BDA\u8D8A\u4F4E\u3001\u6545\u4E3B\u5DF2\u4EA1\u3001\u5DF1\u65B9\u541B\u4E3B\u9B45\u529B\u8D8A\u9AD8\uFF0C\u6210\u529F\u7387\u8D8A\u9AD8\uFF09/ <b>\u91CA\u653E</b> / <b>\u65A9\u9996</b>\uFF08\u6FC0\u6012\u5176\u6545\u52BF\u529B\uFF0C\u4F7F\u5176\u6B66\u5C06\u540C\u4EC7\u654C\u5FFE\uFF09<br>
    \xB7 \u57CE\u82E5\u88AB\u653B\u9677\uFF0C\u57CE\u4E2D\u4FD8\u864F\u7531\u653B\u65B9\u63A5\u7BA1\uFF1A\u539F\u5C5E\u653B\u65B9\u7684\u5C06\u88AB<b>\u8425\u6551\u5F52\u961F</b>\uFF0C\u5176\u4F59\u8F6C\u62BC\u5F52\u653B\u65B9<br>
    \xB7 \u5B88\u65B9\u6700\u540E\u4E00\u57CE\u9677\u843D\u65F6\uFF0C\u64A4\u9000/\u5E78\u5B58/\u7559\u5B88\u7684\u6B66\u5C06\u65E0\u8DEF\u53EF\u9000\uFF0C<b>\u5168\u4F53\u88AB\u64D2</b>\uFF08\u6E38\u620F\u4E2D\u6CA1\u6709\u4E0B\u91CE\uFF09<br>
    \xB7 \u57CE\u4E2D\u6C11\u5FE0\u9AD8\uFF0C\u6B66\u5C06\u5FE0\u8BDA\u7F13\u5347\uFF1B\u6C11\u5FE0\u592A\u4F4E\u6216\u6210\u4E3A\u4FD8\u864F\uFF0C\u5FE0\u8BDA\u6E10\u964D</p>
    <p class="help-h">\u25A0 \u64CD\u4F5C\u63D0\u793A</p>
    <p>\u8C03\u5175\u3001\u8FD0\u7CAE\u7B49\u6570\u91CF\u53EF\u7528<b>\u6ED1\u6746\u62D6\u62FD</b>\uFF0C\u4E5F\u53EF\u70B9\u53F3\u4FA7\u6570\u5B57\u76F4\u63A5\u8F93\u5165\uFF1B\u8C03\u52A8\u65F6\u6B66\u5C06 0 \u5175\u4E5F\u53EF\u6210\u884C\uFF08\u8F7B\u9A91\u7B80\u4ECE\uFF09\uFF0C\u53EA\u8981\u4EFB\u610F\u6B66\u5C06/\u7269\u8D44\u6709\u79FB\u52A8\u5373\u6709\u6548\uFF1B\u7F16\u961F\u4F1A\u81EA\u52A8\u6309\u5E26\u5175\u4E0A\u9650\u5206\u914D\u5E76\u5B9E\u65F6\u9884\u89C8\u3002</p>
  </div>
  <div class="btn-row"><button class="btn primary" id="help-ok">\u660E\u767D\u4E86</button></div>`;
    const box = showModal(html);
    box.querySelector("#help-ok").addEventListener("click", () => closeModal());
  }
  var TERRAIN_COLORS = {
    [0 /* Plain */]: "#33502e",
    [1 /* Forest */]: "#22401f",
    [2 /* Mountain */]: "#57503f",
    [3 /* Water */]: "#1c3a55"
  };
  var MapUI = class {
    constructor(hooks) {
      this.hooks = hooks;
      this.selected = null;
      this.canvas = document.getElementById("map-canvas");
      this.ctx = this.canvas.getContext("2d");
      this.terrain = genTerrain();
      this.canvas.addEventListener("click", (e) => this.onClick(e));
      document.getElementById("btn-endturn").addEventListener("click", () => {
        if (!this.hooks.isBusy()) this.hooks.onEndTurn();
      });
      document.getElementById("btn-save").addEventListener("click", () => this.hooks.onShowSave());
      document.getElementById("btn-load2").addEventListener("click", () => this.hooks.onShowLoad());
      document.getElementById("btn-ai-settings").addEventListener("click", () => this.hooks.onShowAISettings());
      document.getElementById("btn-help2").addEventListener("click", () => this.hooks.onShowHelp());
      document.getElementById("btn-totitle").addEventListener("click", () => this.hooks.toTitle());
    }
    get selectedCity() {
      return this.selected;
    }
    select(cityId) {
      this.selected = cityId;
      this.render();
    }
    onClick(e) {
      if (this.hooks.isBusy()) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
      const hit = CITIES.find((c2) => {
        const cx = c2.x * TILE + TILE / 2;
        const cy = c2.y * TILE + TILE / 2;
        return Math.abs(x - cx) < 22 && Math.abs(y - cy) < 20;
      });
      this.selected = hit ? hit.id : null;
      this.render();
    }
    render() {
      const state = this.hooks.getState();
      const ctx = this.ctx;
      for (let y = 0; y < MAP_H; y++) {
        for (let x = 0; x < MAP_W; x++) {
          const t = this.terrain[y * MAP_W + x];
          ctx.fillStyle = TERRAIN_COLORS[t];
          ctx.fillRect(x * TILE, y * TILE, TILE, TILE);
          if (t === 1 /* Forest */) {
            ctx.fillStyle = "#2f5a28";
            ctx.beginPath();
            ctx.arc(x * TILE + 8, y * TILE + 14, 4, 0, Math.PI * 2);
            ctx.arc(x * TILE + 16, y * TILE + 10, 4, 0, Math.PI * 2);
            ctx.fill();
          } else if (t === 2 /* Mountain */) {
            ctx.fillStyle = "#6e6650";
            ctx.beginPath();
            ctx.moveTo(x * TILE + 4, y * TILE + 18);
            ctx.lineTo(x * TILE + 12, y * TILE + 6);
            ctx.lineTo(x * TILE + 20, y * TILE + 18);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      ctx.strokeStyle = "rgba(190,160,110,0.35)";
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 4]);
      const drawn = /* @__PURE__ */ new Set();
      for (const a of Object.keys(CITY_LINKS)) {
        for (const b of CITY_LINKS[a]) {
          const key = a < b ? a + "|" + b : b + "|" + a;
          if (drawn.has(key)) continue;
          drawn.add(key);
          const ca = CITY_BY_ID[a], cb = CITY_BY_ID[b];
          ctx.beginPath();
          ctx.moveTo(ca.x * TILE + TILE / 2, ca.y * TILE + TILE / 2);
          ctx.lineTo(cb.x * TILE + TILE / 2, cb.y * TILE + TILE / 2);
          ctx.stroke();
        }
      }
      ctx.setLineDash([]);
      const playerFid = state.playerFactionId;
      for (const c2 of CITIES) {
        const cs = cityById(state, c2.id);
        const cx = c2.x * TILE + TILE / 2;
        const cy = c2.y * TILE + TILE / 2;
        const color = cs.owner ? factionById(state, cs.owner).color : "#6a6a6a";
        ctx.fillStyle = color;
        ctx.strokeStyle = cs.owner === playerFid ? "#ffd87a" : "#1a1410";
        ctx.lineWidth = cs.owner === playerFid ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.rect(cx - 13, cy - 10, 26, 20);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(cx - 13, cy - 10, 26, 5);
        if (this.selected === c2.id) {
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(cx, cy, 20, 0, Math.PI * 2);
          ctx.stroke();
        }
        if (cs.owner === playerFid && cs.acted) {
          ctx.fillStyle = "rgba(0,0,0,0.45)";
          ctx.fillRect(cx - 13, cy - 10, 26, 20);
        }
        ctx.font = "bold 12px 'Microsoft YaHei', sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "#0c0a08";
        ctx.fillText(c2.name, cx + 1, cy - 15 + 1);
        ctx.fillStyle = "#f0e6cc";
        ctx.fillText(c2.name, cx, cy - 15);
        ctx.font = "11px 'Microsoft YaHei', sans-serif";
        ctx.fillStyle = "#0c0a08";
        ctx.fillText(fmt(cs.troops), cx + 1, cy + 26 + 1);
        ctx.fillStyle = cs.owner === playerFid ? "#ffe9a8" : "#c8c0b0";
        ctx.fillText(fmt(cs.troops), cx, cy + 26);
      }
      this.renderTopbar();
      this.renderPanel();
      this.renderLog();
    }
    renderTopbar() {
      const state = this.hooks.getState();
      const f = factionById(state, state.playerFactionId);
      document.getElementById("tb-date").textContent = `${state.year}\u5E74 ${state.month}\u6708`;
      const tf = document.getElementById("tb-faction");
      tf.textContent = f.name;
      tf.style.color = f.color;
      const my = factionCities(state, f.id);
      const gold = my.reduce((s, c2) => s + c2.gold, 0);
      const food = my.reduce((s, c2) => s + c2.food, 0);
      const troops = my.reduce((s, c2) => s + c2.troops, 0);
      const alive = state.factions.filter((x) => x.alive).length;
      document.getElementById("tb-info").textContent = `\u57CE\u6C60 ${my.length} \xB7 \u91D1 ${fmt(gold)} \xB7 \u7CAE ${fmt(food)} \xB7 \u603B\u5175\u529B ${fmt(troops)} \xB7 \u5B58\u6D3B\u52BF\u529B ${alive}`;
    }
    renderLog() {
      const state = this.hooks.getState();
      const el = document.getElementById("log-panel");
      el.innerHTML = state.log.slice(-150).map((line) => {
        const think = line.startsWith("\u3010\u519B\u5E08");
        return `<div class="log-item${think ? " think" : ""}">${esc(line)}</div>`;
      }).join("");
      el.scrollTop = el.scrollHeight;
    }
    renderPanel() {
      var _a, _b, _c, _d;
      const panel = document.getElementById("side-panel");
      if (!this.selected) {
        panel.innerHTML = `<div class="note panel-tip">\u70B9\u51FB\u5730\u56FE\u4E0A\u7684\u57CE\u6C60<br>\u67E5\u770B\u8BE6\u60C5\u5E76\u4E0B\u8FBE\u6307\u4EE4</div>`;
        panel.classList.remove("hidden");
        return;
      }
      const state = this.hooks.getState();
      const c2 = cityById(state, this.selected);
      const def = CITY_BY_ID[c2.id];
      const owner = c2.owner ? factionById(state, c2.owner) : null;
      const mine = c2.owner === state.playerFactionId;
      let html = `<h3>${esc(def.name)}</h3>`;
      html += `<div class="stat-row"><span>\u5F52\u5C5E</span><b style="color:${owner ? owner.color : "#999"}">${owner ? esc(owner.name) : "\u7A7A\u57CE"}</b></div>`;
      html += `<div class="stat-row"><span>\u5175\u529B</span><b>${fmt(c2.troops)} / ${fmt(maxTroopsOf(c2))}</b></div>`;
      html += `<div class="stat-row"><span>\u91D1</span><b>${fmt(c2.gold)}</b></div>`;
      html += `<div class="stat-row"><span>\u7CAE</span><b>${fmt(c2.food)}</b></div>`;
      html += `<div class="stat-row"><span>\u519C\u4E1A</span><b>${c2.agri}</b></div>`;
      html += `<div class="stat-row"><span>\u5546\u4E1A</span><b>${c2.comm}</b></div>`;
      html += `<div class="stat-row"><span>\u57CE\u9632</span><b>${c2.wall}</b></div>`;
      html += `<div class="stat-row"><span>\u8BAD\u7EC3</span><b>${c2.train}</b></div>`;
      html += `<div class="stat-row"><span>\u6C11\u5FE0</span><b>${c2.loyalty}</b></div>`;
      html += `<div class="sec-title">\u6B66\u5C06 (${c2.generals.length})</div>`;
      for (const g of c2.generals) {
        const gd = GENERALS[g];
        const gs = state.genStates[g];
        const lv = (_a = gs == null ? void 0 : gs.level) != null ? _a : 1;
        const loy = (_b = gs == null ? void 0 : gs.loyalty) != null ? _b : 70;
        const exp = (_c = gs == null ? void 0 : gs.exp) != null ? _c : 0;
        const expPct = lv >= LEVEL_MAX ? 100 : exp;
        const expLabel = lv >= LEVEL_MAX ? "MAX" : `${exp}/100`;
        html += `<div class="gen-row"><span>${esc(gd.name)} <span class="lv">Lv${lv}</span></span><span class="gstats">\u7EDF${gd.lead} \u6B66${gd.war} \u667A${gd.int} \u653F${gd.pol} \u9B45${gd.cha}</span></div><div class="gen-sub"><span>\u5FE0\u8BDA ${loy} \xB7 \u5E26\u5175\u4E0A\u9650 ${fmt(troopCapOf(state, g))}</span><span class="exp-label">\u7ECF\u9A8C ${expLabel}</span></div><div class="exp-bar"><div class="exp-fill" style="width:${expPct}%"></div></div>`;
      }
      if (c2.generals.length === 0) html += `<div class="note">\u65E0\u6B66\u5C06\u9A7B\u5B88</div>`;
      if (mine) {
        if (c2.acted) {
          html += `<div class="sec-title">\u6307\u4EE4</div><div class="note">\u8BE5\u57CE\u672C\u6708\u5DF2\u884C\u52A8\u3002</div>`;
        } else {
          html += `<div class="sec-title">\u6307\u4EE4</div><div class="cmd-grid">`;
          html += `<button class="btn small" data-cmd="farm">\u5F00\u57A6(200\u91D1)</button>`;
          html += `<button class="btn small" data-cmd="commerce">\u5546\u4E1A(200\u91D1)</button>`;
          html += `<button class="btn small" data-cmd="recruit">\u5F81\u5175(${recruitQuote(c2).cost}\u91D1)</button>`;
          html += `<button class="btn small" data-cmd="train">\u8BAD\u7EC3(100\u91D1)</button>`;
          html += `<button class="btn small" data-cmd="wall">\u4FEE\u57CE(200\u91D1)</button>`;
          html += `<button class="btn small" data-cmd="rest">\u4F11\u517B</button>`;
          html += `<button class="btn small" data-cmd="move">\u8C03\u52A8\u2026</button>`;
          html += `<button class="btn small primary" data-cmd="attack">\u51FA\u5F81\u2026</button>`;
          html += `</div>`;
        }
        if (c2.captives.length > 0) {
          html += `<div class="sec-title">\u5173\u62BC\u4FD8\u864F (${c2.captives.length})</div>`;
          for (const cp of c2.captives) {
            const gd = GENERALS[cp.genId];
            const gs = state.genStates[cp.genId];
            const fromName = cp.from ? factionById(state, cp.from).name : "\u5728\u91CE";
            html += `<div class="gen-row captive"><span>${esc(gd.name)}</span><span class="gstats">\u5FE0${(_d = gs == null ? void 0 : gs.loyalty) != null ? _d : "?"} \xB7 \u539F\u5C5E${esc(fromName)}</span></div><div class="captive-btns"><button class="btn small primary" data-cap="recruit" data-g="${cp.genId}"${cp.tried ? " disabled" : ""}>\u62DB\u964D${cp.tried ? "(\u5DF2\u529D)" : ""}</button><button class="btn small" data-cap="release" data-g="${cp.genId}">\u91CA\u653E</button><button class="btn small danger" data-cap="execute" data-g="${cp.genId}">\u65A9\u9996</button></div>`;
          }
        }
      }
      panel.innerHTML = html;
      panel.classList.remove("hidden");
      panel.querySelectorAll("button[data-cmd]").forEach((btn) => {
        btn.addEventListener("click", () => this.onCommand(btn.dataset.cmd, c2));
      });
      panel.querySelectorAll("button[data-cap]").forEach((btn) => {
        btn.addEventListener("click", () => {
          this.hooks.onCaptiveAction(Number(btn.dataset.g), btn.dataset.cap, c2.id);
        });
      });
    }
    onCommand(type, city) {
      if (type === "move" || type === "attack") {
        this.openTargetPicker(type, city);
        return;
      }
      this.hooks.onPlayerCommand({ type, cityId: city.id });
    }
    /** 调动 / 出征：选择目标城、武将、兵力（滑杆拖拽，自动按带兵上限编队）；调动还可带金粮与俘虏 */
    openTargetPicker(kind, city) {
      const state = this.hooks.getState();
      const fid = state.playerFactionId;
      const targets = neighborsOf(state, city.id).filter((n) => kind === "move" ? n.owner === fid : n.owner !== fid);
      if (targets.length === 0) {
        showMessage("\u65E0\u6CD5\u6267\u884C", kind === "move" ? "\u6CA1\u6709\u76F8\u90BB\u7684\u5DF1\u65B9\u57CE\u6C60\u3002" : "\u6CA1\u6709\u76F8\u90BB\u7684\u654C\u65B9\u57CE\u6C60\u3002");
        return;
      }
      const title = kind === "move" ? "\u8C03\u52A8\uFF08\u5175\u9A6C\u94B1\u7CAE\uFF09" : "\u51FA\u5F81\u653B\u6253";
      const maxGens = 5;
      const preSel = new Set(city.generals.slice(0, maxGens));
      let html = `<h3>${title} \u2014 \u81EA${esc(CITY_BY_ID[city.id].name)}</h3>`;
      html += `<div class="row"><label>\u76EE\u6807</label><span id="tp-target-name"></span></div>`;
      html += `<div class="pick-list" id="tp-targets">` + targets.map((t, i) => {
        const td = CITY_BY_ID[t.id];
        const oname = t.owner ? factionById(state, t.owner).name : "\u7A7A\u57CE";
        return `<div class="pick-item${i === 0 ? " sel" : ""}" data-id="${t.id}"><span>${esc(td.name)}\uFF08${esc(oname)}\uFF09</span><span>\u5175 ${fmt(t.troops)} \u9632 ${t.wall}</span></div>`;
      }).join("") + `</div>`;
      if (city.generals.length > 0) {
        html += `<div class="sec-title">\u9009\u62E9\u6B66\u5C06\uFF08\u6700\u591A${maxGens}\u4EBA\uFF0C\u5168\u4E0D\u9009\u5219\u4E3A\u6C11\u5175\u961F\uFF09</div><div class="pick-list" id="tp-gens">` + city.generals.map((g) => {
          var _a, _b;
          const gd = GENERALS[g];
          const lv = (_b = (_a = state.genStates[g]) == null ? void 0 : _a.level) != null ? _b : 1;
          return `<div class="pick-item${preSel.has(g) ? " sel" : ""}" data-id="${g}"><span>${esc(gd.name)} Lv${lv}</span><span class="gstats">\u7EDF${gd.lead} \u6B66${gd.war} \u667A${gd.int} \xB7 \u4E0A\u9650${fmt(troopCapOf(state, g))}</span></div>`;
        }).join("") + `</div>`;
      } else {
        html += `<div class="note">\u57CE\u4E2D\u65E0\u6B66\u5C06\uFF0C\u5C06\u4EE5\u6C11\u5175\u961F\u51FA\u6218\u3002</div>`;
      }
      const initCap = kind === "attack" ? Math.min(city.troops, attackCapacity(state, [...preSel])) : city.troops;
      const initTroops = kind === "attack" ? Math.max(500, Math.min(city.troops - 500, initCap)) : 0;
      html += sliderRow("tp-troops", "\u5175\u529B", 0, city.troops, Math.max(0, initTroops));
      if (kind === "move") {
        html += sliderRow("tp-gold", "\u91D1\u94B1", 0, city.gold, 0);
        html += sliderRow("tp-food", "\u7CAE\u8349", 0, city.food, 0);
        if (city.captives.length > 0) {
          html += `<div class="sec-title">\u62BC\u9001\u4FD8\u864F</div><div class="pick-list" id="tp-caps">` + city.captives.map((cp) => {
            var _a, _b;
            const gd = GENERALS[cp.genId];
            return `<div class="pick-item" data-id="${cp.genId}"><span>${esc(gd.name)}</span><span class="gstats">\u5FE0${(_b = (_a = state.genStates[cp.genId]) == null ? void 0 : _a.loyalty) != null ? _b : "?"}</span></div>`;
          }).join("") + `</div>`;
        }
        html += `<div class="note">\u8C03\u52A8\u5373\u523B\u5230\u8FBE\u3001\u65E0\u635F\u8017\uFF1B\u53EF\u53EA\u8FD0\u91D1\u7CAE\u6216\u62BC\u9001\u4FD8\u864F\u800C\u4E0D\u6D3E\u5175\u3002</div>`;
      }
      html += `<div class="note squad-preview" id="tp-preview"></div>`;
      html += `<div class="btn-row"><button class="btn" id="tp-cancel">\u53D6\u6D88</button><button class="btn primary" id="tp-ok">\u6267\u884C</button></div>`;
      const box = showModal(html);
      let targetId = targets[0].id;
      const genSel = new Set(preSel);
      const capSel = /* @__PURE__ */ new Set();
      const nameSpan = box.querySelector("#tp-target-name");
      const updateName = () => {
        nameSpan.textContent = CITY_BY_ID[targetId].name;
      };
      updateName();
      const slider = box.querySelector("#tp-troops");
      const preview = box.querySelector("#tp-preview");
      const updatePreview = () => {
        if (kind === "attack") {
          const cap = Math.min(city.troops, attackCapacity(state, [...genSel]));
          slider.max = String(cap);
          if (Number(slider.value) > cap) slider.value = String(cap);
          box.querySelector("#tp-troops-n").value = slider.value;
        }
        const total = Number(slider.value);
        const squads = kind === "attack" ? buildAttackSquads(state, [...genSel], total) : buildMoveSquads([...genSel], total);
        const parts = [];
        if (squads.length > 0) {
          parts.push("\u7F16\u961F\uFF1A" + squads.map((s) => `${s.genId != null ? GENERALS[s.genId].name : "\u6C11\u5175\u961F"} ${fmt(s.troops)}`).join(" \xB7 "));
        }
        if (kind === "move") {
          const gold = Number(box.querySelector("#tp-gold").value);
          const food = Number(box.querySelector("#tp-food").value);
          if (gold > 0) parts.push(`\u91D1 ${fmt(gold)}`);
          if (food > 0) parts.push(`\u7CAE ${fmt(food)}`);
          if (capSel.size > 0) parts.push(`\u4FD8\u864F ${capSel.size} \u540D`);
        }
        preview.textContent = parts.length === 0 ? "\u672A\u9009\u62E9\u8981\u8C03\u52A8\u7684\u5185\u5BB9" : parts.join("\uFF1B");
      };
      box.querySelectorAll("#tp-targets .pick-item").forEach((el) => {
        el.addEventListener("click", () => {
          box.querySelectorAll("#tp-targets .pick-item").forEach((x) => x.classList.remove("sel"));
          el.classList.add("sel");
          targetId = el.dataset.id;
          updateName();
        });
      });
      box.querySelectorAll("#tp-gens .pick-item").forEach((el) => {
        el.addEventListener("click", () => {
          const id = Number(el.dataset.id);
          if (genSel.has(id)) {
            genSel.delete(id);
            el.classList.remove("sel");
          } else if (genSel.size < maxGens) {
            genSel.add(id);
            el.classList.add("sel");
          }
          updatePreview();
        });
      });
      box.querySelectorAll("#tp-caps .pick-item").forEach((el) => {
        el.addEventListener("click", () => {
          const id = Number(el.dataset.id);
          if (capSel.has(id)) {
            capSel.delete(id);
            el.classList.remove("sel");
          } else {
            capSel.add(id);
            el.classList.add("sel");
          }
          updatePreview();
        });
      });
      wireSlider(box, "tp-troops", updatePreview);
      if (kind === "move") {
        wireSlider(box, "tp-gold", updatePreview);
        wireSlider(box, "tp-food", updatePreview);
      }
      updatePreview();
      box.querySelector("#tp-cancel").addEventListener("click", () => closeModal());
      box.querySelector("#tp-ok").addEventListener("click", () => {
        const troops = Number(slider.value);
        const squads = (kind === "attack" ? buildAttackSquads(state, [...genSel], troops) : buildMoveSquads([...genSel], troops)).filter((s) => s.genId != null ? kind === "move" ? s.troops >= 0 : s.troops >= 100 : s.troops >= 100);
        let cmd;
        if (kind === "attack") {
          if (squads.length === 0) {
            showMessage("\u65E0\u6CD5\u6267\u884C", "\u8BF7\u6D3E\u51FA\u81F3\u5C11\u4E00\u652F\u961F\u4F0D");
            return;
          }
          cmd = { type: "attack", cityId: city.id, to: targetId, squads };
        } else {
          const gold = Number(box.querySelector("#tp-gold").value);
          const food = Number(box.querySelector("#tp-food").value);
          cmd = { type: "move", cityId: city.id, to: targetId, squads, gold, food, captives: [...capSel] };
        }
        const err = validateCommand(this.hooks.getState(), cmd, this.hooks.getState().playerFactionId);
        if (err) {
          showMessage("\u65E0\u6CD5\u6267\u884C", esc(err));
          return;
        }
        closeModal();
        this.hooks.onPlayerCommand(cmd);
      });
    }
  };

  // src/battleUI.ts
  var BattleUI = class {
    constructor() {
      this.battle = null;
      this.playerSide = "atk";
      this.pickMode = "none";
      this.pendingSkill = null;
      this.auto = false;
      // 自动战斗：玩家方单位也由 AI 代打
      this.floaters = [];
      this.rafId = 0;
      this.resolveFn = null;
      this.canvas = document.getElementById("battle-canvas");
      this.ctx = this.canvas.getContext("2d");
      this.cmdBar = document.getElementById("battle-cmd");
      this.logBox = document.getElementById("battle-log");
      this.canvas.addEventListener("click", (e) => this.onCanvasClick(e));
    }
    show() {
      document.getElementById("screen-battle").classList.remove("hidden");
    }
    hide() {
      document.getElementById("screen-battle").classList.add("hidden");
    }
    /** 运行一场玩家参与的战斗；玩家控制 playerSide。 */
    runInteractive(setup, playerSide) {
      var _a, _b, _c, _d;
      this.battle = createBattle(setup);
      this.playerSide = playerSide;
      this.auto = false;
      this.floaters = [];
      this.logBox.innerHTML = "";
      const from = (_b = (_a = CITY_BY_ID[setup.fromCityId]) == null ? void 0 : _a.name) != null ? _b : "";
      const to = (_d = (_c = CITY_BY_ID[setup.toCityId]) == null ? void 0 : _c.name) != null ? _d : "";
      this.log(`\u2014\u2014 ${from} \u2192 ${to} \xB7 \u5408\u6218\u5F00\u59CB \u2014\u2014`);
      if (setup.wallBonus > 0.12) this.log(`${to} \u57CE\u9632\u575A\u56FA\uFF0C\u5B88\u65B9\u83B7\u5F97\u51CF\u4F24\u3002`);
      if (!setup.defCanRetreat) this.log(`\u5B88\u65B9\u5DF2\u65E0\u751F\u8DEF\u53EF\u9000\uFF0C\u80CC\u6C34\u4E00\u6218\uFF01`);
      this.show();
      this.startRenderLoop();
      return new Promise((resolve) => {
        this.resolveFn = resolve;
        setTimeout(() => this.step(), 500);
      });
    }
    /* ---------------- 回合驱动 ---------------- */
    step() {
      const b = this.battle;
      if (!b) return;
      const events = [];
      const u = currentUnit(b, events);
      this.flushEvents(events);
      if (b.over || !u) {
        this.finish();
        return;
      }
      if (u.side === this.playerSide && !this.auto) {
        this.showCommands(u);
      } else {
        if (u.side === this.playerSide) this.showAutoBar();
        else this.hideCommands();
        setTimeout(() => {
          if (!this.battle || this.battle.over) {
            this.finish();
            return;
          }
          const ev = applyAction(b, u.uid, aiChooseAction(b, u));
          this.flushEvents(ev);
          this.step();
        }, 450);
      }
    }
    /** 自动战斗中的提示条（可随时切回手动） */
    showAutoBar() {
      this.cmdBar.innerHTML = `<span style="color:#e8c88a;padding:4px 8px">\u81EA\u52A8\u6218\u6597\u4E2D\u2026\u2026</span><button class="btn" id="btn-manual">\u6539\u4E3A\u624B\u52A8</button>`;
      this.cmdBar.classList.remove("hidden");
      this.cmdBar.querySelector("#btn-manual").addEventListener("click", () => {
        this.auto = false;
        this.hideCommands();
      });
    }
    finish() {
      const b = this.battle;
      if (!b) return;
      this.hideCommands();
      const result = extractResult(b);
      const playerWon = result.winner === this.playerSide;
      setTimeout(() => {
        this.stopRenderLoop();
        this.hide();
        const fn = this.resolveFn;
        this.resolveFn = null;
        this.battle = null;
        fn == null ? void 0 : fn(result);
      }, playerWon ? 1200 : 1500);
    }
    /* ---------------- 玩家指令 ---------------- */
    showCommands(u) {
      const b = this.battle;
      this.pickMode = "none";
      this.pendingSkill = null;
      let html = `<span style="color:#e8c88a;padding:4px 8px">\u3010${esc(u.name)}\u3011\u7684\u884C\u52A8\uFF1A</span>`;
      html += `<button class="btn" data-act="attack">\u653B\u51FB</button>`;
      for (const sid of u.skills) {
        const sk = SKILLS[sid];
        const disabled = u.qi < sk.qiCost ? " disabled" : "";
        html += `<button class="btn" data-act="skill" data-skill="${sid}"${disabled}>${esc(sk.name)}(${sk.qiCost}\u6C14)</button>`;
      }
      const noRetreat = u.side === "def" && !b.defCanRetreat;
      html += `<button class="btn" data-act="defend">\u9632\u5FA1</button>`;
      html += `<button class="btn" data-act="retreat"${noRetreat ? " disabled" : ""}>\u64A4\u9000</button>`;
      html += `<button class="btn" data-act="auto">\u81EA\u52A8</button>`;
      if (noRetreat) html += `<span style="color:#e8a85a;padding:4px 8px">\u65E0\u8DEF\u53EF\u9000\uFF0C\u80CC\u6C34\u4E00\u6218\uFF01</span>`;
      this.cmdBar.innerHTML = html;
      this.cmdBar.classList.remove("hidden");
      this.cmdBar.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => this.onCommand(btn));
      });
    }
    hideCommands() {
      this.cmdBar.classList.add("hidden");
      this.pickMode = "none";
      this.pendingSkill = null;
    }
    onCommand(btn) {
      const b = this.battle;
      if (!b || b.over) return;
      const events = [];
      const u = currentUnit(b, events);
      if (!u || u.side !== this.playerSide) return;
      const act = btn.dataset.act;
      if (act === "auto") {
        this.auto = true;
        this.hideCommands();
        this.step();
      } else if (act === "defend") {
        this.hideCommands();
        this.flushEvents(applyAction(b, u.uid, { type: "defend" }));
        this.step();
      } else if (act === "retreat") {
        this.hideCommands();
        this.flushEvents(applyAction(b, u.uid, { type: "retreat" }));
        this.step();
      } else if (act === "attack") {
        this.pickMode = "enemy";
        this.pendingSkill = null;
        this.log("\u9009\u62E9\u8981\u653B\u51FB\u7684\u654C\u90E8\u961F\u2026\u2026");
      } else if (act === "skill") {
        const sid = btn.dataset.skill;
        const sk = SKILLS[sid];
        if (sk.target === "self") {
          this.hideCommands();
          this.flushEvents(applyAction(b, u.uid, { type: "skill", skillId: sid, target: u.uid }));
          this.step();
        } else if (sk.target === "enemyAll") {
          this.hideCommands();
          const foes = enemiesOf(b, u.side);
          if (foes.length === 0) return;
          this.flushEvents(applyAction(b, u.uid, { type: "skill", skillId: sid, target: foes[0].uid }));
          this.step();
        } else {
          this.pickMode = sk.target === "ally" ? "ally" : "enemy";
          this.pendingSkill = sid;
          this.log(`\u9009\u62E9\u3010${sk.name}\u3011\u7684\u76EE\u6807\u2026\u2026`);
        }
      }
    }
    onCanvasClick(e) {
      const b = this.battle;
      if (!b || b.over || this.pickMode === "none") return;
      const events = [];
      const u = currentUnit(b, events);
      if (!u || u.side !== this.playerSide) return;
      const rect = this.canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
      const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
      const hit = this.unitAt(x, y);
      if (!hit || !hit.alive || hit.retreated) return;
      if (this.pickMode === "enemy" && hit.side === u.side) return;
      if (this.pickMode === "ally" && hit.side !== u.side) return;
      const action = this.pendingSkill ? { type: "skill", skillId: this.pendingSkill, target: hit.uid } : { type: "attack", target: hit.uid };
      this.hideCommands();
      this.flushEvents(applyAction(b, u.uid, action));
      this.step();
    }
    /* ---------------- 战报与浮字 ---------------- */
    log(msg) {
      const div = document.createElement("div");
      div.textContent = msg;
      this.logBox.appendChild(div);
      this.logBox.scrollTop = this.logBox.scrollHeight;
    }
    flushEvents(events) {
      const now = performance.now();
      for (const ev of events) {
        this.log(ev.msg);
        if (ev.dmg != null && ev.target) {
          this.floaters.push({
            uid: ev.target,
            text: ev.dmg >= 0 ? `-${fmt(ev.dmg)}` : `+${fmt(-ev.dmg)}`,
            color: ev.dmg >= 0 ? "#ff7a5a" : "#7ae08a",
            until: now + 900
          });
        }
      }
    }
    /* ---------------- 渲染 ---------------- */
    unitPos(u) {
      const b = this.battle;
      const mates = b.units.filter((x) => x.side === u.side);
      const idx = mates.indexOf(u);
      const col = u.side === "atk" ? 0 : 1;
      const total = mates.length;
      const spacing = 96;
      const startY = 300 - (total - 1) * spacing / 2;
      return { x: col === 0 ? 170 : 886, y: startY + idx * spacing };
    }
    unitAt(x, y) {
      if (!this.battle) return null;
      for (const u of this.battle.units) {
        const p = this.unitPos(u);
        if (Math.abs(x - p.x) < 105 && Math.abs(y - p.y) < 40) return u;
      }
      return null;
    }
    startRenderLoop() {
      const loop = () => {
        this.draw();
        if (this.battle) this.rafId = requestAnimationFrame(loop);
      };
      this.rafId = requestAnimationFrame(loop);
    }
    stopRenderLoop() {
      cancelAnimationFrame(this.rafId);
    }
    draw() {
      const b = this.battle;
      if (!b) return;
      const ctx = this.ctx;
      const W = this.canvas.width, H = this.canvas.height;
      const grad = ctx.createLinearGradient(0, 0, 0, H);
      grad.addColorStop(0, "#2c3d26");
      grad.addColorStop(1, "#1a2618");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      if (b.wallBonus > 0.01) {
        ctx.fillStyle = "#4a4438";
        ctx.fillRect(W - 90, 40, 60, H - 80);
        ctx.fillStyle = "#5d5648";
        for (let y = 50; y < H - 50; y += 36) ctx.fillRect(W - 90, y, 60, 8);
        ctx.font = "16px 'Microsoft YaHei'";
        ctx.textAlign = "center";
        ctx.fillStyle = "#d8ccb0";
        ctx.fillText("\u57CE\u5899", W - 60, 30);
      }
      ctx.strokeStyle = "rgba(216,204,176,0.15)";
      ctx.setLineDash([6, 8]);
      ctx.beginPath();
      ctx.moveTo(W / 2, 20);
      ctx.lineTo(W / 2, H - 20);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.font = "bold 15px 'Microsoft YaHei'";
      ctx.textAlign = "left";
      ctx.fillStyle = "#e8c88a";
      ctx.fillText("\u653B \u65B9", 24, 32);
      ctx.textAlign = "right";
      ctx.fillText("\u5B88 \u65B9", W - 110, 32);
      const evTmp = [];
      const cur = b.over ? null : currentUnitPeek(b);
      for (const u of b.units) this.drawUnit(u, cur === u.uid);
      const now = performance.now();
      this.floaters = this.floaters.filter((f) => f.until > now);
      for (const f of this.floaters) {
        const u = b.units.find((x) => x.uid === f.uid);
        if (!u) continue;
        const p = this.unitPos(u);
        const t = 1 - (f.until - now) / 900;
        ctx.font = "bold 20px 'Microsoft YaHei'";
        ctx.textAlign = "center";
        ctx.globalAlpha = 1 - t * 0.6;
        ctx.fillStyle = f.color;
        ctx.fillText(f.text, p.x, p.y - 52 - t * 26);
        ctx.globalAlpha = 1;
      }
      if (b.over) {
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fillRect(0, H / 2 - 50, W, 100);
        ctx.font = "bold 34px 'Microsoft YaHei'";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffd87a";
        ctx.fillText(b.winner === "atk" ? "\u653B \u65B9 \u80DC \u5229" : "\u5B88 \u65B9 \u80DC \u5229", W / 2, H / 2 + 12);
      }
    }
    drawUnit(u, isCurrent) {
      const ctx = this.ctx;
      const p = this.unitPos(u);
      const w = 210, h = 64;
      const x = p.x - w / 2, y = p.y - h / 2;
      const inactive = !u.alive || u.retreated;
      const selectable = !inactive && this.pickMode !== "none" && (this.pickMode === "enemy" && u.side !== this.playerSide || this.pickMode === "ally" && u.side === this.playerSide);
      ctx.fillStyle = inactive ? "rgba(30,26,20,0.7)" : u.side === this.playerSide ? "#2e3d2a" : "#3d2e26";
      ctx.strokeStyle = isCurrent ? "#ffd87a" : selectable ? "#7ae08a" : "#5a4632";
      ctx.lineWidth = isCurrent ? 3 : selectable ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.rect(x, y, w, h);
      ctx.fill();
      ctx.stroke();
      ctx.textAlign = "left";
      ctx.font = "bold 14px 'Microsoft YaHei'";
      ctx.fillStyle = inactive ? "#6a6258" : "#f0e6cc";
      let label = u.genId != null ? `${u.name} Lv${u.level}` : u.name;
      if (u.retreated) label += "\uFF08\u64A4\u9000\uFF09";
      else if (!u.alive) label += "\uFF08\u6B7C\u706D\uFF09";
      ctx.fillText(label, x + 10, y + 20);
      let sx = x + w - 12;
      ctx.font = "12px 'Microsoft YaHei'";
      ctx.textAlign = "right";
      const marks = [];
      if (u.confused > 0) marks.push("\u6DF7");
      if (u.guarding) marks.push("\u9632");
      if (u.ironWall > 0) marks.push("\u575A");
      if (marks.length) {
        ctx.fillStyle = "#e8a85a";
        ctx.fillText(marks.join(" "), sx, y + 20);
      }
      const barW = w - 20;
      const ratio = u.maxTroops > 0 ? u.troops / u.maxTroops : 0;
      ctx.fillStyle = "#14100c";
      ctx.fillRect(x + 10, y + 28, barW, 10);
      ctx.fillStyle = ratio > 0.5 ? "#5aa04a" : ratio > 0.25 ? "#c9a02a" : "#c23b3b";
      ctx.fillRect(x + 10, y + 28, barW * Math.max(0, ratio), 10);
      ctx.font = "11px 'Microsoft YaHei'";
      ctx.textAlign = "right";
      ctx.fillStyle = "#e8dcc0";
      ctx.fillText(`${fmt(u.troops)}`, x + w - 12, y + 37);
      ctx.fillStyle = "#14100c";
      ctx.fillRect(x + 10, y + 44, barW, 6);
      ctx.fillStyle = "#4a8ac2";
      ctx.fillRect(x + 10, y + 44, barW * (u.qi / 100), 6);
      if (isCurrent) {
        ctx.font = "16px 'Microsoft YaHei'";
        ctx.textAlign = "center";
        ctx.fillStyle = "#ffd87a";
        ctx.fillText("\u25BC", p.x, y - 8);
      }
    }
  };
  function currentUnitPeek(b) {
    if (b.over) return null;
    let idx = b.turnIdx;
    let guard = 0;
    while (guard++ < 200) {
      if (idx >= b.order.length) return null;
      const u = b.units.find((x) => x.uid === b.order[idx]);
      if (!u) return null;
      if (u.alive && !u.retreated && u.confused === 0) return u.uid;
      idx++;
    }
    return null;
  }

  // src/main.ts
  var App = class {
    constructor() {
      this.state = null;
      this.busy = false;
      this.mapUI = new MapUI(this);
      this.battleUI = new BattleUI();
      this.bindTitle();
      window.__app = this;
    }
    /* ---------------- 画面切换 ---------------- */
    show(s) {
      for (const id of ["screen-title", "screen-setup", "screen-map", "screen-battle"]) {
        document.getElementById(id).classList.toggle("hidden", id !== "screen-" + s);
      }
    }
    /* ---------------- 标题 ---------------- */
    bindTitle() {
      document.getElementById("btn-new").addEventListener("click", () => this.showScenarioPick());
      document.getElementById("btn-load").addEventListener("click", () => this.showLoadModal());
      document.getElementById("btn-settings").addEventListener("click", () => this.showAISettings());
      document.getElementById("btn-help").addEventListener("click", () => showHelp());
      document.getElementById("btn-setup-back").addEventListener("click", () => this.show("title"));
    }
    /* ---------------- 开局 ---------------- */
    showScenarioPick() {
      document.getElementById("setup-title").textContent = "\u9009\u62E9\u5267\u672C";
      const list = document.getElementById("setup-list");
      list.innerHTML = "";
      for (const sc of SCENARIOS) {
        const div = document.createElement("div");
        div.className = "setup-item";
        div.innerHTML = `<h3>${esc(sc.name)} <span class="tag">${sc.year}\u5E74</span><span class="tag">${sc.factions.length} \u52BF\u529B</span></h3><p>${esc(sc.desc)}</p>`;
        div.addEventListener("click", () => this.showFactionPick(sc.id));
        list.appendChild(div);
      }
      this.show("setup");
    }
    showFactionPick(scenarioId) {
      const sc = SCENARIO_BY_ID[scenarioId];
      document.getElementById("setup-title").textContent = `${sc.name} \u2014 \u9009\u62E9\u52BF\u529B`;
      const list = document.getElementById("setup-list");
      list.innerHTML = "";
      for (const f of sc.factions) {
        const cities = sc.cities.filter((c2) => c2.owner === f.id).length;
        const diff = cities >= 3 ? "\u2605\u2606\u2606 \u5BB9\u6613" : cities === 2 ? "\u2605\u2605\u2606 \u4E2D\u7B49" : "\u2605\u2605\u2605 \u56F0\u96BE";
        const gens = sc.cities.filter((c2) => c2.owner === f.id).reduce((s, c2) => s + c2.generals.length, 0);
        const div = document.createElement("div");
        div.className = "setup-item";
        div.innerHTML = `<h3><span style="color:${f.color}">\u25A0</span> ${esc(f.name)} <span class="tag">\u541B\u4E3B ${esc(GENERALS[f.ruler].name)}</span><span class="tag">${diff}</span></h3>
        <p>\u57CE\u6C60 ${cities} \u5EA7 \xB7 \u6B66\u5C06 ${gens} \u540D \xB7 \u597D\u6218 ${Math.round(f.aggression * 100)}% / \u7ECF\u8425 ${Math.round(f.develop * 100)}%</p>`;
        div.addEventListener("click", () => this.startGame(scenarioId, f.id));
        list.appendChild(div);
      }
      this.show("setup");
    }
    startGame(scenarioId, factionId) {
      this.state = newGame(scenarioId, factionId);
      this.mapUI.select(null);
      this.show("map");
      this.mapUI.render();
    }
    /* ---------------- AppHooks ---------------- */
    getState() {
      if (!this.state) throw new Error("\u6E38\u620F\u5C1A\u672A\u5F00\u59CB");
      return this.state;
    }
    isBusy() {
      return this.busy;
    }
    onPlayerCommand(cmd) {
      const state = this.getState();
      const res = executeCommand(state, cmd, state.playerFactionId);
      if (!res.ok) {
        showMessage("\u65E0\u6CD5\u6267\u884C", esc(res.msg));
        return;
      }
      pushLog(state, res.msg);
      if (res.battle) {
        const setup = res.battle;
        void (async () => {
          this.show("battle");
          const result = await this.battleUI.runInteractive(setup, "atk");
          const captures = applyBattleResult(state, setup, result);
          this.show("map");
          this.mapUI.render();
          this.checkPlayerStatus();
          if (result.winner === "atk" && captures.length > 0) {
            this.showCaptiveDecisions(captures.map((g) => ({ genId: g, destCityId: setup.toCityId })));
          }
        })();
      }
      this.mapUI.render();
    }
    onCaptiveAction(genId, action, cityId) {
      const state = this.getState();
      const r = captiveAction(state, state.playerFactionId, cityId, genId, action);
      this.mapUI.render();
      showMessage("\u5904\u7F6E\u4FD8\u864F", esc(r.msg));
    }
    /** 战后俘虏处置弹窗：招降 / 释放 / 斩首（俘虏关押在交战城中） */
    showCaptiveDecisions(items) {
      var _a;
      const state = this.getState();
      const fid = state.playerFactionId;
      const pending = items.filter((it) => cityById(state, it.destCityId).captives.some((c2) => c2.genId === it.genId));
      if (pending.length === 0) {
        this.mapUI.render();
        return;
      }
      let html = `<h3>\u5904\u7F6E\u4FD8\u864F\uFF08${pending.length}\uFF09</h3><div class="note">\u88AB\u64D2\u654C\u5C06\u7684\u547D\u8FD0\u7531\u4F60\u51B3\u5B9A\uFF1A\u62DB\u964D\u53EF\u4E3A\u5DF1\u7528\uFF0C\u91CA\u653E\u7ED3\u4E00\u65F6\u4E4B\u4EC1\uFF0C\u65A9\u9996\u7ACB\u5A01\u4F46\u4F1A\u6FC0\u6012\u5176\u6545\u52BF\u529B\u3002\u4FD8\u864F\u5173\u62BC\u5728\u653B\u4E0B/\u575A\u5B88\u7684\u57CE\u4E2D\uFF0C\u57CE\u82E5\u6613\u4E3B\u5C06\u88AB\u654C\u65B9\u63A5\u7BA1\u3002</div><div class="pick-list">`;
      for (const it of pending) {
        const gd = GENERALS[it.genId];
        const gs = state.genStates[it.genId];
        html += `<div class="pick-item" id="cap-row-${it.genId}"><span>${esc(gd.name)}\uFF08\u7EDF${gd.lead} \u6B66${gd.war} \u667A${gd.int} \xB7 \u5FE0${(_a = gs == null ? void 0 : gs.loyalty) != null ? _a : "?"}\uFF09</span><span>
        <button class="btn small primary" data-act="recruit" data-g="${it.genId}">\u62DB\u964D</button>
        <button class="btn small" data-act="release" data-g="${it.genId}">\u91CA\u653E</button>
        <button class="btn small danger" data-act="execute" data-g="${it.genId}">\u65A9\u9996</button></span></div>`;
      }
      html += `</div><div class="btn-row"><button class="btn primary" id="cap-done">\u5B8C\u6BD5</button></div>`;
      const box = showModal(html);
      const cityOf = new Map(pending.map((it) => [it.genId, it.destCityId]));
      box.querySelectorAll("button[data-act]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const g = Number(btn.dataset.g);
          const r = captiveAction(state, fid, cityOf.get(g), g, btn.dataset.act);
          const row = box.querySelector(`#cap-row-${g}`);
          if (row) row.innerHTML = `<span class="note">${esc(r.msg)}</span>`;
          this.mapUI.render();
        });
      });
      box.querySelector("#cap-done").addEventListener("click", () => {
        closeModal();
        this.mapUI.render();
      });
    }
    async onEndTurn() {
      const state = this.getState();
      this.busy = true;
      const btn = document.getElementById("btn-endturn");
      btn.disabled = true;
      btn.textContent = "\u8BF8\u52BF\u529B\u884C\u52A8\u4E2D\u2026";
      this.mapUI.select(null);
      const llmCfg = loadLLMConfig();
      const playerCaptures = [];
      try {
        for (const f of state.factions.filter((f2) => f2.alive && f2.id !== state.playerFactionId)) {
          let cmds;
          if (llmCfg.enabled) {
            const r = await planTurnLLM(state, f.id, llmCfg);
            cmds = r.commands;
            if (r.error) pushLog(state, `${f.name} \u7684\u519B\u5E08\u672A\u80FD\u8054\u7EDC\uFF08${r.error}\uFF09\uFF0C\u81EA\u884C\u51B3\u65AD\u3002`);
          } else {
            cmds = planTurn(state, f.id);
          }
          for (const { cmd, note } of cmds) {
            if (this.gameOverCheckNeeded()) return;
            const res = executeCommand(state, cmd, f.id);
            if (!res.ok) continue;
            if (note) pushLog(state, `\u3010\u519B\u5E08\xB7${f.name}\u3011${note}`);
            if (res.battle) {
              const setup = res.battle;
              let result;
              if (setup.defenderFactionId === state.playerFactionId) {
                pushLog(state, `${f.name} \u6765\u72AF${CITY_BY_ID[setup.toCityId].name}\uFF0C\u6211\u519B\u8FCE\u6218\uFF01`);
                this.mapUI.render();
                this.show("battle");
                result = await this.battleUI.runInteractive(setup, "def");
                this.show("map");
              } else {
                result = autoRunBattle(createBattle(setup));
              }
              const captures = applyBattleResult(state, setup, result);
              const winFid = result.winner === "atk" ? setup.attackerFactionId : setup.defenderFactionId;
              if (winFid === state.playerFactionId) {
                for (const g of captures) playerCaptures.push({ genId: g, destCityId: setup.toCityId });
              } else if (winFid) {
                aiResolveCaptives(state, winFid);
              }
              this.mapUI.render();
            } else if (cmd.type === "attack" || cmd.type === "move") {
              pushLog(state, res.msg);
            }
          }
          aiResolveCaptives(state, f.id);
          this.mapUI.render();
        }
      } finally {
        const mr = settleMonth(state);
        pushLog(state, `\u2014\u2014 ${state.year}\u5E74${state.month}\u6708 \u2014\u2014`);
        await this.autosave();
        this.busy = false;
        btn.disabled = false;
        btn.textContent = "\u7ED3\u675F\u672C\u6708";
        this.mapUI.render();
        if (mr.gameOver) this.showGameOver(mr.playerWon);
        else if (playerCaptures.length > 0) this.showCaptiveDecisions(playerCaptures);
      }
    }
    gameOverCheckNeeded() {
      const state = this.getState();
      return !factionById(state, state.playerFactionId).alive;
    }
    checkPlayerStatus() {
      const state = this.getState();
      const player = factionById(state, state.playerFactionId);
      if (!player.alive) this.showGameOver(false);
    }
    showGameOver(won) {
      const state = this.getState();
      const msg = won ? `\u5929\u4E0B\u5F52\u4E00\uFF01${esc(factionById(state, state.playerFactionId).name)} \u4E8E ${state.year} \u5E74\u5E73\u5B9A\u4E71\u4E16\uFF0C\u529F\u6210\u540D\u5C31\uFF01` : `\u4F60\u7684\u52BF\u529B\u5DF2\u7ECF\u8986\u706D\u3002\u4E71\u4E16\u4ECD\u5728\u7EE7\u7EED\u2026\u2026`;
      showMessage(won ? "\u5929\u4E0B\u7EDF\u4E00" : "\u9738\u4E1A\u672A\u6210", msg, () => this.toTitle());
    }
    toTitle() {
      this.state = null;
      this.battleUI.hide();
      this.show("title");
    }
    /* ---------------- 存档 / 读档 ---------------- */
    async autosave() {
      const state = this.state;
      if (!state) return;
      const rec = makeRecord(AUTO_SLOT, state, SCENARIO_BY_ID[state.scenarioId].name, factionById(state, state.playerFactionId).name);
      try {
        await saveRecord(rec);
      } catch {
      }
    }
    onShowSave() {
      void this.showSaveModal();
    }
    onShowLoad() {
      void this.showLoadModal();
    }
    onShowAISettings() {
      this.showAISettings();
    }
    onShowHelp() {
      showHelp();
    }
    slotLabel(rec) {
      if (!rec) return "\uFF08\u7A7A\uFF09";
      const d = new Date(rec.savedAt);
      const pad = (n) => String(n).padStart(2, "0");
      return `${esc(rec.scenarioName)} \xB7 ${esc(rec.factionName)} \xB7 ${rec.year}\u5E74${rec.month}\u6708<br><span class="note">${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}</span>`;
    }
    async showSaveModal() {
      if (!this.state) return;
      const recs = await listRecords().catch(() => []);
      let html = `<h3>\u4FDD\u5B58\u8FDB\u5EA6</h3><div class="pick-list">`;
      for (const slot of MANUAL_SLOTS) {
        const rec = recs.find((r) => r.slot === slot);
        html += `<div class="pick-item" data-slot="${slot}"><span>\u5B58\u6863 ${slot}<br>${this.slotLabel(rec)}</span><span><button class="btn small" data-save="${slot}">\u4FDD\u5B58</button></span></div>`;
      }
      html += `</div><div class="note">\u81EA\u52A8\u5B58\u6863\u6BCF\u6708\u7ED3\u675F\u65F6\u66F4\u65B0\uFF0C\u53EF\u5728\u8BFB\u53D6\u754C\u9762\u627E\u5230\u3002</div><div class="btn-row"><button class="btn" id="m-close">\u5173\u95ED</button></div>`;
      const box = showModal(html);
      box.querySelector("#m-close").addEventListener("click", () => closeModal());
      box.querySelectorAll("button[data-save]").forEach((btn) => {
        btn.addEventListener("click", async () => {
          const state = this.getState();
          const rec = makeRecord(btn.dataset.save, state, SCENARIO_BY_ID[state.scenarioId].name, factionById(state, state.playerFactionId).name);
          try {
            await saveRecord(rec);
            showMessage("\u5DF2\u4FDD\u5B58", "\u8FDB\u5EA6\u5DF2\u5199\u5165\u5B58\u6863 " + btn.dataset.save + "\u3002");
          } catch (e) {
            showMessage("\u4FDD\u5B58\u5931\u8D25", esc(String(e)));
          }
        });
      });
    }
    async showLoadModal() {
      const recs = await listRecords().catch(() => []);
      let html = `<h3>\u8BFB\u53D6\u8FDB\u5EA6</h3>`;
      if (recs.length === 0) html += `<div class="note">\u6682\u65E0\u5B58\u6863\u3002</div>`;
      html += `<div class="pick-list">`;
      for (const slot of [AUTO_SLOT, ...MANUAL_SLOTS]) {
        const rec = recs.find((r) => r.slot === slot);
        if (!rec) continue;
        const name = slot === AUTO_SLOT ? "\u81EA\u52A8\u5B58\u6863" : "\u5B58\u6863 " + slot;
        html += `<div class="pick-item"><span>${name}<br>${this.slotLabel(rec)}</span><span>
        <button class="btn small primary" data-load="${slot}">\u8BFB\u53D6</button>
        <button class="btn small" data-del="${slot}">\u5220\u9664</button></span></div>`;
      }
      html += `</div><div class="btn-row"><button class="btn" id="m-close">\u5173\u95ED</button></div>`;
      const box = showModal(html);
      box.querySelector("#m-close").addEventListener("click", () => closeModal());
      box.querySelectorAll("button[data-load]").forEach((btn) => {
        btn.addEventListener("click", async () => {
          const rec = await loadRecord(btn.dataset.load).catch(() => null);
          if (!rec) {
            showMessage("\u8BFB\u53D6\u5931\u8D25", "\u5B58\u6863\u4E0D\u5B58\u5728\u6216\u5DF2\u635F\u574F\u3002");
            return;
          }
          closeModal();
          this.state = rec.data;
          migrateState(this.state);
          this.mapUI.select(null);
          this.show("map");
          this.mapUI.render();
        });
      });
      box.querySelectorAll("button[data-del]").forEach((btn) => {
        btn.addEventListener("click", async () => {
          await deleteRecord(btn.dataset.del).catch(() => void 0);
          closeModal();
          void this.showLoadModal();
        });
      });
    }
    /* ---------------- AI 设置 ---------------- */
    showAISettings() {
      const cfg = loadLLMConfig();
      const html = `<h3>AI \u8BBE\u7F6E</h3>
      <div class="row"><label>AI \u7C7B\u578B</label><span>
        <label style="width:auto"><input type="checkbox" id="ai-enabled" ${cfg.enabled ? "checked" : ""}> \u542F\u7528 LLM Agent\uFF08\u5426\u5219\u4F7F\u7528\u5185\u7F6E\u89C4\u5219 AI\uFF09</label>
      </span></div>
      <div class="row"><label>Endpoint</label><input type="text" id="ai-endpoint" placeholder="https://api.openai.com/v1" value="${esc(cfg.endpoint)}"></div>
      <div class="row"><label>API Key</label><input type="password" id="ai-key" value="${esc(cfg.apiKey)}"></div>
      <div class="row"><label>\u6A21\u578B</label><input type="text" id="ai-model" placeholder="gpt-4o-mini" value="${esc(cfg.model)}"></div>
      <div class="note">\u542F\u7528\u540E\uFF0C\u7535\u8111\u52BF\u529B\u7684\u6BCF\u6708\u51B3\u7B56\u5C06\u7531\u5927\u6A21\u578B\u4F5C\u51FA\uFF1B\u8BF7\u6C42\u5931\u8D25\u65F6\u4F1A\u81EA\u52A8\u56DE\u9000\u5230\u5185\u7F6E\u89C4\u5219 AI\uFF0C\u4E0D\u4F1A\u4E2D\u65AD\u6E38\u620F\u3002<br>
      \u914D\u7F6E\u4EC5\u4FDD\u5B58\u5728\u672C\u6D4F\u89C8\u5668 localStorage \u4E2D\u3002\u8BF7\u4F7F\u7528\u5141\u8BB8\u6D4F\u89C8\u5668\u8DE8\u57DF\u8BBF\u95EE\u7684 OpenAI \u517C\u5BB9\u63A5\u53E3\u3002</div>
      <div class="btn-row"><button class="btn" id="ai-cancel">\u53D6\u6D88</button><button class="btn primary" id="ai-save">\u4FDD\u5B58</button></div>`;
      const box = showModal(html);
      box.querySelector("#ai-cancel").addEventListener("click", () => closeModal());
      box.querySelector("#ai-save").addEventListener("click", () => {
        saveLLMConfig({
          enabled: box.querySelector("#ai-enabled").checked,
          endpoint: box.querySelector("#ai-endpoint").value.trim(),
          apiKey: box.querySelector("#ai-key").value.trim(),
          model: box.querySelector("#ai-model").value.trim()
        });
        closeModal();
        showMessage("\u5DF2\u4FDD\u5B58", "AI \u8BBE\u7F6E\u5DF2\u66F4\u65B0\u3002");
      });
    }
  };
  new App();
})();
