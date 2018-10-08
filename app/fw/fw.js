module.exports = {
	render : function (o){
		var _this = this;
		$(".pwh-inx-left img").attr("src","http://ofad4ydvw.bkt.clouddn.com/io/fw.jpg");
		$(".pwh-inx-left h2").html("前端框架");

        if(o){
        	var fw = '<button class="back">返回目录</button><div class="pwh-list pwh-fw-list"><ul>';
        	o.map(function(ele,index){
                fw += '<li><svg aria-hidden="true" class="octicon octicon-repo repo-icon" height="30" version="1.1" viewBox="0 0 12 16" width="20"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg><a href="javascript:;" class="fw' + (index+1) + '">' + ele.title + '</a><p>' + ele.describle + '</p></li>';
        	})
            fw += '	</ul></div>';
        	$(".pwh-body-content-right").html(fw);
			$("#fw").addClass("pwh-this");
			this.bind(o);
			return false;
        }

        $.getJSON('https://phaoer.imroc.io:8080/index.php/githubio/index?callback=?',{type:'fw'},function(res){
        	var fw = '<button class="back">返回目录</button><div class="pwh-list pwh-fw-list"><ul>';
        	res.list.map(function(ele,index){
                fw += '<li><svg aria-hidden="true" class="octicon octicon-repo repo-icon" height="30" version="1.1" viewBox="0 0 12 16" width="20"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path></svg><a href="javascript:;" class="fw' + (index+1) + '">' + ele.title + '</a><p>' + ele.describle + '</p></li>';
        	})
            fw += '	</ul></div>';
        	$(".pwh-body-content-right").html(fw);
			$("#fw").addClass("pwh-this");
			_this.bind(res.list);
        })
	},
	bind : function(o){
		var _this = this;
		$(".back").click(function(){
			_this.render(o);
		})
		var converter = new showdown.Converter();

		$(".pwh-fw-list li a").click(function(){
            $(".pwh-fw-list").html(converter.makeHtml(o[$(this).parent().index()]['content']));
		})
		console.log("您在前端框架版块")
	}
}