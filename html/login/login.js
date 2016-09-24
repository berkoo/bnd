
function myInputFun() {
	var accoutValueNum = document.querySelector(".pui-input").value.length;
	var pwdValueNum = document.querySelector(".pui-pwd").value.length;
	if(accoutValueNum >= 1 && pwdValueNum >= 1) {
		document.querySelector(".mui-btn-primary").disabled = false;
	}
}
//
////var userType = 1;
//
//document.getElementById("btnLogin").addEventListener('tap', function() {
//	var href = this.getAttribute("data-href");
//	var status = document.querySelector(".mui-bar a").getAttribute("data-status");
//	var account, passwd;
//	account = document.getElementById("textAccount").value;
//	passwd = document.getElementById("textPassword").value;
//
//	if(account == null || account == "") {
//		alert(account);
//		return;
//	}
//	if(passwd == null || passwd == "") {
//		return;
//	}
//	mui.ajax(req_url + '/api/v1/auth/access_token', {
//		data: {
//			"appid": "3b6bd62d64",
//			"appSecret": "f3b2fff94f75498e",
//			"username": account,
//			"password": passwd,
//			"user_type": 1
//		},
//		dataType: 'json', //服务器返回json格式数据
//		type: 'get', //HTTP请求类型
//		timeout: 10000, //超时时间设置为10秒；
//		headers: {
//			'Content-Type': 'application/x-www-form-urlencoded'
//		},
//		success: function(data) {
////			if(data.code == 20001) {
////				//1、提示用户登录成功
////				//2、将data.data中的每一个字段写入localstorage
////				localStorage.setItem("access_token", data.data.access_token);
////				localStorage.setItem("refresh_token", data.data.refresh_token);
////				localStorage.setItem("ptt_openid", data.data.ptt_openid);
////				//3、页面跳转到主界面
////				if(status == "admin") {
////					mui.openWindow("../index/adminIndex.html");
////					userType = 1;
////				} else if(status == "agent") {
////					mui.openWindow("../index/agentIndex.html");
////					userType = 0;
////				}
////			}
//
//			console.log(data.data.access_token);
//			ACCESS_TOKEN = data.data.access_token;
//			OPENID = data.data.openid;
//		},
//		error: function(xhr, type, errorThrown) {
//			//异常处理；
//			console.log(type);
//		}
//	});
//}, false);