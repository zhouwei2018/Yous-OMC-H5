<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/base.less";
  @import "../resources/css/website/task.less";

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
      <div class="task_bg"></div>

      <div class="ys_task_top clearfix">
        <div class="fl user_icon"></div>
        <div class="fr alarm_icon"><i class="alarm_num">5</i></div>
      </div>

      <div class="task_col_wrap clearfix mb10">
        <div class="task_col_item"><i class="task_icon task1"></i><span class="db">待接单</span></div>
        <div class="task_col_item"><i class="task_icon task2"></i><span class="db">跟进中</span></div>
        <div class="task_col_item"><i class="task_icon task3"></i><span class="db">已转交</span></div>
        <div class="task_col_item"><i class="task_icon task4"></i><span class="db">已派发</span></div>
        <div class="task_col_item"><i class="task_icon task5"></i><span class="db">已结束</span></div>
        <div class="task_col_item"><i class="task_icon task6"></i><span class="db">返回任务</span></div>
        <div class="task_col_item"><i class="task_icon task7"></i><span class="db">我的日程</span></div>
      </div>


      <!--完成任务情况-->
      <div class="task_finish">
        <div class="task_finish_tit pr h72">
          <span class="blue_line"></span>
          <i class="task_hammer_icon"></i>
          <span>收购部XX组任务完成情况(7)</span>
        </div>
        <ul class="ys_item_ul mb60 border_top rank_res_ul">
          <li class="clearfix pr">
            <div class="fl"><i class="rank_icon first">1</i><span>春田</span></div>
            <div class="fr rank_num">10</div>
          </li>
          <li class="clearfix pr">
            <div class="fl"><i class="rank_icon second">2</i><span>春田</span></div>
            <div class="fr rank_num">9</div>
          </li>
          <li class="clearfix pr">
            <div class="fl"><i class="rank_icon third">3</i><span>春田</span></div>
            <div class="fr rank_num">8</div>
          </li>

          <li class="clearfix">
            <div class="fl"><span>张田</span></div>
            <div class="fr rank_num">5</div>
          </li>
          <li class="clearfix">
            <div class="fl"><span>张田</span></div>
            <div class="fr rank_num">5</div>
          </li>
          <li class="clearfix">
            <div class="fl"><span>张田</span></div>
            <div class="fr rank_num">5</div>
          </li>
          <li class="clearfix">
            <div class="fl"><span>张田</span></div>
            <div class="fr rank_num">5</div>
          </li>

        </ul>
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
