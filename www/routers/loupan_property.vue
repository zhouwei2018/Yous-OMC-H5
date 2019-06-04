<style scoped lang="less">

  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
   .show{
     display: block;
   }
  .hide{
    display: none;
  }
  .act{
    color: #16abdc!important;
  }
  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }
  .ys_column3{
    font-size: .20rem;
  }
.shadow-p{
  position: fixed;
  left: 0;
   top:.72rem;
   width: 100%;
   height: 100%;
   background: rgba(0,0,0,.6);
  .info-tab{
     position: absolute;
     padding: .30rem 0;
     width: 5.34rem;
     font-size: .26rem;
     border-radius: .6em;
     left:50%;
     top:1.92rem;
     margin-left: -2.67rem;
     background: #fff;
     z-index: 333;
    p{
      height: .72rem;
      line-height: .72rem;
      padding-left: .24rem;
      label{
        float: left;
      }
      input{
        float: left;
        margin-left: .24rem;
        height: .72rem;
        line-height: .72rem;
        border-bottom:1px solid #dbdadf;
      }
      #wname{
        width: 2.88rem;
      }
      #wname2, #wname3{
      width: 2.58rem;
    }
      #waddress{
        width: 3.9rem;
      }
      #wtel{
        width: 3.4rem;
      }
      #wtel2, #wtel3{
        width: 3.4rem;
      }

    }
    button{
      display: block;
      margin: .44rem auto 0;
      width: 4.44rem;
      height: .74rem;
      color: #fff;
      border: 0;
      background-color:#16abdc;
      border-radius: .4em;
    }
  }
}
</style>
<template>
  <div class="all_elements">
    <div class="build_top h72 bg-white clearfix pr">
      <div class="ys_column3 fl tc" :class="this.showTab==0?'act':''" @click="showTab=0">
        物业公司</div>
      <span class="ver_line left1"></span>
      <div class="ys_column3 fl tc" :class="this.showTab==1?'act':''" @click="showTab=1">
        电话运营商</div>
      <span class="ver_line left2"></span>
      <div class="ys_column3 fl tc" :class="this.showTab==2?'act':''" @click="showTab=2">
        网络运营商</div>
    </div>

    <!--物业公司结果-->
    <div class="tab tab1" :class="this.showTab==0?'show':'hide'">
      <div class="property_res">
        <div class="pt15 pro_item"><span>公司名称</span> | <span>地址</span> | <span>电话</span></div>
      </div>
      <div class="tc pt20" @click="showShadow=1">
        <a href="javascript:;" class="cl_link f30">+添加物业公司</a>
      </div>
    </div>
    <div class="tab tab2" :class="this.showTab==1?'show':'hide'">
      <div class="tc pt20" @click="showShadow=1">
        <a href="javascript:;" class="cl_link f30">+添加电话运营商</a>
      </div>
    </div>
    <div class="tab tab3" :class="this.showTab==2?'show':'hide'">
      <div class="tc pt20"  @click="showShadow=1">
        <a href="javascript:;" class="cl_link f30">+添加网络运营商</a>
      </div>
    </div>
    <div class="shadow-p" :class="this.showShadow==1?'show':'hide'">
       <div class="info-tab one" :class="this.showTab==0?'show':'hide'">
          <p class="clearfix">
            <label for="wname">物业公司名称:</label>
            <input type="text" value="" name="wname" id="wname" v-model="wname" placeholder="请输入" />
          </p>
         <p class="clearfix">
           <label for="waddress">地址:</label>
           <input type="text" value="" name="waddress" id="waddress" v-model="waddress" placeholder="请输入" />
         </p>
         <p class="clearfix">
           <label for="wtel">联系方式:</label>
           <input type="tel" value="" name="wtel" v-model="wtel" id="wtel" placeholder="请输入" />
         </p>
         <button class="sure" @click="add_one">确定</button>
       </div>
       <div class="info-tab two" :class="this.showTab==1?'show':'hide'">
         <p class="clearfix">
           <label for="wname">电话运营商名称:</label>
           <input type="text" value="" name="wname" id="wname2" v-model="wname2" placeholder="请输入" />
         </p>
         <p class="clearfix">
           <label for="wtel">联系方式:</label>
           <input type="tel" value="" name="wtel" id="wtel2" v-model="wtel2" placeholder="请输入" />
         </p>
         <button class="sure" @click="add_one2">确定</button>
       </div>
       <div class="info-tab three" :class="this.showTab==2?'show':'hide'">
         <p class="clearfix">
           <label for="wname">网络运营商名称:</label>
           <input type="text" value="" name="wname" id="wname3" v-model="wname3" placeholder="请输入" />
         </p>
         <p class="clearfix">
           <label for="wtel">联系方式:</label>
           <input type="tel" value="" name="wtel" id="wtel3" v-model="wtel3" placeholder="请输入" />
         </p>
         <button class="sure" @click="add_one3">确定</button>
       </div>
    </div>
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
        showTab:0,
        showShadow:0,
        wname:"",
        wname2:"",
        wname3:"",
        waddress:"",
        waddress2:"",
        waddress3:"",
        wtel:"",
        wtel2:"",
        wtel3:"",
      }
    },
    methods: {
      add_one:function() {
        var _this = this;
        if (this.wname == '') {
          MessageBox('提示', '请输入物业公司名称!');
          return;
        } else if (this.waddress == '') {
          MessageBox('提示', '请输入物业公司地址!');
          return;
        } else if (this.wtel == '') {
          MessageBox('提示', '请输入物业公司电话!');
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
          var result = res;
          _this.showTab=0;
          _this.showShadow=0;
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
      },
      add_one2:function() {
        var _this = this;
        if (this.wname2 == '') {
          MessageBox('提示', '请输入电话运营商名称名称!');
          return;
        }else if (this.wtel2 == '') {
          MessageBox('提示', '请输入电话运营商名称电话!');
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
          var result = res;
          _this.showTab=0;
          _this.showShadow=0;
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
      },
      add_one3:function() {
        var _this = this;
        if (this.wname3 == '') {
          MessageBox('提示', '请输入网络运营商名称名称!');
          return;
        }else if (this.wtel3 == '') {
          MessageBox('提示', '请输入网络运营商名称电话!');
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
          var result = res;
          _this.showTab=0;
          _this.showShadow=0;
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
    mounted(){},
  }
</script>
