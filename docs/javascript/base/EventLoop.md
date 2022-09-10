---
date: 2022-09-10
category:
  - JavaScript
tag:
  - JS
---

# Event Loop

## 理解

任务类型分为宏任务和微任务

- MacroTask 代表宏任务
- MicroTask 代表微任务
- 执行顺序：确认共有多少个宏任务，且每个宏任务包含的微任务队列（可以为空），最后依次执行

<img :src="$withBase('/eventloop.png')" alt="eventloop" />

## 宏任务

- script 整体代码
- setTimeout
- setInterval
- requestAnimationFrame
  - 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
  - 只存在浏览器
- setImmediate
  - 只存在 Nodejs 中，类似于 setTimeout

## 微任务

- Promise
- MutationObserver
  - [MutationObserver()](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver/MutationObserver)
  - 创建并返回一个新的 MutationObserver 它会在指定的 DOM 发生变化时被调用

## 异步代码执行顺序

- 首先我们分析有多少个宏任务；
- 在每个宏任务中，分析有多少个微任务；
- 根据调用次序，确定宏任务中的微任务执行次序；
- 根据宏任务的触发规则和调用次序，确定宏任务的执行次序；
- 确定整个顺序。
