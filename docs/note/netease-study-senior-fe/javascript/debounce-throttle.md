---
lang: zh-CN
description: 防抖、节流。
meta:
  - name: keywords
    content: 网易云课堂,高级前端开发工程师,Javascript 进阶,函数,防抖和节流,JavaScript,js
---

# 防抖和节流

\#网易云课堂#
\#高级前端开发工程师#
\#Javascript 进阶#
\#函数#
\#防抖和节流#
\#JavaScript#
\#js#

防抖、节流。

* 应用
  * resize、scroll、mousemove、mousehover
  * button 点击、input 输入

## 防抖

* 概念
  * 持续触发函数时，连续两次触发的时间间隔大于规定时间或最后一次触发达到规定时间执行一次函数
  * 触发函数 n 秒内函数只能执行一次，若在 n 秒内再次触发，则重新计算执行函数的时间
  * 在一个动作发生一定时间后，才执行特定事件
* 案例

  ```js
  let debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn && fn(...args);
      }, delay);
    };
  };
  ```

  * mousemove 事件 delay 500

<style>
  .container-d { text-align: center; height: 200px; background-color: #d2d2d2; }
  .container-d p { margin: 0; line-height: 100px; font-size: 60px; }
</style>
<div id="container-d" class="container-d">
  <p id="debounce-1">0</p>
  <p id="debounce-2">0</p>
</div>
<script>
  let debounce = (fn, delay) => {
    let timer = null;
    return (...args) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        fn && fn(...args);
      }, delay);
    };
  };
  let containerD = document.getElementById('container-d'),
      d1 = document.getElementById('debounce-1'),
      d2 = document.getElementById('debounce-2');
  let countD1 = () => {
    d1.innerText = (+d1.innerText || 0) + 1;
  }, countD2 = debounce(() => {
    d2.innerText = (+d2.innerText || 0) + 1;
  }, 500);
  containerD.addEventListener('mousemove', countD1);
  containerD.addEventListener('mousemove', countD2);
</script>

## 节流

* 概念
  * 持续触发函数时，一段时间只执行一次函数
* 案例

  ```js
  let throttle = (fn, delay) => {
    let flag = true;
    return (...args) => {
      if (!flag) { return; }
      flag = false;
      var timer = setTimeout(() => {
        fn && fn(...args);
        timer && clearTimeout(timer);
        flag = true
      }, delay);
    };
  };
  ```

  * click 事件 delay 1000

<style>
  .container-t { text-align: center; height: 200px; background-color: #d2d2d2; }
  .container-t p { margin: 0; line-height: 100px; font-size: 60px; }
</style>
<div id="container-t" class="container-t">
  <p id="throttle-1">0</p>
  <p id="throttle-2">0</p>
</div>
<script>
  let throttle = (fn, delay) => {
    let flag = true;
    return (...args) => {
      if (!flag) { return; }
      flag = false;
      var timer = setTimeout(() => {
        fn && fn(...args);
        timer && clearTimeout(timer);
        flag = true
      }, delay);
    };
  };
  let containerT = document.getElementById('container-t'),
      t1 = document.getElementById('throttle-1'),
      t2 = document.getElementById('throttle-2');
  let countT1 = () => {
    t1.innerText = (+t1.innerText || 0) + 1;
  }, countT2 = throttle(() => {
    t2.innerText = (+t2.innerText || 0) + 1;
  }, 1000);
  containerT.addEventListener('click', countT1);
  containerT.addEventListener('click', countT2);
</script>
