const fs = require('fs');
fs.writeFile('www/2.txt','567',function(){
    if(error){
        console.log('失败');
        
    }
})
fs.open('www/2.txt','r+',function(error,fd){
    if(error){
        console.log('失败');
        
    }
    console.log(fd);
    
})
fs.unlink('www/2.txt',function(err,fd){
    if(err){
        return console.error(err);
        
    }
})
fd.mkdir('www/haha',function(){
    
})