<style scoped lang="less">
  *{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  input { padding: 0; margin: 0; border: 0; }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .color_blue{color:@bg_mid_blue}
  .color_black{color:@cl_black}
  .bg_grey{
    background:@bg_lightgay!important;
  }
  .bd{
    font-weight: bold;
  }
  .mb20{
    margin-bottom: .20rem;
  }
  .mf36{
    margin-left: .36rem;
  }

  .all_elements{
    font-size: .26rem;
  }
  .ys_item_ul li, .yx{
    .ys_tit{
      float: left;
      position: relative;
      width: 1.45rem;
      height: .72rem;
      margin-right: .18rem;
      &:after{
        content:':';
        position: absolute;
        right:0;
      }
      &.nor {
        width: inherit;
        &:after {
          content: '';
          display: none;
        }
      }
    }
    .ys_item_con{
      &.input-out{
        height: .72rem;
      }
      input{
        font-size: .26rem;
      }
      .check_wrap{
        float: none;
        input[type='checkbox']{
          float: left;
          width: .3rem;
          height: .3rem;
          margin-top: .221rem;
        }
      }
     &.w570{
       margin-left: .5rem;
     }
    }
    .arrow{
      float:right;
      margin-right: .30rem;
    }
    .edit{
      float: right;
      border-radius: .5em;
      margin:.15rem .20rem 0 0;
      width: 1.46rem;
      height: .40rem;
      line-height: .40rem;
      text-align: center;
      border: none;
      background-color:@bg_mid_blue ;
      color: @cl_white;
      font-size: .20rem;
    }
    .ys_item_con{
      input{
        height:inherit;
      }
    }
  }
  .ptitle{
    padding-left: .24rem;
    line-height: .72rem;

  }
  .uit-raio{
    position: relative;
    float: left;
    height:.72rem;
    line-height:.72rem;
    &:first-child{
      margin: 0 1.1rem 0 .50rem;
    }
    &.uit-raio:nth-child(2){
      margin-right:.86rem;
    }
  }
  .tear-out{
    background-color: @cl_white;
    border-bottom: 1px solid #dbdadf;
    padding:  .22rem 0;
    textarea{
      display: block;
      min-width:94%;
      max-width:94%;
      margin:0 auto;
      background-color: @cl_white;
      border-radius: .18rem;
      border:.01rem solid #4d4d4d;
    }
  }
  .btn-out{
    margin:1.92rem .20rem;
    button{
      width: 3.4rem;
      height: .72rem;
      text-align: center;
      border-radius: .4em;
      background-color: #dddce1;
      border: 0;
      font-size: .26rem;
      &.current{
        color: @cl_white;
        background:@bg_mid_blue ;
      }
    }
  }
  .yx{
    padding-left: .24rem;
    line-height: .72rem;
    border-bottom: 1px solid #dbdadf;
    background-color: #fff;
  }
  @media screen and (max-width: 320px){
    .ys_item_ul li .ys_tit{
      width: 1.45rem!important;
      &.nor {
        width: inherit!important;
        &:after {
          content: '';
          display: none;
        }
      }
    }
  }
</style>
<template>
  <div class="all_elements">
    <div class="build_top">
      <ul class="ys_item_ul mb20">
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201</span>
          <button class="edit">历史信息</button>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见签约人</span>
          <div class="ys_item_con fl"><input type="text" placeholder="业主"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">与业主关系</span>
          <div class="ys_item_con fl"><input type="text" placeholder="亲属"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">签约人姓名</span>
          <div class="ys_item_con fl"><input type="text" placeholder="约人姓名"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">联系电话</span>
          <div class="ys_item_con fl"><input type="text" placeholder="18819877777"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">约见时间</span>
          <div class="ys_item_con fl">
            <input type="text" placeholder="请选择约见时间">
          </div>
          <span class="arrow">&gt;</span>
        </li>
      </ul>
      <ul class="ys_item_ul">
        <li class="clearfix">
          <span class="ys_tit nor">业主是否自有公司：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="zy1">
              <label for="zy1">有</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="zy2">
              <label for="zy2">无</label>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">公司名称</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入业主公司名称"/></div>
        </li>
      </ul>
      <h3 class="ptitle"><span class="ys_tit">业主其他房产情况（城市,类型，是否有贷款）</span></h3>
      <ul class="ys_item_ul">
         <li class="clearfix">
          <span class="ys_tit nor">是否一次抵押：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <label for="female">是</label>
              <input type="radio" name="sex" id="female">
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="male">
              <label for="male">否</label>
            </div>
          </div>
          <span class="arrow">&gt;</span>
        </li>
      </ul>
      <div class="tear-out mb20">
        <textarea placeholder="请输入"></textarea>
      </div>

      <h3 class="ptitle"><span class="ys_tit">业主家庭情况</span></h3>
      <ul class="ys_item_ul mb20">
        <li class="clearfix">
          <span class="ys_tit nor">业主投资定位：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc1">
              <label for="zc1">有</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc2">
              <label for="zc2">无</label>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit nor">业主投资定位：</span>
          <div class="ys_item_con fl w570">
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">投资商业地产</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">金融服务</label>
            </div>
            <div class="check_wrap clearfix">
              <input type="checkbox" value="" name="">
              <label class="fl">办公室装修</label>
            </div>
          </div>
        </li>
      </ul>
      <div class="yx">
        <span class="ys_tit nor">合作意向 ：</span><span>☆☆☆☆☆</span>
      </div>
      <div class="btn-out clearfix">
        <button class="save current fl">提交并派发</button>
        <button class="initfile fr">提交</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {Indicator} from 'mint-ui';
  import {InfiniteScroll} from 'mint-ui';
  export default {
    components: {
      InfiniteScroll
    },

    data () {
      return {}
    },
    methods: {},
    mounted(){

    },
  }
</script>
