;
(function($) {
	$.fn.extend({
		"fade": function(autoTime) {
			//			alert("fade");
			var $banner = $(this);
			var $page_box = $banner.find(".page_box");
			var $page_slide = $page_box.find(".page_slide");
			var $prevBtn = $banner.find(".prevBtn");
			var $nextBtn = $banner.find(".nextBtn");
			var $points = $banner.find(".points");
			var $pointsLi = $points.find("li");

			var activeIndex = 0;
			var len = $page_slide.length;
			var timer;
			for(var i = 0; i < len; i++) {
				$points.append("<li></li");
			}
			$points.find("li").eq(0).addClass("active");
			//点击小点事件
			$points.find("li").on("click", function() {
				activeIndex = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				$page_slide.eq(activeIndex).stop().fadeIn().siblings().fadeOut();
			});

			$prevBtn.on("click", function() {
				activeIndex--;
				if(activeIndex == -1) {
					activeIndex = len - 1;
				}
				$points.find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
				$page_slide.eq(activeIndex).stop().fadeIn().siblings().fadeOut();
			});
			$nextBtn.on("click", function() {
				activeIndex++;
				if(activeIndex == len) {
					activeIndex = 0;
				}
				$points.find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
				$page_slide.eq(activeIndex).stop().fadeIn().siblings().fadeOut();
			});
			autoPlay();

			function autoPlay() {
				timer = setInterval(function() {
					$nextBtn.click();
				}, autoTime);
			}

			$banner.hover(function() {
				//				console.log("!11")
				clearInterval(timer);
			}, function() {
				autoPlay();
			});

		},
		"slideLR": function(autoTime) {
			var $banner = $(this);
			var $page_box = $banner.find(".page_box");
			var $page_slide = $page_box.find(".page_slide");
			var $prevBtn = $banner.find(".prevBtn");
			var $nextBtn = $banner.find(".nextBtn");
			var $points = $banner.find(".points");
			var $pointsLi = $points.find("li");

			var activeIndex = 0; //即将要出来的那一张的索引值
			var prevIndex = 0; //当前要走的那一张的索引值
			var len = $page_slide.length;
			var timer;
			
			for(var i = 0; i < len; i++) {
				$points.append("<li></li");
			}
			$points.find("li").eq(0).addClass("active");
			//点击小点事件
			$points.find("li").on("click", function() {
				activeIndex = $(this).index();
				$(this).addClass("active").siblings().removeClass("active");
				if(activeIndex > prevIndex) {
					$page_slide.eq(prevIndex).removeClass("show").stop().animate({
						"left": "-100%"
					}, 500);
					$page_slide.eq(activeIndex).removeClass("hide").css({
						"left": "100%"
					}).animate({
						"left": "0"
					}, 500, function() {
						$(this).addClass("show");
						$page_slide.eq(prevIndex).addClass("hide");
						//走了就不在是你了-----你来了我走了，你替代了我的位置
						prevIndex = activeIndex;
					});
				} else if(activeIndex < prevIndex) {
					$page_slide.eq(prevIndex).removeClass("show").stop().animate({
						"left": "100%"
					}, 500);
					$page_slide.eq(activeIndex).removeClass("hide").css({
						"left": "-100%"
					}).animate({
						"left": "0"
					}, 500, function() {
						$(this).addClass("show");
						$page_slide.eq(prevIndex).addClass("hide");
						//走了就不在是你了-----你来了我走了，你替代了我的位置
						prevIndex = activeIndex;
					});
				}
			});
			$prevBtn.on("click", function() {
				activeIndex--;
				if(activeIndex == -1) {
					activeIndex = len - 1;
					prevIndex = 0;
				}
				$points.find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
				$page_slide.eq(prevIndex).removeClass("show").stop().animate({
					"left": "100%"
				}, 500);
				$page_slide.eq(activeIndex).removeClass("hide").css({
					"left": "-100%"
				}).animate({
					"left": "0"
				}, 500, function() {
					$(this).addClass("show");
					$page_slide.eq(prevIndex).addClass("hide");
					//走了就不在是你了-----你来了我走了，你替代了我的位置
					prevIndex = activeIndex;
				});

			});
			$nextBtn.on("click", function() {
				activeIndex++;
				if(activeIndex == len) {
					activeIndex = 0;
					prevIndex = len - 1;
				}
				$points.find("li").eq(activeIndex).addClass("active").siblings().removeClass("active");
				$page_slide.eq(prevIndex).removeClass("show").stop().animate({
					"left": "-100%"
				}, 500);
				$page_slide.eq(activeIndex).removeClass("hide").css({
					"left": "100%"
				}).animate({
					"left": "0"
				}, 500, function() {
					$(this).addClass("show");
					$page_slide.eq(prevIndex).addClass("hide");
					//走了就不在是你了-----你来了我走了，你替代了我的位置
					prevIndex = activeIndex;
				});

			});
			autoPlay();

			function autoPlay() {
				timer = setInterval(function() {
					$nextBtn.click();
				}, autoTime);
			}
			$banner.hover(function() {
				clearInterval(timer);
			}, function() {
				autoPlay();
			});

		}
	});
})(jQuery);