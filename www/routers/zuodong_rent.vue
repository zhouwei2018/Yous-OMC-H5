<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
      
      <li class="clearfix">
          <span class="ys_tit w224">是否有租赁部：</span>
          <div class="ys_item_con fl">
            <label for="ele_yes" class="mr20 " @click="sfzlbclass"><input type="radio"   v-model="sfzlb" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no" @click="sfzlbclass"><input type="radio"    v-model="sfzlb" value="0" name="ele_type">否</label>
          </div>
        </li>
        <div class="div_class" style="display:none">

        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部合作方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbhzfs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣比例：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlfybl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁返佣周期：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlfyzq" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部地址：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbaddress" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">租赁部电话：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlbphone" placeholder="请输入">
          </div>
        </li>
        </div>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveRentMsg">保存</a>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import {Indicator } from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗
  export default {
    components: {
      Toast,
      MessageBox
    },
    data () {
      return {
        "lpid": "",
        "zdid": "",
        "zdgzid": "",
        "sfzlb": "",
        "zlbhzfs": "",
        "zlfybl": "",
        "zlbaddress": "",
        "zlbphone": "",
        "zlfyzq": ""
      }
    },
    methods: {
      getInitData(){
          const zdid = this.$route.params.zdid;
          this.zdid = zdid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdZlb.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000069"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zdgzid = data.zdgzid;
            that.lpid = data.lpid;
            that.sfzlb = data.sfzlb;
            if(data.sfzlb==0||data.sfzlb==''){
            $(".div_class").css("display","none");
            that.zlbhzfs = "";
            that.zlfybl = "";
            that.zlbaddress ="";
            that.zlbphone = "";
            that.zlfyzq = "";
            }else if(data.sfzlb==1){
           $(".div_class").css("display","block");
            that.zlbhzfs = data.zlbhzfs;
            that.zlfybl = data.zlfybl;
            that.zlbaddress = data.zlbaddress;
            that.zlbphone = data.zlbphone;
            that.zlfyzq = data.zlfyzq;
            }
           
          }, (res)=>{
            Indicator.close()
          });
      },
      saveRentMsg(){
        var _this = this;
        if(_this.sfzlb == 1){
        if(!this.zlbhzfs){
          MessageBox('提示', '请输入租赁部合作方式!');
          return;
        }else if(!this.zlfybl){
          MessageBox('提示', '请输入租赁返佣比例!');
          return;
        }else if(!this.zlfyzq){
          MessageBox('提示', '请输入租赁返佣周期!');
          return;
        }else if(!this.zlbaddress){
          MessageBox('提示', '请输入租赁部地址!');
          return;
        }else if(!this.zlbphone){
          MessageBox('提示', '请输入租赁部电话!');
          return;
        }
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdZlb.do",
          {
            "parameters": {
              "id": this.zdid,//座栋ID
              "sfzlb": this.sfzlb,
              "zlbhzfs": this.zlbhzfs,
              "zlfybl": this.zlfybl,
              "zlbaddress": this.zlbaddress,
              "zlbphone": this.zlbphone,
              "zlfyzq": this.zlfyzq,
            },
            "foreEndType": 2,
            "code": "300000068"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
          Indicator.close();
          if (result.success) {
            Toast({
                message: '保存成功',
                position: 'bottom',
                duration: 1000
            });

            setTimeout(function(){
                _this.$router.push({path:'/zuodong_list/'+_this.lpid});
            },1000);
          } else {
            Toast({
                message: '保存失败: ' + result.message,
                position: 'bottom'
            });
          }
        }, function (res) {
          Toast({
              message: '保存失败! 请稍候再试',
              position: 'bottom'
          });
        });
      },
      sfzlbclass(){
      let that = this;
      console.log(that.sfzlb );
      setTimeout(function (){
              if(that.sfzlb == 1){
                
                $(".div_class").css("display","block");
                that.zlbhzfs = "";
                that.zlfybl = "";
                that.zlbaddress ="";
                that.zlbphone = "";
                that.zlfyzq = "";
              }else if(that.sfzlb == 0){
                          
                $(".div_class").css("display","none");
                      that.zlbhzfs = "";
                      that.zlfybl = "";
                      that.zlbaddress ="";
                      that.zlbphone = "";
                      that.zlfyzq = "";

                }
            
      }, 1);
      

      }
     
    },
    mounted(){
        this.getInitData();
    },

  }
  $(".sfzlb_class").click(function(){
      var zlbd=$(this).val();
      if(zlbd==1){
       that.sfzlb = 1;
      $(".div_class").css("display","block");
            that.zlbhzfs = "";
            that.zlfybl = "";
            that.zlbaddress ="";
            that.zlbphone = "";
            that.zlfyzq = "";

      }else if(zlbd==0){
       that.sfzlb = 0;
      $(".div_class").css("display","none");
            that.zlbhzfs = "";
            that.zlfybl = "";
            that.zlbaddress ="";
            that.zlbphone = "";
            that.zlfyzq = "";

      }
      })

