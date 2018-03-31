# frontend-tech-map
前端知识体系大全
## HTML
HTML指超文本标记语言，标准通用标记语言下的一个应用。“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。
HTML标记标签通常被称为 HTML 标签 (HTML tag)

### html4
文本段落
p,h1,h2,h3,blockquote,span,div，img
列表
ol,ul,li,dl,dt,dd
内容元素
strong,del,dfn,em,a,abbr,acronym，address，pre，code，tt
表格
table,caption,thead,tfoot,tbody,th，tr, td,colgroup
表单
form,input（radio，checkbox，hidden,password,text）,textarea,select,
按钮
button,input(button)
其他
label,html,body,area,b,br

### html5
#### 语义特性（Class：Semantic）
HTML5赋予网页更好的意义和结构。更加丰富的标签。
<article><aside><audio> <bdi> <canvas><command> <datalist> <details> <embed><figcaption> <figure><footer>
<header><hgroup> <keygen> <mark> <meter> <nav><output> <progress> <rp><rt><ruby><section><source><summary> <time><track><video> 
#### 本地存储特性（Class: OFFLINE & STORAGE）
基于HTML5开发的网页APP拥有更短的启动时间，更快的联网速度，这些全得益于HTML5 APP Cache，以及本地存储功能。Indexed DB（html5本地存储最重要的技术之一）。
localStorage - 没有时间限制的数据存储
sessionStorage - 针对一个 session 的数据存储
```javascript
  用法：.setItem( key, value)
  sessionStorage.setItem("key", "value"); 
  localStorage.setItem("site", "js8.in");

  getItem获取value用途：获取指定key本地存储的值
  用法：.getItem(key)
  var value = sessionStorage.getItem("key"); 
  var site = localStorage.getItem("site");

  removeItem删除key用途：删除指定key本地存储的值
  用法：.removeItem(key)
  sessionStorage.removeItem("key"); 
  localStorage.removeItem("site");

  clear清除所有的key/value用途：清除所有的key/value
  用法：.clear()
  sessionStorage.clear(); 
  localStorage.clear();
```
indexedDB数据库

#### 设备兼容特性 (Class: DEVICE ACCESS)
从Geolocation功能的API文档公开以来，HTML5为网页应用开发者们提供了更多功能上的优化选择，带来了更多体验功能的优势。HTML5提供了前所未有的数据与应用接入开放接口。使外部应用可以直接与浏览器内部的数据直接相连，例如视频影音可直接与microphones及摄像头相联。
```javascript
    function getLocation() {
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };

            function success(pos) {
                var crd = pos.coords;

                console.log('Your current position is:');
                console.log(`Latitude : ${crd.latitude}`);
                console.log(`Longitude: ${crd.longitude}`);
                console.log(`More or less ${crd.accuracy} meters.`);
            };

            function error(err) {
                console.log(err.message);
            };

            navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
            console.log("Geolocation is not supported by this browser.")
        }
    }
    getLocation();
```
#### 连接特性（Class: CONNECTIVITY）
更有效的连接工作效率，使得基于页面的实时聊天，更快速的网页游戏体验，更优化的在线交流得到了实现。HTML5拥有更有效的服务器推送技术，Server-Sent Event和WebSockets就是其中的两个特性，这两个特性能够帮助我们实现服务器将数据“推送”到客户端的功能。
Server-Sent Event 即服务器单向消息传递事件，网页可以自动获取来自服务器的更新。以前也可能做到这一点，前提是网页不得不询问是否有可用的更新。通过服务器发送事件，更新能够自动到达。如：Facebook/Twitter 更新、估价更新、新的博文、赛事结果等。
WebSocket 是伴随HTML5发布的一种新协议。它实现了浏览器与服务器全双工通信(full-duplex)，可以传输基于消息的文本和二进制数据。WebSocket 是浏览器中最靠近套接字的API，除最初建立连接时需要借助于现有的HTTP协议，其他时候直接基于TCP完成通信。它是浏览器中最通用、最灵活的一个传输机制，其极简的API 可以让我们在客户端和服务器之间以数据流的形式实现各种应用数据交换（包括JSON 及自定义的二进制消息格式），而且两端都可以随时向另一端发送数据。
网页多媒体特性(Class: MULTIMEDIA)
支持网页端的Audio、Video等多媒体功能， 与网站自带的APPS，摄像头，影音功能相得益彰。

#### 三维、图形及特效特性（Class: 3D, Graphics & Effects）
基于SVG、Canvas、WebGL及CSS3的3D功能，用户会惊叹于在浏览器中，所呈现的惊人视觉效果。
SVG动画制作: http://snapsvg.io
SVG数据可视化框架: https://d3js.org
Canvas游戏引擎：egret , cocos2D-js , lufylegend.js 等
WebGL 框架: threejs , Babylon.js等
CSS3 3D: http://rainzhai.github.io/raincss/css3/cube.html

性能与集成特性（Class: Performance & Integration）
没有用户会永远等待你的Loading——HTML5会通过XMLHttpRequest2等技术，帮助您的Web应用和网站在多样化的环境中更快速的工作。

#### CSS3特性(Class: CSS3)
在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。

## CSS
* CSS2
* CSS3

## javascript
* ES3
* ES5
* ES6


```javascript

```
