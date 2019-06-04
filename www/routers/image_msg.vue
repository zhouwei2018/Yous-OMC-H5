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
      <div class="common_title">楼盘照片</div>
      <div class="image_wrap clearfix mb140">
        <div class="upload_btn mr10 fl">
            <input @change='add_img' id="file_add"  type="file">
        </div>
        <div class="img_demo fl pr" v-for='(item ,index ) in imgList'>
          <img class="upload_demo_img" :src="item" alt="" />
          <i class="delete_icon" @click='delete_img(index)'></i>
        </div>
      </div>
      <a href="javascript:;" class="ys_default_btn mb80" @click.stop.prevent="saveToserver">保存</a>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui';
  import { MessageBox } from 'mint-ui'; //弹窗
  export default {
    components: {
      Toast,
      MessageBox
    },
    data:function(){
      return{
        imgList:[],
      }
    },
    methods:{
      delete_img(item){
        this.imgList.splice(item,1);
      },
      add_img(event){
        var reader = new FileReader();
        var img1=event.target.files[0];
        if (!/\/(?:jpeg|jpg|png)/i.test(img1.type)){
          MessageBox('提示', '请选择图片文件!');
          return
        }
        reader.readAsDataURL(img1);
        var that=this;
        reader.onloadend=function(){
          that.imgList.push(reader.result)
        }
      },
      saveToserver:function(){
        var fd = new FormData();
        var files = document.querySelector('#file_add').files;
        for(var i=0;i<files.length;i++){
          var reader = new FileReader();
          reader.readAsDataURL(files[i]);
          fd.append(i,files[i]);
        }
        this.$http.post(
           this.$api,
          {images:fd},
           {
            'headers': {
              'Content-Type': 'image/jpeg;image/x-png'
            }
          }).then(function () {
          Toast({
            message: '上传成功!',
            position: 'middle',
            duration: 2000
          });
        }, function () {
          Toast({
            message: '服务器错误!',
            position: 'middle',
            duration: 2000
          });
        });
      }
    }
  }

</script>
