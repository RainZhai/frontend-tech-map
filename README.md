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
* SVG动画制作: http://snapsvg.io
* SVG数据可视化框架: https://d3js.org
* Canvas引擎：egret , cocos2D-js , lufylegend.js ,echarts等
* WebGL 框架: threejs , Babylon.js等
* CSS3 3D: http://rainzhai.github.io/raincss/css3/cube.html

#### 性能与集成特性（Class: Performance & Integration）
* XMLHttpRequest2
#### CSS3特性(Class: CSS3)
在不牺牲性能和语义结构的前提下，CSS3中提供了更多的风格和更强的效果。此外，较之以前的Web排版，Web的开放字体格式（WOFF）也提供了更高的灵活性和控制性。
* 边框
    * border-radius
    * box-shadow
    * border-image

* 背景(多重背景)
    * background-size
    * background-origin 背景定位
    * background-clip 背景裁剪

* 文本效果
    * text-align-last 设置如何对齐最后一行或紧挨着强制换行符之前的行
    * text-emphasis 应用重点标记以及重点标记的前景色
    * text-justify "justify" 时所使用的对齐方法
    * text-outline 文本的轮廓
    * text-overflow 文本溢出包含元素时发生的事情
    * text-shadow
    * text-wrap 文本的换行规则
    * word-break 非中日韩文本的换行规则
    * word-wrap 长的不可分割的单词进行分割并换行到下一行

* webfont
@font-face{
font-family: myFirstFont;
src: url('Sansation_Light.ttf'),
url('Sansation_Light.eot'); /* IE9+ */
}

* 2D 转换
    * transform
    * translate(x,y) 移动
    * rotate(x,y) 转动
    * scale(x,y) 缩放
    * skew(x,y) 倾斜
    * matrix() 矩阵

* 3D转换
    * rotate3d(x,y,z,angle)
    * translate3d(x,y,z)
    * -scale3d(x,y,z)

* 过渡
    * transition

* 动画
    * @Keyframes
    * animation

* 多列
    * column-count
    * column-gap
    * column-rule

* 界面
    * resize
    * box-sizing
    * outline-offset

* 颜色
    * RGBA
    * HSL
    * HSLA

* flex布局
Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。
采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。
  * 容器的属性
    * flex-direction 决定主轴的方向
    * flex-wrap 如果一条轴线排不下，如何换行
    * flex-flow flex-direction属性和flex-wrap属性的简写形式
    * justify-content 项目在主轴上的对齐方式
    * align-items在交叉轴上如何对齐
    * align-content多根轴线的对齐方式
  * 项目的属性
    * order排列顺序
    * flex-grow项目的放大比例
    * flex-shrink项目的缩小比例
    * flex-basis分配多余空间之前，项目占据的主轴空间
    * flex flex-grow, flex-shrink 和 flex-basis的简写
    * align-self 单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

* media query

## CSS
### CSS2
* style
一个样式实际上有两个部分组成，要进行设置的网页元素（选择器）和格式化指令(声明块)。
* ID选择器与类
id选择器，我们从另一个方面思考，它和数据库表里面的主键是同一个作用，唯一标示，所以id是唯一的.
对于class我们可以联想到java中的类，对于同样的功能，我们使用或继承同一个类就可以了，不需要编写新的类，css中的class也是如此，同样的样式用同一个class实现。
* 伪类和伪元素
    * a：link 未使用的链接（a）
    * ：visted 已经点击过的链接
    * a：hover 鼠标滑过时改变链接的效果
    * a：active 点击时展示链接效果

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
* css渲染，重绘repaint，重排reflow，组合.
下面情况会导致reflow发生
    * 1：改变窗口大小
    * 2：改变文字大小
    * 3：内容的改变，如用户在输入框中敲字
    * 4：激活伪类，如:hover
    * 5：操作class属性
    * 6：脚本操作DOM
    * 7：计算offsetWidth和offsetHeight
    * 8：设置style属性
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
* javascript基础
* ES3
* ES5
* ES6

### javascript基础

