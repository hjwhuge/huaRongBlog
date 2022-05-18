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
        text: "手写xxxx",
        icon: "note",
        collapsable: true,
        prefix: "write/",
        children: ["callApplyBind", "instanceof", "plan"],
      },
    ],
  },
  {
    text: "vue技术",
    icon: "note",
    prefix: "vue/",
    children: ["vue-get-div-height", "vue-prd-del-console"],
  },
]);
