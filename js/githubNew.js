/**
 * Created by pwh on 2016/10/22.
 */
function aaa()
{
    TweenMax.to("#div2", 1, { rotationZ: 360 });
    TweenMax.to("#div2", 1, { opacity: 0 });
    var oDiv=document.getElementById("loadanimation");
    $('.loading').animate({'width':'65%'},50);
    setTimeout
    (function()
        {
            oDiv.style.display="none";
        TweenMax.to("#i1", 1, { bottom: 300 });
        TweenMax.to("#i2", 2, { bottom: 100 });
        TweenMax.to("#i3", 1, { bottom: 360 });
        TweenMax.to("#i4", 2, { bottom: 120 });
        TweenMax.to("#i5", 3, { bottom: 410 });
        TweenMax.to("#i6", 3, { bottom: 110 });
        },1000
    )
    setTimeout(function()
    {
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
    $('.loading').animate({'width':'85%'},50);
}


window.onload=function(){aaa();indexanimation()};


    function indexanimation() {
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

                aDiv[this.index].style.visibility = 'visible';
            }
        }
        ;
        $('.loading').animate({'width': '100%'}, 50);
        $("#loa").html("Completed");

    }




