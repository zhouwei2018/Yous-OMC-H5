/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import App from './app.vue';
import $ from 'jquery';
import MintUI from 'mint-ui';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import search from './routers/search.vue';
import store from '../src/vx';
import 'mint-ui/lib/style.css';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);


import { Search } from 'mint-ui';
Vue.component(Search.name, Search);


// 生产环境
Vue.prototype.$prefix = "http://47.92.145.21:81"//图片前缀
Vue.prototype.$api = "http://omc.urskongjian.com" //api地址

//测试ip
//Vue.prototype.$prefix = "http://116.62.68.26:80" //图片前缀
//Vue.prototype.$api = "http://116.62.68.26:8080" //api地址116的地址

// Vue.prototype.$api = "http://192.168.0.105:8080" //Mr.Cheng IP Address


Vue.config.debug = true;// 开启debug模式

// 过滤器
Vue.filter('splitK', function(num) {//千位分隔符 过滤器
  var decimal = String(num).split('.')[1] || '';//小数部分
  var tempArr = [];
  var revNumArr = String(num).split('.')[0].split("").reverse();//倒序
  for (var i in revNumArr){
    tempArr.push(revNumArr[i]);
    if((i+1)%3 === 0 && i != revNumArr.length-1){
      tempArr.push(',');
    }
  }
  var zs = tempArr.reverse().join('');//整数部分
  return decimal?zs+'.'+decimal:zs+'.00';
})
Vue.filter('delkg', function(num){//银行卡四位空格分割/
  var str=String(num).replace(/(\d{4})/g,'$1 ').replace(/\s*$/,'');
  return str;
})
Vue.filter('times', function(s){//毫秒数转化日期
  if(s==null || s==''){
    return
  }
 var myDate = new Date(s);
  var year = myDate.getFullYear();
  var month = myDate.getMonth()+1;
  var day = myDate.getDate();
  if(month<10){month = '0' + month;}
  if(day<10){day = '0' + day;}
  return year+'-'+month+'-'+day;
})
Vue.filter('timed', function(s){//毫秒数转化日期
  if(s==null || s==''){
    return
  }
 var myDate = new Date(s);
  var year = myDate.getFullYear();
  var month = myDate.getMonth()+1;
  var day = myDate.getDate();
  if(month<10){month = '0' + month;}
  if(day<10){day = '0' + day;}
  return year+'/'+month+'/'+day;
})
Vue.filter('time', function(s){//毫秒数转化日期
  if(s==null || s==''){
    return
  }
 var myDate = new Date(s);
  var year = myDate.getFullYear();
  var month = myDate.getMonth()+1;
  var day = myDate.getDate();
  var hour = myDate.getHours();
  var minute = myDate.getMinutes();
  var second = myDate.getSeconds();
  if(month<10){month = '0' + month;}
  if(day<10){day = '0' + day;}
  if(hour<10){hour = '0' + hour;}
  if(minute<10){minute = '0' + minute;}
  if(second<10){second = '0' + second;}
  return year+'-'+month+'-'+day + ' ' + hour + ':' + minute;
})




