var Nunshuzi=JSON.parse(sessionStorage.getItem('kee'));//人数
var Nunshuza=JSON.parse(sessionStorage.getItem('kea'));//水民
var Nunshuzb=JSON.parse(sessionStorage.getItem('keb'));//幽灵
var Phrase = JSON.parse(sessionStorage.getItem("kec"));//数组
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || []; //判断结算页面使用

//创建水民幽灵数组
var arrayone = [];
for (var e=0; e < Phrase.length;e++) {
    if (Phrase[e] == Nunshuza) {
        arrayone[e] = "平民"
    }
    if (Phrase[e] == Nunshuzb) {
        arrayone[e] = "幽灵"
    }
}

//显示同等人数的BOX
$('.cards-a').eq(0).html(arrayone[0])
$('.cards-b').eq(0).html("1号")
for (var i = 1; i < Nunshuzi; i++) {
    $("#aaa").append(`<div class="cards-box flex-box flex-center">` +
        `<input type="radio" name="role" id="div${i+1}">` +
        ` <label for="div${i+1}" class="cards" data-index = "${i+1}">` +
        `<div class="cards-a flex-box flex-center">` + arrayone[i] + `</div>`+
        `<div class="cards-b flex-box flex-center">` +(i+1)+ `号</div>`+
        `<div class="knife"></div>`+
        ` </label> ` +
        ` </div>`
    )    
}

//获取生死状态数组
var existence = JSON.parse(sessionStorage.getItem('shengsi')) ;
console.log(existence )

//设置死亡状态玩家变色
for (var bb = 0; bb < Nunshuzi; bb++) {
    if (existence[bb] == 1 ) {
        $(".cards-a").eq(bb).css("background", "darkseagreen");
        $(".cards-a").eq(bb).click(function(){ //设置已死玩家不可投
            alert ("该玩家已经死亡")
        })
    }
    console.log(existence[bb] == 1 )
}

//建立已经死亡的幽灵人数
var ghostdie = sessionStorage.getItem('ghostdie') || 0 
//获取已经死亡的水民人数
var civiliandie = sessionStorage.getItem('civiliandie');
//获取幽灵总人数
var x = sessionStorage.getItem('xx');
//获取水民总人数
var y = sessionStorage.getItem('yy');
//创建被点击的号数，用于传递结算页面
var m 

//点击投票事件x
$(".cards").click(function(){
    var index = $('.cards').index(this)
    m =  $(this).attr("data-index");
    console.log(ghostdie)
    $('.footer-btn').unbind('click') //移除按钮所有事件
    if (arrayone[index] == "幽灵") {
        $(".footer-btn").click(function() {
            ghostdie++ 
            sessionStorage.setItem('ghostdie',ghostdie)
            allDeath.push(m) 
            sessionStorage.setItem("allDeath", JSON.stringify(allDeath))
            if (ghostdie == x) {
                window.location = "JS-4-4.html"; 
            }
            else {
                existence[index] = 1 ;
                sessionStorage.setItem('shengsi',JSON.stringify(existence))
                window.location = "JS-2-Taiwaneseversion.html"; 
            }
        })
    } 
    if (arrayone[index] == "平民") {
        $(".footer-btn").click(function() {
            civiliandie++  ;  //投死水民数组+1
            sessionStorage.setItem('civiliandie',civiliandie);
            allDeath.push(m) 
            sessionStorage.setItem("allDeath", JSON.stringify(allDeath))
            if (civiliandie == y ) {
                window.location = "JS-4-4.html"; 
            }else {
                existence[index] = 1 ; //投死变色保存
                sessionStorage.setItem('shengsi',JSON.stringify(existence))
                window.location = "JS-2-Taiwaneseversion.html"; 
            }
        })
    }
   
})
console.log(allDeath);