// var left=require("html-loader!./left.html");

var right=require("html-loader!./right.html");

module.exports = {
	render : function (){
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/mine.jpg");
		$(".pwh-inx-left h2").html("珍爱前端，远离IE");
		// $(".pwh-body-content-left").html(left);
		$(".pwh-body-content-right").html(right);
		$("#pro,#fw,#wap,#essay").parent().removeClass("pwh-this");
		this.bind();
	},
	bind : function(){
		$(".mine").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/mine.jpg");
		console.log("您在首页！");
	}
}