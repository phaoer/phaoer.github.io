var fw=require("html-loader!./fw.html");

var fw1=require("html-loader!./fw1.html");

var fw2=require("html-loader!./fw2.html");

module.exports = {
	render : function (){
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/fw.jpg");
		$(".pwh-inx-left h2").html("前端框架");
		$(".pwh-body-content-right").html(fw);
		$("#fw").addClass("pwh-this");
		this.bind();
	},
	bind : function(){
		var _this = this;
		var converter = new showdown.Converter();
		var html1 = converter.makeHtml(fw1);
		var html2 = converter.makeHtml(fw2);
		$(".back").click(function(){
			_this.render();
		})
		$(".pwh-fw-list li a").click(function(){
			if($(this).attr("class") == "fw1")
            {
            	$(".pwh-fw-list").html(html1);
            }else if($(this).attr("class") == "fw2")
            {
            	$(".pwh-fw-list").html(html2);
            }
		})
		console.log("您在前端框架版块")
	}
}