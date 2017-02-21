/**
 * Created by pwh on 2016/10/22.
 */
$(window).load(function() {
    $('.loading').animate({'width':'100%'},50);
    $("#loa").html("Completed");
    TweenMax.to("#div2", 1, {rotationZ: 360});
    TweenMax.to("#div2", 1, {opacity: 0});
    var oDiv = document.getElementById("loadanimation");
    setTimeout
    (function () {
            oDiv.style.display = "none";
        TweenMax.to("#i1", 1, {bottom: '50%',onComplete:function(){TweenMax.to("#i1", 1, {bottom: '49.8%',repeat:2});}});
            TweenMax.to("#i2", 2, {bottom: '20%',onComplete:function(){TweenMax.to("#i2", 1, {bottom: '20.2%',repeat:2});}});
            TweenMax.to("#i3", 1, {bottom: '60%',onComplete:function(){TweenMax.to("#i3", 1, {bottom: '59.8%',repeat:2});}});
            TweenMax.to("#i4", 2, {bottom: '22%',onComplete:function(){TweenMax.to("#i4", 1, {bottom: '21.8%',repeat:2});}});
            TweenMax.to("#i5", 3, {bottom: '65%',onComplete:function(){TweenMax.to("#i5", 1, {bottom: '65.2%',repeat:2});}});
            TweenMax.to("#i6", 3, {bottom: '21%',onComplete:function(){TweenMax.to("#footer", 1, {bottom: -100});}});

        }, 1000
    )
})
$(window).load(function() {
    var oD = document.getElementById('bottom');
    var aA = oD.getElementsByTagName('a');
    var aDiv = document.querySelectorAll('.bar');
    var oA = document.getElementById('pt')
    for (var i = 0; i < aA.length; i++) {//因为js一次只能执行一个目标，所以当有多个元素时则采用循环，先给几个按钮加上事件
        aA[i].index = i;
        aA[i].onclick = function () {
            for (var i = 0; i < aA.length; i++) {//再用一个for循环给每个按钮加上class,若无须改动按钮本身，则无须用for
                aA[i].style.color = 'dodgerblue';
                aDiv[i].style.height = 0 + 'px';
                aDiv[i].style.filter = "alpha(opacity=0)";
                aDiv[i].style.opacity = 0;
                aDiv[i].style.visibility = 'hidden';
            }
            this.style.color = '#F45551';

            TweenMax.to(aDiv[this.index], 1, {height: 120});
            TweenMax.to(aDiv[this.index], 1, {opacity: 1});
            if (aDiv[this.index].style.visibility == "hidden") {
                aDiv[this.index].style.visibility = 'visible';
            } else if (aDiv[this.index].style.visibility == "visible") {
                aDiv[this.index].style.visibility = 'hidden';
            }
        }
    };
    myAddEvent(oA,'click',function()
        {
            $(".word1").lbyl(
                {
                    content: "姓名：蒲文豪",
                    speed: 50,
                    type: 'show',
                    finished: function () {
                        $(".word2").lbyl({
                            content: "爱好：Front-End，Dota",
                            speed: 50,
                            type: 'fade',
                            fadeSpeed: 50,
                            finished: function () {
                                $(".word3").lbyl({
                                    content: "技术领域：熟悉Html5，CSS3，JavaScript，Jquery，掌握TweenMax，Bootstrap，SVG以及后台语言PHP。",
                                    speed: 60,
                                    type: 'fade',
                                    fadeSpeed: 500,
                                });
                            }
                        });
                    }
                });
        }
    )
})
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
$(window).load(
    function()
    {
        var aDiv = document.querySelectorAll(".list");
        var aDiv2 = document.querySelectorAll(".footdivd")
        for(var i=0;i<aDiv.length;i++)
        {
            aDiv[i].index = i;
            aDiv[i].onmouseover=function()
            {
                for(var i=0;i<aDiv.length;i++)
                {
                    aDiv2[i].style.filter = "alpha(opacity=0)";
                    aDiv2[i].style.opacity = 0;
                }
                TweenMax.to(this, 1, {top:'-51%'});
                TweenMax.to(aDiv2[this.index], 1, { opacity: 1});
            }
            aDiv[i].onmouseout=function()
            {
                TweenMax.to(this, 1, { top:'-20%'});
                TweenMax.to(aDiv2[this.index], 1, { opacity: 0});
            }
        }
    }
)

