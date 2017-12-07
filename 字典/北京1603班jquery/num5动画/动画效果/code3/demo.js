

$(function () {

	/*
	$('.button').click(function () {
		$('#box').animate({
			left : '800px'
		}, 3000);
	});
	
	$('.stop').click(function () {
		$('#box').stop();
	});
	
	
	$('.button').click(function () {
		$('#box').animate({left : '300px'}, 1000)
					 .animate({bottom : '300px'}, 1000)
					 .animate({width : '300px'}, 1000)
					 .animate({height : '300px'}, 1000)
	});

	$('.stop').click(function () {
		$('#box').stop(true, true);
	});
	
	//如果有列队动画，停止的话，那么会停止掉第一个列队动画，然后继续执行后面的列队动画
	//第一个参数，如果为true，就是停止并且清除后面的列队动画，动画即完全停止，默认值为false
	//第二个参数，如果为true，停止后会跳转到末尾的位置上。，默认值为 false

	$('.button').click(function () {
		$('#box').delay(1000)
					 .animate({left : '300px'})
					 .animate({bottom : '300px'}).delay(2000)
					 .animate({width : '300px'})
					 .animate({height : '300px'})
	});
	
	$('#box').slideToggle('slow', function () {
		$(this).slideToggle('slow', arguments.callee);
	});

	$('.ani').click(function () {
		$(':animated').stop().css('background', 'blue');
	});
	
	
	$.fx.interval = 200;
	//$.fx.off = true; 关闭动画
	
	$('.button').click(function () {
		$('#box').toggle(1000);
	});
	
	*/

	
	
	$('.button').click(function () {
		$('#box').animate({
			left : '800px'
		}, 3000, 'swing', function () {});
		$('#pox').animate({
			left : '800px'
		}, 3000, 'linear');
	});
	
	

	

	
});


























