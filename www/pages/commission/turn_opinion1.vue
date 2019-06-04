<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		
  	}
  	.idea_box{
  		width: 7.05rem;
  		height: 4.5rem;
  		margin: 0.2rem auto 0;
  		border-radius: 0.08rem;
  		background: #fff;
  		padding: 0.35rem 0.25rem;
  		-webkit-box-shadow:0px 0px 5px #c5c4c9; 
  		box-shadow:0px 0px 5px #c5c4c9;
  		textarea{
  			font-size: @font36;
  			border: none;
  			height: 100%;
  			padding: 0;
  			background: #fff;
  		}
  	}
  	.btn{
  		display: block;
  		border: none;
  		border-radius: 0.06rem;
  		width: 5.5rem;
  		height: 0.75rem;
  		background: url(../../resources/images/commission/btn_bg.png) no-repeat center;
  		background-size: cover;
  		margin: 5.6rem auto 0.95rem;
  		font-size: @font34;
  		color: #fff;
  		text-align: center;
  		position: absolute;
		left: 50%;
		margin-left: -2.75rem;
  	}
</style>

<template>
	<div class="box">
		<!--填写区域-->
		<div class="idea_box">
			<textarea name="" placeholder="请输入您的驳回理由（必填）" v-model="idea"></textarea>
		</div>
		<button class="btn" @click="betrue">确认驳回</button>
	</div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				idea:'',	
				shenpi:'',//审批状态1同意2驳回
				splist:[],
				allData:{},//页面数据详情
				spData:[],//审批任务流数据
				csData:[],//抄送任务流数据
				nowData:{},//当前审核结点数据
			}
		},
		created(){
			this.shenpi = this.$route.query.shenpi;//审批状态
			this.takexs();//获取单个销售信息
		},
		methods:{
			takexs(){//获取销售人员信息
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForid.do";
				axios.post(url,{ 
            		"id":this.$route.query.id,
	            }).then((res)=>{
	            	this.allData = res.data.data;
//					console.log(this.allData);
					this.obtaintask();//获取任务流
	            }, (err)=>{
					console.log(err);
	            });
			},
			obtaintask(){//获取任务流
				const url = this.$api + "/yhcms/web/qdyongjin/getSpStream.do";
				axios.post(url,{ 
            		"id":this.allData.id,
	           }).then((res)=>{
	           		this.splist = res.data.data;
	            	this.spData = res.data.data.shenpi;
	            	this.csData = res.data.data.chaosong;
//					console.log(this.spData);
//					console.log(this.splist);
					for(var i in this.spData){
						for(var j in this.spData[i]){
							if(j == 'isfock' && this.spData[i][j] == true){
								this.nowData = this.spData[i];//当前审核结点数据
//								console.log(this.nowData);
							}
						}
					}
	            }, (err)=>{
					console.log(err);
	            });
			},
			approve(){//审批
		      	const url = this.$api + "/yhcms/web/qdyongjin/Sp.do";
		      	var cookxs = JSON.parse(localStorage.getItem('cookxs'));
				axios.post(url,{
					"cookie":cookxs,
	        		'id':this.nowData.id,
					'sourcetype':this.nowData.sourcetype,
					'sourcemid':this.nowData.sourcemid,
					'itemid':this.nowData.itemid,
					'shenpi':this.shenpi,
					'personid':this.nowData.personid,
					'person':this.nowData.person,
					'shuoming':this.idea,
					'banben':this.nowData.banben,
					'sptype':this.nowData.sptype,
					'persontype':this.nowData.persontype,
					'isfock':this.nowData.isfock,
					'pici':this.nowData.pici
	            }).then((res)=>{
					if(res.data.success){
	//					this.btnshow = 0;
						Toast({
							message: '审批成功',
							position: 'center',
							duration: 2000
						});
						this.$router.push({
//							path:'/commission_ask1',//跳转审批确认列表
							path:'/yjgl_list',//跳转佣金管理列表
							resault:'success'//提交成功后回到列表根据该字段刷新页面
						})
//						location.reload();
					}
//					console.log(res);
	            }, (err)=>{
					console.log(err);
	            });
		    },
		    betrue(){
		    	if(this.idea != ""){
		    		this.approve();		    		
		    	}else{
		    		Toast({
						message: '驳回意见不能为空！',
						position: 'center',
						duration: 2000
					});
		    	}
		    },
		},
	}
</script>
