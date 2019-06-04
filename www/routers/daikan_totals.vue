<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    @import "../resources/css/website/list.less";
    .comment_btn{
        border-radius:16px;width: 70px;height: 26px;
        margin-left:0.5rem;margin-right: 0.5rem;
    }
</style>
<template>
    <div>
        <section class="filtrate-nav"
                 style="position: relative; top: 0px; left: 0px;z-index:3000;"
        >
            <ul @click="chooseFilter($event)">
                <li data-role="filterItem" data-type="district"
                    :class="{'active-filter':this.currentFilterTab=='district'}">
                    <a href="javascript:void(0);">
                        <h2 class="ellipsis district-h">带看量</h2>
                        <i class="filt-arrow"></i>
                    </a>
                </li>
                <li data-role="filterItem" data-type="state" :class="{'active-filter':this.currentFilterTab=='state'}">
                    <a href="javascript:void(0);">
                        <h2 class="ellipsis state-h">筛选</h2>
                        <i class="filt-arrow"></i>
                    </a>
                </li>
            </ul>
        </section>
        <mt-popup
                v-model="popupVisible"
                position="top"
                style="top: 0.85rem;"
        >
            <!--筛选条件内容start-->
            <div style="height: 6rem;width: 100%;background-color: white;display: block;">
                <mt-cell>
                    <mt-button  class="comment_btn">hello</mt-button>
                </mt-cell>
            </div>
            <!--筛选条件内容end-->
        </mt-popup>

    </div>
</template>
<script>
    export default{
        data(){
            return {
                currentFilterTab:'',
                popupVisible:false,
            }
        },
        methods:{
            chooseFilter(){
                //this.currentFilterTab = 'district';
                this.popupVisible = true;
            },
            closeFilter: function () {
                this.currentFilterTab = 'nth';
            },
        }
    }
</script>