#### 语法
* 变量
```javascript
//弱类型
var a = 1;
b = 1;
//直接量声明
v = undefined //无包装对象
v = '...'//包装对象String
v = "..."//包装对象String
v = 2132//包装对象Number, 0x开头16进值数，0开头八进制数
v = true//包装对象Boolean
v = false//包装对象Boolean
v = null//包装对象无
v = {}//包装对象Object
v = []//包装对象Array
v = /../ //包装对象RegExp
v = function(){} //包装对象Function
```
* 函数声明
```javascript
//具名函数
function a(){}
//匿名函数
function(){}
//函数表达式
var a =  function(){}
//Function构造函数 
var sum = new Function("num1","num2","return num1+num2")
```
* 运算符
```javascript
//+,-,*,/
```
* 连续赋值运算
```javascript
//连续赋值从右至左
//a.x不能被赋值
var a = {n:1}; 
a.x = a = {n:2};  
alert(a.x); // --> undefined  

//a.n不能被赋值
var a = {n:1};  
a.n = a = {n:2};  
alert(a.n); // --> 2

//a[0]不能被赋值,说明连续赋值中，若最左的变量为其右边某对象的属性，或数组记录，则不进行赋值运算
var a = [0,1];  
a[0] = a = [4,5,6]; 
alert(a[0]);// --> 4
```

```javascript
//JavaScript运算符的类型转换
//加运算从左至右会把字符串 **左边相邻的和右边所有的**的运算元转换为字符串
"1"+2//->"12"
"1"+2+3//->"123"
1+"2"//->"12"
1+1+"2"//->"22"

//乘除的规则和减一样，会把**运算符左右的运算元转换为数字**
"1"-"2"//->-1
"1"-"1"-"2"//->-2
1-"2"//->-1
"1"-2//->-1

//引擎检查valueOf() 返回值类型，然后调用toString() 转化为字符串
{}+{} //-> "[object Object][object Object]"
{}-{} //-> NaN(乘除结果一样)

//引擎检查valueOf() 返回值类型，然后调用toString() 转化为字符串
[1]+[2] //-> "12" 
[1]-[2] //-> -1 (乘除规则和减一样)

[1,2]+[2] //->"1,22"
[1,2]-[2]//->NaN
```

* 比较
```javascript
//==  判断值
//==＝  判断值和类型
//!=  不等于
//>  大于
//<  大于
//>=  大于等于
//<=  大于等于
```

* 条件判断
```javascript
if(a){
}else{
}

switch (day){
    case 0:
    //...
    break;
    case 1:
    //...
    break;
}
```

* 循环
```javascript
//for - 循环代码块一定的次数
//for/in - 循环遍历对象及原型的属性
//break 语句用于跳出循环。
//continue 用于跳过循环中的一个迭代。
//while - 当指定的条件为 true 时循环指定的代码块
//do/while - 同样当指定的条件为 true 时循环指定的代码块
```

#### 数据类型
    * 基本类型: undefined、null、boolean、number、string、objcet、function
    * 栈：原始数据类型（Undefined，Null，Boolean，Number、String）es6的Symbol
    * 堆：引用数据类型（对象Object、数组Array和函数Function）

* 两种类型的区别是：存储位置不同；
    * 原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
    * 引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体
* null，undefined 的区别
    * null 表示一个对象是“没有值”的值，也就是值为“空”；
    * undefined 表示一个变量声明了没有初始化(赋值)；
    * undefined不是一个有效的JSON，而null是；
    * undefined的类型(typeof)是undefined；
    * null的类型(typeof)是object；

```javascript
null == undefined // true
null === undefined // false
```

#### 对象
    * 广义：在内存上一段有意义的区域，称作为一个对象。
    * 在显式支持面向对象的语言中，“对象”一般是指类在内存中装载的实例，具有相关的成员变量和成员函数
    * 在 JavaScript 中，对象是拥有属性和方法的数据。
```javascript
//JavaScript 中的几乎所有事物都是对象：字符串、数字、数组、日期、函数，等等
var person=new Object();
person.firstname="Bill";
person.hello = function(){}
//创建对象三种方式
// 1.字面量
var a = {};
// 2.构造函数
function book(){}
var a = new book();
// 3.object
var obj = new Object();
```
    * new操作符具体干了什么
    * 1、创建一个空对象，并且 this 变量引用该对象，同时还继承了该函数的原型。
    * 2、属性和方法被加入到 this 引用的对象中。
    * 3、新创建的对象由 this 所引用，并且最后隐式的返回 this 。

