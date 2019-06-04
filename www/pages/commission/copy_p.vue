<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";
	.box {
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		overflow: auto;
		background: #fff;
		.list {
			padding-left: 0.25rem
		}
		.list li {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			.pic {
				width: 0.75rem;
				height: 0.75rem;
				margin-right: 0.25rem;
				img {
					border-radius: 50%;
					width: 100%;
					height: auto;
				}
			}
			.name {
				width: 100%;
				p {
					height: 0.5rem;
				}
				p:first-child {
					font-size: @font30;
					color: #323232;
				}
				p:last-child {
					font-size: @font24;
					color: #969696;
					border-bottom: 1px solid #e4e4e4;
				}
			}
		}
	}
	
	.header {
		height: 1.15rem;
	}
	.keyword{color: red;}
</style>
<style>
	.mint-search-list{
		height: 0!important;
	}	
</style>

<template>
	<div class="box">
		<div class="header">
			<mt-search v-model="search" cancel-text="取消" placeholder="搜索名字"></mt-search>
		</div>
		<ul class="list" id="list">
			<li v-for='(item,index) in products' @click="addcopy(index,item)" v-if="index<8">
				<div class="pic">
					<img v-if="item.headimg" :src="item.headimg" alt="" title="" />
					<img v-if="item.headimg == null || item.headimg == '' || !item.headimg" src="../../resources/images/commission/head_img.png" />
				</div>
				<div class="name">
					<p v-html='item.name.replace(search,"<span style=\"color:#3486f2;\">"+search+"</span>")'>{{item.name}}</p>
					<p >{{item.sondeptname}}-{{item.jobname}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from 'axios';
	export default {
		data() {
			return {
				search: '',
				products: [],
				addCopy: [],
			}
		},
		methods: {
			addcopy(index,item) { //选择抄送人
//				this.addCopy.push(item);
//				localStorage.setItem('addCopy', JSON.stringify(this.addCopy));
				const url = this.$api + "/yhcms/web/qdyongjin/addCsr.do";
				axios.post(url,{ //添加抄送人接口
            		"taskid":'',
					"sourcetype":'',
					"sourcemid":this.$route.query.id,
					"personid":item.id,
					"personname":item.name,
					"pertype":item.pertype
	           	}).then((res)=>{
//	            	console.log(res);
	            	this.$router.push({
	            		path: '/confirmed',//跳转回审批抄送人页面
//	            		path: '/approval',//跳转回审批抄送人页面
	            		query:{
	            			"id":this.$route.query.id,//所传参数
	            			"btnshow":this.$route.query.btnshow,
	            		}
	            	});
	            }, (err)=>{
					console.log(err);
	            });

			},
			copylist(){//抄送人数据接口暂无
				const url = this.$api + "/yhcms/web/qdyongjin/getLikeCsr.do";//抄送人搜索接口地址
				axios.post(url,{ //添加抄送人接口
            		"name":this.search
	           	}).then((res)=>{
	           		this.products = (res.data.data);
//	            	console.log(this.products);
	            }, (err)=>{
					console.log(err);
	            });
			}

		},
		mounted() {

		},
		computed: {
//			searchData: function() {//模糊查询前端实现方式
//				var search = this.search;
//				if(search) {
//					return this.products.filter(function(product) {
//						return Object.keys(product).some(function(key) {
//							return String(product[key]).toLowerCase().indexOf(search) > -1
//						})
//					})
//				}
//				return this.products; 
//			}
		},
		watch: {
			search(newV,oldV){
				this.copylist();
			}
		},
		filters:{

		}

	}
</script>