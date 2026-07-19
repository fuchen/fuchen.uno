"use strict";

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

// src/mapdata.ts
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
function reseed(seed) {
  rng = new RNG(seed);
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
    const scCity = sc.cities.find((c2) => c2.cityId === def.id);
    const owner = scCity ? scCity.owner : null;
    if (owner && !fidSet.has(owner)) throw new Error(`\u5267\u672C ${scenarioId}: \u672A\u77E5\u52BF\u529B ${owner}`);
    const owned = !!owner;
    return {
      id: def.id,
      owner,
      gold: scCity?.gold ?? Math.round(def.comm * (owned ? 12 : 6)),
      food: scCity?.food ?? Math.round(def.agri * (owned ? 26 : 13)),
      troops: scCity?.troops ?? Math.round(def.pop * (owned ? 250 : 80)),
      agri: def.agri,
      comm: def.comm,
      wall: scCity?.wall ?? (owned ? 30 : 10),
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
  return state.genStates[genId]?.level ?? 1;
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
  return CITY_BY_ID[city.id].pop * 400;
}
function recruitQuote(city) {
  const add = Math.min(400 + bestStat(city, "cha") * 8, maxTroopsOf(city) - city.troops);
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
  const f = factionById(state, fid);
  const g = GENERALS[cp.genId];
  const gs = state.genStates[cp.genId];
  if (!gs) return 0;
  const fromF = cp.from ? state.factions.find((x) => x.id === cp.from && x.alive) : null;
  if (fromF && fromF.ruler === cp.genId) return 0;
  const rulerCha = GENERALS[f.ruler]?.cha ?? 60;
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
      gs.loyalty = 55 + Math.round((GENERALS[f.ruler]?.cha ?? 60) / 5);
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
  const def = input.genId != null ? GENERALS[input.genId] : null;
  const level = def ? Math.max(1, input.level ?? 1) : 0;
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
  const collectAll = (side) => b.units.filter((u) => u.side === side && u.alive).map((u) => ({ genId: u.genId, troops: u.troops, kills: u.kills }));
  return {
    winner: b.winner ?? "def",
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
        plans.push({ from: c2, to: e, score: ratio * rng.range(0.9, 1.15), generals: gens, troops: Math.min(avail, 2e4) });
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
    cmds.push({ type: "attack", cityId: p.from.id, to: p.to.id, squads });
    busySrc.add(p.from.id);
    busyTgt.add(p.to.id);
    attacksLeft--;
  }
  for (const c2 of myCities) {
    if (busySrc.has(c2.id)) continue;
    const isFront = frontier.has(c2.id);
    if (isFront) {
      const threatened = neighborsOf(state, c2.id).some((n) => n.owner !== fid && n.troops > c2.troops * 1.2);
      if (threatened) {
        if (c2.troops < maxTroopsOf(c2) && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
          cmds.push({ type: "recruit", cityId: c2.id });
          continue;
        }
        if (c2.wall < 85 && c2.gold >= 200) {
          cmds.push({ type: "wall", cityId: c2.id });
          continue;
        }
        cmds.push({ type: "rest", cityId: c2.id });
        continue;
      }
      if (c2.troops < maxTroopsOf(c2) * 0.8 && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
        cmds.push({ type: "recruit", cityId: c2.id });
        continue;
      }
      if (c2.train < 70 && c2.troops >= 3e3 && c2.gold >= 100) {
        cmds.push({ type: "train", cityId: c2.id });
        continue;
      }
      if (c2.wall < 60 && c2.gold >= 200) {
        cmds.push({ type: "wall", cityId: c2.id });
        continue;
      }
      if (c2.gold >= 200 && (c2.agri < 90 || c2.comm < 90)) {
        cmds.push(c2.agri <= c2.comm ? { type: "farm", cityId: c2.id } : { type: "commerce", cityId: c2.id });
        continue;
      }
      cmds.push({ type: "rest", cityId: c2.id });
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
          cmds.push({ type: "move", cityId: c2.id, to: hungry.id, squads: [], gold: 0, food: amount, captives: [] });
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
          cmds.push({ type: "move", cityId: c2.id, to: fwd.id, squads, gold: 0, food: 0, captives: [] });
          continue;
        }
      }
    }
    if (c2.gold >= 200 && f.develop > 0.3) {
      if (c2.agri <= c2.comm && c2.agri < 95) {
        cmds.push({ type: "farm", cityId: c2.id });
        continue;
      }
      if (c2.comm < 95) {
        cmds.push({ type: "commerce", cityId: c2.id });
        continue;
      }
    }
    if (c2.troops < maxTroopsOf(c2) * 0.7 && c2.gold >= recruitQuote(c2).cost && c2.loyalty > 35 && c2.food > c2.troops * 0.1) {
      cmds.push({ type: "recruit", cityId: c2.id });
      continue;
    }
    cmds.push({ type: "rest", cityId: c2.id });
  }
  return cmds;
}
function aiResolveCaptives(state, fid) {
  const f = factionById(state, fid);
  for (const city of factionCities(state, fid)) {
    for (const cp of [...city.captives]) {
      if (cp.tried) continue;
      const loyalty = state.genStates[cp.genId]?.loyalty ?? 50;
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

// test/balance.ts
var MONTHS = 60;
function runScenario(scenarioId, seed) {
  reseed(seed);
  const sc = SCENARIOS.find((s) => s.id === scenarioId);
  const state = newGame(scenarioId, sc.factions[0].id);
  const years = [];
  const bucket = () => ({ cityMonths: 0, famine: 0, goldSum: 0, foodSum: 0, loyaltySum: 0, troopsSum: 0, captures: 0 });
  let cur = bucket();
  const prevOwners = /* @__PURE__ */ new Map();
  for (const c2 of state.cities) prevOwners.set(c2.id, c2.owner);
  for (let m = 0; m < MONTHS; m++) {
    for (const f of state.factions.filter((f2) => f2.alive)) {
      for (const cmd of planTurn(state, f.id)) {
        const res = executeCommand(state, cmd, f.id);
        if (res.battle) {
          const r = autoRunBattle(createBattle(res.battle));
          applyBattleResult(state, res.battle, r);
        }
      }
      aiResolveCaptives(state, f.id);
    }
    settleMonth(state);
    for (const c2 of state.cities) {
      if (!c2.owner) continue;
      cur.cityMonths++;
      if (c2.food <= 0) cur.famine++;
      cur.goldSum += c2.gold;
      cur.foodSum += c2.food;
      cur.loyaltySum += c2.loyalty;
      cur.troopsSum += c2.troops;
      if (prevOwners.get(c2.id) !== c2.owner) {
        cur.captures++;
        prevOwners.set(c2.id, c2.owner);
      }
    }
    if (state.month === 12 || m === MONTHS - 1) {
      years.push(cur);
      cur = bucket();
    }
  }
  console.log(`
=== ${sc.name}\uFF08${MONTHS} \u4E2A\u6708\uFF0C\u5B58\u6D3B ${state.factions.filter((f) => f.alive).length}/${state.factions.length}\uFF09===`);
  console.log("\u5E74 | \u9965\u8352\u7387 | \u5E73\u5747\u91D1 | \u5E73\u5747\u7CAE | \u5E73\u5747\u6C11\u5FE0 | \u5E73\u5747\u5175\u529B | \u6613\u4E3B\u6B21\u6570");
  years.forEach((b, i) => {
    if (b.cityMonths === 0) return;
    const pct = (x) => (x * 100).toFixed(1) + "%";
    const avg = (x) => Math.round(x / b.cityMonths);
    console.log(
      `${i + 1} | ${pct(b.famine / b.cityMonths)} | ${avg(b.goldSum)} | ${avg(b.foodSum)} | ${avg(b.loyaltySum)} | ${avg(b.troopsSum)} | ${b.captures}`
    );
  });
}
for (const sc of SCENARIOS) runScenario(sc.id, 20260717);
