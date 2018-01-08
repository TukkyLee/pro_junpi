<template>
	<!-- <div>
		brand
	</div> -->
	<!--brand-->
	<div id="brand">
		<div id="head">
			品牌特卖
		</div>
		<a v-for="item in brandlist" href="#/brand_list">
			<img :src="item.ss_cover">
		</a>
	</div>
</template>

<script>
import axios from 'axios';
export default {

  	name: 'brand',

	data () {
		return {
			brandlist:[],
		}
	},
	mounted(){
		axios.get('/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4_0&page=1').then(res=>{
			console.log(res.data.data.goods);
			this.brandlist = res.data.data.goods;
		});
	},
}
</script>

<style lang="scss" scoped>
	div#brand{
		div#head{
			width:100%;
			height:1.8773333333333333rem;
			line-height:1.8773333333333333rem;
			text-align:center;
			font-size:0.768rem;
			color:#333;
			background:#fff;
			position:fixed;
			top:0;
			left:0;
		}
		a{
			display:inline-block;
			width:100%;
			img{
				width:100%;
			}
			&:first-of-type{
				margin-top:1.8773333333333333rem
			}
			&:last-of-type{
				margin-bottom:2.1333333333333333rem;
			}
		}
	}
</style>