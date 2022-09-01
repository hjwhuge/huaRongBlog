---
date: 2022-05-17
category:
  - JavaScript
tag:
  - writeJs
---

# 手写 instanceof

### instanceof 原理简介

instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype

### instanceof 实现

```javascript
function myInstanceof(left, right) {
  // 首先获取类型的原型
  let prototype = right.prototype;
  // 然后获得对象的原型
  left = left.__proto__;
  // 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
  while (true) {
    if (left === null || left === undefined) return false;
    if (prototype === left) return true;
    left = left.__proto__;
  }
}

// [] instanceof Array //true
myInstanceof([], Array);
```
