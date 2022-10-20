---
date: 2022-05-31
category:
  - JavaScript
tag:
  - JS
---

# this 和 this 指向

## this

### 说明

- this 是 JavaScript 的关键字之一。它是 对象 自动生成的一个内部对象，只能在 对象 内部使用。随着函数使用场合的不同，this 的值会发生变化。
- this 实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用
- 为什么很多代码中要使用 var that = this？
  - this 代表着当前对象，它在程序中随着上下文执行随时变化。
  - 在改变 this 的地方通过这句代码防止全局 this 改写

## this 绑定规则

- 要判断一个运行中函数的 this 绑定，就需要找到这个函数的直接调用位置。找到之后就可以应用下面四条规则来判断 this 的绑定对象

### 默认绑定

- 示例代码

```javascript
function foo() {
  var a = 1;
  console.log(this.a); // 10
}
var a = 10;
foo();
```

- 这种就是典型的默认绑定，我们看 foo 调用的位置，像 这种直接使用而不带任何修饰的函数调用 ，就只能 应用 默认绑定。
- 那默认绑定到哪呢，一般是 window 上，严格模式下 是 undefined。

### 隐式绑定

- 示例代码

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 10,
  foo: foo,
};
foo(); // undefined，this 指向 window，打印window.a

obj.foo(); // 10，this 指向 obj
```

- foo()的这个调用方式，就是我们刚刚写的默认绑定
- obj.foo()这种调用方式，就是 隐性绑定 。
  - 函数 foo 执行的时候有了上下文对象，即 obj。这种情况下，函数里的 this 默认绑定为上下文对象。
  - 如果是链性的关系，比如 xx.yy.obj.foo();, 上下文取函数的直接上级，即紧挨着的那个，或者说对象链的最后一个。

### 显式绑定

- 隐式绑定的限制

  - 上下文必须包含该函数，拓展性和维护性很差

- 通过 call、apply、bind 来实现 显式绑定

  - [call、apply、bind 相关知识请看](../write/callApplyBind.md)

- 示例代码

```javascript
function foo() {
  console.log(this.a);
}
var obj = {
  a: 10, //去掉里面的foo
};
foo.call(obj); // 10
```

其实 call 是 foo 上的一个函数,在改变 this 指向的同时执行这个函数

### new 绑定

- new

  - [new 相关知识请看](../write/new.md)

- 示例代码

```javascript
function foo() {
  this.a = 10;
  console.log(this);
}
foo(); // window对象
console.log(window.a); // 10   默认绑定

var obj = new foo(); // foo{ a : 10 }  创建的新对象的默认名为函数名
// 然后等价于 foo { a : 10 };  var obj = foo;
console.log(obj.a); // 10    new绑定
```

使用 new 调用函数后，函数会 以自己的名字 命名 和 创建 一个新的对象，并返回。

- 特别注意 : 如果原函数返回一个对象类型，那么将无法返回新对象,你将丢失绑定 this 的新对象，例:

```javascript
function foo() {
  this.a = 10;
  return new String("捣蛋鬼");
}
var obj = new foo();
console.log(obj.a); // undefined
console.log(obj); // "捣蛋鬼"
```

### 优先级

```
new 绑定() > 显示绑定 > 隐式绑定 > 默认绑定;
```

## 总结

- 如果函数被 new 修饰
  - this 绑定的是新创建的对象
    - 例:var bar = new foo(); 函数 foo 中的 this 就是一个叫 foo 的新创建的对象 , 然后将这个对象赋给 bar
  - 这样的绑定方式叫 new 绑定
- 如果函数是使用 call,apply,bind 来调用的
  - this 绑定的是 call,apply,bind 的第一个参数
    - 例: foo.call(obj); , foo 中的 this 就是 obj
  - 这样的绑定方式叫 显性绑定
- 如果函数是在某个 上下文对象 下被调用
  - this 绑定的是那个上下文对象
    - 例 : var obj = { foo : foo }; obj.foo(); foo 中的 this 就是 obj
  - 这样的绑定方式叫 隐性绑定
- 如果都不是，即使用默认绑定
  - 例:function foo(){...} foo() ,foo 中的 this 就是 window.(严格模式下默认绑定到 undefined)
  - 这样的绑定方式叫 默认绑定

## 箭头函数

- 首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this
