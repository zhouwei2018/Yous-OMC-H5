<style scoped lang='less'>
	@import "../../resources/css/reset.css";
  	@import "../../resources/css/base.less";
  	.box{
  		padding-bottom: 0.6rem;
  	}
  	.new_box {
		width: 7.06rem;
		/*height:4.53rem;*/
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow: 0px 0px 8px #C5C4C9;
		box-shadow: 0px 0px 8px #C5C4C9;
		font-size: @font30;
		background-color: #fff;
		overflow:hidden;
		h3 {
			border-top-left-radius: 0.08rem;
			border-top-right-radius: 0.08rem;
			height: 0.95rem;
			line-height: 0.95rem;
			font-weight: bold;
			text-align: left;
			padding-left: 0.3rem;
			background: #eeeeee;
			-webkit-box-shadow: 0px 0px 8px #D9D9D9;
			box-shadow: 0px 0px 8px #D9D9D9;
		}
		p {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			height: 1.15rem;
			margin-left: 0.3rem;
			border-bottom: 1px solid #e4e4e4;
			span{
				display:inline-block;
				width: 1.5rem;
			}
			input {
				width: 3.8rem;
				font-size: @font32;
				margin-left: 0.5rem;
			}
			i{color: #fd7172;}
		}
		p:last-child {
			border-bottom: none;
		}
	}
	.default{
		ul{
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			padding: 0.3rem 0 0 0.5rem;
			li:first-child{margin-right: 1.9rem;}
			li p:first-child{
				font-size: @font30;
				color: #323234;
			}
			li p:last-child{
				font-size: @font24;
				color: #959597;
			}
		}
	}
	.btn {
		display: block;
		width: 5.5rem;
		height: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		margin: 3.8rem auto 0;
		border: none;
		background: #aaaaaa;
		border-radius: 0.08rem;
		color: #c8c8c8;
		font-size: @font32;
	}
	/*按钮背景*/
	.btnactive {
		background: url(../../resources/images/commission/btn_bg.png) no-repeat center;
		background-size: cover;
		color: #fff;
	}
</style>

<template>
	<div class='box'>
		<div class="new_box">
			<h3>收款账号</h3>
			<p>
				<span><i>*</i>户名</span>
				<input type="text" placeholder="请输入户名" v-model="username" />
			</p>
			<p>
				<span><i>*</i>开户行</span>
				<input type="text" placeholder="请输入开户行" v-model="bankplace" />
			</p>
			<p>
				<span><i>*</i>银行账号</span>
				<input type="number" placeholder="请输入银行账号" v-model="usernumber" />
			</p>
		</div>
		<!--账号默认设置-->
		<div class="default">
			<ul>
				<li>
					<p>设为默认账号</p>
					<p>注：每次佣金审批时会使用该账号</p>
				</li>
				<li>
					<span>
						<mt-switch v-model="value" @change='state'></mt-switch>
					</span>
					
				</li>
			</ul>
		</div>
		<button class="btn btnactive">保存并使用</button>
	</div>
</template>

<script>
import { Switch } from 'mint-ui';
export default{
	data(){
		return{
			username:'',
			bankplace:'',
			usernumber:'',
			value:'',
		}
	},
	methods:{
		state(a){
			console.log(a)
		}
	}
}
</script>
