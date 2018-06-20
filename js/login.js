// 为登录按钮添加点击事件
$('#loginBtn').on('click', function() {
	// 获取表单数据
	var result = serializeToJson();
	// 判断是否输入用户名
	if(!$trim(result.username)) {
		alert('请输入用户名');
		return;
	}
	// 判断是否输入密码
	if(!$trim(result.password)) {
		alert('请输入密码');
		return;
	}
	// 发送ajax请求
	$.ajax ({
		type: 'post',
		// url: APP.baseURL + ' /employee/employeeLogin',
		url: `${APP.baseURL}/employee/employeeLogin`,
		data: result,
		success: function(response) {
			if (response.success) {
				location.href = 'user.html';
			}else {
				alert(response.message);
			}
		}
	});
});