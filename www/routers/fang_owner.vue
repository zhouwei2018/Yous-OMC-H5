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
      <ul class="ys_item_ul mb20">
        <li v-for="datum in data" class="clearfix pr">
          <span class="ys_tit">{{datum.topic}}</span>
          <span class="ys_tit">{{datum.xb=="1"?"男":"女"}}</span>
          <span>{{datum.phone}}</span>
          <i class="right_arrow" :owner="datum.id" @click="modifyOwner($event)">&gt;</i>
        </li>
      </ul>
      <div class="tc"><a href="javascript:;" class="cl_link f30" @click="addOwner">+添加业主</a></div>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  export default {
    data () {
      return {
          "id": "",
          "data": []
      }
    },
    methods: {
      getInitData(){
          const fyid = this.$route.params.fyid;
          this.id = fyid;
          Indicator.open({
             text: '',
             spinnerType: 'fading-circle'
          });
          const url = this.$api + "/yhcms/web/zdfyxx/getLpZdYzxx.do";
          let that = this;
          this.$http.post(url, {"parameters":{ "id":fyid},"foreEndType":2,"code":"300000033"}).then((res)=>{
            Indicator.close()
            const data = JSON.parse(res.bodyText).data;
            that.data = data;
          }, (res)=>{
            Indicator.close()
          });
      },
      addOwner(){
          this.$router.push({path:'/fang_owner/add/'+this.id});
      },
      modifyOwner(e){
        const target = $(e.target), val = target.attr("owner");
        this.$router.push({path:'/fang_owner/edit/'+val});
      }
    },
    mounted(){
        this.getInitData();
    },
  }
</script>
