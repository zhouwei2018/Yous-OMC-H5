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
        <li class="clearfix pr">
          <span class="ys_tit w224">总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">开发商总数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzhsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">业主总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kzhbl" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业总户数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyhsh" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveHouse">保存</a>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui'; //toast
  import { Indicator } from 'mint-ui';

  import { MessageBox } from 'mint-ui'; //弹窗

  export default {
    components: {},

    data () {
      return {
        //面积信息
        zdid: '', //座栋id
        zhsh: '', //总户数
        kzhsh: '', //空置户数
        kzhbl: '', //空置比例
        shyhsh: '', //商业户数
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
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdHsh.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000042"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.zhsh = data.zhsh;
            that.kfszhs = data.kfszhs;
            that.yzzhs = data.yzzhs;
            that.shyzhs = data.shyzhs;

          }, (res)=>{
            Indicator.close()
          });
      },
      //保存户数信息
      saveHouse(){
        var _this = this;

        if(this.zhsh == ''){
          MessageBox('提示', '请输入总户数');
          return;
        }

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLpHs.do",
          {
            "parameters": {
              "id": this.zdid,
              "zhsh": this.zhsh,
              "kfszhs": this.kfszhs,
              "yzzhs": this.yzzhs,
              "shyzhs": this.shyzhs
            },
            "foreEndType": 2,
            "code": "300000074"
          }
        ).then(function (res) {
          var result = JSON.parse(res.bodyText);
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
