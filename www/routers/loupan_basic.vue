<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .tsbq{width:100% !important}

</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb60">
        <li class="clearfix">
          <span class="ys_tit">楼盘名称：</span>
          <div class="ys_item_con fl" v-text="topic"></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">楼盘地址：</span>
          <div class="ys_item_con ellip fl" v-text="address"></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">特色标签：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">{{tsbq_t}}</a></div>
        </li>
        <li class="clearfix bg_gray">
          <div class="ys_item_con fl tsbq" @click="selectTag($event)">
            <span v-for="ts in tsbq_all" class="ys_tag" :class="{'active': tsbq.indexOf(ts.id) > -1}" :value="ts.id" >{{ts.topic}}</span>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">开发商：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="kfsh" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">开盘日期：</span>
          <div class="ys_item_con fl">
            <input type="text" value=""
                   readonly
                   placeholder="请选择日期"
                   v-model="kprq"
                   @click="openPicker()">
            <i class="calendar_icon" @click="openPicker()"></i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘级别：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpjb" readonly placeholder="请选择" @click="openLevel">
            <i class="right_arrow" @click="openLevel">&gt;</i>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">产权性质：</span>
          <div class="ys_item_con fl"><a href="javascript:;" class="cl_link">{{chqxz_c}}</a></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">特色标签：</span>
          <div class="ys_item_con fl w570">
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="1" name="" v-model="chqxz">写字楼</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="2" name="" v-model="chqxz">公寓</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="3" name="" v-model="chqxz">商务楼</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="4" name="" v-model="chqxz">住宅</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="5" name="" v-model="chqxz">商业</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="6" name="" v-model="chqxz">酒店</label>
            </div>
            <div class="check_wrap clearfix">

              <label class="fl"><input type="checkbox" value="7" name="" v-model="chqxz">别墅</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="8" name="" v-model="chqxz">综合</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="9" name="" v-model="chqxz">商业综合体</label>
            </div>
            <div class="check_wrap clearfix">
              <label class="fl"><input type="checkbox" value="10" name="" v-model="chqxz">酒店式公寓</label>
            </div>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘品质：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lppz" readonly placeholder="请选择" @click="openQuality">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">楼盘均价：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="zxjnjg" placeholder="请输入">
            <i class="right_unit">元/m³/天</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">使用率：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="shyl" readonly placeholder="请选择" @click="openUse">
            <i class="right_arrow">&gt;</i>
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit">空置比例：</span>
          <div class="cl_999" v-text="hshkzbl">自动生成</div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit pt10">
            <i class="ys_tit_sm">装修配套设施明细</i>
          </span>
          <div class="ys_item_con fl pt10">
            <input type="text" value="" v-model="zxptmx" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计公司：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjgs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjs" placeholder="请输入">
          </div>
        </li>
        <li class="clearfix pr">
          <span class="ys_tit w224">楼盘设计师风格：</span>
          <div class="ys_item_con fl">
            <input type="text" value="" v-model="lpsjfg" placeholder="请输入">
          </div>
        </li>
      </ul>
      <a href="javascript:;" class="ys_default_btn mb80" @click="saveBuildMsg">保存</a>
    </div>

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

    <!--楼盘级别-->
    <mt-popup v-model="popupVisible" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureLevel">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureLevel">确定</span>
      </div>
      <mt-picker :slots="slots" @change="selectLevel"></mt-picker>
    </mt-popup>

    <!--楼盘品质-->
    <mt-popup v-model="popQuality" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureQuality">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureQuality">确定</span>
      </div>
      <mt-picker :slots="slots_quality" @change="selectQuality"></mt-picker>
    </mt-popup>


    <!--使用率-->
    <mt-popup v-model="popUse" position="bottom" class="mint-popup-4">
      <div class="picker-toolbar">
        <span class="mint-datetime-action mint-datetime-cancel" @click="sureUse">取消</span>
        <span class="mint-datetime-action mint-datetime-confirm" @click="sureUse">确定</span>
      </div>
      <mt-picker :slots="slots_use" @change="selectUse"></mt-picker>
    </mt-popup>


  </div>
