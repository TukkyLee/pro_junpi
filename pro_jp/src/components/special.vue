<template>
	<div id="goods">
		<a v-for="(item,index) in goods" href="#/brand_list">
			<img :src="item.pic_url">
		</a>
	</div>
</template>

<script>
import axios from 'axios';
export default {

	name: 'special',

	data () {
		return {
			goods:[],
		}
	},
	mounted(){
		var _this = this;
		axios.get('/api/getIndexNavSkip?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe').then(res=>{
			console.log(res.data.GoodsRes.goods);
			_this.goods = res.data.GoodsRes.goods;
			console.log('---->goods');
		});
	},
	// computed:{
	// 	brandId:function(){
	// 		var brand_id = [];
	// 		for(var i=0; i<this.goods.length; i++){
	// 			brand_id.push(this.goods[i].goods_jump_url.match(/\/[^/*?]+\?/g)[0].slice(1,-1));
	// 			console.log(this.goods[i].goods_jump_url.match(/\/[^/*?]+\?/g));
	// 		}
	// 		console.log(brand_id);
	// 		return brand_id;
	// 	}
	// }
}
</script>

<style lang="scss" scoped>
	div#goods{
	    	a{	
	    		display: inline-block;
	    		width:50%;
	    		img{
	    			width:100%;

	    		}
	    		&:last-of-type{
					margin-bottom:2.1333333333333333rem;
				}
	    	}
	    }
</style>