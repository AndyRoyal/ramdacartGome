var GTPL={}
$.extend({
	encode: function( text ) {
		return ("" + text).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;");
	}
})

GTPL.comp_alert=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="g-panel box-sd2">   ');if((typeof(close)!=='undefined' && (close)!=null) && (typeof(close)==='function'?(close).call($item):(close))){__.push('   <i class="c-i closebtn-new fr" g-panel-close></i>   ');}__.push('   <div class="body">    <div class="icon i-block">     <i class="c-i panel-');if(typeof(type)!=='undefined' && (type)!=null){__.push($.encode((typeof(type)==='function'?(type).call($item):(type))));}__.push('"></i>    </div>    <div class="content i-block">     ');if(typeof(body)!=='undefined' && (body)!=null){__.push((typeof(body)==='function'?(body).call($item):(body)));}__.push('    </div>    ');if((typeof($data.code)!=='undefined' && ($data.code)!=null) && (typeof($data.code)==='function'?($data.code).call($item):($data.code))){__.push('         <div class="errorCode">[');if(typeof($data.code)!=='undefined' && ($data.code)!=null){__.push($.encode((typeof($data.code)==='function'?($data.code).call($item):($data.code))));}__.push(']</div>    ');}__.push('    <div class="i-block" style="vertical-align: middle;width:1px;min-height:1px;"></div>   </div>  </div>');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.comp_alertWar=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="g-panel box-sd2">   ');if((typeof(close)!=='undefined' && (close)!=null) && (typeof(close)==='function'?(close).call($item):(close))){__.push('   <i class="c-i closebtn-new fr" g-panel-close></i>   ');}__.push('   <div class="body">    <div class="icon i-block" style="vertical-align: top;">     <i class="c-i panel-');if(typeof(type)!=='undefined' && (type)!=null){__.push($.encode((typeof(type)==='function'?(type).call($item):(type))));}__.push('"></i>    </div>    <div class="content i-block">     ');if(typeof(body)!=='undefined' && (body)!=null){__.push((typeof(body)==='function'?(body).call($item):(body)));}__.push('    </div>    ');if((typeof($data.code)!=='undefined' && ($data.code)!=null) && (typeof($data.code)==='function'?($data.code).call($item):($data.code))){__.push('         <div class="errorCode">[');if(typeof($data.code)!=='undefined' && ($data.code)!=null){__.push($.encode((typeof($data.code)==='function'?($data.code).call($item):($data.code))));}__.push(']</div>    ');}__.push('    <div class="i-block" style="vertical-align: middle;width:1px;min-height:1px;"></div>   </div>  </div>');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.comp_biz001=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="g-panel box-sd2 gpanel-biz001">   <div class="body">    <div class="icon i-block">     <i class="c-i order_waring"></i>    </div>    <div class="content i-block">     <h4>所有说您订单异常要退款的都是大骗子！！！</h4>     <p>当有人以订单异常为由通知您需要退款，就算他有您的各类相关信息，无论他是以电话、短信、QQ、微信、邮件等任何形式通知您，他都是骗子、骗子、大骗子......</p>     <div class="btns">      <a      g-panel-close      href="javascript:void(0)"       class="btn btn-disabled">       知道了，我不会理骗子的！      </a>     </div>    </div>        <div class="foolter">     <b>特别提醒！！！</b>国美不会通过电话、短信、QQ、微信、邮件等各类形式以订单异常为由通知您需要退款。此类行为均为诈骗！请认准官方电话 4008-708-708（或010-58851777）    </div>   </div>  </div>');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.comp_confirm=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="g-panel box-sd2 confirm">   ');if((typeof(util.is)!=='undefined' && (util.is)!=null) && util.is(Function,close)){__.push('    <i class="c-i closebtn-new fr" g-panel-close></i>   ');}__.push('   <div class="body">    ');if((typeof(util.is)!=='undefined' && (util.is)!=null) && util.is(Function,body)){__.push('     ');if(typeof(body)!=='undefined' && (body)!=null){__.push((body).call($item));}__.push('    ');}else if((true) && true){__.push('    <div class="icon i-block">     <i class="c-i panel-');if(typeof(type)!=='undefined' && (type)!=null){__.push((typeof(type)==='function'?(type).call($item):(type)));}__.push('"></i>    </div>    <div class="content i-block">     ');if((typeof(title)!=='undefined' && (title)!=null) && (typeof(title)==='function'?(title).call($item):(title))){__.push('     <h1>');if(typeof(title)!=='undefined' && (title)!=null){__.push((typeof(title)==='function'?(title).call($item):(title)));}__.push('</h1>     ');}__.push('     ');if(typeof(body)!=='undefined' && (body)!=null){__.push((typeof(body)==='function'?(body).call($item):(body)));}__.push('    </div>    <div class="i-block" style="vertical-align: middle;width:1px;min-height:1px;"></div>    ');}__.push('   </div>   ');if((typeof(btns.length>0)!=='undefined' && (btns.length>0)!=null) && (typeof(btns.length>0)==='function'?(btns.length>0).call($item):(btns.length>0))){__.push('   <div class="btns">    ');if(typeof(btns)!=='undefined' && (btns)!=null){$.each((typeof(btns)==='function'?(btns).call($item):(btns)),function($index, $value){with(this){__.push('     <a     g-btn-path="btns,');if(typeof($index)!=='undefined' && ($index)!=null){__.push($.encode((typeof($index)==='function'?($index).call($item):($index))));}__.push('"      href="javascript:void(0)"      class="');if(typeof(clazz)!=='undefined' && (clazz)!=null){__.push($.encode((typeof(clazz)==='function'?(clazz).call($item):(clazz))));}__.push('">      ');if(typeof(btnName)!=='undefined' && (btnName)!=null){__.push((typeof(btnName)==='function'?(btnName).call($item):(btnName)));}__.push('     </a>    ');}});}__.push('   </div>   ');}__.push('  </div>');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.comp_gcity=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('');if((typeof(noreq==true)!=='undefined' && (noreq==true)!=null) && (typeof(noreq==true)==='function'?(noreq==true).call($item):(noreq==true))){__.push('   <div class="loading"></div>  ');}else if((true) && true){__.push('   <div click-document-pre>   ');if((typeof(errRes==true)!=='undefined' && (errRes==true)!=null) && (typeof(errRes==true)==='function'?(errRes==true).call($item):(errRes==true))){__.push('    <div style="height:100px;color:#aaa">');if(typeof(message)!=='undefined' && (message)!=null){__.push($.encode((typeof(message)==='function'?(message).call($item):(message))));}__.push('</div>   ');}else if((true) && true){__.push('    <div id="citySelect" class="gctSelect clearfix" g-pipe>     ');if(typeof(data.titles)!=='undefined' && (data.titles)!=null){$.each((typeof(data.titles)==='function'?(data.titles).call($item):(data.titles)),function(i,item){with(this){__.push('      ');if((typeof(i==data.current)!=='undefined' && (i==data.current)!=null) && (typeof(i==data.current)==='function'?(i==data.current).call($item):(i==data.current))){__.push('       <a href="javascript:;" class="cur">        <b>');if(typeof(item.label)!=='undefined' && (item.label)!=null){__.push($.encode((typeof(item.label)==='function'?(item.label).call($item):(item.label))));}__.push('</b>        <i></i>       </a>      ');}else if((true) && true){__.push('       ');if((typeof(item.available)!=='undefined' && (item.available)!=null) && (typeof(item.available)==='function'?(item.available).call($item):(item.available))){__.push('        <a href="javascript:;" g-click="set ');if(typeof(i)!=='undefined' && (i)!=null){__.push($.encode((typeof(i)==='function'?(i).call($item):(i))));}__.push(' ');if(typeof(item.code)!=='undefined' && (item.code)!=null){__.push($.encode((typeof(item.code)==='function'?(item.code).call($item):(item.code))));}__.push(',render">         <b>');if(typeof(item.label)!=='undefined' && (item.label)!=null){__.push($.encode((typeof(item.label)==='function'?(item.label).call($item):(item.label))));}__.push('</b>         <i></i>        </a>       ');}else if((true) && true){__.push('        <a href="javascript:;" class="disabled">         <b>');if(typeof(item.label)!=='undefined' && (item.label)!=null){__.push($.encode((typeof(item.label)==='function'?(item.label).call($item):(item.label))));}__.push('</b>         <i></i>        </a>       ');}__.push('      ');}__.push('     ');}});}__.push('     <a href="javascript:;" id="cityClose" class="close" g-area-close></a>    </div>      <div id="cityMBox">     <div class="gctBox" g-pipe>      ');if((typeof(data.childrens)!=='undefined' && (data.childrens)!=null) && (typeof(data.childrens)==='function'?(data.childrens).call($item):(data.childrens))){__.push('      ');if(typeof(data.childrens)!=='undefined' && (data.childrens)!=null){$.each((typeof(data.childrens)==='function'?(data.childrens).call($item):(data.childrens)),function(ci,citem){with(this){__.push('       <span>        <a href="javascript:;"         title="');if(typeof(citem.label)!=='undefined' && (citem.label)!=null){__.push($.encode((typeof(citem.label)==='function'?(citem.label).call($item):(citem.label))));}__.push('"         g-click="set1 ');if(typeof(data.current)!=='undefined' && (data.current)!=null){__.push($.encode((typeof(data.current)==='function'?(data.current).call($item):(data.current))));}__.push(' ');if(typeof(citem.code)!=='undefined' && (citem.code)!=null){__.push($.encode((typeof(citem.code)==='function'?(citem.code).call($item):(citem.code))));}__.push(' ');if(typeof(ci)!=='undefined' && (ci)!=null){__.push($.encode((typeof(ci)==='function'?(ci).call($item):(ci))));}__.push(',render">         ');if(typeof(citem.label)!=='undefined' && (citem.label)!=null){__.push($.encode((typeof(citem.label)==='function'?(citem.label).call($item):(citem.label))));}__.push('        </a>       </span>      ');}});}__.push('      ');}else if((true) && true){__.push('       没有找到可用的数据!      ');}__.push('     </div>    </div>   ');}__.push('   </div>  ');}__.push('');}return __;
};return $fn($,{data:data||{}}).join('')};