var router = new VueRouter({
  mode: "hash",
  hashbang: false,
  routes: [
    {
      path: '/',
      /*component: require('./routers/loupan_list.vue')*/
      component: require('./routers/fang_photo.vue'),
    },
    {
      path: '/index',
      /*component: require('./routers/loupan_list.vue')*/
      component: require('./routers/fang_photo.vue'),
    },
    {
      path: '/loupan_basic/:lpid',
      component: require('./routers/loupan_basic.vue')
    },
    {
      path: '/loupan_households/:lpid',
      component: require('./routers/loupan_households.vue')
    },
    {
      path: '/loupan_property/:lpid',
      component: require('./routers/loupan_property.vue')
    },
    {
      path: '/loupan_area/:lpid',
      component: require('./routers/loupan_area.vue')
    },
    {
      path: '/loupan_parking/:lpid',
      component: require('./routers/loupan_parking.vue')
    },
    {
      path: '/loupan_image/:lpid',
      component: require('./routers/loupan_image.vue')
    },
    {
      path: '/loupan_analyse/:lpid',
      component: require('./routers/loupan_analyse.vue')
    },
    {
      path: '/zuodong_list/:lpid',
      component: require('./routers/zuodong_list.vue')
    },
    {
      path: '/fang_list/:lpid',
      component: require('./routers/fang_list.vue')
    },
    {
      path: '/zuodong_basic/:lpid/:zdid',
      component: require('./routers/zuodong_basic.vue')
    },
    {
      path: '/zuodong_elevator/:zdid',
      component: require('./routers/zuodong_elevator.vue')
    },
    {
      path: '/zuodong_area/:zdid',
      component: require('./routers/zuodong_area.vue')
    },
    {
      path: '/zuodong_households/:zdid',
      component: require('./routers/zuodong_households.vue')
    },
    {
      path: '/zuodong_price/:zdid',
      component: require('./routers/zuodong_price.vue')
    },
    {
      path: '/zuodong_image/:zdid',
      component: require('./routers/zuodong_image.vue')
    },
    {
      path: '/zuodong_rent/:zdid',
      component: require('./routers/zuodong_rent.vue')
    },
    {
      path: '/zuodong_property/:zdid',
      component: require('./routers/zuodong_property.vue')
    },
    {
      path: '/fang_list/:lpid/:zdid',
      component: require('./routers/fang_list.vue')
    },
    {
      path: '/fang_basic/:lpid/:fyid',
      component: require('./routers/fang_basic.vue')
    },
    {
      path: '/fang_struct/:fyid',
      component: require('./routers/fang_struct.vue')
    },
    /*{
      path: '/fang_owner/:fyid',
      component: require('./routers/fang_owner.vue')
    },
    {
      path: '/fang_owner/add/:fyid',
      component: require('./routers/fang_add_owner.vue')
    },
    {
      path: '/fang_owner/edit/:yzid',
      component: require('./routers/fang_edit_owner.vue')
    },*/
    /*{
      path: '/fang_agenter/:fyid',
      component: require('./routers/fang_agenter.vue')
    },*/
    /*{
      path: '/fang_agenter/add/:fyid',
      component: require('./routers/fang_add_agent.vue')
    },*/
    /*{
      path: '/fang_agenter/edit/:dlid',
      component: require('./routers/fang_edit_agent.vue')
    },
    {
      path: '/fang_renter/:fyid',
      component: require('./routers/fang_renter.vue')
    },
    {
      path: '/fang_renter/add/:fyid',
      component: require('./routers/fang_add_rent.vue')
    },
    {
      path: '/fang_renter/edit/:zhid',
      component: require('./routers/fang_edit_rent.vue')
    },*/
    {
      path: '/fang_image/:fyid',
      component: require('./routers/fang_image.vue')
    },
    {
      path: '/fang_analyse/:fyid',
      component: require('./routers/fang_analyse.vue')
    },
    {
      path: '/fang_decor/:fyid',
      component: require('./routers/fang_decor.vue')
    },
    {
        path: '/filter',
        component: require('./routers/search.vue'),
    },
    {
      path: '/fang_reg/:fyid',
      component: require('./routers/fang_reg.vue')
    },
    /*{
      path: '/fang_photo/',
      component: require('./routers/fang_photo.vue')
    },*/
    {
      path: '/fang_detail',
      component: require('./routers/fang_detail.vue')
    },
    {
      path: '/modify_pwd',
      component: require('./routers/modify_pwd.vue')
    },
    {
      path: '/login',
      component: require('./routers/login.vue')
    },
    {
      path: '/search',
      component: require('./routers/search.vue')
    },
    {
      path: '*',
      component: require('./routers/login.vue')
    },
    {
      path: '/daikan',
      component: require('./routers/daikan_add.vue')
    },
    {
      path: '/daikan_logs',
      component: require('./routers/daikan_logs.vue')
    },
    {
      path: '/daikan_comment/:id',
      component: require('./routers/daikan_comment.vue')
    },
    {
      path: '/daikan_comment_add/:id',
      component: require('./routers/daikan_comment_add.vue')
    },
    {
      path: '/daikan_detail/:id',
      component: require('./routers/daikan_detail.vue')
    },
    {
      path: '/daikan_total',
      component: require('./routers/daikan_totals.vue')
    },
    {//信息填写
      path: '/commission',
      component: require('./pages/commission/commission.vue'),
      meta: {
        title: '佣金管理'
      }
    },
    {//列表
      path: '/commission_list',
      component: require('./pages/commission/commission_list.vue'),
      meta: {
        title: '佣金管理'
      }
    },
    {//已确认审核通过页面
      path: '/commission_rule',
      component: require('./pages/commission/commission_rule.vue'),
      meta: {
        title: '审核通过'
      }
    },
    {//已确认页面
      path: '/commission_ru',
      component: require('./pages/commission/commission_ru.vue'),
      meta: {
        title: '佣金确认'
      }
    },
    {//未确认页面
      path: '/commission_un',
      component: require('./pages/commission/commission_un.vue'),
      meta: {
        title: '佣金确认'
      }
    },
    {//审批驳回页面
      path: '/commission_turn',
      component: require('./pages/commission/commission_turn.vue'),
      meta: {
        title: '审批驳回'
      }
    },
    {//佣金审批
      path: '/commission_ask',
      component: require('./pages/commission/commission_ask.vue'),
      meta: {
        title: '佣金审批'
      }
    },
    {//佣金审批1
      path: '/commission_ask1',
      component: require('./pages/commission/commission_ask1.vue'),
      meta: {
        title: '佣金审批'
      }
    },
    {//审批
      path: '/approval',
      component: require('./pages/commission/approval.vue'),
      meta: {
        title: '佣金审批'
      }
    },
    {//审批1
      path: '/approval1',
      component: require('./pages/commission/approval1.vue'),
      meta: {
        title: '佣金审批'
      }
    },
    {//审批意见
      path: '/approval_opinion',
      component: require('./pages/commission/approval_opinion.vue'),
      meta: {
        title: '审批意见'
      }
    },
    {//审批意见
      path: '/approval_opinion1',
      component: require('./pages/commission/approval_opinion1.vue'),
      meta: {
        title: '审批意见'
      }
    },
    {//驳回意见
      path: '/turn_opinion',
      component: require('./pages/commission/turn_opinion.vue'),
      meta: {
        title: '驳回意见'
      }
    },
    {//驳回意见
      path: '/turn_opinion1',
      component: require('./pages/commission/turn_opinion1.vue'),
      meta: {
        title: '驳回意见'
      }
    },
    {//添加抄送人
      path: '/copy_p',
      component: require('./pages/commission/copy_p.vue'),
      meta: {
        title: '添加抄送人'
      }
    },
    {//抄送详情查看
      path: '/commission_details',
      component: require('./pages/commission/commission_details.vue'),
      meta: {
        title: '抄送我的'
      }
    },
    {//销售消息通知
        path: '/news',
        component: require('./pages/channel/news.vue'),
        meta: {
          title: '消息通知'
        }
    },
    {//佣金确认列表
      path: '/confirmed_list',
      component: require('./pages/commission/confirmed_list.vue'),
      meta: {
        title: '佣金确认'
      }
    },
    {//佣金确认列表详情
      path: '/confirmed',
      component: require('./pages/commission/confirmed.vue'),
      meta: {
        title: '佣金确认'
      }
    },
    {//佣金管理列表合并详情
      path: '/yjgl_list',
      component: require('./pages/commission/yjgl_list.vue'),
      meta: {
        title: '佣金管理'
      }
    },
    {//我的渠道
      path: '/my_qd',
      component: require('./routers/my_qd.vue'),
      meta: {
        title: '我的渠道'
      }
    },
    {//我的搜索
      path: '/my_suosuo',
      component: require('./routers/my_suosuo.vue'),
      meta: {
        title: '我的渠道'
      }
    },
    
  ]
});

