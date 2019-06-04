<style scoped lang="less">
  @import "../resources/css/reset.css";
  @import "../resources/css/website/login.less";

  .page-infinite-loading {
    text-align: center;
    background-color: #FFF;
    & > span {
      display: inline-block;
    }
  }

  .mt5rem {
    margin-top: .5rem;
  }

</style>
<template>
  <div class="all_elements" id="ys_user">
    <div class="all_wrap">
      <div class="login_wrap">
        <div class="login_box" >
          <div class="inp_item">
            <div class="inp_bg"></div>
            <i class="ys_icon user"></i>
            <input type="text" id="userName"
                   class="mt5rem" value=""
                   v-model.trim="username" placeholder="请输入用户名">
          </div>
          <div class="inp_item">
            <div class="inp_bg"></div>
            <i class="ys_icon pass"></i>
            <input type="password" value="" class="mt5rem" v-model.trim="password" placeholder="请输入密码">
          </div>
          <div class="inp_item login">
            <a href="javascript:;" style="line-height: 1.4rem;margin-top: .14rem" class="ys_btn" @click="login">登 录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {Toast} from 'mint-ui'; //toast
  import {Indicator} from 'mint-ui';
  import {MessageBox} from 'mint-ui'; //弹窗
  import crypto from 'crypto';

  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login(){
        const _this = this, un = this.username, pw = this.password;
        if (!un || !pw) {
          MessageBox('提示', '请输入用户名和密码');
          return;
        }
        const sha1 = crypto.createHash('sha1'), md5 = crypto.createHash('md5');
        sha1.update(this.password);
        const pwd = sha1.digest('hex');

        md5.update(pwd);
        const password = md5.digest("hex");
          const sjs = {"sjs":(new Date)};
          localStorage.setItem('cookxs', JSON.stringify(sjs));
          let user22 = JSON.parse(localStorage.getItem('cookxs'));
          console.log(user22.sjs);
        this.$http.post(
        	
          this.$api + "/yhcms/web/jcsj/loginxs.do",
//        "http://116.62.68.26:8080/yhcms/web/jcsj/loginxs.do",
          {
            "parameters": {
              "uaccounts": un,
              "upass": password,
            },
            "img":JSON.parse(localStorage.getItem('xshead')),
            "foreEndType": 2,
            "code": "300000045",
            "cookie":user22.sjs,
          }
        ).then(function (res) {
          Indicator.close();
          var result = JSON.parse(res.bodyText);
          if (result.success) {
            const msg = {".": name,"time":(new Date).getMilliseconds()};
            localStorage.setItem('loginxs', JSON.stringify(msg));
            localStorage.setItem('userxs', JSON.stringify(result.uname));
            //let user33 = JSON.parse(localStorage.getItem('userxs'));
            Toast({
                message: '登录成功',
                position: 'bottom',
                duration: 1000
            });
						//登陆跳转
//						if(localStorage.getItem('back_page') && localStorage.getItem('back_page') != '' && localStorage.getItem('back_page') != undefined){
////							alert('跳转');
//							setTimeout(function(){
//	                _this.$router.push({path:localStorage.getItem('back_page')});
//	            },1000);
//						}else{
							setTimeout(function(){
//							    _this.$router.push({path:'/index'});
							    history.go(-1);
							},1000);							
//						}

          } else {
            Toast({
                message: '登录失败: ' + result.message,
                position: 'bottom'
            });
          }
        }, function (res) {
          Indicator.close();
          Toast({
              message: '登录失败! 请稍候再试',
              position: 'bottom'
          });
        });
      }
    },
    mounted(){
        $('title').html("幼狮科技");
    },
  }
</script>
