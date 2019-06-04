<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 0;
  		overflow-x: hidden;
  		overflow-y: scroll;
  		-webkit-overflow-scrolling: touch;
  	}
  	.content{
  		position: absolute;
  		left: 0;
  		top: 0;
  		right: 0;
  		bottom: 1rem;
  		overflow: auto;
  		padding-bottom: 1rem;
  		.header{
  			display: flex;
  			display: -webkit-flex;
  			flex-direction: column;
  			justify-content: center;
  			-webkit-justify-content: center;
  			height: 1.5rem;
  			background: #fff;
  			-webkit-box-shadow:0px 2px 4px #E2E1E7; 
  			box-shadow:0px 2px 4px #E2E1E7;
  			padding: 0 0.33rem 0 0.48rem;
  			p:first-child{
  				font-size: @font30;
  				color: #313131;
  				margin-bottom: 0.15rem;
  			}
  			p:last-child{
  				font-size: @font24;
  				color: #979797;
  				i{float: right;color: #3785f2;}
  			}
  		}
  		.list{
  			li{
  				font-size: @font30;
  				color: #323232;
  				padding: 0.2rem 0.33rem 0.2rem 0.48rem;
  				margin-top: 0.2rem;
  				background: #fff;
  				-webkit-box-shadow:0px 2px 4px #dfdee4; 
  				box-shadow:0px 2px 4px #dfdee4;
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
  			position: relative;
  			min-height: 1.85rem;
  			height: auto;
  			font-size: 0.3rem;
  			color: #313131;
  			background: #fff;
  			margin-top: 0.2rem;
  			padding: 0.25rem 0 0.25rem 1.08rem;
  			-webkit-box-shadow:0px 2px 4px #dfdee4; 
  			box-shadow:0px 2px 4px #dfdee4;
  			.pic{margin-bottom: 0.15rem;}
  			.pic i{color: #fd7172;}
			.img_demo{margin: 0 0.3rem 0.2rem 0;}
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
  					/*overflow: hidden;*/
  					img{width: 100%;border-radius: 50%;}
  					i{
  						position: absolute;
  						bottom: -1rem;
  						left: 50%;
  						margin-left: -0.01rem;
  						display: inline-block;
  						width: 0.02rem;
  						height: 1rem;
  						border-left: 1px dashed #3d3331;
  					}
  				}
  				span:nth-child(2){margin: 0 0.25rem 0 0.3rem;}
  				span:last-child{color: #0dae60;}
  			}
  			.plan_b{
  				height: 0.2rem;
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
  				display: -webkit-flex;
  				flex-wrap: wrap;
  				overflow: hidden;
  				padding-bottom: 0.1rem;
  				li{
	  				display: flex;
	  				flex-direction: column;
	  				align-items:center;
	  				/*width: 0.8rem;*/
  					height: 1.55rem;
  					margin-right: 0.3rem;
  					margin-bottom: 0.2rem;
  					p{margin-top: 0.15rem;text-align: center;position: relative;}
  					span{
  						position: absolute;
  						top: 0rem;
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
  					img{  						
  						border-radius: 50%;
  						width: 100%;
  					}
  					.admin{
  						position: absolute;
  						right: 0;
  						bottom: 0;
  						display: inline-block;
  						width: 0.23rem;
  						height: 0.2rem;
  						background: url(../../resources/images/commission/admin.png) no-repeat center;
  						background-size: cover;
  					}
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
  	.btn_box{
  		position: absolute;
  		bottom: 0;
  		width: 100%;
  		background: #fff;
  		-webkit-box-shadow:0px -2px 6px #E2E1E7; 
  		box-shadow:0px -2px 6px #E2E1E7;
  		ul{
  			display:flex;
  			display: -webkit-flex;
  			li{
  				position: relative;
  				height: 1rem;
  				width: 50%;
  				line-height: 1rem;
  				font-size: @font30;
  				color: #3586f2;
  				text-align: center;			
  				span{
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
  	}
	.upload_btn{
    	position: relative;
    	background-color: #f0eff5;
	    input{
	      width: 100%;
	      height: 100%;
	      z-index: 99999;
	      opacity: 0;
	    }
  	}
  	.boxs{
  		position: fixed;
  		z-index: 999;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;
  		background: #fff;
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
  	.spbtn{
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
				<p>
					<span>{{allData.loupan}}</span>
					<span>{{allData.loudong}}-{{allData.fanghao}}</span>
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
					<p v-if="false">
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
				<p class="pic"><i v-show='allData.imgList && allData.imgList.length == 0'>*</i>图片</p>
				<!--图片上传-->
				<div class="pic_load clearfix" >
					<!--<div class="img_demo fl pr" v-for='(item,index) in imgList' v-if="item.isdelete==0">
			          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
			          <i class="delete_icon" tag="fy" @click='delete_img(index, item.id, $event)'></i>
			        </div>-->
			        <!--已提交后的图片显示状态-->
			        <div class="img_demo fl pr" v-for="item in allData.imgList" v-if='allData.imgList && allData.imgList.length != 0' @click="fdtp(item.imgFapiao)">
			        	<img class="upload_demo_img" :src="item.imgFapiao" alt="" />
			        </div>
			        <!--<div v-if="fy < 8" class="upload_btn mr10 fl" v-show='allData.imgList && allData.imgList.length == 0'>
			            <input @change='add_img1($event)' id="file_add" tag="fy" type="file" multiple>
			        </div>-->
				</div>
		        
			</div>
			<!--申请进度-->
			<div class="plan">
				<ul>
					<li v-for="item in spData" :style="item.shenpi == 2?'padding-bottom:0.6rem':''">
						<p class="plan_t">
							<span>
								<img v-if="item.headimg" :src="item.headimg" title="" alt=""/>
								<img v-if="item.headimg == null || item.headimg == '' || !item.headimg"  src="../../resources/images/commission/head_img.png" title="" alt=""/>
								<i class="line" v-if="item.shenpi != 2"></i></span>
							<span>{{item.person}}</span>
							<span :style="item.shenpi!=1?'color: #ff7072':''">
								<i v-if='item.shenpi==1'>{{item.shenpi==1?"已审批":"待审批"}}</i>
								<i style="color: #fea843" v-if='item.shenpi!=1 && item.shenpi!=2 && item.isfock'>审批中</i>
								<i v-if='item.shenpi==2'>{{item.shenpi==2?"已驳回":"已审批"}}</i>
							</span>							
						</p>
						<p class="plan_b">{{item.shuoming}}</p>
						<p class="date">{{item.shenpitime | time}}</p>
						<!--<p v-if="item.shenpi == 2" style="position: absolute;width: 120%;height:0.1rem;background:#f0eff5;left: -1rem;bottom: 0;"></p>-->
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
					<li v-for="(item,index) in csData">
						<p class="picimg">
							<img v-if="item.headimg" :src="item.headimg" title="" alt=""/>
							<img v-if="item.headimg == null || item.headimg == '' || !item.headimg" src="../../resources/images/commission/head_img.png" title="" alt=""/>
							
							<span v-if='item.isshezhi == false && allData.imgList && allData.imgList.length == 0' @click='delcopy(item.id,index)'></span>
							<i class="admin" v-if='item.isshezhi == true'></i>
						</p>
						<p class="copy_name">{{item.personname}}</p>
					</li>
					<!--添加抄送人按钮-->
					<li @click="addcopy" v-show='allData.imgList && allData.imgList.length == 0 && success != 0'>
						<p class="copy_add"></p>
						<p></p>
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
		<!--按钮-->
		<div class="btn_box" v-show='success == 1'>
			<ul>
				<li @click="consent">同意<span></span></li>
				<li @click="turnto">驳回</li>
			</ul>
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
				allData:{},//页面数据详情
				spData:[],//审批任务流数据
				csData:[],//抄送任务流数据
				nowData:{},//当前审核结点数据
				popshow:false,//合同摘要弹框
				imgList:[],
		        fy: 0,
		        upload: 0,
		        uploaded: 0,
		        compact:{},//合同摘要数据
		        shenpi:'',
		        success:1,
//		        success1:false,
				bigfpsrc:'',//发票路径
		        fppic:false,
			}
		},
		created(){
			this.success = this.$route.query.btnshow;
			this.takexs();
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
	            	this.spData = res.data.data.shenpi;
	            	this.csData = res.data.data.chaosong;
	            	var arrdata = this.spData.slice(0);//数组深拷贝
	            	arrdata.reverse();//反转
//	            	for(var m in arrdata){//驳回审批节点数据开始审批
//						for(var n in arrdata[m]){
//							if(n == 'shenpi' && arrdata[m][n] == 2){
////								console.log(this.spData)
////								console.log('==============shenpi====================');
//								this.spData = arrdata.slice(0,Number(m) + 1).reverse();
//								return
//							}
//						}
//					}
//					console.log(this.spData);
//					console.log(this.csData);
					for(var i in this.spData){//当前审批节点数据截取
						for(var j in this.spData[i]){
							if(j == 'isfock' && this.spData[i][j] == true){
								this.nowData = this.spData[i];
//								console.log(this.nowData);
							}
						}
					}
	            }, (err)=>{
					console.log(err);
	            });
			},
			
		
			delcopy(id,idx){//删除抄送人
				this.csData.splice(idx,1);
				const url = this.$api + "/yhcms/web/qdyongjin/delCsr.do";
				axios.post(url,{
            		"id":id,
	            }).then((res)=>{
	            	if(res.data.success){
//						location.reload();
//						console.log(res);
	            	}
	            }, (err)=>{
					console.log(err);
	            })
			},
			copy(){
				var copyData1 = JSON.parse(localStorage.getItem('addCopy'));
				for(var i=0; i<this.copyData.length; i++){
					if(copyData1[0].id == this.copyData[i].id){
						Toast({
							message: '已存在该抄送人',
							position: 'center',
							duration: 2000
						});
						return;
					}
				}
				this.copyData = this.copyData.concat(copyData1);
//				console.log(this.copyData)
			},
			pops(state){//合同摘要
				this.popshow = state;
				if(state){//待调试
					const url = this.$api + "/yhcms/web/qdyongjin/getHetongEase.do";
					axios.post(url,{
	            		"htid":this.allData.hetongid//合同id
		            }).then((res)=>{
		            	if(res.data.success){
		            		this.compact = res.data.data;
//							console.log(this.compact);
		            	}
		            }, (err)=>{
						console.log(err);
		            });
				}
			},
			
	      

	      addcopy(){
	      	this.$router.push({
				path:'/copy_p',//跳转抄送人页面
				query:{
					"id":this.$route.query.id//所传参数
				}
			})
	      },
	      consent(){
	      	this.shenpi = '1';
			this.$router.push({
				path:'/approval_opinion1',//跳转到审批意见功能界面
				query:{
					'shenpi' : '1',
					'id' : this.$route.query.id
				}
			})
	      },
	      turnto(){
	      	this.shenpi = '2';
	      	this.$router.push({
				path:'/turn_opinion1',//跳转到审批意见功能界面
				query:{
					'shenpi' : '2',
					'id' : this.$route.query.id
				}
			})
	      },
		  fdtp(src){
	      	this.fppic = true;
	      	this.bigfpsrc = src;
//	      	console.log(src);
	      }
	      
		}
	}
</script>
