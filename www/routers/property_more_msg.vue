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
          <span class="ys_tit w224">物业费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="wyf" placeholder="请输入物业费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">电费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="df" placeholder="请输入电费">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shf" placeholder="请输入水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">热水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="rshf" placeholder="请输入热水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖方式：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="gnfs" placeholder="请输入供暖方式">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">供暖费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="gnf" placeholder="请输入供暖费">
            <i class="right_unit">元/月</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ktlx" placeholder="请输入空调类型">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调品牌：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ktpp" placeholder="请输入空调品牌">
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">制冷费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zlf" placeholder="请输入制冷费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">空调加时费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ktjsf" placeholder="请输入空调加时费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业物业费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shywyf" placeholder="请输入商业物业费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>

        <li class="clearfix pr">
          <span class="ys_tit w224">商业电费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shydf" placeholder="请输入商业电费">
            <i class="right_unit">元/度</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shysf" placeholder="请输入商业电费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业热水费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyrshf" placeholder="请输入商业热水费">
            <i class="right_unit">元/吨</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业制冷费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyzlf" placeholder="请输入商业制冷费">
            <i class="right_unit">元/㎡/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">商业供暖费：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shygnf" placeholder="请输入商业供暖费">
            <i class="right_unit">元/月</i>
          </div>
        </li>


      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveProperty">保存</a>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import {MessageBox} from 'mint-ui';

  export default {
    data () {
      return {
        "id": "",
        "lpid": "",
        "zdid": "",
        "wyf": "",
        "df": "",
        "shf": "",
        "rshf": "",
        "gnfs": "",
        "gnf": "",
        "ktlx": "",
        "ktpp": "",
        "zlf": "",
        "ktjsf": "",
        "shywyf": "",
        "shydf": "",
        "shysf": "",
        "shyrshf": "",
        "shyzlf": "",
        "shygnf": ""
      }
    },
    methods: {
        getInitData(){
          const lpid = this.$route.params.lpid;
          this.lpid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdWyf.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":lpid},"foreEndType":2,"code":"300000067"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;;
            that.id = data.id;
            that.zdid = data.zdid;
            that.wyf = data.wyf;
            that.df = data.df;
            that.shf = data.shf;
            that.rshf = data.rshf;
            that.gnfs = data.gnfs;
            that.gnf = data.gnf;
            that.ktlx = data.ktlx;
            that.ktpp = data.ktpp;
            that.zlf = data.zlf;
            that.ktjsf = data.ktjsf;
            that.shywyf = data.shywyf;
            that.shydf = data.shydf;
            that.shysf = data.shysf;
            that.shyrshf = data.shyrshft;
            that.shyzlf = data.shyzlf;
            that.shygnf = data.shygnf;
          }, (res)=>{
            Indicator.close()
          });
        },
      saveProperty(){
        var _this = this;

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdZlb.do",
          {
            "parameters": {
                "id": this.id,
                "zdid": this.zdid,
                "wyf": this.wyf,
                "df": this.df,
                "shf": this.shf,
                "rshf": this.rshf,
                "gnfs": this.gnfs,
                "gnf": this.gnf,
                "ktlx": this.ktlx,
                "ktpp": this.ktpp,
                "zlf": this.zlf,
                "ktjsf": this.ktjsf,
                "shywyf": this.shywyf,
                "shydf": this.shydf,
                "shysf": this.shysf,
                "shyrshf": this.shyrshft,
                "shyzlf": this.shyzlf,
                "shygnf": this.shygnf,
            },
            "foreEndType": 2,
            "code": "300000067"
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
