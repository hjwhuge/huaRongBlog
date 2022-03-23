# vue 生产环境去除无用信息

# 前言

---

**在开发项目过程中，经常会需要用到 console 来打印检查问题，项目上线前一个个注释掉也会有遗漏的，并不这样建议；还有在使用 UI 框架时，UI 框架很多时候会给出很多警告信息，提醒您采用更优的方法，这就导致项目上线之后整个控制台异常非常乱，一大堆报错和打印信息，解决方案如下：**

# terser-webpack-plugin 插件在脚手架中的应用简介

---

**vue-cli3 采用 terser-webpack-plugin 插件来优化打包过程,如下**

- 脚手架配置路径:node_modules/@vue/cli-service/lib/config/prod.js
- 配置代码如下

```javascript
if (process.env.VUE_CLI_TEST) {
  webpackConfig.optimization.minimize(false);
} else {
  const TerserPlugin = require("terser-webpack-plugin");
  const terserOptions = require("./terserOptions");
  webpackConfig.optimization.minimizer([
    new TerserPlugin(terserOptions(options)),
  ]);
}
```

- terser-webpack-plugin 的具体配置写在与 prod.Js 同路径的 terserOptions.js 文件中

# 需要新增的配置！！！

---

```!
特别注意
```

    * 新增配置的文件：terserOptions.js
    * 添加到该文件的compress对象中，新增代码如下

```javascript
      warnings: false,
      drop_console: true,
      drop_debugger: true,
      pure_funcs: ['console.log'],
      pure_funcs: ['console.warn'],
```

# 总结

---

**新增配置，重新打包之后，启动项目后，在控制台内就看不到烦人的 console 和 warnings 信息了。**

# 传送门(推荐阅读)

---

- [npm 官网---terser-webpack-plugin 说明](https://www.npmjs.com/package/terser-webpack-plugin)
- [github----terser-webpack-plugin 说明](https://github.com/webpack-contrib/terser-webpack-plugin)
- [markdown 语法说明](https://juejin.im/editor/guide/markdown)
