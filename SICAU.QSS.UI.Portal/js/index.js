webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * @file footer module
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 * @require jquery.js
 *          bootstrap.css
 */
if(typeof(PAGE_EXISTING) === 'undefined'){
	__webpack_require__(3);
}
 
 var fn=__webpack_require__(1);

 if($('#footer').length!=0){
 	var date=new Date();
 	$('#copyrightTime').html(date.getFullYear());
 	fn.request({
 		"data":{},
 		"url":'/Home/GetSysAdmin',
 		"callBack":function(data){
 			$.each(data, function(key,value) {
 				$('#sysContact').append('<div><span>' + value.Name + '</span>&nbsp;&nbsp;<span>' + value.Tel + '</span></div>');
 			});
 		}
 	});
 }
 // var diffHeight=0;
 // if((diffHeight=$( window ).height()-$('body').height())>0)
 // {
 // 	$('#footer').css('bottom','-'+diffHeight.toString()+'px');
 // }
 // else{
 // 	$('#footer').css('bottom','0px');
 // }
 // $( window ).resize(function() {
 // 	if((diffHeight=$( window ).height()-$('body').height())>0)
 // 	{
 // 		$('#footer').css('bottom','-'+diffHeight.toString()+'px');
 // 	}
 // 	else{
 // 		$('#footer').css('bottom','0px');
 // 	}

 // });
 module.exports=fn;
 

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_img_index_bg1_jpg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_img_index_bg1_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_img_index_bg1_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_img_index_bg2_jpg__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_img_index_bg2_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_img_index_bg2_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_img_index_bg3_jpg__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_img_index_bg3_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__src_img_index_bg3_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_img_index_bg4_jpg__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_img_index_bg4_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__src_img_index_bg4_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_img_img_sprite_png__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_img_img_sprite_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__src_img_img_sprite_png__);
/**
 * @file index.html entry file
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 */
 

 
 
 
 
 // import logo from '../../src/img/logo.png';
 


 __webpack_require__(6);
 __webpack_require__(18);
 __webpack_require__(4);
 __webpack_require__(19);
 var fn=__webpack_require__(5);


fn.loading('loading');//begin  loading animation
var loadStatus=0;

 if(date === 'undefined'){
   var date=null;
}
date=new Date();
document.getElementById('period').innerHTML = date.getHours() > 20 ? '晚上' : (date.getHours() > 14 ? '下午' : (date.getHours() > 12 ? '中午' : (date.getHours() > 9 ? '上午' : '早上')));

var imgs=[__WEBPACK_IMPORTED_MODULE_0__src_img_index_bg1_jpg___default.a,__WEBPACK_IMPORTED_MODULE_1__src_img_index_bg2_jpg___default.a,__WEBPACK_IMPORTED_MODULE_2__src_img_index_bg3_jpg___default.a];
$.each($('#carousel-display').find('img'),function(index,value){
    value.src=imgs[index];
});
// document.getElementById('logo').src=logo;
$('#featuresBg').css('background','url('+__WEBPACK_IMPORTED_MODULE_3__src_img_index_bg4_jpg___default.a+') no-repeat');
$('.icons').css('background','url('+__WEBPACK_IMPORTED_MODULE_4__src_img_img_sprite_png___default.a+') no-repeat');


/* below is request for ques,vote and notice
========================================================================== */
const MAXLENGTH=4;

/*questionnaire and vote request*/
$.each([{'url':'/Home/GetNewQues','obj':'#questionnaire'},{'url':'/Home/GetNewVote','obj':'#vote'}],function(key,val){
  var value=val;
    fn.request({
      "data":{},
      "url":value.url,
      "callBack":function(data){
        var length=data.length>MAXLENGTH?MAXLENGTH:data.length;
        var o=$(value.obj).find('.list2');
        for (var i = 0; i < length; i++) {
           o[i].querySelector('.list-title').innerHTML=data[i].Title;
           o[i].querySelector('.list-title').href=((value.obj==='#questionnaire'?'/Question/':'/Vote/')+'ResultDetail/'+data[i].Id);
           o[i].querySelector('.join-num').innerHTML=data[i].JoinNum+' 人参与';
           o[i].querySelector('.time').innerHTML=fn.formatTime(data[i].EndTime);
       }
       loadStatus===2?fn.loading('finish'):++loadStatus;
   }
});
});

/*notice request*/
fn.request({
  "data":{},
  "url":'/Home/GetSysNews',
  "callBack":function(data){
    var length=data.length>MAXLENGTH?MAXLENGTH:data.length;
    var notices=$('#notice').find('.list2');
    for (var i = 0; i < length; i++) {
       notices[i].querySelector('.list-title').innerHTML=data[i].Title;
       notices[i].querySelector('.list-title').href='/Home/SysNewDetail/'+data[i].Id;
       notices[i].querySelector('.list_desc').innerHTML=data[i].Content;
       notices[i].querySelector('.time').innerHTML = fn.formatTime(data[i].CreateTime);
   }
   loadStatus===2?fn.loading('finish'):++loadStatus;
}
});

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/fcfd446e20b58b4790159a3771557026.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/5c43e0ff9708fd260b0811ed4af762dc.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/3805fd9debb207786e56bdb20deefa1d.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/3f2c5b3ba30c59393e98d506a02b4606.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/307a86b6dcd23de77a49665d534bb238.png";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[12]);