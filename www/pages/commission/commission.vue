<style scoped lang='less'>
	@import "../../resources/css/reset.css";
	@import "../../resources/css/base.less";
	.box {
		/*position: relative;
  		left: 0;
  		right: 0;
  		bottom: 0;
  		top: 0;*/
		padding-bottom: 3rem;
		overflow-x: hidden;
  		overflow-y: scroll;
  		-webkit-overflow-scrolling: touch;
	}
	
	.site_card {
		width: 7.06rem;
		height: 2.05rem;
		margin: 0.25rem auto 0;
		border-radius: 0.07rem;
		background: url(../../resources/images/commission/card_bg.png) no-repeat center;
		background-size: 7.06rem 2.05rem;
		-webkit-box-shadow: 0px 0px 7px #2991f4;
		box-shadow: 0px 0px 7px #2991f4;
		color: @cl_white;
		padding: .22rem 0 0 .3rem;
		p:nth-child(1) {
			font-weight: bold;
			font-size: @font36;
		}
		p {
			display: flex;
			display: -webkit-flex;
			justify-content: flex-start;
			-webkit-justify-content: flex-start;
			margin-bottom: 0.15rem;
			span:nth-child(2) {
				display: inline-block;
				width: 5.5rem;
				word-break: break-all;
				white-space: pre-wrap;
			}
		}
		p:last-child {
			font-size: @font32;
		}
	}
	
	.new_box {
		width: 7.06rem;
		/*height:4.53rem;*/
		margin: 0.25rem auto 0;
		border-radius: 0.08rem;
		-webkit-box-shadow: 0px 0px 10px #C5C4C9;
		box-shadow: 0px 0px 10px #C5C4C9;
		font-size: @font32;
		background-color: #fff;
		h3 {
			border-top-left-radius: 0.08rem;
			border-top-right-radius: 0.08rem;
			height: 0.95rem;
			line-height: 0.95rem;
			font-weight: bold;
			padding-left: 0.3rem;
			background: #eeeeee;
			-webkit-box-shadow: 0px 0px 8px #D9D9D9;
			box-shadow: 0px 1px 6px #bdbdbd;
		}
		p {
			position: relative;
			display: flex;
			display: -webkit-flex;
			align-items: center;
			-webkit-align-items: center;
			height: 1.15rem;
			margin-left: 0.3rem;
			border-bottom: 1px solid #e4e4e4;
			input {
				width: 3.8rem;
				font-size: @font32;
				margin-left: 0.75rem;
				background: #fff;
			}
			label {
				color: #3586f2;
				font-weight: bold;
			}
			i{color: #fd7172;}
			/*模糊搜索列表*/
			.inp{
				border-bottom: 1px solid #e4e4e4;
				display: block;
				height: 0.8rem;
				line-height: 0.8rem;
				padding: 0 0.3rem;
				i{color: #000;}
				i:last-child{float: right;}
			}
			.inp_box{
				position: absolute;
				z-index: 9;
				bottom: -4.5rem;
				left: 0;
				display: inline-block;
				width: 100%;
				height: 4.5rem;
				/*border: 1px solid #000;*/
				background: #fff;
				overflow: auto;
			}
		}
		p:last-child {
			border-bottom: none;
		}
		#invoices{
			width: 3.9rem;
			height: 100%;
			line-height: 1.15rem;
			margin-left: 0.75rem;
		}
	}
	
	.invoice_list {
		background-color: #fdfcfa;
		border-top: 1px dashed #fcc487;
		li {
			display: flex;
			display: -webkit-flex;
			padding: 0.2rem 0.3rem;
			font-size: @font24;
			border-bottom: 1px solid #fcc487;
			i {
				display: inline-block;
				width: 1.7rem;
				height: 0.25rem;
				color: #fea74a;
			}
			span {
				display: inline-block;
				width: 4.74rem;
				color: #3084f6;
			}
		}
		li:last-child {
			border-bottom: none;
		}
	}
	
	.btn {
		position: absolute;
		margin: 0.8rem 0 1.5rem -2.75rem;
		left: 50%;
		display: block;
		width: 5.5rem;
		height: 0.75rem;
		line-height: 0.75rem;
		text-align: center;
		border: none;
		background-color: #aaaaaa;
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
	
	.shade {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		top: 0;
		background: rgba(0, 0, 0, 0.2);
	}
	
	.picker_bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		background: #fff;
		font-size: @font30;
		color: #378eef;
		p {
			display: flex;
			display: -webkit-flex;
			justify-content: space-between;
			-webkit-justify-content: space-between;
			align-items: flex-end;
			-webkit-align-content: flex-end;
			height: 0.75rem;
			padding: 0 0.5rem;
		}
	}
	input {-webkit-appearance:none; /*去除input默认样式*/}
	.picker-slot-wrapper {
		font-size: @font30;
	}
</style>
<style>
.mint-radiolist{
	display: flex;
}
/*按钮背景*/
.mint-radio-input:checked + .mint-radio-core{
	background-color: rgba(255,255,255,0);
	/*background: url(../../resources/images/commission/btn2.png) no-repeat center;
	background-size: cover;*/
}
.mint-cell-wrapper,.mint-cell:last-child,.mint-cell{
	background: none;
}
.mint-radio-input:checked + .mint-radio-core::after{
	background: none;
}
.mint-radio-core{
	border: none;
	background: url(../../resources/images/commission/btn.png) no-repeat center;
	background-size: cover;
}

.activ{
	background: url(../../resources/images/commission/btn2.png) no-repeat center !important;
	background-size: cover !important;
}
.actives{
	background: url(../../resources/images/commission/btn1.png) no-repeat center !important;
	background-size: cover !important;
}

.picker-center-highlight:before, .picker-center-highlight:after{
	background-color:#ccc !important;
}
.picker-item.picker-selected{
	font-weight: bold!important;
}
</style>

<template>
	<div class="box" @click="qdinp=false;qdinp1=false">
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
			<p>
				<span><i>*</i>佣金金额</span>
				<input type="text" placeholder="请输入佣金金额" v-model="money" v-on:input="inputFunc"/>
				<i>元</i>
			</p>
			<p>
				<span><i>*</i>佣金信息</span>
				<mt-radio align="left" v-model="value" :options="options" @change="check"></mt-radio>
			</p>
			<p>
				<span><i>*</i>计算公式</span>
				<input type="text" placeholder="请输入佣金计算公式" v-model="formula" class="formulas" />
				<!--<textarea name="" rows="10" cols="1" placeholder="请输入佣金计算公式" v-model="formula" class="formulas"></textarea>-->
			</p>
			<p>
				<span><i>*</i>渠道姓名</span>
				<input type="text" id="qdname" placeholder="请输入渠道人员姓名" v-model="channelname" />
				<span class="inp_box" v-if="qdfind.length != 0 && channelname != '' && channelname != undefined && qdinp1">
					<span class="inp" v-for="item in qdfind" @click="qdxz(item.name,item.phone)">
						<i class="inp_name">{{item.name}}</i>
						<i class="inp_tel">{{item.phone}}</i>
					</span>
				</span>
			</p>
			<p>
				<span><i>*</i>联系方式</span>
				<input type="number" placeholder="请输入渠道登陆账号" v-model="tel" v-on:input="channeltel"/>
				<span class="inp_box" v-if="qdfind.length != 0 && tel != '' && qdinp">
					<span class="inp" v-for="item in qdfind" @click="qdxz(item.name,item.phone)">
						<i class="inp_name">{{item.name}}</i>
						<i class="inp_tel">{{item.phone}}</i>
					</span>
				</span>
			</p>
		</div>
		<!--发票信息-->
		<div class="new_box">
			<h3>发票信息</h3>
			<p style="border: none;">
				<span><i>*</i>发票类型</span>
				<!--<input id="invoice" type="text" placeholder="请选择发票类型" v-model="invoice" @click='selinvoice'/>-->
				
				<span id='invoices' @click='selinvoice'>{{invoice}}</span>
				<label for="invoice" style="float: right;">></label>
			</p>
			<ul class="invoice_list" v-if='this.theinvoice.companyName || xsData.taskZt==4 || chuzuren != "" || chuzuren != null'>
				<li>
					<i>名<s style="visibility: hidden;">我我我我</s>称:</i>
					<span>{{theinvoice.companyName}}</span>
				</li>
				<li>
					<i>纳税人识别号:</i>
					<span>{{theinvoice.number}}</span>
				</li>
				<li>
					<i>地&nbsp;&nbsp;址、电&nbsp;&nbsp;话:</i>
					<span>{{theinvoice.address}}</span>
				</li>
				<li>
					<i>开户行及账号:</i>
					<span>{{theinvoice.bankplace}}</span>
				</li>
			</ul>
		</div>
		<!--<button v-if="btnshow" :class="money != '' && channelname !='' && tel != '' && theinvoice.id != '0' && invoice != '请选择发票类型' && formula != '' && yjxx != ''?'btn btnactive': 'btn'"  @click='bas()'>提交</button>-->
		<button id="btn" v-if="btnshow && zt==1" :class="btnzt?'btn btnactive':'btn'"  @click='bas()'>提交</button>
		<!--发票选择弹框-->
		<div class="shade" v-if="shade">
			<div class="picker_bottom" v-if="pickshow" @click.stop="clk">
				<p>
					<span @click="elect(false)">取消</span>
					<span @click="elect(true)">确认</span>
				</p>
				<mt-picker :slots="slots" valueKey='name' @change="onValuesChange"></mt-picker>
			</div>
		</div>

	</div>
</template>

<script>
	import { Field } from 'mint-ui';
	import { Picker } from 'mint-ui'
	import { Toast } from 'mint-ui';
	import { Radio } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import axios from 'axios';
	export default {
		data() {
			return {
				mark:false,
				btntext:'提交',
				money: '', //佣金信息
				formula:'',//佣金计算公式
				channelname: '', //渠道姓名
				tel: '', //联系方式
				yjxx:true,//佣金信息状态
				invoice: '请选择发票类型', //发票类型
				slots: [{
					flex: 1,
					values: [{
							id: 0,
							name: '请选择发票类型',
							companyName: '',
							number: '',
							address: '',
							bankplace: ''
						},
						{
							id: 1,
							name: '幼狮增值税专用发票',
							companyName: '北京幼狮科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '北京市朝阳区东三环中路39号院24号楼22层2602 010-56143922',
							bankplace: '招商银行北京分行建国门支行 110921667410901'
						},
						{
							id: 2,
							name: '幼狮增值税普通发票',
							companyName: '北京幼狮科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '',
							bankplace: ''
						},
						{
							id: 3,
							name: '华亮致新增值税普通发票',
							companyName: '北京华亮致新科技有限公司',
							number: '9111 0105 MA01 7E7T 62',
							address: '',
							bankplace: ''
						},
						{
							id: 4,
							name: '华溯商贸增值税普通发票',
							companyName: '北京幼狮科技有限公司',
							number: '9111 0105 3064 0709 X3',
							address: '',
							bankplace: ''
						},
						{
							id: 5,
							name: '航远投资增值税普通发票',
							companyName: '北京航远投资管理有限公司',
							number: '9111 0105 0896 4805 64',
							address: '',
							bankplace: ''
						}
					],
					className: 'slot1',
					textAlign: 'center'
				}],
				invoicetype: '',
				shade: false,
				pickshow: false, //弹框状态控制
				theinvoice: { //生成的发票对象
					id: '',
					companyName: '',
					number: '',
					address: '',
					bankplace: ''
				},
				value:'',//佣金信息按钮
				options:[
				  {
				    label: '正常',
				    value: 'true',
				  },
				  {
				    label: '不正常',
				    value: 'false',
				  }
				],
				xsid:'',//路由传过来的销售人员id
				xsData:{},//销售人员数据
				qdfind:[],//渠道人员模糊查找
				qdinp:false,//渠道人员列表
				qdinp1:false,
				btnshow:true,
				chaobj:{},
				chuzuren:'',//出租人
				st:'',
			}
		},
		created() {
			this.xsid = this.$route.query.xsid;
			this.zt = this.$route.query.zt;//处理状态1未处理，0已处理
			this.st = this.$route.query.st;
			this.takexs();//获取销售人员信息
		},
		methods: {
			takexs(){//获取销售人员信息
				const url = this.$api + "/yhcms/web/qdyongjin/getQdYjForid.do";
				axios.post(url,{ 
            		"id":this.xsid,
	           }).then((res)=>{
	            	this.xsData = res.data.data;
            		this.money = this.xsData.xsyongjin;
            		this.value = String(this.xsData.xsyongjinxinxi);
            		this.formula = this.xsData.xsjisuangongshi;
            		this.channelname = this.xsData.xsqvdao;
            		this.tel = this.xsData.xsqvdaotel;
            		this.yjxx = this.xsData.xsyongjinxinxi;
            		this.chuzuren = this.xsData.chuzuren;
	
					if(this.yjxx == true){
						$(".mint-radio:eq(1) span").removeClass('actives');
						$(".mint-radio:eq(0) span").addClass("activ");
					}
					if(this.yjxx == false){
						$(".mint-radio:eq(0) span").removeClass('activ');
						$(".mint-radio:eq(1) span").addClass("actives");
					}	
						
					if(this.xsData.xsfpdanwei != '' && this.xsData.xsfpnashuiren != ''){
	            		this.theinvoice.companyName = this.xsData.xsfpdanwei;
						this.theinvoice.number = this.xsData.xsfpnashuiren;
						this.theinvoice.address = this.xsData.xsfpdizhidianhua;
						this.theinvoice.bankplace = this.xsData.xsfpkaihuhang;
						this.invoice = this.xsData.xsfpleixing;
					}
					
            		if(this.chuzuren == '幼狮科技'){
            			this.theinvoice.companyName = this.slots[0].values[1].companyName;
						this.theinvoice.number = this.slots[0].values[1].number;
						this.theinvoice.address = this.slots[0].values[1].address;
						this.theinvoice.bankplace = this.slots[0].values[1].bankplace;
						this.invoice = this.slots[0].values[1].name;
            		}
            		if(this.chuzuren == '华溯商贸'){
            			this.theinvoice.companyName = this.slots[0].values[4].companyName;
						this.theinvoice.number = this.slots[0].values[4].number;
						this.theinvoice.address = this.slots[0].values[4].address;
						this.theinvoice.bankplace = this.slots[0].values[4].bankplace;
						this.invoice = this.slots[0].values[4].name;
            		}
            		if(this.chuzuren == '彭昆' || this.chuzuren == '彭亮'){
            			this.theinvoice.companyName = this.slots[0].values[2].companyName;
						this.theinvoice.number = this.slots[0].values[2].number;
						this.theinvoice.address = this.slots[0].values[2].address;
						this.theinvoice.bankplace = this.slots[0].values[2].bankplace;
						this.invoice = this.slots[0].values[2].name;
            		}
            		if(this.chuzuren == '航远投资管理'){
            			this.theinvoice.companyName = this.slots[0].values[5].companyName;
						this.theinvoice.number = this.slots[0].values[5].number;
						this.theinvoice.address = this.slots[0].values[5].address;
						this.theinvoice.bankplace = this.slots[0].values[5].bankplace;
						this.invoice = this.slots[0].values[5].name;
            		}
					
	            	if(this.xsData.taskZt==1 || this.xsData.taskZt==3){
	            		$('.new_box input').attr('disabled','disabled');//只读不可更改
	            		this.options[0].disabled = true//禁用单选
	            		this.options[1].disabled = true//禁用单选
	            		this.btnshow = false;
	            	}
	            	if(this.xsData.taskZt==4){//驳回状态
	            		this.btntext = '提交'
	            		if(this.zt == 0){
	            			$('.new_box input').attr('disabled','disabled');//只读不可更改
		            		this.options[0].disabled = true//禁用单选
		            		this.options[1].disabled = true//禁用单选
	            		}
	            	}
	            }, (err)=>{
					console.log(err);
	            });
			},
		
			init(){//销售数据提交
//				alert(this.channelname);
//				alert(JSON.stringify(this.xsData.xsqvdaoid));
//				alert(this.tel);
				const url = this.$api + "/yhcms/web/qdyongjin/xiaoshouSubmit.do";
//				const url = "http://192.168.1.44:8080/yhcms/web/qdyongjin/xiaoshouSubmit.do";
				var cookxs = JSON.parse(localStorage.getItem('cookxs'));
	            axios.post(url,{
	            	"ccode":this.xsData.ccode,
	            	"createdate":this.xsData.createdate,
	            	"chuzuren":this.xsData.chuzuren,
            		"cookie":cookxs,
            		'fanghao':this.xsData.fanghao,
            		'fanghaoid':this.xsData.fanghaoid,
					'hetongid':this.xsData.hetongid,
					'htbianhao':this.xsData.htbianhao,
					'id':this.xsData.id,
					'loudong':this.xsData.loudong,
					'loudongid':this.xsData.loudongid,
					'loupan':this.xsData.loupan,
					'loupanid':this.xsData.loupanid,
					'qdbeizhu':this.xsData.qdbeizhu,
					'taskZt':this.xsData.taskZt,
	            	'xiaoshou':this.xsData.xiaoshou,
					'xiaoshouid':this.xsData.xiaoshouid,
					'xsfpdanwei':this.theinvoice.companyName,
					'xsfpdizhidianhua':this.theinvoice.address,
					'xsfpkaihuhang':this.theinvoice.bankplace,
					'xsfpleixing':this.invoice,
					'xsfpnashuiren':this.theinvoice.number,
					'xsjisuangongshi':this.formula,
					'xsqvdao':this.channelname,
					'xsqvdaoid':this.xsData.xsqvdaoid,
					'xsqvdaotel':this.tel,
					'xsyongjin':this.qxsplitk(this.money),
					'xsyongjinxinxi':this.yjxx
	            }).then((res)=>{
	            	if(res.data.success){
	            		Toast({
							message: '提交成功',
							position: 'center',
							duration: 2000
						});	
						Indicator.close();
						$('#btn').removeAttr('disabled');
						this.$router.push({
//							path:'/commission_list',//跳转佣金信息
							path:'/yjgl_list',//跳转佣金管理列表
							query:{
								resault:'success'//提交成功后回到列表根据该字段刷新页面.
							}
						})
	            	}
//					console.log(res);
	            }, (err)=>{
	            	$('#btn').removeAttr('disabled');
					console.log(err);
	            });
			},
			channeltel(){//模糊查询渠道人员信息查找通过电话
				if(this.tel != ''){
					this.qdinp = true;
					this.qdinp1 = false;
					this.channel();
				}
			},
//			channeluser(){//模糊查询渠道人员信息查找通过姓名
//				if(this.channelname != ''){
//					this.qdinp1 = true;
//					this.qdinp = false;
//					this.channel();
//				}
//			},
			channel(){//模糊查询渠道人员信息
//				const url = "http://192.168.1.44:8080/yhcms/web/qdyongjin/xiaoshouSubmit.do";
				const url = this.$api + "/yhcms/web/qdyongjin/getLikeQd.do";
				axios.post(url,{
            		"name":this.channelname,
					"phone":this.tel
	            }).then((res)=>{
	            	this.qdfind = res.data.data;
//					console.log(this.qdfind);
	            }, (err)=>{
					console.log(err);
	            });
			},
			qdxz(name,tel){//选择信息
				this.mark = true;
				this.channelname = name;
				this.tel = tel;
				this.qdinp = false;
				this.qdinp1 = false;
			},
			//佣金信息状态
			check(a){
//				console.log(a)
				this.yjxx = a;
				if(a == "true"){
					$(".mint-radio:eq(1) span").removeClass('actives');
					$(".mint-radio:eq(0) span").addClass("activ");
				}
				if(a == "false"){
					$(".mint-radio:eq(0) span").removeClass('activ');
					$(".mint-radio:eq(1) span").addClass("actives");
				}
				if(a == 'true'){//正常时的月租金公式
					this.formula = '月租金 * 12 * 0.08'
					$('.formulas').attr('disabled','disabled');
				}else{
					this.formula = ''
					$('.formulas').removeAttr('disabled');
				}
			},
			selinvoice() { //发票类型选择
//				if(this.xsData.taskZt==0 || this.xsData.taskZt==1 || this.xsData.taskZt==2 || this.xsData.taskZt==3){
				if(this.xsData.taskZt==0){
					this.shade = true;
					this.pickshow = true;
				}
				if(this.xsData.taskZt==1 || this.xsData.taskZt==3){
					return;
				}
				if(this.xsData.taskZt==4){//驳回状态
					if(this.zt==0){
						return						
					}
				}
				this.shade = true;
				this.pickshow = true;
			},
			onValuesChange(picker, values) {
				this.chaobj = Object.assign({},values[0])
//				console.log(this.chaobj);
//				this.invoicetype = values[0].name;
////				console.log(values[0]);
//				this.theinvoice.companyName = values[0].companyName;
//				this.theinvoice.number = values[0].number;
//				this.theinvoice.address = values[0].address;
//				this.theinvoice.bankplace = values[0].bankplace;
//				this.theinvoice.id = values[0].id;
			},
			clk() {}, //阻止默认
			elect(state) { //确认、取消
				if(state) {
					if(this.chaobj.id == "0"){
						Toast({
							message: '发票类型不能为空',
							position: 'center',
							duration: 3000
						});
					}else{
						this.theinvoice = Object.assign({},this.chaobj);
						this.invoice = this.theinvoice.name;
						this.shade = false;
						this.pickshow = false;
					}
				} else {
					this.shade = false;
					this.pickshow = false;
				}
			},
			splitk(num) { //千位分隔符 
				if(num != '' && num.indexOf('.')==-1){
					var number = parseInt(num.replace(/,/g,'')).toLocaleString();
					return number;										
				}else if(num != '' && num.indexOf('.')){
					console.log(num)
					var zheng = String(num).split('.')[0];//小数部分
					var decimal = String(num).split('.')[1] || '';//小数部分
			     	return zheng + '.' + decimal;
				}else{
					return '';
				}
			},
			qxsplitk(num){//取消千位分隔符
				return String(num).split(',').join('');
			},
			inputFunc() {
				this.money = this.splitk(this.money);
				if(this.money == 'NaN'){
					this.money = ''
				}
			},
			bas(){
				if(this.money == '' || this.money == undefined){
					Toast({
						message: '佣金金额不能为空',
						position: 'center',
						duration: 2000
					});
					return;
				}
				if(this.yjxx == null){
					Toast({
						message: '请确认佣金信息',
						position: 'center',
						duration: 2000
					});
					return;
				}
				if(this.formula == undefined || this.formula == ''){
					Toast({
						message: '佣金计算公式不能为空',
						position: 'center',
						duration: 2000
					});
					return;
				}
				if(this.channelname == '' || this.channelname == undefined){
					Toast({
						message: '渠道姓名不能为空',
						position: 'center',
						duration: 2000
					});
					return;
				}
				
				if(this.tel == undefined || this.tel == ''){
					Toast({
						message: '联系方式不能为空',
						position: 'center',
						duration: 2000
					});
					return;
				}
				if(this.invoice == undefined || this.invoice == '请选择发票类型'){
					Toast({
						message: '请选择发票类型',
						position: 'center',
						duration: 2000
					});
					return;
				}else{
					Indicator.open({
					  text: '提交中...',
					  spinnerType: 'fading-circle'
					});
					$('#btn').attr('disabled','disabled');
//					setTimeout(function(){
//						$('#btn').removeAttr('disabled');
//					},5000)
					this.init();
				}
				
//				if(this.money == undefined || this.channelname == undefined || this.tel == undefined ||  this.invoice == '请选择发票类型' || this.invoice == undefined || this.formula == undefined){
//					Toast({
//						message: '请将信息填写完整',
//						position: 'center',
//						duration: 2000
//					});
//					return;
//				}else{
//					this.init();
//				}
				
			},
			getUrlParam(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]); return null;
			}

		},
		mounted() {
			
		},
		watch: {
			channelname(){
				if(this.channelname != '' && !this.mark){
					this.qdinp1 = true;
					this.qdinp = false;
					this.channel();
				}else{
					this.mark = false;
					this.qdinp1 = false;
					this.qdinp = false;
				}
				if(this.st == 6){
					this.qdinp1 = false;
					this.qdinp = false;
					this.st = 5;	
				}
			}
		},
		computed:{
			btnzt:function(){
				return this.money || this.channelname || this.tel || this.formula || this.invoice != undefined || this.yjxx;
			}
		}
	}
</script>