//获取幽灵总人数
var x = sessionStorage.getItem('xx');
//获取水民总人数
var y = sessionStorage.getItem('yy');
//获取已经死亡的幽灵人数
var ghostdie = sessionStorage.getItem('ghostdie');
//获取已经死亡的水民人数
var civiliandie = sessionStorage.getItem('civiliandie');
//获取游戏天数
var day = JSON.parse(sessionStorage.getItem("day")) || 1;
//判断结算页面使用
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || []; 
//幽灵水民数组
var arrayone = JSON.parse(sessionStorage.getItem("arrayone"))
console.log(day)
console.log(allDeath.length)



//判断游戏天数增加文字框
if (allDeath.length % 2 == 0) {
    for (let i = 0; i < day-1; i++) {
    $("#zengjia").append(
        `<div class="box2">
            <div class="box3">
                <p class="box3-word">第`+(i+1)+`天</p>
            </div>
            <div class="box4">
                <p style="margin-bottom: 0.5rem">晚上：`+allDeath[(i+1)*2-2] +`号被杀手杀死，`+allDeath[(i+1)*2-2] +`号是`+ arrayone[(allDeath[(i+1)*2-2])-1] +`</p>
                <p>白天：`+ allDeath[(i+1)*2-1] +`号被全民投票投死，`+ allDeath[(i+1)*2-1] +`号是`+ arrayone[(allDeath[(i+1)*2-1])-1] +`</p>
            </div>
        </div>`
    ) 
}
}

if (allDeath.length % 2 == 1) {
    if( civiliandie == y ) {
        for (let i = 0; i < day-1; i++) {
            $("#zengjia").append(
                `<div class="box2">
                    <div class="box3">
                        <p class="box3-word">第`+(i+1)+`天</p>
                    </div>
                    <div class="box4">
                        <p style="margin-bottom: 0.5rem">晚上：`+allDeath[(i+1)*2-2] +`号被杀手杀死，`+allDeath[(i+1)*2-2] +`号是`+ arrayone[(allDeath[(i+1)*2-2])-1] +`</p>
                        <p>白天：`+ allDeath[(i+1)*2-1] +`号被全民投票投死，`+ allDeath[(i+1)*2-1] +`号是`+ arrayone[(allDeath[(i+1)*2-1])-1] +`</p>
                    </div>
                </div>`
            ) 
        }
    for (let i = day; i <= day; i++) {
        $("#zengjia").append(
            `<div class="box2">
                <div class="box3">
                    <p class="box3-word">第`+(i)+`天</p>
                </div>
                <div class="box4">
                    <p style="margin-bottom: 0.5rem">晚上：`+allDeath[(i*2)-2] +`号被杀手杀死，`+allDeath[(i*2)-2] +`号是`+ arrayone[(allDeath[i*2-2])-1] +`</p>
                    
                </div>
            </div>`
        ) 
        console.log(allDeath)
        console.log(i)
    }
}
}


//判断胜利者修改页面文字
if ( ghostdie == x ) {
    $('.victory-word').eq(0).html("平民胜利")
    $('#ppp').eq(0).html("杀&nbsp;&nbsp;&nbsp;手" + x + "人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平&nbsp;&nbsp;&nbsp;民" + y + "人")
}
if ( civiliandie == y ) {
    $('.victory-word').eq(0).html("幽灵胜利")
    $('#ppp').eq(0).html("杀&nbsp;&nbsp;&nbsp;手" + x + "人&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平&nbsp;&nbsp;&nbsp;民" + y + "人")
}

//返回首页
$(".footer-continue").click(function(){
    window.location = "css-7-1.html"; 
})