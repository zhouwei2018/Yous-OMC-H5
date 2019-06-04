<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/list.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

.filt-open .warpper2{height:100%;overflow-y: scroll !important}
.highlight a{color:#476CBA !important}
.cell > dd {float:left;margin-right:.2rem}
.supply_msg_box dd.supply_house{margin-top:.1rem !important}
dd.supply_msg_box > dl > dd{padding-bottom:.13rem !important}
  //遮罩内容1313131
  .float-part {
    position: fixed;
    left: 0;
    bottom: -100%;
    width: 100%;
    height: 6.6rem;
    z-index: 1000;
    background-color: @cl_white;
    .bulid_msg_item {
      float: left;
      width: 25%;
      text-align: center;
      height: 1.6rem;
      i {
        width: .65rem;
        height: .55rem;
        display: block;
        margin: .5rem auto .2rem;
        &.basic_01 {
          background: url("../resources/images/icons/basic_icon/basic01.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_02 {
          background: url("../resources/images/icons/basic_icon/basic02.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_03 {
          background: url("../resources/images/icons/basic_icon/basic03.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_04 {
          background: url("../resources/images/icons/basic_icon/basic04.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_05 {
          background: url("../resources/images/icons/basic_icon/basic05.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_06 {
          background: url("../resources/images/icons/basic_icon/basic06.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_07 {
          background: url("../resources/images/icons/basic_icon/basic07.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_08 {
          background: url("../resources/images/icons/basic_icon/basic08.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_09 {
          background: url("../resources/images/icons/basic_icon/basic09.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_13 {
          background: url("../resources/images/icons/basic_icon/basic20.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_10 {
          background: url("../resources/images/icons/basic_icon/basic10.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_11 {
          background: url("../resources/images/icons/basic_icon/basic11.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_12 {
          background: url("../resources/images/icons/basic_icon/basic12.png") no-repeat;
          background-size: .65rem .55rem;
        }
      }
    }
  }

  .bulid_msg_last {
    display: block;
    width: 1.2rem;
    text-align: center;
    margin: 0 auto;
    i {
      width: .65rem;
      height: .55rem;
      display: block;
      margin: .5rem auto .2rem;
      background: url("../resources/images/icons/basic_icon/basic09.png") no-repeat;
      background-size: .65rem .55rem;
    }
  }

  .msg_progress_bar {
    position: relative;
    margin-top: .5rem;
    height: .34rem;
    line-height: .34rem;
    background-color: @bg_btn_gray;
    text-align: center;
    .finish_bar {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 50%;
      background-color: @bg_mid_blue;
    }
    .progress_text {
      position: absolute;
      right: .25rem;
      top: 0;

    }
  }

  .close {
    font-size: @font54;
    width: .54rem;
    display: block;
    margin: .1rem auto;
  }

  //遮罩
  .shadow {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: @cl_000;
    opacity: .7;
    z-index: 999;
    display: none;
  }

#filter-area ul, #filter-price ul{
    height: 200px;
    overflow-y: scroll;
}

li.ys_listcon:not(:last-child){border-bottom: 1px solid rgb(229, 229, 230) !important}
li.ys_listcon > a{float:left;border-bottom:none}
li.ys_listcon > a:first-child{width:80%}
li.ys_listcon > a:last-child{width:20%}
li.ys_listcon > a:last-child{
    background:url(../resources/images/icons/right-arrow.jpg) no-repeat;
    background-size: 32px 32px;
    padding: 12% 5%;background-origin: content-box;}
</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
      <input type="text" id="keyword" placeholder="请输入关键字搜索" v-model="para.search_keywork" maxlength="50"
             @focus="changeRou">
    </a>
    <router-view></router-view>
    <section class="section"
             :class="{'in-filter':this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'}">
      <div class="option">
        <div class="filtate-outter">
          <div class="list-filtrate">

            <!--筛选条件标题开始-->
            <section class="filtrate-nav">
              <ul @click="chooseFilter($event)">
                <li data-role="filterItem" data-type="district"
                    :class="{'active-filter':this.currentFilterTab=='district'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis district-h">区域</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="area" :class="{'active-filter':this.currentFilterTab=='area'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis area-h">面积</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="price" :class="{'active-filter':this.currentFilterTab=='price'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis price-h">价格</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
              </ul>
            </section>
            <!--筛选条件标题结束-->

            <!--筛选条件内容start-->
            <div class="filt-container">
              <div class="filt-open" id="filter-district" :class="{show:this.currentFilterTab=='district'}">
                <div class="warpper box-flex1">
                  <ul class="box-flex1 bg-white cut-height">
                    <li data-type="district" @click="searchChoose('', '', '不限', $event)">
                        <a href="javascript:;">不限</a></li>
                    </li>
                    <li v-for="item in districtArray" data-type="district"
                        @click="searchSubDistrict(item.code,$event)"><a href="javascript:;">{{item.name}}</a>
                    </li>
                  </ul>
                  <div id="price_filter" class="warpper2 box-flex1 bg-white">
                    <ul class="price-ul cut-height" :class="{show:this.curTab=='d'}">
                      <li v-for="item in subBusiness" data-type="district"
                          @click="searchChoose(item.id,'',item.fdname, $event)">
                        <a href="javascript:;">{{item.fdname}}</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="filt-open" id="filter-price" :class="{show:this.currentFilterTab=='price'}">
                <div class="warpper box-flex1 bg-white">
                    <ul class="">
                        <li data-type="price"
                            @click="searchChoose('','', '不限', $event)">
                          <a href="javascript:;">不限</a></li>
                        <li v-for="item in priceArray" data-type="price"
                            @click="searchChoose(item.code,item.minnum+'-'+item.maxnum, item.minnum+'-'+item.maxnum+'元', $event)">
                          <a href="javascript:;">{{item.minnum}}-{{item.maxnum}}元</a></li>
                      </ul>
                  <div class="price-bottom">
                    <div class="price-bot price-div">自定义区间
                      <input id="startprice" type="number" :placeholder="unitword" v-model.trim="price1"><i>----</i>
                      <input id="endprice" type="number" :placeholder="unitword" v-model.trim="price2">
                      <button @click="selfInputPrice">确定</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="filt-open" id="filter-area" :class="{show:this.currentFilterTab=='area'}">
                <div class="warpper box-flex1  bg-white" data-key="huxing_shi">
                  <ul class="">
                    <li data-type="size"
                            @click="searchChoose('','', '不限', $event)">
                          <a href="javascript:;">不限</a></li>
                    <li v-for="item in sizeArray" data-type="size"
                        @click="searchChoose(item.code, item.minnum+'-'+item.maxnum,  item.minnum+'-'+item.maxnum+'m²', $event)">
                      <a href="javascript:;">{{item.minnum}}-{{item.maxnum}}m²</a></li>
                  </ul>
                  <div class="price-bottom">
                    <div class="price-bot">自定义区间
                      <input type="number" id="beginArea" value="" maxlength="5" placeholder="平米"
                             v-model.trim="size1"><i>----</i>
                      <input type="number" id="endArea" value="" maxlength="5" placeholder="平米" v-model.trim="size2">
                      <button @click="selfInputSize">确定</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--筛选条件内容end-->

          </div>
        </div>

        <!--筛选框fixed时替代div-->
        <div id="pos_block"></div>

        <!--筛选结果start-->
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="20"
          infinite-scroll-immediate-check="checked">
          <li class="ys_listcon pv15 clearfix" v-for="item in resultData">
            <a href="javascript:;" class="supply_box" :lpid="item.id" @click="shadowShow">
              <dl class="supply">
                <dt>
                  <img v-if="item.pic" :src="$prefix + '/' + item.pic">
                  <img v-else :src="$prefix + '/upload/2017-08-27/6404b4de960b81fc5403c870aefcea34.png'">
                </dt>
                <dd class="supply_msg_box clearfix">
                  <dl>
                    <dd class="supply_house">{{item.topic}}</dd>
                    <dd class="supply_color ellipsis">{{item.adddress}}</dd>
                    <dd>
                        <dl class="cell">
                            <dd><span v-show="item.jnjg!=='0'">{{item.jnjg}}</span> 元/㎡·天</dd>
                            <dd><i style="display: block" v-show="item.mj1!=='0.0'">{{item.mj1}} - {{item.mj2}}㎡</i></dd>
                        </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </a>
            <router-link class="supply_box" :to="{path:'/zuodong_list/'+item.id}"></router-link>
          </li>
        </ul>
        <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
      <div class="mask" id="maskEl" @click="closeFilter"
           :class="{show:this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'||this.currentFilterTab=='features'}">
      </div>
    </section>
    <!--context end-->

    <!--遮罩和底部筛选-->
    <div class="shadow"></div>
    <div class="float-part" id="msg_super_wrap">
      <div class="msg_progress_bar">
        <div class="finish_bar"></div>
        <span class="pr">信息完成比例</span>
        <span class="progress_text">{{progress}}</span>
      </div>
      <div class="line-one clearfix">
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_basic/'+lpid}" >
          <i class="basic_01"></i>
          <span>基本信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_households/'+lpid}">
          <i class="basic_04"></i>
          <span>户数信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_property/'+lpid}">
          <i class="basic_08"></i>
          <span>物业信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_area/'+lpid}">
          <i class="basic_03"></i>
          <span>面积信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_parking/'+lpid}">
          <i class="basic_10"></i>
          <span>车位信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/loupan_image/'+lpid}">
          <i class="basic_06"></i>
          <span>图片信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/loupan_analyse/'+lpid}">
          <i class="basic_12"></i>
          <span>楼盘分析</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/zuodong_list/'+lpid}">
          <i class="basic_11"></i>
          <span>座栋信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/fang_list/'+lpid}">
          <i class="basic_09"></i>
          <span>房源信息</span>
        </router-link>
        <a class="bulid_msg_item" href="#" @click.stop.prevent="toDetail">
          <i class="basic_13"></i>
          <span>楼盘预览</span>
        </a>
      </div>

      <div class="close" id="close_msg">&times;</div>
    </div>

  </div>
</template>
<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import {Actionsheet} from 'mint-ui';
  import {Search} from 'mint-ui';
  import axios from 'axios';
  import qs from 'qs';
  export default {
    components: {
      header1,
      footer1,
      InfiniteScroll,
      Toast,
      Actionsheet,
      Search
    },

    data () {
      return {
        lpid:"",
        districtArray: [],
        priceArray: [],
        sizeArray: [],
        subBusiness: [],

        currentFilterTab: 'nth',
        curTab: 'nth',
        priceFilterTab: 'p',
        loading: false,
        noMore: false,
        checked: false,
        price1: '',
        price2: '',
        size1: '',
        size2: '',
        para: {
          "search_keywork": "",
          "district": "",
          "business": "",
          "line_id": "",
          "station_id": "",
          "area": "",
          "price_dj": "",
          "price_zj": "",
          "label": "",
          "orderby": "D",
          "curr_page": 1,
          "items_perpage": 10,
        },
        resultData: [],
        progress: "0%"
      }
    },
    mounted(){
      this.init();

      //下滑时，条件tab固定
      $(window).scroll(function () {
        if ($(window).scrollTop() > 0) {
          $('.filtate-outter').css({
            position: 'fixed',
            top: '.88rem',
            left: 0
          });

          $('#pos_block').show();

        } else {
          $('.filtate-outter').css({
            position: 'relative',
            top: 0,
            left: 0
          });
          $('#pos_block').hide();
        }
      });

      $('#close_msg,.shadow').click(function (e) {
        e.stopPropagation();
        $('#msg_super_wrap').animate({
          bottom: '-100%'
        });
        $('.shadow').hide();
      });

    },
    created: function () {

    },
    computed: {
      unitword(){
        if (this.priceFilterTab === 'p') {
          return "元/天";
        } else {
          return "万元/月";
        }
      }
    },
    methods: {
      init(){
        this.para.search_keywork = this.$route.query.keyword;
        axios.defaults.baseURL = this.$api;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        this.resetGetData();
        this.getFilters();
      },
      toDetail(){
          const location = "http://wx.urskongjian.com:5000/#/detail?building_id=" + this.lpid;
          setTimeout(function(){
              window.location = location;
          }, 200);
      },
      getProgress(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getLpwcblxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":this.lpid},"foreEndType":2,"code":"300000086"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.progress = data.wcbl + "%";
          }, (res)=>{
            Indicator.close()
            that.progress = "10%";
          });
      },
      searchSubDistrict:function(code,e){
        this.curTab = "d";
        Indicator.open({
           text: '', 
           spinnerType: 'fading-circle'
        }); 

        const li = $(e.target).parent("li"), txt = $(li).find("a").text();
        li.addClass("highlight").siblings().removeClass("highlight");
        //this.where = txt;

        var paraObj = {"parameters":{"district":code},"foreEndType":2,"code":"300000012"}, this_ = this;
        axios.post('/yhcms/web/lpjbxx/getLpYwqyFq.do', paraObj)
          .then(function (response) {
            Indicator.close();
            this_.subBusiness = [{"id":code,"fdname":"不限"}].concat(response.data.data.ywfq);
          }).catch(function (error) {
            Indicator.close();
        }); 
      },
      closeFilter: function () {
        this.currentFilterTab = 'nth';
      },
      changeRou: function () {
        this.$router.push({path: '/search?rt=index'})
      },
      searchChoose: function (code, val, value, e) {
        switch ($(e.target).closest('li').attr('data-type')) {
          case 'district':
            $('h2.district-h').html(value);
            if(value==='不限'){
                this.para.district = code;
                this.para.business = "";
            }
            else{
                this.para.district = "";
                this.para.business = code; 
            }
            break;
          case 'size':
            $('h2.area-h').html(value);
            if(value === '不限'){
                this.para.area = "";
            }
            else{
                this.para.area = JSON.stringify([parseFloat(val.split('-')[0]), parseFloat(val.split('-')[1])]);
            }
            break;
          case 'price':
            $('h2.price-h').html(value);
            if(value === '不限'){
                this.para.price_dj = "";
            }
            else{
                this.para.price_dj = JSON.stringify([parseFloat(val.split('-')[0]), parseFloat(val.split('-')[1])]);
            }
            break;
          default:
        }
        this.currentFilterTab = 'nth';
        Indicator.open({
          text: '',
          spinnerType: 'fading-circle'
        });
        this.resultData = [];
        this.para.curr_page = 1;
        this.getData();
      },
      getFilters: function () {
        const that = this;
        const url = this.$api + "/yhcms/web/jcsj/getTj.do";
        axios.post(url, {})
          .then(function (response) {
            that.districtArray = response.data.data.business;
            that.sizeArray = response.data.data.range_areas;
            that.priceArray = response.data.data.range_unit_prices;
          }).catch(function (error) {

        });
      },
      chooseFilter: function (e) {
        var e = e || window.event;
        this.currentFilterTab = $(e.target).closest('li').attr('data-type')
      },
      resetGetData: function () {
        var paraObj = {
          "parameters": {
            "search_keywork": this.para.search_keywork,
            "district": this.para.district,
            "business": this.para.business,
            "area": this.para.area,
            "price_dj": this.para.price_dj,
            "curr_page": this.para.curr_page,
            "items_perpage": 10
          },
          "foreEndType": 2,
          "code": "30000001"
        }, this_ = this;
        let successCb = function (result) {
          Indicator.close();
          if (result.data.data.length < this_.para.items_perpage) {
            this_.noMore = true;
          }
          this_.resultData = this_.resultData.concat(result.data.data)
          if (this_.resultData.length == 0) {
            Toast({
              message: '抱歉,暂无符合条件的楼盘!',
              position: 'middle',
              duration: 3000
            });
          }
        };
        let errorCb = function (result) {
          Indicator.close();
          Toast({
            message: '抱歉,暂无符合条件的楼盘!',
            position: 'middle',
            duration: 3000
          });
        };
        Indicator.open({
          text: '',
          spinnerType: 'fading-circle'
        });
        this.resultData = [];
        this.para.curr_page = 1;
        this.gRemoteData(paraObj, successCb, errorCb);
      },
      selfInputPrice: function () {
        if (parseInt(parseFloat(this.price1)*100) < parseInt(parseFloat(this.price2) * 100)) {
            this.para.price_dj = JSON.stringify([parseFloat(this.price1), parseFloat(this.price2)]);
            this.para.curr_page = 1;
            this.resultData = [];
            this.getData();
        } 
        else {
          Toast({
            message: '请输入合理价格',
            position: 'middle',
            duration: 2000
          });
        }
      },
      selfInputSize: function () {
        if (parseInt(parseFloat(this.size1)*100) < parseInt(parseFloat(this.size2) * 100)) {
          this.para.area = JSON.stringify([parseFloat(this.size1), parseFloat(this.size2)]);
            this.para.curr_page = 1;
            this.resultData = [];
          this.getData();
        } else {
          Toast({
            message: '请输入合理面积数字',
            position: 'middle',
            duration: 2000
          });
        }
      },

      getData(){
        var paraObj = {
          "parameters": {
            "search_keywork": this.para.search_keywork,
            "district": this.para.district,
            "business": this.para.business,
            "area": this.para.area,
            "price_dj": this.para.price_dj,
            "curr_page": this.para.curr_page,
            "items_perpage": 10
          },
          "foreEndType": 2,
          "code": "30000001"
        }, that = this;
        this.currentFilterTab = 'nth';
        let successCb = function (result) {
          Indicator.close();
          that.loading = false;
          that.resultData = that.resultData.concat(result.data.data);
          if (!result.data.data || result.data.data.length <= 0) {
            this_.noMore = true;
          }
          if (that.resultData.length == 0) {
            Toast({
              message: '抱歉,暂无符合条件的楼盘!',
              position: 'middle',
              duration: 3000
            });
          } else if (that.resultData.length > 0 && that.noMore) {
            Toast({
              message: '已经获得当前条件的所有楼盘!',
              position: 'middle',
              duration: 3000
            });
          }
        };
        let errorCb = function (result) {
          Indicator.close();
          Toast({
            message: '抱歉,暂无符合条件的楼盘!',
            position: 'middle',
            duration: 3000
          });
        };
        this.gRemoteData(paraObj, successCb, errorCb);
      },
      gRemoteData(paraobj, successcb, errorcb){
        const url = this.$api + "/yhcms/web/lpjbxx/getLplb.do";
        axios.post(url, paraobj)
          .then(function (response) {
            if (typeof successcb === "function") {
              successcb(response)
            }
          }).catch(function (error) {
          if (typeof errorcb === "function") {
            errorcb(error)
          }
        });
      },
      loadMore(){
        if (!this.loading && !this.noMore) {
          this.loading = true;
          this.para.curr_page += 1;
          this.getData();
        }
      },

      shadowShow(event){
        $('.shadow').show();
        const evt = (event || window.event), target = (evt.target || evt.srcElement), href = $(target).parents("a"), lpid=$(href).attr("lpid");
        this.lpid = lpid;
        this.getProgress();
        $('#msg_super_wrap').animate({
          bottom: 0
        });
      }
    },
    watch: {
      '$route' (to, from) {
        if (to['query']['keyword']) {
          this.para.search_keywork = to['query']['keyword'];
          this.resetGetData();
        }
      },
    }
  }
</script>
