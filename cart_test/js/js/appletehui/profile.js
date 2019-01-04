$(function(){
    $.extend({
        //确认授权协议
        comfirmAgreements: function () {
            var button = $("#btn-comfirm-agreements"),
                checkbox = $("#ckx-agreements"),
                popup = '.popup-agreements';
            button.on('click', function () {
                $(this).parents(popup).hide();
                checkbox.attr('checked', true);
            });
        },

        //身份类型
        identityType: function () {
            //添加身份类型项
            function addEvent() {
                var identityTypeArr = [
                        {id: 0, name: '新生'},
                        {id: 1, name: '在校生'}
                    ], html = '', i, len,
                    select = $("#selectIdentityType"),
                    fileUpload = $("#certificatesPhoto");
                for (i = 0, len = identityTypeArr.length; i < len; i++) {
                    html += '<option value=' + parseInt(identityTypeArr[i].id) + '>' + identityTypeArr[i].name + '</option>';
                }
                if (fileUpload.find('option').length <= 0) {
                    select.append(html);
                    select.change(function () {
                        changeEvent($(this), fileUpload);
                    });
                }
            }

            //选择身份类型：选择新生：展示“证件照”选项。选择在校生：隐藏“证件照”选项。
            function changeEvent(select, fileUpload) {
                (select.val() && select.val() == 0) ? fileUpload.show() : fileUpload.hide()
            }

            addEvent();
        },

        //学校省份
        schoolProvinces: function () {
            //添加省份
            function addEvent() {
                var schoolProviceArr = [
                        {id: 0, name: '北京'},
                        {id: 1, name: '上海'},
                        {id: 2, name: '湖北'},
                        {id: 3, name: '湖南'},
                    ], html = '', i, len = schoolProviceArr.length,
                    select = $("#select-school-province"),
                    btnSelectSchool = $("#btn-select-school");
                for (i = 0; i < len; i++) {
                    html += '<option value=' + parseInt(schoolProviceArr[i].id + 1) + '>' + schoolProviceArr[i].name + '</option>';
                }
                select.append(html);
                select.on('change', function () {
                    changeEvent($(this), btnSelectSchool)
                })
            }

            //省份选择
            function changeEvent(select, btnSelect) {
                if (select.val() && select.val() != 0) {
                    btnSelect.removeClass('disabled');
                    chooseSchool();
                } else {
                    btnSelect.addClass('disabled');
                }
            }

            //选择学校
            function chooseSchool() {
                var schoolListArr = [
                        {id: 0, name: '北京大学'},
                        {id: 1, name: '清华大学'},
                        {id: 2, name: '林业大学'},
                        {id: 3, name: '农业大学'},
                        {id: 3, name: '科技大学'},
                        {id: 3, name: '武汉大学'},
                        {id: 3, name: '华中科技大学'},
                    ],
                    btnSelectSchool = $("#btn-select-school .btn-select"),
                    btnClose = $(".popup-schools .btn-close"),
                    btnConfirm = $(".popup-schools .btn-confirm"),
                    popupSchools = $(".popup-schools"),
                    inputSchoolName = "#input-school-name";

                //选择学校点击事件
                btnSelectSchool.on('click', function () {
                    popupSchools.show();
                    var html = '',
                        ul = $(".school-list ul"),
                        li = $(".school-list li");
                    for (var i = 0; i < schoolListArr.length; i++) {
                        html += '<li data-id=' + parseInt(schoolListArr[i].id + 1) + '><a href="javascript:;" class="txt">' + schoolListArr[i].name + '</a></li>';
                    }
                    if (li.length <= 0) {
                        ul.append(html);

                        //学校当前项选中事件
                        ul.undelegate('li', 'click').delegate('li', 'click', function () {
                            $(this).addClass('active').siblings().removeClass('active');
                            $(inputSchoolName).val($(this).text());
                        });
                    }
                    hidePopup(btnClose, popupSchools);
                    hidePopup(btnConfirm, popupSchools);
                });

                //输入框模糊查询
                $(inputSchoolName).on('keyup', function () {
                    // $(".school-list li").css('display', 'block');//只要输入就显示列表框
                    var li = $(".school-list li");
                    if ($(this).val().length <= 0) {
                        li.show().removeClass('active');//如果什么都没填，跳出，保持全部显示状态
                        return;
                    } else {
                        li.hide();//如果填了，先将所有的选项隐藏
                        for (var i = 0; i < $(".school-list li").length; i++) {
                            //模糊匹配，将所有匹配项显示
                            if (li.eq(i).text().substr(0, $(this).val().length) == $(this).val()) {
                                li.eq(i).show();
                            }
                        }
                    }
                });

                //隐藏弹窗
                function hidePopup(button, popupSchools) {
                    button.on('click', function () {
                        popupSchools.hide();
                    });
                }
            }

            addEvent();
        },

        //入学年份
        joinSchoolYear: function () {
            var date = new Date(), year, html = '', i,
                selectJoinSchoolYear = $("#select-joinschool-year");
            year = date.getFullYear();
            for (i = 0; i < 7; i++) {
                html += '<option value=' + year + '>' + year + '</option>';
                year--;
            }
            selectJoinSchoolYear.append(html);
        },

        //学历
        diploma: function () {
            var diplomaListArr = [
                    {id: 0, name: '专科'},
                    {id: 1, name: '本科'},
                    {id: 2, name: '博士'},
                    {id: 3, name: '硕士'}
                ],
                html = '', i,
                len = diplomaListArr.length,
                selectDiploma = $("#select-diploma");
            for (i = 0; i < len; i++) {
                html += '<option value=' + parseInt(diplomaListArr[i].id + 1) + '>' + diplomaListArr[i].name + '</option>';
            }
            selectDiploma.append(html);
        },

        //证件照片
        certificatesPhoto: function () {
            //先把照片
            function changeEvent(fileControl) {
                var maxSize = 1024 * 1024 * 1;// 1TB=1024GB, 1GB=1024MB, 1MB=1024KB, 1KB=1024字节
                $(fileControl).undelegate('.file', 'change').delegate('.file', 'change', function (e) {
                    var file = e.target.files[0] || (e.dataTransfer && e.dataTransfer.files[0]);
                    if (file) {
                        if (file.size && file.size > maxSize) {
                            $(fileControl).find(".error-tip").show().html('文件最大上传1024KB！');
                            file.name = '';
                        } else {
                            $(fileControl).find(".error-tip").hide().html('');
                            var reader = new FileReader();
                            reader.onload = function () {
                                $(fileControl).find(".upload-group").hide();
                                $(fileControl).find(".img-group, .btn-group__inset").show();
                                $(fileControl).find(".img").attr("src", this.result);
                                modifyEvent(fileControl);
                            };
                            reader.readAsDataURL(file);
                        }
                    }
                });
            }

            //修改照片
            function modifyEvent(fileControl) {
                $(fileControl).find(".btn-modify").on('click', function () {
                    $(fileControl).find(".file").click();
                });
            }

            changeEvent('.file-control__normal1');
            changeEvent('.file-control__normal2');
        },

        //初始化个人信息
        profileInit: function () {
            $.comfirmAgreements();
            $.identityType();
            $.schoolProvinces();
            $.certificatesPhoto();
            $.joinSchoolYear();
            $.diploma();
        }
    });
    $.profileInit();
});