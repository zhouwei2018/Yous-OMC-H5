<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		bottom: 0;
  		right: 0;
  		background: #fff;
  	}
  	.header{
  		position: absolute;
  		top: 0;
  		width: 100%;
  		background: #fff;
  		-webkit-box-shadow:0px 2px 3px #D6D6D6; 
  		box-shadow:0px 2px 3px #D6D6D6;
  		z-index: 1;
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
  			li span{
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
  		margin-left: -0.91rem;
  		bottom: 0;
  		content: "";
  		width: 1.82rem;
  		height: 0.03rem;
  		background: #3586f2;
  	}
  	.list_box{
  		position: absolute;
  		left: 0;
  		right: 0;
  		top: 1rem;
  		bottom: 0;
  		overflow-x: hidden;
  		overflow-y: scroll;
  		-webkit-overflow-scrolling: touch;
  		ul{padding-bottom: 1rem;}
  	}
  	.list li{
  		position: relative;
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
  	.list li:hover{background: #eee !important;}
  	.reddot{
  		position: absolute;
  		top: 50%;
  		right: 0.3rem;
  		margin-top: -0.075rem;
  		display: inline-block;
  		width: 0.15rem;
  		height: 0.15rem;
  		background: #fb4949;
  		border-radius: 50%;
  	}
  	.kong{
  		display: flex;
  		flex-direction: column;
  		justify-content: center;
  		align-items: center;
  		margin-top: 1.62rem;
  		.k_ion{
  			width: 2.12rem;
  			height: 1.55rem;
  			img{width: 100%;}
  		}
  		.k_text{
  			font-size: @font30;
  			color: #999;
  			text-align: center;
  			margin-top: 0.46rem;
  		}
  	}
  	.jzgd{
  		display: flex;
  		justify-content: center;
  		margin-top: 0.3rem;
  	}
</style>

<template>
	<div class="box">
		<div class="header">
			<ul class="nav">
				<li :class="tabq=='0'?'active':''" @click='clk(0)'>待确认({{pendData.length}})<span></span></li>
				<li :class="tabq=='1'?'active':''" @click='clk(1)'>已确认({{passData.length}})</li>
				<!--<li :class="tabq=='2'?'active':''" @click='clk(2)'>抄送我的(0)</li>-->
			</ul>
		</div>
		<!--列表-->
		<div class="list_box">
			<!--待处理-->
			<div class="kong" v-if="pendData.length==0 && kshow && tabq=='0'">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无待确认记录</p>
			</div>
			<!--已处理-->
			<div class="kong" v-if="passData.length==0 && kshow1 && tabq=='1'">
				<p class="k_ion">
					<img src="../../resources/images/commission/k_icon.png" alt="" />
				</p>
				<p class="k_text">暂无已确认记录</p>
			</div>
			<!--待我审批-->
			<ul class="list" v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10" infinite-scroll-immediate-check="checked">
				<li v-for="(item,index) in pendData" @click="waitme(item.id)" v-if="tabq=='0'">
					<p><span>{{item.loupan}}</span><i>{{item.createdate | times}}</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">合同编号：{{item.htbianhao}}</p>
					<p>
						<i v-if="item.taskZt=='0'" style="color: #3886f2;">待提交</i>
						<i v-else-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3687f3;">待确认</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审批通过</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
				<!--已确认-->
				<li v-for="item in passData"  @click="done(item.id)" v-if="tabq=='1'">
					<p>{{item.loupan}}<i>{{item.createdate | times}}</i></p>
					<p>
						<span>{{item.loudong}}-{{item.fanghao}}</span>
					</p>
					<p style="color:#959595;">合同编号：{{item.htbianhao}}</p>
					<p>
						<i v-if="item.taskZt=='0'" style="color: #3886f2;">待提交</i>
						<i v-else-if="item.taskZt=='1'">已提交</i>
						<i v-else-if="item.taskZt=='2'" style="color: #3687f3;">审核中</i>
						<i v-else-if="item.taskZt=='3'" style="color: #0fad60;">审批通过</i>
						<i v-else-if="item.taskZt=='4'" style="color: #ff716f;">已驳回</i>
						<i else></i>
					</p>
				</li>
				<div class="jzgd" v-if="jz">					
					<mt-spinner type="fading-circle" :size="30"></mt-spinner>
				</div>
			</ul>

		</div>
	</div>
</template>

<script>
import axios from 'axios';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
import { InfiniteScroll } from 'mint-ui';
	export default{
		data(){
			return{
				tabq:'0',
				pendData:[],//未审核数据
				passData:[],//已审核数据
				kshow:true,//未处理无数据下的状态
				kshow1:false,//已处理无数据下的状态
				loading:false,
				noMore:false,
				checked:false,
				
				page:1,//当前页
				page1:1,//当前页
				size:10,//每次请求条数
				dataqq:false,//切换点击请求数据状态
				dataqq1:false,//切换点击请求数据状态1
				jz:false,//底部加载图标
			}
		},
		created(){
			if(this.$store.state.tabzt != ''){//tab切换状态
				this.tabq = this.$store.state.tabzt;
			}
			if(this.$store.state.page1 != ''){//当前数据页
				this.page1 = this.$store.state.page1;
			}
			if(this.$store.state.page != ''){//当前数据页
				this.page = this.$store.state.page;
			}
			if(this.$store.state.datas != ''){//当前tab数据
				this.pendData = this.$store.state.datas;
			}else{		
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				this.init();	
			}
			if(this.$store.state.datas1 != ''){//
				this.passData = this.$store.state.datas1;
			}else{
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				this.init1();
			}
		},
		methods:{
			clk(cut){
				$('.list_box').scrollTop(0);
				this.jz = true;
				Indicator.open({
				  text: 'Loading...',
				  spinnerType: 'fading-circle'
				});
				this.tabq = cut;
				
				this.$store.commit('sendObj',this.tabq);//当前tab状态存入state仓库
				
				if(cut == '0'){
					this.noMore = true;
					this.dataqq1 = true;	
					this.page1 = 1;//当前页
					this.init();
					if(this.pendData.length==0){						
						this.kshow = true;
					}else{
						this.kshow = false;
					}
					this.kshow1 = false;
				}
				if(cut == '1'){
					this.noMore = true;
					this.dataqq = true;					
					this.page = 1;//当前页
					this.init1();
					this.kshow1 = true;
					this.kshow = false;
				}
			},
			init(){//未审核数据接口
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForXiaoShou.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"zt":2,
	            		"page":this.page1,
	            		"size":this.size
	            }).then((res)=>{
	            	if(res.data.data.length == 0){
	            		Toast({
						  message: '人家，是有底线的呢！',
						  position: 'bottom',
						  duration: 2000
						});
						this.jz = false;
					}
	            	if(res.data.success && res.data.data){
	            		this.jz = false;
	            		this.loading = false;
	            		this.noMore = false;
	            		if(this.dataqq1){
	            			this.pendData = res.data.data;
	            			this.dataqq1 = false;
	            		}else{
	            			this.pendData = this.pendData.concat(res.data.data);  
	            		}            		
	            	}else{
	            		this.pendData = [];
	            	}
	            	
					Indicator.close();
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
			init1(){//已审核数据接口
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForXiaoShou.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{ 
	            		"cookie":cookxs,
	            		"zt":3,
	            		"page":this.page,
	            		"size":this.size
	            }).then((res)=>{
	            	if(res.data.data.length == 0){
	            		Toast({
						  message: '人家，是有底线的呢！',
						  position: 'bottom',
						  duration: 2000
						});
						this.jz = false;
					}
	            	if(res.data.success && res.data.data){
	            		this.jz = false;
	            		this.loading = false;
	            		this.noMore = false;
	            		if(this.dataqq){
	            			this.passData = res.data.data;
	            			this.dataqq = false;
	            		}else{
	            			this.passData = this.passData.concat(res.data.data);  
	            		}           		
	            	}else{
	            		this.passData = [];
	            	}
					Indicator.close();
	            }, (err)=>{
	            	Indicator.close();
	            });
			},
		
			waitme(id){
				this.$router.push({
					path:'/confirmed',//跳转到审批页面
					query:{
						"id":id,//所传参数
						"btnshow":1,
					}
				})
			},
			done(id){//审批通过跳转点击
				this.$router.push({
					path:'/confirmed',//跳转到审批页面
					query:{
						"id":id,//所传参数
						"btnshow":0,
					}
				})
			},
			loadMore() {//未确认数据

				if (!this.loading && !this.noMore) {
				  this.loading = true;
				  this.jz = true;
				  Indicator.open({
				    text: 'Loading...',
				    spinnerType: 'fading-circle'
				  });
				  if(this.tabq == 0){	
				  	this.page1 += 1;
				  	this.init();//未确认数据
				  }else{
				  	this.page += 1;
				  	this.init1();//未确认数据
				  }
				}
			},
			
		},
		mounted(){
			this.$store.commit('sendObj',this.tabq);//当前tab状态存入state仓库
			var _this = this;
			if(_this.$store.state.scollposion != ''){//滚动条位置存在则滚动到对应位置
				$('.list_box').scrollTop(_this.$store.state.scollposion);
//				console.log(_this.$store.state.scollposion);
			}else{
				$('.list_box').scrollTop(0);
			}
			$('.list_box').scroll(function() {//记录滚动条位置
			  _this.$store.commit('openRed',$('.list_box').scrollTop());//将滚动条位置存入state仓库
			  if(_this.tabq == '0'){//未确认数据
			  	_this.$store.commit('saveData',_this.pendData);//当前数据存入state仓库
			  	_this.$store.commit('savePage',_this.page1);//当前页码存入state仓库	
			  }
			  if(_this.tabq == '1'){//已确认数据
			  	_this.$store.commit('saveData1',_this.passData);//当前数据存入state仓库
			  	_this.$store.commit('savePage1',_this.page);//当前页码存入state仓库	
			  }
			});
		},
	}
</script>
