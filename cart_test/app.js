var express=require("express");
var http=require("http");
var app=express();
var httpapp=http.createServer(app);
var swig=require("swig");
var U=require("./util/U.js");
var router=require("./router/gomeCart.js");
app.set('port', process.env.PORT || 80);

//如果本地环境
if(process.env.GOMECARTFRONT==="dev"){
	var gfeNodeBuild = require('gfe-node-build');
	gfeNodeBuild.init(express);
	var devconfig=require('./dev-cart/devconfig.js');
	var devcart=require('./dev-cart/gomeCartNative');
	devcart.gomeCartNative(app,devconfig.gomeCartNative);
	httpapp.listen(app.get('port'),function(){
		 console.log('gome-cart-front app run on port http://localhost:' 
		 + app.get('port') 
		 + ' started in '
		 + app.get('env') 
		 + '   '+U.formatLong(new Date-0));
	});
}else{
	httpapp.listen(8087,function(){	
		console.log(U.formatLong(new Date-0)+"gome-cart-front app run on port 8087");
	});
}


app.set("view engine","html");
app.engine("html",swig.renderFile);
app.use(router);
app.use(express.static(__dirname+"/static"));

app.all("/:site/api/*",function(req,res){
	res.json({success:false,errMsg:"接口404"});
});
app.use(function(req,res){
	console.error(req);
	res.redirect("/?status=404");
});