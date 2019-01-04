var express=require("express");
var gomeConfig=require("./gomeConfig.js");
var connectLog=require("../util/connectLog.js");
var router=express();
//基础配置信息
router.use(function(req,res,next){
	if(req.query.debug){
		req.cartconfig=gomeConfig.debug;
	}else{
		req.cartconfig=gomeConfig.normal
	}
	next();
});
//日志管理
router.use(connectLog);

//购物车页
function cart(req,res){
	var site=req.params.site || "home";
	res.render("cart" + (req.query.debug? '-debug' : ''),{
		config:req.cartconfig,
		site:site
	});
}
//提交订单页
function shopping(req,res){
	var site=req.params.site||"home";
	res.render("shopping"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig,
		site:site
	});
}
//提交订单成功页
function orderSuccess(req,res){
	res.render("order-success"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig
	});
}
//海外购身份认证
function authorization(req,res){
	res.render("readAuthorization"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig
	});
}
//极限通身份认证页面
function jixinAuthentication (req,res){
   res.render("jixin-authentication"+ (req.query.debug? '-debug' : ''),{
      config:req.cartconfig
   })
}
//延保身份认证页面
function allowance(req,res){
	res.render("save-energy-allowance"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig
	});
}
//最新加入购物车成功页
function addSuccess2(req,res){
	res.render("addsuccess2" + (req.query.debug? '-debug' : ''),{
		config:req.cartconfig,
		referer:req.headers.referer
	});	
}
//支付成功页
function paymentSuccess(req,res){
	res.render("payment-success"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig
	});
}
//修改订单,给会员使用
function orderModify(req,res){
	res.render("orderModify"+ (req.query.debug? '-debug' : ''),{
		config:req.cartconfig
	})
}
//公共头 本地测试用
function commonHead_user(req,res){
	res.send("HELLO HEAD USER")
}
function noPermission(req,res){
    var site=req.params.site || "home";
    res.render("noPermission" + (req.query.debug? '-debug' : ''),{
        config:req.cartconfig,
        site:site
    });
}
function hygTip(req,res){
	var site=req.params.site || "home";
	res.render("hygTip" + (req.query.debug? '-debug' : ''),{
		config:req.cartconfig,
		site:site
	});
}
router.get("/",cart);
router.get("/:site/cart",cart);
router.get("/shopping",shopping);
router.get("/:site/shopping",shopping);
router.get("/order-success",orderSuccess);
router.get("/no-permission",noPermission);
router.get("/haiwaigou/read/authorization",authorization);
router.get("/save/energy/allowance",allowance);
router.get("/save/jixin/authorization",jixinAuthentication);
router.get("/member/orderModify",orderModify);
router.get("/addsuccess",addSuccess2);
router.get("/payment-success",paymentSuccess);
router.get('/hygTip',hygTip);
router.get("/n/common/*",commonHead_user);
module.exports=router;
