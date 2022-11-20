//import * as Chart from '../Content/js/report/chart/ChartModule.js' //جهت استفاده از نمودار

//متغیر سراسری جهت انتقال به آدرس جدید
export let redirectUrl = '';
//========================================

//تابعی ک در زمان لود فرم فراخوانی میشود
export const onLoad = function (viewModel) {
    debugger;    
    //*تذکر در صورت مخفی بودن فیلد از سمت فرایند ویو مدل آن فیلد موجود نمی باشد*

    //نمونه کد استفاده از نمودار
    //جهت استفاده از نمودار حتما در بالا ماژول نمودار ایمپورت شود
    //const chartConfig = {
    //    element: document.getElementById('tstChart'),
    //    exportId: 368,
    //    showZoomTool: false,//تنظیم نمایش/عدم نمایش ابزار نمایش پنجره ای
    //    showFilterTool: false,//تنظیم نمایش/عدم نمایش ابزار نمایش پنجره تنظیم فیلتر ها
    //    showRemoveFilterTool: true,//تنظیم نمایش/عدم نمایش ابزار حذف فیلتر ها
    //    showRefreshTool: false,//تنظیم نمایش/عدم نمایش ابزار تازه سازی نمودار
    //    paramList: [{
    //        ResourceId: 249, Parameters: [
    //            { Name: 'SellYear', Value: 1399 }
    //            , { Name: 'SellMonth', Value: null }
    //            , { Name: 'SellGoodsCount', Value: null }
    //        ]
    //    }]
    //}

    //ChartModule.getChartByExportId(chartConfig).then((data) => {
    //    //این بخش بعد از نمایش کامل نمودار فراخوانی میشود و پارامتر ورودی شامل ویو مدل نمودار می باشد که میتوانید آن را تغییر دهید
    //});

    //برای دریافت اینستنس یک فیلد بصورت مستقیم
    //devHelper.getWidgetInstance($("#changepNosaziCodeBtn"))

    //viewModel.data().Location.subscribe(function (newValue) {
    //    alert("The person's new name is " + newValue);
    //}); 

    //----------------------------------------مقدار پیش فرض برای فایل آپلود
    //if (global.getQueryStringParam("recId") == null || global.getQueryStringParam("recId") == undefined) {
    //    if (viewModel.data().FileUpload != undefined) {

    //        viewModel.data().FileUpload(
    //            [{
    //                ArchiveCode: ko.observable("B6830750-4212-4128-BF4B-5A4502F95987"),
    //                IsDeleted: ko.observable(false),
    //                Kind: ko.observable(1)
    //            }]
    //        )
    //    }
    //    else {
    //        viewModel.data().FileUpload = ko.observable(
    //            [{
    //                ArchiveCode: ko.observable("B6830750-4212-4128-BF4B-5A4502F95987"),
    //                IsDeleted: ko.observable(false),
    //                Kind: ko.observable(1)
    //            }]
    //        )

    //    }
    //}
    //----------------------------------------

    //نمونه کد استفاده از ایجکس
    //*نکته مهم : بعد از دریافت اطلاعات از ایجکس حتما از try استفاده نمایید
    //$.ajax({
    //    url: "/ControllerName/ActionName",
    //    type: "POST",
    //    data: ko.toJSON({ data:data }),
    //    timeout: ajaxTimeOut,
    //    contentType: "application/json; charset=utf-8",
    //    beforeSend: (xhr) => {
    //        loadPanel.indicatorShow();
    //    }
    //}).done((result) => {
    //    if (result.HasError) {
    //        toast.show('error', result.Message);
    //    }
    //    else {
    //        try {
    //            //..
    //        }
    //        catch (err) {
    //            console.log(err.message);
    //            loadPanel.indicatorHide();
    //            toast.show('error', 'متن خطا');
    //        }
    //    }
    //}
    //    ).fail((errorThrown) => {
    //        toast.show('error', 'متن خطا');
    //    }).always(() => {
    //        loadPanel.indicatorHide();
    //    });

    //**تذکر بسیار مهم در توابع خود تا حد امکان از try استفاده نمایید.درصورت بروز خطا در جی اس شما ممکن است عملیات فرم ساز مختل شود**
    //**در done ajax خود حتما از try استفاده نمایید**
    //try {
    //    //...
    //}
    //catch (err) {
    //    console.log(err.message);
    //    loadPanel.indicatorHide();
    //    toast.show('error', 'خطا ');
    //}

    //*تذکر:دکمه ذخیره سازی فرم در فرم ساز و دکمه ذخیره سازی فرم در فرایند متفاوت می باشند*
    //بطور مثال در صورت مخفی کردن دکمه ذخیره فرم ساز  این دکمه در فرایند نمایش داده میشود

    //شامل تمامی تنظیمات و مقادیر فیلد های موجود در فرم
    //viewModel

    //جهت فعال و غیر فعال کردن ولیدشن های فرم
    //viewModel.toggleFieldValidation('Telephone', '', true);  

    //جهت انتخاب کردن مقادیر فیلد ها
    //viewModel.data().fieldName()

    //جهت انتخاب کردن خود فیلد و اعمال تغییرات 
    //viewModel.fields.fieldNameConfig //تنظیمات فیلد جهت اعمال تغییرات بر روی خود فیلد
    //viewModel.fields.fieldName_Instance // اینستنس فیلد جهت اعمال تغییرات بر روی خود فیلد
    //viewModel.fields.fieldName_Validation //تنیظیمات ولیدیشن فیلد جهت تغییر و یا مشاهده ولیدیشن های ست شده بر روی فیلد
    //viewModel.fields.fieldName_Visibility //تنظیمات نمایش فیلد

    //نمونه کد تغییر دادن تنظیمات فیلد ها در فرم ساز
    //viewModel.fields.fieldName_Instance.option('disabled', true)

    //نمونه کد جهت انجام تغییر مستقیم بر روی فیلد های فرم ساز
    //document.querySelector('[data-bind="dxTextArea: fields.fieldNameConfig , dxValidator: fields.fieldName_Validation"]').style.height = "150px"

    //جهت نمایش loader
    //loadPanel.indicatorShow();
    //جهت مخفی کردن loader
    ////loadPanel.indicatorHide();

    //جهت گرفتن entityMode فرایند - مود وارد کردن اطلاعات در فرم
    //let entityMode = new URLSearchParams(window.location.search).get('entityMode');

    //نمونه کد جهت افزودن ستون اکشن به جدول تودرتو
    //devHelper.getWidgetInstance($('#نام تودرتو')).addColumn({
    //    width: 150,
    //    cssClass: "dx-header-option-nofilter",
    //    caption: "چاپ",
    //    fixed: true,
    //    fixedPosition: 'left',
    //    alignment: 'center',
    //    cellTemplate: function (container, options) {
    //        let flag = false;//!checkPaid(viewModel, options.rowIndex);
    //        $("<div />").dxButton({
    //            stylingMode: "contained",
    //            //text: "چاپ",
    //            icon: "fa fa-print",
    //            disabled: flag,
    //            onClick: () => {
    //                  جهت استفاده از قالب چاپ
    //                var paramList = [{
    //                    ResourceId: 1, Parameters: [{ Name: 'RecordId', Value: options.row.key }]
    //                }
    //                ]
    //                absoluteMethodHelper.generateStimulExport(2, paramList, 'pdf');
    //            }
    //        }).appendTo(container);
    //    }
    //});

    //نمونه کد جهت استفاده از قالب چاپ
    //                var paramList = [{
    //                    ResourceId: 1, Parameters: [{ Name: 'RecordId', Value: options.row.key }]
    //                }
    //                ]
    //                absoluteMethodHelper.generateStimulExport(2, paramList, 'pdf');

    //جهت نمایش پیغام به کاربر
    //toast.show('error', result.Message);

    //نمونه کد جهت دریافت داده های فرم تودرتو
    //viewModel.Invoice_List()[rowIndex].BillId();

    //*تذکر مهم : در صورت تغییر مقادیر جدول تو در تو دو حالت وجود دارد*
    //*حالت اول رکورد از قبل در دیتا بیس وجود دارد ک در این صورت کاربر می بایست دو خط زیر را اجرا نماید
    //viewModel.Invoice_List()[rowIndex][FormBuilderStatics.RecordState](RecordStateType.edit);
    //viewModel.Invoice_Record()[FormBuilderStatics.RecordState](RecordStateType.edit);
    //*حالت دوم رکورد هنوز در دیتابیس ذخیره نشده است ک در این صورت نباید دو خط بالا را اجرا کرد
    //به این خاطر ک رکورد حالت ویرایش گرفته و در دیتابیس ذخیره نمیشد*

    //جهت افزودن mask بر روی فیلد ها
    //viewModel.fields.fieldName_Instance.option('mask', "\\0\\9000000000");
    //viewModel.fields.fieldName_Instance.option('maskInvalidMessage', "شماره همراه وارد شده صحیح نمی باشد");
    //viewModel.fields.fieldName_Instance.option('inputAttr', { style: 'direction: ltr;' });
    //viewModel.fields.fieldName_Instance.option('useMaskedValue', true);

    //در صورت استفاده از ادیتور اچ تی ام ال و قراردادن دکمه برای بایند کردن از روش زیر استفاده نمایید
    //if (viewModel.fields.printBtn_HTMLConfig && $("#printBtn")) {
    //$("#printBtn").dxButton({
    //    stylingMode: "contained",
    //    type: "default",
    //    icon: "print",
    //    text: "چاپ",
    //    disabled: viewModel.fields.printBtn_HTMLConfig.disabled,
    //    onClick: () => {
    //        //debugger;
    //        var paramList = [{
    //            ResourceId: 3, Parameters: [{ Name: 'recordId', Value: viewModel.data().Id() }]
    //        },
    //        { ResourceId: 4, Parameters: [{ Name: 'recordId', Value: viewModel.data().Id() }] },
    //        { ResourceId: 5, Parameters: [{ Name: 'recordId', Value: viewModel.data().Id() }] }
    //        ]
    //        absoluteMethodHelper.generateStimulExport(6, paramList, 'pdf');
    //    }
    //});

    //نمونه کد نمایش مودال
    //modal.show('createNewsModal', result.Content.template, {
    //    showSize: 'small',
    //    onShown: function () {
    //        modal.changeModalTitle("createNewsModal", "ایجاد خبر");
    //    }
    //});


    //نمونه کد کار با فیلد نقشه

    //onLoadMap.subscribe((value) => {
    //    //دقت فرمایید که فرمت موقعیت مورد نیاز باید به شکل زیر باشد
    //    let geoJson = '{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[59.524908956873844,36.35135654351753],[59.563562592024056,36.35190956400033],[59.56648308890207,36.33573209193248],[59.545352435019936,36.32508354600387],[59.517006435909785,36.323008984571636],[59.50498086052975,36.33338123944986],[59.501201393981695,36.35246258055471],[59.524908956873844,36.35135654351753]]]},\"properties\":{}}]}';
    //    switch (value.fieldName) {
    //        case "GpsField1"://GpsField1 نام فیلد تست می باشد
    //            //جهت ذخیره سازی موقعیت در ویو مدل باید از کد زیر استفاده نمود.توجه فرمایید که نام فیلد خود را وارد نمایید
    //            viewModel.data().GpsField1(geoJson);//GpsField1 نام فیلد تست می باشد
    //            //هر فیلد نقشه دارای تگی مخفی می باشد که در صورت انتخاب موقعیت مقدار موقعیت درون آن قرار می گیرد و در هنگام ذخیره سازی به سمت سرور ارسال می شود به همین خاطر قطعه کد زیر نیز جهت ذخیره سازی موقعیت مورد نظر الزمی می باشد
    //            $('input[name="GpsField1"]').val(geoJson);//GpsField1 نام فیلد تست می باشد
    //            //بدست آوردن اندیس فیلد نقشه بر اساس نام فیلد در لیست نقشه ها
    //            selectedMapIndex = _.findIndex(mapList, (obj) => {
    //                return obj.options.elementId === "GpsField1";//GpsField1 نام فیلد تست می باشد
    //            });
    //            //جهت رسم نقشه ، دقت فرمایید قطعه کد زیر فقط جهت رسم موقعیت در نقشه می باشد و در هنگام کلیک بر روی ذخیره فرم اطلاعات موقعیت را به سمت سرور ارسال نمی نماید.برای ذخیره موقعیت باید از قطعه کد های بالا استفاده نمود.
    //            GraphMaps.MapManager.drawLayerOnMap(geoJson);

    //            break;
    //        case "GpsField2"://GpsField2 نام فیلد تست می باشد
    //            //جهت ذخیره سازی موقعیت در ویو مدل باید از کد زیر استفاده نمود.توجه فرمایید که نام فیلد خود را وارد نمایید
    //            viewModel.data().GpsField2(geoJson);//GpsField2 نام فیلد تست می باشد
    //            //هر فیلد نقشه دارای تگی مخفی می باشد که در صورت انتخاب موقعیت مقدار موقعیت درون آن قرار می گیرد و در هنگام ذخیره سازی به سمت سرور ارسال می شود به همین خاطر قطعه کد زیر نیز جهت ذخیره سازی موقعیت مورد نظر الزمی می باشد
    //            $('input[name="GpsField2"]').val(geoJson);//GpsField2 نام فیلد تست می باشد
    //            //بدست آوردن اندیس فیلد نقشه بر اساس نام فیلد در لیست نقشه ها
    //            selectedMapIndex = _.findIndex(mapList, (obj) => {
    //                return obj.options.elementId === "GpsField2";//GpsField2 نام فیلد تست می باشد
    //            });
    //            //جهت رسم نقشه ، دقت فرمایید قطعه کد زیر فقط جهت رسم موقعیت در نقشه می باشد و در هنگام کلیک بر روی ذخیره فرم اطلاعات موقعیت را به سمت سرور ارسال نمی نماید.برای ذخیره موقعیت باید از قطعه کد های بالا استفاده نمود.
    //            GraphMaps.MapManager.drawLayerOnMap(geoJson);
    //            break;
    //    }
    //});

    //onMapClick.subscribe((value) => {
    //    switch (value.fieldName) {
    //        case "GpsField1"://GpsField1 نام فیلد تست می باشد
    //            //جهت ذخیره سازی موقعیت در ویو مدل باید از کد زیر استفاده نمود.توجه فرمایید که نام فیلد خود را وارد نمایید
    //            viewModel.data().GpsField2(mapList[value.mapIndex].koGpsValue());//GpsField2 نام فیلد تست می باشد
    //            //هر فیلد نقشه دارای تگی مخفی می باشد که در صورت انتخاب موقعیت مقدار موقعیت درون آن قرار می گیرد و در هنگام ذخیره سازی به سمت سرور ارسال می شود به همین خاطر قطعه کد زیر نیز جهت ذخیره سازی موقعیت مورد نظر الزمی می باشد
    //            $('input[name="GpsField2"]').val(mapList[value.mapIndex].koGpsValue());//GpsField2 نام فیلد تست می باشد
    //            //بدست آوردن اندیس فیلد نقشه بر اساس نام فیلد در لیست نقشه ها
    //            selectedMapIndex = _.findIndex(mapList, (obj) => {
    //                return obj.options.elementId === "GpsField2";//GpsField2 نام فیلد تست می باشد
    //            });
    //            //جهت رسم نقشه ، دقت فرمایید قطعه کد زیر فقط جهت رسم موقعیت در نقشه می باشد و در هنگام کلیک بر روی ذخیره فرم اطلاعات موقعیت را به سمت سرور ارسال نمی نماید.برای ذخیره موقعیت باید از قطعه کد های بالا استفاده نمود.
    //            GraphMaps.MapManager.drawLayerOnMap(mapList[value.mapIndex].koGpsValue());
    //            break;
    //        case "GpsField2"://GpsField2 نام فیلد تست می باشد
    //            //جهت ذخیره سازی موقعیت در ویو مدل باید از کد زیر استفاده نمود.توجه فرمایید که نام فیلد خود را وارد نمایید
    //            viewModel.data().GpsField1(mapList[value.mapIndex].koGpsValue());//GpsField1 نام فیلد تست می باشد
    //            //هر فیلد نقشه دارای تگی مخفی می باشد که در صورت انتخاب موقعیت مقدار موقعیت درون آن قرار می گیرد و در هنگام ذخیره سازی به سمت سرور ارسال می شود به همین خاطر قطعه کد زیر نیز جهت ذخیره سازی موقعیت مورد نظر الزمی می باشد
    //            $('input[name="GpsField1"]').val(mapList[value.mapIndex].koGpsValue());//GpsField1 نام فیلد تست می باشد
    //            //بدست آوردن اندیس فیلد نقشه بر اساس نام فیلد در لیست نقشه ها
    //            selectedMapIndex = _.findIndex(mapList, (obj) => {
    //                return obj.options.elementId === "GpsField1";//GpsField1 نام فیلد تست می باشد
    //            });

    //            //جهت رسم نقشه ، دقت فرمایید قطعه کد زیر فقط جهت رسم موقعیت در نقشه می باشد و در هنگام کلیک بر روی ذخیره فرم اطلاعات موقعیت را به سمت سرور ارسال نمی نماید.برای ذخیره موقعیت باید از قطعه کد های بالا استفاده نمود.
    //            GraphMaps.MapManager.drawLayerOnMap(mapList[value.mapIndex].koGpsValue());
    //            break;
    //    }
    //});

    //$('#btnConvert').dxButton({
    //    text: 'Convert',
    //    onClick: () => {
    //        //دقت فرمایید که فرمت موقعیت مورد نیاز باید به شکل زیر باشد
    //        let geoJson = '{\"type\":\"FeatureCollection\",\"features\":[{\"type\":\"Feature\",\"geometry\":{\"type\":\"Polygon\",\"coordinates\":[[[59.524908956873844,36.35135654351753],[59.563562592024056,36.35190956400033],[59.56648308890207,36.33573209193248],[59.545352435019936,36.32508354600387],[59.517006435909785,36.323008984571636],[59.50498086052975,36.33338123944986],[59.501201393981695,36.35246258055471],[59.524908956873844,36.35135654351753]]]},\"properties\":{}}]}';
    //        //جهت ذخیره سازی موقعیت در ویو مدل باید از کد زیر استفاده نمود.توجه فرمایید که نام فیلد خود را وارد نمایید
    //        viewModel.data().GpsField1(geoJson);//GpsField1 نام فیلد تست می باشد
    //        //هر فیلد نقشه دارای تگی مخفی می باشد که در صورت انتخاب موقعیت مقدار موقعیت درون آن قرار می گیرد و در هنگام ذخیره سازی به سمت سرور ارسال می شود به همین خاطر قطعه کد زیر نیز جهت ذخیره سازی موقعیت مورد نظر الزمی می باشد
    //        $('input[name="GpsField1"]').val(geoJson);//GpsField1 نام فیلد تست می باشد
    //        //بدست آوردن اندیس فیلد نقشه بر اساس نام فیلد در لیست نقشه ها
    //        selectedMapIndex = _.findIndex(mapList, (obj) => {
    //            return obj.options.elementId === "GpsField1";
    //        });
    //        //جهت رسم نقشه ، دقت فرمایید قطعه کد زیر فقط جهت رسم موقعیت در نقشه می باشد و در هنگام کلیک بر روی ذخیره فرم اطلاعات موقعیت را به سمت سرور ارسال نمی نماید.برای ذخیره موقعیت باید از قطعه کد های بالا استفاده نمود.
    //        GraphMaps.MapManager.drawLayerOnMap(geoJson);
    //    }
    //});
    //-------------------------------------------------
    console.log('hello from custom js');
    console.log(ko.mapping.toJS(viewModel.data));
}

