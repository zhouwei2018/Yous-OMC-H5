<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow: hidden;
  	}
  	.content{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow: auto;
  		padding-bottom: 1rem;
  		.header{
  			display: flex;
  			display: -webkit-flex;
  			flex-direction: column;
  			justify-content: center;
  			-webkit-justify-content: center;
  			min-height: 1.5rem;
  			height: auto;
  			background: #fff;
  			padding: 0 0 0 0.48rem;
  			p{padding: 0.25rem 0.33rem 0 0;}
  			p:first-child{
  				font-size: @font30;
  				color: #313131;
  				margin-bottom: 0.15rem;
  			}
  			p:last-child{
  				font-size: @font24;
  				color: #979797;
  				padding-bottom:0.3rem;
  				border-bottom: 1px solid #e4e4e4;
  				i{float: right;color: #3785f2;}
  			}
  			ul{
  				border-bottom: 1px solid #e4e4e4;
  				padding: 0.3rem 0;
  				display: flex;
  				li{position: relative;}
  				li:first-child{
  					width: 0.75rem;
  					height: 0.75rem;
  					margin-right: 0.25rem;
  					img{width: 100%;height: auto;}
  				}
				.name{font-size: @font30;color: #323232;}
				.state{font-size: @font26;color: #c9c9c9;}
				.state_pic{
					position: absolute;
					left: 3.5rem;
					top: 0.25rem;
					display: inline-block;
					width: 1.45rem;
					height: 1.45rem;
					background: url(../../resources/images/commission/icon1.png) no-repeat center;
					background-size: cover;
					animation: change .5s linear;
				}
  			}
  		}
  		.list{
  			padding-left: 0.48rem;
  			background: #fff;
  			li{
  				font-size: @font30;
  				color: #323232;
  				padding: 0.2rem 0.33rem 0.2rem 0;
  				border-bottom: 1px solid #e4e4e4;
  				p{
  					margin-bottom: 0.2rem;
  					span:first-child{
  						display: inline-block;
  						width: 1.2rem;
  						text-align: right;
  						color: #969696;
  						margin-right: 0.2rem;
  					}
  				}
  			}
  		}
  		.img_box{
  			display: flex;
  			position: relative;
  			height: auto;
  			font-size: 0.3rem;
  			color: #313131;
  			background: #fff;
  			padding: 0.25rem 0 0.25rem 0.48rem;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			.pic{width: 1.2rem;color: #969696;text-align: right;}
  			.pic_img{
  				span{
  					display: inline-block;
  					width: 0.9rem;
  					height: 0.9rem;
  					margin: 0 0 0.15rem 0.2rem;
  					img{width: 100%; height: 100%;}
  				}
  				
  			}
  		}
  		.plan{
  			background: #fff;
  			margin-top: 0.2rem;
  			padding: 0.2rem 0 0.2rem 0.28rem;
  			font-size: @font28;
  			color:#636363;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			ul li{position: relative;margin: 0.2rem 0;}
  			ul li:last-child .line{display: none!important;}
  			.plan_t{
  				display: flex;
  				display: -webkit-flex;
  				align-items: center;
  				-webkit-align-items: center;
  				span{display: inline-block;}
  				span:first-child{
  					position: relative;
  					z-index: 9;
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  					i{
  						position: absolute;
  						bottom: -0.6rem;
  						left: 50%;
  						margin-left: -0.01rem;
  						display: inline-block;
  						width: 0.02rem;
  						height: 0.6rem;
  						border-left: 1px dashed #3d3331;
  					}
  				}
  				span:nth-child(2){margin: 0 0.25rem 0 0.3rem;}
  				span:last-child{color: #0dae60;}
  			}
  			.plan_b{
  				margin-left: 1rem;
  				color: #313131;
  			}
  			.date{
  				position: absolute;
  				right: 0.33rem;
  				top: 50%;
  				height: 0.3rem;
  				margin-top: -0.15rem;
  				color: #969696;
  			}
  		}
  		/*抄送人*/
  		.copyto{
  			/*height: 2.6rem;*/
  			margin-top: 0.2rem;
  			background: #fff;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			font-size: @font30;
  			color: #646464;
  			padding: 0.3rem 0.3rem 0.3rem 0.4rem;
  			.tip span:first-child{color: #323232;margin-right: 0.40rem;}
  			.copy_add{
  				width: 0.7rem;
  				height: 0.7rem;
  				border-radius: 50%;
  				font-size: @font54;
  				text-align: center;
  				background: #f0eff5 url(../../resources/images/plus1.png) no-repeat center;
  				background-size: 50% auto;
  			}
  			.copy_list{
  				display: flex;
  				display: -webkit-box;
  				overflow: auto;
  				li{
  					position: relative;
  					height: 1.5rem;
  					margin-right: 0.45rem;
  					p{margin-top: 0.15rem;text-align: center;}
  					span{
  						position: absolute;
  						top: 0.15rem;
  						right: -0.15rem;
  						display: inline-block;
  						width: 0.3rem;
  						height: 0.3rem;
  						border-radius: 50%;
  						background: #010101 url(../../resources/images/close1.png) no-repeat center;
  						background-size: 50%;
  					}
  				}
  				.picimg{
  					width: 0.7rem;
  					height: 0.7rem;
  					img{width: 100%;}
  				}
  			}
  		}
  	}
  	/*合同摘要弹框*/
  	.pop_box{
  		position: fixed;
  		z-index: 9;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  		background: rgba(0,0,0,0.3);
  		.pop{
			width: 6.75rem;
			margin: 2.1rem auto 0;
			border-radius: 0.08rem;
			-webkit-box-shadow:0px 0px 10px #C5C4C9;
			box-shadow:0px 0px 10px #C5C4C9;
			background: #f0eff5;
			overflow: hidden;
			h3{
				border-top-left-radius: 0.08rem;
				border-top-right-radius: 0.08rem;
				height: 0.95rem;
				line-height: 0.95rem;
				font-weight: bold;
				background: #eeeeee;
				font-size: @font34;
				text-align: center;
				-webkit-box-shadow:0px 0px 8px #d9d9d9;
				box-shadow:0px 0px 8px #d9d9d9;
			}
			.brief{
				li{
					font-size: @font26;
					color: #464646;
					padding: 0.3rem 0.25rem;
					background: #fff;
					margin-bottom: 0.15rem;
					p{margin-bottom: 0.2rem;}
					p span:first-child{
						font-weight: bold;
						color: #323232;
					}
					p span:last-child{float: right;}
				}
				li:last-child,p:last-child{margin-bottom: 0;}
			}
		}
  	}
  	@keyframes change{
		from {
			width: 3.45rem;
			height: 3.45rem;
			top: 50%;
			left: 50%;
			margin-left: -0.725rem;
		}
		to {
			width: 1.45rem;
			height: 1.45rem;
			top: 0.25rem;
			left: 3.5rem;
		}
	}
	.bigfp{
  		position: fixed;
  		z-index: 99;
  		left: 0;
  		right: 0;
  		top: 0;
  		bottom: 0;
  		overflow: auto;
  		background: rgba(0,0,0,0.5);
  		display: table-cell;
        text-align: center;
        img{
        	vertical-align: middle;
        	max-width: 100%;
        }
        span{
        	display: inline-block;
        	height: 100%;
        	vertical-align: middle;
        }
  	}
</style>

<template>
	<div class="box">
		<div class="content">
			<div class="header">
				<ul>
					<li>
						<img src="../../resources/images/commission/head_img.png" alt="" />
					</li>
					<li>
						<div class="name">{{allData.xiaoshou}}</div>
						<div class="state">抄送给您</div>
						<span class="state_pic"></span>
					</li>
				</ul>
				<p>
					<span>项目房间号：</span>
					<span>{{allData.loupan}} {{allData.loudong}}-{{allData.fanghao}}</span>
				</p>
				<p>
					<span>合同编号：</span>
					<span>{{allData.htbianhao}}<i @click="pops(true)">合同摘要</i></span>
				</p>
			</div>
			<ul class="list">
				<li>
					<p>
						<span>渠道账号</span>
						<span>{{allData.xsqvdaotel}}</span>
					</p>
					<p>
						<span>渠道门店</span>
						<span>暂无此字段需要核对</span>
					</p>
					<p>
						<span>渠道人员</span>
						<span>{{allData.xsqvdao}}</span>
					</p>
				</li>
				<li>
					<p>
						<span>申领金额</span>
						<span>￥{{allData.xsyongjin | splitK}}</span>
					</p>
					<p>
						<span>佣金信息</span>
						<span>{{allData.xsyongjinxinxi==true?"正常":"不正常"}}</span>
					</p>
					<p>
						<span>计算公式</span>
						<span>{{allData.xsjisuangongshi}}</span>
					</p>
				</li>
				<li>
					<p>
						<span>收款方</span>
						<span>{{allData.qdhuming}}</span>
					</p>
					<p>
						<span>开户行</span>
						<span>{{allData.qdkaihuhang}}</span>
					</p>
					<p>
						<span>银行账号</span>
						<span>{{allData.qdzhanghao | delkg}}</span>
					</p>
				</li>
				<li>
					<p style="margin-bottom: 0;">
						<span>渠道备注</span>
						<span>{{allData.qdbeizhu}}</span>
					</p>
				</li>
				
			</ul>
			<!--上传图片-->
			<div class="img_box">
				<p class="pic">图片</p>
				<p style="margin-bottom: 0;" class="pic_img">
					<span v-for="item in allData.imgList" @click="fdtp(item.imgFapiao)">
						<img :src="item.imgFapiao" alt="" />
					</span>
				</p>
			</div>
			<!--申请进度-->
			<div class="plan">
				<ul>
					<li v-for="item in this.spData" :style="item.shenpi == 2?'padding-bottom:0.6rem':''">
						<p class="plan_t">
							<span><img src="../../resources/images/commission/head_img.png" title="" alt=""/><i class="line" v-if="item.shenpi != 2"></i></span>
							<span>{{item.person}}</span>
							<span :style="item.shenpi!=1?'color: #ff7072':''">{{item.shenpi==1?"已审批":"待审批"}}</span>						
						</p>
						<p class="plan_b">{{item.shuoming}}</p>
						<p class="date">{{item.shenpitime | time}}</p>
						<p v-if="item.shenpi == 2" style="position: absolute;width: 7.5rem;height:0.1rem;background:#f0eff5;left: -0.28rem;bottom: 0;"></p>
					</li>
				</ul>
			</div>
			<!--抄送人-->
			<div class="copyto">
				<p class="tip">
					<span>抄送人</span>
					<span>审批通过后，通知抄送人</span>
				</p>
				<ul class="copy_list">
					<li v-for="(item,index) in this.splist.chaosong">
						<p class="picimg"><img src="../../resources/images/commission/head_img.png" title="" alt=""/></p>
						<p class="copy_name">{{item.personname}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!--合同摘要弹框-->
		<div class="pop_box" v-if='popshow'  @click="pops(false)">
			<div class="pop">
				<h3>合同摘要</h3>
				<ul class="brief">
					<li>
						<p>
							<span>总租期：</span>
							<span>{{compact.startdate | timed}}-{{compact.enddate | timed}}</span>
							<span></span>
						</p>
					</li>
					<li v-if='compact.zujinList && compact.zujinList.length != 0'>
						<!--租金租期信息compact.zujinList-->
						<p v-for="(item,index) in compact.zujinList">
							<span>租期{{index + 1}}：</span>
							<span>{{item.startdate | timed}}-{{item.enddate | timed}}</span>
							<span>￥{{item.yuezujin | splitK}}</span>
						</p>
					</li>
					<li v-if='compact.zujinList && compact.fukuanFangshiList.length != 0'>
						<!--付款方式信息compact.fukuanFangshiList-->
						<p v-for="(item,index) in compact.fukuanFangshiList">
							<span>付款方式：</span>
							<span>{{item.startdate | timed}}-{{item.enddate | timed}}（押二付六）</span>
							<span></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<!--大图显示-->
		<div class="bigfp" v-if="fppic" @click="fppic=false">
			<img :src='bigfpsrc'/><span></span>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				popshow:false,//合同摘要弹框
				splist:[],
				compact:{},//合同摘要数据
				allData:{},//页面数据详情
				spData:[],//审批任务流数据
				csData:[],//抄送任务流数据
				nowData:{},//当前审核结点数据
				bigfpsrc:'',//发票路径
		        fppic:false,

			}
		},
		created(){
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
	            	var arrdata = this.spData.slice(0);//数组深拷贝
	            	arrdata.reverse();//反转
	            	for(var m in arrdata){//驳回审批节点数据开始审批
						for(var n in arrdata[m]){
							if(n == 'shenpi' && arrdata[m][n] == 2){
//								console.log('==============shenpi====================');
								this.spData = arrdata.slice(0,Number(m)).reverse();
								return
							}
						}
					}
//					console.log(this.spData);
//					console.log(this.splist);
					for(var i in this.spData){
						for(var j in this.spData[i]){
							if(j == 'isfock' && this.spData[i][j] == false){
								this.nowData = this.spData[i];//当前审核结点数据
//								console.log(this.nowData);
							}
						}
					}
					this.htzy();//获取合同摘要信息
	            }, (err)=>{
					console.log(err);
	            });
			},
			pops(state){//合同摘要
				this.popshow = state;
			},
			htzy(){//合同摘要接口
				const url = this.$api + "/yhcms/web/qdyongjin/getHetongEase.do";
				axios.post(url,{
            		"htid":this.allData.hetongid//合同id
	            }).then((res)=>{
	            	if(res.data.success){
	            		this.compact = res.data.data;
//						console.log(this.compact);
	            	}
	            }, (err)=>{
					console.log(err);
	            });
			},
			fdtp(src){
		      	this.fppic = true;
		      	this.bigfpsrc = src;
	//	      	console.log(src);
		    },
		}
	}
</script>
