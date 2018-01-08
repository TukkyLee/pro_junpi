<template>
	<div id="login">
		<div class="login-head">
			登录
		</div>
		<div class="login-form">
			<input type="text" name="username" v-model="username" placeholder="用户名">
			<input type="password" name="password" v-model="password" placeholder="密码">
			<button @click="login">登录</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {

	name: 'login',

	data () {
		return {
			username:'',
			password:'',
		}
	},

	methods:{
		login:function(){
			var _this = this;
			axios.post('/interface/login',{username:this.username,password:this.password}).then(res=>{
					console.log('login---->'+res);
					if(res !== null){
						_this.$router.push({ name: 'Mine', params: { username: res.data[0].username }})
					}
			});
		}
	}

}
</script>

<style lang="scss" scoped>
	div#login{
		height:100%;
		background:#fff;
		div.login-head{
			height: 44px;
		    line-height: 44px;
		    font-size: 18px;
		    color:#fff;
		    background:red;
		    text-align:center;
		}
		div.login-form{
			padding-left:12px;
			padding-right:12px;
			margin-top:44px;
			input{
				height:48px;
				width:100%;
				border:0;
				outline:none;
				border-bottom:1px solid #ebebeb;
				font-size:14px;
			}
			button{
				height:48px;
				line-height:48px;
				margin-top:25px;
				font-size:18px;
				background:red;
				color:#fff;
				border:0;
				width:100%;
			}
		}
	}
</style>