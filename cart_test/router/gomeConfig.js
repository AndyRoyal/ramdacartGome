var os=require("os");
var u =require("../util/U")
var normal={
	cssServer:"//css.gomein.net.cn",
	jsServer:"//js.gomein.net.cn",
	imageServer:"//app.gomein.net.cn",
	version:u.fromatDate(new Date,"yyM*dd"),
	cookieDomain:".gomeplus.com"
};
var debug={
	cssServer:"//127.0.0.1",
	jsServer:"//127.0.0.1",
	imageServer:"//127.0.0.1",
	log:1,
	originResource:true,
	cookieDomain:".atguat.com.cn"
};



if(process.env.GOMECARTFRONT==="dev"){
	normal={
		cssServer:"",
		jsServer:"",
		imageServer:"//app.atguat.com.cn",
		cookieDomain:".atguat.com.cn",
		log:1,
		version:u.fromatDate(new Date,"yyM*dd"),
		originResource:true,
		debug:true
	};
}
if(process.env.GOMECARTFRONT==="uat"){
	normal={
		cssServer:"//css.atguat.com.cn",
		jsServer:"//js.atguat.com.cn",
		imageServer:"//app.atguat.com.cn",
		cookieDomain:".atguat.com.cn",
		version:u.fromatDate(new Date,"yyM*dd"),
		log:1
	};
}
if(process.env.GOMECARTFRONT==="pre"){
	normal={
		cssServer:"//css.gomeprelive.com.cn",
		jsServer:"//js.gomeprelive.com.cn",
		imageServer:"//app.gomeprelive.com.cn",
		cookieDomain:".gomeprelive.com.cn"
	};
}
module.exports={
	debug:debug,
	normal:normal
};
