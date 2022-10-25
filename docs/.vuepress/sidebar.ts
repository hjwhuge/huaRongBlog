import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  {
    text: "如何使用",
    icon: "creative",
    prefix: "guide/",
    link: "guide/",
    children: "structure",
  },
  {
    text: "JavaScript专题",
    icon: "note",
    prefix: "javascript/",
    children: [
      {
        text: "基础",
        icon: "note",
        collapsable: true,
        prefix: "base/",
        children: ["prototype", "scope", "this", "EventLoop", "inherit"],
      },
      {
        text: "手写xx",
        icon: "note",
        collapsable: true,
        prefix: "write/",
        children: [
          "callApplyBind",
          "instanceof",
          "debounceThrottle",
          "deepCopy",
        ],
      },
    ],
  },
  {
    text: "TypeScript专题",
    icon: "note",
    prefix: "typescript/",
    children: ["base", "challenge"],
  },
  {
    text: "vue技术",
    icon: "note",
    prefix: "vue/",
    children: ["vue-get-div-height", "vue-prd-del-console"],
  },
]);
