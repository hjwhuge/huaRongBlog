import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "All Blog", link: "/guide/" },
  {
    text: "TypeScript",
    children: [
      {
        text: "TypeScript基础",
        link: "/typescript/base",
      },
      {
        text: "TypeScript类型挑战",
        link: "/typescript/challenge",
      },
    ],
  },
  {
    text: "算法与数据结构",
    link: "https://hjwhuge.github.io/",
  },
]);
