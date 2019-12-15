### AJAX
 - Asyncronous(异步)  Jacascript(js) And(和) XML(标记语言，数据)

 - 它是一个前后台数据交互的一种技术(找后台拿数据的地方试)

 - 难点：如何操作数据(各种数据类型的应用)，异步，参数如何拼接(字段是什么东西？name=zf&age=10),如何开启服务

 - ajax获取数据并不难，难的是拿到数据之后你怎么办？(业务逻辑)

 ```
 在工作中：
  $.ajax({})
  fetch('')
  axios.get('')
  wx.requset('')
  jsonp_fetch('')
  ...

ajax:
  <script src="data.js"></script>
  let data = {
      "0":{
                "pid":-1,
                "id":0,
                "title":'我的文档',
                checked:false
            },
            "1":{
                "pid":-1,
                "id":1,
                "title":'我的音乐',
                checked:false
            },
  }
  XML - >json->'[]'  || '{name:"小明",age:18,info:"哈哈哈"}'

  可以拿到data
  ```

  - ajax最大的优点 -> 可以局部刷新，减轻 服务器的压力，提升用会体验

### 如何启动服务器？
- 点击(点进去)服务器文件(hello world)(文件不能是中文)
- 看看有没有node_modules文件，有就不用管，没有要安装依赖文件
    - 第一种方式：shift + 鼠标右键 选择在此处打开终端
    - 第二种方式：把服务器文件拖到vscode中，点击终端
    - npm install 安装依赖

- 运行服务器
   - 输入 npm run start 或者输入 node app 按tab键(自动帮你补齐)

- ***浏览器要输入localhost/xx.html(打开方式)，千万不要双击直接运行文件(不要在本地打开，要是用localhost的方式去打开)
- 代码放到public文件夹下

### ajax的交互模型
  - 创建一个XMLHttpRequest对象
  - 填写请求方式，和请求地址，是否异步
  - 发送请求
  - 监听数据响应 
  - 接收到数据

### GET和POST
```GET是通过url进行请求(4步就发送请求了)
    http://www..baidu.com:88get?useer=lilei#age=18
    协议 域名 端口 接口 查询信息 hash信息
    GET的优势就是快(用于展示类的)

    相对不安全(在请求的时候会显示在地址栏或者历史记录里面查到)

    请求体积是有限的(会根据浏览器的标准来限制)传大的东西传不了

    在低版本IE下有缓存问题（/get?useer= liucheng）
    第一次和第二次请求的url是一致的那么第二会走第二次的缓存
    解决：
    第一种：不用get用post
    第二种：每次url不一致
    /get?user=liucheng&random=32132123132132
     /get?user=liucheng&random=112321312
    


    输入的内容是中文的时候，在IE下会出现错误请求和返回是应为IE的低版本在解析的时候解析会有问题。。


    解决方案：
      encodeURI('续') -> %E7%BB%AD
                encodeURIComponent
            URI编码转中文
                decodeURI('%E7%BB%AD') -> 续
                decodeURIComponent('%E7%BB%AD')





POST是通过服务器来发请求的(更用户相关的信息，发送体积比较大的文件)(至少6步才能成功发送请求)

    相对安全，因为他是通过服务器来发送请求的

    理论上他的体积可以是无限大(但是一般后台开发人员都会给于限制)

    比get慢

    必须添加请求头
     xhr.setRequestHearder('content-type','application/x-www-form-urlencoded');
```
### fetch的post
```
fetch(url,{
  method:'post',
  headers:{
    'content-type':'aoolication/x-www-form-urlencoded'
  }
  body:'key=val&key2=val2'
  也可以写成
  body:''+new URLSearchParmas({
    key:val,
    key2:val2
    如果value是中文还会帮我们转成URI编码
  })
})
```
### 请求头和响应头

General

>Request URL  请求的地址
>Request Method 请求的方式 （GET POST）常见的  HEAD DELETE PUT..
> Status Code 状态码
> Remote Address 当前页面的端口号

Response Headers (响应头) - > 服务器发给你的东西(接收到的)
Query String Parmeters(请求体) 就是后台发过来的东西

### http状态码  1-6开头的

> 100 服务器已经接收请求，希望客户端继续发请求

>200-270是OK成功

> 301永久重定向

> 302 临时重定向

>304 一种缓存

>400 就是有误的意思

>401 当前请求需要用户验证

>403 服务器已经理解请求，但是拒绝执行它

>404 请求失败，请求所希望得到的资源未被在服务器上发现

>5字开头的是服务器的错误

>500 服务器终端出错了

>501 服务器不支持当前请求所需的某个功能。

>502 作为网关或者代理工作的服务器尝试执行请求时，从上游服务器接收到无效的响应。

>503 由于临时的服务器维护或者过载，服务器当前无法处理请求




  onreadystatechange是可以监听发送请求的状态
   5次状态 0-4，但是0你永远都监听不到，1-4

  如果把onreadystatechange放到send之前能够多监听一次
 放到send之后就少监听一次
 0: 请求未初始化
  1: 服务器连接已建立
 2: 请求已接收
 3: 请求处理中
 4: 请求已完成，且响应已就绪