//تابعی قبل از ذخیره فرم فراخوانی میشود
export const beforeSubmit = function (viewModel) {
    // return false to avoid continue submit operation
    return true;
}

//تابعی بعد از ذخیره فرم با موفقیت فراخوانی میشود
export const onSubmitSuccess = function (viewModel) {
    console.log('Submiting done from custom js');
}

//تابعی بعد از اقدام به ذخیره فرم و مواجهه با خطا فراخوانی میشود
export const onSubmitFailed = function (viewModel, error) {
    console.error('Submiting failed from custom js', error);
}

//تابعی قبل از ذخیره فرم تو در تو فراخوانی میشود
export const beforeSubSubmit = function (name, record, viewModel) {
    //record: رکوردی ک قرار است ذخیره شود ولی هنوز ذخیره نشده است
    //name : نام تودر تو
    // return false to avoid continue submit operation
    //try {
    //    if (viewModel.Invoice_List)
    //        switch (name) {
    //            case 'Invoice':
    //                if (viewModel.Invoice_List()[0].Amount() != record.Amount && _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]) > 0) {
    //                    record.BillId = null;
    //                    record.PayId = null;
    //                    let rowIndex = _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]);
    //                    viewModel.Invoice_Record().BillId(null);
    //                    viewModel.Invoice_Record().PayId(null);
    //                    viewModel.Invoice_List()[rowIndex].BillId(null);
    //                    viewModel.Invoice_List()[rowIndex].PayId(null);
    //                }
    //                break;
    //        }
    //}
    //catch (err) {
    //    console.log(err.message);
    //    toast.show('error', err.message);
    //}

    return true;
}

