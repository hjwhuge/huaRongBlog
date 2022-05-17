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
function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);
```

```javascript
function create() {
  let obj = {};
  let Con = [].shift.call(arguments);
  obj.__proto__ = Con.prototype;
  let result = Con.apply(obj, arguments);
  return result instanceof Object ? result : obj;
}
```
