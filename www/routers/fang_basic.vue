<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/elevator_msg.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }
  .ys_item_ul li{
    position: relative;
  }
  .shyt{width:100% !important}

</style>
<template>
  <div class="all_elements">
    <div class="build_top ele_wrap">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">房号：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" v-model.trim="fybh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房源别名：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model.trim="fyname" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" value=""  v-model.trim="lc" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w170">是否为商铺：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio"  value="1" v-model.trim="sfshp" name="shop_type">是</label>
            <label ><input type="radio" value="0" v-model.trim="sfshp"  name="shop_type">否</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">商铺类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model.trim="shplx" readonly="readonly" placeholder="请选择" @click="openBtype">
            <i class="right_arrow" @click="openBtype">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">产权年限：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model.trim="chqnx" value="1" name="rights_year">40</label>
            <label class="mr20"><input type="radio" v-model.trim="chqnx" value="2" name="rights_year">50</label>
            <label ><input type="radio" v-model.trim="chqnx" value="70" name="rights_year">70</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">朝向：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model.trim="chx" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">装修水平：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" readonly="readonly" v-model.trim="zxsp" placeholder="请选择" @click="openDecorationType">
            <i class="right_arrow" @click="openDecorationType">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">抵押状态：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model.trim="dyzt" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">业主属性：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model.trim="yzsx" value="1" name="owner_type">小业主</label>
            <label ><input type="radio" v-model.trim="yzsx" value="2" name="owner_type">开发商</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">航远房源：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model.trim="hystate" value="1" name="hy_type">是</label>
            <label ><input type="radio"  v-model.trim="hystate" value="0" name="hy_type">否</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">是否有租户：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model.trim="sfzh" value="1" name="rent_num">是</label>
            <label ><input type="radio" v-model.trim="sfzh" value="0"  name="rent_num">否</label>
          </div>
        </li>

        <li class="clearfix pr mb20">
          <span class="ys_tit">空置时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期"  v-model.trim="kzsj" @click="openPicker()">
            <i class="calendar_icon"  @click="openPicker()"></i>
          </div>
        </li>

        <li class="clearfix pr border_top">
          <span class="ys_tit w224">参考租赁价格：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model.trim="ckzljg">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主期望租金：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model.trim="qwzj">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主租金底价：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model.trim="zjdj">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">适合业态：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">{{yt_t}}</a></div>
        </li>
        <li class="clearfix bg_gray">
          <div class="shyt ys_item_con fl" @click="selectTag($event)">
            <span v-for="yt in yt_all" class="ys_tag" :class="{'active': shyt.indexOf(yt.id) > -1}" :value="yt.id" >{{yt.name}}</span>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">车位：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model.trim="chwlx" value="1"  name="parking_type">车库</label>
            <label class="mr20"><input type="radio" v-model.trim="chwlx" value="2" name="parking_type">地面</label>
            <label ><input type="radio" v-model.trim="chwlx" value="3" name="parking_type">无</label>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveInfo">保存</a>
    </div>

    <!--商铺类型-->
    <mt-popup v-model.trim="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype">确定</span>
      </div>
      <mt-picker :slots="slots_bType" @change="selectLevel"></mt-picker>
    </mt-popup>

    <!--装修水平-->
    <mt-popup v-model.trim="popupVisible2" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype2">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype2">确定</span>
      </div>
      <mt-picker :slots="slots_bType2" @change="selectLevel2"></mt-picker>
    </mt-popup>

    <!--日期选择-->
    <mt-datetime-picker
      ref="picker"
      v-model.trim="pickerValue"
      type="date"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      :startDate="startDate"
      @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast
  import { Indicator} from 'mint-ui'; //toast
  import { MessageBox } from 'mint-ui'; //弹窗
  import {DatetimePicker} from 'mint-ui';  //日期选择
  import {Popup} from 'mint-ui'; //弹窗
  export default {
    components: {
      Toast,
      MessageBox,
      DatetimePicker,
      Popup
    },

    data () {
      return {
        "id": "",
        "lpid": "",
        "zdid": "",
        "zdh": "",
        "gzys": "",
        "fybh": "",
        "fyname": "",
        "lc": "",
        "zglc": "",
        "sfshp": "",
        "shplx": "",
        "chqnx": "",
        "chx": "",
        "zxsp": "",
        "dyzt": "",
        "yzsx": "",
        "hystate": "",
        "sfzh": "",
        "kzsj": "",
        "qzsj": "",
        "qwzj": "",
        "ckzljg": "",
        "zjdj": "",
        "shyt": [],
        "chwlx": "", 

           //日期
          pickerValue: '',
          startDate: new Date(),

          popupVisible:false,
          popupVisible2:false,
          popupx:false,
          slots_bType: [
          {
            values: ['内铺','临街内铺', '商场内铺', '小区内铺'],
          }
        ],
          slots_bType2: [
          {
            values: ['全部','简单', '普通', '豪华'],
          }
        ],
        yt_all: [{"name":"金融投资","id":"1"},{"name":"文化传媒","id":"2"},{"name":"教育培训","id":"3"},{"name":"休闲娱乐","id":"4"},{"name":"IT互联网","id":"5"},{"name":"机构组织","id":"6"},{"name":"专业服务","id":"7"},{"name":"贸易","id":"8"},{"name":"医药医疗","id":"9"},{"name":"多元化集团","id":"10"},{"name":"综合","id":"11"},{"name":"其它","id":"12"}]
      }
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      },
      handleConfirm(value){
        this.kzsj = this.transformDate(value);
      },

      openBtype() {
        this.shplx = "商场内铺";
        this.popupVisible = true;
      },
      //关闭底部
      sureBtype(){
        this.popupVisible = false;
      },
      //选择赋值
      selectLevel(picker, values) {
        this.shplx = values[0];
      },

      //打开底部2
      openDecorationType() {
        this.zxsp = "普通";
        this.popupVisible2 = true;
      },
      //关闭底部2
      sureBtype2(){
        this.popupVisible2 = false;
      },
      //选择赋值2
      selectLevel2(picker, values) {
        this.zxsp = values[0];
      },

      //日期转换
      transformDate: function (date) {
        var str = '';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        str = year + '-' + this.addZero(month) + '-' + this.addZero(day);
        return str;
      },
      //补零
      addZero(n){
        return n = n < 10 ? '0' + n : '' + n;
      },

      selectTag(e){
        const target = $(e.target), val = target.attr("value");
        if(!val){return;}

        if ($(e.target).hasClass('active')) {
          let shyt_t = new Set(this.shyt);
          shyt_t.delete(val);
          this.shyt = [...shyt_t];

          $(e.target).removeClass('active');
        } else {
          let shyt_t = new Set(this.shyt);
          shyt_t.add(val);
          this.shyt = [...shyt_t];

          $(e.target).addClass('active');
        }
      },
      getInitData(){
          const fyid = this.$route.params.fyid, lpid = this.$route.params.lpid;
          this.id = fyid;
          this.lpid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfyxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{"id":fyid, "lpid": lpid},"foreEndType":2,"code":"300000064"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zdid = data.zdid;
            that.zdh = data.zdh;
            that.gzys = data.gzys;
            that.fybh = data.fybh;
            that.fyname = data.fyname;
            that.lc = data.lc;
            that.zglc = data.zglc;
            that.sfshp = data.sfshp;
            that.shplx = data.shplx;
            that.chqnx = data.chqnx;
            that.chx = data.chx;
            that.zxsp = data.zxsp;
            that.dyzt = data.dyzt;
            that.yzsx = data.yzsx;
            that.hystate = data.hystate;
            that.sfzh = data.sfzh;
            that.kzsj = data.kzsj;
            that.qzsj = data.qzsj;
            that.qwzj = data.qwzj;
            that.ckzljg = data.ckzljg;
            that.zjdj = data.zjdj;
            let shyt = data.shyt ? data.shyt.split(";"):[];
            that.shyt = shyt;
            that.chwlx = data.chwlx;
          }, (res)=>{
            Indicator.close()
          });
      },

      saveInfo(){
        var _this = this;
        if(!this.fybh){
          MessageBox('提示', '请输入房号!');
          return;
        }else if(!this.fyname){
          MessageBox('提示', '房源别名!');
          return;
        }else if(!this.lc){
          MessageBox('提示', '请输入楼层!');
          return;
        }else if(!this.chx){
          MessageBox('提示', '请输入朝向!');
          return;
        }else if(!this.dyzt){
          MessageBox('提示', '请输入抵押状态!');
          return;
        }else if(!this.kzsj){
          MessageBox('提示', '请选择空置时间!');
          return;
        }else if(!this.ckzljg){
          MessageBox('提示', '请输入参考租赁价格!');
          return;
        }else if(!this.qwzj){
          MessageBox('提示', '请输入业主期望租金!');
          return;
        }else if(!this.zjdj){
          MessageBox('提示', '请输入业主租金底价!');
          return;
        }else if(this.shyt.length < 1){
          MessageBox('提示', '适合业态!');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/zdfyxx/saveZdfyxx.do",
          {
            "parameters": {
                id: this.id,
                lpid: this.lpid,
                zdid: this.zdid,
                zdh: this.zdh,
                gzys: this.gzys,
                fybh: this.fybh,
                fyname: this.fyname,
                lc: this.lc,
                zglc: this.zglc,
                sfshp: this.sfshp,
                shplx: this.shplx,
                chqnx: this.chqnx,
                chx: this.chx,
                zxsp: this.zxsp,
                dyzt: this.dyzt,
                yzsx: this.yzsx,
                hystate: this.hystate,
                sfzh: this.sfzh,
                kzsj: this.kzsj,
                qzsj: this.qzsj,
                qwzj: this.qwzj,
                ckzljg: this.ckzljg,
                zjdj: this.zjdj,
                shyt: this.shyt.join(";"),
                chwlx: this.chwlx
            },
            "foreEndType": 2,
            "code": "300000061"
          }
        ).then(function (res) {
          Indicator.close();
          var result = JSON.parse(res.bodyText);
          if (result.status==200) {
            Toast({
              message: '保存成功',
              duration: 1000
            });
            setTimeout(function () {
              _this.$router.push({path: '/index'})
            }, 1500);
          } else {
            Toast({
              message: '保存失败: ' + result.message,
              position: 'bottom'
            });
          }
        }, function (res) {
          Toast({
            message: '保存失败',
            position: 'bottom'
          });
        });
      }
    },
    computed:{
        yt_t(){
             if(this.shyt.length < 1){
                return "请选择适合业态";
            }
            let tags = this.shyt.map((t)=>{
                for(let i = 0; i < this.yt_all.length; ++i){
                    if(this.yt_all[i].id === t){
                       return this.yt_all[i].name;
                    }
                }
                });
            return tags.join(";");
        }
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
