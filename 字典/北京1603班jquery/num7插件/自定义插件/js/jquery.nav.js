;$(function() {
	//全局插件
	$.extend({
		"nav": function() {
			//			alert(0);
			$(".navList li").find(".nav").css({
				"list-style": "none",
				"margin-left": "0px",
				"display": "none"
			});

			//	$(".nav").parent().hover(function(){
			//		$(this).find(".nav").stop().slideDown();
			//	},function(){
			//		$(this).find(".nav").stop().slideUp();
			//	});
			$(".navList li").hover(function() {
				$(this).find(".nav").stop().slideDown();
			}, function() {
				$(this).find(".nav").stop().slideUp();
			});
		},
		"nav1": function(color,marginLeft) {
			//			alert(0);
			$(".navList li").find(".nav").css({
				"list-style": "none",
				"margin-left":marginLeft,
				"display": "none",
				"color":color
			});

			//	$(".nav").parent().hover(function(){
			//		$(this).find(".nav").stop().slideDown();
			//	},function(){
			//		$(this).find(".nav").stop().slideUp();
			//	});
			$(".navList li").hover(function() {
				$(this).find(".nav").stop().fadeIn();
			}, function() {
				$(this).find(".nav").stop().fadeOut();
			});
		}
		
	});
})(jQuery);