const express = require('express');
const router = express.Router();


/* 
router的根本不是localhost是  /noloading/
*/








router.get('/',(req,res)=>{
    setTimeout(()=>{
        res.json({code:0,ary:[1,2,3,4]})
    },3000);
})
module.exports = router;//导出路由