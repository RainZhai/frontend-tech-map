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
form,input（radio，checkbox，hidden,password,text）,textarea,select
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
* Server-Sent Event
* WebSockets
Server-Sent Event 即服务器单向消息传递事件，网页可以自动获取来自服务器的更新。
WebSocket 是伴随HTML5发布的一种新协议。它实现了浏览器与服务器全双工通信(full-duplex)，可以传输基于消息的文本和二进制数据。WebSocket 是浏览器中最靠近套接字的API，除最初建立连接时需要借助于现有的HTTP协议，其他时候直接基于TCP完成通信。

#### 网页多媒体特性(Class: MULTIMEDIA)
* Audio
* Video

#### 三维、图形及特效特性（Class: 3D, Graphics & Effects）
* SVG
* Canvas
* WebGL
* CSS3的3D
SVG动画制作: http://snapsvg.io
SVG数据可视化框架: https://d3js.org
Canvas引擎：egret , cocos2D-js , lufylegend.js ,echarts等
WebGL 框架: threejs , Babylon.js等
CSS3 3D: http://rainzhai.github.io/raincss/css3/cube.html

#### 性能与集成特性（Class: Performance & Integration）
* XMLHttpRequest2
#### CSS3特性(Class: CSS3)
在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。
* 边框
border-radius
box-shadow
border-image

* 背景(多重背景)
background-size
background-origin 背景定位
background-clip 背景裁剪

* 文本效果
text-align-last 设置如何对齐最后一行或紧挨着强制换行符之前的行
text-emphasis 应用重点标记以及重点标记的前景色
text-justify "justify" 时所使用的对齐方法
text-outline 文本的轮廓
text-overflow 文本溢出包含元素时发生的事情
text-shadow
text-wrap 文本的换行规则
word-break 非中日韩文本的换行规则
word-wrap 长的不可分割的单词进行分割并换行到下一行

* webfont
@font-face{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
url('Sansation_Light.eot'); /* IE9+ */
}

* 2D 转换
transform
translate(x,y) 移动
rotate(x,y) 转动
scale(x,y) 缩放
skew(x,y) 倾斜
matrix() 矩阵

* 3D转换
rotate3d(x,y,z,angle)
translate3d(x,y,z)
-scale3d(x,y,z)

* 过渡
transition

* 动画
@Keyframes
animation

* 多列
column-count
column-gap
column-rule

* 界面
resize
box-sizing
outline-offset

* 颜色
RGBA
HSL
HSLA

* flex布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
  * 容器的属性
    flex-direction 决定主轴的方向
    flex-wrap 如果一条轴线排不下，如何换行
    flex-flow flex-direction属性和flex-wrap属性的简写形式
    justify-content 项目在主轴上的对齐方式
    align-items在交叉轴上如何对齐
    align-content多根轴线的对齐方式
  * 项目的属性
    order排列顺序
    flex-grow项目的放大比例
    flex-shrink项目的缩小比例
    flex-basis分配多余空间之前，项目占据的主轴空间
    flex flex-grow, flex-shrink 和 flex-basis的简写
    align-self 单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

* media query

## CSS
### CSS2
* style
一个样式实际上有两个部分组成，要进行设置的网页元素（选择器）和格式化指令(声明块)。
* ID选择器与类
id选择器，我们从另一个方面思考，它和数据库表里面的主键是同一个作用，唯一标示，所以id是唯一的.
对于class我们可以联想到java中的类，对于同样的功能，我们使用或继承同一个类就可以了，不需要编写新的类，css中的class也是如此，同样的样式用同一个class实现。
* 伪类和伪元素
a：link 未使用的链接（a）
a：visted 已经点击过的链接
a：hover 鼠标滑过时改变链接的效果
a：active 点击时展示链接效果
* DIV 和SPAN
我们使用div对页面进行分割，使用span包含某一两个文字或者一段话。事实上，div实现了页面的布局，它来主持着页面的全局，而span对其中各个细微的地方进行修饰。
* HTML族谱
    * 祖先：一个标签A包含了另一个标签B，那么A是B的祖先，html标签是所有标签的祖先。
    * 派生：在一个或是更多标签内部的标签就是一个派生标签，图中body是html派生标签。
    * 父标签：一个父标签是另一个标签最近的祖先，html是head和body标签的父标签。
    * 子标签：一个直接被另一个标签包围的标签就是子标签,h1和p是body的子标签。
    * 同胞标签：head和body，还有h1和p。

* Margin、Padding and Border
    * Padding 指的是内容和内容边距之间的空间
    * Border指的是在方框每一边上的直线
    * Margin指的是一个标签和另一个标签间的间隔

## 相关概念:
* css渲染，重绘repaint，重排reflow，组合
    下面情况会导致reflow发生
        1：改变窗口大小
        2：改变文字大小
        3：内容的改变，如用户在输入框中敲字
        4：激活伪类，如:hover
        5：操作class属性
        6：脚本操作DOM
        7：计算offsetWidth和offsetHeight
        8：设置style属性
* 盒模型
* 块级元素
* 行内元素
* 定位方案
* 普通流 (normal flow)
* 浮动 (float)
* 绝对定位 (absolute positioning)

## BFC 概念
Formatting context(格式化上下文) 是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。

BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。
### 触发 BFC
只要元素满足下面任一条件即可触发 BFC 特性：

* body 根元素
* 浮动元素：float 除 none 以外的值
* 绝对定位元素：position (absolute、fixed)
* display 为 inline-block、table-cells、flex
* overflow 除了 visible 以外的值 (hidden、auto、scroll)

### CSS3
见html5 css3部分

## javascript
* javascript
* ES3
* ES5
* ES6

### javascript


### javsscript 框架

## node.js

```javascript

```
