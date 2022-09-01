---
date: 2022-09-01
category:
  - JavaScript
tag:
  - writeJs
---

# 手写 防抖、节流

## 防抖（debounce）

### 定义

防抖（debounce）：不管事件触发频率多高，一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，就以新的事件的时间为准，n 秒后才执行，总之，触发完事件 n 秒内不再触发事件，n 秒后再执行。

### 常见使用场景

- 窗口大小变化
- 监听滚动事件
- 表单验证，输入完成后 m 秒后验证

### 实现

## 节流（throttle）

### 定义

节流（throttle）：持续触发事件，只在单位时间内执行一次。

- 输入框搜索

### 常见使用场景

- 输入框搜索

### 时间戳实现

> 第一次事件肯定触发，最后一次不会触发

用时间戳，当触发事件的时候，我们取出当前的时间戳，然后减去之前的时间戳(最一开始值设为 0 )，如果大于设置的时间周期，就执行函数，然后更新时间戳为当前的时间戳，如果小于，就不执行。

```javascript
function throttle(func, wait) {
  let pre = 0;
  return function (...args) {
    const now = Date.now();
    if (now - pre > wait) {
      func.apply(this, args);
      pre = now;
    }
  };
}

// 使用
const fun = function () {};
throttle(fun, 1000);
```

### 定时器实现

> 第一次事件不会触发，最后一次一定触发

当触发事件的时候，我们设置一个定时器；再触发事件的时候，如果定时器存在，就不执行，直到定时器执行，然后执行函数，清空定时器，这样就可以设置下个定时器。

```javascript
function throttle(func, wait) {
  let timer = null;
  return function (...args) {
    // timer === null
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        func.apply(this, args);
      }, wait);
    }
  };
}

// 使用
const fun = function () {};
throttle(fun, 1000);
```

### 完整版

> 定时器和时间戳的结合版，也相当于节流和防抖的结合版，第一次和最后一次都会触发

```javascript
function throttle(func, wait) {
  let pre = 0;
  let timer = null;
  return function (...args) {
    const now = Date.now();
    if (now - pre > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      pre = now;
      func.apply(this, args);
    } else if (!timer) {
      // 只有最后一次才会触发
      timer = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
}
```
