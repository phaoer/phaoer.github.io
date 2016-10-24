/**
 * Created by pwh on 2016/10/22.
 */
function aaa()
{
    TweenMax.to("#div2", 1, { rotationZ: 360 });
    TweenMax.to("#div2", 1, { opacity: 0 });
    var oDiv=document.getElementById("loadanimation");

    setTimeout
    (function()
        {
            oDiv.style.display="none";
            TweenMax.to("#w", 1, { left: 100});
            TweenMax.to("#ee", 1, { top: 0 });
            TweenMax.to("#ee", 3, { right: -55 });


            TweenMax.to("#content", 1, { opacity: 1 });
            TweenMax.to("#content",1,{height:300});

        },1000
    )
    setTimeout(function()
    {
        document.getElementById('music2').play();
        jQuery(document).ready(function($)
        {
            $(".word1").lbyl(
                {
                    content: "姓名：蒲文豪",
                    speed: 10,
                    type: 'show',
                    finished: function() {
                        $(".word2").lbyl({
                            content: "爱好：Web，Dota",
                            speed: 10,
                            type: 'fade',
                            fadeSpeed: 50,
                            finished:function(){
                                $(".word3").lbyl({
                                    content:"技术领域：熟悉Html5，CSS3，JavaScript，Jquery，掌握TweenMax，Bootstrap，SVG以及后台语言PHP。",
                                    speed: 20,
                                    type: 'fade',
                                    fadeSpeed: 500,
                                });
                            }
                        });
                    }
                });

        });
    },4000)
}

function myAddEvent(obj, ev, fn) //事件绑定
{
    if(obj.attachEvent)
    {
        obj.attachEvent('on'+ev, fn);
    }
    else
    {
        obj.addEventListener(ev, fn,false);
    }
}

window.onload=function(){aaa();indexanimation()};


    function indexanimation()
{
        var oD = document.getElementById('bottom');
        var aA = oD.getElementsByTagName('a');
        var aDiv = document.querySelectorAll('.bar');
        var oA = document.getElementById('pt')


        for (var i = 0; i < aA.length; i++)
        {//因为js一次只能执行一个目标，所以当有多个元素时则采用循环，先给几个按钮加上事件
            aA[i].index = i;
            myAddEvent(aA[i],'click',function(){ document.getElementById('music3').play();});
            aA[i].onclick=function () {
                for (var i = 0; i < aA.length; i++) {//再用一个for循环给每个按钮加上class,若无须改动按钮本身，则无须用for
                    aA[i].style.color = 'silver';
                    aDiv[i].style.height=0+'px';
                    aDiv[i].style.filter="alpha(opacity=0)";
                    aDiv[i].style.opacity= 0;
                    aDiv[i].style.visibility = 'hidden';
                }
                this.style.color = '#F45551';

                TweenMax.to(aDiv[this.index], 1, { height: 300 });
                TweenMax.to(aDiv[this.index], 1, { opacity: 1 });

                aDiv[this.index].style.visibility = 'visible';
            }
        };

    myAddEvent(oA,'click',function()
    {
        jQuery(document).ready(function($)
        {
            $(".word1").lbyl(
                {
                    content: "姓名：蒲文豪",
                    speed: 120,
                    type: 'show',
                    finished: function() {
                        $(".word2").lbyl({
                            content: "爱好：Web，Dota",
                            speed: 60,
                            type: 'fade',
                            fadeSpeed: 50,
                            finished:function(){
                                $(".word3").lbyl({
                                    content:"技术领域：熟悉Html5，CSS3，JavaScript，Jquery，掌握TweenMax，Bootstrap，SVG以及后台语言PHP。",
                                    speed: 20,
                                    type: 'fade',
                                    fadeSpeed: 500,
                                });
                            }
                        });
                    }
                });

        });
    }
)



        var oDiv2 = document.getElementById('ptrun');
        var oUl = oDiv2.getElementsByTagName('ul')[0]
        var aLi = oUl.getElementsByTagName('li')
        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;//复制一个ul保证滚动无间隙
        oUl.style.width = aLi[0].offsetWidth * aLi.length + "px";//必须让ul有足够的宽度包含8个li
        function gd() {
            if (oUl.offsetLeft < -oUl.offsetWidth / 2) {//两份相同的ul当第一份ul走完的时候迅速将两份ul复位，即可实现无缝滚动
                oUl.style.left = '0';
            }
            else {
                oUl.style.left = oUl.offsetLeft - 2 + "px";
            }
        }

        var timer = setInterval(gd, 30)
        oDiv2.onmousemove = function () {
            clearInterval(timer);
        }
        oDiv2.onmouseout = function () {
            timer = setInterval(gd, 30);//这里如果加上（）就是指函数gd运算的结果赋给定时器
        }

}




