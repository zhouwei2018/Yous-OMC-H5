<style scoped lang="less">
  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  input {
    padding: 0;
    margin: 0;
    border: 0;
  }
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #e2e2e2;
  }
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  .search-out{
    background-color: #fff;
    border:1px solid transparent;
    .search-line{
      height: .60rem;
      margin:.12rem 0;
      display: -moz-box;
      display: -webkit-box;
      display: box;
      background-color: #fff;
      .p-u, .map-sec{
        width: 1.06rem;
        position: relative;
      }
      .input-out{
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        box-flex: 1;
        height: .60rem;
        padding-left: .62rem;
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
        -webkit-justify-content: flex-start;
        justify-content:flex-start;
        font-size: .20rem;
        border-radius: .6em;
        border:1px solid #cecece;
        position: relative;
        &:before{
          content: "";
          display: block;
          position: absolute;
          left:.36rem;
          top:50%;
          margin-left: -.10rem;
          margin-top: -.10rem;
          width: .20rem;
          height: .20rem;
          background: url("../resources/images/icons/search.png") no-repeat center center;
          background-size: contain;
        }
        input{
          font-size: .20rem;
          line-height: 1em;
        }
      }
      .p-u{
        &:before{
          content: "";
          display: block;
          position: absolute;
          left:50%;
          top:50%;
          margin-left: -.15rem;
          margin-top: -.165rem;
          width: .30rem;
          height: .33rem;
          background: url("../resources/images/icons/p-icon.png") no-repeat center center;
          background-size: contain;
        }
      }
      .map-sec{
        &:before{
          content: "";
          display: block;
          position: absolute;
          left:50%;
          top:50%;
          margin-left: -.195rem;
          margin-top: -.17rem;
          width: .39rem;
          height: .34rem;
          background: url("../resources/images/icons/map.png") no-repeat center center;
          background-size: contain;
        }
      }
    }
  }
  .filer-out{
    margin-bottom: .22rem;
    background-color: #fff;
    border: 1px solid transparent;
    border-bottom: 1px solid #dbdadf;
    ul{
      height: .62rem;
      display: -moz-box;
      display: -webkit-box;
      display: box;
      li{
        -moz-box-flex: 1;
        -webkit-box-flex: 1;
        box-flex: 1;
        margin-top:.16rem;
        margin-bottom: .23rem;
        font-size: .21rem;
        text-align: center;
        a{
          display: block;
          border-right: 1px solid #cbcbcb;
          span,i{
            display: inline-block;
            vertical-align: middle;
            position: relative;
          }
          span{
            top: -.03rem;
          }
          i{
            margin-left: .08rem;
            top: -.01rem;
            width: .15rem;
            height: .07rem;
            background: url("../resources/images/icons/down_arrow.png") no-repeat center center;
            background-size: contain;
          }
        }
        &:last-child{
          a{
            border-right: 0;
          }
        }
      }
    }
  }
  .list-out{
    background-color: #fff;
    ul{
      li{
        position: relative;
        padding: .24rem .20rem;
        .img-out{
          float: left;
           width: 1.98rem;
           height: 1.48rem;
          img {
            border: 0;
            display: block;
            width: 100%;
            height: 100%;
        }
        }
        .pre-title{
          float: left;
          height: 1.48rem;
          margin-left: .20rem;
          h1{
            font-size: .26rem;
            line-height:1.4em;
          }
          p{
            font-size: .20rem;
            line-height: .34rem;
            color: #8e8e8e;
          }
          .feature{
            span{
              display: inline-block;
              font-size: .17rem;
              padding: .08rem .09rem;
              color:#31b5e0;
              border:1px solid #31b5e0;
              border-radius: .2em;
            }
          }
        }
        .price-out{
          position: absolute;
          padding-top: .5rem;
          padding-right: .20rem;
          right:0;
          top:0;
          text-align: right;
          .price{
            font-size: .25rem;
            color:#f61f3a;
          }
          .area-size{
            font-size: .18rem;
            line-height: .34rem;
            color:#8e8e8e;;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="all_elements">
    <section class="search-out">
      <div class="search-line">
        <div href="javascript:void(0);" class="p-u"></div>
        <div class="input-out">
          <input type="text" placeholder="请输入关键字搜索"/>
        </div>
        <div href="javascript:void(0);" class="map-sec"></div>
      </div>
    </section>
    <section class="filer-out">
      <ul>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>位置</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>价格</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>面积</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
        <li data-type="position" class="">
          <a href="javascript:;">
            <span>筛选</span>
            <i class="filter-arrow"></i>
          </a>
        </li>
      </ul>
    </section>
    <div class="list-out">
      <ul>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
        <li class="ys_listcon clearfix">
          <div class="img-out">
            <img src="../resources/images/list/u823.png" />
          </div>
          <div class="pre-title">
            <h1>建外 SOHO</h1>
            <p>朝阳-CBD</p>
            <p>180套房源可租</p>
            <div class="feature">
              <span>地铁周边</span>
              <span>CBD</span>
              <span>SOHO办公</span>
            </div>
          </div>
          <div class="price-out">
            <p class="price">￥7.0元/m/天</p>
            <p class="area-size">116-888m</p>
          </div>
        </li>
      </ul>

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