router.beforeEach(function(to, from, next){
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next();
//  //监听页面从何处跳转
//	if (to.path == '/daikan') {//带看打卡
//		localStorage.setItem('back_page','/daikan');
////	  	alert('带看打卡');
//	  	next();
//	}
//	if(to.path == '/daikan_logs'){//带看记录
//		localStorage.setItem('back_page','/daikan_logs');
////	  	alert('带看记录');
//	  	next();
//	}
//	if(to.path == '/yjgl_list'){//佣金管理
//		localStorage.setItem('back_page','/yjgl_list');
////	  	alert('佣金管理');
//	  	next();
//	}

    const user = JSON.parse(localStorage.getItem('loginxs'));
    if (!user && to.path != '/login') {
        next({ path: '/login' });
    }else  if (!user && to.path == '/login') {
        next();
    }else  if (user && to.path == '/login') {
        next();
    }
    /*if (!user && to.path != '/login') {
     next({path: '/login'});
     }*/
    else{
        if(user!=null) {
            const time = user.time == null ? 0 : user.time, now = (new Date).getMilliseconds(), delta = now - time;
            if (delta > 86400 * 30) {
                next({path: '/login'});
            } else {
        		var name="code";
		        var wxcode=null;
		        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		        var r = window.location.search.substr(1).match(reg);
		        if (r!=null){
		        	wxcode= r[2];
		        	
		        }
		        if(wxcode == null){
			        var charString=window.location.href;
			        var tt=encodeURIComponent(charString);
	                window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx97648713a5125fe5&redirect_uri="+tt+"&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
		      	}else{
		      		$.post(
                       "http://omc.urskongjian.com/yhcms/web/jcsj/getOpenid22.do?code="+wxcode
                 ).then(function (res) {
                      var data = JSON.parse(res);
                      if (data.success) {
                          if(data.subscribe){
                          if (data.subscribe == 1 || data.subscribe == 3 ) {
                                if(to.path=='/register'||to.path=='/forgot_pwd'||to.path.indexOf('/reset_pwd')!=-1){
                                    next();
                                }else{
                                    if(localStorage.getItem('xshead')){
									    next();
									}else{
										
									    //存微信的头像
									    const head = data.headimgurl;
									    localStorage.setItem('xshead', JSON.stringify(head));
//									    alert(head);
									    next();
										
									}
                                    const user = JSON.parse(localStorage.getItem('cookxs'));
                                    if (!user && to.path != '/login') {
                                        next({ path: '/login' });
                                    }else  if (!user && to.path == '/login') {
                                        next();
                                    }else  if (user && to.path == '/login') {
                                        next();
                                    }
                                    else{
                                        if(user!=null) {
                                            const time = user.time == null ? 0 : user.time, now = (new Date).getMilliseconds(), delta = now - time;
                                            if (delta > 86400 * 30) {
                                                next({path: '/login'});
                                            } else {

                                               const user22 = JSON.parse(localStorage.getItem('cookxs'));
                                                if(!localStorage.getItem('cookxs')){
                                                    next({path: '/login'});
                                                    return;
                                                }
								                if(user22 != null){
								                    next();
								                }else{
								                    next({path: '/login'});
								                }
								                $.post("http://omc.urskongjian.com/yhcms/web/wxqx/getXsLogin.do", {
								                        "foreEndType": 2,
								                        "code": "300000045",
								                        "cookie": user22.sjs,
								                    },
								                    function (data) {
								                        next();
								                        if (data.success) {
								                        } else {
								                            if (data.userzt == 2) {
								                                Toast({
								                                    message: '此用户已被删除或被禁用，请联系管理员！',
								                                    position: 'bottom'
								                                });
								                            } else {
								                                next({path: '/login'});
								                            }
								                        }
								                        //alert(data); // John11111
								                    }, "json").catch(function (error) {
								                        window.location.href = "http://omc.urskongjian.com/error/uphtm.html";
								                    });
                                            }
                                        }else{
                                            next({path: '/login'});
                                            //next();
                                        }
                                    }




                                }
                                next();
                            } else {
                                confirm("您还没有关注我们的公众号，请先关注我们的公众号！");
                                window.location.href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4Mjg3NDA5Mg==&scene=124#wechat_redirect";
                                //window.location.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI0NjY4ODM5OQ==#wechat_redirect";
                            }
                        }else{
                            next();
                        }

                        }

                        else {
                            Toast({
                                message: '获取状态失败:! 请稍候再试 ' + data.message,
                                position: 'bottom'
                            });
                        }
                    }), function (res) {
                      Toast({
                          message: '获取状态失败! 请稍候再试',
                          position: 'bottom'
                      });
                  }
		      	}
		        
		        
		        
			        
                
            }
        }else{
            next({path: '/login'});
            //next();
        }
    }
});

