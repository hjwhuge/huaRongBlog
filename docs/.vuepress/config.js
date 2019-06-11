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
            { text: '知识点', link: '/_posts/vue生产环境去除警告和打印信息.md' },
            { text: '随笔', link: '/_writings/2019-06-11-随便写写.md' },
            { text: '关于', link: '/me/' },
            {
                text: '个人网站',
                items: [
                    { text: '阿里云', link: 'http://hujiawei.top/' },
                    { text: 'github', link: 'https://hjwhuge.github.io/huaRongBlog/' },
                ]
            },
            { 
                text: 'Github',
                items: [
                    { text: 'GitHub首页', link: 'https://github.com/hjwhuge' },
                    { text: '仓库列表', link: 'https://github.com/hjwhuge?tab=repositories' },
                    { text: '博客仓库地址', link: 'https://github.com/hjwhuge/huaRongBlog' },
                ]
            },
            // 中英文切换
            {
                text: '语言',
                items: [
                    { text: '中文', link: '/language/chinese' },
                    { text: '英语', link: '/language/japanese' }
                ]
            },
        ],
        // 侧边栏配置,侧边栏组，不同（导航）页面对应不同的侧边栏
        // 以对象形式配置，前边的key为nav处的路径,后边提供一个数组作为此侧边栏中的子标题
        // sidebar: {
            // '/About/': [
            //     // ''空字符串代表主页，显示README.md中的内容
            //     '',
            //     ['201709', '201709'],//使用数组为侧边栏起别名，前边是md名称，后边是链接显示的文字
            //     ['201710', '201710'],
            // ],
            // '/study/': [
            //     '',
            //     ['axios', '1.axios'],
            //     ['document', '2.document'],
            // ]
        // },
        sidebar:'auto',

    },
}