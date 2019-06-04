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
  .upload_btn{
    position: relative;
    input{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 99999;
      opacity: 0;
    }
  }
  .image_wrap {
    .img_demo{
      margin-right: .2rem;
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <div class="common_title">楼盘图</div>
      <div class="image_wrap clearfix mb140">
        <div v-if="il < 5" class="upload_btn mr10 fl">
            <input @change='add_img' id="file_add" tag="lp" type="file" multiple>
        </div>
        <div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
          <i class="delete_icon" tag="lp" @click='delete_img(index, item.id, $event)'></i>
        </div>
      </div>
      <div class="common_title">楼盘封面图</div>
      <div class="image_wrap clearfix mb140">
        <div v-if="fl < 1" class="upload_btn mr10 fl">
            <input @change='add_img' id="file_add" tag="fm" type="file">
        </div>
        <div class="img_demo fl pr" v-for='(item,index) in fmList' v-if="item.isdelete==0">
          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
          <i class="delete_icon" tag="fm" @click='delete_img(index, item.id, $event)'></i>
        </div>
      </div>
    </div>
    <a href="javascript:;" class="ys_default_btn mb80" @click.stop.prevent="saveToserver">保存</a>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import {Indicator} from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗12

  export default {
    data(){
      return{
        lpid: "",
        imgList:[],
        fmList:[],
        il: 0,
        fl: 0,
        upload: 0,
        uploaded: 0,
      }
    },
    methods:{
      delete_img(index, id, event){
        const tag = $(event.target).attr("tag"), which = tag === "lp" ? "imgList":"fmList";
        const filter = tag === "lp" ? "il" : "fl";
        if(id !== 'xxx'){
            this[which][index].isdelete = "1";
        }
        else{
            this[which].splice(index,1);
            this.upload -= 1;
        }
        this[filter] -= 1;
      },
      add_img(event){
        const fis = event.target.files;
        let len = fis.length;
        len = Math.min(len, 5 - this.il);
        for(let i = 0; i < len; ++i){
            this.append_img(fis[i]);
        }
      },
      append_img(image){
        const type = image.type;
        if (!/\/(?:jpeg|jpg|png)/i.test(type)){
          return;
        }
        const tag = $(event.target).attr("tag"), which = tag === "lp" ? "imgList":"fmList";
        const filter = tag === "lp" ? "il" : "fl";
        const that=this, reader = new FileReader();
        reader.onloadend = () => {
          let ret;
          const imgx = new Image();
          imgx.src = reader.result;
          imgx.onload = function(){
              var canvas = document.createElement('canvas');
              canvas.width = imgx.naturalWidth;
              canvas.height = imgx.naturalHeight;
              canvas.getContext("2d").drawImage(imgx, 0, 0);
              ret = canvas.toDataURL(type, .5);

              const obj = {
                  id: "xxx",
                  lpid: that.lpid,
                  isdelete: 0,
                  type: 2,
                  suffix:type,
                  url: ret 
              };
              that[which].push(obj)
           }
        }
        reader.readAsDataURL(image);
        this[filter] += 1;
        this.upload += 1;
      },
      getInitData(){
          const lpid = this.$route.params.lpid;
          this.lpid = lpid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/lpjbxx/getLpTp.do";
          let that = this;
          this.$http.post(url, {"parameters":{"lpid":lpid},"foreEndType":2,"code":"300000059"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.imgList = data.lppic;
            that.il = that.imgList.length;
            that.fmList = data.fmpic;
            that.fl = that.fmList.length;
          }, (res)=>{
            Indicator.close()
          });
      },
      saveToserver(){
          //开始上传图片
          const that = this;
          let fp = [], fm = [];
          const cb = (img, obj) => {
             if(img.id === "xxx"){
                 const [_, data] = img.url.split(","), [prefix, t] = img.suffix.split('/');
                 that.saveImages(data, t, function(path){
                     obj.push({"id":"", "isdelete":"0", "url":path})
                     that.uploaded += 1;
                     if(that.uploaded >= that.upload){
                         // 新图片上传完成
                         Indicator.close();
                         setTimeout(function(){
                             that.saveImageData();
                         }, 1000);
                     }
                 });
             }
             else{
                 obj.push({"id": img.id, "isdelete": img.isdelete, "url": img.url});
             }
          };

          if(this.upload > 0){
              Indicator.open({
                  text: '上传图片中...',
                  spinnerType: 'fading-circle'
              });
          }

          this.imgList.forEach((img)=>{cb(img,fp)});
          this.imgList = fp;
          this.fmList.forEach((img)=>{cb(img,fm)});
          this.fmList = fm;

          //保存信息
          if(this.upload < 1){
              // 没有新图片要上传
              setTimeout(function(){
                  Indicator.close();
                  that.saveImageData();
              }, 1000);
          }
      },
      saveImages(pic, type, cb){
          const that = this;
          this.$http.post(
              this.$api + "/yhcms/web/jcsj/uploadPic.do",
              {"parameters":{ "smallPic":pic,"suffix": "." + type},"foreEndType":2,"code":"300000084"}
          ).then((res)=>{
              var result = JSON.parse(res.bodyText);
              if (result.success) {
                  cb && cb(result.data);
              }
              else{
              }
          }, (res)=>{});
      },
      saveImageData(){
        const that = this;
        Indicator.open({
          text: '保存中...',
          spinnerType: 'fading-circle'
        });

        let fp = this.imgList.map((item, idx)=>{
            return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
        });
        let fm = this.fmList.map((item, idx)=>{
            return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
        });

        this.$http.post(
           this.$api + "/yhcms/web/lpjbxx/saveLpTp.do",
           {"parameters":{"lpid":this.lpid,"lptp":fp,"fmtp":fm},"foreEndType":2,"code":"300000080"}).then((res)=>{
          Indicator.close();
          var result = JSON.parse(res.bodyText);
          if (result.success) {
            Toast({
                message: '保存成功',
                position: 'bottom',
                duration: 1000
            });

            setTimeout(function(){
                that.$router.push({path:'/index'});
            },1000);
          } else {
            Toast({
                message: '保存失败: ' + result.message,
                position: 'bottom'
            });
          }
        },(res)=>{
          Indicator.close();
          Toast({
              message: '保存失败! 请稍候再试',
              position: 'bottom'
          });
        });
      },
    },
    mounted(){
        this.getInitData();
    }
  }

</script>