* 变量对象VO
    * 先函数声明前置，然后在变量声明，JS解释器通过变量对象（Variable Object, VO)来获取。VO是一个抽象概念的“对象”，函数的VO分为两个阶段——变量初始化和代码执行。在变量初始化阶段，VO按照如下顺序填充：
    * 1.函数参数(若未传入，初始化为undefined)
    * 2.函数声明(发生命名冲突会覆盖)
    * 3.变量声明(初始化为undefined, 发生命名冲突会忽略)
```javascript
function test(a, b){
  var c = 10;
  function d(){}
  var e = function _e(){};
  (function x(){});
  b = 20;
}
test(10);
//变量初始化阶段
AO(test)={
  a: 10,
  b: undefined,
  c: undefined,
  d: <ref to func "d">
  e: undefined
}
//代码执行阶段逐一赋值
VO['c'] = 10;
VO['e'] = function _e(){}
VO['b'] = 20;
//结果
AO(test)={
  a: 10,
  b: 20,
  c: 10,
  d: <reference  to FunctionDeclaration "d">
  e: function _e(){}
}
```
#### JavaScript原型，原型链
* 每个对象都会在其内部初始化一个属性，就是prototype(原型)，当我们访问一个对象的属性时，
如果这个对象内部不存在这个属性，那么他就会去prototype里找这个属性，这个prototype又会有自己的prototype，
于是就这样一直找下去，也就是我们平时所说的原型链的概念。
* 特点：
* JavaScript对象是通过引用来传递的，我们创建的每个新对象实体中并没有一份属于自己的原型副本。当我们修改原型时，与之相关的对象也会继承这一改变。

#### 函数
* 闭包
    * 在计算机科学中，闭包（Closure）是词法闭包（Lexical Closure）的简称，是引用了自由变量的函数。这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。所以，有另一种说法认为闭包是由函数和与其相关的引用环境组合而成的实体。

    * 每次定义一个函数，都会产生一个作用域链（scope chain）。当JavaScript寻找变量varible时（这个过程称为变量解析），总会优先在当前作用域链的第一个对象中查找属性varible ，如果找到，则直接使用这个属性；否则，继续查找下一个对象的是否存在这个属性；这个过程会持续直至找到这个属性或者最终未找到引发错误为止。

    * 所以，JavaScript中的所谓的高大上的闭包其实很简单，根本上还是变量解析。而之所以可以实现，还是因为变量解析会在作用域链中依次寻找对应属性的导致的。

    * 就是一种允许函数向关联的父级作用域寻址的访问特权。

* callee 与caller
* callee返回正在执行的函数本身的引用，它是arguments的一个属性
* 1 这个属性只有在函数执行时才有效
* 2 它有一个length属性，可以用来获得形参的个数，因此可以用来比较形参和实参个数是否一致，即比较arguments.length是否等于arguments.callee.length
* 3 它可以用来递归匿名函数。
```javascript
var a = function() {   
alert(arguments.callee); 
} 
```
* caller返回一个函数的引用，这个函数调用了当前的函数。
* 使用这个属性要注意:
* 1 这个属性只有当函数在执行时才有用
* 2 如果在JavaScript程序中，函数是由顶层调用的，则返回null

```javascript
var a = function() {   
alert(a.caller);   
}   
var b = function() {   
a();   
}   
b();  
```

* Javascript作用链域
* 全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
直至全局函数，这种组织形式就是作用域链。

#### ES6
##### 1.块级作用域
* let
* const

##### 2. 字符串和正则表达式
utf-16码位
codePointAt()方法
String.fromCodePoint()
normalize()方法  提供unicode标准化形式

##### 模板字面量
```javascript
//简化多行字符串
let m = `multi
string`;
console.log(m)
//字符串占位符
let name ='sss';
meg = `hello, ${name}`;
console.log(meg);
```

