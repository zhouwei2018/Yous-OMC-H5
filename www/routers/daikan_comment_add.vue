<style  lang="less">
    @import "../resources/css/reset.css";
    .comment_btn1{  border-radius:5px;height: 26px;  width:2.16rem;font-size:0.25rem;  }
    .comment_btn{  border-radius:5px;height: 26px;  width:1.6rem;font-size:0.25rem;  }
    .container{  font-family: "Microsoft YaHei";  background-color: white;  }
    .line_a{  line-height: 3;border-top:0.5px solid;border-color: #d9d9d9;font-size: 16px;  }
    .btnimg{  background-image: url(../resources/images/submit.png);  }
    .title2{  height:0.2rem;width: 100%;  background-color:rgb(235,235,235);  padding-left: 0.2rem;  padding-top: 0.1rem;  color: #333;  }
    .unique-comment-add .mint-cell-title{  flex: inherit;  }
    .unique-kehu .mint-cell-title{  flex: 1;  }
    .unique-comment-add .mint-cell-value{  margin-left: 0.2rem;}
    textarea{  background-color: white;  }
    .pop-right{float: right;color:rgb(28,119,212);font-size: .3rem;padding-right: .2rem;padding-top: .2rem;}
    .pop-left{float: left;color:rgb(28,119,212);font-size: .3rem;padding-left: .2rem;padding-top: .2rem;}
    .unique-comment-add input::-webkit-input-placeholder {
        text-align: right!important;
    }
    .unique-comment-add .mint-field .mint-cell-title{
        width:2.7rem;
    }
    .unique-comment-add input{text-align: right;}
    .comment-info .mint-cell-value{color: #888}
    .comment-add-info .mint-cell-value{color: #000;}

</style>
<template>
    <div class="container unique-comment-add">
        <div class="title2"></div>
        <mt-cell title="渠道公司:" class="comment-info" placeholder=""   v-model="response.gongsi"></mt-cell>
        <mt-cell title="渠道人员:" class="comment-info" placeholder=""   v-model="response.renyuan"></mt-cell>
        <mt-cell title="联系电话:" class="comment-info" placeholder=""   v-model="response.dianhua"></mt-cell>
        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <mt-cell :class="isActive1+' unique-kehu'" title="客户业态" is-link   v-model="yt" @click.native="yetai()">
        </mt-cell>
        <mt-field label="客户预算" style="color: #333;"  type="number" placeholder="请输入数字" v-model="kehuyusuan"></mt-field>
        <mt-field label="需求面积" style="color: #333;"  type="number" placeholder="请输入数字" v-model="kehumianji"></mt-field>
        <mt-field label="办公人数" style="color: #333;"  type="text" placeholder="请输入办公人数" v-model="bangongrenshu"></mt-field>
        <mt-field label="客户所选区域" style="color: #333;"  type="text" placeholder="请输入所选区域" v-model="kehuqvyv"></mt-field>
        <mt-cell :class="isActive2+' unique-kehu'" title="客户用房时间" is-link :value="kehuyongfangshijian" @click.native="yongfangshijian()">
        </mt-cell>
        <mt-cell :class="isActive3+' unique-kehu'" title="是否负责人" is-link :value="shifoufuzeren" @click.native="fuzeren()">
        </mt-cell>
        <mt-field label="下次渠道推荐说明" style="color: #333;"  type="text" placeholder="请输入说明" v-model="xiaciqvdaoshuoming"></mt-field>
        <mt-popup
                style="width:100%;"
                v-model="popupVisible"
                position="bottom"
                popup-transition="popup-fade"
        >
            <div style="margin-bottom: 1rem;">
                <span class="pop-right" @click="confirm">完成</span>
                <span class="pop-left" @click="popupVisible=false;">取消</span>
            </div>
            <mt-picker  :slots="slots" @change="onValuesChange"></mt-picker>
        </mt-popup>
        <mt-popup
                style="width:100%;"
                v-model="fzrpopupVisible"
                position="bottom"
                popup-transition="popup-fade"
                defaultIndex="0"
        >
            <div style="margin-bottom: 1rem;">
                <span class="pop-right" @click="fzrconfirm">完成</span>
                <span class="pop-left" @click="fzrpopupVisible=false;">取消</span>
            </div>
            <mt-picker  :slots="fzrslots" @change="onfzrValuesChange"></mt-picker>
        </mt-popup>
        <mt-datetime-picker
                ref="picker"
                type="date"
                year-format="{value} 年"
                month-format="{value} 月"
                date-format="{value} 日"
                @confirm="yongfangConfirm"
        >
        </mt-datetime-picker>

        <div style="background-color:rgb(235,235,235);height: 15px;width: 100%;"></div>
        <div v-for="(cell,index1) in property"
        :key="index1"
        >
            <mt-cell :title="response.fangZis[index1].loupan+'-'+response.fangZis[index1].loudong+'-'+response.fangZis[index1].fangjian"></mt-cell>
            <div class="line_a">
                <span style="margin-left: 0.2rem;">房间是否满意</span>
                <mt-button v-for="(item,index) in enum1" :key="index" type="default" class="comment_btn" @click="setEnum2(item,index1)" :style="property[index1].manyido1==item.enumValue?sstyle1:ustyle1" plain>{{item.enumValue}}</mt-button>
            </div>
            <div class="line_a" v-if="cell.manyido1">
                <span style="margin-left: 0.2rem">选择您{{cell.manyido1}}的地方</span>
                <br>
                <div style="padding-left: 0.3rem;line-height: .7rem;margin-bottom: .1rem;">
                    <mt-button v-if="index<3" v-for="(item,index) in enum2" :key="index" @click="setEnum(item,index1)" :style="property[index1].manyido2.indexOf(item.enumValue)>-1?sstyle2:ustyle2" plain class="comment_btn1">
                        {{item.enumValue}}
                    </mt-button>
                    <mt-button v-if="index>=3" v-for="(item,index) in enum2" :key="index" @click="setEnum(item,index1)" :style="property[index1].manyido2.indexOf(item.enumValue)>-1?sstyle2:ustyle2" plain class="comment_btn">
                        {{item.enumValue}}
                    </mt-button>
                </div>

            </div>
            <mt-field type="textarea" rows="4" v-model="property[index1].kehuyijian" placeholder="请填写客户的反馈意见"></mt-field>
            <div class="title2"></div>
        </div>
        <div style="width: 100%;text-align: center;margin-top: 1rem;margin-bottom: 2rem;">
            <mt-button
                    class="btnimg"
                    style="
            width: 80%;height: 0.7rem;
            color: white;font-size: 0.3rem;
            " @click="submit()" >提交</mt-button>
        </div>
        <div style="height: 2rem;"></div>

    </div>
</template>
<script>
    import {Toast} from 'mint-ui'; //toast
    import { MessageBox } from 'mint-ui';
    import { DatetimePicker } from 'mint-ui';
    export default{
        data(){
            return {
                yt:'请选择',
                yttmp:'',
                kehuyusuan:null,
                bangongrenshu:null,
                kehuqvyv:null,
                kehumianji:null,
                shifoufuzeren:'请选择',
                xiaciqvdaoshuoming:null,
                kehuyongfangshijian:'请选择',
                popupVisible:false,

                fzrtmp:null,
                fzrpopupVisible:false,
                slots:
                    [{
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center'
                    }],
                fzrslots:
                    [{
                        flex: 1,
                        values: [],
                        className: 'slot3',
                        textAlign: 'center',
                        defaultIndex:0,
                    }],
                response:{},
                enum1:[],
                enum2:[],
                enum3:[],
                sstyle1:'margin-left:0.4rem;background-color:rgb(215,235,255);color:rgb(28,119,212);border-color:lightskyblue;',
                ustyle1:'margin-left:0.4rem;background-color:white;',
                sstyle2:'margin-left:0.1rem;background-color:rgb(215,235,255);color:rgb(28,119,212);border-color:lightskyblue;',
                ustyle2:'margin-left:0.1rem;',
                property:[],
                validate:true,
                isActive1:'',
                isActive2:'',
                isActive3:'',
            }
        },
        methods:{
            confirm(){
                this.yt = this.yttmp;
                this.popupVisible = false;
                this.isActive1 = 'comment-add-info';
            },
            yetai(){
                this.popupVisible = true;
            },
            onValuesChange(picker, values) {
                this.yttmp = values[0];
            },
            yongfangshijian(){
                this.$refs.picker.open();
            },
            yongfangConfirm(value){
                var date = new Date(value);
                var year = date.getFullYear();
                var month = date.getMonth()+1;
                var day = date.getDate();
                if(month<10){month = '0'+month;}
                if(day<10){day = '0'+day;}
                this.kehuyongfangshijian = year+'-'+month+'-'+day;
                this.isActive2 = 'comment-add-info';
            },
            fzrconfirm(){
                this.shifoufuzeren = this.fzrtmp;
                this.fzrpopupVisible = false;
                this.isActive3 = 'comment-add-info';
            },
            fuzeren(){
                this.fzrpopupVisible = true;
            },
            onfzrValuesChange(picker, values) {
                console.log(values)
                this.fzrtmp = values[0];
            },
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
                this.$http.post(this.$api+'/yhcms/web/qddaka/getEnum.do',{"key":"kehuyetai"}).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        this.enum3 = response.data;
                        this.enum3.forEach((item,index)=>{
                            this.slots[0].values.push(item.enumValue)
                        })
                        this.fzrslots[0].values.push('是');
                        this.fzrslots[0].values.push('否');
                    }
                });
            },
            setEnum2(item,index){
                this.property[index].manyido1 = item.enumValue;
                this.property[index].manyido2 = [];
            },
            setEnum(item,index){
                if(this.property[index].manyido2.indexOf(item.enumValue)==-1){
                    this.property[index].manyido2.push(item.enumValue);
                }else{
                    this.property[index].manyido2 = this.property[index].manyido2.filter(t => t != item.enumValue)
                }
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
            submit(){
                this.property.forEach((item,index)=>{
                    if(!item.manyido1){
                        this.validate = false;
                        MessageBox('提示', '满意度必填');
                        return;
                    }else{
                        this.validate = true;
                    }
                    if(item.manyido2.length==0){
                        this.validate = false;
                        MessageBox('提示', '满意度类型必填');
                        return;
                    }else{
                        this.validate = true;
                    }
                })
                if(this.validate == false){
                    return;
                }
                let params = {
                    "kehu":{
                        "dakaid":this.$route.params.id,
                        "kehuyetai":this.yt=='请选择'?'':this.yt,
                        "kehuyusuan":this.kehuyusuan,
                        "kehumianji":this.kehumianji,
                        "bangongrenshu":this.kehumianji,
                        "kehuqvyv":this.kehuqvyv,
                        "kehumianji":this.kehumianji,
                        "shifoufuzeren":this.shifoufuzeren=='请选择'?'':this.shifoufuzeren,
                        "xiaciqvdaoshuoming":this.xiaciqvdaoshuoming,
                        "kehuyongfangshijian":this.kehuyongfangshijian=='请选择'?'':this.kehuyongfangshijian,
                    },
                    "fangzis":this.property,
                }
                this.$http.post(this.$api+'/yhcms/web/qddaka/savePingJia.do',params ).then((res)=>{
                    var response = JSON.parse(JSON.stringify(res.data));
                    if(response.success==true){
                        Toast({
                            message: '提交成功',
                            iconClass: 'icon icon-success'
                        });
                        this.$router.push('/daikan_logs');
                    }
                });
            },
        },
        mounted(){
            this.getEnum();
            this.getDetail();
            document.title = '评价';
        }
    }
</script>
