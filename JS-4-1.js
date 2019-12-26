//动态天数生成
var day = sessionStorage.getItem("day") || 1; //获取天数，如果没有，则取默认值1
for (let i = 0; i < day; i++) {
     $("#ll").append(
        `<div class="master-flow-box flex-box flex-down">
        <div class="time-box flex-box flex-center">第${i+1}天</div>
        <div class="day-step-bar flex-box ">
            <div class="vertical-frame flex-box flex-wrap">
                <div class="vertical-line"></div>
                <div class="yuan flex-center flex-box">
                    <div class="bg-moon"></div>
                </div>
                <div class="yuan-a flex-center flex-box">
                    <div class="bg-yang"></div>
                </div>
            </div>
            <div class=" flex-box flex-down">
                <div class="process-box flex-box">
                    <div class="triangle"></div>
                    <div class="process-bar flex-box flex-center">杀手杀人</div>
                </div> 
                <div class="process-box flex-box">
                    <div class="triangle"></div>
                    <div class="process-bar flex-box flex-center">亡灵发表遗言</div>
                </div> 
                <div class="process-box flex-box">
                    <div class="triangle"></div>
                    <div class="process-bar flex-box flex-center">玩家依次发言</div>
                </div> 
                <div class="process-box flex-box">
                    <div class="triangle"></div>
                    <div class="process-bar flex-box flex-center">投票</div>
                </div> 
            </div>
        </div>
        </div>
        `
     );
}

//点击哪一天，下方的四步就显示或者隐藏
$(".time-box").on("click", function () {
    var ao = $(this); //点击第几个，这里就是几
    ao.siblings().toggle("day-step-bar");
})

//只有最后一天显示下方四步，其他隐藏
if (day != 1) {
    $(".day-step-bar").hide();
    $(".day-step-bar").eq(day - 1).show();
}

//有限状态机
var start = sessionStorage.getItem('begin');
var fsm = new StateMachine({
    init: start,
    transitions:[          
        { name: 'aa',     from: 'start',  to: 'killing' }, //状态机通过name转换
        { name: 'bb',   from: 'killing', to: 'lastwords'  }, //from：当前行为从哪个状态来
        { name: 'cc',     from: 'lastwords', to: 'spea'    }, //to 执行完过度到这个状态
        { name: 'dd',    from: 'spea',    to: 'vote' }
    ],
    //构造状态机的方法
    methods: {  //从固态到业态会发生什么这里定义
        // //没有按照顺序提示                                  /* 下面第一个函数是报错处理机制，当不按转换顺序，状态机会报错并停止运行程序； */
        onInvalidTransition: function (transition,from,to) {
            switch (from) {
                case `start` :
                    alert(`请按顺序进行游戏，杀手先杀人`);
                    break;
                case 'killing':
                    alert("请按游戏顺序进行，亡灵发言！");
                    break;
                case 'lastwords':
                    alert("请按游戏顺序进行，玩家发言！");
                    break;
                case 'spea':
                    alert("请按游戏顺序进行，玩家投票！");
                    break;
            }
        },
    },
});

//颜色
console.log(start)
if( start == 'killing') {
    $(".process-bar").eq(day * 4 - 4).css("background","red");
    $(".triangle").eq(day * 4 - 4).css("border-color","transparent red transparent transparent");
}
if(day > 1) {
    for (let i = 0; i < (day-1)*4; i++) {
        $(".process-bar").eq(i).css("background","red");
        $(".triangle").eq(i).css("border-color","transparent red transparent transparent"); 
    }
}

//添加点击事件
//杀人点击按钮
$(".process-box").eq(day * 4 - 4).on("click", function () {    
    if(fsm.state === 'start'){ //判断状态
        sessionStorage.setItem('begin','killing')
        alert('天黑了，杀手开始杀人');
        window.location = "JS-4-2.html"; 
    } 
   fsm.aa(); //绑定第一个状态，
});

//亡者点击按钮
$(".process-box").eq(day * 4 - 3).on("click", function () {    
    if(fsm.state === 'killing'){ //判断状态
        sessionStorage.setItem('begin','lastwords')
        alert('亡者请发言');
        $(".process-bar").eq(day * 4 - 3).css("background","red");
        $(".triangle").eq(day * 4 - 3).css("border-color","transparent red transparent transparent");
    } 
    fsm.bb(); //绑定第二个状态，
});

//全体发言按钮
$(".process-box").eq(day * 4 - 2).on("click", function () {    
    if(fsm.state === 'lastwords'){ //判断状态
        sessionStorage.setItem('begin','spea')
        alert('玩家依次发言'); 
        $(".process-bar").eq(day * 4 - 2).css("background","red");
        $(".triangle").eq(day * 4 - 2).css("border-color","transparent red transparent transparent"); 
    } 
    fsm.cc(); //绑定第三个状态，
});

//投票按钮
$(".process-box").eq(day * 4 - 1).on("click", function () {    
    if(fsm.state === 'spea'){ //判断状态
        sessionStorage.setItem('begin', 'start');
        day++ ;
        sessionStorage.setItem("day", day);
        alert('发言结束，请投票');
        window.location = "JS-4-3.html";  
    } 
    fsm.dd(); //绑定第四个状态，
   
});
console.log(day);
var allDeath = JSON.parse(sessionStorage.getItem("allDeath")) || []; //判断结算页面使用
console.log(allDeath);

//结束按钮事件
$("#end").on("click",function() {
    var r = confirm("确认退出游戏？");
    if (r == true) {
        x = window.location = "css-7-1.html" ;
    } else {
        x = "！";
    }
})
