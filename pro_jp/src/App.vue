<template>
  <div id="app">
    <router-view></router-view>
    <!-- <div></div> -->
    <bottombar></bottombar>
  </div>
</template>

<script>
import Bottombar from '@/components/common/bottombar';
import Home from '@/components/home';
export default {
  name: 'app',
  components:{
    'bottombar':Bottombar,
    'home':Home
  }
}
</script>

<style lang="scss">
*{
  margin:0;
  padding:0;
}
body,html{
  height:100%;
  position: relative;
  font-size:12px; 
}
body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color:#000;
    margin: 0;
    padding: 0;
}
ul,ol{
  list-style:none;
}
a{
  color:#333;
  text-decoration:none;
}
#app{
  height:100%;
}
// div{
//   height:1000px;
// }
</style>