GTPL.comp_gstore=function(data){ var $fn=function (jQuery,$item
/**/) {
var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('<div class="gm-store mb10 zi100" click-document-pre>      <p style="font-weight:bold; line-height:30px;">选择支付的国美门店</p>      ');if((typeof(noreq==true)!=='undefined' && (noreq==true)!=null) && (typeof(noreq==true)==='function'?(noreq==true).call($item):(noreq==true))){__.push('        <div class="loading"></div>      ');}else if((true) && true){__.push('       <div class="store-hd clearfix" g-pipe>            <ul class="gmtab">             ');if(typeof(data.titles)!=='undefined' && (data.titles)!=null){$.each((typeof(data.titles)==='function'?(data.titles).call($item):(data.titles)),function(idx,item){with(this){__.push('              <li class="clearfix">               ');if((typeof(idx==data.current)!=='undefined' && (idx==data.current)!=null) && (typeof(idx==data.current)==='function'?(idx==data.current).call($item):(idx==data.current))){__.push('                <a href="javascript:void(0)" class="hover"  >                             <em >');if(typeof(item.name)!=='undefined' && (item.name)!=null){__.push($.encode((typeof(item.name)==='function'?(item.name).call($item):(item.name))));}__.push('</em>                             <i class="c-i arrowdown_red"></i>                         </a>               ');}else if((true) && true){__.push('                <a href="javascript:void(0)"  g-click="set ');if(typeof(idx)!=='undefined' && (idx)!=null){__.push($.encode((typeof(idx)==='function'?(idx).call($item):(idx))));}__.push(' ');if(typeof(item.id)!=='undefined' && (item.id)!=null){__.push($.encode((typeof(item.id)==='function'?(item.id).call($item):(item.id))));}__.push(',render">                             <em >');if(typeof(item.name)!=='undefined' && (item.name)!=null){__.push($.encode((typeof(item.name)==='function'?(item.name).call($item):(item.name))));}__.push('</em>                             <i class="c-i arrowdown"></i>                         </a>               ');}__.push('              </li>             ');}});}__.push('                         </ul>       </div>       <div class="gm_area clearfix" g-pipe>           <ul class="area-list">             ');if(typeof(data.childerns)!=='undefined' && (data.childerns)!=null){$.each((typeof(data.childerns)==='function'?(data.childerns).call($item):(data.childerns)),function(ci,citem){with(this){__.push('                <li><a href="javascript:void(0)" g-click="set1 ');if(typeof(data.current)!=='undefined' && (data.current)!=null){__.push($.encode((typeof(data.current)==='function'?(data.current).call($item):(data.current))));}__.push(' ');if(typeof(citem.id)!=='undefined' && (citem.id)!=null){__.push($.encode((typeof(citem.id)==='function'?(citem.id).call($item):(citem.id))));}__.push(' ');if(typeof(ci)!=='undefined' && (ci)!=null){__.push($.encode((typeof(ci)==='function'?(ci).call($item):(ci))));}__.push(',render">');if(typeof(citem.name)!=='undefined' && (citem.name)!=null){__.push($.encode((typeof(citem.name)==='function'?(citem.name).call($item):(citem.name))));}__.push('</a></li>             ');}});}__.push('          </ul>      </div>      ');}__.push('   </div>');}return __;
};return $fn($,{data:data||{}}).join('')};