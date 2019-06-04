<style scoped lang='less'>
	@import "../resources/css/reset.css";
  	@import "../resources/css/base.less";
  	.lager{border-bottom: 1px solid #d5d5d5;border-top: 1px solid #d5d5d5;width: 100%;height: 0.86rem;background-color: #f2f2f2;display: flex;align-items: center;justify-content: center;}
  	.ssuokonghi{width: 4.8rem;height: 0.64rem;display: flex;border-radius: 5px;background-color: #e0e0e2;align-items: center;}
  	.suosyou{margin-left: 0.17rem;width: 0.28rem;height: 0.3rem;background: url(../resources/images/my_qd/sousuo.png) no-repeat center;background-size: 100% auto;}
  	.suosuokong{margin-left: 0.26rem;height: 0.64rem;display: flex;align-items: center;}
  	#keyword{width:3.7rem;font-size: 0.24rem;color: #666666;background-color: #e0e0e2;height: 0.64rem;text-align: left;}
	.shanchu{width: 0.32rem;height: 0.32rem;background: url(../resources/images/my_qd/chanchuioc.png) no-repeat center;background-size: 100% auto;}
	.listdata{position: absolute;top: 0.86rem;bottom: 0rem;left: 0rem;right: 0rem;background-color: #FFFFFF;overflow: hidden;}
	.qvixaoer{margin-left: 0.42rem;font-size: 0.28rem;color: #666666;}
	.ssjiegs{border-bottom: 1px solid #e5e5e5;height: 1.1rem;font-size: 0.28rem;color: #333333;line-height: 1.1rem;padding-left: 0.3rem;}
</style>
<template>
	<div id="">
		<div class="lager">
			<span class="ssuokonghi">
				<i class="suosyou"></i>
				<i class="suosuokong">
					<input type="text" id="keyword" @input="soushuo" class="suosinput" v-model="search_keywork" placeholder="请输入姓名或公司名称">
				</i>
				<i class="shanchu" @click="shaochuss"></i>
			</span>
			<span class="qvixaoer" @click="qvxiaowent">取消</span>
		</div>
		<div class="listdata">
			<div class="ssjiegs" v-for="item in ssdata" @click="lisdatzhogndian(item.name)">{{item.name}}</div>
		</div>
		
	</div>
	
</template>

<script type="text/babel">
  import {Indicator} from 'mint-ui';
  import {Toast} from 'mint-ui';
  import { Field } from 'mint-ui';
  
  export default {
    data() {
      return {
      	username:'',
      	search_keywork:'',
      	ssdata:[],
      };
    },
    created(){
    	
    },
    methods: {
      soushuo(){
        const user22 = JSON.parse(localStorage.getItem('cookxs'));
        if(this.search_keywork == ''){
        	this.ssdata = [];
        }else{
        	this.$http.post(this.$api + "/yhcms/web/wxqx/getQdInfo.do",{"cookie":user22.sjs,"search_keywork":this.search_keywork}).then((res)=>{
	            Indicator.close();
	            var result = JSON.parse(res.bodyText);
	            if(result.success){
	            	this.ssdata = [];
	            	this.ssdata = result.data;
	            }else{
	                Toast({
	                    message: result.message,
	                    position: 'bottom'
	                });
	            }
	        }, (res)=>{
	            Indicator.close();
	        });
        }
        
      },
	  shaochuss(){
	  	this.search_keywork = '';
	  	this.ssdata = [];
	  },
	  qvxiaowent(){
	  	this.search_keywork = '';
//	  	this.$router.push({path:'/my_qd'});
	  	//这种方式是vue在路由表中不带参数的方式
	  	this.$router.push({
			path:'/my_qd',//跳转数据修改填写
			query:{
				"sscontent":this.search_keywork,//所传参数
			}
		})
	  },
	  lisdatzhogndian(name){
	  	//这种方式是vue在路由表中不带参数的方式
	  	this.$router.push({
			path:'/my_qd',//跳转数据修改填写
			query:{
				"sscontent":name,//所传参数
			}
		})
	  },
      
      
    
},

    created() {
//    for (let i = 1; i <= 10; i++) {
//      this.list.push(i);
//    }
		if(this.$route.query.lisconte){
			if(this.$route.query.lisconte != ''){
				this.search_keywork = this.$route.query.lisconte;
				this.soushuo();
			}
		}
    },

    mounted() {
//    this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
  };
</script>