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
  						/*抄送人右上角删除*/
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
  	.delete_icon{
  		/*图片上传图片右上角删除*/
  		width: 0.3rem;
		height: 0.3rem;
		border-radius: 50%;
		background: #010101 url(../../resources/images/close1.png) no-repeat center;
		background-size: 50%;
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
				<p class="pic"><i>*</i>图片</p>
				<div class="pic_load clearfix" >
					<div class="img_demo fl pr" v-for='(item,index) in imgList'>
			          <img class="upload_demo_img" :src="item.id==='xxx'? item.url : $prefix + '/' + item.url" alt="" />
			          <i class="delete_icon" tag="fy" @click='delete_img(index, item.id, $event)'></i>
			        </div>
					<!--已提交后的图片显示状态-->
			        <div class="img_demo fl pr" v-for="(item,index) in allData.imgList" @click="fdtp(item.imgFapiao)">
			        	<img class="upload_demo_img" :src="item.imgFapiao" alt="" />
			        	<i class="delete_icon" tag="fy" @click.stop='delete_fpic(item.id,index)' v-if="btnshow==1"></i>
			        </div>
			        <!--添加图片-->
			        <div v-if="fy < 80 && btnshow==1" class="upload_btn mr10 fl">
			            <input @change='add_img1($event)' id="file_add" tag="fy" type="file" multiple>
			        </div>
				</div>
			</div>
			<!--申请进度-->
			<div class="plan">
				<ul>
					<li v-for="item in this.spData" :style="item.shenpi == 2?'padding-bottom:0.6rem':''">
						<p class="plan_t">
							<span>
								<img v-if="item.headimg" :src="item.headimg" title="" alt=""/>
								<img v-if="item.headimg == null || item.headimg == '' || !item.headimg" src="../../resources/images/commission/head_img.png" title="" alt=""/>
								<i class="line" v-if="item.shenpi != 2"></i></span>
							<span>{{item.person}}</span>
							<span :style="item.shenpi!=1?'color: #ff7072':''">
								<i v-if='item.shenpi==1'>{{item.shenpi==1?"已审批":"待审批"}}</i>
								<i style="color: #fea843" v-if='item.shenpi!=1 && item.shenpi!=2 && item.isfock'>审批中</i>
								<i v-if='item.shenpi==2'>{{item.shenpi==2?"已驳回":"已审批"}}</i>
							</span>	
						</p>
						<p class="plan_b">{{item.shuoming!=''?item.shuoming:''}}</p>
						<p class="date">{{item.shenpitime | time}}</p>
						<!--<p v-if="item.shenpi == 2" style="position: absolute;width: 7.5rem;height:0.1rem;background:#f0eff5;left: -0.28rem;bottom: 0;"></p>-->
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
						<p class="picimg">
							<img v-if="item.headimg" :src="item.headimg" title="" alt=""/>
							<img v-if="item.headimg == null || item.headimg == '' || !item.headimg" src="../../resources/images/commission/head_img.png" title="" alt=""/>
							
							<span v-if='!item.isshezhi && btnshow==1' @click='delcopy(item.id,index)'></span>
							<i class="admin" v-if='item.isshezhi'></i>
						</p>
						<p class="copy_name">{{item.personname}}</p>
					</li>
					<!--添加抄送人按钮-->
					<li  @click="addcopy" v-if='btnshow==1'>
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
							<span>{{item.startdate | timed}}-{{item.enddate | timed}}</span>
							<span></span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<!--按钮-->
		<div class="btn_box" v-if="btnshow==1">
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
				popshow:false,//合同摘要弹框
				splist:[],
				compact:{},//合同摘要数据
				allData:{},//页面数据详情
				spData:[],//审批任务流数据
				csData:[],//抄送任务流数据
				nowData:{},//当前审核结点数据
				btnshow:1,//页面状态显示条件0已确认1未确认
				imgList:[],
		        fy: 0,
		        upload: 0,
		        uploaded: 0,
		        bigfpsrc:'',//发票路径
		        fppic:false,
			}
		},
		created(){
			this.btnshow = this.$route.query.btnshow;
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
//	            	for(var m in arrdata){//驳回审批节点数据开始审批
//						for(var n in arrdata[m]){
//							if(n == 'shenpi' && arrdata[m][n] == 2){
////								console.log('==============shenpi====================');
//								this.spData = arrdata.slice(0,Number(m) + 1).reverse();
//								return
//							}
//						}
//					}
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
			addcopy(){//添加抄送人
				if(this.imgList.length != 0){
					this.saveToserver();//上传图片	
				}
				this.$router.push({
					path:'/copy_p',//跳转抄送人页面
					query:{
						"id":this.$route.query.id,//所传参数
						"btnshow":this.$route.query.btnshow
					}
				})
			},
			delcopy(id,idx){//删除抄送人
				this.csData.splice(idx,1);
				const url = this.$api + "/yhcms/web/qdyongjin/delCsr.do";
				axios.post(url,{
            		"id":id,
	            }).then((res)=>{
	            	if(res.data.success){
						Toast({
							message: '已删除',
							position: 'center',
							duration: 300
						});
	            	}
	            }, (err)=>{
					console.log(err);
	            })
			},
			consent(){//同意审批
				console.log("同意");
				
				if(this.allData.imgList.length == 0 && this.imgList.length != 0){
					this.saveToserver();//上传图片	
					this.$router.push({
						path:'/approval_opinion',//跳转到审批意见功能界面
						query:{
							'shenpi' : '1',
							'id' : this.$route.query.id
						}
					})
				}
				if(this.allData.imgList.length != 0 && this.imgList.length != 0){
					this.saveToserver();//上传图片		
				}
				if(this.allData.imgList.length != 0 && this.imgList.length == 0){
					this.$router.push({
						path:'/approval_opinion',//跳转到审批意见功能界面
						query:{
							'shenpi' : '1',
							'id' : this.$route.query.id
						}
					})
					return
				}
				if(this.allData.imgList.length == 0 && this.imgList.length == 0){
					Toast({
						message: '请选择发票图片',
						position: 'center',
						duration: 300
					});
					return
				}
				
			},
			turnto(){//同意驳回
				if(this.allData.imgList.length == 0 && this.imgList.length != 0){
					this.saveToserver();//上传图片		
					this.$router.push({
						path:'/turn_opinion',//跳转到审批意见功能界面
						query:{
							'shenpi' : '2',
							'id' : this.$route.query.id
						}
					})
				}
				if(this.allData.imgList.length != 0 && this.imgList.length != 0){
					this.saveToserver();//上传图片		
				}
				if(this.allData.imgList.length != 0 && this.imgList.length == 0){
					this.$router.push({
						path:'/turn_opinion',//跳转到审批意见功能界面
						query:{
							'shenpi' : '2',
							'id' : this.$route.query.id
						}
					})
				}
				if(this.allData.imgList.length == 0 && this.imgList.length == 0){
					this.$router.push({
						path:'/turn_opinion',//跳转到审批意见功能界面
						query:{
							'shenpi' : '2',
							'id' : this.$route.query.id
						}
					})	
				}

			},
			delete_img(index, id, event){//删除
		        const tag = $(event.target).attr("tag"), which = {"fy":"imgList"}[tag];
		        if(id !== 'xxx'){
		            this[which][index].isdelete = "1";
		        }
		        else{
		            this[which].splice(index,1);
		            this.upload -= 1;
		        }
		        this[tag] -= 1;
	      },
	      /*图片上传压缩*/
	      add_img1(event){
	        const images = event.target.files;
	        let len = images.length;
	        len = Math.min(len, 80 - this.fy);
	        for(let i = 0; i < len; ++i){
	            this.append_img(images[i]);
	        }
	      },
	      append_img(image){//显示
	        var reader = new FileReader(), type = image.type;
	        const tag = $(event.target).attr("tag"), which = {"fy":"imgList", "hx":"hxList", "fm":"fmList"}[tag];
	        if (!/\/(?:jpeg|jpg|png)/i.test(type)){
	          return;
	        }
	        var that=this;
	        reader.onloadend = () => {
	          let ret;
	          const imgx = new Image();
	          imgx.src = reader.result;
	          imgx.onload = function(){
	              var canvas = document.createElement('canvas');
	              canvas.width = imgx.naturalWidth;
	              canvas.height = imgx.naturalHeight;
	              canvas.getContext("2d").drawImage(imgx, 0, 0);
	              ret = canvas.toDataURL(type, .2);
	              const obj = {
	                  id: "xxx",
	                  lpid: that.lpid,
	                  isdelete: 0,
	                  type: 2,
	                  suffix:type,
	                  url: ret 
	              };
	              that[which].push(obj)
	           }
	        }
	        reader.readAsDataURL(image);
	        this[tag] += 1;
	        this.upload += 1;
	      },
	      saveToserver(){
	          //开始上传图片
	          Indicator.open({
                  text: '上传图片中...',
                  spinnerType: 'fading-circle'
              });
	          const that = this;
	          let fp = [];
	          const cb = (img, obj) => {
	             if(img.id === "xxx"){
	                 const [_, data] = img.url.split(","), [prefix, t] = img.suffix.split('/');
	                 that.saveImages(data, t, function(path){
	                     obj.push({"id":"", "isdelete":"0", "url":path});
	                     that.uploaded += 1;
	                     if(that.uploaded >= that.upload){
	                         // 新图片上传完成
	                         Indicator.close();
//	                         Indicator.open({
//				                  text: '上传图片中...',
//				                  spinnerType: 'fading-circle'
//				              });
	                         setTimeout(function(){
	                             that.saveImageData();
	                         }, 1000);
	                     }
	                 });
	             }
	             else{
	                 obj.push({"id": img.id, "isdelete": img.isdelete, "url": img.url});
	             }
	          };
	
	          if(this.upload > 0){
//	              Indicator.open({
//	                  text: '上传图片中...',
//	                  spinnerType: 'fading-circle'
//	              });
	          }
	
	          this.imgList.forEach((img,idx)=> {cb(img, fp)});
	          this.imgList = fp;
//			  console.log(this.imgList);
	
	          //保存信息
	          if(this.upload < 1){
	              setTimeout(function(){
	                  Indicator.close();
	                  that.saveImageData();
	              }, 1000);
	          }
	      },
	      saveImages(pic, type, cb){
	          const that = this;
//	          this.$api + "/yhcms/web/jcsj/uploadPic.do",
//	          http://192.168.1.40:8080
	          this.$http.post(
	              this.$api + "/yhcms/web/jcsj/uploadPic.do",
	              {"parameters":{ "smallPic":pic,"suffix": "." + type},"foreEndType":2,"code":"300000084"}
	          ).then((res)=>{
	              var result = JSON.parse(res.bodyText);

	              if (result.success) {
	                  cb && cb(result.data);
	              }
	              else{
	              }
	          }, (res)=>{});
	      },
	      saveImageData(){
	        const that = this;
//	        Indicator.open({
//	          text: '保存中...',
//	          spinnerType: 'fading-circle'
//	        });
	        let fp = this.imgList.map((item, idx)=>{
	            return {"id": item.id, "isdelete": item.isdelete, "url": item.url};
	        });
	        for(var i = 0; i<fp.length; i++){
	        	const data = {"imgFapiao":this.$prefix + "/" + fp[i].url,"yongjinid":this.$route.query.id,"yongjintype":"1"};
	        	this.$http.post(
	        	   this.$api + "/yhcms/web/qdyongjin/imgadd.do", data).then((res)=>{
//	        	  Indicator.close();
	        	  var result = JSON.parse(res.bodyText);
	        	  if (result.success) {
	        	  	this.imgshow = true;
	        	    Toast({
	        	        message: '保存成功',
	        	        position: 'bottom',
	        	        duration: 1000
	        	    });      	    	
					Indicator.close();
	        	  } else {
	        	    Toast({
	        	        message: '保存失败: ' + result.message,
	        	        position: 'bottom'
	        	    });
	        	  }
	        	},(res)=>{
	        	  Indicator.close();
	        	  Toast({
	        	      message: '保存失败! 请稍候再试',
	        	      position: 'bottom'
	        	  });
	        	});
	        }
	      },
	      delete_fpic(id,idx){//删除数据库图片
	      	this.allData.imgList.splice(idx,1);
	      	const url = this.$api + "/yhcms/web/qdyongjin/imgdel.do";
			axios.post(url,{ 
        		"id":id,
           }).then((res)=>{
            	if(res.data.success){
//          		Toast({
//						message: '删除成功',
//						position: 'center',
//						duration: 300
//					});
            	}
            }, (err)=>{
				console.log(err);
            });
	      },
	      fdtp(src){
	      	this.fppic = true;
	      	this.bigfpsrc = src;
//	      	console.log(src);
	      }
	      
		},
		mounted(){
			
		},
	}
</script>
