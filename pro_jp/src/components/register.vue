<template>
	<div id="register">
		<div class="register-head">注册</div>
		<div class="form">
			<input type="text" name="username" v-model="username" placeholder="请输入用户名">
			<input type="password" name="password" v-model="password" placeholder="请输入密码">
			<button @click="sendData">提交</button>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
export default {

	name: 'register',

	data () {
		return {
			password:'',
			username:'',
		}
	},
	methods:{
		sendData:function(){
			console.log('---->sendData');
			// console.log(this.username);
			// console.log(this.password);
			var _this = this;
			axios.post('/interface/register',{username:this.username,password:this.password}).then(res=>{
					var temp;
					for(temp in res){
						console.log(typeof temp);
						console.log(temp);
						console.log(res[temp]);	
					}
					console.log('register---->'+ res.data);
					console.log('username---->'+res.data.username);
					console.log('password---->'+res.data.password);
					if(res !== null){
						_this.$router.push({ name: 'Mine', params: { username: res.data.username }})
					}
			});
			/*var config={
              method:'post',
              url: "/register/add",
              data:{username:this.username,password:this.password},
              headers: {'X-Requested-With': 'XMLHttpRequest'},
              requestHeader:{'Content-Type':'application/json'},
              // responseType: 
        	};
			axios(config).then(res=>{
				console.log(res);
			})*/
		}
	}
}
</script>

<style lang="scss" scoped>
	div#register{
		width:100%;
		height:100%;
		background:#fff;
		div.register-head{
			height:44px;
			background:#fff;
			text-align:center;
			line-height:44px;
			font-size:18px;
			border-bottom:1px solid #dedede;
		}
		div.form{
			padding-left:12px;
			padding-right:12px;	
			overflow:hidden;
			input{
				border:0;
				width:100%;
				font-size:14px;
				outline:none;
				margin-top:60px;
				float:left;
				height:48px;
				border-bottom:1px solid #ebebeb;
				&:last-of-type{
					margin-top:0;
				}
			}
			button{
				display: block;
				height:48px;
				line-height:48px;
				width:100%;
				font-size:18px;
				margin-top:25px;
				background:red;
				float:left;
				font-size:18px;
				border:0;
				color:#fff;
			}
		}
	}
</style>