# vue获取div节点，默认设置滚动到底部
# 前言
***
**最近在做一个简单的聊天窗口，技术栈采用的是vue+element-ui 需求是每次进入该页面都会默认将滚动条滚动到底部，即显示最新的消息：**
# 如果是整个页面滚动到顶部，写一句代码即可
```javascript
    window.scrollTo(0,0);
```
***
# 获取DOM的方法
***
```javascript
    // 方法1
    let DOM = this.$el.querySelector(".className");
    // 方法2
    let newDom = document.getElementsByClassName('className');
```
# 设置默认滚动到底部
***
## 方法1
```javascript
        setTimeout(() => {
		let container = this.$el.querySelector(".chat_content");
		container.scrollTop = container.scrollHeight;
        }, 0)
```
## 方法2
```javascript
	this.$nextTick(() => {
		let container = this.$el.querySelector(".chat_content");
		console.log(container.scrollHeight)
		container.scrollTop = container.scrollHeight;
	});
```
```!
特别注意
```
    **采用上诉两个方法之后，还存在另一个问题，第一次进入时并未滚动到底部，之后才可以**
## 解决方法
### 把延时增加即可
```javascript
        setTimeout(() => {
		let container = this.$el.querySelector(".chat_content");
		container.scrollTop = container.scrollHeight;
        }, 100)
```
# 总结
***
**在vue中操作DOM时经常会遇到先执行了该方法，DOM并没有更新完成，这时就应该用到延时器或者vue中的nextTick方法**
# 传送门(推荐阅读)
***
* [nextTick方法介绍](https://cn.vuejs.org/v2/guide/reactivity.html#%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0%E9%98%9F%E5%88%97)
