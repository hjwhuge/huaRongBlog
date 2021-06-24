module.exports = {
    // 部署的时候需要用到
    base:'/huaRongBlog/',
    // dest: './docs/.vuepress/dist',
    title: '花荣博客',
    description: '花荣',
    // theme: '@vuepress/blog',
    themeConfig: {
        // 这是嵌套标题链接，自动显示当前激活（导航）页面标题的链接，即显示深度（h1- h6的深度）
        // sidebarDepth: 1,
        // text为导航栏显示文字，link为路径，即文件夹名字，注意不要丢了名字前后的'/'
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '前端相关',
                items: [
                    { text: 'javascript', link: '/_posts/js之手写call函数和apply函数.md' },
                ]
            },
            { text: '博文', link: '/_blog/vue生产环境去除警告和打印信息.md' },
            { text: '数据结构与算法', link: '/_algorithm/' },
            { text: '关于', link: '/_me/' },
            { 
                text: 'Github',
                items: [
                    { text: 'GitHub首页', link: 'https://github.com/hjwhuge' },
                ]
            },
        ],
        // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
        // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
        sidebar: {
            '/_blog/': [
                ['/_blog/vue生产环境去除警告和打印信息.md', 'vue生产环境去除警告和打印信息'],
                ['/_blog/vue项目中获取div高度并默认滚动到底部.md', 'vue项目中获取div高度并默认滚动到底部'],
            ],
        },

    },
}