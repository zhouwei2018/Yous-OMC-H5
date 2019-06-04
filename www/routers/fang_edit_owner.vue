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
  .pos{position:relative}
  .pos_a{width:5.5rem !important}
  .pos_b{width:5.4rem !important}
  .pos_c{width:4.8rem !important}
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
            <label ><input type="radio" v-model="xb" value="0" name="sex">女</label>
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
            <input type="text" value="" v-model="czaddress" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">现工作地：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="xaddress" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">现状：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="xzh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr bg_gray">
          <span>家庭主要成员</span>
        </li>
        <li v-for="(cy, index) in jtcy" class="clearfix">
          <input type="text" v-model="cy.name"  placeholder="姓名" class="ys_tit border_right mr10">
          <div class="ys_item_con fl pos pos_b">
            <input type="text" v-model="cy.rel" placeholder="关系">
            <i class="right_arrow plus" :index="index" @click="addCy($event)">{{ index < 1 ? "+" : "-"}}</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">可租房源套数：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kczts" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit w224">在京有公司：</span>
          <div class="ys_item_con fl">
            <label class="mr20"><input type="radio" value="1" v-model="sfygs" name="company">有</label>
            <label ><input type="radio" value="0" v-model="sfygs" name="company">无</label>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">其他房产类型：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="qt" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">预估资产：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="ygzc" placeholder="请输入">
          </div>
        </li>
        <li v-for="(gs,idx) in yzqygs" class="clearfix pr">
          <span class="ys_tit w224">亲友公司：</span>
          <div class="ys_item_con fl pos pos_c">
            <input type="text" v-model="gs.name" placeholder="请输入">
            <i class="right_arrow plus" :index="idx" @click="addGs($event)">{{idx< 1 ? "+" : "-"}}</i>
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveOwnerData">保存</a>
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
         "fyid": "",
         "topic": "",
         "xb": "",
         "phone": [],
         "wxh": "",
         "czaddress": "",
         "xaddress": "",
         "xzh": "",
         "jtcy": [],
         "kczts": "",
         "sfygs": "",
         "gsname": "",
         "qt": "",
         "ygzc": "",
         "yzqygs": [],
         "xgbq": [],
         "xgbq_all": [],
      }
    },
    methods: {
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
      addCy(e){
        const target = $(e.target), action = $.trim(target.html());
        if(!action || (action !== '+' && action !== '-')){return;}

        if (action === '+') {
            this.jtcy.push({"name":"", "rel":""}); 
        } else {
            const idx = parseInt(target.attr("index"));
            let cy = this.jtcy.filter((c,index)=>{
                if(index !== idx){return c;} 
            });
            this.jtcy = cy;
        }
      },
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
      addGs(e){
        const target = $(e.target), action = $.trim(target.html());
        if(!action || (action !== '+' && action !== '-')){return;}

        if (action === '+') {
            this.yzqygs.push({"name":""}); 
        } else {
            const idx = parseInt(target.attr("index"));
            let gs = this.yzqygs.filter((c,index)=>{
                if(index !== idx){return c;} 
            });
            this.yzqygs = gs;
        }
      },
      getInitData(){
          const yzid = this.$route.params.yzid;
          this.id = yzid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getZdfyYzxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":yzid},"foreEndType":2,"code":"300000032"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.id = data.id;
            that.fyid = data.fyid;
            that.topic = data.topic;
            that.xb = data.xb;
            that.xgbq = data.xgbq ? data.xgbq.split(";"):[];
            let contact = data.phone ? data.phone.split(","):[""];
            that.phone = contact.map((c)=>{return {"phone":c}});
            that.wxh = data.wxh;
            that.czaddress = data.czaddress;
            that.xaddress = data.xaddress;
            that.xzh = data.xzh;
            let cy = data.jtcy ? data.jtcy.split(";"):["、"];
            let cyx = cy.map((c)=>{const t = c.split("、"); return {"name":t[0], "rel":t[1]}});
            that.jtcy = cyx;
            that.kczts = data.kczts;
            that.sfygs = data.sfygs;
            that.gsname = data.gsname;
            that.qt = data.qt;
            that.ygzc = data.ygzc;
            let gs = data.yzqygs ? data.yzqygs.split(";"):[""];
            that.yzqygs = gs.map((c)=>{return {"name":c}});
          }, (res)=>{
            Indicator.close()
          });
      },
      getXgbq(){
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
      saveOwnerData(){
        var _this = this;

        if(!this.topic){
          MessageBox('提示', '请输入姓名');
          return;
        }

        let cy = this.jtcy.map((cy)=>{return cy.name+"、"+cy.rel});
        let phone = this.phone.map((p)=>{ return p.phone});
        let gs = this.yzqygs.map((g)=>{ return g.name});

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/zdfyxx/saveZdYzxx.do",
          {
            "parameters": {
                id: this.id,
                fyid: this.fyid,
                topic: this.topic,
                xb: this.xb,
                xgbq: this.xgbq.join(";"),
                phone: phone.join(","),
                wxh: this.wxh,
                czaddress: this.czaddress,
                xaddress: this.xaddress,
                xzh: this.xzh,
                jtcy: cy.join(";"),
                kczfyts: this.kczts,
                sfygs: this.sfygs,
                gsname: this.gsname,
                qt: this.qt,
                ygzc: this.ygzc,
                yzqygs: gs.join(";")
            },
            "foreEndType": 2,
            "code": "300000031"
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
        this.getInitData();
        this.getXgbq();
    },
  }
</script>