##### 3.函数
* 形参默认值
```javascript
//es5模拟
function a(url){
    url = url || 'book/aa';
}
//es6默认参数值
function a(url='bbb/ssss'){
}
//对arguments对象的影响
//es6中使用了默认值arguments对象和es5严格模式保持一致，不可被重新赋值
function mix(first,second='b'){
    console.log(first===arguments[0])//true
    console.log(second===arguments[1])//false
    first='c'
    second='d'
    console.log(first===arguments[0])//false
    console.log(second===arguments[1])//false
}
//默认参数表达式
let v= 5；
function getVal(){
    return v++;
}
function add(first, second = getVal()){
    return first + second;
}
console.log(add(1))
console.log(add(1))
//另一种情况
let v= 5；
function getVal(v){
    return v+5;
}
function add(first, second = getVal(first)){
    return first + second;
}
console.log(add(1))
//默认参数临时死区
function add(first=second, second){
    return first + second;
}
console.log(add(1,1))
console.log(add(undefined,1))
```

### javsscript 框架
### React 
理念：UI= render(data)
用户看到的界面是一个函数的执行结果，只接受数据作为参数。这个函数是一个纯函数，所谓纯函数指完全没有副作用，输出完全依赖输入的函数。
想要更新界面，要做的就是更新data，界面自然做出响应，react也是响应式编程的思想。

#### virtual DOM
对dom树的抽象。不会触及浏览器部分，只存在js空间的树结构，每次自上而下渲染react组件，会对比上次渲染的差异，然后修改真正的dom的差异部分。
#### 优点
避免复杂的程序结构，开发者效率大大提高，代码维护性和可阅读性大大增强。数据驱动视图

#### 高质量的react组件
prop是组件对外接口，state是组件内部状态。
读取prop，super(props)，给this.props赋值是React.Component构造函数工作之一。
propType检查
React的state
在构造函数中对state初始化

```javascript
constructor(props){
    this.state={
        count: props.initVal || 0
    }
}
```

不要直接修改state而使用setState

##### 组件的生命周期

* 装载 mount
* 更新 update
* 卸载 unmount

装载过程
constructor
getInitialState//es6无createClass中存在
getDefaultProps//es6无createClass中存在
componentWillMount//操作可以放在constructor，只起到对称作用，在服务端可被调用
render//只返回jsx对象，由react决定如何渲染
componentDidMount//所有组件的render执行完成后才去执行didMount

更新过程
componentWillReceiveProps//父组件的render函数被调用，子组件会经历更新过程，不管传给子组件的props有木有改变，都会触发。setState不会触发
shouldComponentUpdate//决定一个组件什么时候不需要渲染，返回一个布尔值告诉react更新过程是否继续
ComponentWillUpdate
render
ComponentDidUpdate

```javascript
shoundComponentUpdate(nextProps, nextState){
    return (nextProps.caption!==this.props.caption) || (nextState.count!==this.state.count)
}
```

卸载过程
ComponentWillUnmount

局限性
子组件counter的count状态之后不一致，逻辑相同的状态放在不同组件会导致困局。react的state来存储状态缺点，数据的冗余和重复。

## redux

## redux基本原则

唯一数据源（也可以多个store但是无好处，store依赖关系，更新顺序带来新的问题）
保持状态只读（不能直接修改一个状态，而是需要通过action派发来完成）
数据改变只能通过纯函数完成（reducer函数完成规约所有元素的功能 reducer（state，action）得到新的state，reducer只计算不存储state）

-容器组件 和redux store打交道，读取store状态，状态变化更新组件状态，重新渲染组件，需要更新store状态，派发action（store状态转为傻瓜组件的prop mapStateToProps，傻瓜组件的动作转为派送给store的动作 mapDispatchToProps）
-傻瓜组件：根据当前props和state，渲染用户界面

## 组件context

一个树状组件上所有组件都能访问一个共同的对象，需要上级组件和下级组件配合。
Provider也是一个react组件，但他的render函数只是简单的把子组件渲染出来，不做任何附加的事情
react-redux库提供了
connect ： 连接容器组件和傻瓜组件
provider ： 提供了包含store的context

## node.js

```javascript

```