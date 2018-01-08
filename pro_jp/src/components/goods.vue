<template>
	<!-- <div>goods</div> -->
	<ul>
		<li v-for="(item,index) in goods">
			<a href="javascript:void(0)">
				<img :src="item.pic_url">
			</a>
		</li>
	</ul>
</template>

<script>
import axios from 'axios';
export default {

	name: 'goods',

	data () {
		return {
    		goods:[],
		}
	},

	mounted(){
		axios.get('/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe_jingxuandanpin&flag=tab_hpdp').then(res=>{
			console.log(res.data.data.goods.pic_url);
			this.goods = res.data.data.goods;
		});
	}
}
</script>

<style lang="scss" scoped>
	ul{
		li{
			display: inline-block;
			width:50%;
			a{
				display: inline-block;
				width:100%;
				img{
					width:100%;
				}
			}
			&:last-of-type{
				margin-bottom:2.1333333333333333rem;
			}
		}
	}
</style>