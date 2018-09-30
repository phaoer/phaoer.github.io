// var left=require("html-loader!./left.html");

var right = require("html-loader!./right.html");

module.exports = {
    render: function() {
        $(".pwh-inx-left img").attr("src", "http://ofad4ydvw.bkt.clouddn.com/io/mine.jpg");
        $(".pwh-inx-left h2").html("珍爱前端，远离IE");
        // $(".pwh-body-content-left").html(left);
        $(".pwh-body-content-right").html(right);
        $("#pro,#fw,#wap,#essay").parent().removeClass("pwh-this");
        this.bind();
    },
    bind: function() {
        if ($("input[name=isFirst]").val() == 0) {
            for (var i = 0; i < 5; i++) {
                var arrs = ["200px", "190px", "150px", "150px", "150px"]
                var k = arrs[i];
                var num = parseInt((i + 4) * 500);
                (function(i, k, num) {
                    setTimeout(function() {
                        $(".ins-prog").eq(i).animate({ width: k }, "slow");
                    }, num);
                })(i, k, num);
            }
        }
        $(".mine").attr("src", "http://ofad4ydvw.bkt.clouddn.com/io/mine.jpg");
        console.log("您在首页！");
    }
}