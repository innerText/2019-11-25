/* 
通过全局对象下的__filename能够获取当前文件的绝对路径(包含文件本身)


*/
// console.log(__filename);//   \上传文件\2019-11-25\2019-12-23\1.js
/* 
表示当前执行脚本所在的目录(运行文件的根目录)，不包含文件本身
*/
console.log(__dirname);
//  \上传文件\2019-11-25\2019-12-23\1.js

 let path = require('path');//找路径
// console.log(path);//找路径
// console.log(path.join('wwwrot','./api.js'));// \上传文件\2019-11-25\2019-12-23\1.js
// console.log(path.resolve('/','./3_server.html'))//写啥是啥   E:\3_server.html


// console.log(path.resolve('wwwroot1','./tmp/file/'));
// //最后一个参数要加./不然出不来  
//E:\上传文件\2019-11-25\2019-12-23\wwwroot1\tmp\file

// //自动帮我们找到当前文件的路径和配置路径进行连接
console.log(path.resolve(__dirname,'./1.js'));
//E:\上传文件\2019-11-25\2019-12-23
//E:\上传文件\2019-11-25\2019-12-23\1.js


