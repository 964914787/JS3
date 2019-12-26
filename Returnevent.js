//返回按钮事件
$('.bg-Back___Icon').eq(0).on('click',function() {
    var r = confirm("确认重新设置游戏？");
    if (r == true) {
        x = window.location = "JS-2-peibi.html" ;
    } else {
        x = "！";
    }
})
//退出按钮事件
$('.bg-Close').eq(0).on('click',function() {
    var r = confirm("确认退出游戏？");
    if (r == true) {
        x = window.location = "css-7-1.html" ;
    } else {
        x = "！";
    }
})