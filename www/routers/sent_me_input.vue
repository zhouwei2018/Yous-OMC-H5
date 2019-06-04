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
  .ys_item_ul li{
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
  button{
    display: block;
    margin:1.92rem auto;
    margin-left: 1.5rem;
    width: 4.46rem;
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
      <ul class="ys_item_ul">
        <li class="clearfix color_black bd">
          <span class="">建外SOHO A座 2201 业主约见谈判</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主姓名</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主电话</span>
          <div class="ys_item_con fl"><input type="text" placeholder="18810974444"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主性别</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择业主性别"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">业主年龄</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入业主年龄"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">性格特征</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择性格特征标签"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">从事实业</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入业主从事实业"/></div>
          <span class="arrow">&gt;</span>
        </li><li class="clearfix">
        <span class="ys_tit">业主居住地</span>
        <div class="ys_item_con fl"><input type="text" placeholder="请输入业主居住地"/></div>
        <span class="arrow">&gt;</span>
      </li>
      </ul>
      <h3 class="ptitle"><span class="ys_tit">业主对签约个条件敏感度</span></h3>
      <ul class="ys_item_ul">
        <li class="clearfix">
          <span class="ys_tit">免租期</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择业主接受免租期"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">价格</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请输入业主接受价格"/></div>
          <span class="arrow yun">元</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">签约年限</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择业主签约年限"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">递增方式</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择"/></div>
        </li>
        <li class="clearfix">
          <span class="ys_tit">工商注册</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择业是否配合工商注册"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit">开票发票</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择业主是否配合开具发票"/></div>
          <span class="arrow">&gt;</span>
        </li>
      </ul>
      <h3 class="ptitle"><span class="ys_tit">产权情况</span></h3>
      <ul class="ys_item_ul">
        <li class="clearfix">
          <span class="ys_tit">产权归属</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择产权归属"/></div>
          <span class="arrow">&gt;</span>
        </li>
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
        <li class="clearfix">
          <span class="ys_tit">产权证</span>
          <div class="ys_item_con fl"><input type="text" placeholder="请选择产权证类型"/></div>
          <span class="arrow">&gt;</span>
        </li>
        <li class="clearfix">
          <span class="ys_tit nor">产权证类型：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="cq1">
              <label for="cq1">是</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="cq2">
              <label for="cq2">否</label>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="ptitle"><span class="ys_tit">房间注册情况</span></h3>
      <ul class="ys_item_ul">
        <li class="clearfix">
          <span class="ys_tit nor">是否有注册公司：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc1">
              <label for="zc1">是</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="zc2">
              <label for="zc2">否</label>
            </div>
          </div>
        </li>
        <li class="clearfix">
          <span class="ys_tit nor">是否备案：</span>
          <div class="ys_item_con  input-out fl">
            <div class="uit-raio">
              <input type="radio" name="sex" id="ba1">
              <label for="ba1">是</label>
            </div>
            <div class="uit-raio">
              <input type="radio" name="sex" id="ba2">
              <label for="ba2">否</label>
            </div>
          </div>
        </li>
      </ul>
      <h3 class="ptitle"><span class="ys_tit">房间优缺点(交通，配套，外观，物业)</span></h3>
      <div class="tear-out">
        <textarea placeholder="请输入"></textarea>
      </div>
      <h3 class="ptitle"><span class="ys_tit">房间装修状况及优缺点(户型，格局，采光，视野)</span></h3>
      <div class="tear-out mb20">
        <textarea placeholder="请输入"></textarea>
      </div>
        <button class="save current fl">跟进</button>
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
