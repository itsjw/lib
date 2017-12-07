﻿

$(function () {

	/*
	$('.button').click(function () {
		$('#box').animate({
			width : '300px',
			height : '200px',
			opacity : 0.5,
			fontSize : '50px'
		});
	});
	
	$('.button').click(function () {
		$('#box').animate({
			width : '300px',
			height : '200px',
			opacity : 0.5,
			fontSize : '50px'
		}, 2000, function () {
			alert('动画执行完毕！');
		});
	});
		
	$('.button').click(function () {
		$('#box').animate({
			left : '300px',
			top : '200px'
		}, 'slow');
	});
	$('.button').click(function () {
		$('#box').animate({
			left : '300px'
		}, 'slow');
	});
	
	$('.button').click(function () {
		$('#box').animate({
			left : '+=100px'
		}, 'slow');
	});
	
	
	//回调函数 +　列队动画
	$('.button').click(function () {
		$('#box').animate({
			width : '300px'
		}, function () {
			$('#box').animate({
				height : '200px'
			}, function () {
				$('#box').animate({
					opacity : 0.5
				}, function () {
					$('#box').animate({
						fontSize : '50px'
					});
				});
			});
		});
	});
	
	//在统一个元素的基础上，使用连缀或顺序排列调用，可以实现列队动画
	$('.button').click(function () {
		$('#box').animate({width : '300px'})
					 .animate({height : '200px'})
					 .animate({opacity : 0.5})
				     .animate({fontSize : '50px'});
	});
	
	//在统一个元素的基础上，使用连缀或顺序排列调用，可以实现列队动画
	$('.button').click(function () {
		$('#box').animate({width : '300px'});
		$('#box').animate({height : '200px'});
		$('#box').animate({opacity : 0.5});
		$('#box').animate({fontSize : '50px'});
	});
	

	$('.button').click(function () {
		$('#box').animate({width : '300px'});
		$('#pox').animate({height : '200px'});
		$('#box').animate({opacity : 0.5});
		$('#pox').animate({fontSize : '50px'});
	});
	
	//box的第一条和第三条是列队动画
	//pox的第二条和第四条是列队动画
	//box的第一条和pox的第二条是同步动画
	//box的第三条和pox的第四条是同步动画
	
	$('.button').click(function () {
		$('#box').animate({
			width : '300px'
		}, function () {
			$('#pox').animate({
				height : '200px'
			}, function () {
				$('#box').animate({
					opacity : 0.5
				}, function () {
					$('#pox').animate({
						fontSize : '50px'
					});
				});
			});
		});
	});
	
	$('.button').click(function () {
		$('#box').slideUp('slow').slideDown('slow').css('background', 'orange');
	});
	
	//CSS不是动画方法，会默认排列到和第一个动画方法同步
	
	$('.button').click(function () {
		$('#box').slideUp('slow').slideDown('slow', function () {
			$(this).css('background', 'orange');
		});
	});
	
	next
	$('.button').click(function () {
		$('#box')
						.slideUp('slow')
						.slideDown('slow')
						.queue(function (next) {
							$(this).css('background', 'orange');
							next();
						})
						.hide('slow');
	});
	
	//dequeue
	$('.button').click(function () {
		$('#box')
						.slideUp('slow')
						.slideDown('slow')
						.queue(function () {
							$(this).css('background', 'orange');
							$(this).dequeue();
						})
						.hide('slow');
	});
	
	$('.button').click(function () {
		$('#box').slideUp('slow');
		$('#box').slideDown('slow');
		$('#box').queue(function () {
			$(this).css('background', 'orange');
			$(this).dequeue();
		});
		$('#box').hide('slow');
	});
	
	function count() {
		return $('#box').queue('fx').length;
	}
	
	*/
	
	$('.button').click(function () {
		$('#box')
						.slideUp('slow')
						.slideDown('slow', function () {$(this).clearQueue()})
						.queue(function () {
							$(this).css('background', 'orange');
							$(this).dequeue();
						})
						.hide('slow');
	});
	



});


























