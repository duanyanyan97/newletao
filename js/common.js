$(function(){

	var navLi = $('.navs li')

	navLi.on('click',function(){

		$(this).find('ul').slideToggle();

	});

	var APP = {
		baseURL : 'http://fullstack.net.cn:3000';
	}

	$.fn.serializeToJson = function () {

		var formAry = this.serializeArray();

		// var result = {username:'zhangsan', password:123123}
		var result = {};

		formAry.forEach(function (item) {
			result[item.name] = item.value;
		});

		return result;

	}

	function getUrlParams(name) {
		var search = location.search.slice(1);
		// console.log(search);
		var arr1 = search.split('&');

		for (var i = 0; i < arr1.length; i++) {
			var arr2 = arr1.split('=');
			// console.log(arr2);

			if (arr2[0] == name) {
				return arr2[1];
			}
		}
		return -1;
	}

});