<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  	}
	.box_t{
		position: absolute;
  		left: 0;
  		right: 0;
  		bottom: 1rem;
  		top: 0;
  		overflow: auto;
  		padding-bottom: 0.5rem;
	}
	.site_card{
		width:7.06rem;
		height:2.05rem;
		margin:0.25rem auto 0;
		border-radius: 0.07rem;
		background:url(../../resources/images/commission/card_bg.png) no-repeat center;
		background-size:7.06rem 2.05rem;
		-webkit-box-shadow:0px 0px 7px #2991f4;
		box-shadow:0px 0px 7px #2991f4;
		color:@cl_white;
		padding: .22rem 0 0 .3rem;
		p:nth-child(1){font-weight: bold;font-size:@font36;}
		p{
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom:0.15rem;
			span:nth-child(2){
				display:inline-block;
				width:5.5rem;
				word-break: break-all;
				white-space: pre-wrap;
			}
		}
		p:last-child{font-size:@font32;}
	}
	.new_box{
		position: relative;
		width:7.06rem;
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow:0px 0px 10px #C5C4C9;
		box-shadow:0px 0px 10px #C5C4C9;
		font-size: @font32;
		background-color:#fff;
		h3{
			border-top-left-radius: 0.08rem;
			border-top-right-radius: 0.08rem;
			height: 0.95rem;
			line-height: 0.95rem;
			font-weight: bold;
			padding-left: 0.3rem;
			background: #eeeeee;
			-webkit-box-shadow:0px 0px 8px #D9D9D9;
			box-shadow:0px 0px 8px #D9D9D9;
		}
		ul{padding: 0.4rem 0.2rem 0.4rem 0.3rem;}
		ul li{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			font-size: @font30;
			p{margin-bottom: 0.2rem;}
			p:first-child{color: #969696;}
			p:last-child{color: #323232;}
			i{font-size: @font26;margin-bottom: 0.2rem;margin-left: .6rem;color: #3287f2;}
		}
		.icon{
			position: absolute;
			top: 0.25rem;
			right: 0.55rem;
			display: block;
			width: 1.45rem;
			height: 1.45rem;
			background: url(../../resources/images/commission/icon1.png) no-repeat center;
			background-size: cover;
			animation: change 1s linear;
		}
	}
	.pop_box{
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0,0,0,0.3);
		z-index: 9;
		.pop{
			width: 6.75rem;
			margin: 2.1rem auto 0;
			border-radius: 0.08rem;
			-webkit-box-shadow:0px 0px 10px #C5C4C9;
			box-shadow:0px 0px 10px #C5C4C9;
			background: #f0eff5;
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
			ul{
				background: #fff;
				padding: 0.3rem 0 0.1rem 0.3rem;
				margin-bottom: 0.16rem;
			}
			ul li{
				display: flex;
				display: -webkit-flex;
				align-items: flex-start;
				-webkit-align-items: flex-start;
				font-size: @font28;
				margin-bottom: 0.2rem;
				p:first-child{color: #323232;font-weight: bold;}
				p:last-child{color: #464646;width: 4.7rem;}
			}
			ul:last-child{
				border-bottom-left-radius: 0.08rem;
				border-bottom-right-radius: 0.08rem;
			}
		}
		
	}
	.turns{
		display: flex;
		font-size: @font30;
		color: #ff7173;
		padding: .25rem 0 .25rem 0.3rem;
		span:last-child{
			width: 5.15rem;
			min-height: 1.1rem;
			height: auto;
			text-align: left;
		}
	}
	.btn{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 1rem;
		border: none;
		line-height: 1rem;
		font-size: @font30;
		color: #3084f6;
		text-align: center;
		background: #ffffff;
		-webkit-box-shadow:0px -2px 8px #DBDAE0; 
		box-shadow:0px -2px 8px #DBDAE0;
	}
	@keyframes change{
		from {
			width: 3.45rem;
			height: 3.45rem;
			top: 50%;
			right: 50%;
			margin-right: -0.725rem;
		}
		to {
			width: 1.45rem;
			height: 1.45rem;
			top: 0.25rem;
			right: 0.55rem;
		}
	}
</style>

<template>
	<div class="box">
		<div class="box_t">
			<div class="site_card">
				<p>{{xsData.loupan}}</p>
				<p>
					<span>{{xsData.loudong}}-</span>
					<span>{{xsData.fanghao}}</span>
				</p>
			</div>
			<!--佣金信息-->
			<div class="new_box">
				<h3>佣金信息</h3>
				<ul>
					<li>
						<p>佣金金额：</p>
						<p>￥{{xsData.xsyongjin | splitK}}</p>
					</li>
					<li>
						<p>渠道姓名：</p>
						<p>{{xsData.xsqvdao}}</p>
					</li>
					<li>
						<p>联系方式：</p>
						<p>{{xsData.xsqvdaotel}}</p>
					</li>
					<li>
						<p>发票类型：</p>
						<p>{{xsData.xsfpleixing}}</p>
						<i @click="invoice">发票抬头</i>
					</li>
				</ul>
				<span class="icon"></span>
			</div>
			<!--收款方信息-->
			<div class="new_box">
				<h3>收款方信息</h3>
				<ul>
					<li>
						<p>户名：</p>
						<p>{{xsData.qdhuming}}</p>
					</li>
					<li>
						<p>开户行：</p>
						<p>{{xsData.qdkaihuhang}}</p>
					</li>
					<li>
						<p>银行账号：</p>
						<p>{{xsData.qdzhanghao | delkg}}</p>
					</li>
				</ul>
			</div>
			<!--审批意见-->
			<div class="new_box" v-if="false">
				<p class="turns">
					<span>审批意见：</span>
					<span>{{xsData.qdbeizhu}}</span>
				</p>
			</div>
		</div>
		<!--发票抬头弹框-->
		<div class="pop_box" v-if="popshow" @click="popbox">
			<div class="pop">
				<h3>发票抬头</h3>
				<ul>
					<li>
						<p>名称：</p>
						<p>{{xsData.xsfpdanwei}}</p>
					</li>
					<li>
						<p>税号：</p>
						<p>{{xsData.xsfpnashuiren}}</p>
					</li>
				</ul>
				
				<ul v-if="xsData.xsfpdizhidianhua">
					<li>
						<p>电话：</p>
						<p>{{xsData.xsfpdizhidianhua.split(' ')[1]}}</p>
					</li>
					<li>
						<p>地址：</p>
						<p>{{xsData.xsfpdizhidianhua.split(' ')[0]}}</p>
					</li>
					<li>
						<p>开户银行：</p>
						<p>{{xsData.xsfpkaihuhang.split(' ')[0]}}</p>
					</li>
					<li>
						<p>银行账号：</p>
						<p>{{xsData.xsfpkaihuhang.split(' ')[1] | delkg}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!--提交-->
		<button class="btn" @click="cxtj" v-if="zt == 1">重新提交</button>
	</div>
</template>

<script>
import axios from 'axios';
	export default{
		data(){
			return{
				popshow:false,
				xsData:{},
				xsid:'',
				zt:1,
			}
		},
		created(){
			this.xsid = this.$route.query.xsid;
			this.zt = this.$route.query.zt;//处理状态1未处理，0已处理
			this.takexs();//获取销售人员信息
		},
		methods:{
			takexs(){//获取销售人员信息
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForid.do";
				axios.post(url,{ 
            		"id":this.xsid,
	            }).then((res)=>{
	            	this.xsData = res.data.data;
//	            	console.log(this.xsData);
	            }, (err)=>{
					console.log(err);
	            });
			},
			invoice(){//发票抬头
				this.popshow = true;
			},
			popbox(){
				this.popshow = false;
			},
			cxtj(){
				this.$router.push({
					path:'/commission',//跳转佣金信息
					query:{
						"xsid":this.xsData.id,//所传参数
						"zt":this.zt//处理状态1未处理，2已处理
					}
				})	
			}
		},
		mounted(){
			
		},
		
	}
</script>
