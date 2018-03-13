var main = require("html-loader!./main.html");

var common = require('./common/common.js');

var inx = require('./inx/inx.js');

var pro = require('./pro/pro.js');

var fw = require('./fw/fw.js');

var wap = require('./wap/wap.js');

var essay = require('./essay/essay.js');

require('./common/router.js');

require('./main.css');

if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    $("body").html("");
    var html = '<div style="width:100%;height:100%;position:absolute;top:0;z-index: 100;background-color: #2A2B2F;"><div style="width:80%;height:10%;position:absolute;left:50%;top:50%;margin-left:-40%;margin-top:-25%;text-align:center;animation:myalert 0.5s ease-in;-webkit-animation:myalert 0.5s ease-in;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">非常抱歉，实在缺乏时间来支持移动端，请用PC访问</div></div></div>';
        $("body").append(html);
} else {
    $("#loading .prog div").animate({ width: "10%" })

    setTimeout(function() {
        $("#loading .prog div").animate({ width: "60%" })
    }, 1000)

    setTimeout(function() {
        $("#loading .prog div").animate({ width: "80%" });
    }, 2000)

    setTimeout(function() {
        $("#loading .prog div").animate({ width: "99%" });
        setTimeout(function() {
            $("#root").html(main);

            $(".pwh-header-img").attr("src", "http://ofad4ydvw.bkt.clouddn.com/io/pwh.png");

            common.myalert("本站所诉内容仅为本人观点，欢迎探讨！", "moveImg");

            $("#pro,#fw,#wap,#essay").click(function() {
                $(this).addClass("pwh-this");
                $(this).parent().siblings().children().removeClass("pwh-this");
            });

            $("#inx").click(function() {
                $("#pro,#fw,#wap,#essay").removeClass("pwh-this");
            })

            eval(common.gethash() + ".render()");

            Router.route('', function() {
                inx.render();
            });
            Router.route('pro', function() {
                pro.render();
            });
            Router.route('fw', function() {
                fw.render();
            });
            Router.route('wap', function() {
                wap.render();
            });
            Router.route('essay', function() {
                essay.render();
            });
        }, 1000)
    }, 3000)
}