//تابعی بعداز ذخیره فرم تو در تو فراخوانی میشود
export const onSubSubmit = function (name, record, viewModel) {

    //*تذکر در صورت مخفی بودن فیلد از سمت فرایند ویو مدل آن فیلد موجود نمی باشد*

    //record :رکوردی ک ذخیره شده است
    //name : نام تودر تو
    // for example
    // if (name == 'نام تودر تو')
    //     dsox332DetailSubmit();

    //try {
    //    if (viewModel.Invoice_List)
    //        switch (name) {
    //            case 'Invoice':
    //                if (viewModel.Invoice_List()[0].Amount() != record.Amount && _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]) > 0) {
    //                    record.BillId = null;
    //                    record.PayId = null;
    //                    let rowIndex = _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]);
    //                    viewModel.Invoice_Record().BillId(null);
    //                    viewModel.Invoice_Record().PayId(null);
    //                    viewModel.Invoice_List()[rowIndex].BillId(null);
    //                    viewModel.Invoice_List()[rowIndex].PayId(null);
    //                }
    //                break;
    //        }
    //}
    //catch (err) {
    //    console.log(err.message);
    //    toast.show('error', err.message);
    //}
}

//تابعی قبل از حذف رکورد های فرم تو در تو فراخوانی میشود
export const beforeSubDelete = function (name, record, viewModel) {
    // return false to avoid continue submit operation
    //try {
    //    if (viewModel.Invoice_List)
    //        switch (name) {
    //            case 'Invoice':
    //                if (viewModel.Invoice_List()[0].Amount() != record.Amount && _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]) > 0) {
    //                    record.BillId = null;
    //                    record.PayId = null;
    //                    let rowIndex = _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]);
    //                    viewModel.Invoice_Record().BillId(null);
    //                    viewModel.Invoice_Record().PayId(null);
    //                    viewModel.Invoice_List()[rowIndex].BillId(null);
    //                    viewModel.Invoice_List()[rowIndex].PayId(null);
    //                }
    //                break;
    //        }
    //}
    //catch (err) {
    //    console.log(err.message);
    //    toast.show('error', err.message);
    //}
    return true;
}

