<template>
	<!-- <div>
		mine
	</div> -->
	<div id="mine">
		<div class="top">
			个人中心
		</div>
		<div class="re-lo">
			<div v-if="username!==''&&username!==undefined">
				{{username}}
			</div>
			<ul v-if="username==''||username==undefined">
				<li><a href="#/register">注册</a></li>
				<span></span>
				<li><a href="#/login">登录</a></li>
			</ul>
		</div>
		<div class="bar">
			<p><a href="javascript:void(0)">我的订单</a></p>
			<p><a href="javascript:void(0)">全部订单</a></p>
		</div>
		<div class="info">
			<ul>
				<li>
					<a href="javascript:void(0)">
						<i class="iconfont icon-qianbao"></i>
						待付款
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<i class="iconfont icon-tuangou"></i>
						待成团
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<i class="iconfont icon-huoche"></i>
						待收货
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<i class="iconfont icon-shouyin"></i>
						退款/售后
					</a>
				</li>
			</ul>
		</div>
		<div class="coupon">
			<p><a href="javascript:void(0)">我的优惠券</a></p>
		</div>
		<div class="coll">
			<p><a href="javascript:void(0)">我的收藏</a></p>
		</div>
		<div class="tuan">
			<p><a href="javascript:void(0)">我的拼团</a></p>
		</div>
		<div class="vip">
			<a href="javascript:void(0)"><p>VIP砖石卡</p>
			<p>开卡即享折上折</p></a>
		</div>
		<div class="free">
			<a href="javascript:void(0)"><p>我的免单券</p>
			<p>0张</p></a>
		</div>
		<div class="lend">
			<a href="javascript:void(0)"><p>借钱</p>
			<p>新用户免费领1000元</p></a>
		</div>
	</div>
</template>

<script>
export default {

	name: 'mine',

	data () {
		return {
			username:'',
			
		}
	},
	mounted(){
		// this.username=this.$route.params.username?this.$route.params.username:'';
		// console.log(this.$route.params);
		// console.log(this.username);	
		// this.username=session.user.username?this.$route.params.username:'';
		console.log('mine---->'+this.$route.params.username);
		if(this.$route.params.username !== '' && typeof(this.$route.params.username) !== "undefined"){
			console.log(this.$route.params.username);
			this.setCookie('username',this.$route.params.username,7);
		}
		this.username=this.getCookie('username');
		console.log(this.username);
	},
	methods:{
		setCookie:function(key,value,time){
			console.log('setCookie---->'+key);
			var date = new Date();
			time = time ? time : 0;
			date.setDate( date.getDate() + time );
			document.cookie = key+'='+ value +';expires='+date;
		},
		getCookie:function(key){
			console.log('getCookie---->'+key);
			var arr = document.cookie.split('; ');
			for(var i=0;i<arr.length;i++){
				//console.log(arr[i]);
				var childArr = arr[i].split('=');
				if( childArr[0] == key ){
					return childArr[1];
				}
			}
		},
	}
}
</script>

<style lang="scss" scoped>
	div#mine{
		div.top{
			height:44px;
			line-height:44px;
			font-size:18px;
			text-align:center;
			background:#ff464e;
			color:#fff;
		}
		div.re-lo{
			background:#ff464e;
			height:100px;
			line-height:100px;
			text-align:center;
			position:relative;
			div{
				width:100%;
				height:100%;
				font-size:18px;
				text-align:center;
				color:#fff;
			}
			ul{
				display: flex;
				li{
					flex:1;
					a{
						display:inline-block;
						padding:0 48px;
						font-size:20px;
						color:#fff;
						text-decoration:none;
					}
				}
				span{
					position:absolute;
					display:inline-block;
					height:20px;
					width:2px;
					background:#fff;
					top:50%;
					left:50%;
					transform:translate(-50%,-50%);
				}
			}
		}
		div.bar{
			height:48px;
			line-height:48px;
			padding:0 .59733rem 0 .768rem;;
			font-size:15px;
			background:#fff;
			color:#333;
			position:relative;
			&::after{
				content: "";
			    position: absolute;
			    left: .59733rem;
			    right: .59733rem;
			    bottom: 0;
			    height: 2px;
			    background-color: #ebebeb;
			    -webkit-transform: scaleY(.5);
			    transform: scaleY(.5);
			}
			p{
				float:left;
				a{
					color:#333;
					font-size:15px;
					text-decoration:none;
				}
				&:last-of-type{
					float:right;
					a{
						color:#999;
						font-size:14px;
						text-decoration:none;
						margin-right:8px;

					}
				}
			}
		}
		div.info{
			padding-top:15px;
			padding-bottom:12px;
			background:#fff;
			ul{
				display: flex;
				li{
					flex:1;
					text-align:center;
					a{
						display: inline-block;
						width:100%;
						i{
							display: block;
							font-size:25px;
							margin-bottom:10px;
						}
					}
				}
			}
		}
		div.coupon{
			margin-top:15px;
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			p{
				a{
					display: inline-block;
					width:100%;
				}
			}
		}
		div.coll{
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			p{
				a{
					display: inline-block;
					width:100%;
				}
			}

		}
		div.tuan{
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			p{
				a{
					display: inline-block;
					width:100%;
				}
			}

		}
		div.vip{
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			a{
				display: inline-block;
				width:100%;
			}
			p{
				float:left;
				&:last-of-type{
					float:right;
					color:#999;
				}
			}
		}
		div.free{
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			a{
					display: inline-block;
					width:100%;
			}
			p{
				float:left;
				&:last-of-type{
					float:right;
					color:#999;
				}
			}
		}
		div.lend{
			height:48px;
			line-height:48px;
			font-size:15px;
			padding:0 .59733rem 0 .768rem;
			background:#fff;
			color:#333;
			a{
					display: inline-block;
					width:100%;
			}
			p{
				float:left;
				&:last-of-type{
					float:right;
					color:#999;
				}

			}
		}
	}
</style>