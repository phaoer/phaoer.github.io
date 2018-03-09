var main = require("html-loader!./main.html");

var common = require('./common/common.js');

var inx = require('./inx/inx.js');

var pro = require('./pro/pro.js');

var fw = require('./fw/fw.js');

var wap = require('./wap/wap.js');

var essay = require('./essay/essay.js');

require('./common/router.js');

require('./main.css');

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
        
        $(".pwh-header-img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/pwh.png");

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