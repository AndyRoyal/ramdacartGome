var GTPL={}
$.extend({
	encode: function( text ) {
		return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
	}
})

GTPL.invoice_modify=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="contTit clearfix">   <h3>发票信息</h3>  </div>  <ul class="editBox" id="j-invoice" g-pipe>   ');if((typeof(needInvoiceAvailable)!=='undefined' && (needInvoiceAvailable)!=null) && (typeof(needInvoiceAvailable)==='function'?(needInvoiceAvailable).call($item):(needInvoiceAvailable))){__.push('    <li>     <span class="fpSide">&nbsp;</span>     ');if((typeof(needInvoice)!=='undefined' && (needInvoice)!=null) && (typeof(needInvoice)==='function'?(needInvoice).call($item):(needInvoice))){__.push('     <label><input type="radio" name="needInvoice" value="true"  checked="checked">需要发票</label>     <label><input type="radio" name="needInvoice" value="false"  g-value-path="needInvoice">不要发票</label>     ');}else if((true) && true){__.push('     <label><input type="radio" name="needInvoice" value="true"  g-value-path="needInvoice">需要发票</label>     <label><input type="radio" name="needInvoice" value="false"  checked="checked">不要发票</label>     ');}__.push('     </label>    </li>   ');}else if((true) && true){__.push('          <input style="display:none" type="radio" name="needInvoice" value="');if(typeof(needInvoice)!=='undefined' && (needInvoice)!=null){__.push($.encode((typeof(needInvoice)==='function'?(needInvoice).call($item):(needInvoice))));}__.push('" checked="checked">   ');}__.push('     ');if((typeof(needInvoice)!=='undefined' && (needInvoice)!=null) && (typeof(needInvoice)==='function'?(needInvoice).call($item):(needInvoice))){__.push('    <li>     <span class="fpSide"><em>*</em>发票类型：</span>     ');if((typeof(invoiceType==0)!=='undefined' && (invoiceType==0)!=null) && (typeof(invoiceType==0)==='function'?(invoiceType==0).call($item):(invoiceType==0))){__.push('      <label>       <input type="radio" name="invoiceType" value="0" checked="checked">普通发票      </label>     ');}else if((typeof(invoiceType==1)!=='undefined' && (invoiceType==1)!=null) && (typeof(invoiceType==1)==='function'?(invoiceType==1).call($item):(invoiceType==1))){__.push('      <label>       <input type="radio" name="invoiceType"  value="0" disabled="disabled">普通发票      </label>      <label>       <input type="radio" name="invoiceType" value="1" checked="checked">增值税发票      </label>     ');}__.push('    </li>    ');if((typeof(normalInvoice)!=='undefined' && (normalInvoice)!=null) && (typeof(normalInvoice)==='function'?(normalInvoice).call($item):(normalInvoice))){__.push('     <li class="clearfix">      <span class="fpSide"><em>*</em>发票抬头类型：</span>      ');if(typeof(normalInvoice.headTypes)!=='undefined' && (normalInvoice.headTypes)!=null){$.each((typeof(normalInvoice.headTypes)==='function'?(normalInvoice.headTypes).call($item):(normalInvoice.headTypes)),function(h,head){with(this){__.push('       <label class="invoiceLabel ');if((typeof(!head.available)!=='undefined' && (!head.available)!=null) && (typeof(!head.available)==='function'?(!head.available).call($item):(!head.available))){__.push(' lowlight');}__.push('">        <input         type="radio"         name="titType"             value="');if(typeof(head.code)!=='undefined' && (head.code)!=null){__.push($.encode((typeof(head.code)==='function'?(head.code).call($item):(head.code))));}__.push('"        ');if((typeof(head.selected)!=='undefined' && (head.selected)!=null) && (typeof(head.selected)==='function'?(head.selected).call($item):(head.selected))){__.push('checked="checked"');}else if((true) && true){__.push('g-fptt-path="normalInvoice,headTypes,');if(typeof(h)!=='undefined' && (h)!=null){__.push($.encode((typeof(h)==='function'?(h).call($item):(h))));}__.push('"');}__.push('        >');if(typeof(head.label)!=='undefined' && (head.label)!=null){__.push($.encode((typeof(head.label)==='function'?(head.label).call($item):(head.label))));}__.push('       </label>       ');if((typeof(head.label=="非企业单位")!=='undefined' && (head.label=="非企业单位")!=null) && (typeof(head.label=="非企业单位")==='function'?(head.label=="非企业单位").call($item):(head.label=="非企业单位"))){__.push('       <div class="prel-company">        <b class="c-i invoices_tips_icon tips_icon" g-hoverup-tip="fqydw"></b>        <div class="pabs invoice-tip company-pabs box-sd1" g-hover-tip="fqydw">         ');if((typeof(!isIe678)!=='undefined' && (!isIe678)!=null) && (typeof(!isIe678)==='function'?(!isIe678).call($item):(!isIe678))){__.push('<div class="white-arrow">◆</div>');}__.push('         <div>非企业单位包括政府机构及事业单位中非企业单位等，应选择 “非企业单位”开票。</div>        </div>       </div>       ');}__.push('      ');}});}__.push('           </li>     <li>      <span class="fpSide"><em>*</em>填写抬头：</span>      ');if((typeof(selectedHead.code=="1" || selectedHead.code=="2")!=='undefined' && (selectedHead.code=="1" || selectedHead.code=="2")!=null) && (typeof(selectedHead.code=="1" || selectedHead.code=="2")==='function'?(selectedHead.code=="1" || selectedHead.code=="2").call($item):(selectedHead.code=="1" || selectedHead.code=="2"))){__.push('       <input type="text" class="ipt w175" value="');if(typeof(normalInvoice.dhead)!=='undefined' && (normalInvoice.dhead)!=null){__.push($.encode((typeof(normalInvoice.dhead)==='function'?(normalInvoice.dhead).call($item):(normalInvoice.dhead))));}__.push('" g-validate="fptt-dw" g-blur="setStage normalInvoice.dhead this" maxlength="26" placeholder="请输入单位名称">       <span class="red" g-tip-validate="fptt-dw"></span>      ');}else if((true) && true){__.push('       <input type="text" class="ipt w175" value="');if(typeof(normalInvoice.ghead)!=='undefined' && (normalInvoice.ghead)!=null){__.push($.encode((typeof(normalInvoice.ghead)==='function'?(normalInvoice.ghead).call($item):(normalInvoice.ghead))));}__.push('" g-validate="fptt" g-blur="setStage normalInvoice.ghead this" maxlength="26" placeholder="请输入发票抬头">       <span class="red" g-tip-validate="fptt"><span class="remd">请勿填写“个人”字样，建议使用真实姓名。</span></span>      ');}__.push('     </li>     <li class="prel">      ');if((typeof(selectedHead.code=="1")!=='undefined' && (selectedHead.code=="1")!=null) && (typeof(selectedHead.code=="1")==='function'?(selectedHead.code=="1").call($item):(selectedHead.code=="1"))){__.push('      <span class="fpSide">单位税号：</span>      <input type="text" class="ipt w175" value="');if((typeof(normalInvoice.taxpayerNo == null)!=='undefined' && (normalInvoice.taxpayerNo == null)!=null) && (typeof(normalInvoice.taxpayerNo == null)==='function'?(normalInvoice.taxpayerNo == null).call($item):(normalInvoice.taxpayerNo == null))){__.push('');}else if((true) && true){__.push('');if(typeof(normalInvoice.taxpayerNo)!=='undefined' && (normalInvoice.taxpayerNo)!=null){__.push($.encode((typeof(normalInvoice.taxpayerNo)==='function'?(normalInvoice.taxpayerNo).call($item):(normalInvoice.taxpayerNo))));}__.push('');}__.push('" maxlength="20" g-validate="dwsh" g-blur="setStage normalInvoice.taxpayerNo this">      <span class="red" g-tip-validate="dwsh"></span>        <b class="c-i invoices_tips1_icon tips_icon" g-hoverup-tip="dwsh"></b>      <div class="pabs invoice-tip dwfh-pabs box-sd1" g-hover-tip="dwsh">       ');if((typeof(!isIe678)!=='undefined' && (!isIe678)!=null) && (typeof(!isIe678)==='function'?(!isIe678).call($item):(!isIe678))){__.push('<div class="white-arrow">◆</div>');}__.push('       1.《国家税务总局公告2017年第16号》规定：自2017年7月1日起，发票抬头为企业单位的，需填写企业税号或统一社会信用代码；未填写为不合规发票，不得作为税收凭证。<br/>       2.单位税号号为营业执照上的统一社会信用代码或者税务登记证上的税号，一般为15-20位，部分含英文字母。为确保发票开具的准确性，建议与公司财务确认后填写。       <br/>      </div>      ');}__.push('     </li>     <li class="clearfix last">      <span class="fpSide"><em>*</em>发票内容<span id="fpHelp">[?]      <div class="invoiceHelp">       <b class="smallArrow"></b>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t1">电器类，百货类，图书类商品都是那些？</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t2">下单用余额、优惠券等可以开具发票吗?</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t3">请问我购买的商品发票由谁开具？</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html">了解更多>></a>      </div>      </span>：</span>      ');if((typeof(normalInvoice)!=='undefined' && (normalInvoice)!=null) && (typeof(normalInvoice)==='function'?(normalInvoice).call($item):(normalInvoice))){__.push('       ');if((typeof(gome&&shop)!=='undefined' && (gome&&shop)!=null) && (typeof(gome&&shop)==='function'?(gome&&shop).call($item):(gome&&shop))){__.push('        <div class="fpProKinds">         ');if(typeof(normalInvoice.invoiceContClasses)!=='undefined' && (normalInvoice.invoiceContClasses)!=null){$.each((typeof(normalInvoice.invoiceContClasses)==='function'?(normalInvoice.invoiceContClasses).call($item):(normalInvoice.invoiceContClasses)),function(id,cont){with(this){__.push('          <div class="detailKinds">          ');if(typeof(cont.contTypes)!=='undefined' && (cont.contTypes)!=null){$.each((typeof(cont.contTypes)==='function'?(cont.contTypes).call($item):(cont.contTypes)),function(d,ct){with(this){__.push('          <label>           ');if((typeof(ct.selected)!=='undefined' && (ct.selected)!=null) && (typeof(ct.selected)==='function'?(ct.selected).call($item):(ct.selected))){__.push('            <input type="radio" name="kind_');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push('" checked="checked" value="');if(typeof(cont.invoiceContClass)!=='undefined' && (cont.invoiceContClass)!=null){__.push($.encode((typeof(cont.invoiceContClass)==='function'?(cont.invoiceContClass).call($item):(cont.invoiceContClass))));}__.push(',');if(typeof(ct.code)!=='undefined' && (ct.code)!=null){__.push($.encode((typeof(ct.code)==='function'?(ct.code).call($item):(ct.code))));}__.push('">');if(typeof(ct.label)!=='undefined' && (ct.label)!=null){__.push($.encode((typeof(ct.label)==='function'?(ct.label).call($item):(ct.label))));}__.push('           ');}else if((true) && true){__.push('            <input type="radio" name="kind_');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push('"            g-ffnr-path="normalInvoice,invoiceContClasses,');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push(',contTypes,');if(typeof(d)!=='undefined' && (d)!=null){__.push($.encode((typeof(d)==='function'?(d).call($item):(d))));}__.push('"            value="');if(typeof(cont.invoiceContClass)!=='undefined' && (cont.invoiceContClass)!=null){__.push($.encode((typeof(cont.invoiceContClass)==='function'?(cont.invoiceContClass).call($item):(cont.invoiceContClass))));}__.push(',');if(typeof(ct.code)!=='undefined' && (ct.code)!=null){__.push($.encode((typeof(ct.code)==='function'?(ct.code).call($item):(ct.code))));}__.push('">');if(typeof(ct.label)!=='undefined' && (ct.label)!=null){__.push($.encode((typeof(ct.label)==='function'?(ct.label).call($item):(ct.label))));}__.push('           ');}__.push('          </label>          ');}});}__.push('          </div>         ');}});}__.push('         <div class="shopMark" style="margin-left: 120px;">店铺商品，发票由店铺开具并寄出</div>        </div>       ');}else if((typeof(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)!=='undefined' && (gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)!=null) && (typeof(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)==='function'?(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length).call($item):(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length))){__.push('        <div class="fpProKinds">                  ');if(typeof(normalInvoice.invoiceContClasses)!=='undefined' && (normalInvoice.invoiceContClasses)!=null){$.each((typeof(normalInvoice.invoiceContClasses)==='function'?(normalInvoice.invoiceContClasses).call($item):(normalInvoice.invoiceContClasses)),function(id,cont){with(this){__.push('                        <div class="detailKinds">                            ');if(typeof(cont.contTypes)!=='undefined' && (cont.contTypes)!=null){$.each((typeof(cont.contTypes)==='function'?(cont.contTypes).call($item):(cont.contTypes)),function(d,ct){with(this){__.push('                               <label>                                   ');if((typeof(ct.selected)!=='undefined' && (ct.selected)!=null) && (typeof(ct.selected)==='function'?(ct.selected).call($item):(ct.selected))){__.push('            <input type="radio" name="kind_');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push('" checked="checked" value="');if(typeof(cont.invoiceContClass)!=='undefined' && (cont.invoiceContClass)!=null){__.push($.encode((typeof(cont.invoiceContClass)==='function'?(cont.invoiceContClass).call($item):(cont.invoiceContClass))));}__.push(',');if(typeof(ct.code)!=='undefined' && (ct.code)!=null){__.push($.encode((typeof(ct.code)==='function'?(ct.code).call($item):(ct.code))));}__.push('">');if(typeof(ct.label)!=='undefined' && (ct.label)!=null){__.push($.encode((typeof(ct.label)==='function'?(ct.label).call($item):(ct.label))));}__.push('           ');}else if((true) && true){__.push('            <input type="radio" name="kind_');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push('"             g-ffnr-path="normalInvoice,invoiceContClasses,');if(typeof(id)!=='undefined' && (id)!=null){__.push($.encode((typeof(id)==='function'?(id).call($item):(id))));}__.push(',contTypes,');if(typeof(d)!=='undefined' && (d)!=null){__.push($.encode((typeof(d)==='function'?(d).call($item):(d))));}__.push('"            value="');if(typeof(cont.invoiceContClass)!=='undefined' && (cont.invoiceContClass)!=null){__.push($.encode((typeof(cont.invoiceContClass)==='function'?(cont.invoiceContClass).call($item):(cont.invoiceContClass))));}__.push(',');if(typeof(ct.code)!=='undefined' && (ct.code)!=null){__.push($.encode((typeof(ct.code)==='function'?(ct.code).call($item):(ct.code))));}__.push('">');if(typeof(ct.label)!=='undefined' && (ct.label)!=null){__.push($.encode((typeof(ct.label)==='function'?(ct.label).call($item):(ct.label))));}__.push('           ');}__.push('                               </label>                               ');}});}__.push('                        </div>                     ');}});}__.push('                 </div>                ');}else if((true) && true){__.push('                 <span class="shopMark">店铺商品，发票由店铺开具并寄出</span>       ');}__.push('      ');}__.push('     </li>    ');}__.push('    ');if((typeof(vatInvoice)!=='undefined' && (vatInvoice)!=null) && (typeof(vatInvoice)==='function'?(vatInvoice).call($item):(vatInvoice))){__.push('     <li>      <p class="vat-tips"><em class="vatIco"></em>增值税发票邮寄费用由用户承担，我们将在订单完成30个工作日之内开具并邮寄，使用到付形式，费用在25元左右。<br>您在收到包裹时， 请向快递员索要快递发票。店铺只开具普通发票。</p>     </li>     <li class="clearfix vatInfo">      <p><span class="vatSide">单位名称：</span><span>');if(typeof(vatInvoice.head)!=='undefined' && (vatInvoice.head)!=null){__.push($.encode((typeof(vatInvoice.head)==='function'?(vatInvoice.head).call($item):(vatInvoice.head))));}__.push('</span></p>      <p><span class="vatSide">纳税识别号：</span><span>');if(typeof(vatInvoice.taxpayerNo)!=='undefined' && (vatInvoice.taxpayerNo)!=null){__.push($.encode((typeof(vatInvoice.taxpayerNo)==='function'?(vatInvoice.taxpayerNo).call($item):(vatInvoice.taxpayerNo))));}__.push('</span></p>      <p><span class="vatSide">注册地址：</span><span>');if(typeof(vatInvoice.registeredAddr)!=='undefined' && (vatInvoice.registeredAddr)!=null){__.push($.encode((typeof(vatInvoice.registeredAddr)==='function'?(vatInvoice.registeredAddr).call($item):(vatInvoice.registeredAddr))));}__.push('</span></p>      <p><span class="vatSide">注册电话：</span><span>');if(typeof(vatInvoice.registeredPhone)!=='undefined' && (vatInvoice.registeredPhone)!=null){__.push($.encode((typeof(vatInvoice.registeredPhone)==='function'?(vatInvoice.registeredPhone).call($item):(vatInvoice.registeredPhone))));}__.push('</span></p>      <p><span class="vatSide">开户银行：</span><span>');if(typeof(vatInvoice.taxpayerBank)!=='undefined' && (vatInvoice.taxpayerBank)!=null){__.push($.encode((typeof(vatInvoice.taxpayerBank)==='function'?(vatInvoice.taxpayerBank).call($item):(vatInvoice.taxpayerBank))));}__.push('</span></p>      <p><span class="vatSide">银行帐户：</span><span>');if(typeof(vatInvoice.account)!=='undefined' && (vatInvoice.account)!=null){__.push($.encode((typeof(vatInvoice.account)==='function'?(vatInvoice.account).call($item):(vatInvoice.account))));}__.push('</span></p>     </li>     <li class="clearfix">      <span class="fpSide"><em>*</em>收件人：</span>      <input type="text" class="ipt" value="');if(typeof(vatInvoice.shippingName)!=='undefined' && (vatInvoice.shippingName)!=null){__.push($.encode((typeof(vatInvoice.shippingName)==='function'?(vatInvoice.shippingName).call($item):(vatInvoice.shippingName))));}__.push('" maxlength="20" g-validate="zpsjr" g-blur="setStage vatInvoice.shippingName this">      <span class="red" g-tip-validate="zpsjr"></span>     </li>     <li class="clearfix">      <span class="fpSide"><em>*</em>手机号码：</span>      <input type="text" class="ipt" value="');if(typeof(vatInvoice.shippingPhone)!=='undefined' && (vatInvoice.shippingPhone)!=null){__.push($.encode((typeof(vatInvoice.shippingPhone)==='function'?(vatInvoice.shippingPhone).call($item):(vatInvoice.shippingPhone))));}__.push('" maxlength="11" g-validate="zpsjhm" g-blur="setStage vatInvoice.shippingPhone this">      <span class="red" g-tip-validate="zpsjhm"></span>     </li>     <li class="clearfix">      <span class="fpSide">发票邮寄地址：</span>      <span class="vatFpCont">');if(typeof(vatInvoice.shippingAddress)!=='undefined' && (vatInvoice.shippingAddress)!=null){__.push($.encode((typeof(vatInvoice.shippingAddress)==='function'?(vatInvoice.shippingAddress).call($item):(vatInvoice.shippingAddress))));}__.push('</span>     </li>     <li class="clearfix">      <span class="fpSide"><em>*</em>发票内容<span id="fpHelp">[?]      <div class="invoiceHelp">       <b class="smallArrow"></b>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t1">电器类，百货类，图书类商品都是那些？</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t2">下单用余额、优惠券等可以开具发票吗?</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html#t3">请问我购买的商品发票由谁开具？</a>       <a target="_blank" href="//help.gome.com.cn/question/36.html">了解更多>></a>      </div>      </span>：</span>      <span class="vatFpCont">明细</span>     </li>     <li class="clearfix lowlight">      <span class="vatSide red">温馨提示：</span><span>建议您将发票内容开为产品明细，否则您将无法享受厂商或国美在线的正常质保。</span>     </li>    ');}__.push('   ');}__.push('  </ul>');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.order_modify=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="contBox" id="address">      <div class="contTit clearfix" >          <h3>收货人信息</h3><a href="javascript:;" class="modif">修改</a>      </div>      <div class="infoBox">          <p>              <span class="nam">');if(typeof(name)!=='undefined' && (name)!=null){__.push($.encode((typeof(name)==='function'?(name).call($item):(name))));}__.push('</span>              <span class="add">');if(typeof(stateName)!=='undefined' && (stateName)!=null){__.push($.encode((typeof(stateName)==='function'?(stateName).call($item):(stateName))));}__.push('');if(typeof(cityName)!=='undefined' && (cityName)!=null){__.push($.encode((typeof(cityName)==='function'?(cityName).call($item):(cityName))));}__.push('');if(typeof(countyName)!=='undefined' && (countyName)!=null){__.push($.encode((typeof(countyName)==='function'?(countyName).call($item):(countyName))));}__.push('');if(typeof(townName)!=='undefined' && (townName)!=null){__.push($.encode((typeof(townName)==='function'?(townName).call($item):(townName))));}__.push(' ');if(typeof(address)!=='undefined' && (address)!=null){__.push($.encode((typeof(address)==='function'?(address).call($item):(address))));}__.push('</span>              <span class="tel">');if(typeof(mobileNumber)!=='undefined' && (mobileNumber)!=null){__.push($.encode((typeof(mobileNumber)==='function'?(mobileNumber).call($item):(mobileNumber))));}__.push('</span>              <span class="tel">');if(typeof(phoneNumber)!=='undefined' && (phoneNumber)!=null){__.push($.encode((typeof(phoneNumber)==='function'?(phoneNumber).call($item):(phoneNumber))));}__.push('</span>          </p>      </div>      <ul class="editBox prel" style="display:none;">          <li>              <span class="addSide"><em>*</em>收货人：</span>              <input type="text" id="userName" class="ipt" size="18" value="');if(typeof(name)!=='undefined' && (name)!=null){__.push($.encode((typeof(name)==='function'?(name).call($item):(name))));}__.push('"  g-validate="consignee" >              <span class="red" g-tip-validate="consignee"></span>          </li>          <li class="clearfix">              <span class="addSide"><em>*</em>所在地区：</span>              <span class="iptDis">');if(typeof(stateName)!=='undefined' && (stateName)!=null){__.push($.encode((typeof(stateName)==='function'?(stateName).call($item):(stateName))));}__.push('<em></em></span>              <span class="iptDis">');if(typeof(cityName)!=='undefined' && (cityName)!=null){__.push($.encode((typeof(cityName)==='function'?(cityName).call($item):(cityName))));}__.push('<em></em></span>              <span class="iptDis">');if(typeof(countyName)!=='undefined' && (countyName)!=null){__.push($.encode((typeof(countyName)==='function'?(countyName).call($item):(countyName))));}__.push('<em></em></span>              <span class="iptDis">              ');if((typeof(isStoreSelfpickup)!=='undefined' && (isStoreSelfpickup)!=null) && (typeof(isStoreSelfpickup)==='function'?(isStoreSelfpickup).call($item):(isStoreSelfpickup))){__.push('                  ');if(typeof(storeName)!=='undefined' && (storeName)!=null){__.push($.encode((typeof(storeName)==='function'?(storeName).call($item):(storeName))));}__.push('              ');}else if((true) && true){__.push('                  ');if(typeof(townName)!=='undefined' && (townName)!=null){__.push($.encode((typeof(townName)==='function'?(townName).call($item):(townName))));}__.push('              ');}__.push('              <em></em>              </span>              <span class="hint">地区无法变更，敬请谅解！</span>          </li>          <li style="overflow: hidden;">              <span class="addSide"><em>*</em>详细地址：</span>              <input type="text" id="userAddress" class="ipt ');if((typeof(isNotEditAdd)!=='undefined' && (isNotEditAdd)!=null) && (typeof(isNotEditAdd)==='function'?(isNotEditAdd).call($item):(isNotEditAdd))){__.push('iptDis');}__.push('" ');if((typeof(isNotEditAdd)!=='undefined' && (isNotEditAdd)!=null) && (typeof(isNotEditAdd)==='function'?(isNotEditAdd).call($item):(isNotEditAdd))){__.push('readonly="true"');}__.push('  size="47" g-validate="detailAddress"                   ');if((typeof(isStoreSelfpickup)!=='undefined' && (isStoreSelfpickup)!=null) && (typeof(isStoreSelfpickup)==='function'?(isStoreSelfpickup).call($item):(isStoreSelfpickup))){__.push('                  value="');if(typeof(storeAddress)!=='undefined' && (storeAddress)!=null){__.push($.encode((typeof(storeAddress)==='function'?(storeAddress).call($item):(storeAddress))));}__.push('"                   ');}else if((true) && true){__.push('                  value="');if(typeof(address)!=='undefined' && (address)!=null){__.push($.encode((typeof(address)==='function'?(address).call($item):(address))));}__.push('"                   ');}__.push('              >               ');if((typeof(isNotEditAdd)!=='undefined' && (isNotEditAdd)!=null) && (typeof(isNotEditAdd)==='function'?(isNotEditAdd).call($item):(isNotEditAdd))){__.push('                  <span>极速达订单不支持修改详细地址，敬请谅解！</span>              ');}__.push('              <span class="red" g-tip-validate="detailAddress"></span>          </li>          <li>              <span class="addSide"><em>*</em>手机号码：</span>              <input type="text" id="mNumber" class="ipt" size="20" value="');if(typeof(mobileNumber)!=='undefined' && (mobileNumber)!=null){__.push($.encode((typeof(mobileNumber)==='function'?(mobileNumber).call($item):(mobileNumber))));}__.push('" g-validate="phone"><span class="remd mr15">&nbsp;</span>              固定电话：<input type="text" id="pNumber" class="ipt" size="30" maxlength="30" g-validate="call"               ');if((typeof(isStoreSelfpickup)!=='undefined' && (isStoreSelfpickup)!=null) && (typeof(isStoreSelfpickup)==='function'?(isStoreSelfpickup).call($item):(isStoreSelfpickup))){__.push('              value="');if(typeof(storePhone)!=='undefined' && (storePhone)!=null){__.push($.encode((typeof(storePhone)==='function'?(storePhone).call($item):(storePhone))));}__.push('"               ');}else if((true) && true){__.push('              value="');if(typeof(phoneNumber)!=='undefined' && (phoneNumber)!=null){__.push($.encode((typeof(phoneNumber)==='function'?(phoneNumber).call($item):(phoneNumber))));}__.push('"                ');}__.push('              >          </li>          <li class="phone-call-pos">              <div class="red" g-tip-validate="phone"></div>              <div class="red" g-tip-validate="call"></div>          </li>          <li class="last">              <span class="addSide">邮箱：</span>              <input type="text" id="userEmail" class="ipt" size="20" value="');if(typeof(email)!=='undefined' && (email)!=null){__.push($.encode((typeof(email)==='function'?(email).call($item):(email))));}__.push('" g-validate="email"><span class="remd">用来接收订单提醒邮件，便于您及时了解订单状态</span>              <span class="red" g-tip-validate="email"></span>          </li>      </ul>  </div>  ');if((typeof(showDeliveryInfo)!=='undefined' && (showDeliveryInfo)!=null) && (typeof(showDeliveryInfo)==='function'?(showDeliveryInfo).call($item):(showDeliveryInfo))){__.push('  <div class="contBox" id="deliverTime">      <div class="contTit clearfix">          <h3>送货时间</h3><a href="javascript:;" class="modif">修改</a>      </div>      <div class="infoBox">          ');if((typeof(showDeliverTime)!=='undefined' && (showDeliverTime)!=null) && (typeof(showDeliverTime)==='function'?(showDeliverTime).call($item):(showDeliverTime))){__.push('          <p>              <span class="timType">您选择使用</span>              <span class="orange">');if(typeof(showDeliverTime.label)!=='undefined' && (showDeliverTime.label)!=null){__.push($.encode((typeof(showDeliverTime.label)==='function'?(showDeliverTime.label).call($item):(showDeliverTime.label))));}__.push('</span>              <input type="hidden" id="dTime" value="');if(typeof(showDeliverTime.label)!=='undefined' && (showDeliverTime.label)!=null){__.push($.encode((typeof(showDeliverTime.label)==='function'?(showDeliverTime.label).call($item):(showDeliverTime.label))));}__.push('">          </p>          ');}else if((true) && true){__.push('          <p>              <span class="timType">您选择使用</span>              <span class="orange">无送货时间，请选择</span>          </p>          ');}__.push('      </div>      <div class="editBox" style="display:none">          ');if(typeof(deliverTimeOptions)!=='undefined' && (deliverTimeOptions)!=null){$.each((typeof(deliverTimeOptions)==='function'?(deliverTimeOptions).call($item):(deliverTimeOptions)),function($index, $value){with(this){__.push('              <label class="timLable">                  ');if((typeof(selected)!=='undefined' && (selected)!=null) && (typeof(selected)==='function'?(selected).call($item):(selected))){__.push('                      <input type="radio" name="timeChoose" value="');if(typeof(code)!=='undefined' && (code)!=null){__.push($.encode((typeof(code)==='function'?(code).call($item):(code))));}__.push('" checked="checked">');if(typeof(label)!=='undefined' && (label)!=null){__.push($.encode((typeof(label)==='function'?(label).call($item):(label))));}__.push('                  ');}else if((true) && true){__.push('                      <input type="radio" name="timeChoose" value="');if(typeof(code)!=='undefined' && (code)!=null){__.push($.encode((typeof(code)==='function'?(code).call($item):(code))));}__.push('">');if(typeof(label)!=='undefined' && (label)!=null){__.push($.encode((typeof(label)==='function'?(label).call($item):(label))));}__.push('                  ');}__.push('              </label>          ');}});}__.push('      </div>  </div>  ');}__.push('  ');if((typeof(showInvoice && !data.elecInvoice && !data.vatInvoice)!=='undefined' && (showInvoice && !data.elecInvoice && !data.vatInvoice)!=null) && (typeof(showInvoice && !data.elecInvoice && !data.vatInvoice)==='function'?(showInvoice && !data.elecInvoice && !data.vatInvoice).call($item):(showInvoice && !data.elecInvoice && !data.vatInvoice))){__.push('  <div class="contBox" id="invoice">      <div class="contTit clearfix" >          <h3>发票信息</h3><a href="javascript:;" class="modif">修改</a>      </div>      <div class="infoBox">          ');if((typeof(needInvoice)!=='undefined' && (needInvoice)!=null) && (typeof(needInvoice)==='function'?(needInvoice).call($item):(needInvoice))){__.push('              <ul class="invoiceInfo">                  <li>                      <span class="sideTit">发票类型：</span>                      ');if((typeof(invoiceType==0)!=='undefined' && (invoiceType==0)!=null) && (typeof(invoiceType==0)==='function'?(invoiceType==0).call($item):(invoiceType==0))){__.push('                          普通发票                      ');}else if((typeof(invoiceType==1)!=='undefined' && (invoiceType==1)!=null) && (typeof(invoiceType==1)==='function'?(invoiceType==1).call($item):(invoiceType==1))){__.push('                          增值税发票                      ');}__.push('                  </li>                  ');if((typeof(normalInvoice)!=='undefined' && (normalInvoice)!=null) && (typeof(normalInvoice)==='function'?(normalInvoice).call($item):(normalInvoice))){__.push('                      <li>                          <span class="sideTit">发票抬头：</span>                          ');if(typeof(selectedHead.label)!=='undefined' && (selectedHead.label)!=null){__.push($.encode((typeof(selectedHead.label)==='function'?(selectedHead.label).call($item):(selectedHead.label))));}__.push('                      </li>                      <li>                          <span class="sideTit">填写抬头：</span>                          ');if(typeof(normalInvoice.head)!=='undefined' && (normalInvoice.head)!=null){__.push($.encode((typeof(normalInvoice.head)==='function'?(normalInvoice.head).call($item):(normalInvoice.head))));}__.push('                      </li>                      <li class="clearfix">                          <span class="sideTit">发票内容：</span>                          <div class="fpList">                          ');if((typeof(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)!=='undefined' && (gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)!=null) && (typeof(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length)==='function'?(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length).call($item):(gome && normalInvoice.invoiceContClasses && normalInvoice.invoiceContClasses.length))){__.push('                              <p>');if(typeof(selectedContentType.contTypesLable)!=='undefined' && (selectedContentType.contTypesLable)!=null){__.push($.encode((typeof(selectedContentType.contTypesLable)==='function'?(selectedContentType.contTypesLable).call($item):(selectedContentType.contTypesLable))));}__.push('</p>                              ');if((typeof(shop)!=='undefined' && (shop)!=null) && (typeof(shop)==='function'?(shop).call($item):(shop))){__.push('                                  <p>店铺商品，发票由店铺开具并寄出</p>                              ');}__.push('                          ');}else if((true) && true){__.push('                              店铺商品，发票由店铺开具并寄出                          ');}__.push('                          </div>                      </li>                  ');}__.push('              </ul>          ');}else if((true) && true){__.push('          <p>不要发票</p>          ');}__.push('      </div>  </div>  ');}__.push('  <div class="btnBox">      <a id="saveModif">保存修改</a>      <a class="cancel j-close">取消</a>  </div>');}return __;
};return $fn($,{data:data||{}}).join('')};