/**商品列表*/
!function(exports,req,u,ui,uw,tpl,meiDian,installRemind){
	var TYPE="7listOfItem7";

    var emit=uw.emit(TYPE);
	
	function div(im){
		return im('div');
	}
	function dfn(im){
		return im("data");
	}
	function associm(path,val,im){
		var data=dfn(im);
		var ndata=u.assocPath(path,val,data);
		im(null,ndata);
		return im;
	}
	function transData(data){

		return u.pipe(
			u.assoc("isAllItems",false),//data中添加【isAllItems】来标识是否全部展开
            transDateByGifts,
			itemIsShowByMore
		)(data);
	}
    function domOrParentHasAttr(dom,attr){
        var attrv=dom.getAttribute(attr);
        if(attrv!==null)return true;
        if(dom.parentElement==null){
            return false;
        }
        return domOrParentHasAttr(dom.parentElement,attr);
    }
	function render(im){
		if($config.isDxSite()){
			im("div").html(tpl.listOfItem_dx_items(dfn(im)));
			alternationDx(im);
		}else{
			im("div").html(tpl.listOfItem_items(dfn(im)));
			alternation(im);
		}
		/**
		 * 添加查看全部商品与折叠事件 （两个绑定同一事件，通过【data.isAllItems】来控制折叠与展示）
		 * 	  为什么添加在本文件，而不是添加到整体事件中，
		 * 	  主要是考虑到数据作用域问题，当前添加到每一个门店中，可以直接拿到当前门店的data，这是一个闭包
         */
		im("div").find('.item-more').on('click',function(){
			toggleAllItems(dfn(im));
			render(im);
			readerMeiDian();//美店
			installRemind.callValuesFn();//安装信息
		});


		//对应商品
		div(im).find(".js-install-remind").each(function(){
			var el=$(this),
				timer;
			el.hover(function(){
				clearTimeout(timer);
				el.parent().find('[hover]').show();
			},function(){
				timer=setTimeout(function(){
					el.parent().find('[hover]').hide();
				},100);
			})
		});
		//预约安装
		div(im).find(".yyaz-support").each(function(){
            var $this = $(this);
            var itemId = $this.attr("itemId");
            var dataWaveNum = null,dataInstallDate = null;
            var site = $this.attr("site");
            var tabBtn = $this.next().find(".btn-tab");
            var jsSelect = $this.next().find(".js-select");
            var slotSel = $this.next().find(".slotSel");
            var jsSelectTime = $this.find(".jsSelectTime");
            var slotBodyWrap = $this.next().find(".slotBodyWrap");
            function tabShow(){
                if($config.jsSelectTime == "暂缓安装"){
                    tabBtn.eq(0).removeClass("btn-checked");
                    tabBtn.eq(0).find(".chose_icon").addClass("hide");
                    tabBtn.eq(1).addClass("btn-checked");
                    tabBtn.eq(1).find(".chose_icon").removeClass("hide");

                    $(".slotTable").find(".slotHead").addClass("slotHeadGray");
                    $(".slotTable").find(".slotBodyWrap").addClass("slotBodyWrapGray");
                }else{
                    tabBtn.eq(1).removeClass("btn-checked");
                    tabBtn.eq(1).find(".chose_icon").addClass("hide");
                    tabBtn.eq(0).addClass("btn-checked");
                    tabBtn.eq(0).find(".chose_icon").removeClass("hide");

                    $(".slotTable").find(".slotHead").removeClass("slotHeadGray");
                    $(".slotTable").find(".slotBodyWrap").removeClass("slotBodyWrapGray");
                }
            }
            //安装时间(：20xx-xx-xx (周x) xx:xx-xx:xx )
            var tiVOSwaveTime = jsSelect.attr("data-installDate") + " (" + jsSelect.attr("data-installweek") + ") " + jsSelect.attr("data-waveTime");
            if(!jsSelect.attr("data-installDate") || jsSelect.attr("data-installDate") == undefined){
                $config.jsSelectTime = "暂缓安装";
            }else{
                $config.jsSelectTime = tiVOSwaveTime;
            }
            tabShow();
            jsSelectTime.html($config.jsSelectTime);
            //tab切换
            tabBtn.each(function(){
                $(this).on("click",function(){
                    tabBtn.removeClass("btn-checked").find(".chose_icon").addClass("hide");
                    $(this).addClass("btn-checked").find(".chose_icon").removeClass("hide");

                    if($(this).parent().hasClass("zhaz")){//暂缓安装
                        $(this).closest(".slotTable").find(".slotHead").addClass("slotHeadGray");
                        $(this).closest(".slotTable").find(".slotBodyWrap").addClass("slotBodyWrapGray");
                        jsSelect.find("span").css({"background":"#eee","color":"#ccc"});
                        slotSel.removeClass("hover");
                        dataWaveNum = "N";
                        dataInstallDate = "N";
                    }else{
                        $(this).closest(".slotTable").find(".slotHead").removeClass("slotHeadGray");
                        $(this).closest(".slotTable").find(".slotBodyWrap").removeClass("slotBodyWrapGray");
                        jsSelect.find("span").css({"background":"#ff5757","color":"#fff"});
                    }
                });
            });
            //修改
            $this.find(".yyaz-modify").click(function(){
                $("[click-document-hide]").hide();
                $this.next(".yyaz-box").show();
            });
            //点选
            var iTd = $this.next().find(".js-select-can");
            var iTds = $this.next().find(".js-select");
            iTd.each(function(){
                $(this).click(function(){
                    if($(this).closest(".slotBodyWrap").hasClass("slotBodyWrapGray"))return;
                    dataWaveNum = $(this).attr("data-waveNum");
                    dataInstallDate = $(this).attr("data-installDate");
                    iTd.removeClass("hover");
                    iTds.find("span").css({"background":"none","color":"#000"});
                    $(this).addClass("hover");
                });
            });
            //暂缓安装划过问号，显示tip
            var $zhazBtn = $this.next().find(".zhaz-btn");
            $zhazBtn.each(function(){
                var $tipsBtn = $(this).find(".tipsBtn");
                var $tipsBox = $zhazBtn.next();
                $tipsBtn.hover(function(){
                    $tipsBox.show();
                },function(){
                    $tipsBox.hide();
                });
            });
            div(im).find(".card-num-t").each(function(){
                var $this = $(this)
                    ,$cardNumCons = $(".cardNumCon")
                    ,cardNumCon = $this.parent().next(".cardNumCon");
                $this.on("click",function(){
                    $cardNumCons.hide();
                    cardNumCon.show();
                });
            });
            //点选但是不点确定会初始化tab状态
            $(document).on("click",function(e){
                if(domOrParentHasAttr(e.target,"click-document-pre") || domOrParentHasAttr(e.target,"click-document-hide"))return;
                iTd.removeClass("hover");
                iTds.find("span").css({"background":"#ff5757","color":"#fff"});
                tabShow();
            });

			//鼠标滑过事件
            var slotBodyList = slotBodyWrap.find(".slotBodyList");
            slotBodyList.each(function(){
                $(this).hover(function(){
                    $(this).css("background","#fffaf4");
                },function(){
                    $(this).css("background","#fff");
                });
            });
            slotBodyList.each(function(){
                var $this = $(this);
                $this.find(".slotSel").hover(function(){
                    var index = $(this).index();
                    slotBodyList.each(function(){
                        var iSlotSel = $(this).find(".slotSel").eq(index);
                        if(iSlotSel.css("background") == "#fff5e9"){
                            iSlotSel.css("background","#fff5e9");
                        }else{
                            iSlotSel.css("background","#fffaf4");
                        }
                    });
                },function(){
                    var index = $(this).index();
                    slotBodyList.each(function(){
                        $(this).find(".slotSel").eq(index).css("background","none");
                    });
                });
            });

            //取消
            $this.next().find(".cancelBtn").click(function(){
                $(this).closest(".yyaz-box").hide();
            });
            //确定
            $this.next().find(".primaryBtn").click(function(){
                if(dataWaveNum == null || dataInstallDate == null){
                    $("[click-document-hide]").hide();
                    $(".yyaz-box").hide();
                }else{
                    emit("saveTransportInstall",{
                        site:site,
                        itemId:itemId,
                        selectedTime:dataInstallDate,
                        selectedWaveNum:dataWaveNum
                    });
                }
            });
        });

		div(im).find("[act-gifts-more]").on('click',function(){
            var  $prents= $(this).parents('.cart-good-box');
            $prents.find('.js-more-box').show();
            $prents.find('.js-more-btn').hide();
		});
        div(im).find("[act-gifts-more-close]").on('click',function(){
            var $prents = $(this).parents('.cart-good-box');
            $prents.find('.js-more-box').hide();
            $prents.find('.js-more-btn').show();
        });

	}

    /**
	 * 处理赠品多个
     * @param data
     * @returns {*}
     */
	function transDateByGifts(data){
		u.map(function(all){
			u.map(function(item){
				//表示 子品
				if(item.commerceitemVOFlag && item.commerceitemVOFlag === 'SUB'){
					var profile = all.profile;
					//对于赠品处理
					if(profile && $config.isSub(profile.types)){
						if(item.state !== 'NO_GOODS'){
                            item.state = 'IN_STOCK';
						}
					}
				}
				item._gifts = [];
				if(item.returnedCouponVOs){
                    item._gifts = Array.prototype.concat(item.returnedCouponVOs);
                    for(var i=0; i<item._gifts.length; i++){
                        var gift = item._gifts[i] || {};
                        gift._isGift = false;
                    }
                    if(!item.gifts || item.gifts.length<1 ){item.gifts = []}
                    for(var i=0; i<item.gifts.length; i++){
                        var gift = item.gifts[i] ||{};
                        gift._isGift = true;
                    }
                    item._gifts = item._gifts.concat(item.gifts);

                    if(item._gifts.length>2){
                        item._gifts._isMore = true;
                    }else{
                        item._gifts._isMore = false;
                    }
				}

			})(all.commerceItemsGroup);
		})(data.groups);
		return data;
	}
	/**
	 * 通过【data.isAllItems】来为item添加属性isShow，在模板中来控制item是否显示
	 * 当【data.isAllItems】改变时，需要被动触发本方法
	 * 	  商品item中添加【isShow】属性 来判断是否大于8 ---模板用来判断是否显示item
	 *    在data中添加【itemsLength】属性 来存储items的总长度 ---模板用来判断是否显示“查看全部商品”
	 * @param data
	 * @returns {*}
	 */
	function itemIsShowByMore(data){
		var len = 0;
		u.pipe(
			u.map(function(all){
				u.pipe(u.map(function(item){
					len++;
					if(len>8 && !data.isAllItems){
						item.isShow = false;
					}else{
						item.isShow = true;
					}
				}))(all.commerceItemsGroup);
			})
		)(data.groups);
		data.itemsLength = len;
		return data;
	}

	/**
	 * toggle data中【isAllItems】
	 * 并 调用{ itemsMore(data)} 通过【data.isAllItems】来为item添加属性isShow
	 * @param data
     */
	function toggleAllItems(data){
		var all = data;
		all.isAllItems = all.isAllItems ? false : true;
		itemIsShowByMore(all);
	}
	function alternationDx(im){
		var el=div(im),idCardRealNameTimeid=null,idCardNumberTimeid=null;
		var uncheckbox=u.pipe(ui.removeClass("checkbox_chose"),ui.addClass("checkboxs"),ui.setAttr("value",false),function fn2(){
			uw.emit(TYPE,"saveOperatorInfo",{"agreement":false})
			el.find('[g-validate="dxrwxx"]').addClass("error");
			el.find('[g-tip-validate="dxrwxx"]').html('<span style="color:#f00;">请勾选</span>');
			el.find('[g-tip-validate="dxrwxx"]').show();
		})
		var checkbox=u.pipe(ui.removeClass("checkboxs"),ui.addClass("checkbox_chose"),ui.setAttr("value",true),function fn1(){
			uw.emit(TYPE,"saveOperatorInfo",{"agreement":true})
			el.find('[g-tip-validate="dxrwxx"]').hide();
			el.find('[g-validate="dxrwxx"]').removeClass("error");
		});
		var changeStatue=ui.jqpipe(ui.find('span.c-i'),u.ifn(ui.is(".checkbox_chose"),uncheckbox, checkbox));
		el.find("[g-check]").click(changeStatue);

		el.find("[g-select]").on("click",function(){
			$(this).removeClass('error')
			var $elBody=el.find("[g-select-body]")
			if($elBody.css('display')=='none'){
				el.find("a>i").removeClass('arrowdown').addClass('arrowup2')
				$elBody.show()
			}else{
				el.find("a>i").removeClass('arrowup2').addClass('arrowdown')
				$elBody.hide()
			}
			return false;
		});
		el.on("click",function(){
			el.find("[g-select-body]").hide();
		});
		el.find("[s-idx]").on("click",function(){
			var val=$(this).attr('s-idx');
			var text=$(this).html();
			el.find('[g-select]').attr('value',val)
			el.find("[g-title]").html(text);
			if(val){
				el.find('[g-tip-validate="dx_dqyzf"]').hide();
				el.find('[g-validate="dx_dqyzf"]').removeClass("error");
			}
			uw.emit(TYPE,"saveOperatorInfo",{"selectChargesWay":val})
		});
		function errStylefn(tipel,textel){
			return function(err){
				function fn1(){
					tipel.hide();
					textel.removeClass("error");
				}
				function fn2(err){
					textel.addClass("error");
					tipel.html('<span style="color:#f00;">'+err+"</span>");
					tipel.show();
				}
				return u.ifn(u.isEmpty,fn1,fn2)(err);
			}
		}
		//身份证号码加星前端策略
		el.find("[no-modify]").one("mousedown",function(){
			$(this).removeAttr("no-modify").val('')
		})
		// 实时验证和保存运营商信息
		el.find('[name="idCardRealName"]').keyup(function(){
			var $this=$(this)
			idCardRealNameTimeid=ui.delay(1000,function(){
				if(validate.validateItem("dxjzxm",$this.val(),errStylefn(el.find('[g-tip-validate="dxjzxm"]'),el.find('[g-validate="dxjzxm"]')))){
					uw.emit(TYPE,"saveOperatorInfo",{"idCardRealName":$this.val()})	
				}
			},null,idCardRealNameTimeid)
		})
		el.find('[name="idCardNumber"]').keyup(function(){
			var $this=$(this)
			idCardNumberTimeid=ui.delay(1000,function(){
				if(validate.validateItem("dxsfzh",$this.val(),errStylefn(el.find('[g-tip-validate="dxsfzh"]'),el.find('[g-validate="dxsfzh"]')))){
					uw.emit(TYPE,"saveOperatorInfo",{"idCardNumber":$this.val()})	
				}
			},null,idCardNumberTimeid)
		})
	}
	function alternation(im){
		ui.gpipes(div(im),{
			gjaz:gjaz
		});
		//挂件安装
		function gjaz(gjid,path,value){
			uw.emit(TYPE,"gjaz",gjid);
			var a=associm(path.split("."),value,im);
			render(a);
		}
	}
	function readerMeiDian(){
		//TODO 当且 loadcart 和load 美店数据后 才执行，当下解决的方案是 渲染两次
		var list = meiDian.getMap();
		if(!list ){
			return;
		}
		for(var prop in list){
            if (list[prop + '']) $('.mei-dian-' + prop).attr("title",'来自美店：' + list[prop + '']);
            // if(list[prop+'']) $('.mei-dian-'+prop).text('来自美店:'+list[prop+'']);
		}

	}
	function make(div,data){
		data=transData(data);//洗数据
		function r(a,data1){
			if(a=="div")return div;//操作范围
			if(data1!=null){
				data=data1;
				return r;
			}
			if(a=="data")return data;//最新数据
		}
		render(r);
		return r;
	}
	exports.listOfItemItems={
		make:make,
		TYPE:TYPE
	};
}(this,request,util,util_ui,util_watch,GTPL,MeiDian,InstallRemind);