//router.beforeEach(function(to, from, next) {
//  if (to.meta.title) {
//    document.title = to.meta.title;
//  }
//  next();
//  const user = JSON.parse(localStorage.getItem('loginxs'));
//  if (!user && to.path != '/login') {
//      next({ path: '/login' });
//  }
//  else {
//      if (user != null) {
//          const time = user.time == null ? 0 : user.time, now = (new Date).getMilliseconds(), delta = now - time;
//          if (delta > 86400 * 3) {
//              next({path: '/login'});
//          } else {
//              const user22 = JSON.parse(localStorage.getItem('cookxs'));
////              alert(user22);
//              if(user22 != null){
//                  next();
//
//              }else{
//                  next({path: '/login'});
//
//              }
//              $.post("http://omc.urskongjian.com/yhcms/web/wxqx/getXsLogin.do", {
//                      "foreEndType": 2,
//                      "code": "300000045",
//                      "cookie": user22.sjs,
//                  },
//                  function (data) {
//                      if (data.success) {
//                          next();
//                      } else {
//                          if (data.userzt == 2) {
//                              Toast({
//                                  message: '此用户已被删除或被禁用，请联系管理员！',
//                                  position: 'bottom'
//                              });
//                          } else {
//                              next({path: '/login'});
//                          }
//                      }
//                      //alert(data); // John
//                  }, "json");
//          }
//      }else{
//
//        next();
//      }
//  }
//});


new Vue({
  el: '#app',
  router: router,
  store,
  render: function (h) {
    return h(App)
  }
});
