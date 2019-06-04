<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		bottom: 0;
  		right: 0;
  	}
  	.header{
  		position: absolute;
  		top: 0;
  		width: 100%;
  		background: #fff;
  		.nav{
  			display: flex;
  			li{
  				position: relative;
  				width: 50%;
  				height: 1rem;
  				line-height: 1rem;
  				font-size: @font30;
  				text-align: center;
  			}
  			li:first-child span{
  				position: absolute;
  				top: 50%;
  				right: 0;
  				margin-top: -0.25rem;
  				display: inline-block;
  				width: 1px;
  				height: 0.5rem;
  				background: #dcdcdc;
  			}
  		}
  	}
  	.active{color:#3586f2;}
  	.active:after{
  		position: absolute;
  		left: 50%;
  		margin-left: -0.7rem;
  		bottom: 0;
  		content: "";
  		width: 1.4rem;
  		height: 0.03rem;
  		background: #3586f2;
  	}
  	.list_box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		top: 1rem;
  		bottom: 0;
  		overflow: auto;
  		ul{padding-bottom: 1rem;}
  	}
  	.list li{
  		width:7.06rem;
		margin:0.25rem auto 0;
		border-radius: 0.07rem;
		background:#fff;
		background-size:7.06rem 2.05rem;
		-webkit-box-shadow:0px 0px 7px #dbdae0; 
		box-shadow:0px 0px 7px #dbdae0;
		padding: 0.2rem 0.16rem;
		font-size:@font26;
		p:nth-child(1){
			position: relative;
			font-weight: bold;
			i{
				position: absolute;
				right: 0;
				color: #959595;
				font-weight: normal;
			}
		}
		p{
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom:0.15rem;
			span{
				display: inline-block;
				width: 5rem;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
		}
		p:last-child{margin-bottom: 0;}
  	}
</style>

<template>
	<div class="box">
		<div class="header">
			<ul class="nav">
				<li :class="tabq=='0'?'active':''" @click='clk(0)'>未确认({{pendData.length}})<span></span></li>
				<li :class="tabq=='1'?'active':''" @click='clk(1)'>已确认({{passData.length}})</li>
			</ul>
		</div>
		<!--列表-->
		<div class="list_box">
			<!--未确认-->
			<ul class="list" v-if="tabq=='0'">
				<li v-for="item in pendData">
					<p><span>{{item.loupan}}</span><i>2017-12-16</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">销售联系人：{{item.xiaoshou}}</p>
					<p>
						<i v-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3684f3;">审核中</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审核完成</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
			</ul>
			<!--已确认-->
			<ul class="list" v-if="tabq=='1'">
				<li v-for="item in passData">
					<p>{{item.loupan}}<i>2017-12-16</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">合同编号：{{item.htbianhao}}</p>
					<p>
						<i v-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3684f3;">审核中</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审核完成</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Indicator } from 'mint-ui';
import axios from 'axios';
	export default{
		data(){
			return{
				tabq:'0',
				pendData:[],//未确认数据
				passData:[],//已确认数据
			}
		},
		created(){
			 this.init();
			 this.init1();
		},
		methods:{
			init(){//待处理接口
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForQvdao.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"zt":0
	            }).then((res)=>{
	            	this.pendData = res.data.data;
					Indicator.close();
					console.log(res);
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
			init1(){//已处理接口
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForQvdao.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
				console.log(cookxs);
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"zt":1
	            }).then((res)=>{
	            	this.passData = res.data.data;
					Indicator.close();
	                console.log(this.passData);
	            }, (err)=>{
	            	Indicator.close();
	               console.log(err);
	            });
			},

			clk(cut){
			console.log(cut)
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				this.tabq = cut;
				if(cut=='0'){
					this.init();//待处理数据
				}
				if(cut=='1'){
					this.init1();//已处理数据
				}
			}
		}
	}
</script>