//تابعی بعد از حذف رکورد های فرم تو در تو فراخوانی میشود
export const onSubDelete = function (name, record, viewModel) {
    //try {
    //    if (viewModel.Invoice_List)
    //        switch (name) {
    //            case 'Invoice':
    //                if (viewModel.Invoice_List()[0].Amount() != record.Amount && _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]) > 0) {
    //                    record.BillId = null;
    //                    record.PayId = null;
    //                    let rowIndex = _.findIndex(ko.toJS(viewModel.Invoice_List()), ['Id', record.Id]);
    //                    viewModel.Invoice_Record().BillId(null);
    //                    viewModel.Invoice_Record().PayId(null);
    //                    viewModel.Invoice_List()[rowIndex].BillId(null);
    //                    viewModel.Invoice_List()[rowIndex].PayId(null);
    //                }
    //                break;
    //        }
    //}
    //catch (err) {
    //    console.log(err.message);
    //    toast.show('error', err.message);
    //}
}

//تابعی ک بعد از انتخاب گزینه جدید تودرتو و  نمایش مودال فراخوانی میشود
export const onLoadSubForm = function (name, record, viewModel) {
    debugger;
}

//تابعی ک بعد از انتخاب گزینه ویرایش تودرتو و  نمایش مودال فراخوانی میشود
export const onLoadEditSubForm = function (name, record, viewModel) {
    debugger;
}
