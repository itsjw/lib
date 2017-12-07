$(function() {
	/*$("input[type = submit]").on("click",function(){
		var userName = $("#userName").val();
		if(userName == ""){
			alert("0");
		}else{
			alert("1");
			window.location = "123.html";
		}
	});*/
	$("form").validate({
		rules: {

			userName: "required",
			pwd:{
				required:true,
				minlength:5
			},
			pwd1:{
				required:true,
				minlength:5,
				equalTo:"#pwd"
			},

			email: {

				required: true,

				email: true

			},
			url:{
				required: true,
				url: true
			}

		},
		messages: {

			userName: "用户名不能为空",
			pwd:{
				required: "密码不能为空",
				minlength:"长度不够"
			},
			pwd1:{
				required: "确认密码不能为空",
				minlength:"长度不够",
				equalTo:"两次密码输入不太一致"
			},

			email: {


				required: "E-mail不能为空",

				email: "必须包含@/、"

			},
			url: {


				required: "url不能为空",

				url: "必须包含http://"

			}

		}


	});

});