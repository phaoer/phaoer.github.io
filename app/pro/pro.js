var pro=require("html-loader!./pro.html");

var pro1 = require("html-loader!./pro1.html");

var pro2 = require("html-loader!./pro2.html");

module.exports = {
	render : function (){
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/pro.jpg");
		$(".pwh-inx-left h2").html("JS疑难");
		$(".pwh-body-content-right").html(pro);
		$("#pro").addClass("pwh-this");
		this.bind();
	},
	bind : function(){
		var _this = this;
		var converter = new showdown.Converter();
		var html1 = converter.makeHtml(pro1);
		var html2 = converter.makeHtml(pro2);
		$(".back").click(function(){
			_this.render();
		})
		$(".pwh-pro-list li a").click(function(){
			if($(this).attr("class") == "pro1")
            {
            	$(".pwh-pro-list").html(html1);
            }else if($(this).attr("class") == "pro2")
            {
            	$(".pwh-pro-list").html(html2);
            }
		})
		console.log("您在JS疑难版块")
	}
}