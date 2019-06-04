<style scoped lang="less">
    @import "../resources/css/reset.css";
    @import "../resources/css/base.less";
    .pin{
        //border:1px solid red;
        margin: 2.5rem;
        display: none;
    }
    i{
        color:rgb(255,0,0);
    }
</style>
<template>
    <div class="all_elements">
        <div class="build_top">
            <ul class="ys_item_ul mb60">
                <li class="clearfix pr">
                    <span class="ys_tit w224"><i>*</i> 原密码：</span>
                    <div class="ys_item_con fl"">
                        <input type="password" value="" v-model="ypwd" placeholder="请输入原密码">
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit w224"><i>*</i> 新密码：</span>
                    <div class="ys_item_con fl">
                        <input class="npwd" type="password" value="" v-model="npwd" placeholder="请设置密码">
                    </div>
                </li>
                <li class="clearfix pr">
                    <span class="ys_tit w224"><i>*</i> 确认密码：</span>
                    <div class="ys_item_con fl">
                        <input type="password" value="" v-model="anpwd" placeholder="请再次确认密码">
                    </div>
                </li>
                <!--<li>
                    <span class="ys_tit w224">11</span>
                    <div>
                        22
                    </div>
                </li>-->
                <div>
                    <span class="pin"></span>
                </div>
            </ul>
            <a href="javascript:;" class="ys_default_btn mb80" @click="saveAreaMsg">确认修改</a>
        </div>
    </div>
</template>
<script>

    import { Toast } from 'mint-ui'; //toast
    import { Indicator } from 'mint-ui';
    import crypto from 'crypto';
    import { MessageBox } from 'mint-ui'; //弹窗

    export default {
        data () {
            return {
                ypwd:null,
                npwd:null,
                anpwd:null,
            }
        },
        methods: {
            saveAreaMsg(){
                if(this.ypwd != null && this.npwd != null &&this.anpwd != null ){
                    if(this.ypwd != this.npwd){
                        if(this.npwd == this.anpwd){
                            const _this = this;
                            const user22 = JSON.parse(localStorage.getItem('cookxs'));
                            const sha1 = crypto.createHash('sha1'), md5 = crypto.createHash('md5');
                            const sha11 = crypto.createHash('sha1'), md51 = crypto.createHash('md5');
                            sha1.update(this.ypwd);
                            sha11.update(this.npwd);
                            const pwd = sha1.digest('hex');
                            md5.update(pwd);
                            const npwd1 = sha11.digest('hex');
                            md51.update(npwd1);
                            const ypwd = md5.digest("hex");
                            const npwd = md51.digest("hex");
                            this.$http.post(
                                this.$api + "/yhcms/web/jcsj/updatexs.do",
                                {
                                    "upass": ypwd,
                                    "updateupass": npwd,
                                    "cookie": user22.sjs,
                                    "foreEndType": 2,
                                    "code": "300000045"
                                }
                            ).then(function (res) {
                                Indicator.close();
                                var result = JSON.parse(res.bodyText);
                                if (result.success) {
                                    Toast({
                                        message: '修改密码成功',
                                        position: 'bottom',
                                        duration: 1000
                                    });
                                    localStorage.removeItem('cookxs');
                                    setTimeout(function(){
                                        _this.$router.push({path:'/index'});
                                    },1000);

                                } else {
                                    Toast({
                                        message: result.message,
                                        position: 'bottom'
                                    });
                                }
                            }, function (res) {
                                Indicator.close();
                                Toast({
                                    message: '修改密码失败! 请稍候再试',
                                    position: 'bottom'
                                });
                            });
                        }else{
                            MessageBox('提示',"两次输入的密码不一样！");
                        }
                    }else{
                        MessageBox('提示',"原始密码和新密码一样！");
                    }

                }else{
                    MessageBox('提示',"必填项不能为空！");
                }
            },
        },
        mounted(){

        },
    }
</script>




<!--
<style lang="less">
    @import "../resources/css/xiugaimima.less";
</style>
<template>
    <div>
        <div class="">
            <div class="mima">原&nbsp;&nbsp;密&nbsp;码：<input type="password"></div>
            <div>新&nbsp;&nbsp;密&nbsp;码：<input type="password"></div>
            <div>确认密码：<input type="password"></div>
        </div>
        <div class=""><a class="border queren" href="javascript:;" @click="queren_edit">确认修改</a></div>
    </div>
</template>
<script type="text/babel">
    export default {
        data(){
            return{

            };
        },
        methods:{
            queren_edit(){
                alert(111);
            }
        },
        mounted:function () {
            
        }
    }

</script>-->
