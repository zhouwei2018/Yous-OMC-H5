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

</style>
<template>
  <div class="all_elements">
    <div class="build_top ele_wrap">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">房号：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" v-model="FH" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">房源别名：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="FYBM" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" value=""  v-model="LC" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">是否为商铺：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio"  value="true" v-model="isBusinessHouse" name="shop_type">是</label>
            <label ><input type="radio" value="false" v-model="isBusinessHouse"  name="shop_type">否</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">商铺类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="businessType" readonly="readonly" placeholder="请选择" @click="openBtype">
            <i class="right_arrow" @click="openBtype">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">产权年限：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="CQLX" value="40" name="rights_year">40</label>
            <label class="mr20"><input type="radio" v-model="CQLX" value="50" name="rights_year">50</label>
            <label ><input type="radio" v-model="CQLX" value="70" name="rights_year">70</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">朝向：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="CX" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">装修水平：</span>
          <div class="ys_item_con fl">
            <input type="text" value=""  readonly="readonly" v-model="ZXSP" placeholder="请选择" @click="openDecorationType">
            <i class="right_arrow" @click="openDecorationType">&gt;</i>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">抵押状态：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="DYZT" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">业主属性：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="YZSX" value="1" name="owner_type">小业主</label>
            <label ><input type="radio" v-model="YZSX" value="2" name="owner_type">开发商</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">航远房源：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="isHYHouse" value="true" name="hy_type">是</label>
            <label ><input type="radio"  v-model="isHYHouse" value="false" name="hy_type">否</label>
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit">是否有租户：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="hasRenter" value="true" name="rent_num">是</label>
            <label ><input type="radio" v-model="hasRenter" value="false"  name="rent_num">否</label>
          </div>
        </li>

        <li class="clearfix pr mb20">
          <span class="ys_tit">空置时间：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请选择日期"  v-model="spaceTime" @click="openPicker()">
            <i class="calendar_icon"  @click="openPicker()"></i>
          </div>
        </li>

        <li class="clearfix pr border_top">
          <span class="ys_tit w224">参考租赁价格：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model="CKPrice">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主期望租金：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model="expectPrice">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">业主租金底价：</span>
          <div class="ys_item_con fl">
            <input type="number" value="" placeholder="请输入" v-model="leastPrice">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr mb20">
          <span class="ys_tit w224">适合业态：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" placeholder="请输入" v-model="fortype">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">车位：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="carHouseType" value="1"  name="parking_type">车库</label>
            <label class="mr20"><input type="radio" v-model="carHouseType" value="2" name="parking_type">地面</label>
            <label ><input type="radio" v-model="carHouseType" value="3" name="parking_type">无</label>
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveInfo">保存</a>
    </div>
    <!--商户类型-->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype">确定</span>
      </div>
      <mt-picker :slots="slots_bType" @change="selectLevel"></mt-picker>
    </mt-popup>

    <!--装修水平-->
    <mt-popup v-model="popupVisible2" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureBtype2">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureBtype2">确定</span>
      </div>
      <mt-picker :slots="slots_bType2" @change="selectLevel2"></mt-picker>
    </mt-popup>

    <!--日期选择-->
    <mt-datetime-picker
      ref="picker"
      v-model="pickerValue"
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
          FH:"", //房号
          FYBM:"", //房源别名
          LC:"", //楼层
          isBusinessHouse:false, //是否为商铺
          businessType:"", //商铺类型
          CQLX:70, //产权年限
          CX:"", //朝向
          ZXSP:"", //装修水平
          DYZT:"", //抵押状态
          YZSX:1, //业主属性
          isHYHouse:true, //航远房源?
          hasRenter:true, //是否有租户
          spaceTime:"", //空置时间
          CKPrice:"", //参考租赁价格
          expectPrice:"", //业主期望租金
          leastPrice:"", //业主租金底价
          fortype:"", //适合业态
          carHouseType:1, //车位类型，

           //日期
          pickerValue: '',
          startDate: new Date(),

          popupVisible:false,
          popupVisible2:false,
          slots_bType: [
          {
            values: ['全部','A类型', 'B类型', 'C类型'],
          }
        ],
          slots_bType2: [
          {
            values: ['全部','简单', '普通', '豪华'],
          }
        ]
      }
    },
    methods: {

      //日期panel展示
      openPicker() {
        this.$refs.picker.open();
      },
      //日期确定
      handleConfirm(value){
        this.spaceTime = this.transformDate(value);
      },

      //打开底部
      openBtype() {
        this.popupVisible = true;
      },
      //关闭底部
      sureBtype(){
        this.popupVisible = false;
      },
      //选择赋值
      selectLevel(picker, values) {
        this.businessType = values[0];
      },

      //打开底部2
      openDecorationType() {
        this.popupVisible2 = true;
      },
      //关闭底部2
      sureBtype2(){
        this.popupVisible2 = false;
      },
      //选择赋值2
      selectLevel2(picker, values) {
        this.ZXSP = values[0];
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
      saveInfo(){
        var _this = this;
        if(this.FH == ''){
          MessageBox('提示', '请输入房号!');
          return;
        }else if(this.FYBM == ''){
          MessageBox('提示', '房源别名!');
          return;
        }else if(this.LC == ''){
          MessageBox('提示', '请输入楼层!');
          return;
        }else if(this.CX == ''){
          MessageBox('提示', '请输入朝向!');
          return;
        }else if(this.DYZT == ''){
          MessageBox('提示', '请输入抵押状态!');
          return;
        }else if(this.spaceTime == ''){
          MessageBox('提示', '请选择空置时间!');
          return;
        }else if(this.CKPrice == ''){
          MessageBox('提示', '请输入参考租赁价格!');
          return;
        }else if(this.expectPrice == ''){
          MessageBox('提示', '请输入业主期望租金!');
          return;
        }else if(this.leastPrice == ''){
          MessageBox('提示', '请输入业主租金底价!');
          return;
        }else if(this.fortype == ''){
          MessageBox('提示', '适合业态!');
          return;
        }

        this.$http.post(
          this.$api,
          {
            "parameters": {
              "id": this.zdid, //楼盘id
            },
            "foreEndType": 2,
            "code": "300000074"
          }
        ).then(function (res) {
          console.log(res)
          var result = res;
          if (result.status==200) {
            Toast({
              message: '保存成功',
              duration: 1500
            });
            setTimeout(function () {
              _this.$router.push({path: '/information_insert'})
            }, 1500);
          } else {
            Toast({
              message: '保存失败',
              duration: 1500
            });
          }
        }, function (res) {
          Toast({
            message: '保存失败',
            duration: 1500
          });
        });
      }
    },
    mounted(){

    },
  }
</script>
