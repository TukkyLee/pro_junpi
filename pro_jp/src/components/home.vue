<template>
	<div id="outer">
		<!--search-->
		<header>
			<a href="javascript:void(0)">
				<i class="iconfont icon-fangdajing"></i>
				<span>卷皮</span>
				全場最高滿199減100
			</a>
			<a href="javascript:void(0)">
				<img src="https://goods3.juancdn.com/bao/170421/4/9/58f9f3bca43d1f15ff678b8c_132x132.png">
			</a>
		</header>
		<!-- Swiper -->
		<div class="swiper-container swiper-container-horizontal">
		    <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-390px, 0px, 0px);">
				<div v-for="item in adslist" class="swiper-slide" style="width: 360px; margin-right: 30px;">
					<a href="javascript:void(0)"><img :src="item.pic"></a>
				</div>
		    </div>
		    <!-- Add Pagination -->
			<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
				<span v-for="item in adslist" class="swiper-pagination-bullet"></span>
				<!-- <span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span>
				<span class="swiper-pagination-bullet"></span> -->
			</div>
		    <!-- Add Arrows -->
		    <div class="swiper-button-next"></div>
		    <div class="swiper-button-prev"></div>
		</div>
		<ul id="part" @click="changeGoods">
			<li>
				<a href="#/home/special" class="active">精选专场</a>
			</li>
			<li>
				<a href="#/home/goods">精选单品</a>
			</li>
		</ul>
		<!--goods-->
		<router-view></router-view>
	</div>
</template>

<script>
// import '@/lib/css/swiper-3.4.2.min.css';
// import '@/lib/js/swiper-3.4.2.min.js';
import axios from 'axios';
export default {

	name: 'home',

	data () {
	  return {
	    adslist:[],
	    goods:[],
	    active:true,
	  }
	},
	methods:{
		changeGoods:function(el){
			console.log(document.getElementById('part'));
			var lis = document.getElementById('part').children;
			for(var i=0; i<lis.length;i++){
				lis[i].firstChild.setAttribute('class','');
			}
			el.target.setAttribute('class','active');
		}
	},
    mounted(){
  //   	var _this = this;

		// function test1(){
		// 		return new Promise(function(resolve,reject){
		// 			axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(res=>{
		// 			console.log(res.data.adsInfo.slide_ads.config.slide[0].pic);
		// 			_this.adslist = res.data.adsInfo.slide_ads.config.slide;
		// 			}),
		// 			console.log('---->action');
		// 			resolve("我是第一个接口返回的数据");
		// 		})
		// }

		// function test2(){
		// 	return new Promise(function(resolve,reject){
		// 		new Swiper('.swiper-container', {
		// 			spaceBetween: 30,
		// 			centeredSlides: true,
		// 			loop:true,
		// 			autoplay:2000,
		// 			preventClicks:true,
		// 			pagination: '.swiper-pagination',
		// 			// 如果需要前进后退按钮
		// 			nextButton: '.swiper-button-next',
		// 			prevButton: '.swiper-button-prev'
		// 	    })
		// 		console.log('---->init');
		// 		resolve("我是第二个接口返回的数据");
		// 	})
		// }

		// test1().then(function(){
		// 	return test2();
		// }).catch(function(error){
  //  		console.log(error);
   // });
   		var _this = this;
   		axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(res=>{
			console.log(res.data.adsInfo.slide_ads.config.slide[0].pic);
			_this.adslist = res.data.adsInfo.slide_ads.config.slide;
			console.log('---->action');

			_this.$nextTick(function(){
				new Swiper('.swiper-container', {
					spaceBetween:30,
					centeredSlides:true,
					autoplayDisableOnInteraction:false,
					loop:true,
					autoplay:2000,
					preventClicks:true,
					pagination:'.swiper-pagination',
					// 如果需要前进后退按钮
					nextButton:'.swiper-button-next',
					prevButton:'.swiper-button-prev'
			    })
				console.log('---->init');
			});
		});
    }	
}
</script>

<style lang="scss" scoped>
	div#outer{
		height:100%;
		header{
			width:100%;
			height:1.8773333333333333rem;
			padding:0 0.5973333333333334rem;
			padding-right:0;
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
				&:nth-of-type(2){
					display:block;
					float:right;
					img{
						width:42px;
						height:42px;
					}
				}
			}
		}
		div.swiper-container {
			width: 100%;
			height: 6.1866666666666665rem;
			margin-left: auto;
			margin-right: auto;
	     	div.swiper-wrapper{
			    div.swiper-slide {
					text-align: center;
					font-size: 30px;
					background: #fff;

					/* Center slide text vertically */
					display: -webkit-box;
					display: -ms-flexbox;
					display: -webkit-flex;
					display: flex;
					-webkit-box-pack: center;
					-ms-flex-pack: center;
					-webkit-justify-content: center;
					justify-content: center;
					-webkit-box-align: center;
					-ms-flex-align: center;
					-webkit-align-items: center;
					align-items: center;
			      a{
			      	img{
			      		width:100%;
			      	}
			      }
			    }
		    }
	    }
	    ul#part{
	    	display:flex;
	    	background:#fff;
	    	li{
	    		height:1.8773333333333333rem;
	    		line-height:1.8773333333333333rem;
	    		font-size:0.6826666666666666rem;
	    		color:#333;
	    		text-align:center;
				flex:1;
				border-bottom:3px #fff solid;
				a{
					display:inline-block;
					width:100%;
					box-sizing:border-box;
				}
				a.active{
					color:red;
		  			border-bottom:3px red solid;
				}
	    	}
	    }
    }
</style>
