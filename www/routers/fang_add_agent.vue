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
  .xgbq{width:100% !important}
  .pos{position:relative;width:5.5rem !important}
  .right_arrow{border:1px solid black; border-radius:50%; line-height:.35rem}

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">姓名：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="topic" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">性别：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" v-model="xb" value="1" name="sex">男</label>
            <label ><input type="radio" name="sex" v-model="xb" value="0">女</label>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">性格标签：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">{{xgbq_t}}</a></div>
        </li>
        <li class="clearfix bg_gray">
          <div class="xgbq ys_item_con fl" @click="selectTag($event)">
            <span v-for="xg in xgbq_all" class="ys_tag" :class="{'active': xgbq.indexOf(xg.id) > -1}" :value="xg.id" >{{xg.topic}}</span>
          </div>
        </li>
        <li v-for="(ph,idx) in phone" class="clearfix">
          <span class="ys_tit">联系方式：</span>
          <div class="ys_item_con fl pos pos_a">
            <input type="text" v-model="ph.phone" placeholder="请输入">
            <i class="right_arrow plus" :index="idx" @click="addPhone($event)">{{idx<1 ? "+" : "-"}}</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">微信：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="wxh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">常驻工作地：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="address" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">职业：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zy" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">与业主关系：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="yyzgx" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">有无签约权：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" name="visa" v-model="qyq" value="1">有</label>
            <label ><input type="radio" name="visa" v-model="qyq" value="0">无</label>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveAgentData">保存</a>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {MessageBox} from 'mint-ui';
  import {Toast} from 'mint-ui';

  export default {
    data () {
      return {
          "fyid": "",
          "topic": "",
          "xb": "",
          "phone": [{"phone":""}],
          "bqid": "",
          "wxh": "",
          "address": "",
          "zy": "",
          "yyzgx": "",
          "qyq": "",
          "xgbq": [],
          "xgbq_all": []
      }
    },
    methods: {
      addPhone(e){
        const target = $(e.target), action = $.trim(target.html());
        if(!action || (action !== '+' && action !== '-')){return;}

        if (action === '+') {
            this.phone.push({"phone":""}); 
        } else {
            const idx = parseInt(target.attr("index"));
            let ph = this.phone.filter((c,index)=>{
                if(index !== idx){return c;} 
            });
            this.phone = ph;
        }
      },
      selectTag(e){
        const target = $(e.target), val = target.attr("value");
        if(!val){return;}

        if ($(e.target).hasClass('active')) {
          let xgbq_t = new Set(this.xgbq);
          xgbq_t.delete(val);
          this.xgbq = [...xgbq_t];

          $(e.target).removeClass('active');
        } else {
          let xgbq_t = new Set(this.xgbq);
          xgbq_t.add(val);
          this.xgbq = [...xgbq_t];

          $(e.target).addClass('active');
        }
      },
        getXgbq(){
          const fyid = this.$route.params.fyid;
          this.fyid = fyid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getXgbq.do";
          let that = this;
          this.$http.post(url).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.xgbq_all = data;
          }, (res)=>{
            Indicator.close()
          });
        },
        saveAgentData(){
            var _this = this;
    
            if(!this.topic){
              MessageBox('提示', '请输入姓名');
              return;
            }

            let phone = this.phone.map((p)=>{ return p.phone});
            if(phone.length < 1){
              MessageBox('提示', '请输入联系方式');
              return;
            }
    
            Indicator.open({
                text: '保存中...',
                spinnerType: 'fading-circle'
            });
    
            this.$http.post(
              this.$api + "/yhcms/web/zdfyxx/saveZdDlrxx.do",
              {
                "parameters": {
                    fyid: this.fyid,
                    topic: this.topic,
                    xb: this.xb,
                    bqid: this.bqid,
                    phone: phone,
                    wxh: this.wxh,
                    address: this.address,
                    zy: this.zy,
                    yyzgx: this.yyzgx,
                    qyq: this.qyq
                },
                "foreEndType": 2,
                "code": "300000026"
              }
            ).then(function (res) {
              Indicator.close();
              var result = JSON.parse(res.bodyText);
              if (result.success) {
                Toast({
                    message: '保存成功',
                    position: 'bottom',
                    duration: 1000
                });
    
                setTimeout(function(){
                    _this.$router.push({path:'/index'});
                },1000);
    
              } else {
                Toast({
                    message: '保存失败: ' + result.message,
                    position: 'bottom'
                });
              }
            }, function (res) {
              Indicator.close();
              Toast({
                  message: '保存失败! 请稍候再试',
                  position: 'bottom'
              });
            });
          }
    },
    computed:{
        xgbq_t(){
            if(this.xgbq.length < 1){
                return "请选择标签";
            }
            let tags = this.xgbq.map((t)=>{
                for(let i = 0; i < this.xgbq_all.length; ++i){
                    if(this.xgbq_all[i].id === t){
                       return this.xgbq_all[i].topic;
                    }
                }
                });
            return tags.join(",");
        }
    },
    mounted(){
        this.getXgbq();
    },
  }
</script>
