//////////////////////////////首页//////////////////////////////////
//  点击按钮 显示隐藏菜单
var on = true;

$('.on').unbind().bind('click', function() {
	if(on) {
		$("#index").css({
			"left": "-85%"
		});
		$(".subNav").css({
			"display": "block"
		});
		$('.on span').css({
			"display": "none"
		});
		$('.on i').css({
			"display": "block"
		});
	} else {
		$("#index").css({
			"left": "0"
		});
		$(".subNav").css({
			"display": "none"
		});
		$('.on span').css({
			"display": "block"
		});
		$('.on i').css({
			"display": "none"
		});
	}
	on = !on;
});

//  当滚动条大于1000的时候 显示回到顶部按钮
$(window).bind("scroll", function() {
	var sTop = $(window).scrollTop();
	if(sTop >= 600) {
		$(".top").css({
			"display": "block"
		});
	} else {
		$(".top").css({
			"display": "none"
		});
	}
})

//  点击回到顶部的键 回到顶部
$(".top").bind("click", function() {
	window.scrollTo(0, 0);
})

///////////////////////////////////////////online////////////////////////////////////////
var video1 = $(".video1 video");
$("#video-btn1").bind("click", function() {
	video1.play();
	//	console.log($(".video1 video"));
	$(".video1 button").css({
		"display": "none"
	});
})

$("#video-btn2").bind("click", function() {
	$(".video2 video").attr({
		"autoplay": "autoplay"
	});
	//	console.log($(".video1 video"));
	$(".video2 button").css({
		"display": "none"
	});
})

//  地图

//创建和初始化地图函数：
function initMap() {
	createMap(); //创建地图
	setMapEvent(); //设置地图事件
	addMapControl(); //向地图添加控件
}

//创建地图函数：
function createMap() {
	var map = new BMap.Map("dituContent"); //在百度地图容器中创建一个地图
	var point = new BMap.Point(106.497462, 29.626512); //定义一个中心点坐标
	map.centerAndZoom(point, 17); //设定地图的中心点和坐标并将地图显示在地图容器中
	window.map = map; //将map变量存储在全局
}

//地图事件设置函数：
function setMapEvent() {
	map.enableDragging(); //启用地图拖拽事件，默认启用(可不写)
	map.enableScrollWheelZoom(); //启用地图滚轮放大缩小
	map.enableDoubleClickZoom(); //启用鼠标双击放大，默认启用(可不写)
	map.enableKeyboard(); //启用键盘上下左右键移动地图
}

//地图控件添加函数：
function addMapControl() {
	//向地图中添加缩放控件
	var ctrl_nav = new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_LEFT,
		type: BMAP_NAVIGATION_CONTROL_LARGE
	});
	map.addControl(ctrl_nav);
	//向地图中添加缩略图控件
	var ctrl_ove = new BMap.OverviewMapControl({
		anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
		isOpen: 1
	});
	map.addControl(ctrl_ove);
	//向地图中添加比例尺控件
	var ctrl_sca = new BMap.ScaleControl({
		anchor: BMAP_ANCHOR_BOTTOM_LEFT
	});
	map.addControl(ctrl_sca);
}

initMap(); //创建和初始化地图

//////////////////////////////////////////////////////////////////dora//////////////////////////////////////////////////////////////////
//  倒计时
setInterval(function() {
	var fTime = new Date(2018, 7, 26, 12, 0, 0); //  获取终点时间
	var fTimes = fTime.getTime(); //获取终点时间的毫秒数 时间戳
	var nowTime = new Date(); //  获取现在的时间
	var nowTime = nowTime.getTime(); //获取当前毫秒数  时间戳
	var difTime = (fTimes - nowTime) / 1000; //获取时间差
	//  将时间戳转化为时分秒
	var day = parseInt(difTime / 86400);
	var hour = parseInt((difTime / 3600) % 60);
	if(hour < 10) {
		hour = "0" + hour;
	}
	var min = parseInt((difTime / 60) % 60);
	if(min < 10) {
		min = "0" + min;
	}
	var sec = parseInt(difTime % 60);
	if(sec < 10) {
		sec = "0" + sec;
	}
	//  将内容写到页面
	$("#d-day").html(day);
	$("#d-hour").html(hour);
	$("#d-min").html(min);
	$("#d-sec").html(sec);
}, 1000);