<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		/*position: absolute;*/
  	}
  	.list{
  		font-size: @font30;
  		overflow: hidden;
  	}
  	.list li{
  		/*border: 1px solid #000;*/
  		display: flex;
  		align-items: center;
  		width: 135%;
  		padding:0 0 0 0.45rem;
  		background: #ffffff;
  		margin-bottom: 0.2rem;
  		-webkit-transition:all 0.3s linear;
  		transition:all 0.3s linear;
  		p{margin-bottom: 0.2rem;}
  		p span:nth-child(1){color: #969696;}
  		p span:nth-child(2){color: #323232;}
  	}
  	.userleft,.userright{
  		position: relative;
  		/*border: 1px solid #000;*/
  	}
  	.userleft{
  		width: 5.8rem;
  		p:last-child{margin-bottom: 0.3rem;}
  		p:first-child{margin-top: 0.3rem;}
  	}
  	.userright{
  		display: flex;
  		align-items: center;
  		flex: 1;
  		p{
  			width: 1.25rem;
  			/*border: 1px solid #000;*/
  			height: 100%;
  			line-height: 2.1rem;
  			font-size: @font24;
  			text-align: center;
  			margin-bottom: 0!important;
  		}
  		.bj{
  			width: 1.25rem;
  			height: 2.1rem;
  			background: url(../../resources/images/commission/bj.png) no-repeat center;
  			background-size: 0.45rem 0.45rem;
  		}
  		.mr{
  			box-sizing: border-box;
	  		color: #969698;
	  		background: #EBEBEB;
	  		border-left: 1px solid #dcdcdc;
	  		-webkit-box-shadow:-1px 0px 10px #F4F4F4; 
	  		box-shadow:-1px 0px 10px #F4F4F4;
  		}
  		.del{color: #fff;background: #f32f30;}
  	}
  	/*右侧边线*/
  	.userleft:after{
  		position: absolute;
  		top: 50%;
  		margin-top: -0.375rem;
  		right: 0.05rem;
  		content: "";
  		display: block;
  		height: 0.75rem;
  		width: 0.02rem;
  		border-left: 1px solid #e4e4e4;
  	}
 	.swipeleft{transform:translateX(-2.5rem);-webkit-transform:translateX(-2.5rem);}
 	.check{
 		display: block;
 		width: 0.4rem;
 		height: 0.2rem;
 		border-left: 1px solid #fd3331;
 		border-bottom: 1px solid #fd3331;
 		transform: rotate(-45deg);
 		margin-right: 0.2rem;
 	}

</style>

<template>
	<div class="box">
		<div class="list">
			<ul>
				<li v-for="i in 3">
					<i class="check" v-if="false"></i>
					<div class="userleft">
						<p>
							<span>户名：</span>
							<span>李明</span>
						</p>
						<p>
							<span>开户行：</span>
							<span>中国人民银行建国路支行</span>
						</p>
						<p>
							<span>银行账号：</span>
							<span>6230 2305 2306 3368</span>
						</p>
					</div>
					<div class="userright">
						<p class="bj" @click.stop='bjclick'></p>
						<p class="mr">设置默认</p>
						<p class="del">删除</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default{
	data(){
		return{
		
		}
	},
	created(){
		this.init();
	},
	methods:{
		bjclick(){
			alert(123)
		},
		init(){//渠道银行账号
			const url = "http://127.0.0.1:8080/yhcms/web/qdyinhangzhanghao/getQdYHZHForQvdao.do";
//			const url = this.$api + "/yhcms/web/qdyongjin/getLikeQd.do";
			axios.post(url,{
			
            }).then((res)=>{
				console.log(res);
            }, (err)=>{
				console.log(err);
            });
		}
	},
	mounted(){
		//侧滑菜单尺寸自动计算
		function resizeRoot(){//根节点HTML的字体大小初始化
		 var deviceWidth = document.documentElement.clientWidth,
		  num = 750,
		  num1 = num / 100;
		 if(deviceWidth > num){
		  deviceWidth = num; 
		 }
		 document.documentElement.style.fontSize = deviceWidth / num1 + "px";
		}
		resizeRoot();
		window.onresize = function(){//屏幕窗口大小发生改变时自动计算
		 resizeRoot();
		};
		//侧滑菜单
		var expansion = null; //是否存在展开的list
		var container = document.querySelectorAll('.list li');
		for(var i = 0; i < container.length; i++){ 
		 var x, y, X, Y, swipeX, swipeY;
		 container[i].addEventListener('touchstart', function(event) {
		  x = event.changedTouches[0].pageX;
		  y = event.changedTouches[0].pageY;
		  swipeX = true;
		  swipeY = true ;
		  if(expansion){ //判断是否展开，如果展开则收起
		   expansion.className = "";
		  }  
		 });
		 container[i].addEventListener('touchmove', function(event){
		  X = event.changedTouches[0].pageX;
		  Y = event.changedTouches[0].pageY;
		  // 左右滑动
		  if(swipeX && Math.abs(X - x) - Math.abs(Y - y) > 0){
		   // 阻止事件冒泡
		   event.stopPropagation();
		   if(X - x > 10){ //右滑
		    event.preventDefault();
		    this.className = ""; //右滑收起
		   }
		   if(x - X > 10){ //左滑
		    event.preventDefault();
		    this.className = "swipeleft"; //左滑展开
		    expansion = this;
		   }
		   swipeY = false;
		  }
		  // 上下滑动
		  if(swipeY && Math.abs(X - x) - Math.abs(Y - y) < 0) {
		   swipeX = false;
		  }  
		 });
		}
	}
}
</script>
