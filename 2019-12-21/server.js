const http = require('http');//node_moduldes中的文件也不用路径就可以引入

//commonjs规范
/* 
request  请求 ajax 客户端发送的请求
response 响应 {}

*/
let app = http.createServer(function(request,response){
    console.log('来啦');
    response.setHeader('Content-Type','text/html;charset=utf-8')
    if(request.url !=='/favicon.ico'){
        let num = (/user=(\d)/.exec(request.url.split('?')[1]))[1];
        console.log(num);
        if(num ==='1'){
            response.write('{"name":"李瑞周"}')
        }else if(num === '0'){
            response.write('{"name":"lishijie"}');
          
        }
        response.end();
    }
    
})
app.listen(88)