$(btn).click(function () {
    let $folder = $(` <div id="box"> <i class="iconfont icon-weibiaoti-_huabanfuben"></i><input type="text" value="新建文件夹" class="editor"/></div>
       
    `);
    $folders.append($folder);
    let $txt = $folder.find('input');
    $txt.select();
    $txt.blur(function () {
        // $(this).parent().
        // console.log(sj1)
        let $val = $txt.val();
        let ark = Object.keys(list);
        let arv = Object.values(list);
        let ark1 = Object.keys(data);
        // console.log(ark,arv)
        let BOOL = arv.map(item => item.title).includes($val);
        let num = 1;
        let newVal = '';
        newVal = $val;
        while (BOOL) {
            let s = $val.replace(/\(\d\)$/, '') + `(${num++})`;
            BOOL = arv.map(item => item.title).includes(s);
            newVal = s;
        };
        data[ark1.length*1] = {
            "id": ark1.length*1,
            "pid": shi,
            // "dateId": d1,
            "checked": false,
            "title": newVal
        };
        // console.log(pId)
        render(shi)
    })
})
