;(function(){
	/*$.extend({
		//'调用方法名称':function(){}功能函数
		//如果需要参数，直接在function里面进行传参，'nav':function(color)
		//可以使用常用方法调用参数
		//调用时方式：$.nav();
		'nav':function(){
			//之前实现的jQuery效果代码
			$(".nav").css({
				"list-style": "none",
				"margin": 0,
				"padding": 0,
				"text-align": "center",
				"display": "none",
			})
			//$(this).find(".nav li").css("color",color)
			$(".nav").parent().hover(function() {
				$(this).find(".nav").stop().slideDown("normal");
			}, function() {
				$(this).find(".nav").stop().slideUp("normal");
			})
		}
	});*/
	$.fn.extend({
		//'调用方法名称':function(){}功能函数
		//如果需要参数，直接在function里面进行传参，'nav':function(color)
		//可以使用常用方法调用参数
		//通过this来指定当前对象,并且使用find方法
		//调用时方式：$("选择器").nav();
		'nav':function(){
			//之前实现的jQuery效果代码
			$(this).find(".nav").css({
				"list-style": "none",
				"margin": 0,
				"padding": 0,
				"text-align": "center",
				"display": "none",
			})
			//$(this).find(".nav li").css("color",color)
			$(this).find(".nav").parent().hover(function() {
				$(this).find(".nav").stop().slideDown("normal");
			}, function() {
				$(this).find(".nav").stop().slideUp("normal");
			})
		}
	});
})(jQuery);
