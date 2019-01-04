<div class="clearfix" style="line-height:22px;">
    <h3 class="title-color font14 fl">
        收货人信息
    </h3>
    {{if isShowksg}}
    <div class="ksgou-payment-body fl">
        <i class="c-i arrowleft_yellow"></i><span>您的以下订单信息，将为您保存，方便您下次快速提交订单！</span>
    </div>
    {{/if}}
</div>
{{if isSupportGomeStore}}
    <div class="nInfos pr meidian-nInfos">
{{else}}
    <div class="nInfos pr " >
{{/if}}

<div class="consignee_boxs">
     {{if list.length>1}}
        {{if $config.shoppingAddressAtom.more=="Y"}}
   
             <div class="max-line-1 ">
         {{else}}
             <div class="max-line-5 ">
     {{/if}}
        <div class="max-line-5">
    {{/if}}

    <ul class="addname" g-scroll>
        {{each list}}
        {{if isShow}}
            <li class="addr-box" g-sbtn-path="list,${$index}"  g-hover-up>
            {{if selected}}
                <div class="addr-box-content active" >
            {{else}}
                <div class="addr-box-content" >
            {{/if}}
          
                {{if isdefault}}
                    <div class="addr-header">
                        <span>默认地址</span>
                    </div>
                {{/if}}
                <div class="addr-hd">
                    <span class="name" title="${name}">${name}</span>
                    <span>${nameArea}</span>
                </div>
                <div class="addr-hd hd-detail" title="${areas[0]} ${areas[1]} ${areas[2]} ${areas[3]} ">
                    <span class="">${areas[0]}</span>
                    <span class="">${areas[1]}</span>
                    <span class="">${areas[2]}</span>
                    <span class="">${areas[4]}</span>
                    <span class="">
                        {{if origin.mobileNumber}}
                            ${origin.mobileNumber}
                        {{else}}
                            ${$config.pwdTelphone(origin.phoneNumber)}
                        {{/if}}
                    </span>
                </div>
                <div class="addr-manage">
                    {{if $config.isDisabledDefaultAddress(isdefault)}}
                    {{else}}
                        <span class="addr-btn hide " g-hover
                            g-default-path="list,${$index}"
                            tpmmtag="选择地址|100|3">设置为默认地址</span>
                    {{/if}}
                     {{if list.length!=1}}
                        <span class="addr-btn  hide" g-hover g-delete-path="list,${$index}"
                            tpmmtag="选择地址|100|4">删除</span>
                    {{/if}}
                        <span class="addr-btn  hide" g-hover g-modify-path="list,${$index}"
                            tpmmtag="选择地址|100|5">修改</span>
                   
                </div>

                {{if selected}}
                    <div class="addr-footer">
                        <i class="c-i big_chose_icon"></i>
                    </div>
                {{/if}}
                </div>
            </li>
        {{/if}}
        {{/each}}
          <li class="addr-box addr-box-add" new-Address>
            <div class="addr-box-content">
                <div class="add-content">
                    <div class="add-add">+</div>
                    <div class="add-title">添加新地址</div>
                </div>
            </div>
         </div>
    </ul>
    </div>

    {{if list.length>3}}
        {{if $config.shoppingAddressAtom.more=="Y"}}
        <a href="javascript:void 0" class="btn link" g-more-path g-value="N">
            <span class="fl">更多地址</span>
            <i class="c-i arrow-bottom fl" style="margin-top:5px;"></i>
        </a>
        {{else}}
        <!--<a href="javascript:void 0" class="btn link" g-more-path g-value="Y">
            <span class="fl">收起地址</span>
            <i class="c-i arrow-top fl" style="margin-top:5px;"></i>
        </a>-->
        {{/if}} 
    {{/if}}
</div>
    {{if isSupportGomeStore}}
        <div class="zi-box">
        {{if mdList.length}}
            {{if $config.shoppingAddressAtom.ztmore=="Y" || mdList.length<=3}}
            <div class="pr over_flow">
            {{else}}
            <div class="pr over_flow" id="address_scroll_div" >
            {{/if}}
                {{if $config.shoppingAddressAtom.ztmore=="Y" && mdList.length>1}}
                <ul class="addname" g-scroll style="height:31px;overflow:hidden;">
                {{else}}
                <ul class="addname" g-scroll>
                {{/if}}
                    {{each(index,i) mdList}}
                    {{if isShow}}
                    {{if index==mdList.length-1}}
                        <li class="infofirst clearfix pr" g-hover-up="" style="padding-bottom:1px;">
                    {{else}}
                        <li class="infofirst clearfix pr" g-hover-up="">
                    {{/if}}
                        <div class="hover clearfix">
                            <a href="javascript:void 0" class="fl btn btn-check {{if selected}}btn-checked{{/if}} mw150 mr10"  g-meidian-on="${i.id}">
                                <span >门店自提</span>
                                {{if selected}}
                                    <i class="c-i chose_icon"></i>
                                {{/if}}
                            </a>
                            <div class="fl clearfix h30 o_f w520">
                                <span class="j-cityname mr10">${stateName}</span>
                                <span class="h_area mr10">${cityName}</span>
                                <span class="purview mr10">${countyName}</span>
                                <span class="deadd mr10 i-block">${storeName}</span>
                                <span class="tp-cell"> ${storePhone} </span>
                            </div>
                            <span class="bgayellow fontf ml10 p3">自提地址</span>
                            <!-- <span class="changefix pabs hide" g-hover g-delete-path="mdList,${index}">删除</span> -->
                            <span class="delobj pabs hide" g-picking-up="${index}" g-hover=""  style="display: none;">修改</span>
                        </div>
                    </li>
                    {{/if}}
                    {{/each}}
                </ul>
            </div>
            {{if $config.shoppingAddressAtom.markedStatus}}
                <i class="c-i attention mt12"></i>
                <span class="tip">暂无商品可在此门店自提，您可更换自提门店或给您配送到家</span>
            {{/if}}
            {{if mdList.length>1}}
                {{if $config.shoppingAddressAtom.ztmore=="Y"}}
                <a href="javascript:void 0" class="btn link" g-zt-more-path g-value="N" 
                    {{if $config.shoppingAddressAtom.markedStatus}} style="margin-top:8px;"{{/if}}>
                    <span class="fl">更多自提地址</span>
                    <i class="c-i arrow-bottom fl" style="margin-top:5px;"></i>
                </a>
                {{else}}
                    <a href="javascript:void 0" class="btn link" g-zt-more-path g-value="Y" 
                    {{if $config.shoppingAddressAtom.markedStatus}} style="margin-top:8px;"{{/if}}>
                    <span class="fl">收起自提地址</span>
                    <i class="c-i arrow-top fl" style="margin-top:5px;"></i>
                    </a>
                {{/if}}
            {{/if}}
        {{else}}
            <div class="meidian-tips" >
                <i class="c-i mdzt"></i>
                <span>门店自提：您选择的商品中含有门店自提商品&nbsp;</span>
                <a href="javascript:;" g-picking-up="">选择门店地址</a>!
            </div>
        {{/if}}
        </div>
    {{/if}}
</div>
