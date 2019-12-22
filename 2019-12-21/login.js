const http = require('http');
const fs = require('fs');

/* 
注册：
/register?user=123
有没有这个人
失败
{
conde:0,
msg:'可以注册'
}
localhost/register?user=123
localhost/index2.html



*/
function queryString(str){
    let obj = {};
    str.replace(/([^=]+)=([^&]+)&?/g,($0,$1,$2)=>{
        obj[$1]=$2;
    });
    return obj;
}
let sql = [
    {
        id:0,
        username:'彭锦程',
        password:123
    },
    {
        id:1,
        username:'尹德智',
        password:321
    },
    {
        id:2,
        username:'李磊'
    }
]