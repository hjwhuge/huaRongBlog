---
date: 2022-10-20
category:
  - JavaScript
tag:
  - JS
---

# 继承

> 实现 Child 继承 Parent

## 原型链继承

> 将父类指向子类的原型。

```javascript
function Parent() {
  this.name = "kevin";
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child() {}

// 核心代码
Child.prototype = new Parent();

// 测试
var child1 = new Child();
console.log(child1.getName()); // kevin
```

- 缺点
  - 原型是所有子类实例共享的，改变一个其他也会改变
  - 在创建 Child 的实例时，不能向 Parent 传参

## 构造继承（经典继承）

> 在子类构造函数中调用父类构造函数

```javascript
function Parent() {
  this.names = ["kevin", "daisy"];
}

function Child() {
  // 核心代码
  Parent.call(this);
}

// 测试
var child1 = new Child();
child1.names.push("yayu");
console.log(child1.names); // ["kevin", "daisy", "yayu"]

var child2 = new Child();
console.log(child2.names); // ["kevin", "daisy"]
```

- 优点
  - 避免了引用类型的属性被所有实例共享
  - 可以在 Child 中向 Parent 传参
- 缺点
  - 方法都在构造函数中定义，每次创建实例都会创建一遍方法

## 组合继承

> 原型继承和构造继承组合，使用构造继承继承父类参数，使用原型继承继承父类函数

```javascript
function Parent(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(name, age) {
  // 核心代码
  Parent.call(this, name);
  this.age = age;
}

// 核心代码
Child.prototype = Parent.prototype;

// 测试
var child1 = new Child("kevin", "18");
child1.colors.push("black");

console.log(child1.name); // kevin
console.log(child1.age); // 18
console.log(child1.colors); // ["red", "blue", "green", "black"]

var child2 = new Child("daisy", "20");

console.log(child2.name); // daisy
console.log(child2.age); // 20
console.log(child2.colors); // ["red", "blue", "green"]
```

- 缺点
  - 父类原型和子类原型是同一个对象，无法区分子类真正是由谁构造

## 寄生继承

> 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式来做增强对象，最后返回对象。

```javascript
function createObj(o) {
  var clone = Object.create(o);
  clone.sayName = function () {
    console.log("hi");
  };
  return clone;
}
```

- 缺点
  - 和构造继承模式一样，每次创建对象都会创建一遍方法。

## 寄生组合继承

> 在组合继承的基础上，子类继承一个由父类原型生成的空对象。

```javascript
function Child(name) {
  Parent.call(this);
}

Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    value: Child,
  },
});
```

## 总结（完善的继承函数）

```javascript
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
}

// 使用
function Child() {
  Parent.call(this);
  //...
}
inherits(Child, Parent);

Child.prototype.fun = ...


```

## 相关链接

- [文档-继承](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)
- [JavaScript 深入之继承的多种方式和优缺点](https://github.com/mqyqingfeng/Blog/issues/16)
- [ JavaScript 中的继承](https://medium.com/@happymishra66/inheritance-in-javascript-21d2b82ffa6f)
