function Router() {
    this.routes = {};
    this.currentUrl = '';
}
Router.prototype.route = function(path, callback) {
    this.routes[path] = callback || function(){};
};
Router.prototype.refresh = function() {
	var isHash,hash = location.hash.slice(1);
    if(hash !="" && hash !="pro" && hash !="fw" && hash !="wap" && hash !="essay" )
    {
    	isHash = "";
    }else{
    	isHash = hash;
    }
    this.currentUrl = isHash || '';
    this.routes[this.currentUrl]();
};
Router.prototype.init = function() {
    // window.addEventListener('load', this.refresh.bind(this), false);
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}
window.Router = new Router();
window.Router.init();