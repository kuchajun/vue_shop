<template>
	<div class="content">
		<div class="main">
			<label class="main1" for="username">
				<i><img src="../assets/img/login1.png"/></i>
				<input id="username" type="text" placeholder="请输入账号" v-model="admin"/>
			</label>
			<label class="main2" for="password">
				<i><img src="../assets/img/login2.png"/></i>
				<input id="password" type="password" placeholder="请输入密码" v-model="password"/>
			</label>
			<label class="main3" for="sub">
				<input  @click="login" @keyup.enter="login"  type="button" name="" id="" value="登录" />
			</label>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { mapMutations } from 'vuex';
	import {Toast} from 'mint-ui';
	import axios from '../assets/js/config.js';
	import router from '../router/index.js';
	export default{
		data() {
	        return {
	            admin: '',
	            password: ''
	        }
	    },
		methods:{
			login(){
				console.log(this.admin+"___" +this.password)
				if (this.admin === '') {
	                this.open('1')
	            } else if (this.password === '') {
	                this.open('2')
	            } else {
	            	console.log(this.admin)
	            	const data={
	            		'account':this.admin,
	            		'password':this.password
	            	}
	            	axios({
					  method:'post',
					  url: 'Login',
					  data:data
					})
					.then((response) => {
						function checkSsid (ssid) {
						    var itemName = 'testssid';
						    var localssid = localStorage.getItem(itemName);
						
						    if (typeof(ssid) === 'string') {
						        //  设置ssid
						        if (!localssid) localStorage.setItem(itemName, ssid);
						       // console.log("参数为string")
						    } else {
						        //  取ssid，如果有，就赋值
						        if (typeof(ssid) !== 'object') ssid = {}
						        if (localssid) ssid[itemName] = localssid;
						    	return ssid;
						    }
						}	
						
						checkSsid(response.data.testssid)
					    console.log(response.data.testssid);
					    const code=response.data.code;
					    const msg=response.data.msg;
					    Toast(msg)
					    if(code==100){
					    	router.push("mine")
					    }
					    
					})
	            	
	            }
			},
			open(nodesc) {
	            if (nodesc === '1') {
	                Toast('账号不能为空')
	            } else if (nodesc === '2') {
	                Toast('密码不能为空')
	            } 
	        }
		}
	}
</script>
<style lang="scss" scoped>
	.content{
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding:7.9rem 0.87rem 0 0.87rem;
		background: url(../assets/img/lBanner.png) no-repeat left top;
		background-size: contain;
		.main{
			width: 100%;
			height: 100%;
			.main1,.main2{
				display: block;
				width: 100%;
				height: 1.12rem;
				box-sizing: border-box;
				border-radius: 0.56rem;
				border: 1px solid #999;
				display: flex;
				i{
					width: 0.89rem;
					height: 100%;
					display: flex;
					align-items: center;
					box-sizing: border-box;
					padding-left: 0.32rem;
				}
				input{
					flex: 1;
					height: 75%;
					margin-top: 0.07rem;
					margin-right: 0.56rem;
					line-height: 1;
					border: none;
					outline: none;
				}
			}
			.main1{
				img{
					width: 0.44rem;
					display: block;
				}
			}
			.main2{
				margin-top: 0.48rem;
				margin-bottom:1.12rem;
				img{
					width: 0.36rem;
					display: block;
				}
			}
			.main3{
				width: 100%;
				height: 1.12rem;
				display: block;
				input{
					width: 100%;
					height: 100%;
					border: none;
					border-radius: 0.56rem;
					background: #239aff;
					color: #fff;
					outline: none;
				}
			}
		}
	}
</style>