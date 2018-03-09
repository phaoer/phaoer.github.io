var essay=require("html-loader!./essay.html");

module.exports = {
	render : function (){
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/mine.jpg");
		$(".pwh-inx-left h2").html("JS疑难");
		$(".pwh-body-content-right").html(essay);
		$("#essay").addClass("pwh-this");
		this.bind();
	},
	bind : function(){
		// var _this = this;
		// var converter = new showdown.Converter();
		// var html1 = converter.makeHtml(essay1);
		// var html2 = converter.makeHtml(essay2);
		// $(".back").click(function(){
		// 	_this.render();
		// })
		// $(".pwh-essay-list li a").click(function(){
		// 	if($(this).attr("class") == "essay1")
  //           {
  //           	$(".pwh-essay-list").html(html1);
  //           }else if($(this).attr("class") == "essay2")
  //           {
  //           	$(".pwh-essay-list").html(html2);
  //           }
		// })
		console.log("您在随笔版块")
	}
}