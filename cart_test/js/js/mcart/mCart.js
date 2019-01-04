;(function(exports){
    var URL = (function(){
        var site =  _isQyg() ? '/qiyegou': '/home';
        return "//cart" + cookieDomain + site + "/api/cart/getCartItemCount"
    })();
    /**
     * key 后端值
     * value为 cookieNumVals的key值
     * todo 没有与站点进行关联，导致……
     */
    var cookieNumType = {
        '0':'home',
        '1':'qyg'
    };
    var cookieNumVals = {};//存放cook中“cartnum”的key-value

    /**
     * 是否是企业购
     * @returns {boolean}
     */
    function _isQyg(){
        //minCartType = 'QYG
        if((typeof minCartType!=="undefined") && minCartType === 'QYG'){
            return true;
        }
        return false;
    }

    /**
     *
     * 按照不同的站点，返回不同值
     * @returns {ServerResponse|*}
     */
    function getCookieNum(){
        var numStr = $.cookie("cartnum");
        _parseCookieNum(numStr);

        if(_isQyg()){//todo 只考虑企业购与home
            return cookieNumVals['qyg'] || 0;
        }
        return cookieNumVals['home'] ||0;
    }

    /**
     * 将全局变量 cookieNumVals转换成字符串如 “0_26|1_2|”
     * @private
     */
    function _unparseCookieNum(){
        return '0_'+ (cookieNumVals.home||0) +'-1_'+ (cookieNumVals.qyg||0);//todo 只考虑企业购与home
    }

    /**
     * 解析 $.cookie("cartnum") 中值
     *  cartnum 值如 “home_26|qyg_2|” 最后返回{home：26，qyg:2}
     * @param numStr
     * @returns {number}
     */
    function _parseCookieNum(numStr){
        if(!numStr) return 0;
        var nums = numStr.split('-');
        if(!nums  && nums.length<1){
            return 0
        }
        for(var i=0; i<nums.length; i++){
            var _num =nums[i];
            var _nums =  _num.split('_');

            if(!_nums[0]) continue;
            var key = cookieNumType[_nums[0]] || 'home';
            cookieNumVals[key] = _nums[1] || 0;
        }
    }

    /**
     * 设置购物车数量cookie
     * @param num
     */
    function setCookieNum(num){
        if(_isQyg()) {
            cookieNumVals.qyg = num ||0;
        }else{
            cookieNumVals.home = num ||0;
        }

        var cookieDate = new Date();
        cookieDate.setTime(cookieDate.getTime() + (60 * 60 * 1000 * 24 *7));
        $.cookie('cartnum', _unparseCookieNum(),{domain :cookieDomain, path:'/',expires:cookieDate});
    }

    exports.mCart={
        getMcartNum:function(cartnum){
            //aside car
            if(cartnum){
                cartnum=cartnum;
            }else{
                cartnum=0;
            }
            $("#gome-aside-cart").find(".car_num s").html(cartnum);
            $(".gome-bar-btn-cart").find(".car_num s").html(cartnum);
            $("#commerceItemQuantityId").html(cartnum);//小购物车
            if(cartnum !=0){
                if(_isQyg()){
                    $("#hdrcarttext").text("企业购物车");   //小购物车
                }else{
                    $("#hdrcarttext").text("去购物车结算");   //小购物车
                }

                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background","#dd00a7");
                $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").addClass('caricon_num'); //小购物图案
                //小三角红色 car_num_0
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").removeClass("car_num_0").addClass("car_num_more");
                $(".mygome-side").addClass("havecount");//小购物车
                //$("#gome-head .shopnum").css("background","red");//小购物车
            }else{
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").css("background","#A5A5A5");
                $("#gome-bar-btn-cart .caricon,#gome-aside-cart .caricon").removeClass('caricon_num'); //小购物图案
                //小三角红色 car_num_0
                $(".gome-bar-btn-cart .car_num, #gome-aside-cart .car_num").addClass("car_num_0").removeClass("car_num_more");
                $(".mygome-side").removeClass("havecount");//小购物车
                //$("#gome-head .shopnum").css("background","#A5A5A5");//小购物车

                if(_isQyg()){
                    $("#hdrcarttext").text("企业购物车");   //小购物车
                }else{
                    $("#hdrcarttext").text("购物车空了");//小购物车
                }
                return;
            }

            //aside car
            $("#commerceItemQuantityId").html(cartnum);
            if(cartnum>0){
                $("[data-cart='mincart'],.cart").addClass("havecount");
                if(_isQyg()){
                    $("#hdrcarttext").text("企业购物车");   //小购物车
                }else{
                    $("#hdrcarttext").text("去购物车结算");   //小购物车
                }
            }
        },
        /**
         * if state == true
         * 请求购物车数量 首先读cookie cartnum
         * 如果 cookie 不存在 则发请求
         * @param state
         */
        lazyCart:function(state){
            var cartnum= getCookieNum() || 0;
            if(state==false){
                mCart.getMcartNum(cartnum);
            }else if(getCookieNum() && getCookieNum()>=0){
                exports.mCart.getMcartNum( getCookieNum());
            } else{
                mCart.getCartNumber();
            }
        },
        getCartNumber: function(){
            $.ajax({
                type: 'get',
                url: URL,
                dataType: 'jsonp',
                success:function(result){
                    mCart.lazyCartDom(result);
                }
            });
        },
        lazyCartDom: function (result) {
            if(result.success === true){
                /* var cookieDate = new Date();
                 cookieDate.setTime(cookieDate.getTime() + (10 * 60 * 1000));
                 $.cookie("cartnum", result.data,{path:'/',expires:cookieDate});*/
                setCookieNum(result.data);
                var cartnum= getCookieNum();
                mCart.getMcartNum(cartnum);
            }else{
                mCart.getMcartNum(0);
                return;
            }
        },
        isQyg: _isQyg//是否是企业购
    };
    $(function init(){
        /**
         * 默认 请求ajax请求
         * 购物车屏蔽获取小购物车数量的接口，其他初始化页面需要请求小购物接口
         * 只有当  exports.mCart.lazyCart(true）发请求
         */
        if(window.$page){
            exports.mCart.lazyCart(false);
        }else{
            exports.mCart.lazyCart(true);
        }

    });
})(window);