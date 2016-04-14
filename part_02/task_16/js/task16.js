/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [];

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var cityName = document.getElementById("aqi-city-input").value;
	var aqiValue = document.getElementById("aqi-value-input").value;
	aqiData.push([cityName+"", aqiValue]);
	console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table = document.getElementById("aqi-table");
	table.innerHTML = "<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
	// 渲染aqi-table表格，
	// 并给aqi-table中的所有删除按钮绑定事件, 触发delBtnHandle函数
	for (var i = 0; i < aqiData.length; i++) {
		table.innerHTML += "<tr id='tr_i'><td>"+aqiData[i][0]+"</td><td>"+aqiData[i][1]+"</td><td><button id="+i+" onclick='delBtnHandle("+i+")'>删除</button></td></tr>";
  	}
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	if (checkCityName()&&checkAqiValue()) {
		addAqiData();
  		renderAqiList();
	}
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(index) {
	console.log(index); 
  	aqiData.splice(index,1);

 	renderAqiList();
}

function init() {

  	// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  	document.getElementById("add-btn").onclick = function(){
  		addBtnHandle();
  	}
	  	
}

window.onload = function(){ 
    // your code 
    init();
};

/**
 * 验证输入的城市名称是否符合规范
 * 符合：返回true，不符合：提示用户并返回false
 */
function checkCityName() {
	var cityName = document.getElementById("aqi-city-input").value;
	cityName = cityName.replace(/(^\s*)|(\s*$)/g,""); //去掉前后空格
	var regex = /[^(\u4e00-\u9fa5|a-zA-Z)]{1,}/; //正则：包含有除中英文字以外字符的字符串
	if (regex.test(cityName)) {
		alert("城市名称输入格式错误，请重新输入！");
		return false;
	}
	else if (cityName == "") {
		alert("城市名称输入为空，请重新输入！");
		return false;
	} 
	else {
		
		return true;
	}
}

/**
 * 验证输入的空气质量指数是否符合规范
 * 符合：返回true，不符合：提示用户并返回false
 */
function checkAqiValue() {
	var aqiValue = document.getElementById("aqi-value-input").value;
	aqiValue = aqiValue.replace(/(^\s*)|(\s*$)/g,""); //去掉前后空格
	var regex = /[^0-9]{1,}/; //正则：包含有除整数以外字符的字符串
	if (regex.test(aqiValue)) {
		alert("空气质量输入格式错误，请重新输入！")
		return false;
	}
	else if (aqiValue == "") {
		alert("空气质量输入为空，请重新输入！")
		return false;
	} 
	else {
		
		return true;
	}
}

