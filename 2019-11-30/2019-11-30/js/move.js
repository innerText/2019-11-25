let $move = $("#move")
console.log($move);

let $zhe = $('.zhe');

function createTree(num,onoff){
    //通过num找到对应的子级
    let ary = getChild(data,num);
    console.log(num)
    if(!ary)return;
    //只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul id= "model_list" style="padding-left:5px"></ul>');
    //循环子级数据，生成很多的li
    ary.forEach(item=>{
        let $li = $(`
            <li class="m" did = ${item.id}>
                <div id="m" class="tree-title tree-ico">
                    <span>${item.title}</span>
                </div>
            </li>
        `);

        if(!getChild(data,item.id).length){
            $li.find('i').css('background','none');
        }

        $li.off().click(function(){
            let id = $li.attr('did')*1
         
            shi = data[id].pid
               console.log(shi);
            if(this.children[0].classList.toggle('open')){
                $(this).append(createTree(item.id));
                render(item.id);
                createMenu(item.id);
                

            }else{
                $(this).find('ul').remove();
            }
           
            return false;
        });
        //再把li放到ul中
        $ul.append($li);
    }); 
    //返回当前创建的ul，里面有很多的li(文件夹)
    return  $ul;
}

// $zhe.children().children().append( createTree(0) );



// $tree_menu.prepend($ul);

/*
 ${
                    createTree(ele.id) 
                }
*/
//0
let that = null;
let okcode = -1;
let t ;
function createModelTree(num){
    //通过num找到对应的子级
    let ary = getChild(data,num);
    console.log(ary)
    if(!ary)return;
    //只要有自己就创建一个ul，因为ul中要插入li
    let $ul = $('<ul style="padding-left:5px"></ul>');
    //循环子级数据，生成很多的li
    ary.forEach(item=>{
        let $li = $(`
            <li>
                <div class="tree-title tree-ico">
                    <span><i></i>${item.title}</span>
                </div>
            </li>
        `);

        if(!getChild(data,item.id).length){
            $li.find('i').css('background','none');
        }

        $li.off().click(function(){
            let reData = list.filter(item=>item.checked); 
             t= list[0].pid;
            //点击li的时候，看看点击的文件和要移动的文件是不是有直系关系
            //如果有直系关系，那么就点不开
            if(reData.some(d=>d.id === item.id)){
                okcode = 'error';
                return;
            }else{
                okcode = item.id;
            }

           

            if(that){
                that.css({background:'none'});
            }
            $(this).find('span').css({
                background:'#ccc'
            });
            that = $(this).find('span');

            if(this.children[0].classList.toggle('open')){
                $(this).append(createModelTree(item.id));
            }else{
                // okcode = item.id; 
                $(this).find('ul').remove();
            }
            
           
            return false;
        });
        //再把li放到ul中
        $ul.append($li);
    }); 
    //返回当前创建的ul，里面有很多的li(文件夹)
    return  $ul;
}

$zhe.children().children().append( createModelTree(0) );




const $model_list = $('#model_list').children();
$move.off().click(function(){
    // console.log(1)
    let reData = list.filter(item=>item.checked); 
    console.log(reData);
    if(!reData.length){
        console.log('木有移动的文件');
    }else{
        $('.zhe').show(); //打开移动的框
        $model_list.find('ul').remove();
        // $model_list.append(createModelTree(0)); 
    }

    const ok = $('.ok');
    console.log(ok);
    
ok.off().click(function(){



        // console.log(okcode);
        if(okcode === 'error'){
            console.log('非法操作');
            return;
        }
        reData.forEach(item=>{
            item.pid = okcode;
        })
        render(t)
        createTree(-1)
        $('.zhe').hide();
        
        // let id = reData[0].pid; //存一下改之前的pid，为了一会刷新页面
        // console.log(id);
        
        // reData.forEach(item=>{
        //     item.pid = okcode;
        //     item.checked = false;
        // });
        // $tree_menu.children().children().append( createTree(0,true) );
        // render(id);
        
        // $('.zhe').hide();
        

    });

})


