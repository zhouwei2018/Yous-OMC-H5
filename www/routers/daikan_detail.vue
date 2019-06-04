<style>
    @import "../resources/css/reset.css";
    .title{
        height:0.6rem;width: 100%;
        background-color:rgb(235,235,235);
        padding-left: 0.2rem;
        padding-top: 0.1rem;
        color: #333;
        font-weight: 500;
        font-size: 16px;
    }
    .container{
        font-family: "Microsoft YaHei";
    }
    .unique-detail
        .mint-cell-title{
        flex: inherit;
    }
    .unique-detail
    .mint-cell-value{
        margin-left: 0.2rem;
    }
</style>
<template>
    <div class="container unique-detail">
        <div class="title">渠道信息</div>
        <mt-cell title="渠道公司" style="color: #333;" disabled  placeholder="" v-model="response.gongsi"></mt-cell>
        <mt-cell title="渠道人员" style="color: #333;" disabled  placeholder="" v-model="response.renyuan"></mt-cell>
        <mt-cell title="联系电话" style="color: #333;" disabled placeholder=""  v-model="response.dianhua"></mt-cell>

        <div class="title">房间信息</div>
        <div v-for="(item,index) in response.fangZis" :key="index">
            <mt-cell title="带看房源" disabled placeholder="" v-model="item.loupan+'-'+item.loudong+'-'+item.fangjian" ></mt-cell>
            <mt-cell title="二次带看" disabled placeholder="">{{item.shifouerkan?'是':'否'}}</mt-cell>
            <!--<mt-field label="房源地址" disabled placeholder="" v-model="item.fangyuandizhi" ></mt-field>-->
        </div>

        <!--<mt-field label="打卡地址" disabled placeholder=""  v-model="response.dakadizhi"></mt-field>-->
        <mt-cell title="打卡时间" disabled placeholder=""  v-model="dktime"></mt-cell>
        <div class="title">带看说明</div>
        <mt-field type="textarea" rows="6" disabled v-model="response.shuoming" placeholder=""></mt-field>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                response:{},
                dktime:'',
            }
        },
        methods:{
            getDetail(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getQdDaka.do',{id:this.$route.params.id}).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        this.response = response.data;
                        this.dktime = this.formDate(this.response.dakatime);
                    }

                });
            },
            formDate(index){
                var newDate = new Date(index);
                return newDate.toLocaleString();
            },

        },
        mounted(){
            this.getDetail();
            document.title = '打卡详情';
        }
    }
</script>