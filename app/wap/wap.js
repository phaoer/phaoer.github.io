var wap=require("html-loader!./wap.html");

module.exports = {
	render : function (){
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/wap.jpg");
		$(".pwh-inx-left h2").html("移动端");
		$(".pwh-body-content-right").html(wap);
		$("#wap").addClass("pwh-this");
		this.bind();
	},
	bind : function(){
		// var _this = this;
		// var converter = new showdown.Converter();
		// var html1 = converter.makeHtml(wap1);
		// var html2 = converter.makeHtml(wap2);
		// $(".back").click(function(){
		// 	_this.render();
		// })
		// $(".pwh-wap-list li a").click(function(){
		// 	if($(this).attr("class") == "wap1")
  //           {
  //           	$(".pwh-wap-list").html(html1);
  //           }else if($(this).attr("class") == "wap2")
  //           {
  //           	$(".pwh-wap-list").html(html2);
  //           }
		// })
		console.log("您在JS疑难版块")
	}
}