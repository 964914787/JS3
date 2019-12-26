sessionStorage.clear(); //清楚缓存数据
var Num ,VocabularyTransfer

//绑定滑动条与value人数框
$("#huadong").change(function() { 
    $("#renshu").val( $("#huadong").val() );
    if( $("#huadong").val() >= 4 && $("#huadong").val() <= 18){
        var x,y;
        if ( $("#huadong").val() >=4 && $("#huadong").val() <= 5) {
            x = 1;
        }
        if ($("#huadong").val() >= 6 && $("#huadong").val() <= 8) {
            x = 2;
        }
        if ($("#huadong").val() >= 9 && $("#huadong").val() <= 11) {
            x = 3;
        }
        if ($("#huadong").val() >=12 && $("#huadong").val() <= 15) {
            x = 4;
        }
        if ($("#huadong").val() >=16 && $("#huadong").val() <= 18) {
            x = 5;
        }
        y = $("#huadong").val() - x;
        $('#p1').html("&nbsp;&nbsp;幽&nbsp;&nbsp;&nbsp;灵&nbsp;"+x+"&nbsp;人")
        $('#p2').html("&nbsp;&nbsp;水&nbsp;&nbsp;&nbsp;民&nbsp;"+y+"&nbsp;人")
    } 
})
$("#renshu").change(function() { 
    if ($("#renshu").val() >= 4 && $("#renshu").val() <= 18) {
        $("#huadong").val( $("#renshu").val() ) ;
        var x, y;
        if ($("#renshu").val() >= 4 && $("#renshu").val() <= 5) {
            x = 1;
        }
        if ($("#renshu").val() >= 6 && $("#renshu").val() <= 8) {
            x = 2;
        }
        if ($("#renshu").val() >= 9 && $("#renshu").val() <= 11) {
            x = 3;
        }
        if ($("#renshu").val() >= 12 && $("#renshu").val() <= 15) {
            x = 4;
        }
        if ($("#renshu").val() >= 16 && $("#renshu").val() <= 18) {
            x = 5;
        }
        y = $("#renshu").val() - x;
        $('#p1').html("&nbsp;&nbsp;幽&nbsp;&nbsp;&nbsp;灵&nbsp;"+x+"&nbsp;人")
        $('#p2').html("&nbsp;&nbsp;水&nbsp;&nbsp;&nbsp;民&nbsp;"+y+"&nbsp;人")
        $(".footer").eq(0).click(function() {
            window.location.href = "JS-2-Viewidentity.html"
        })
    }
    if ($("#renshu").val() < 4) {
        $(".footer").eq(0).click(function() {
             confirm("请输入正确的玩家数量。");
        })
    }
    if ($("#renshu").val() > 18) {
        $(".footer").eq(0).click(function() {
            confirm("请输入正确的玩家数量。");
       })
    }
})
//加减按钮控制滑动条
$("#jian").eq(0).click(function() { 
    
    $("#huadong").val(parseInt($("#huadong").val()) - 1)
    $("#renshu").val(parseInt($("#renshu").val()) - 1)
    
    if($("#renshu").val() < 4) {
        confirm("请输入正确的玩家数量。");
        $("#renshu").val() = 4
    }
})
$(".bg-zengjia").eq(0).click(function() { 
    $("#huadong").val(parseInt($("#huadong").val()) + 1)
    $("#renshu").val(parseInt($("#renshu").val()) + 1)
    if($("#renshu").val() > 18) {
        confirm("请输入正确的玩家数量。");
        $("#renshu").val() = 18  
    }  
    
})

//点击按钮下一页
$(".footer").eq(0).click(function() { 
    if ($(".Phrase-box-shuimin").eq(0).val() != "" && $(".Phrase-box-shuimin").eq(1).val() != "") {
        if ($(".Phrase-box-shuimin").eq(1).val() != $(".Phrase-box-shuimin").eq(0).val()){
            window.location.href = "JS-2-Viewidentity.html"
        }
        else {
            confirm("水民幽灵词汇不能相同");
        }   
    }
    else {
        confirm("请输入水民幽灵词汇。");
    }
    
    //JSON
    Num=$("#renshu").val();
    var send=JSON.stringify(Num);//转换为JSON字串符
    sessionStorage.setItem("kee",send)
    VocabularyTransfer = $(".Phrase-box-shuimin").eq(0).val()
    var sendone=JSON.stringify(VocabularyTransfer);//转换为JSON字串符
    sessionStorage.setItem("kea",sendone)
    VocabularyTransferaa = $(".Phrase-box-shuimin").eq(1).val()
    var sendtwo=JSON.stringify(VocabularyTransferaa);//转换为JSON字串符
    sessionStorage.setItem("keb",sendtwo)
})

//返回按钮事件
$('.bg-Back___Icon').eq(0).on('click',function() {
    window.location = "css-7-1.html" ;
})
