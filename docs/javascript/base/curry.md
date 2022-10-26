---
date: 2022-10-20
category:
  - JavaScript
tag:
  - JS
---

# 柯里化

定义：在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

> 柯里化 是一种转换，将 f(a,b,c) 转换为可以被以 f(a)(b)(c) 的形式进行调用

## 举例

```javascript
function add(a, b) {
  return a + b;
}

// 执行 add 函数，一次传入两个参数即可
add(1, 2); // 3

// 假设有一个 curry 函数可以做到柯里化
var addCurry = curry(add);
addCurry(1)(2); // 3
```

## 实现

```javascript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 测试
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6，仍然可以被正常调用
alert(curriedSum(1)(2, 3)); // 6，对第一个参数的柯里化
alert(curriedSum(1)(2)(3)); // 6，全柯里化
```

## 应用场景

### 参数复用

```javascript
function getUrl(protocol, domain, path) {
  return protocol + "://" + domain + "/" + path;
}

var page1 = getUrl("http", "www.conardli.top", "page1.html");
var page2 = getUrl("http", "www.conardli.top", "page2.html");
```

我们使用 currying 来简化它：

```javascript
let conardliSite = currying(simpleURL)("http", "www.conardli.top");
let page1 = conardliSite("page1.html");
```

## 相关链接

- [文档-柯里化](https://zh.javascript.info/currying-partials)
- [JavaScript 专题之函数柯里化](https://github.com/mqyqingfeng/Blog/issues/42)
