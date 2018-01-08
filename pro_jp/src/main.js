// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './icon/iconfont.css';
!function(e,t){
  var i={
    isIPhone:/iphone/gi.test(e.navigator.appVersion),
    isAndroid:/android/gi.test(e.navigator.appVersion),
    isApp:t.cookie.indexOf("qm_device_id")!==-1
  };
  i.isAppNotWK=i.isApp&&!e.webkit,
  function(){
    var n=t.querySelector('meta[name="viewport"]'),
    r=t.querySelector('meta[name="hotcss"]'),a=e.devicePixelRatio||1,
    d=540,s=0;
    if(a=a>=3?3:a>=2?2:1,i.isAndroid&&(a=1),r){
      var o=r.getAttribute("content");
      if(o){
        var m=o.match(/initial\\-dpr=([\\d\\.]+)/);
        m&&(a=parseFloat(m[1]));
        var c=o.match(/max\\-width=([\\d\\.]+)/);
        c&&(d=parseFloat(c[1]));
        var u=o.match(/design\\-width=([\\d\\.]+)/);
        u&&(s=parseFloat(u[1]))
      }
    }
    t.documentElement.setAttribute("data-dpr",a),
    i.dpr=a,t.documentElement.setAttribute("max-width",d),
    i.maxWidth=d,s&&t.documentElement.setAttribute("design-width",s),
    i.designWidth=s;
    var p=1/a;i.isIPhone&&375==e.screen.width&&i.isAppNotWK&&(p=.48);
    var l="width=device-width, initial-scale="+p+", minimum-scale="+p+", maximum-scale="+p+", user-scalable=no";
    n?n.setAttribute("content",l):(n=t.createElement("meta"),
      n.setAttribute("name","viewport"),
      n.setAttribute("content",l),
      t.head.appendChild(n))
  }(),
  i.px2rem=function(e,t){
    return t||(t=parseInt(i.designWidth,10)),320*parseInt(e,10)/t/20
  },
  i.rem2px=function(e,t){
    return t||(t=parseInt(i.designWidth,10)),20*e*t/320
  },
  i.remAddpx=function(e,t,n){
    var r=i.rem2px(e,n),a=t*i.dpr/2;
    return r+a
  },
  i.mresize=function(){
    var n=t.documentElement.getBoundingClientRect().width||e.innerWidth;return i.maxWidth&&n/i.dpr>i.maxWidth&&(n=i.maxWidth*i.dpr),!!n&&(t.documentElement.style.fontSize=20*n/320+"px",
      void(i.callback&&i.callback()))
  },
  i.mresize(),
  e.addEventListener("resize",function(){
    clearTimeout(i.tid),
    i.tid=setTimeout(i.mresize,33)
  },!1),
  e.addEventListener("load",i.mresize,!1),
  setTimeout(function(){i.mresize()},333),
  e.hotcss=i
}(window,document);
var _paq=[],_htm=[];
var utm_follow=[106788,106787,106786,106785,106784,106783,106782,106781,106780,106779,106665,106789,106895,106894,106893,106892,106891,106890,106889,106888,106887,106886,106885,106884,106883,106882,106881,107615,107812,107813,107814,107815,107816,107817,107818,107819,107820,107821,108077,108078,108079,108080,108081,108082,108083,108084,108085,108086];
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
