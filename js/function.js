// JavaScript Document

//スクロールするとメニューバーが消える
$(function() {
    var menuHeight = $("header").height();
    var navPos = 0;
    $(window).scroll(function () {
        var Pos = $(this).scrollTop();
        if (Pos > navPos) {
            if ($(window).scrollTop() >= 150) {
                $("header").css("top", "-" + menuHeight + "px");
            }
        } else {
            $("header").css("top", "0px");
        }
        navPos = Pos;
    });
	//ここまでスクロールするとメニューバーが消える
	
	//ページ内スクロール
	$('a[href^="#"]').click(function () {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
	//ここまでページ内スクロール
	
	
	
	//「プログラムページ」の各タブへジャンプ
		//URL情報をとる
	var url = location.href;
	//URLに#taberuが含まれていたら
	if(url.indexOf("#taberu_content")!=-1){
		//id=taberuのチェックボックスにチェックする
		$("#taberu").attr("checked","checked");
	}
	//URLに#stageが含まれていたら
	if(url.indexOf("#stage_content")!=-1){
		//id=stageのチェックボックスにチェックする
		$("#stage").attr("checked","checked");
	}
	//URLに#experienceが含まれていたら
	if(url.indexOf("#experience_content")!=-1){
		//id=experienceのチェックボックスにチェックする
		$("#experience").attr("checked","checked");
	}
	//URLに#knowが含まれていたら
	if(url.indexOf("#know_content")!=-1){
		//id=knowのチェックボックスにチェックする
		$("#know").attr("checked","checked");
	}
	//URLに#shopが含まれていたら
	if(url.indexOf("#shop_content")!=-1){
		//id=shopのチェックボックスにチェックする
		$("#shop").attr("checked","checked");
	}
	
	
});
	




