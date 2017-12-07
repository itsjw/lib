$(function() {
	$(".cursorPlay li").on("mouseenter mouseleave", function(event) {
		//判断划入划出的事件类型
		var eventType = event.type;
		//console.log(eventType);
		switch (eventType) {
			case "mouseenter":
				//console.log("进入");
				//输出进入的位置
				var inX = event.pageX;
				var inY = event.pageY;
				//元素的宽高
				var w = $(this).width();
				var h = $(this).height();

				//判断进入的方向0-上、1-右、2-下、3-左
				//搜素关键词：jquery判断鼠标划入划出的方向
				var x = (inX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);
				var y = (inY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
				//console.log("进入"+direction);
				
				//执行划入动画
				switch (direction){
					case 0:
						console.log("上入");
						$(this).find("div").css({"left":"0%","top":"-100%"});
						$(this).find("div").animate({"top":"0%","left":"0%"},300);
						break;
					case 1:
						console.log("右入");
						break;
					case 2:
						console.log("下入");
						break;
					case 3:
						console.log("左入");
						break;
					default:
						break;
				}


				break;
			case "mouseleave":
				//console.log("出去");
				var outX = event.pageX;
				var outY = event.pageY;
				var w = $(this).width();
				var h = $(this).height();

				var x = (outX - $(this).offset().left - (w / 2)) * (w > h ? (h / w) : 1);

				var y = (outY - $(this).offset().top - (h / 2)) * (h > w ? (w / h) : 1);
				var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
				console.log("出去"+direction);
				switch (direction){
					case 0:
						$(this).find("div").animate({"top":"-100%","left":"0%"},300);
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
					default:
						break;
				}
				
				
				break;
			default:
				break;
		}
	})
});