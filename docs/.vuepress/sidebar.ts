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
        children: ["handwritingCallApplyBind", "plan"],
      },
    ],
  },
  {
    text: "vue技术",
    icon: "note",
    prefix: "vue/",
    children: ["vue-get-div-height", "vue-prd-del-console"],
  },
  {
    text: "其他",
    icon: "note",
    prefix: "posts/",
    children: [
      {
        text: "文章 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
    ],
  },
]);
