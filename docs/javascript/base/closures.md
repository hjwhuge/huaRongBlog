---
date: 2022-10-26
category:
  - JavaScript
tag:
  - JS
---

# 闭包

> 是指一个函数可以记住其外部变量并可以访问这些变量 （javascript.info）

MDN 定义：一个函数和对其周围状态（词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

## 闭包

```javascript
function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();
```

说明：在一些编程语言中，一个函数中的局部变量仅存在于此函数的执行期间。一旦 makeFunc() 执行完毕，你可能会认为 name 变量将不能再被访问。然而，因为代码仍按预期运行，所以在 JavaScript 中情况显然与此不同。

原因在于，JavaScript 中的函数会形成了闭包。 闭包是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。在本例子中，myFunc 是执行 makeFunc 时创建的 displayName 函数实例的引用。displayName 的实例维持了一个对它的词法环境（变量 name 存在于其中）的引用。因此，当 myFunc 被调用时，变量 name 仍然可用，其值 Mozilla 就被传递到 alert 中。

## 闭包应用

```javascript
// 最简单闭包
var a = 1;
function out() {
  console.log(a);
}

//模块化开发
var result = (function () {
  var a = 10; //私有变量，一直存在内存中  ,本来应该释放，后面有函数一直在使用
  return function () {
    //可以方法
    a++;
    console.log(a);
  };
})();
result();
result();
result();

//循环绑定点击事件
// for(var i=0;i<btns.length;i++){

//     btns[i].onclick=function(){
//         console.log(i);
//     }

// }

// 闭包
for (var i = 0; i < btns.length; i++) {
  (function (i) {
    btns[i] = function () {
      console.log(i);
    };
  })(i);
}

// 用匿名函数模仿块级作用域
(function () {
  //这里是块级作用域
})();
```

## 常见闭包面试题

### 循环中创建闭包

问题：不管执行 aInputs 中哪个函数，都是打印 6

原因：TODO

```javascript
let aInputs = [];
for (var i = 0; i < 6; i++) {
  aInputs[i] = function () {
    console.log(i);
  };
}
aInputs[2](); // 6
```

解法一：增加闭包

```javascript
let aInputs = [];
for (var i = 0; i < 6; i++) {
  aInputs[i] = makeCallback(i);
}

function makeCallback(i) {
  return function () {
    console.log(i);
  };
}
aInputs[2](); // 2
```

解法二：利用 let 关键字

```javascript
let aInputs = [];
for (let i = 0; i < 6; i++) {
  aInputs[i] = function () {
    console.log(i);
  };
}
aInputs[2](); // 2
```

## 相关链接

- [javascript.info 闭包](https://zh.javascript.info/closure)
- [MDN 闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)
- [冴羽 博客](https://github.com/mqyqingfeng/Blog/issues/9)
- [知乎讨论 闭包](https://www.zhihu.com/question/34210214)
- [JavaScript 的静态作用域链与“动态”闭包链](https://juejin.cn/post/6957913856488243237)
