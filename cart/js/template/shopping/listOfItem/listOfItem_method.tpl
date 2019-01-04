{{each(iidx,info) shippinginfo}}
<div class="all_listpay">
	<div class="clearfix tittle mb15">
		<h4 class="fl mr15 send_way">配送方式</h4>
		<div class="goods_dy" map-item>
			{{if visibleCorrespondItems(shopId)}}
			<a href="javascript:void(0)" class="fontBlue clearfix" hoverup-1 click-document-pre>
				<i class="fl c-i tips" style="margin-top:5px; margin-right:4px;"></i>
				<span class="fl" >对应商品</span>
			</a>
			{{/if}}
			<!--对应商品弹层开始-->
			<div class="pr zi1000">
				<div class="goods_fenlei pabs hide box-sd1" hover-1 click-document-hide>
					<div class="white-arrow" style="top: -8px;left: 70px;font-size:17px;">◆</div>
					{{if info.items&&info.items.length>4}}
					<div style="height:15px;"></div>
					<div class="fenlei_in" style="height:370px;overflow-y:auto;">
						{{else}}
						<div class="fenlei_in">
							{{/if}}
							{{each(index,item) info.items}}
							{{if item}}
								<div class="clearfix">
									<div class="mr10 col-1 fl" >
										<img src="${item.itemImageURL}" width="80" height="80" alt="">
									</div>
									<div class="fl col-2" >
										<a href="${item.itemURL}" class="p-name" target="_blank" title="${item.itemName}">
											<p class="p-name">
												{{if item.commerceitemVOFlag =='SUB'}}
													{{if $config.isListValue(item.profile.types,'DPG')}}
														<em class="zp">折扣品</em>
													{{else $config.isListValue(item.profile.types,'JJHG')}}
														<em class="zp">换购品</em>
													{{else $config.isSub(profile.types)}}
														<em class="zp">赠品</em>
													{{/if}}
												{{/if}}
												{{if item.itemPropCode=="ZP"}}
												<em class="zp">赠品</em>
												{{/if}}
												${$config.limitStr(item.itemName,48)}
											</p>
										</a>
									</div>
								</div>
							{{/if}}
							{{if index!==info.items.length-1}}
									<div style="height:15px;"></div>
							{{/if}}
							{{/each}}
						</div>
					</div>
				</div>
				<!--对应商品弹层结束-->
			</div>
		</div>
	</div>
	<!--快递-->
	<div class="Express clearfix">
		{{each info.express}}
		{{if $value}}
		<div class="dispatfont btn_Square_out mb15">
			<div class="h28">
				{{if $value.selected}}
					<a href="javascript:void(0)" class="btn btn-check btn-checked mw150 mr10">
						<span class="name">${$config.isGomeShopExpressName($value,shopId)}</span>
						<i class="c-i chose_icon"></i>
					</a>
				{{else}}
					<a href="javascript:void(0)" class="btn btn-check mw150 mr10"
					   g-e-path="shippinginfo,${iidx},express,${$index}">
						<span class="name">${$config.isGomeShopExpressName($value,shopId)}</span>
					</a>
				{{/if}}
			</div>
		</div>
		{{/if}}
		{{/each}}
	</div>

	<!--支付方式-->
	{{each payments}}
	{{if selected}}
	<div class="pay_way_c mb10">
		<span>支付方式：</span>
		<span class="cash mr20">${$config.labels[$value.code]}</span>
		{{if payments.length>1}}
		<a href="javascript:void(0)" g-p-path="shippinginfo,${iidx},payments">修改</a>
		{{/if}}
	</div>
	{{/if}}
	{{/each}}
	{{if selectedfn(info.express)&&$config.isShowDataByShoppingList(selectedfn(info.express))}}
		<!--配送时间或者title-->
		<div class="otherTime pr clearfix">
			<div class="fl" >配送时间：</div>
			<div class="chooseTime pr" style="margin-left:60px">
			<div class="chooseDay">
				{{if info.times.code=="DAY"}}
					{{each info.times.items}}
					{{if selected}}
					<label class="lb_check show" >
						<span class="c-i radio_chose mr5 mt4 fl"></span>
						<input type="radio" class="btn_radio">
						${$config.labels[code]}
					</label>
					{{else}}
					<label class="lb_check show"
						   g-day-path="shippinginfo,${iidx},times,items,${$index}">
						<span class="c-i radio mr5 mt4 fl"></span>
						${$config.labels[code]}
					</label>
					{{/if}}
					{{/each}}
				{{/if}}
				{{if info.times.code=="SLOT"}}
					<div class="fl">
						<span g-slot-calendar_${iidx}>预计&nbsp;${xsdSelectedTime(info.times.concrete)}&nbsp;送达</span>
						<a click-document-pre href="javascript:;" class="ml10 js-modify_slot_time" data-time=${iidx}>修改</a>
						<div click-document-hide class="pabs deli_time box-sd1 zi10 hide">
							<div class="slotTableWrapper">
							{{each(idconc,ptime) info.times.concrete}}
								<table class="slotTable" {{if idconc===0}}style="margin-top:0"{{/if}}>
									<thead>
									<tr>
									{{each(idx,timeItem) ptime.head}}
										{{if idx==0}}
										<th>
											时间段
										</th>
										{{else}}
										<th>
											<p class="col-1-1">${timeItem.md}</p>
											<p class="col-1-2">${timeItem.label}</p>
										</th>
										{{/if}}
									{{/each}}
									</tr>
									</thead>
									<tbody>
									{{each(bidx,bodyitem) ptime.body}}
										<tr>
										{{each(biidx,timeitem) bodyitem}}
											{{if biidx==0}}
												<td>
													${$config.formathhmm(timeitem.startTime)}-${$config.formathhmm(timeitem.endTime)}
												</td>
											{{else timeitem.available}}
												{{if timeitem.selected}}
													<td class="hover js-selected">
														<div class="item">已选</div>
													</td>
												{{else}}
													<td g-t-path="shippinginfo,${iidx},times,concrete,${idconc},body,${bidx},${biidx}">
														<div class="item">可选</div>
													</td>
												{{/if}}
											{{else}}
												<td><div class="item" style="background-color:#ccc;color:#fff">约满</div></td>
											{{/if}}
										{{/each}}
										</tr>
									{{/each}}
									</tbdoy>
								</table>
							{{/each}}
							</div>
							<p class="deli_time_tip">温馨提示：我们会努力按照您指定的时间配送，但因天气、交通等各类因素影响，您的订单有可能会有延误现象！</p>
							<p class="deli_time_tip deli_time_tip_warn deli_time_tip_warn1">您选择的送达时间已约满，请重新选择其他时间段进行配送！</p>
							<p class="deli_time_tip deli_time_tip_warn deli_time_tip_warn2">出问题啦，请稍后重新选择！</p>
							<div class="deli_time_ctrl">
								<a g-t-cancel class="cancelBtn" href="javascript:void(0)">取消</a>
								<a attr-slot=g-slot-confirm_${iidx} g-t-confirm class="primaryBtn" href="javascript:void(0);">确定</a>
							</div>
						</div>
					</div>
				{{/if}}
			</div>
		</div>
	{{else}}
		{{if selectedfn(info.express)}}
		<div class="otherTime pr clearfix mb15 ">
			<div class="fl" >${$config.showTilteByShoppingList(selectedfn(info.express),shopId)}</div>
		</div>
		{{/if}}
	{{/if}}
</div>
{{/each}}
{{if $config.VBLE.beizhu()}}
<p class="valignp mt40" g-pipe>
	<span class="remarks fl">备注:</span>
	<label class="rmarkLabel fl">
		<input type="text" class="form-control" style="width:250px;" value="${profile.comments}" g-keyup="changeComment [g-keyup] [g-tip]" placeholder="最多输入30个字">
	</label>
	<span class="nWarings fl hide fontRed" g-tip>&nbsp;&nbsp;最多输入30个字 </span>
</p>
{{/if}}
{{if shopPhone}}
<p class="dispatfont">
	<span class="fontGray mr5">如有疑问请联系</span>
	${shopPhone}
</p>
{{/if}}