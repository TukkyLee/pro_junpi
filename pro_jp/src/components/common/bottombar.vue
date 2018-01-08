<template>
	<footer>
		<ul>
			<a v-if="item.cid==1" v-for="(item,index) in menulist" @click.self="handleclick" :href="addr[index]" class="act menulist">
        <img :src="item.cid==1?item.act_icon:item.bg_icon">
        {{item.title}}
      </a>
      <a v-if="item.cid==''" v-for="(item,index) in menulist" @click.self="handleclick" :href="addr[index]" class="menulist">
        <img :src="item.cid==1?item.act_icon:item.bg_icon">
        {{item.title}}  
      </a> 
		</ul>
	</footer>
</template>

<script>
import axios from 'axios'
export default {

  name: 'bottombar',

  data () {
    return {
      menulist:null,
      addr:['#/home/special','#/brand','#/type','#/cart','#/mine']
    }
  },
  mounted(){
  	axios.get('/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe').then(res=>{
  		console.log(res.data.menuInfo.app_menu.menulist);
      this.menulist = res.data.menuInfo.app_menu.menulist;
  	})
  },
  methods:{
    handleclick(el){
      console.log(el.target);
      // var imgs = document.getElementsByTagName('img');
      var as = document.getElementsByClassName('menulist');
      console.log(as.length);
      for(var i=0; i<as.length;i++){
        var a = i;
        as[i].index = a;
        as[i].firstChild.setAttribute('src',this.menulist[i].bg_icon);
        as[i].setAttribute('class','menulist');
      }
      var index = el.target.index;
      console.log('---->'+el.target.index);
      el.target.firstChild.setAttribute('src',this.menulist[index].act_icon);
      el.target.setAttribute('class','act menulist');
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
    height:2.1333333333333333rem;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    background:#fff;
  ul{
    height:2.1333333333333333rem;
    display:flex;
    a{
      display:block;
      flex:1;
      height:2.1333333333333333rem;
      text-align:center;
      z-index:1; 
      img{
        display:block;
        width:1.024rem;
        height:1.024rem;
        margin:0 auto;
        margin-top:0.21333333333333335rem;
        margin-bottom:0.21333333333333335rem;
      }
    }
    a.act{
      color:red;
    }
  }
}
</style>