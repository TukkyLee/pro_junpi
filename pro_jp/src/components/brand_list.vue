<template>
	<div id="list">
		<div class="list-head">
			{{shop_name}}
		</div>
		<div class="list-brand">
			<div class="content">
				<div class="pic">
					<img :src="logo_url">
				</div>
				<div class="txt">
					<p>{{shop_name}}</p>
					<p>{{store_info}}</p>
				</div>
				<div class="rx">
					<span>{{title}}</span>
					{{desc}}
				</div>
			</div>
		</div>
		<div class="list-time">
			<p></p>
			<div>
				<span>
					<span>
						<span></span>
						天
						<span></span>
						时
						<span></span>
						分
						<span></span>
						秒
					</span>
				</span>
			</div>
		</div>
		<div class="list-pic">
			<img v-for="item in srcUrls" :src="item.url">
		</div>
		<div class="others">
			<ul class="floor-bar">
				<li v-for="(item,index) in floor_bar" :class="index==active?'active':''" @click="changeBar(index)">
					{{item.title}}
				</li>
			</ul>
			<div class="goods">
				<div v-for="(item,index) in floor_data" class="part">
					<div class="tabname">
						<span>{{floor_data[index][0].tabname}}</span>
					</div>
					<a v-for="value in floor_data[index]" href="javascript:void(0)">
						<div class="pic">
							<img :src="value.pic_url">
						</div>
						<div class="con">
							<span class="new-price">{{value.cprice}}</span>
							<span class="price">{{value.oprice}}</span>
						</div>
						<div class="title">
							{{value.title}}
						</div>
					</a>
				</div>
			</div>
		</div>
		<div class="bottom">
			<div class="end">
				亲,已经到底了
			</div>
			<div class="copyright">
				copyright@武汉奇米网络科技有限公司
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {

	name: 'list',

	data () {
		return {
			shop_name:'',
			logo_url:'',
			store_info:'',
			title:'',
			desc:'',
			srcUrls:[],
			floor_bar:[],
			active:0,
			floor_data:[],
		}
	},

	mounted(){
		var _this = this;
		console.log(this.$route.params);
		var ids = this.$route.params;
		axios.get(`/api/getBrandGoods?page=1&brand_id=1779533_3469706&msort=1&goods_utype=C4&price_range=&cat_threeids=`).then(res=>{
			console.log(res.data.brandInfo.shop_name);
			this.shop_name = res.data.brandInfo.shop_name;
			this.logo_url = res.data.brandInfo.logo_url;
			this.store_info = res.data.brandInfo.store_info;
			this.title = res.data.brandInfo.coupon_data[0].title;
			this.desc = res.data.brandInfo.coupon_data[0].list[0].desc;
			this.srcUrls = res.data.pin_info.srcUrls;
			this.floor_bar = res.data.floor_bar;
			this.floor_data = res.data.floor_data;
		})
	},

	methods:{
		changeBar(index){
			this.active = index;
		}
	}
}
</script>

<style lang="scss" scoped>
	div#list{
		div.list-head{
			height:1.8773333333333333rem;
			line-height:1.8773333333333333rem;
			text-align:center;
			background:#fff;
			font-size:0.768rem;
			color:#333;
		}
		div.list-brand{
			background:url('https://web.juanpi.com/static/media/brand_bg.15e6f457.png');
			padding:0.4266666666666667rem;
			overflow: hidden;
			div.content{
				background:#fff;
				padding-top:0.5546666666666666rem;
				padding-bottom:0.5546666666666666rem;
				padding-left:0.5973333333333334rem;
				overflow: hidden;
				div.pic{
					float:left;
					display: flex;
					height:1.92rem;
					width:1.92rem;
					border:1px solid #ebebeb;
					align-items:center;
					img{
						width:100%;
						vertical-align:top;
					}
				}
				div.txt{
					float:left;
					width:55%;
					p:first-of-type{
						display: inline-block;
						font-size:0.5973333333333334rem;
						height:1.28rem;
						padding-left:0.4266666666666667rem;
					}	
					p:last-of-type{
						font-size:0.512rem;
						color:#333;
						opacity:.5;
						padding-left:0.4266666666666667rem;
					}
				}
				div.rx{
					clear:both;
					padding-top:0.64rem;
					font-size:0.512rem;
					color:#333;
					span{
						padding:0 0.21333333333333335rem;
						margin-right:0.5973333333333334rem;
						color:#ff464e;
						border:1px #ff464e solid;
					}
				}
			}
		}
		div.list-time{
			font-size: 0.4266666666666667rem;
		    color: #999;
		    text-align: center;
		    padding-top: 0.512rem;
		    padding-bottom: 0.4266666666666667rem;
		    p{

		    }
		    div{
		    	span{
					span{
						span{
							display: inline-block;	
						    width: 0.853333rem;
						    font-size: 0.597333rem;
						    vertical-align: middle;
						}
					}
		    	}
		    }
		}
		div.list-pic{
			img{
				outline-width:0px;  
		  		vertical-align:top;
				width:100%;
			}
		}
		div.others{
			ul.floor-bar{
				height:1.6213333333333333rem;
				border-bottom:1px solid #e7e7e7;
				text-align: center;
				display: flex;
				li{
					flex:1;
					height:1.6213333333333333rem;
					line-height:1.6213333333333333rem;
					text-align: center;
					vertical-align: middle;
					align-items: center;
					float:left;
					background:#fff;
					border-top:1px solid #e7e7e7;
					border-bottom:1px solid #e7e7e7;
					border-bottom:4px #fff solid;
				}
				li.active{
					border-bottom:4px #ff464e solid;
					color:#ff464e;
				}
			}
			div.goods{
				div.part{
					overflow: hidden;
					div.tabname{
						height:88px;
						line-height:88px;
						font-size:0.5973333333333334rem;
						background:#fff;
						text-align:center;
						// display: flex;
						justify-content:center;
						span{
							display: block;
							position:relative;
							&::before{
								content: "";
							    position: absolute;
							    top: 50%;
							    left: -35px;
							    background: #333;
							    width: 20px;
							    height: 1px;
							}
							&::after{
								content:"";
							    position: absolute;
							    top: 50%;
							    right: -35px;
							    background: #333;
							    width: 20px;
							    height: 1px;
							}
						}
					}
					a{
						display:block;
						overflow: hidden;
						width:50%;
						float:left;
						background:#fff;
						&:first-of-type{
							display: none;
						}
						&:last-of-type{
							display: none;
						}
						div.pic{	
							img{
								width:100%;
							}
						}
						div.con{
							padding:0 0.3413333333333333rem;
							margin-top:0.256rem;
							span.new-price{
								font-size:0.64rem;
								color:#ff464e;
								margin-right:0.17066666666666666rem;
							}
							span.price{
								text-decoration:line-through;
								color:#bbb;
								font-size:0.4693333333333333rem;
							}
						}
						div.title{
							font-size:0.512rem;
							color:#3b3b3b;
							padding-right:2.65rem;
							padding-left:0.3413333333333333rem;
							margin-bottom:0.512rem;
							white-space: nowrap;
    						text-overflow: ellipsis;
    						overflow:hidden;
						}
					}
				}
			}
		}
		div.bottom{
			div.end{
				text-align:center;
				font-size:0.6rem;
				padding:2% 0;
			}
			div.copyright{
				text-align:center;
				height:58px;
				line-height:58px;
				margin-bottom:2.1333333333333333rem;
				background:#fff;
			}
		}
	}
</style>