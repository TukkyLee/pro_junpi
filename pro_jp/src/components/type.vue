<template>
	<!-- <div>
		type
	</div> -->
	<!--search-->
	<div id="type">
		<header>
			<a href="javascript:void(0)">
				<i class="iconfont icon-fangdajing"></i>
				搜索商品
			</a>
		</header>
		<section>
			<ul>
				<li>
					<span>女装</span>
				</li>
				<li>
					<a href="javascript:void(0)">
						<img src="//s2.juancdn.com/bao/171024/a/7/59ef2ead8150a14fa4137e8b_200x200.png?iopcmd=convert&dst=webp">
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<img src="//s2.juancdn.com/bao/171024/6/f/59ef2e438150a151747ea854_200x200.png?iopcmd=convert&dst=webp">
					</a>
				</li>
				<li>
					<a href="javascript:void(0)">
						<img src="//s2.juancdn.com/bao/170824/8/d/599e9f6ba9fcf8902a706e88_200x200.png?iopcmd=convert&dst=webp">
					</a>
				</li>
			</ul>
		</section>
	</div>
</template>

<script>
export default {

  name: 'type',

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	div#type{
		background:#fff;
		header{
			width:100%;
			height:1.8773333333333333rem;
			padding:0 0.5973333333333334rem;
			border-bottom:1px solid #f2f2f2;
			box-sizing:border-box;
			background:#fff;
			display:flex;
			align-items:center;
			a{
				&:first-of-type{
					display:inline-block;
					height:1.1946666666666668rem;
					color:rgb(153, 153, 153);
					background:#f2f2f2;
					border-radius:10px;
					flex:1;
					line-height:1.1946666666666668rem;
					i{
						width:0.64rem;
						height:0.64rem;
						margin:0 0.21333333333333335rem;
					}
					span{
						color:red;
					}
				}
			}
		}
		section{
			ul{
				display: flex;
				li{
					flex:1;
					float:left;
					text-align:center;
					color:red;
					font-size:20px;
					a{
						img{
							width:100%;
						}
					}
				}
				&:first-of-type{
					border-left:4px red solid;
					align-items:center;
					span{
					}
				}
			}
		}
	}

</style>