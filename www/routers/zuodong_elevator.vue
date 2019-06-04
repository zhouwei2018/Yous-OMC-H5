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
            <label for="ele_yes" class="mr20"  @click="ktqfclass"><input type="radio" v-model="ktcjqf" value="1" name="ele_type" id="ele_yes">是</label>
            <label for="ele_no" id="ele_no"  @click="ktqfclass"><input type="radio"  v-model="ktcjqf" value="0" name="ele_type">否</label>
          </div>
        </li>
        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl kt1_class" style="display:none">
            <input type="text" class="inp_sm" value="" v-model="ktd1" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="ktd2" placeholder="请输入">
          </div>
          <div class="ys_item_con fl kt2_class" style="display:none">
            <input type="text" class="inp_sm" value="" v-model="ktz1" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="ktz2" placeholder="请输入">
            </div>
         <div class="ys_item_con fl kt2_class" style="display:none">
            <input type="text" class="inp_sm" value="" v-model="ktg1" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="ktg2" placeholder="请输入">
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
            <label for="ele_yes" class="mr20"  @click="htqfclass"><input type="radio"   v-model = "htcjqf" value="1" name="ele_type_t" id="frei_ele_yes">是</label>
            <label for="ele_no" id="frei_ele_no" @click="htqfclass"><input type="radio"    v-model = "htcjqf" value="0" name="ele_type_t">否</label>
          </div>
        </li>

        <li class="clearfix mb20">
          <span class="ys_tit w224">所到楼层：</span>
          <div class="ys_item_con fl ht1_class" style="display:none">
            <input type="text" class="inp_sm" v-model="htd1" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="htd2" placeholder="请输入">
          </div>
           <div class="ys_item_con fl ht2_class" style="display:none">
            <input type="text" class="inp_sm" v-model="htz1" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="htz2" placeholder="请输入">
            </div>
          <div class="ys_item_con fl ht2_class" style="display:none">
            <input type="text" class="inp_sm" v-model="htg1" value="" placeholder="请输入">
            <span class="hor_line"></span>
            <input type="text" class="inp_sm" value="" v-model="htg2" placeholder="请输入">
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
        zdid: '', //座栋id
        lpid:'',//楼盘ID
        dtpp: '', //电梯品牌
        ktcjqf: '', //客梯层级区分 1是 0否
        ktsl: '', //客梯数量
        ktd: '', //客梯低层 如：1、10
        ktd1:'',
        ktd2:'',
        ktz: '', //客梯中 如2、10
        ktz1:'',
        ktz2:'',
        ktg: '', //客梯高 如：12、20
        ktg1:'',
        ktg2:'',
        htcjqf: '', //货梯层级区分 1 是 0 否
        htsl: '', //货梯数量
        htd: '', //货梯低 如： 1、10
        htd1:'',
        htd2:'',
        htz: '', //货梯中 如： 1、10
        htz1:'',
        htz2:'',
        htg: '', //货梯高 如：1、20
        htg1:'',
        htg2:'',

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
          const url = this.$api + "/yhcms/web/lpzdxx/getLpzdDt.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":zdid},"foreEndType":2,"code":"300000077"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            //电梯低中高   用"、"链接
            that.dtpp = data.dtpp;
            that.lpid=data.lpid;
            that.ktcjqf = data.ktcjqf;
            if(data.ktcjqf==1){

            $(".kt1_class").css("display","block");
            $(".kt2_class").css("display","block");
            that.ktd = data.ktd;
            that.ktz = data.ktz;
            that.ktg = data.ktg;
            if(this.ktd!=''){
            var kt=this.ktd.split('、');
            that.ktd1=kt[0];
            that.ktd2=kt[1];
            }
            if(this.ktz!=''){
            var kz=this.ktz.split("、");
            that.ktz1=kz[0];
            that.ktz2=kz[1];
            }
            if(this.ktg!=''){
            var kg= this.ktg.split("、");
            that.ktg1=kg[0];
            that.ktg2=kg[1];
            }
            }else if(data.ktcjqf==0){
            $(".kt1_class").css("display","block");
            that.ktd = data.ktd;
             if(this.ktd!=''){
            var kt=this.ktd.split('、');
            that.ktd1=kt[0];
            that.ktd2=kt[1];
            }

            }
            that.ktsl = data.ktsl;
            
            that.htcjqf = data.htcjqf;
            if(data.htcjqf==1){
            $(".ht1_class").css("display","block");
            $(".ht2_class").css("display","block");
            that.htd = data.htd;
            that.htz = data.htz;
            that.htg = data.htg;
            if(this.htd!=''){
            var hd=this.htd.split("、");
            that.htd1=hd[0];
            that.htd2=hd[1];
            }
            if(this.htz!=''){
            var hz=this.htz.split("、");
            that.htz1=hz[0];
            that.htz2=hz[1];
            }
            if(this.htg!=''){
            var hg=this.htg.split("、");
            that.htg1=hg[0];
            that.htg2=hg[1];
            }
            }else if(data.htcjqf==0){
            $(".ht1_class").css("display","block");
            that.htd = data.htd;
            if(this.htd!=''){
            var hd=this.htd.split("、");
            that.htd1=hd[0];
            that.htd2=hd[1];
            }

            }
            that.htsl = data.htsl;
            

          }, (res)=>{
            Indicator.close()
          });
      },


      //保存电梯信息
      saveElevatorMsg(){
        var _this = this;
        var that = this;

        
      
         if(this.ktcjqf==1){
          if(this.ktd1!=''&&this.ktd2!=''){
          if(this.ktd1>this.ktd2){
           MessageBox('提示', '请正确填写客梯信息');
                  return;
          }
          that.ktd=this.ktd1+"、"+this.ktd2;
          }
         
          if(this.ktz1!=''&&this.ktz2!=''){
          if(this.ktz1>this.ktz2){
            MessageBox('提示', '请正确填写客梯信息');
                  return;
          }
           that.ktz=this.ktz1+"、"+this.ktz2;
          }
          
           if(this.ktg1!=''&&this.ktg2!=''){
           if(this.ktg1>this.ktg2){
            MessageBox('提示', '请正确填写客梯信息');
                  return;
          }
            that.ktg=this.ktg1+"、"+this.ktg2;
           }
           
         }else if(this.ktcjqf==0){
          if(this.ktd1!=''&&this.ktd2!=''){
          if(this.ktd1>this.ktd2){
            MessageBox('提示', '请正确填写客梯信息');
                  return;
          }
           that.ktd=this.ktd1+"、"+this.ktd2;
          }
              
         }
         if(this.htcjqf==1){
          if(this.htd1!=''&&this.htd2!=''){
          if(this.htd1>this.htd2){
            MessageBox('提示', '请正确填写货梯信息');
                  return;
          }
           that.htd=this.htd1+"、"+this.htd2;
          }
         
          if(this.htz1!=''&&this.htz2!=''){
          if(this.htz1>this.htz2){
           MessageBox('提示', '请正确填写货梯信息');
                  return;
          }
           that.htz=this.htz1+"、"+this.htz2;
          }
          
           if(this.htg1!=''&&this.htg2!=''){
           if(this.htg1>this.htg2){
           MessageBox('提示', '请正确填写货梯信息');
                  return;
          }
            that.htg=this.htg1+"、"+this.htg2;
           }
           
         }else if(this.htcjqf==0){
          if(this.htd1!=''&&this.htd2!=''){
          if(this.htd1>this.htd2){
           MessageBox('提示', '请正确填写货梯信息');
                  return;
          }
           that.htd=this.htd1+"、"+this.htd2;
          }
              
         }
 

        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        this.$http.post(
          this.$api + "/yhcms/web/lpzdxx/saveLpzdDt.do",
          {
            "parameters": {
              "id": this.zdid, //座栋id
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
               _this.$router.push({path:'/zuodong_list/'+_this.lpid});
            },300);
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
      //点击事件
      ktqfclass(){
      let that=this;
      setTimeout(function (){
              if(that.ktcjqf == 1){
               
                  $(".kt1_class").css("display","block");
                  $(".kt2_class").css("display","block");
                  that.ktd1='';
                  that.ktd2='';
                  that.ktz1='';
                  that.ktz2='';
                  that.ktg1='';
                  that.ktg2='';
              }else if(that.ktcjqf == 0){
                          
                $(".kt1_class").css("display","block");
                $(".kt2_class").css("display","none");
                that.ktd1='';
                that.ktd2='';
                that.ktz1='';
                that.ktz2='';
                that.ktg1='';
                that.ktg2='';

                }
            
      }, 0.5);

      },
       htqfclass(){
      let that=this;
      setTimeout(function (){
              if(that.htcjqf == 1){
               
                  $(".ht1_class").css("display","block");
                  $(".ht2_class").css("display","block");
                  that.htd1='';
                  that.htd2='';
                  that.htz1='';
                  that.htz2='';
                  that.htg1='';
                  that.htg2='';
              }else if(that.htcjqf == 0){
                $(".ht1_class").css("display","block");
                $(".ht2_class").css("display","none");
                that.htd1='';
                that.htd2='';
                that.htz1='';
                that.htz2='';
                that.htg1='';
                that.htg2='';

                }
            
      }, 0.5);

      }


    },
    mounted(){
        this.getInitData();
    },
   
  }
   
</script>
