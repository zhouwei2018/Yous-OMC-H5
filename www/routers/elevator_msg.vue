<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/elevator_msg.less";

</style>
<template>
  <div class="all_elements">
    <div class="build_top ele_wrap">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit w224">电梯品牌：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="dtpp" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯数量：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ktsl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">客梯层级区分：</span>
          <div class="ys_item_con fl">
            <label for="ele_yes" class="mr20"><input type="radio" v-model="ktcjqf" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no"><input type="radio" v-model="ktcjqf" value="0" name="ele_type">否</label>
          </div>
        </li>
        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" value="" v-model="ktd" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="ktg" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯数量：</span>
          <div class="ys_item_con fl">
            <input type="text inp_sm" value="" v-model="htsl" placeholder="请输入">
          </div>
        </li>

        <li class="clearfix">
          <span class="ys_tit w224">货梯层级区分：</span>
          <div class="ys_item_con fl">
            <label for="ele_yes" class="mr20"><input type="radio" v-model = "htcjqf" value="1" name="ele_type_t" id="frei_ele_yes">是</label>
            <label for="ele_no" id="frei_ele_no"><input type="radio" v-model = "htcjqf" value="0" name="ele_type_t">否</label>
          </div>
        </li>

        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl">
            <input type="text" class="inp_sm" v-model="htz" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="htg" placeholder="请输入">
          </div>
        </li>

      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveElevatorMsg">保存</a>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast
  import { Indicator } from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    components: {
    },

    data () {
      return {
        //电梯信息
        zdid: '', //楼盘id
        dtpp: '', //电梯品牌
        ktcjqf: '', //客梯层级区分 1是 0否
        ktsl: '', //客梯数量
        ktd: '', //客梯低层 如：1、10
        ktz: '', //客梯中 如2、10
        ktg: '', //客梯高 如：12、20
        htcjqf: '', //货梯层级区分 1 是 0 否
        htsl: '', //货梯数量
        htd: '', //货梯低 如： 1、10
        htz: '', //货梯中 如： 1、10
        htg: '', //货梯高 如：1、20

      }
    },
    methods: {

      getInitData(){
          const lpid = this.$route.params.lpid;
          this.zdid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdDt.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000077"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.dtpp = data.dtpp;
            that.ktcjqf = data.ktcjqf;
            that.ktsl = data.ktsl;
            that.ktd = data.ktd;
            that.ktz = data.ktz;
            that.ktg = data.ktg;
            that.htcjqf = data.htcjqf;
            that.htsl = data.htsl;
            that.htd = data.htd;
            that.htz = data.htz;
            that.htg = data.htg;

          }, (res)=>{
            Indicator.close()
          });
      },


      //保存电梯信息
      saveElevatorMsg(){
        var _this = this;

        if(!this.dtpp){
            MessageBox('提示', '请填写电梯品牌');
            return;
        }

        if(!this.ktsl){
            MessageBox('提示', '请填写客梯数量');
            return;
        }

        if(!this.ktcjqf){
            MessageBox('提示', '请选择客梯层级区分');
            return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdDt.do",
          {
            "parameters": {
              "id": this.zdid, //楼盘id
              "dtpp": this.dtpp, //电梯品牌
              "ktcjqf": this.ktcjqf, //客梯层级区分 1是 0否
              "ktsl": this.ktsl, //客梯数量
              "ktd": this.ktd, //客梯低层 如：1、10
              "ktz": this.ktz, //客梯中 如2、10
              "ktg": this.ktg, //客梯高 如：12、20
              "htcjqf": this.htcjqf, //货梯层级区分 1 是 0 否
              "htsl": this.htsl, //货梯数量
              "htd": this.htd, //货梯低 如： 1、10
              "htz": this.htz, //货梯中 如： 1、10
              "htg": this.htg, //货梯高 如：1、20
            },
            "foreEndType": 2,
            "code": "300000076"
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
                _this.$router.push({path:'/list2'});
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
      }
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
