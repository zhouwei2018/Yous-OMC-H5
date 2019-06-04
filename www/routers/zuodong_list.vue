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
      <section>
       <div>
        <!--筛选结果start-->
        <ul
          v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="20"
          infinite-scroll-immediate-check="checked">
          <li class="ys_listcon pv15 clearfix" v-for="item in resultData">
            <a href="javascript:;" class="supply_box" :zdid="item.id" @click="shadowShow">
              <dl class="supply">
                <dt>
                  <img v-if="item.pic" :src="$prefix + '/' + item.pic">
                  <img v-else :src="$prefix + '/upload/2017-08-27/6404b4de960b81fc5403c870aefcea34.png'">
                </dt>
                <dd class="supply_msg_box clearfix">
                  <dl>
                    <dd class="supply_house">{{item.topic}}&nbsp;&nbsp;{{item.zdh}}</dd>
                    <dd class="supply_color ellipsis">{{item.adddress}}</dd>
                    <dd>
                        <dl class="cell">
                            <dd><span v-show="item.jnjg!=='0'">{{item.jnjg}}</span> 元/㎡·天</dd>
                            <dd><i style="display: block" v-show="item.mj1">{{item.mj1}} - {{item.mj2}}㎡</i></dd>
                        </dl>
                    </dd>
                  </dl>
                </dd>
              </dl>
            </a>
            <router-link class="supply_box" :to="{path:'/fang_list/'+lpid+'/'+item.id}"></router-link>
          </li>
        </ul>
        <p v-if="loading" class="page-infinite-loading">
          <mt-spinner type="fading-circle"></mt-spinner>
        </p>
      </div>
    </section>
    <!--context end-->

    <!--遮罩和底部筛选-->
    <div class="shadow"></div>
    <div class="float-part" id="msg_super_wrap">
      <div class="line-one clearfix">
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_basic/'+ this.lpid + '/' + zdid}" >
          <i class="basic_01"></i>
          <span>基本信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_elevator/'+zdid}">
          <i class="basic_02"></i>
          <span>电梯信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_area/'+zdid}">
          <i class="basic_03"></i>
          <span>面积信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_households/'+zdid}">
          <i class="basic_04"></i>
          <span>户数信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_price/'+zdid}">
          <i class="basic_05"></i>
          <span>价格信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/zuodong_image/'+zdid}">
          <i class="basic_06"></i>
          <span>图片信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_rent/'+zdid}">
          <i class="basic_07"></i>
          <span>租赁部信息</span>
        </router-link>
        <router-link class="bulid_msg_item" v-show="false"  :to="{path:'/zuodong_property/'+zdid}">
          <i class="basic_08"></i>
          <span>物业信息</span>
        </router-link>
        <router-link class="bulid_msg_item" :to="{path:'/fang_list/'+ this.lpid + '/' + zdid}">
          <i class="basic_09"></i>
          <span>房源信息</span>
        </router-link>
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
        lpid: "",
        zdid:"",
        loading: false,
        noMore: false,
        resultData: [],
        districtArray: [],
        priceArray: [],
        sizeArray: [],
        subBusiness: [],
        para: {
          "district": "",
          "business": "",
          "area": "",
          "price_dj": "",
          "curr_page": 1,
          "items_perpage": 10,
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
    methods: {
      init(){

        const lpid = this.$route.params.lpid;
        this.lpid = lpid;
        
        sessionStorage.setItem("zd-lp", lpid);
        axios.defaults.baseURL = this.$api;
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

        this.getData();
      },
      getProgress(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdwcblxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":this.zdid},"foreEndType":2,"code":"300000087"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.progress = data.wcbl + "%";
          }, (res)=>{
            Indicator.close()
            that.progress = "10%";
          });
      },
      getData(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
        var paraObj = {
          "parameters": {
            "lpid": this.lpid,
            "price_dj": this.para.price_dj,
            "area": this.para.area,
            "district": this.para.district,
            "business": this.para.business,
            "curr_page": this.para.curr_page,
            "items_perpage": 10
          },
          "foreEndType": 2,
          "code": "300000060"
        }, that = this;
        
        axios.post("/yhcms/web/lpzdxx/getLpZd.do", paraObj)
          .then(function (response) {
            Indicator.close()
            that.loading = false;
            
            that.resultData = that.resultData.concat(response.data.data);

            if (!response.data.data || response.data.data.length <= 0 ) {
                that.noMore = true;
            }
            if (that.resultData.length == 0) {
              Toast({
                message: '抱歉,暂无符合条件的座栋!',
                position: 'middle',
                duration: 3000
              });
            } else if (that.resultData.length > 0 && that.noMore) {
            Toast({
              message: '已经获得当前条件的所有座栋!',
              position: 'middle',
              duration: 3000
            });
          }
          }).catch(function (error) {
            Indicator.close();
            Toast({
                message: '抱歉,暂无符合条件的座栋!',
                position: 'middle',
                duration: 3000
          });
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
        const evt = (event || window.event), target = (evt.target || evt.srcElement), href = $(target).parents("a"), zdid=$(href).attr("zdid");
        this.zdid = zdid;
        this.getProgress();
        $('#msg_super_wrap').animate({
          bottom: 0
        });
      }
    }
  }
</script>
