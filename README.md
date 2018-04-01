# frontend-tech-map
前端知识体系大全
## HTML
HTML指超文本标记语言，标准通用标记语言下的一个应用。“超文本”就是指页面内可以包含图片、链接，甚至音乐、程序等非文字元素。
HTML标记标签通常被称为 HTML 标签 (HTML tag)

### html4
* 文本段落
p,h1,h2,h3,blockquote,span,div，img
* 列表
ol,ul,li,dl,dt,dd
* 内容元素
strong,del,dfn,em,a,abbr,acronym，address，pre，code，tt
* 表格
table,caption,thead,tfoot,tbody,th，tr, td,colgroup
* 表单
form,input（radio，checkbox，hidden,password,text）,textarea,select,
* 按钮
button,input(button)
* 其他
label,html,body,area,b,br

### html5
#### 语义特性（Class：Semantic）
HTML5赋予网页更好的意义和结构。更加丰富的标签。
article,aside,audio,bdi,canvas,command,datalist,details,embed,figcaption,figure,footer,
header,hgroup,keygen,mark,meter,nav,output,progress,rp,rt,ruby,section,source,summary,time,track,video
#### 本地存储特性（Class: OFFLINE STORAGE）
* localStorage - 没有时间限制的数据存储
* sessionStorage - 针对一个 session 的数据存储
* Indexed DB
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

#### 设备访问特性 (Class: DEVICE ACCESS)
Geolocation
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
＊ Server-Sent Event
＊ WebSockets
Server-Sent Event 即服务器单向消息传递事件，网页可以自动获取来自服务器的更新。
WebSocket 是伴随HTML5发布的一种新协议。它实现了浏览器与服务器全双工通信(full-duplex)，可以传输基于消息的文本和二进制数据。WebSocket 是浏览器中最靠近套接字的API，除最初建立连接时需要借助于现有的HTTP协议，其他时候直接基于TCP完成通信。

#### 网页多媒体特性(Class: MULTIMEDIA)
＊ Audio
＊ Video

#### 三维、图形及特效特性（Class: 3D, Graphics & Effects）
＊ SVG
＊ Canvas
＊ WebGL
＊ CSS3的3D
SVG动画制作: http://snapsvg.io
SVG数据可视化框架: https://d3js.org
Canvas引擎：egret , cocos2D-js , lufylegend.js ,echarts等
WebGL 框架: threejs , Babylon.js等
CSS3 3D: http://rainzhai.github.io/raincss/css3/cube.html

#### 性能与集成特性（Class: Performance & Integration）
＊ XMLHttpRequest2
#### CSS3特性(Class: CSS3)
在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。
＊ 边框
border-radius
box-shadow
border-image

＊ 背景(多重背景)
background-size
background-origin 背景定位
background-clip 背景裁剪

＊ 文本效果
text-align-last 设置如何对齐最后一行或紧挨着强制换行符之前的行
text-emphasis 应用重点标记以及重点标记的前景色
text-justify "justify" 时所使用的对齐方法
text-outline 文本的轮廓
text-overflow 文本溢出包含元素时发生的事情
text-shadow
text-wrap 文本的换行规则
word-break 非中日韩文本的换行规则
word-wrap 长的不可分割的单词进行分割并换行到下一行

＊ webfont
@font-face{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
url('Sansation_Light.eot'); /* IE9+ */
}

＊ 2D 转换
transform
translate(x,y) 移动
rotate(x,y) 转动
scale(x,y) 缩放
skew(x,y) 倾斜
matrix() 矩阵

＊ 3D转换
rotate3d(x,y,z,angle)
translate3d(x,y,z)
-scale3d(x,y,z)

＊ 过渡
transition

＊ 动画
@Keyframes
animation

＊ 多列
column-count
column-gap
column-rule

＊ 界面
resize
box-sizing
outline-offset

＊ 颜色
RGBA
HSL
HSLA

＊ flex布局
＊ media query

## CSS
* CSS2
* CSS3

## javascript
* javascript
* ES3
* ES5
* ES6

### javsscript 框架

## node.js

```javascript

```
