;$(function() {
	//全局插件
	$.fn.extend({
		"nav":function(navStyle,color,marginLeft){
			$(this).find(navStyle).css({
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
			$(this).find(navStyle).parent().hover(function() {
				$(this).find(navStyle).stop().slideDown();
			}, function() {
				$(this).find(navStyle).stop().slideUp();
			});
		}
		
		
	});
})(jQuery);