$("#header").load("commonHF.html .header",function(){
	//js头部的逻辑部分
	$("#reBtn").on("click",function(){
		window.location.href = "register.html";
	});
});
$("#footer").load("commonHF.html .footer",function(){
	//js底部的逻辑部分
});

//$.ajax({
//	url:"commonHF.html",
//	success:function(data){
//		console.log(data)
//		$("#header").html(data)
//		var result = $(".header").html();
//		$("#header").html(result)
//	}
//});
//$.ajax({
//	url:"commonHF.html",
//	success:function(data){
//		console.log(data)
//		$("#footer").html(data)
//		var result = $(".footer").html();
//		$("#footer").html(result)
//	}
//});