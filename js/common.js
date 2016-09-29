var req_url = "http://139.198.3.39";
var refreshTokenMethod = function() {
	var url = req_url + "/api/v1/auth/refresh_token";
	var openid = localStorage.getItem("ptt_openid");
	var refreshToken = localStorage.getItem("refresh_token");
	jQuery.ajax({

	})
}
function add0(m){return m<10?'0'+m:m }
function format(shijianchuo){
	//shijianchuo是整数，否则要parseInt转换
	var time = new Date(shijianchuo);
	var y = time.getFullYear();
	var m = time.getMonth()+1;
	var d = time.getDate();
	var h = time.getHours();
	var mm = time.getMinutes();
	var s = time.getSeconds();
	return y+'-'+add0(m)+'-'+add0(d);
}
//下拉加载 上拉刷新
function refresh(url, type) {
	var openid = localStorage.getItem("ptt_openid");
	var access_token = localStorage.getItem("access_token");
	//请求列表数据
	mui.ajax(req_url + '/api/v1/profile/org?access_token=' + access_token + '&openid=' + openid, {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function(data) {
			if(data.code == 20001) {
				var id = data.data.orginfo.id;
				mui.ajax(req_url + '' + url + '?access_token=' + access_token + '&openid=' + openid, {
					dataType: 'json', //服务器返回json格式数据
					data: {
						'org_id': id,
					},
					type: 'get', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒；
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: function(data) {
						//TODO 将获取的数据列表放入本地存储中。。。。
						//localStorage.setItem("userListData",JSON.stringify(data));
						if(type == "user") {
							localStorage.setItem("userListData",JSON.stringify(data));
						}
						if(type == "group") {
							localStorage.setItem("groupListData",JSON.stringify(data));
						}
						for(var n = 0; n < data.data.length; n++) {
							var li = document.createElement("li");
							li.className = "mui-table-view-cell";
							if(type == "group") {
								li.setAttribute("data-href", "editGroup.html");
								li.setAttribute('data-id',data.data[n].id);
								li.innerHTML = '<div class="mui-slider-right mui-disabled"><a class="mui-btn mui-btn-red">删除</a></div>';
								li.innerHTML += '<div class="mui-slider-handle mui-table"><div class="mui-table-cell"><p><span>' + data.data[n].name + '</span></p><p class="pui-p-down"><i class="icon icon-broad">&#xe605;</i><span>3</span></p><span class="mui-pull-right pui-slider-right">' + data.data[n].cg_createtime + '</span></div></div>';
								document.body.querySelector('.mui-table-view').appendChild(li);
							}
							if(type == 'user') {
								console.log(data);
								li.setAttribute("data-href","editUser.html");
								li.setAttribute('data-id',data.data[n].id);
								li.innerHTML = '<div class="mui-slider-handle mui-table"><div class="mui-table-cell">';
								li.innerHTML += '<p><span>'+data.data[n].user_name+'</span></p>';
								li.innerHTML += '<p class="pui-p-down"><i class="icon icon-broad">&#xe605;</i><span>'+data.data[n].user_account+'</span></p>';
								li.innerHTML += '<span class="mui-pull-right pui-slider-right"></span>';
								li.innerHTML += '<i class="icon icon-broad pui-icon-pastDue">&#xe626;</i>';
								if(data.data[n].allow_gps == 1) {
									li.innerHTML += '<i class="icon icon-broad pui-icon-gps">&#xe604;</i></div></div>';
								}
								document.body.querySelector(".mui-table-view").appendChild(li);
							}
						}
					},
					error: function(xhr, type, errorThrown) {
						console.log(type);
					}
				});
			}
		},
		error: function(xhr, type, errorThrown) {
			console.log(type);
		}
	});
}

//获取用户
function getUser(url, type) {
	var openid = localStorage.getItem("ptt_openid");
	var access_token = localStorage.getItem("access_token");
	//请求列表数据
	mui.ajax(req_url + '/api/v1/profile/org?access_token=' + access_token + '&openid=' + openid, {
		dataType: 'json', //服务器返回json格式数据
		type: 'get', //HTTP请求类型
		timeout: 10000, //超时时间设置为10秒；
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		success: function(data) {
			if(data.code == 20001) {
				var id = data.data.orginfo.id;
				mui.ajax(req_url + '' + url + '?access_token=' + access_token + '&openid=' + openid, {
					dataType: 'json', //服务器返回json格式数据
					data: {
						'org_id': id,
					},
					type: 'get', //HTTP请求类型
					timeout: 10000, //超时时间设置为10秒；
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					},
					success: function(data) {
						console.log(data)
					},
					error: function(xhr, type, errorThrown) {
						console.log(type);
					}
				});
			}

		},
		error: function(xhr, type, errorThrown) {
			console.log(type);
		}
	});
}