</template>
<script>

  const lang = {
    '优': 1,
    '良': 2,
    '差': 3,
  };
   
  const level = {
      "5A":"1","甲":"2","乙":"3","公寓":"4","商务":"5","综合":"6"
  };

  import { Toast } from 'mint-ui'; //toast
  import { Indicator } from 'mint-ui'; //toast

  import { MessageBox } from 'mint-ui'; //弹窗

  import {DatetimePicker} from 'mint-ui';  //日期选择

  import {Popup} from 'mint-ui'; //弹窗

  export default {
    components: {
      DatetimePicker,
      Popup
    },

    data () {
      return {
        "lpid": "300", //楼盘id
        "topic": "建外SOHO", //楼盘名称
        "address": "北京市朝阳区建国门外大街4号demo", //地址
        "tsbq": [], //特色标签
        "kfsh": "", //开发商名称
        "kprq": "", //开盘日期(必选)
        "lpjb": "", //楼盘级别(必选)
        "chqxz": [], //产权性质
        "lppz": "", //楼盘品质 1优 2良 3差
        "zxjnjg": "", //均价
        "shyl": "",  //使用率
        "hshkzbl": "", //户数空置比例
        "zxptmx": "",  //装修设施配套明细
        "lpsjgs": "", //楼盘设计公司
        "lpsjs": "", //楼盘设计师
        "lpsjfg": "", //楼盘设计风格
        "tsbq_all":[],

        //日期
        pickerValue: '',
        startDate: new Date(),

        //楼盘级别
        lpjb: '',
        slots: [
          {
            values: ['5A', '甲', '乙', '公寓', '商务', '综合'],
          }
        ],

        //品质
        slots_quality: [
          {
            values: ["优", "良", "差"],  //1优 2良 3差
          }
        ],

        //使用率
        slots_use: [
          {
            values: ["一般", "经常", "非常"],  //1优 2良 3差
          }
        ],

        //级别弹窗显示隐藏
        popupVisible: false,

        //品质弹窗隐藏
        popQuality: false,

        //使用率隐藏
        popUse: false

      }
    },
    computed:{
        chqxz_c(){
            if(this.chqxz.length < 1){
                return "请选择标签";
            }
            const map = {"1":"写字楼", "2":"公寓","3":"商务楼","4":"住宅","5":"商业","6":"酒店","7":"综合","8":"别墅","9":"商业综合体","10":"酒店式公寓"};
            let tip = this.chqxz.map((item,idx)=>{return map[item.toString()]});
            return tip.join(",");
        },
        tsbq_t(){
            if(this.tsbq.length < 1){
                return "请选择标签";
            }
            let tags = this.tsbq.map((t)=>{
                for(let i = 0; i < this.tsbq_all.length; ++i){
                    if(this.tsbq_all[i].id === t){
                       return this.tsbq_all[i].topic;
                    }
                }
                });
            return tags.join(",");
        }
    },
    methods: {

      //日期panel展示
      openPicker() {
        this.$refs.picker.open();
      },

      //日期确定
      handleConfirm(value){
        this.kprq = this.transformDate(value);
      },

      //楼盘类型panel展示
      openLevel() {
        this.lpjb = '乙';
        this.popupVisible = true;
      },

      //选择类型
      selectLevel(picker, values) {
        this.lpjb = values[0];
      },

      //类型确定
      sureLevel(){
        this.popupVisible = false;
      },


      //打开品质
      openQuality(){
        this.lppz = '差';
        this.popQuality = true;
      },

      //选择品质
      selectQuality(picker, values){
        this.lppz = values[0];
      },

      //品质确定
      sureQuality(){
        this.popQuality = false;
      },


      //打开品质
      openUse(){
        this.shyl = '非常';
        this.popUse = true;
      },

      //选择品质
      selectUse(picker, values){
        this.shyl = values[0];
      },

      //品质确定
      sureUse(){
        this.popUse = false;
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

      //选择tag
      selectTag(e){
        const target = $(e.target), val = target.attr("value");
        if(!val){return;}

        if ($(e.target).hasClass('active')) {
          let tsbq_t = new Set(this.tsbq);
          tsbq_t.delete(val);
          this.tsbq = [...tsbq_t];

          $(e.target).removeClass('active');
        } else {
          let tsbq_t = new Set(this.tsbq);
          tsbq_t.add(val);
          this.tsbq = [...tsbq_t];

          $(e.target).addClass('active');
        }
      },

      getInitData(){
          const lpid = this.$route.params.lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getLpjbxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "lpid":lpid},"foreEndType":2,"code":"30000008"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.lpid = lpid;
            that.topic = data.topic;
            that.address = data.address;
            that.tsbq = data.tsbq.map((t)=>{return t.id});
            that.kfsh = data.kfsh;
            that.kprq = data.kprq;
            that.lpjb = data.lpjb;
            that.chqxz = data.chqxz.split("、");
            that.lppz = data.lppz;
            that.zxjnjg = data.zxjnjg;
            that.shyl = data.shyl;
            that.hshkzbl = data.hshkzbl;
            that.zxptmx = data.zxptmx;
            that.lpsjgs = data.lpsjgs;
            that.lpsjs = data.lpsjs;
            that.lpsjfg = data.lpsjfg;

          }, (res)=>{
            Indicator.close()
          });
      },

      getTsbq(){
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getTsbq.do";
          let that = this;
          this.$http.post(url).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.tsbq_all = data;
          }, (res)=>{
            Indicator.close()
          });
      },

      saveBuildMsg(){
        var _this = this;
        if(!this.kfsh){
            MessageBox('提示', '请填写开发商');
            return;
        }

        if(this.kprq == ''){
          MessageBox('提示', '请选择开盘日期');
            return;
        }

        if(this.lpjb == ''){
          MessageBox('提示', '请选择楼盘级别');
          return;
        }

        if(!this.lppz){
          MessageBox('提示', '请选择楼盘品质');
          return;
        }

        /*
        Toast({
          message: '保存成功',
          position: 'bottom'
        });
        */
        Indicator.open({
            text: '保存中...',
            spinnerType: 'fading-circle'
        });

        /*
        setTimeout(function(){
            _this.$router.push({path:'/list2'});
        },1000);
        */
        this.$http.post(
          this.$api + "/yhcms/web/lpjbxx/saveLp.do",
          {
            "parameters": {
              "lpid": this.lpid, //楼盘id
              "topic": this.topic, //楼盘名称
              "address": this.address, //地址
              "tsbq": "、" + this.tsbq.join("、") + "、", //特色标签
              "kfsh": this.kfsh, //开发商名称
              "kprq": this.kprq, //开盘日期(必选)
              "lpjb": level[this.lpjb], //楼盘级别(必选)
              "chqxz": this.chqxz.join("、"), //产权性质
              "lppz": lang[this.lppz].toString(), //楼盘品质 1优 2良 3差
              "zxjnjg": this.zxjnjg, //均价
              "shyl": this.shyl,  //使用率
              "hshkzbl": this.hshkzbl, //户数空置比例
              "zxptmx": this.zxptmx,  //装修设施配套明细
              "lpsjgs": this.lpsjgs, //楼盘设计公司
              "lpsjs": this.lpsjs, //楼盘设计师
              "lpsjfg": this.lpsjfg //楼盘设计风格
            },
            "foreEndType": 2,
            "code": "300000041"
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
            //this.$Message.error(res.message);
            Toast({
                message: '保存失败: ' + result.message,
                position: 'bottom'
            });
          }
        }, function (res) {
          //this.$Message.error('保存失败');
          Toast({
              message: '保存失败! 请稍候再试',
              position: 'bottom'
          });
        });
      }

    },
    mounted(){
        this.getInitData();
        this.getTsbq();
    },
  }
</script>
