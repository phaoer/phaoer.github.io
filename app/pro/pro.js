var pro=require("html-loader!./pro.html");

var pro1 = require("html-loader!./pro1.html");

var pro2 = require("html-loader!./pro2.html");

var pro3 = require("html-loader!./pro3.html");

var pro4 = require("html-loader!./pro4.html");

var pro5 = require("html-loader!./pro5.html");

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
		var html3 = converter.makeHtml(pro3);
		var html3 = converter.makeHtml(pro4);
		var html3 = converter.makeHtml(pro5);
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
            }else if($(this).attr("class") == "pro3")
            {
            	$(".pwh-pro-list").html(html3);
            }else if($(this).attr("class") == "pro4")
            {
            	$(".pwh-pro-list").html(html4);
            }else if($(this).attr("class") == "pro5")
            {
            	$(".pwh-pro-list").html(html5);
            }
		})
		console.log("您在JS疑难版块")
	}
}