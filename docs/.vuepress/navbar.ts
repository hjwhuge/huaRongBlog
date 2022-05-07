import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  { text: "All Blog", icon: "creative", link: "/guide/" },
  {
    text: "算法与数据结构",
    icon: "note",
    link: "https://hjwhuge.github.io/",
  },
]);
