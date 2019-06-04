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
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(MintUI);
Vue.prototype.$api = "http://192.168.1.168:8080" //api地址
//Vue.prototype.$resouceUrl = "http://localhost:8081/"  //资源文件地址
Vue.config.debug = true;// 开启debug模式

var router = new VueRouter({
  mode: "history",
  hashbang: false,
  routes: [
    {
      path: '/index',
      component: require('./routers/loupan_list.vue')
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
      path: '/zuodong_list',
      component: require('./routers/zuodong_list.vue')
    },
    {
      path: '/fang_list',
      component: require('./routers/fang_list.vue')
    },
    {
      path: '/first_list',
      component: require('./routers/first_list.vue')
    },
    {
      path: '/information_insert',
      component: require('./routers/information_insert.vue')
    },
    {
      path: '/list',
      component: require('./routers/list.vue'),
      children: [
        {path: "/list/search", component: search}
      ]
    },
    {
      path: '/list2',
      component: require('./routers/list2.vue'),
      children: [
        {path: "/list/search", component: search}
      ]
    },
    {
      path: '/detail',
      component: require('./routers/detail.vue')
    },
    {
      path: '/order',
      component: require('./routers/order.vue')
    },
    {
      path: '/login',
      component: require('./routers/login.vue')
    },
    {
      path: '/build_msg/:lpid', //楼盘基础信息
      component: require('./routers/build_msg.vue')
    },
    {
      path: '/parking_msg', //车位信息
      component: require('./routers/parking_msg.vue')
    },
    {
      path: '/property_msg/:lpid', //物业信息
      component: require('./routers/property_msg.vue')
    },
    {
      path: '/households_msg/:lpid', //户数信息
      component: require('./routers/households_msg.vue')
    },
    {
      path: '/area_msg/:lpid', //面积信息
      component: require('./routers/area_msg.vue')
    },
    {
      path: '/image_msg/:lpid', //图片信息
      component: require('./routers/image_msg.vue')
    },
    {
      path: '/analyse_msg', //楼盘分析信息
      component: require('./routers/analyse_msg.vue')
    },
    {
      path: '/balcony_msg', //座栋基本信息
      component: require('./routers/balcony_msg.vue')
    },
    {
      path: '/elevator_msg/:lpid', //电梯信息
      component: require('./routers/elevator_msg.vue')
    },
    {
      path: '/area2_msg', //电梯信息
      component: require('./routers/area2_msg.vue')
    },
    {
      path: '/bal_households_msg/:lpid', //座栋户数信息
      component: require('./routers/bal_households_msg.vue')
    },
    {
      path: '/price_msg/:lpid', //价格信息
      component: require('./routers/price_msg.vue')
    },
    {
      path: '/rent_msg/:lpid', //租赁部信息
      component: require('./routers/rent_msg.vue')
    },
    {
      path: '/price_msg', //价格信息
      component: require('./routers/price_msg.vue')
    },
    {
      path: '/property_more_msg/:lpid', //物业2信息
      component: require('./routers/property_more_msg.vue')
    },
    {
      path: '/house_msg/:lpid', //房源基本信息
      component: require('./routers/house_msg.vue')
    },
    {
      path: '/renter_msg', //房源租户信息
      component: require('./routers/renter_msg.vue')
    },
    {
      path: '/construct_msg', //房源构造信息
      component: require('./routers/construct_msg.vue')
    },
    {
      path: '/image_more_msg', //房源图片信息
      component: require('./routers/image_more_msg.vue')
    },
    {
      path: '/house_analy_msg/:lpid', //房源分析信息
      component: require('./routers/house_analy_msg.vue')
    },
    {
      path: '/add_owner', //添加业主
      component: require('./routers/add_owner.vue')
    },
    {
      path: '/add_agent', //添加代理人
      component: require('./routers/add_agent.vue')
    },
    {
      path: '/agenter_msg', //房源代理人信息
      component: require('./routers/agenter_msg.vue')
    },

    {
      path: '/need_task', //待办任务
      component: require('./routers/need_task.vue')
    },

    {
      path: '/doc_attach', //跟进中列表
      component: require('./routers/doc_attach.vue')
    },
    {
      path: '/my_distri_list', //我派发的列表
      component: require('./routers/my_distri_list.vue')
    },
    {
      path: '/work_detail', //工单详情
      component: require('./routers/work_detail.vue')
    },
    {
      path: '/attach_log', //业主约见跟进
      component: require('./routers/attach_log.vue')
    },
    {
      path: '/attach_log_detail', //跟进记录详情
      component: require('./routers/attach_log_detail.vue')
    },
    {
      path: '/negotiate_order', //业拓谈判工单
      component: require('./routers/negotiate_order.vue')
    },
    {
      path: '/commerce_dist', //商机派发
      component: require('./routers/commerce_dist.vue')
    },
    {
      path: '/accept_order', //接单
      component: require('./routers/accept_order.vue')
    },
    {
      path: '/project_order', //工程管理部工单
      component: require('./routers/project_order.vue')
    },
    {
      path: '/order_following', //工單跟進中
      component: require('./routers/order_following.vue')
    },
    {
      path: '/owner_talk', //业主约见跟进记录
      component: require('./routers/owner_talk.vue')
    },
    {
      path: '/owner_talk_recoding', //业主约见记录
      component: require('./routers/owner_talk_recoding.vue')
    },
    {
      path: '/process_order', //跟进工单
      component: require('./routers/process_order.vue')
    },
    {
      path: '/init_meet', //形成约见
      component: require('./routers/init_meet.vue')
    },
    {
      path: '/get_house', //收房派单
      component: require('./routers/get_house.vue')
    },
    {
      path: '/need_receive', //签单后待接单
      component: require('./routers/need_receive.vue')
    },
    {
      path: '/sent_me', //派发给我的
      component: require('./routers/sent_me')
    },
    {
      path: '/sent_me_input', //派发给我的信息填写
      component: require('./routers/sent_me_input')
    },
    {
      path: '/sent_me_input_two', //派发给我的信息填写2
      component: require('./routers/sent_me_input_two')
    },
    {
      path: '/receive_order_detail', //接单详情
      component: require('./routers/receive_order_detail')
    },
    {
      path: '/work_list', //业务跟进中列表
      component: require('./routers/work_list.vue')
    },
    {
      path: '/follow_up_record', //跟进记录
      component: require('./routers/follow_up_record')
    },
    {
      path: '*',
      component: require('./routers/login.vue')
    },
  ],
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     console.log(savedPosition)
  //     return savedPosition
  //   } else {
  //     if (from.meta.keepAlive) {
  //       from.meta.savedPosition = document.body.scrollTop;
  //       console.log(document.body.scrollTop);
  //     }
  //     return { x: 0, y: to.meta.savedPosition || 0 }
  //   }
  // }
});


new Vue({
  el: '#app',
  router: router,
  render: function (h) {
    return h(App)
  }
});
