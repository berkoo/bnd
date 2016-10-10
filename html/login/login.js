function myInputFun() {
	var accoutValueNum = document.querySelector(".pui-input").value.length;
	var pwdValueNum = document.querySelector(".pui-pwd").value.length;
	if(accoutValueNum >= 1 && pwdValueNum >= 1) {
		document.querySelector(".mui-btn-primary").disabled = false;
	}
}
