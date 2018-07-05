webpackJsonp([8],{

/***/ 10:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

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

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * @file create  page entry file
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 */


 __webpack_require__(6);
 __webpack_require__(2);
 __webpack_require__(4);
 __webpack_require__(10);
 var fn=__webpack_require__(1);


 $('nav.navbar').addClass('navbar-fixed-top');

 if($('#QVCreatPage').attr('data-type')==='ques'){
 	$(".page-sidebar").css("display", "block");
 }

 if(window.innerWidth > 768){
 	$(".page-sidebar").css("left", "0px");
 } 
 else{
 	$(".page-sidebar").css("left", "-300px");
 }
 window.onresize = function() {
 	if(window.innerWidth > 768){
 		$(".page-sidebar").css("left", "0px");
 	} 
 	else{
 		$(".page-sidebar").css("left", "-300px");
 	}
 };

 $('.side-button').click(function() {
 	if($(this).attr("expanded")==='true'){
 		$(this).attr("expanded", "false")
 		$(".page-sidebar").css("left", "-300px");
 	}
 	else{
 		$(this).attr("expanded", "true");
 		$(".page-sidebar").css("left", "0px");

 	}
 });


 var create=new fn.create($('#QVPage'),$('#QVCreatPage').attr('data-type'));//vote or ques
 var req=fn.req;
 var handle={};
 for(var key in create.handle.getOrg){
 	handle[key]=create.handle.getOrg[key];
 }
 handle.url=create.handle.getJoinOrg.url;
 req.handles=[create.handle.getJoinOrg,handle];
 req.ajaxReq();
 $('#createSubmit').click(function(){
 	create.submit(create.type);
 });

 $('#identitySelections').change(function(){
 	if($('#identitySelections option:selected').attr('data-type')==='temp'){
 		$('#accessibleOrgSettings').find('input').attr('disabled',true);
 		$('#identitySelectionsInfo').html('临时组织权限只能包含本身，且不可再进行权限设置');
 		$('#identitySelectionsInfo').addClass('error');
 	}
 	else{
 		$('#accessibleOrgSettings').find('input').attr('disabled',false);
 		$('#identitySelectionsInfo').html('权限选择时，选择了级别比较高的组织后，默认包含了下级的组织');
 		$('#identitySelectionsInfo').removeClass('error');
 	}
 });

 $('#previousStep').click(function(){
 	$('#QVCreatPage').css('display','block');$('#QVSetPage').css('display','none');
 });

 $('#accessibleOrgSettings input[name="organizationClassificationSelects"]').change(function(){
 	handle.data.type=$(this).val();
 	handle.url=$(this).val()==='Self'?create.handle.getJoinOrg.url:create.handle.getOrg.url;
 	req.handles=[handle];
 	req.ajaxReq();
 });
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[9]);