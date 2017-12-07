$(function(){
//	$(".navList li").find(".nav").css({
//		"list-style":"none",
//		"margin-left":"0px",
//		"display":"none"
//	});
//	
////	$(".nav").parent().hover(function(){
////		$(this).find(".nav").stop().slideDown();
////	},function(){
////		$(this).find(".nav").stop().slideUp();
////	});
//	$(".navList li").hover(function(){
//		$(this).find(".nav").stop().slideDown();
//	},function(){
//		$(this).find(".nav").stop().slideUp();
//	});


	//全局插件调用
	//$.nav1("pink","20px");
	//局部插件调用
	$(".navList").eq(0).nav(".nav","pink","20px");
	$(".navList").eq(1).nav(".nav1","red","0");
});
