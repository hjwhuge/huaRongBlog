---
date: 2022-05-17
category:
  - JavaScript
tag:
  - JS
  - write
---

# 手写 new

### 使用 new 操作符，会执行以下操作

- 创建一个全新的对象
- 这个新对象会被执行[[Prototype]]连接
  - 链接到原型
- 这个新对象会绑定到函数调用的 this
- 如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象

### 代码实现

```javascript
function New() {
  // 创建一个空对象
  let obj = {};
  // 获取构造函数，代码含义：删除并拿到arguments的第一项
  let Con = [].shift.call(arguments);
  // 设置空对象的原型
  obj.__proto__ = Con.prototype;
  // 绑定 this 并执行构造函数
  let result = Con.apply(obj, arguments);
  // 确保返回值为对象
  return result instanceof Object ? result : obj;
}
```
