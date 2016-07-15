jQuery(document).ready(function() {
	jQuery('#functions span.mainListItem').click(function() {
		if (jQuery(this).parent().find('ul').is(':visible'))
		{
			jQuery(this).text('подробнее');
			jQuery(this).parent().find('ul').slideUp(100);
		}
		else
		{
			jQuery(this).text('свернуть');
			jQuery(this).parent().find('ul').slideDown(100);
		}
		return false;
	});
	jQuery(".buttonOrderEdition2").click(function(){
		jQuery('#ordering').arcticmodal();
		return false;
	});
	var ident = jQuery("#ident").val();
	var baseurl = jQuery("base").attr("href");
	jQuery.ajax({ url: "/development.html",
		cache: false,
		global: false,
		type: "POST",
		dataType: "html",
		success: function(html){
			jQuery('div.development').html(html);      
		}
	});
	if (ident != '1') {
			jQuery.ajax({ url: "/newsjs.html",
				cache: false,
				global: false,
				type: "POST",
				dataType: "html",
				success: function(html){jQuery('#sidebar').html(html);}
			});
	}
	if (ident == '1') {
		jQuery.ajax({ url: "/sidebar.html",
			cache: false,
			global: false,
			type: "POST",
			dataType: "html",
			success: function(html){
				jQuery('#sidebar').html(html);      
			}
		});
		jQuery("#corporateLink").html("<a href='#corporate' class='buttonOrder' title='Заказать корпоративный сайт'>Заказать</a>");
		jQuery("#shopLink").html("<a href='#shop' class='buttonOrder' title='Заказать интернет-магазин'>Заказать</a>");
		jQuery("#promoLink").html("<a href='#promo' class='buttonOrder' title='Заказать сайт-визитку'>Заказать</a>");
		
		jQuery("#iconCorporate").html("<a href='"+baseurl+"korporativnyi-sait.html' class='icon' title='Создание корпоративного сайта'><img src='/style/iconCorporate.png' alt='Создание корпоративного сайта'></a>");
		jQuery("#iconShop").html("<a href='"+baseurl+"internet-magazin.html' class='icon' title='Создание интернет-магазина'><img src='/style/iconShop.png'  alt='Создание интернет-магазина'></a>");
		jQuery("#iconPromo").html("<a href='"+baseurl+"sait-vizitka.html' class='icon' title='Создание сайта-визитки'><img src='style/iconPromo.png' alt='Создание сайта-визитки'></a>");

		jQuery("#dates").html("<li><a href='#step1'>Шаг 1: Редакция</a></li><li><a href='#step2'>Шаг 2: Дизайн</a></li><li><a href='#step3'>Шаг 3: Дополнения</a></li><li><a href='#step4'>Шаг 4: Адрес сайта</a></li><li><a href='#step5'>Шаг 5: Хостинг</a></li><li><a href='#step6'>Шаг 6: Стоимость</a></li><li><a href='#step7'>Шаг 7: Заявка</a></li>");
		jQuery("#demoshop1").html("<a href='http://shop.lite.legiona.ru/#shop1' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demoshop2").html("<a href='http://shop.lite.legiona.ru/#shop2' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demoshop3").html("<a href='http://shop.lite.legiona.ru/#shop3' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demoshop4").html("<a href='http://shop.lite.legiona.ru/#shop4' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demoshop5").html("<a href='http://shop.lite.legiona.ru/#shop5' target='_blank' rel='nofollow'>посмотреть</a>");
		
		jQuery("#democorporate1").html("<a href='http://corporate.lite.legiona.ru/#corporate1' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#democorporate2").html("<a href='http://corporate.lite.legiona.ru/#corporate2' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#democorporate3").html("<a href='http://corporate.lite.legiona.ru/#corporate3' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#democorporate4").html("<a href='http://corporate.lite.legiona.ru/#corporate4' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#democorporate5").html("<a href='http://corporate.lite.legiona.ru/#corporate5' target='_blank' rel='nofollow'>посмотреть</a>");
		
		jQuery("#demopromo1").html("<a href='http://promo.lite.legiona.ru/#promo1' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demopromo2").html("<a href='http://promo.lite.legiona.ru/#promo2' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demopromo3").html("<a href='http://promo.lite.legiona.ru/#promo3' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demopromo4").html("<a href='http://promo.lite.legiona.ru/#promo4' target='_blank' rel='nofollow'>посмотреть</a>");
		jQuery("#demopromo5").html("<a href='http://promo.lite.legiona.ru/#promo5' target='_blank' rel='nofollow'>посмотреть</a>");
		
		jQuery("#buttons-prev").html("<a href='#' id='prev' title='Предыдущий шаг' rel='nofollow'><img src='/style/calculate/back.png' alt='Предыдущий шаг'></a>");
		jQuery("#buttons-next").html("<a href='#' id='next' title='Следующий шаг' rel='nofollow'><img src='/style/calculate/next.png' alt='Следующий шаг'></a>");
	}
	if (ident == '75') {
		jQuery("#demo").html("<a href='http://corporate.lite.legiona.ru/' target='_blank' title='Посмотреть демо-версию корпоративного сайта' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия корпоративного сайта'></a>");
	}
	else if (ident == '451') {
		jQuery("#demo").html("<a href='http://www.legiona.ru/demo/?e=business' target='_blank' title='Посмотреть демо-версию сайта для бизнеса' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия сайта для бизнеса'></a>");
	}
	if (ident == '76') {
		jQuery("#demo").html("<a href='http://shop.lite.legiona.ru/' target='_blank' title='Посмотреть демо-версию интернет-магазина' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия интернет-магазина'></a>");
	}
	else if (ident == '452') {
		jQuery("#demo").html("<a href='http://www.legiona.ru/demo/?e=shop' target='_blank' title='Посмотреть демо-версию интернет-магазина' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия интернет-магазина'></a>");
	}
	if (ident == '77') {
		jQuery("#demo").html("<a href='http://promo.lite.legiona.ru/' target='_blank' title='Посмотреть демо-версию сайта-визитки' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия сайта-визитки'></a>");
	}
	else if (ident == '450') {
		jQuery("#demo").html("<a href='http://www.legiona.ru/demo/?e=promo' target='_blank' title='Посмотреть демо-версию сайта-визитки' rel='nofollow'><img src='/style/buttonDemo.png' alt='Демо-версия сайта-визитки'></a>");
	}
	jQuery('#clients').jcarousel({
		wrap: "circular",
		scroll: 1
	});
	jQuery(".buttonOrder").click(function(){
		orderModal(jQuery(this).attr("href"));
		return false;
	});
	jQuery(".buttonOrderEdition").click(function(){
		orderModal("#shop");
		return false;
	});
	jQuery(".buttonOrderEdition").click(function(){
		orderModal("#shop");
		return false;
	});
	jQuery("#buttonOrder").click(function(){
		orderModal("#shop");
		return false;
	});
	jQuery(".buttonOrderService").click(function(){
		orderModalService();
		return false;
	});
	jQuery("#callbackbutton").click(function(){
		jQuery("#callback").arcticmodal();
	});
	jQuery("#calculate img").click(function(){
		jQuery("#timeline").arcticmodal();
		if (countPlugin < 1) {
			jQuery(function(){
				jQuery().timelinr({
					arrowKeys: 'true'
				})
			});
			countPlugin = 1;
			calculation();
		}
		return false;
	});
	jQuery("#calculateInSideBar a").click(function(){
		jQuery(jQuery(this).attr("href")).arcticmodal();
		if (countPlugin < 1) {
			jQuery(function(){
				jQuery().timelinr({
					arrowKeys: 'true'
				})
			});
			countPlugin = 1;
			calculation();
		}
		return false;
	});
	var countPlugin = 0;

	jQuery("input[name=editionCalc]").change(function () {
		jQuery("div.editionCalcShop").hide();
		jQuery("div.editionCalcCorporate").hide();
		jQuery("div.editionCalcPromo").hide();
		
		jQuery("div."+jQuery(this).attr('id')).show();
		jQuery("#"+jQuery(this).attr('id')+"1").attr("checked", "checked");
		calculation();
	});
	jQuery("input[name=editionDesign]").change(function () {calculation();});
	jQuery("#supplement1, #supplement2, #supplement3, #supplement4, #supplement5, #supplement6").change(function () {calculation();});
	jQuery("#supplement7, #supplement8").change(function () {
		if (jQuery(this).is(":checked"))
		{
			jQuery("#"+jQuery(this).attr("id")+"Container").slideToggle();
		}
		else
		{
			jQuery("#"+jQuery(this).attr("id")+"Container").slideToggle();
			jQuery("#"+jQuery(this).attr("id")+"Value").val("");
		}
	});
	jQuery("#supplement7Value, #supplement8Value").change(function () {calculation();});
	jQuery("input[name='hosting']").change(function () {
		if (jQuery("#hosting1").is(":checked")) {jQuery("div.hosting1").slideToggle();}
		else {jQuery("div.hosting1").slideToggle();}
		calculation();
	});
	jQuery("input[name='hosting1']").change(function () {calculation();});
	jQuery("#domain").change(function () {total();});
	placeholder();
	deadline();
	
	jQuery('.orderHostingCabinet').click(function(){
		var dataHosting = jQuery(this).attr('data');
		jQuery('#orderHosting').arcticmodal({
			afterOpen: function(data, el) {
				jQuery("#hostingName").val(dataHosting);
			}
		});
	});
	jQuery('.orderDomainCabinet').click(function(){
		var dataDomain = jQuery(this).attr('data');
		jQuery('#orderDomain').arcticmodal({
			afterOpen: function(data, el) {
				jQuery("#domainName").val(dataDomain);
			}
		});
	});

	jQuery("#promoLink a").on("click",function(){
		yaCounter20321800.reachGoal('request');
		return true;
	});
	jQuery("#corporateLink a").on("click",function(){
		yaCounter20321800.reachGoal('request');
		return true;
	});
	jQuery("#shopLink a").on("click",function(){
		yaCounter20321800.reachGoal('request');
		return true;
	});
	jQuery("#buttonOrder").on("click",function(){
		yaCounter20321800.reachGoal('request-bigb');
		return true;
	});
	jQuery(".buttonOrderEdition2").on("click",function(){
		yaCounter20321800.reachGoal('request');
		return true;
	});
	jQuery("#callbackbutton").on("click",function(){
		yaCounter20321800.reachGoal('call');
		return true;
	});
	
});
function calculation()
{
	q = jQuery('input[name="editionCalc"]:checked').val();
	w = jQuery('input[name="editionDesign"]:checked').val();
	e = 0;
	r = 0;
	if (jQuery("#supplement1").is(":checked")) {e = (+e) + (+jQuery("#supplement1").val())}
	if (jQuery("#supplement2").is(":checked")) {e = (+e) + (+jQuery("#supplement2").val())}
	if (jQuery("#supplement3").is(":checked")) {e = (+e) + (+jQuery("#supplement3").val())}
	if (jQuery("#supplement4").is(":checked")) {e = (+e) + (+jQuery("#supplement4").val())}
	if (jQuery("#supplement5").is(":checked")) {e = (+e) + (+jQuery("#supplement5").val())}
	if (jQuery("#supplement6").is(":checked")) {e = (+e) + (+jQuery("#supplement6").val())}
	if (jQuery("#supplement7").is(":checked"))
	{
		qq = jQuery("#supplement7Value").val();
		qq = qq.replace(/\D/g, '');
		qq = qq*500;
		qq = Math.ceil(qq / 1000);
		e = (+e) + (+qq);
	}
	if (jQuery("#supplement8").is(":checked"))
	{
		ww = jQuery("#supplement8Value").val();
		ww = ww.replace(/\D/g, '');
		ww = ww*50;
		e = (+e) + (+ww);
	}
	
	if (jQuery("#hosting1").is(":checked")) {r = jQuery("input[name='hosting1']:checked").val();}
	else {r = jQuery("input[name='hosting']:checked").val();}
	
	val = (+q) + (+w) + (+e) + (+r);
	jQuery("#summCalc").html(val);
	
	total();
}
function total()
{
	jQuery("#editionTotal").html(jQuery('input[name="editionCalc"]:checked').attr("title"));
	jQuery("#designTotal").html(jQuery('input[name="editionDesign"]:checked').attr("title"));

	var check = 0;
	
	if (jQuery("#supplement1").is(":checked")) {check += 1; jQuery("#supplement1Total").html(jQuery("#supplement1").attr("title") + "<br>");}
	else {jQuery("#supplement1Total").html("");}
	if (jQuery("#supplement2").is(":checked")) {check += 1; jQuery("#supplement2Total").html(jQuery("#supplement2").attr("title") + "<br>");}
	else {jQuery("#supplement2Total").html("");}
	if (jQuery("#supplement3").is(":checked")) {check += 1; jQuery("#supplement3Total").html(jQuery("#supplement3").attr("title") + "<br>");}
	else {jQuery("#supplement3Total").html("");}
	if (jQuery("#supplement4").is(":checked")) {check += 1; jQuery("#supplement4Total").html(jQuery("#supplement4").attr("title") + "<br>");}
	else {jQuery("#supplement4Total").html("");}
	if (jQuery("#supplement5").is(":checked")) {check += 1; jQuery("#supplement5Total").html(jQuery("#supplement5").attr("title") + "<br>");}
	else {jQuery("#supplement5Total").html("");}
	if (jQuery("#supplement6").is(":checked")) {check += 1; jQuery("#supplement6Total").html(jQuery("#supplement6").attr("title") + "<br>");}
	else {jQuery("#supplement6Total").html("");}
	if (jQuery("#supplement7").is(":checked"))	{check += 1; jQuery("#supplement7Total").html(jQuery("#supplement7").attr("title") + " - " + jQuery("#supplement7Value").val() + " символов<br>");}
	else {jQuery("#supplement7Total").html("");}
	if (jQuery("#supplement8").is(":checked"))	{check += 1; jQuery("#supplement8Total").html(jQuery("#supplement8").attr("title") + " - " + jQuery("#supplement8Value").val() + " страниц");}
	else {jQuery("#supplement8Total").html("");}
	
	if (check == 0) {jQuery("#supplementTotal").hide();}
	else {jQuery("#supplementTotal").show();}

	if ((jQuery("#domain").val() == "Например: www.legiona.ru или легиона.рф") || (jQuery("#domain").val() == "")) {jQuery("#domainTotalContainer").hide();jQuery("#domainTotal").html();jQuery("#domain").val();}
	else {jQuery("#domainTotalContainer").show();jQuery("#domainTotal").html(jQuery("#domain").val());}
	
	if (jQuery("#hosting1").is(":checked")) {jQuery("#hostingTotal").html(jQuery("input[name='hosting1']:checked").attr("title"));}
	else {jQuery("#hostingTotal").html(jQuery("input[name='hosting']:checked").attr("title"));}
	
	orderCalc();
}
function orderCalc()
{
	jQuery("#editionOrderCalc").val(jQuery("#editionTotal").html());
	jQuery("#designOrderCalc").val(jQuery("#designTotal").html());
	jQuery("#supplementOrderCalc").val(strip_tags(jQuery("#supplementTotal").html()));
	jQuery("#domainOrderCalc").val(jQuery("#domainTotal").html());
	jQuery("#hostingOrderCalc").val(jQuery("#hostingTotal").html());
	jQuery("#summOrderCalc").val(jQuery("#summCalc").html() + " руб.");
	
	jQuery("input#buttonOrderCalc").click(function(){
		if (jQuery("#nameOrderCalc").val() == "ФИО: Грозный Иван Васильевич") {jQuery("#nameOrderCalc").val("");}
		if (jQuery("#phoneOrderCalc").val() == "Контакты: email и номер телефона") {jQuery("#phoneOrderCalc").val("");}
		if (jQuery("#commentsOrderCalc").val() == "Примечание (не обязательно)") {jQuery("#commentsOrderCalc").val("");}
	});
}
function strip_tags(input)
{
	var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
	commentsAndPhpTags = /<!--[\s\S]*?--><\?(?:php)?[\s\S]*?\?>/gi;
	return input.replace(commentsAndPhpTags, '').replace(tags,'');
}
function orderModal(q)
{
	//w = q.replace("#","");
//	jQuery("input#edition"+w).attr("checked", "checked");
    //console.log
	jQuery(q).arcticmodal();
}
function orderModalService()
{
	jQuery('#exampleModal').arcticmodal();
}

function placeholder()
{
	
	if (!jQuery.browser.webkit) {
		
		jQuery('INPUT[placeholder], TEXTAREA[placeholder]').blur(function(){ 
			
			if (jQuery(this).val()=='') {
				jQuery(this).val(jQuery(this).attr('placeholder'));
				jQuery(this).addClass('m-placeholder');
			}
			
		}).focus(function(){
			
			jQuery(this).removeClass('m-placeholder');
			if (jQuery(this).val()==jQuery(this).attr('placeholder'))
				jQuery(this).val('');
			
		}).each(function(){
			
			if ( (jQuery(this).val()=='') || (jQuery(this).val()==jQuery(this).attr('placeholder')) ) {
				jQuery(this).val( jQuery(this).attr('placeholder') );
				jQuery(this).addClass('m-placeholder');
			}
			
			var form = jQuery(this).closest('FORM');
			if (form.length)
				form.submit(function(){
					if (jQuery(this).val()==jQuery(this).attr('placeholder'))
						jQuery(this).val('');
				});
			
		});
		
	}
}