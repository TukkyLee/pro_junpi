<template>
	<!-- <div>
		cart
	</div> -->
	<div id="cart">
		<div class="header">
			购物车
		</div>
		<div class="cart">
			<img src="//jp.juancdn.com/jpwebapp_v1/images_v1/shopping/empty-cart.png">
			<p>看到喜欢的就带回家吧</p>
			<a href="javascript:void(0)">今日推荐</a>
		</div>
	</div>
</template>

<script>
export default {

  name: 'cart',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	div#cart{
		div.header{
			height:44px;
			line-height:44px;
			text-align:center;
			background:#fff;
			font-size:18px;
		}
		div.cart{
			margin:1.06667rem 0;
			text-align:center;
			img{
				width:40%;
				display: block;
				margin:0 auto;
				margin-bottom:12px;
			}
			p{
				font-size:16px;
				margin-bottom:.59733rem;
				color:#333;
			}
			a{
				display:inline-block;
				height:40px;
				width:138px;
				border:1px red solid;
				border-radius:5px;
				text-align:center;
				line-height:40px;
				color:red;
			}
		}
	}


</style>