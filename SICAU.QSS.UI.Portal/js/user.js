webpackJsonp([2],{

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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * @file usercenter  entry js file
 * @author lyle(lj.jeyden@gmail.com)
 * @version 1.0.1
 */

 __webpack_require__(6);
 __webpack_require__(34);
 __webpack_require__(2);
 __webpack_require__(4);
 __webpack_require__(5);
 var fn=__webpack_require__(1);

 var req=fn.req;
 var show=fn.show;
 var rew=$('.review');
 if(rew.length>0){
 	rew.click(function(){
 		var $_this=$(this);
 		if($_this.closest('tr').find('.reviewStatus').attr('data-type')=='review'){
 			$('#reviewDis').attr('data-type','review');
 			$('#reviewDis').css('display','block');
 			$('#reviewOper').find('small.footnote').empty();
 			$('#reviewDis').find('form a.btn-success').attr('id','reviewPass');
 			$('#reviewDis').find('form btn-primary').attr('id','reviewDeny');
 			$('#reviewCancel').css('display','none');
 		}
 		else{
 			$('#reviewCancel').css('display','block');
 			$('#reviewDis').css('display','none');
 			$('#reviewDis').find('form a').attr('id','ban');
 			$('#reviewOper').find('small.footnote').html('当前内容正在审核或已经经过审核，您不能进行审核');
 		}
 		$('.page').empty();
 		if($_this.closest('tr').attr('data-type')==='org'){
 			$('#page-container').attr('data-type',$_this.closest('tr').attr('data-type'));
 			fn.request({
 				'data':{'Id':$_this.closest('tr').attr('data-id')},
 				'url':'/Organize/GetAuditOrganize',
 				'callBack':function(data){
 					fn.request({
 						'data':{'Id':$_this.closest('tr').attr('data-id')},
 						'url':'/Organize/AuditingOrganize',
 						'callBack':function(data){
 						}
 					});
 					var type='';
 					switch(data.Type){
 						case 'School':
 						type='学校';
 						break;
 						case 'Campus':
 						type='校区';
 						break;
 						case 'College':
 						type='学院';
 						break;
 						case 'Major':
 						type='专业';
 						break;
 						case 'Department':
 						type='部门';
 						break;
 						case 'Association':
 						type='协会';
 						break;
 						case 'Class':
 						type='班级';
 						break;
 						default:
 						;
 					}
 					$('.page').append('<table class="table" id="org" data-id="1"><caption class="info"><p class="text">组织名：<span>'+data.Name+'</span></p><p class="text">组织类型：<span>'+type+'</span></p><p class="text">提交者：<span>'+data.Creator+'</span></p> </caption> </table>');
 					$('#page-container').attr('data-id',data.Id);
 				}
 			});
 		}
 		else{
 			$('#page-container').attr('data-type',$_this.closest('tr').attr('data-type'));
 			$('#page-container').attr('data-id',$_this.closest('tr').attr('data-id'));
 			show.showControler($_this.closest('tr').attr('data-type')==='ques'?'wtQues':'wtVote');
 			$('.page .page-footer').empty();
 			fn.request({
 				'data':{'Id':$_this.closest('tr').attr('data-id')},
 				'url':$_this.closest('tr').attr('data-type')==='ques'?'/Question/AuditingQues':'/Vote/AuditingVote',
 				'callBack':function(data){
 					

 				}
 			});
 			
 		}
 	});
 }

 var ok=$('.okOpera');
 if(ok.length>0){
 	ok.click(function(){
 		var $_this=$(this);
 		if($_this.closest('tr').find('.okStatus').attr('data-type')=='toOk'){
 			$('#reviewDis').attr('data-type','ok');
 			$('#reviewDis').css('display','block');
 			$('#reviewOper').find('small.footnote').empty();
 			$('#reviewDis').find('form a.btn-success').attr('id','reviewPass');
 			$('#reviewDis').find('form btn-primary').attr('id','reviewDeny');
 			$('#reviewCancel').css('display','none');
 		}
 		else{
 			$('#reviewCancel').css('display','block');
 			$('#reviewDis').css('display','none');
 			$('#reviewDis').find('form a').attr('id','ban');
 			$('#reviewOper').find('small.footnote').html('当前内容正在确认或已经经过确认，您不能再进行操作');
 		}
 		$('.page').empty();
 		$('#page-container').attr('data-type',$_this.closest('tr').attr('data-type'));
 		$('#page-container').attr('data-id',$_this.closest('tr').attr('data-id'));
 		show.showControler($_this.closest('tr').attr('data-type')==='ques'?'wtQues':'wtVote');
 		$('.page .page-footer').empty();
 		fn.request({
 			'data':{'Id':$_this.closest('tr').attr('data-id')},
 			'url':$_this.closest('tr').attr('data-type')==='ques'?'/Question/QuesInConfirm':'/Vote/VoteInConfirm',
 			'callBack':function(data){


 			}
 		});
 	});
 }




 $.each(['#personalInfoPanel','#quesManagePanel', '#voteManagePanel', '#orgManagePanel', '#sysManagePanel', '#reviewManagePanel'], function(key, value) {
 	$(value + ' .filter li>a').click(function() {
 		$(value + ' .filter li>a').removeClass('active');
 		$(this).addClass('active');
 	});
 	$('.filter li>a.fa-fade').addClass('active');
 }); 

 $('#reviewPass').click(function(){
 	if ($('label[for="message-text"]').children('span').length!=0)
 	{

 		$('label[for="message-text"]').children('span').remove();
 	} 
 	fn.request({
 		'data':{'Id':$('#page-container').attr('data-id')},
 		'url':$('#page-container').attr('data-type')==='ques'?($('#reviewDis').attr('data-type')==='ok'?'/Question/ConfirmPass':'/Question/AuditPass'):($('#page-container').attr('data-type')==='vote'?($('#reviewDis').attr('data-type')==='ok'?'/Vote/ConfirmPass':'/Vote/AuditPass'):'/Organize/AuditPass'),
 		'callBack':function(data){
 			if(data.Type==='Success'){
 				alert('操作成功！');
 				$('#myModal').modal('hide');
 				location.reload(true);
 				$('.page').empty();
 			}

 		}
 	});
 });
 $('#reviewDeny').click(function(){
 	if($('#message-text').val()==='' && $('label[for="message-text"]').children('span').length===0){
 		$('label[for="message-text"]').append('<span class="glyphicon glyphicon-alert" style="color:red"></span>');
 	}
 	else if($('#message-text').val()!=''){
 		if ($('label[for="message-text"]').children('span').length!=0) {
 			$('label[for="message-text"]').children('span').remove();
 		}
 		fn.request({
 			'data':{'Id':$('#page-container').attr('data-id'),'reason':$('#message-text').val()},
 			'url':$('#page-container').attr('data-type')==='ques'?($('#reviewDis').attr('data-type')==='ok'?'/Question/ConfirmNotPass':'/Question/AuditNotPass'):($('#page-container').attr('data-type')==='vote'?($('#reviewDis').attr('data-type')==='ok'?'/Vote/ConfirmNotPass':'/Vote/AuditNotPass'):'/Organize/AuditNotPass'),
 			'callBack':function(data){
 				if(data.Type==='Success'){
 					alert('操作成功！');
 					$('#myModal').modal('hide');location.reload(true);
 					$('.page').empty();
 				}

 			}
 		});
 		// req.handles=[show.constructor.handle.reviewDeny];
 		// req.handles[0].data.Id=$('.page').attr('data-toggle');
 		// req.handles[0].data.reason=$('#message-text').val();
 		// req.ajaxReq();
 	}

 });
 var org=fn.org;
 $(document).ready(function() {
 	$(".orgOpera").click(function(){
 		org.JQ($(this));
 	});
 	$(".orgDel").click(function(){
 		if(confirm('确定删除？')){
 			org.del($(this));
 		}
 		
 	});
 	$(".orgChange").click(function(){
 		var th=$(this);
 		th.closest('td').find('span').attr('data',th.closest('td').find('span').html());
 		if(th.attr('data-toggle')==='false'){
 			var target=th.closest('td').find('span');
 			var va=target[0].innerHTML;
 			target.empty();
 			target.append('<input type="text" value="'+va+'"/>');
 			th.html('确定');
 			th.attr('data-toggle','true');
 			var thn=th.clone();
 			thn.html('取消');
 			thn.attr('data-toggle','cancel');
 			thn.click(function(){
 				
 				th.closest('td').find('input').remove();
 				th.closest('td').find('span').html(th.closest('td').find('span').attr('data'));
 				th.html('修改');
 				th.attr('data-toggle','false');
 				th.closest('td').find('a[data-toggle="cancel"]').remove();
 			});
 			th.closest('td').append(thn);

 		}
 		else{

 			fn.request({
 				"data":{"id":th.closest('tr').attr('data-id'),'orgName':th.closest('td').find('input')[0].value},
 				"url":'/Organize/Edit',
 				"callBack":function(data){
 					if(data.Type==="Fail"){
 						alert(data.Message)
 					}
 					if(data.Type==="Success"){
 						var v=th.closest('td').find('input')[0].value;
 						th.closest('td').find('span').attr('data',v);
 						th.closest('td').find('input').remove();
 						th.closest('td').find('span').html(v);
 						th.html('修改');
 						th.attr('data-toggle','false');
 						th.closest('td').find('a[data-toggle="cancel"]').remove();
 					}
 				}
 			});


 			
 		}
 		
 	});
 	$(".managerDel").click(function(){
 		var th=$(this);
 		if(confirm('确定删除？')){
 			fn.request({
 				"data":{"Id":th.closest('tr').attr('data-id')},
 				"url":'/Users/DeleteSysAdmin',
 				"callBack":function(data){
 					if(data.Type==="Fail"){
 						alert(data.Message)
 					}
 					if(data.Type==="Success"){
 						th.closest('tr').remove();
 						alert('操作成功！');
 					}
 				}
 			});
 		}
 		
 	});
 });




/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 5:
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

/***/ })

},[33]);