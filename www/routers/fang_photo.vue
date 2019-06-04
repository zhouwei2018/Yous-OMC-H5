<style type="text/css">
  /*解决加载中图标被遮挡问题*/
  .mint-indicator{position: relative;z-index: 99;}
</style>
<style scoped lang="less">
  @import "../resources/css/website/listx.less";
  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

.ys_item_con{margin-bottom:0.3rem}
.price-bot input{height:100% !important;width:30% !important}
.price-bot button{position:static !important;width:2rem !important;height:0.8rem !important}
.btn{float:left;width:50%;text-align:center}
.special{padding-left:0 !important}
.special .ys_item_con{display:block;width:100%}
.bg-white li{border-bottom:none !important}
.box-flex1{border-bottom:1px solid rgb(232, 232, 232);}
.bg_gray {
  padding: .3rem .02rem;
  height: auto !important
}
.supply_house{font-size:.3rem !important}
.ys_tit{line-height:0.8rem}
.ys_tag {
  display: inline-block;
  padding: 0 .25rem;
  height: .55rem;
  line-height: .55rem;
  background-color: #dbdadf;
  font-size: 0.24rem;
  margin-right: .08rem;
  margin-bottom: .08rem;
  border-radius: .1rem;
}
.supply_price{text-align:right;position: absolute;top: .7rem;}
.supply_price > span{font-size:.4rem !important;color:#e01222;}
.supply_price i{font-size:.23rem !important}
.supply_tag dd{padding:.03rem !important}
.active {
  background-color: #16abdc !important;
  color: #fff !important;
}
.supply_msg_box dd.supply_house{margin-top:-0.02rem !important}
.supply_msg_box > dl > dd{margin-bottom:0.15rem !important}
#filter-features{height:6rem;overflow-y:scroll}
#filter-features .warpper:last-child{margin-bottom:0.5rem}
.zc{background-color:#ef104e !important;color:#FFF !important;font-size: 0.5em !important;}
.highlight a{color:#476CBA !important}
.tagClass{font-size: 0.26rem !important;padding-left:.12rem;padding-right:.12rem;}
#filter-state ul li{padding-left:0 !important;margin-bottom:.1rem}
#filter-state ul li a{width:100%;text-align:center}
</style>
<template>
  <div>
    <!--header-->
    <section id="header">
      <header1></header1>
    </section>
    <!--<a href="javascript:;" class="detail-search" style="position: fixed;left: 0; top: 0">
      <input type="text" id="keyword" placeholder="请输入楼盘关键字搜索" v-model.trim="para.search_keywork" maxlength="50"
             @focus="changeRou">
    </a>-->
    <section class="section"
             :class="{'in-filter':this.currentFilterTab=='district'||this.currentFilterTab=='price'||this.currentFilterTab=='area'||this.currentFilterTab=='features'}">
      <div class="option">
        <div class="filtate-outter">
          <div class="list-filtrate">
            <!--筛选条件标题开始-->
            <section class="filtrate-nav">
              <ul @click="chooseFilter($event)">
                <li data-role="filterItem" data-type="district"
                    :class="{'active-filter':this.currentFilterTab=='district'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis district-h">位置</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
                <li data-role="filterItem" data-type="state" :class="{'active-filter':this.currentFilterTab=='state'}">
                  <a href="javascript:void(0);">
                    <h2 class="ellipsis state-h">状态</h2>
                    <i class="filt-arrow"></i>
                  </a>
                </li>
              </ul>
            </section>
            <!--筛选条件标题结束-->

            <!--筛选条件内容start-->
            <div class="filt-container">
              <div class="filt-open" id="filter-district" :class="{show:this.currentFilterTab=='district'}">
                <div class="warpper box-flex1 grey-bg price-height">
                  <ul>
                    <li class="price-sub" :class="{act:this.positionType=='a'}" @click="positionType='a';curTab=''">
                      <a href="javascript:void(0);" style="color: #302F35;">行政区域</a>
                    </li>
                    <li class="price-sub" :class="{act:this.positionType=='y'}" @click="positionType='y';curTab=''">
                      <a href="javascript:void(0);" style="color: #302F35;">业务区域</a>
                    </li>
                    <li class="price-sub" :class="{act:this.positionType=='l'}" @click="positionType='l';curTab=''">
                      <a href="javascript:void(0);" style="color: #302F35;">地铁</a>
                    </li>
                    <div id="position_filter" class="warpper2 box-flex1 bg-white" :class="{choose:this.curTab=='a'||this.curTab=='l'||this.curTab=='y'}">
                      <ul class="price-ul cut-height" :class="{show:this.positionType=='a'}">
                        <li data-type="positionA" @click="where='不限';subBuesiness=[];searchChoose('','','不限', $event)"><a href="javascript:;">不限</a></li>
                        <li v-for="item in govDistrictArray" data-type="positionA"
                            @click="searchSubArea(item.fdcode, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                      <ul class="price-ul cut-height" :class="{show:this.positionType=='y'}">
                        <li data-type="positionY" @click="where='不限';otherBusiness=[];searchChoose('','','不限', $event)"><a href="javascript:;">不限</a></li>
                        <li v-for="item in districtArray" data-type="positionY"
                            @click="searchArea(item.id, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                      <ul class="price-ul cut-height" :class="{show:this.positionType=='l'}">
                        <li data-type="positionL" @click="where='不限';stationArray=[];searchChoose('','','不限', $event)"><a href="javascript:;">不限</a></li>
                        <li v-for="item in lineArray" data-type="positionL"
                            @click="searchStation(item.id, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                    </div>
                    <!--二级联动-->
                    <div id="third-tab" class="warpper2 box-flex1 bg-white" :class="{show:this.curTab!=''&&this.thirdpart!=''}">
                      <ul class="price-ul cut-height" :class="{show:this.positionType=='a'}">
                        <li v-for="item in subBuesiness" data-type="positionA"
                            @click="searchChoose(item.fdcode,'',item.fdname, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                      <ul class="price-ul cut-height" :class="{show:this.positionType=='y'}">
                        <li v-for="item in otherBusiness" data-type="positionY"
                            @click="searchChoose(item.id,'',item.fdname, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                      <ul class="price-ul cut-height" :class="{show:this.curTab!=''&&this.thirdpart=='dt'}">
                        <li v-for="item in stationArray" data-type="positionL"
                            @click="searchChoose(item.id,'',item.fdname, $event)">
                          <a href="javascript:;">{{item.fdname}}</a></li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
              <!--三级联动-->
              <div class="filt-open" id="filter-state" :class="{show:this.currentFilterTab=='state'}">
                <div class="warpper box-flex1">
                  <ul class="box-flex1 bg-white cut-height">
                    <li v-for="item in stateArray" data-type="positionS" @click="searchChoose(item.val,'',item.name, $event)">
                          <a href="javascript:;">{{item.name}}</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <!--筛选条件内容end-->
          </div>
        </div>

        <!--筛选框fixed时替代div-->
        <div  id="pos_block"></div>

        <!--筛选结果start-->
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="100"
          infinite-scroll-immediate-check="checked">
          <li class="ys_listcon pv15" v-for="item in resultData">
            <router-link :to="{path:'/fang_detail',query:{house_id:item.id}}" class="supply_box">
              <div class="supply_price">
                <span>{{item.daily_price}}</span> 元/㎡·天
              </div>
              <dl class="supply">
                <dt>
                  <img v-if="item.housing_icon" :src="$prefix + '/' + item.housing_icon" :alt="item.topic">
                  <img v-else :src="$prefix + '/upload/2017-08-27/6404b4de960b81fc5403c870aefcea34.png'" :alt="item.topic">
                </dt>
                <dd class="supply_msg_box clearfix">
                  <dl>
                    <dd v-if="item.zdh.indexOf('独栋') > -1" class="supply_house">{{item.topic}}&nbsp;&nbsp;<label v-if="item.decoration_level == '预租房'">即将上线</label><label v-else>{{item.fybh}}</label></dd>
                    <dd v-else>{{item.topic}}&nbsp;&nbsp;<label v-if="item.decoration_level == '预租房'">即将上线</label><label v-else>{{item.zdh}} - {{item.fybh}}</label></dd>
                    <dd v-if="item.district == ''" class="supply_color ellipsis">暂无数据</dd>
                    <dd v-else class="supply_color ellipsis">{{item.district}}</dd>
                    <dd>
                      <dl class="supply_tag clearfix">
                        <dd class="tagClass">{{item.housing_area}}㎡</dd>
                        <!--<dd class="tagClass">{{item.lc}}层</dd>-->
                        <dd v-if="item.decoration_level == '预租房'" class="tagClass"></dd><dd v-else-if="item.lc" class="tagClass">{{item.lc}}层</dd>
                        <dd class="tagClass zc" style="margin-top: 0.2em !important;padding-left: .5em !important;padding-right: .5em !important;margin-left: .5em !important;font-size: 0.22rem !important;">{{item.decoration_level}}</dd>
                      </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </router-link>
          </li>
        </ul>
        <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
      <div class="mask" id="maskEl" @click="closeFilter"
           :class="{show:this.currentFilterTab=='district'||this.currentFilterTab=='state'}">
      </div>
    </section>
  </div>
</template>
<script>
  import header1 from '../components/header.vue';
  import footer1 from '../components/footer.vue';
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';
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
        districtArray: [],
        govDistrictArray: [],
        lineArray:[],
        subBuesiness:[],
        otherBusiness:[],
        stationArray:[],
        stateArray:[{val:"", name:"全部"},{val:"2", name:"未到期可看"},{val:"4", name:"未到期不可看"},{val:"3", name:"空房装修中"},{val:"1", name:"精装交付"},{val:"5", name:"预租房"}],
        curTab:'',
        thirdpart:'',
        currentFilterTab: 'nth',
        priceFilterTab: 'p',
        positionType:'a',
        loading: false,
        noMore: false,
        checked: false,
        para: {
          "search_keywork": "",
          "district": "",
          "business": "",
          "district1": "",
          "business1": "",
          "line_id": "",
          "station_id": "",
          "curr_page": 1,
          "items_perpage": 10,
          "zlzt": ""
        },
        resultData: [],
        where: ""
      }
    },
    mounted(){
      $("body").removeAttr("style");
      $("html").removeAttr("style");
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
        axios.defaults.baseURL = this.$api; 
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
        if(this.$route['query']['keyword']){
          this.para.search_keywork = this.$route['query']['keyword'];
        }

        Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
        });

        this.resetGetData();
        this.getFilters();

        Indicator.close();
        
        $('title').html('图片上传');
      },
      searchSubArea:function(code,e){
        this.curTab = "a";
        this.thirdpart = "sq";
        Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
        });
        const li = $(e.target).closest("li"), txt = $(li).find("a").text();
        li.addClass("highlight").siblings().removeClass("highlight");
        this.where = txt;

        var paraObj = {"parameters":{"district":code},"foreEndType":2,"code":"300000010"}, this_ = this;
        axios.post('/yhcms/web/lpjbxx/getLpXzqyFq.do', paraObj)
          .then(function (response) {
            Indicator.close();
            this_.subBuesiness = [{"fdcode":code,"fdname":"不限"}].concat(response.data.data.xzfq);
          }).catch(function (error) {
            Indicator.close();
        });
      },
      searchArea:function(code,e){
        this.curTab = "y";
        this.thirdpart = "sq";
        Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
        });

        const li = $(e.target).closest("li"), txt = $(li).find("a").text();
        li.addClass("highlight").siblings().removeClass("highlight");
        this.where = txt;

        var paraObj = {"parameters":{"district":code},"foreEndType":2,"code":"300000012"}, this_ = this;
        axios.post('/yhcms/web/lpjbxx/getLpYwqyFq.do', paraObj)
          .then(function (response) {
            Indicator.close();
            this_.otherBusiness = [{"id":code,"fdname":"不限"}].concat(response.data.data.ywfq);
          }).catch(function (error) {
            Indicator.close();
        });
      },
      searchStation:function(line,e){
        this.curTab = "l";
        this.thirdpart = "dt";
        Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
        });

        const li = $(e.target).closest("li"), txt = $(li).find("a").text();
        li.addClass("highlight").siblings().removeClass("highlight");
        this.where = txt;

        var paraObj = {"parameters":{"line_id":line},"foreEndType":2,"code":"30000008"}, this_ = this;
        axios.post('/yhcms/web/lpjbxx/getLpSubwaystation.do', paraObj)
          .then(function (response) {
            Indicator.close();
            this_.stationArray = [{"id":line,"fdname":"不限"}].concat(response.data.data.subway_station);
          }).catch(function (error) {
            Indicator.close();
        });
      },
      setStateFilter(e){
          const li = $(e.target).closest("li");
          $(li).addClass("highlight").toggleClass("active-filter");
      },
      closeFilter: function () {
        this.currentFilterTab = 'nth';
      },
      changeRou: function () {
        this.$router.push({path: '/filter'})
      },
      searchChoose: function (code, val, value, e) {
        const li = $(e.target).closest('li');
        li.addClass("highlight").siblings().removeClass("highlight");

        switch (li.attr('data-type')) {
          case 'positionA':
            //行政区域
            $('h2.district-h').html(value);
            if(value==="不限"){
                this.para.district1 = code;
                this.para.business1 = "";
                $('h2.district-h').html(this.where || value);
            }
            else{
                this.para.business1 = code;
                this.para.district1 = "";
            }
            this.para.business = "";
            this.para.district = "";

            this.para.line_id = '';
            this.para.station_id = '';
            break;
          case 'positionY':
            //业务区域
            $('h2.district-h').html(value);
            if(value==="不限"){
                this.para.district = code;
                this.para.business = "";
                $('h2.district-h').html(this.where || value);
            }
            else{
                this.para.business = code;
                this.para.district = "";
            }
            this.para.business1 = "";
            this.para.district1 = "";
            this.para.line_id = '';
            this.para.station_id = '';
            break;
          case 'positionL':
            $('h2.district-h').html(value);
            if(value==="不限"){
                this.para.line_id = code;
                this.para.station_id = "";
                $('h2.district-h').html(this.where || value);
            }
            else{
                this.para.line_id = "";
                this.para.station_id = code;
            }
            this.para.business = '';
            this.para.district = '';
            this.para.business1 = '';
            this.para.district1 = '';
            break;
          case 'positionS':
            $('h2.state-h').html(value);
            this.para.zlzt = code; 
            break;
          default:
            break;
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
      getGovDistrict(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getLpcity.do";
          let that = this;
          this.$http.post(url).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.govDistrictArray = data.xzqy;
          }, (res)=>{
            Indicator.close()
          });
      },
      getDistrict(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getLpBusiness.do";
          let that = this;
          this.$http.post(url).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.districtArray = data.ywqy;
          }, (res)=>{
            Indicator.close()
          });
      },
      getLines(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/lpsubway.do";
          let that = this;
          this.$http.post(url).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.lineArray = data.subway;
          }, (res)=>{
            Indicator.close()
          });
      },
      getFilters: function () {
        this.getGovDistrict();
        this.getDistrict();
        this.getLines();
      },
      chooseFilter: function (e) {
        var e = e || window.event;
        const li = $(e.target).closest('li');
        this.currentFilterTab = li.attr('data-type');
        $(li).siblings().removeClass("active-filter");
        $(li).siblings().removeClass("highlight");
      },
      resetGetData: function () {
        this.noMore = false;
        this.loading = false;

        this.para.curr_page = 1;
        this.resultData = [];
        this.getData();
      },
      getData(){
        const paraObj = {
          "parameters": {
            "search_keywork": this.para.search_keywork,
            "district": this.para.district,
            "business": this.para.business,
            "district1": this.para.district1,
            "business1": this.para.business1,
            "line_id": this.para.line_id,
            "station_id": this.para.station_id,
            "curr_page": this.para.curr_page,
            "zlzt": this.para.zlzt,
            "items_perpage": 10
          },
          "foreEndType": 2,
          "code": "30000001"
        }, this_ = this;

        this.currentFilterTab = 'nth';
        let successCb = function (result) {
          Indicator.close();
          this_.loading = false;
          this_.resultData = this_.resultData.concat(result.data.data);
          console.log(this_.resultData);
          if (result.data.data.buildings < this_.para.items_perpage) {
            this_.noMore = true;
          }
          if (this_.resultData.length <= 0) {
            Toast({
              message: '抱歉,暂无符合条件的房源!',
              position: 'middle',
              duration: 3000
            });
          } else if (this_.resultData.length > 0 && result.data.data.length == 0) {
            Toast({
              message: '已经获得当前条件的所有房源!',
              position: 'middle',
              duration: 3000
            });
          }
        };
        let errorCb = function (result) {
          Indicator.close();
          this_.loading = false;
          Toast({
            message: '抱歉,暂无符合条件的房源!',
            position: 'middle',
            duration: 3000
          });
        };

        Indicator.open({
           text: '',
           spinnerType: 'fading-circle'
        });
        this.gRemoteData(paraObj, successCb, errorCb);
      },

      gRemoteData(paraobj, successcb, errorcb){
        axios.post('/yhcms/web/zdfyxx/getWxLbFyxx.do', paraobj)
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
      }
    },
  }
</script>
