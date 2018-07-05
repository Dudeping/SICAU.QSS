webpackJsonp([10],{

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * @file common js module
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 */

 __webpack_require__(3);
 __webpack_require__(4);
 var fn=__webpack_require__(1);
 var PAGE_EXISTING;
 var p1=$('#phoneNumChange');
 if (p1.length>0) {
 	p1.click(function(){
 		var th=$(this);
 		th.closest('p').find('span').attr('data',th.closest('p').find('span').html());
 		if(th.attr('data-toggle')==='false'){
 			var target=th.closest('p').find('span');
 			var va=target[0].innerHTML;
 			target.empty();
 			target.append('<input type="number" value="'+va+'"/>');
 			th.html('确定');
 			th.attr('data-toggle','true');
 			var thn=th.clone();
 			thn.html('取消');
 			thn.attr('data-toggle','cancel');
 			thn.click(function(){

 				th.closest('p').find('input').remove();
 				th.closest('p').find('span').html(th.closest('p').find('span').attr('data'));
 				th.html('修改');
 				th.attr('data-toggle','false');
 				th.closest('p').find('a[data-toggle="cancel"]').remove();
 			});
 			th.closest('p').append(thn);
 		}
 		else{

 			fn.request({
 				"data":{"tel":th.closest('p').find('input')[0].value},
 				"url":'/Users/InfoEdit',
 				"callBack":function(data){
 					if(data.Type==="Fail"){
 						alert(data.Message)
 					}
 					if(data.Type==="Success"){
 						var v=th.closest('p').find('input')[0].value;
 						th.closest('p').find('span').attr('data',v);
 						th.closest('p').find('input').remove();
 						th.closest('p').find('span').html(v);
 						th.html('修改');
 						th.attr('data-toggle','false');
 						th.closest('p').find('a[data-toggle="cancel"]').remove();
 						alert('修改成功');
 					}
 				}
 			});
 		}
 	});
 }
 var o=$('#orgChangeBtn');
 if(o.length>0){
 	o.click(function(){
 		var h=$(this);
 		fn.request({
 			"data":{"account":h.closest('form').find('input[type="text"]')[0].value},
 			"url":'/Users/ChangeAdmin',
 			"callBack":function(data){
 				if(data.Type==="Fail"){
 					alert(data.Message)
 				}
 				if(data.Type==="Success"){
 					alert('变更成功！');
 					$('#orgChangeModal').modal('hide');
 					h.closest('form').find('input[type="text"]')[0].innerHTML='';
 				}
 			}
 		});
 	});
 	
 }




/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
__webpack_require__(2);
__webpack_require__(4);

/***/ })

},[32]);