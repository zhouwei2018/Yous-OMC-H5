<style lang="less">
    @import "../resources/css/reset.css";
    .radio_class{  background-image: url(../resources/images/icons/circle.png);  }
    .title{  height:0.6rem;width: 100%;  background-color:rgb(235,235,235);  padding-left: 0.2rem;  padding-top: 0.1rem;  color: #333;  font-weight: 500;  font-size: 16px;  }
    .title2{  height:0.2rem;width: 100%;  background-color:rgb(235,235,235);  padding-left: 0.2rem;  padding-top: 0.1rem;  color: #333;  }
    .container{  font-family: "Microsoft YaHei";  background-color: white;  }
    .btnimg{  background-image: url(../resources/images/submit.png);  }
    textarea{  background-color: white!important;  }
    .unique-daikan-add .mint-field .mint-cell-title{width:1.5rem;}
    .unique-daikan-add input::-webkit-input-placeholder {
        text-align: right!important;
    }
    .unique-daikan-add input{text-align: right;}
</style>
<template>
	<div>
	<section id="header">
      <header1></header1>
    </section>
    <section class="section">
    	<div class="container unique-daikan-add">
	        <div class="title">渠道信息</div>
	        <mt-field label="渠道公司" style="color: #333;"  placeholder="请输入渠道公司" v-model="company"></mt-field>
	        <mt-cell
	                v-show="companyShow"
	                v-for="item in companyList"
	                :title="item.gsname"
	                :key="item.id"
	                @click.native="fuzhi0(item)">
	        </mt-cell>
	        <mt-field label="渠道人员" style="color: #333;" placeholder="请输入渠道人员" v-model="person"></mt-field>
	        <mt-cell
	                v-show="personShow"
	                v-for="item in personList"
	                :title="item.qD_PerName"
	                :value="item.value"
	                :key="item.t_QD_Person_ID"
	                @click.native="fuzhi1(item)">
	        </mt-cell>
	        <mt-field label="联系电话" style="color: #333;" placeholder="请输入联系电话"  v-model="tel"></mt-field>
	        <div class="title" >房源信息</div>
	        <div v-for="(cell,index) in property">
	            <div class="title" style="color:rgb(28,119,212);font-weight: normal!important;background-color:white;">房源{{index+1}}<span @click="delProperty(index)" v-if="index>0" style="float: right;color:rgb(28,119,212);padding-right: 0.2rem;">删除</span></div>
	
	            <mt-field label="楼盘" style="color: #333;"  placeholder="请输入楼盘" v-on:input="getLoupan(index)"  v-model="cell.loupan"></mt-field>
	            <mt-cell
	                    v-show="cell.loupanShow"
	                    v-for="item in cell.loupanList"
	                    :title="item.topic"
	                    :value="item.value"
	                    :key="item.id"
	                    @click.native="fuzhi2(index,item)">
	            </mt-cell>
	            <mt-field label="楼栋" style="color: #333;" placeholder="请输入楼栋"  v-on:input="getLoudong(index)" v-model="cell.loudong"></mt-field>
	            <mt-cell
	                    v-show="cell.loudongShow"
	                    v-for="item in cell.loudongList"
	                    :title="item.zdh"
	                    :value="item.value"
	                    :key="item.id"
	                    @click.native="fuzhi3(index,item)">
	            </mt-cell>
	            <mt-field label="房号" style="color: #333;" placeholder="请输入房号" v-on:input="getFanghao(index)" v-model="cell.fangjian"></mt-field>
	            <mt-cell
	                    v-show="cell.fangjianShow"
	                    v-for="item in cell.fangjianList"
	                    :title="item.fybh"
	                    :value="item.value"
	                    :key="item.id"
	                    @click.native="fuzhi4(index,item)">
	            </mt-cell>
	            <!--<input name="Fruit" type="radio" class="radio_class" id="radio_a">-->
	            <!--<label for="radio_a">yes</label>-->
	            <!--<input name="Fruit" type="radio" class="radio_class" id="radio_b">-->
	            <!--<label for="radio_b">no</label>-->
	            <!--<mt-field label="房源地址" placeholder=""  v-model="cell.fangyuandizhi"></mt-field>-->
	            <div class="title2"></div>
	        </div>
	        <div class="title">是否二看</div>
	        <mt-radio
	                style="margin-top: 0px;"
	                title=""
	                v-model="property.shifouerkan"
	                :options="options" @change='clk'>
	        </mt-radio>
	        <div @click="addProperty()" style="text-align: center;color:rgb(28,119,212);"><p style="background-color:white;font-size: 16px;margin-top: 5px;margin-bottom: 5px;border-top: 1px solid #d7d7d7;">
	            <span style="font-size: 20px;">+</span>添加房源</p></div>
	        <div class="title">打卡信息</div>
	        <!--<mt-field label="打卡地址" disabled placeholder="地址获取中......"  v-model="dk_address"></mt-field>-->
	        <mt-field label="说明" style="box-shadow:0 0 1px 0.3px #d7d7d7;background-color: white;" placeholder="请输入打卡说明" rows="4" type="textarea" v-model="info"></mt-field>
	        <div style="width: 100%;text-align: center;margin-top: 1rem;">
	            <mt-button
	                    class="btnimg"
	                    style="
	            width: 80%;height: 0.7rem;
	            color: white;font-size: 0.3rem;
	            " @click="submit()" >提交</mt-button>
	        </div>
	        <div style="height: 2rem;"></div>
	    </div>
    </section>
    </div>
</template>

<script>
import header1 from '../components/header2.vue';
import wx from 'weixin-js-sdk';
import { Toast } from 'mint-ui';
import { MessageBox } from 'mint-ui';
export default{
	components: {
      header1,
    },
    data(){
        return{
            company:'',
            companyId:'',
            companyList:[],
            companyShow:false,
            mark:false,

            person:'',
            personId:'',
            personList:[],
            personShow:false,

            tel:'',

            property:[
                {
                    loupan:'',
                    loupanId:'',
                    loupanList:[],
                    loupanShow:false,

                    loudong:'',
                    loudongId:'',
                    loudongShow:false,
                    loudongList:[],

                    fangjian:'',
                    fangjianId:'',
                    fangjianList:[],
                    fangjianShow:false,
                    shifouerkan:false,
                    fangyuandizhi:'',
                }
            ],
            dk_address:'',
            info:'',
            search:'',
            result:[],
            latitude:0,
            longitude:0,
            validate:true,
            cnt1:0,
            cnt2:0,
            cnt3:0,
            options:[{label:'是',value:'true'}, {label:'否',value:'false'}],
        }
    },
    created(){//判断跳转
    	if(JSON.stringify(localStorage.getItem('cookxs'))){//用户登陆信息
//  		alert(JSON.stringify(localStorage.getItem('cookxs')));
    	}
    },
    watch:{
        company(){
            if(this.company !=""&&!this.mark){
                this.$http.post(this.$api+'/yhcms/web/qduser/getQdCompany.do',{
                    companyName:this.company
                }).then((res)=>{
                    this.companyList = JSON.parse(JSON.stringify(res.data)).data;
                    this.companyShow = true;
                });
            }else{
                this.mark = false;
            }
        },
        person(){
            if(this.person!=""&&!this.mark){
                this.$http.post(this.$api+'/yhcms/web/qddaka/getPersons.do',{
                    gsid:this.companyId,
                    name:this.person,
                }).then((res)=>{
                    this.personList = JSON.parse(JSON.stringify(res.data)).data;
                    this.personShow = true;
                });
            }else{
                this.mark = false;
            }
        },
    },
    methods:{
        getPositionByGps(){
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.locationSuccess, this.locationError,{
                    // 指示浏览器获取高精度的位置，默认为false
                    enableHighAcuracy: true,
                    // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
                    //timeout: 5000,
                    // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
                    maximumAge: 3000
                });
            }else{
                alert("Your browser does not support Geolocation!");
            }
        },
        getPositionByBmap(){
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    var mk = new BMap.Marker(r.point);
                    var currentLat = r.point.lat;
                    var currentLon = r.point.lng;
                    console.log(currentLat)
                    console.log(currentLon)
                    var pt = new BMap.Point(currentLon, currentLat);
                    var geoc = new BMap.Geocoder();
                    geoc.getLocation(pt, function (rs) {
                        var addComp = rs.addressComponents;
                        var city = addComp.city;
                        var addComp = rs.addressComponents;
                        var texts = addComp.district + "-" + addComp.street + "-" + addComp.streetNumber;
                        //获取地理位置成功，跳转
                    })
                }
            })
        },
        getPositionByWx(){
            var _this =this;
            this.$http.get(
                'http://omc.urskongjian.com/yhcms/web/weixin/share.do?url='+document.URL,
                {url: document.URL}
                ).then((response) => {
                let res = response.data
                if (res.code === '04') {
                    return
                }
                let wxjssdk = JSON.parse(res);
                wx.config({
                    debug: false,
                    appId: wxjssdk.appId,
                    timestamp: wxjssdk.timestamp,
                    nonceStr: wxjssdk.nonceStr,
                    signature: wxjssdk.signature,
                    jsApiList: ['getLocation','openLocation']
                })
                wx.ready(function () {
                    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
                    wx.getLocation({
                        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                        success: function (res) {
                            this.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                            this.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                            //var speed = res.speed; // 速度，以米/每秒计
                            //var accuracy = res.accuracy; // 位置精度
                            console.log(this.longitude)
                            _this.getAddress(res.latitude,res.longitude);
                        },
                        cancel: function (res) {
                            alert('用户拒绝授权获取地理位置');
                        }
                    });
                    wx.checkJsApi({
                        jsApiList: ['getLocation'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
                        success: function(res) {
                            // 以键值对的形式返回，可用的api值true，不可用为false
                            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
                            //console.log(res)
                        }
                    });
                })
                wx.error(p => {
                    console.log(p)
                })
            }, (response) => {})
        },
        locationSuccess(position){
            console.log(position.coords.latitude)
            console.log(position.coords.longitude)
            this.latitude =position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.getAddress(position.coords.latitude,position.coords.longitude);
        },
        locationError: function(error){
            switch(error.code) {
                case error.TIMEOUT:
                    alert("A timeout occured! Please try again!");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert('We can\'t detect your location. Sorry!');
                    break;
                case error.PERMISSION_DENIED:
                    alert('Please allow geolocation access for this to work.');
                    break;
                case error.UNKNOWN_ERROR:
                    alert('An unknown error occured!');
                    break;
            }
        },
        getAddress(latitude,longitude){
            console.log('qingqiudizhi')
            this.$http.post(this.$api+'/yhcms/web/qddaka/getDakaAddress.do',{x:latitude,y:longitude,}).then((res)=>{
               var response = JSON.parse(JSON.stringify(res.data));
               console.log(response.data)
                if(response.success==true){
                    this.dk_address = response.data;
                }
            });
        },
        addProperty(){
            var property =
                    {
                        loupan:'',
                        loupanId:'',
                        loupanList:[],
                        loupanShow:false,

                        loudong:'',
                        loudongId:'',
                        loudongShow:false,
                        loudongList:[],

                        fangjian:'',
                        fangjianId:'',
                        fangjianList:[],
                        fangjianShow:false,
                        fangyuandizhi:'',
                        shifouerkan:false,

                    }
            this.property.push(property);
        },
        delProperty(index){
            this.property.splice(index,1)
        },
        getLoupan(index){
            if(this.loupan!=""&&!this.mark){
                this.$http.post(this.$api+'/yhcms/web/jcsj/getLp.do',{
                    lpname:this.property[index].loupan,
                }).then((res)=>{
                    this.property[index].loupanList = JSON.parse(JSON.stringify(res.data)).data;
                    this.property[index].loupanShow = true;
                    if(this.$route.query.house_id){
                        this.property[this.cnt1].loupanShow =false;
                        this.cnt1=this.cnt1+1;
                    }

                });
            }else{
                this.mark = false;
            }

        },
        getLoudong(index){
            if(this.loudong!=""&&!this.mark){
                this.$http.post(this.$api+'/yhcms/web/jcsj/getLpZd.do',{
                    lpid:this.property[index].loupanId,
                    zdh:this.property[index].loudong,
                }).then((res)=>{
                    this.property[index].loudongList = JSON.parse(JSON.stringify(res.data)).data;
                    this.property[index].loudongShow = true;
                    if(this.$route.query.house_id){
                        this.property[this.cnt2].loudongShow =false;
                        this.cnt2=this.cnt2+1;
                    }

                });
            }else{
                this.mark = false;
            }

        },
        getFanghao(index){
            if(this.fangjian!=""&&!this.mark){
                this.$http.post(this.$api+'/yhcms/web/jcsj/getLpZdFy.do',{
                    zdid:this.property[index].loudongId,
                    fybh:this.property[index].fangjian,
                }).then((res)=>{
                    this.property[index].fangjianList = JSON.parse(JSON.stringify(res.data)).data;
                    this.property[index].fangjianShow = true;
                    if(this.$route.query.house_id){
                        this.property[this.cnt3].fangjianShow =false;
                        this.cnt3=this.cnt3+1;
                    }

                });
            }else{
                this.mark = false;
            }

        },
        getFangyuan(){
            this.$http.post(this.$api+'/yhcms/web/qddaka/getHouseForId.do',{id:this.$route.query.house_id}).then((res)=>{
                this.property[0].loupan = JSON.parse(JSON.stringify(res.data)).data.loupan;
                this.property[0].loupanId = JSON.parse(JSON.stringify(res.data)).data.loupanid;
                this.property[0].loudong = JSON.parse(JSON.stringify(res.data)).data.loudong;
                this.property[0].loudongId = JSON.parse(JSON.stringify(res.data)).data.loudongid;
                //this.property[0].loudongShow = false;
                this.property[0].fangjian = JSON.parse(JSON.stringify(res.data)).data.houseno;
                this.property[0].fangjianId = JSON.parse(JSON.stringify(res.data)).data.houseid;
                //this.property[0].fangjianShow = false;
            })
        },
        fuzhi0(item){
            this.companyShow = false;
            this.companyId = item.id;
            this.company=item.gsname;
            this.mark =true;
        },
        fuzhi1(item){
            this.personShow = false;
            this.personId   = item.t_QD_Person_ID;
            this.person     = item.qD_PerName;
            this.mark =true;

        },
        fuzhi2(index,item){
            this.property[index].loupanShow = false;
            this.property[index].loupanId   = item.id;
            this.property[index].loupan     = item.topic;
            this.mark =true;
        },
        fuzhi3(index,item){
            this.property[index].loudongShow = false;
            this.property[index].loudongId   = item.id;
            this.property[index].loudong     = item.zdh;
            this.mark =true;
        },
        fuzhi4(index,item){
            this.property[index].fangjianShow = false;
            this.property[index].fangjianId   = item.id;
            this.property[index].fangjian     = item.fybh;
            this.mark =true;
        },
        submit(){
//            if(!this.company||!this.companyId){
//                MessageBox('提示', '请输入公司');
//                return;
//            }
//            if(!this.person||!this.personId){
//                MessageBox('提示', '请输入人员');
//                return;
//            }
//            if(!this.tel||!(/^1(3|4|5|7|8)\d{9}$/.test(this.tel))){
//                MessageBox('提示', '请正确输入手机号');
//                return;
//            }

            this.property.forEach((item,index)=>{
                if(!item.loupan||!item.loupanId){
                    this.validate = false;
                    MessageBox('提示', '请输入楼盘');
                    return;
                }else{
                    this.validate = true;
                }
                if(!item.loudong||!item.loudongId){
                    this.validate = false;
                    MessageBox('提示', '请输入楼栋');
                    return;
                }else{
                    this.validate = true;
                }
                if(!item.fangjian||!item.fangjianId){
                    this.validate = false;
                    MessageBox('提示', '请输入房间号');
                    return;
                }else{
                    this.validate = true;
                }
            })
            if(this.validate ==false){
                return;
            }
            this.property.forEach((item,index)=>{
                console.log(item.shifouerkan)
                if(item.shifouerkan=='true'){
                    this.property[index].shifouerkan = true;
                }else if(item.shifouerkan=='false'){
                    this.property[index].shifouerkan = false;
                }
            })
            let para ={
                "dakadizhi":this.dk_address,
                "dianhua":this.tel,
                "dzX":this.latitude,
                "dzY":this.longitude,
                "fangZis":this.property,
                "gongsi":this.company,
                "gongsiid":this.companyId?this.companyId:-1,
                "personid":this.personId,
                "personname":this.person,
                "gongsi":this.company,
                "gongsiid":this.companyId,
                "renyuan":this.person, //渠道人员名称
                "renyuanid":this.personId?this.personId:-1,    //渠道人员ID
                "cookie":JSON.parse(localStorage.getItem('cookxs')),
                "shuoming":this.info,
            }
            this.$http.post(this.$api+'/yhcms/web/qddaka/updateQdDaka.do',para).then((res)=>{
                var response = JSON.parse(JSON.stringify(res.data));
                if(response.success==true){
                    Toast({
                        message: '提交成功',
                        iconClass: 'icon icon-success'
                    });
                    this.$router.push('/daikan_logs');
                }else{
                    Toast({
                        message: response.msg,
                    });
                }
            }).catch(function (error) {
                Toast({
                    message: error,
                    iconClass: ''
                });
            });
        },
        clk(a){
//      	console.log(a);
        	this.property.shifouerkan = a;
        	if(a == "true"){
        		$(".mint-radio:eq(1) span").removeClass('actives');
        		$(".mint-radio:eq(0) span").addClass("activ");
        	}
        	if(a == "false"){
        		$(".mint-radio:eq(0) span").removeClass('activ');
        		$(".mint-radio:eq(1) span").addClass("actives");
        	}
        	console.log(this.property.shifouerkan);
        }
    },
    mounted(){
//        var u = navigator.userAgent;
//        //android
//        if(u.indexOf('Android') > -1 || u.indexOf('Adr') > -1){
//            this.getPositionByGps();
//        }
//        //IOS
//        if(!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
//            this.getPositionByWx();
//        }
        //this.getPositionByWx();
        document.title = '打卡';
        if(this.$route.query.house_id){
            this.getFangyuan();
        }
    }
}

</script>
<style>
/*.mint-radio-input:checked + .mint-radio-core{
	background-color: #26a2ff !important;
	background: #26a2ff !important;
	border-color: #26a2ff !important;
}*/
.mint-radiolist{
	display: flex;
}
/*按钮背景*/
.mint-radio-input:checked + .mint-radio-core{
	/*background-color: rgba(255,255,255,0);*/
	/*background: url(../../resources/images/commission/btn2.png) no-repeat center;
	background-size: cover;*/
}
.mint-cell-wrapper,.mint-cell:last-child,.mint-cell{
	background: none;
}
.mint-radio-input:checked + .mint-radio-core::after{
	background: none;
}
.mint-radio-core{
	border: none;
	background: url(../resources/images/commission/btn.png) no-repeat center;
	background-size: cover;
}

.activ{
	background: url(../resources/images/commission/btn2.png) no-repeat center !important;
	background-size: cover !important;
}
.actives{
	background: url(../resources/images/commission/btn1.png) no-repeat center !important;
	background-size: cover !important;
}
</style>