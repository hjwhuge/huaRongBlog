---
date: 2022-05-15
category:
  - JavaScript
tag:
  - JS
---

# 原型和原型链

### 原型

#### 说明

- js 是基于原型的一种编程语言
  - 每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性
- js 的原型其实也是一个对象，其中包含很多属性和方法（eg： toString() ）

#### [[prototype]]

- 对象的原型
- 每个 JS 对象都有 一个特殊的 [[prototype]] 内置属性，该属性即原型对象
  - 通过 obj.\_\_proto\_\_ 访问该内置属性
    - 不推荐直接使用，已过时
  - 推荐使用 Object.getPrototypeOf(obj) 访问该内置属性
- 原型（[[prototype]]）下有一个 constructor 属性，也就是构造函数
  - 构造函数中又有一个 prototype 属性，它和 \_\_proto\_\_ 属性下的内容是一致的

#### prototype

- 构造函数的 原型（prototype） 属性，即构造函数访问原型对象可以通过该属性
- 只要创建了一个新函数，就会自动生成一个 prototype 属性，该属性指向函数的原型对象；

#### 对象的原型 vs 构造函数 prototype 属性

- 前者是每个实例上都有的属性，后者是构造函数的属性。
- 也就是说，Object.getPrototypeOf(new Foo()) === Foo.prototype
  - 等价于 (new Foo()).\_\_proto\_\_ === Foo.prototype

#### 总结

- 原型的 constructor 属性指向构造函数
- 构造函数又通过 prototype 属性指回原型
  - 但是并不是所有函数都具有这个属性，Function.prototype.bind() 就没有这个属性

### 原型链

- 原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系被称为原型链
- 实例对象中找一个属性
  - 实例对象--构造函数内部--原型对象下面
  - 找到即返回，没找到往下面找
- 如果找到最上层都没有找到，那么就会返回 undefined
  - 最上层是什么 —— Object.prototype
    - 由于所有内置对象都源于这个 Object.prototype 对象
  - 如何判断是否已经到了最上层
    - Object.prototype.\_\_proto\_\_ === null

### 代码示例

```javascript
// 构造函数

function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    alert(this.name)
}

// 创建实例对象

var f = new Foo('zhangsan')
f.printName = function () {
    console.log(this.name)
}

// 测试

f.printName()
// 直接在对象本身获取该方法
f.alertName()
// 对象本身并没有该方法，所以去他的__proto__中寻找
// f.__proto__也就相当于Foo.prototype（f.__proto__指向的就是f的构造函数Foo的prototype）
f.toString()
// 对象本身并没有该方法，所以去他的__proto__中寻找
// 如果在f.__proto__中没有找到toString，那么就继续去f.__proto__.__proto__中寻找
// 因为f.__proto__就是一个普通的对象而已嘛！
// 理解
* f.__proto__即Foo.prototype，没有找到toString，继续往上找
* f.__proto__.__proto__即Foo.prototype.__proto__。
  * Foo.prototype就是一个普通的对象，因此 Foo.prototype.__proto__就是Object.prototype
  * // console.log(Foo.prototype.__proto__ === Object.prototype) //true
  * 在这里可以找到toString
* 因此f.toString最终对应到了Object.prototype.toString
// 总结
  // 这样一直往上找，你会发现是一个链式的结构，所以叫做“原型链”。
  // 如果一直找到最上层都没有找到，那么就宣告失败，返回undefined。
  // 最上层是什么 —— Object.prototype.__proto__ === null
```
