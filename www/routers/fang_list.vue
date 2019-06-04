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

/*  .supply_box dl dd{margin-left:.2rem}
  .supply_box dl dd dl > dd {margin-top:.5rem;margin-bottom:.5rem}
  */

.filt-open .warpper2{height:100%;overflow-y: scroll !important}
.cell > dd {float:left;margin-right:.2rem}
.supply_msg_box dd.supply_house{margin-top:.1rem !important}
dd.supply_msg_box > dl > dd{padding-bottom:.13rem !important}

  //遮罩内容
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
        &.basic_06 {
          background: url("../resources/images/icons/basic_icon/basic06.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_09 {
          background: url("../resources/images/icons/basic_icon/basic20.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_19 {
          background: url("../resources/images/icons/basic_icon/basic19.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_17 {
          background: url("../resources/images/icons/basic_icon/basic17.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_16 {
          background: url("../resources/images/icons/basic_icon/basic16.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_04 {
          background: url("../resources/images/icons/basic_icon/basic04.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_14 {
          background: url("../resources/images/icons/basic_icon/basic14.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_18 {
          background: url("../resources/images/icons/basic_icon/basic18.png") no-repeat;
          background-size: .65rem .55rem;
        }
        &.basic_13 {
          background: url("../resources/images/icons/basic_icon/basic13.png") no-repeat;
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

</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
      <input type="text" id="keyword" placeholder="请输入房源编号" maxlength="50" @focus="changeRou">
    </a>
    <router-view></router-view>
    <section class="section">
      <div class="option">
        <div class="filtate-outter">
          <div class="list-filtrate">

            <!--筛选条件标题开始-->
            <section class="filtrate-nav">
              <ul @click="chooseFilter($event)">
                <li data-role="filterItem" data-type="feature" :class="{'active-filter':this.currentFilterTab=='feature'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis area-h">筛选</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="district"
                    :class="{'active-filter':this.currentFilterTab=='district'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis district-h">区域</h2>
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
              <div class="filt-open" id="filter-feature" :class="{show:this.currentFilterTab=='feature'}">
                <div class="warpper box-flex1 bg-white">
                    <ul class="">
                        <li data-type="feature"
                            @click="searchChoose('','', '不限', $event)">
                          <a href="javascript:;">不限</a></li>
                        <li v-for="item in featureArray" data-type="feature"
                            @click="searchChoose('','0', '非航远房源', $event)"><a href="javascript:;">{{item.name}}</a>
                        <li data-type="feature"
                            @click="searchChoose('','1', '航远房源', $event)">
                          <a href="javascript:;">航远房源</a></li>
                    </li>
                    </ul>
                  <div id="price_filter" class="warpper2 box-flex1 bg-white">
                    <ul class="price-ul cut-height" :class="{show:this.curTab=='f'}">
                      <li v-for="item in subFeature" data-type="feature"
                          @click="searchChoose(item.id,'',item.name, $event)">
                        <a href="javascript:;">{{item.name}}</a></li>
                    </ul>
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
          <li class="ys_listcon pv15" v-for="item in resultData">
            <a href="javascript:;" class="supply_box" :fyid="item.id" @click="shadowShow">
              <dl class="supply">
                <dt>
                  <img v-if="item.pic" :src="$prefix + '/' + item.pic">
                  <img v-else :src="$prefix + '/upload/2017-08-27/6404b4de960b81fc5403c870aefcea34.png'">
                </dt>
                <dd class="supply_msg_box">
                  <dl>
                    <dd class="supply_house">{{item.topic}}&nbsp;&nbsp;{{item.fybh}}</dd>
                    <dd class="supply_color ellipsis">{{item.fjmj}}㎡</dd>
                    <dd>
                        <dl class="cell">
                            <dd><i style="display: block" v-show="item.ywqy">{{item.ywqy}}- {{item.fq}}</i></dd>
                        </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </a>
          </li>
        </ul>
        <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
      <div class="mask" id="maskEl" @click="closeFilter"
           :class="{show:this.currentFilterTab=='district'||this.currentFilterTab=='feature'}">
      </div>
    </section>
    <!--context end-->

    <!--遮罩和底部筛选-->
    <div class="shadow"></div>
    <div class="float-part" id="msg_super_wrap">
      <div class="line-one clearfix">
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_basic/'+ this.lpid + '/' + fyid}" >
          <i class="basic_01"></i>
          <span>基本信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_struct/'+fyid}">
          <i class="basic_19"></i>
          <span>构造信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_owner/'+fyid}">
          <i class="basic_17"></i>
          <span>业主信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_agenter/'+fyid}">
          <i class="basic_16"></i>
          <span>代理人信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_renter/'+fyid}">
          <i class="basic_04"></i>
          <span>租户信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/fang_image/'+fyid}">
          <i class="basic_06"></i>
          <span>图片信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_analyse/'+fyid}">
          <i class="basic_14"></i>
          <span>房源分析</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_decor/'+fyid}">
          <i class="basic_18"></i>
          <span>装修状况</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false" :to="{path:'/fang_reg/'+fyid}">
          <i class="basic_13"></i>
          <span>注册信息</span>
        </router-link>
        <a class="bulid_msg_item" href="#" @click.stop.prevent="toDetail">
          <i class="basic_09"></i>
          <span>房源预览</span>
        </a>
      </div>
      <div class="msg_progress_bar">
        <div class="finish_bar"></div>
        <span class="pr">信息完成比例</span>
        <span class="progress_text">{{progress}}</span>
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
        fyid: "",
        lpid: "",
        zdid:"",
        fybh: "",
        hystate: "",
        fhystate: "",
        business: "",
        fq: "",
        loading: false,
        noMore: false,
        currentFilterTab: 'nth',
        priceFilterTab: 'p',
        resultData: [],
        curTab: "",
        districtArray: [],
        subBusiness: [],
        featureArray: [{code:"0",name: "非航远房源"}],
        subFeature: [],
        para: {
          "curr_page": 1,
        },
        progress: ""
      }
    },
    mounted(){

      this.init();

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
        const lpid = this.$route.params.lpid, zdid = this.$route.params.zdid;
        this.lpid = lpid;
        this.zdid = zdid;

        sessionStorage.setItem("fy-lp", lpid);
        sessionStorage.setItem("fy-zd", zdid);

        axios.defaults.baseURL = this.$api;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

        this.fybh = this.$route.query.keyword;

        this.getFilters();
        this.getData();
      },
      closeFilter: function () {
          this.currentFilterTab = 'nth';
      },
      getProgress(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getFywcblxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":this.fyid},"foreEndType":2,"code":"300000088"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.progress = data.wcbl + "%";
          }, (res)=>{
            Indicator.close()
            that.progress = "10%";
          });
      },
      changeRou: function () {
        let link = '/search?rt=fang_list/'+this.lpid;
        if(this.zdid){
            link += '/' + this.zdid;
        }
        this.$router.push({path: link});
      },
      toDetail(){
          const location = "http://wx.urskongjian.com:5000/#/order?house_id=" + this.fyid;
          setTimeout(function(){
              window.location = location;
          }, 200);
      },
      searchChoose: function (code, val, value, e) {
        switch ($(e.target).closest('li').attr('data-type')) {
          case 'district':
            $('h2.district-h').html(value);
            if(value==='不限'){
                this.business = code;
                this.fq = "";
            }
            else{
                this.business = "";
                this.fq = code; 
            }
            break;
          case 'feature':
            $('h2.area-h').html(value);
            if(code === '' && val === ''){
                this.hystate = '';
                this.fhystate = "";
            }
            else if(value === '不限'){
                this.hystate = code;
                this.fhystate = "";
            }
            else if(code === '' ){
                this.hystate = val;
                this.fhystate = ''; 
            }
            else{
                this.hystate = '';
                this.fhystate = code; 
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
      getData(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
        var paraObj = {
          "parameters": {
            "lpid": this.lpid,
            "zdid": this.zdid,
            "fybh": this.fybh,
            "fyid": "",
            "hystate": this.hystate, 
            "fhystate": this.fhystate,
            "bussiness": this.business,
            "fq": this.fq,
            "curr_page": this.para.curr_page,
            "items_perpage": 10
          },
          "foreEndType": 2,
          "code": "300000065"
        }, that = this;
        
        axios.post("/yhcms/web/zdfyxx/getLpZdfyxx.do", paraObj)
          .then(function (response) {
            Indicator.close()
            that.loading = false;
            const data = response.data.data.data2;
            that.resultData = that.resultData.concat(data);

            if (data.length <= 0) {
                that.noMore = true;
            }
            if (that.resultData.length == 0) {
              Toast({
                message: '抱歉,暂无符合条件的房源!',
                position: 'middle',
                duration: 3000
              });
              return;
            } else if (that.resultData.length > 0 && that.noMore) {
            Toast({
              message: '已经获得当前条件的所有房源!',
              position: 'middle',
              duration: 3000
            });
          }
          }).catch(function (error) {
            Indicator.close();
            Toast({
                message: '抱歉,暂无符合条件的房源!',
                position: 'middle',
                duration: 3000
            });
        });
      },
      getFilters: function () {
        const that = this;
        const url = this.$api + "/yhcms/web/jcsj/getTj.do";
        axios.post(url, {})
          .then(function (response) {
            that.districtArray = response.data.data.business;
          }).catch(function (error) {
        });
      },
      searchFeature:function(code,e){
          this.curTab = "f";
          if(code === '0'){
              this.subFeature = [{id:"0",name:"不限"}, {id:"1",name:"可租房源"}, {id:"2",name:"无效房源"}, {id:"3",name:"已租房源"}];
          }
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
      loadMore(){
        if (!this.loading && !this.noMore) {
          this.loading = true;
          this.para.curr_page += 1;
          this.getData();
        }
      },
      chooseFilter: function (e) {
        var e = e || window.event;
        this.currentFilterTab = $(e.target).closest('li').attr('data-type')
      },
      shadowShow(event){
        $('.shadow').show();
        const evt = (event || window.event), target = (evt.target || evt.srcElement), href = $(target).parents("a"), fyid=$(href).attr("fyid");
        this.fyid = fyid;
        this.getProgress();
        $('#msg_super_wrap').animate({
          bottom: 0
        });
      }
    }
  }
</script>
