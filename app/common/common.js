module.exports = {
    myalert: function(o, fun) {
        var _this = this;
        var html = '<div style="width:100%;height:100%;position:absolute;top:0;z-index: 100;background-color: #2A2B2F;"><div style="width:20%;height:10%;position:absolute;left:50%;top:-30%;margin-left:-10%;margin-top:-5%;animation:myalert 0.5s ease-in;-webkit-animation:myalert 0.5s ease-in;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;"><div style="padding: 50px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' + o + '</div><div class="pwh-alert-btn"><a class="pwh-alert-btn0" href="javascript:;">确定</a></div></div></div>';
        $("body").append(html);
        $(".pwh-alert-btn0").click(function() {
            $(this).parent().parent().parent().hide();
            if(fun != undefined)
            {
               eval("_this." + fun + "()");
            }
        })
    },
    moveImg: function() {
    	$(".pwh-body-left-shadow div h1").attr("style","animation:title 0.3s ease-out;-webkit-animation:title 0.3s ease-out;animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;")
        $(".pwh-body-left-shadow div h4").attr("style","animation:names 0.5s ease-out;-webkit-animation:names 0.5s ease-out 1s;animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;")
    	$(".pwh-body-left-shadow").attr("style","animation: book2 2s linear 1.8s;-webkit-animation: book2 2s linear 1.8s;animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;");
    	$(".pwh-body-left").attr("style","animation: book1 2s linear 1.8s;-webkit-animation: book1 2s linear 1.8s;animation-fill-mode: forwards;-webkit-animation-fill-mode: forwards;");
    	setTimeout(function(){
    		$(".pwh-body-left").addClass("setindex");
    	},2800);
        $(".pwh-inx-header img").attr("style", "animation:skake 4s ease-in;-webkit-animation:shake 4s ease-in;");
        for (var i = 0; i < 5; i++) {
            var arrs = ["200px", "190px", "150px", "150px", "90px"]
            var k = arrs[i];
            var num = parseInt((i + 4) * 1000);
            (function(i, k, num) {
                setTimeout(function() {
                    $(".ins-prog").eq(i).animate({ width: k }, "slow");
                }, num);
            })(i, k, num);
        }
        $("input[name=isFirst]").val(0);
    },
    gethash: function() {
        var hash = location.hash.slice(1);
        if (hash == "") hash = "inx"
        return hash;
    }
}