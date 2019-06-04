<style>
    @import "../resources/css/reset.css";
    .comment_btn{
        border-radius:5px;height: 26px;border-size:0.5px ;
        width:1.6rem;font-size:0.25rem;margin-left:0.1rem;
    }
    .comment_btn1{
        border-radius:5px;height: 26px;border-size:0.5px ;
        width:2.16rem;font-size:0.25rem;margin-left:0.1rem;
    }
    .btn_active{
        background-color:rgb(215,235,255)!important;
        color:rgb(28,119,212)!important;
        border-color:lightskyblue!important;
    }
    .line_a{
        line-height: 3;border-top:1px solid;border-color: #d9d9d9;
    }
    .line_b{
        line-height: 3;border-top:1px solid;border-color: #d9d9d9;
    }
    .title2{
        height:0.2rem;width: 100%;
        background-color:rgb(235,235,235);
        padding-left: 0.2rem;
        padding-top: 0.1rem;
        color: #333;
    }
    .unique-comment
        .mint-cell-title{
        width: 3rem;
        flex: inherit;
    }
    .unique-comment
        .mint-cell-value{
        margin-left: .2rem;
    }

    textarea{
        background-color: white;
    }
    .container{
        background-color: white;
    }
</style>
<template>
    <div class="container unique-comment">
        <div class="title2"></div>
        <mt-cell title="渠道公司:"   v-model="response.gongsi"></mt-cell>
        <mt-cell title="渠道人员:"  v-model="response.renyuan"></mt-cell>
        <mt-cell title="联系电话:"  v-model="response.dianhua"></mt-cell>
        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <mt-cell title="客户业态" style="color: #333;" disabled placeholder=""  v-model="response.kehu.kehuyetai==''?'无':response.kehu.kehuyetai"></mt-cell>
        <mt-cell title="客户预算" style="color: #333;" disabled placeholder=""  v-model="response.kehu.kehuyusuan==''?'无':response.kehu.kehuyusuan"></mt-cell>
        <mt-cell title="需求面积" style="color: #333;" disabled placeholder=""  v-model="response.kehu.kehumianji==''?'无':response.kehu.kehumianji"></mt-cell>
        <mt-cell title="办公人数" style="color: #333;" disabled placeholder=""  v-model="response.kehu.bangongrenshu==''?'无':response.kehu.bangongrenshu"></mt-cell>
        <mt-cell title="客户所选区域" style="color: #333;" disabled placeholder=""  v-model="response.kehu.kehuqvyv==''?'无':response.kehu.kehuqvyv"></mt-cell>
        <mt-cell title="客户用房时间" style="color: #333;" disabled placeholder=""  v-model="response.kehu.kehuyongfangshijian">{{response.kehu.kehuyongfangshijian|times}}</mt-cell>
        <mt-cell title="是否负责人" style="color: #333;" disabled placeholder=""  v-model="response.kehu.shifoufuzeren==''?'无':response.kehu.shifoufuzeren"></mt-cell>
        <mt-cell title="下次渠道推荐说明" style="color: #333;" disabled placeholder=""  v-model="response.kehu.xiaciqvdaoshuoming==''?'无':response.kehu.xiaciqvdaoshuoming"></mt-cell>
        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <div v-for="(cell,index1) in response.fangZis"
             :key="index1"
        >
            <mt-cell :title="response.fangZis[index1].loupan+'-'+response.fangZis[index1].loudong+'-'+response.fangZis[index1].fangjian"></mt-cell>
            <div class="line_b">
                <span style="margin-left: 0.4rem;">
                    <a href="javascript:;" :style="cell.manyido1=='满意'?'color:#fba62d':'color:#f74747'">{{cell.manyido1}}</a>
                </span>
                <br>
                <div style="padding-left: 0.3rem;line-height: .7rem;margin-bottom: .1rem;">
                    <mt-button v-if="index<3" v-for="(item,index) in cell.manyido2" :key="index"  plain class="comment_btn1 btn_active">
                        {{item}}
                    </mt-button>
                    <mt-button v-if="index>=3" v-for="(item,index) in cell.manyido2" :key="index"  plain class="comment_btn btn_active">
                        {{item}}
                    </mt-button>
                </div>

            </div>
            <mt-field type="textarea" rows="4" disabled v-model="cell.kehuyijian" placeholder=""></mt-field>
            <div class="title2"></div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                response:{},
                enum1:[],
                enum2:[],
                property:[],
            }
        },
        methods:{
            getEnum(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getEnum.do',{"key":"manyido1"}).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        this.enum1 = response.data;
                    }
                });
                this.$http.post(this.$api+'/yhcms/web/qddaka/getEnum.do',{"key":"manyido2"}).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        this.enum2 = response.data;
                    }
                });
            },
            getDetail(){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getQdDaka.do',{id:this.$route.params.id}).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        this.response = response.data;
                        this.response.fangZis.forEach((property,index)=>{
                            var obj = {
                                id:property.id,
                                manyido1:'',
                                manyido2:[],
                                kehuyijian:'',
                            };
                            this.property.push(obj)
                        })
                    }

                });
            },
        },
        mounted(){
            this.getEnum();
            this.getDetail();
            document.title = '查看评价';
        }
    }
</script>