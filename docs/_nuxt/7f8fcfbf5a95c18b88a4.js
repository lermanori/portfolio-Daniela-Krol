(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{182:function(t,e,n){var content=n(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("588a9998",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("d2680fb0",content,!0,{sourceMap:!1})},184:function(t,e,n){"use strict";var c=n(1).a.extend({props:["name"]}),r=n(20),component=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"text-6xl lg:text-7xl font-vermin text-white -mt-16"},[this._v(this._s(this.name))])}),[],!1,null,"91687b78",null);e.a=component.exports},185:function(t,e,n){"use strict";var c=n(182);n.n(c).a},186:function(t,e,n){(e=n(46)(!1)).push([t.i,".a[data-v-491999c0]{fill:none;stroke:#fff;stroke-width:5px}",""]),t.exports=e},187:function(t,e,n){"use strict";n(33);var c=n(5),r=n(1),l=r.a.extend({props:["color","text"]}),o=n(20),m=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:["leading-none","w-full","font-vermin","text-"+t.color+"-400","px-4","py-1","border-2","border-"+t.color+"-400"],on:{click:function(e){return t.$emit("click")}}},[t._v("\n    "+t._s(t.text)+"\n")])}),[],!1,null,"01d137e8",null).exports,f=n(34),d=n.n(f),x=r.a.extend({data:function(){return{clicked:!1,contactName:"",contactMail:"",contactPhone:"",contactMessage:""}},components:{myBtn:m},methods:{send_mail:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var body;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:3000/users/dani_krol/contact",body={name:t.contactName,mail:t.contactMail,phone:t.contactPhone,body:t.contactMessage},e.next=4,d.a.post("http://localhost:3000/users/dani_krol/contact",body);case 4:e.sent,t.clicked=!1;case 6:case"end":return e.stop()}}),e)})))()}}}),v=(n(185),Object(o.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["absolute","top-0","right-0",t.clicked?"w-3/5":"","bg-black","z-20"]},[t.clicked?t._e():n("my-btn",{staticClass:"text-xl lg:text-4xl xl:text-5xl",attrs:{color:"green",text:"Hey! Lets Talk :)"},on:{click:function(e){t.clicked=!0}}}),t._v(" "),t.clicked?n("div",{staticClass:"relative border-2 border-green-400 pb-6"},[n("div",{staticClass:"absolute top-0 ml-2 mt-2 h-6 w-6 cursor-pointer",on:{click:function(e){t.clicked=!1}}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 34.477 33.593"}},[n("g",{attrs:{transform:"translate(-3482.761 -1101.703)"}},[n("line",{staticClass:"a",attrs:{x2:"31",y2:"30",transform:"translate(3484.5 1103.5)"}}),t._v(" "),n("line",{staticClass:"a",attrs:{x1:"31",y2:"30",transform:"translate(3484.5 1103.5)"}})])])]),t._v(" "),n("h1",{staticClass:"text-white text-4xl font-agency text-center my-2"},[t._v("Hey! Lets Talk :)")]),t._v(" "),n("div",{staticClass:"relative left-0 flex text-white justify-center"},[n("div",{staticClass:"w-1/2 flex flex-col items-base mx-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactName,expression:"contactName"}],staticClass:"text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Name"},domProps:{value:t.contactName},on:{input:function(e){e.target.composing||(t.contactName=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMail,expression:"contactMail"}],staticClass:"text-lg w-full mx-auto mb-4 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Mail"},domProps:{value:t.contactMail},on:{input:function(e){e.target.composing||(t.contactMail=e.target.value)}}}),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactPhone,expression:"contactPhone"}],staticClass:"text-lg w-full mx-auto mb-2 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Phone (if you want)"},domProps:{value:t.contactPhone},on:{input:function(e){e.target.composing||(t.contactPhone=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-1/2 flex flex-col items-base mx-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.contactMessage,expression:"contactMessage"}],staticClass:"text-lg w-full h-full mx-auto mb-2 mt-3 p-2 font-agency text-black",attrs:{placeholder:"Message"},domProps:{value:t.contactMessage},on:{input:function(e){e.target.composing||(t.contactMessage=e.target.value)}}})])]),t._v(" "),n("div",{staticClass:"flex justify-end mr-4"},[n("button",{staticClass:"bg-green-400 text-xl text-white px-3 py-1",on:{click:t.send_mail}},[t._v("send")])])]):t._e()],1)}),[],!1,null,"491999c0",null));e.a=v.exports},188:function(t,e,n){"use strict";var c=n(1).a.extend({props:["bio","home"]}),r=n(20),component=Object(r.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["text-green-400",1==this.home?"text-3xl":"text-2xl",1==this.home?"lg:text-5xl":"lg:text-4xl","text-center","font-agency"],style:{textAlign:"center"},domProps:{innerHTML:this._s(this.bio)}})}),[],!1,null,"0f39f12d",null);e.a=component.exports},189:function(t,e,n){"use strict";var c=n(1).a.extend({}),r=n(20),component=Object(r.a)(c,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-2xl font-vermin text-green-400"},[e("div",[this._v("scroll")]),this._v(" "),e("div",{staticClass:"text-white"},[this._v("|")])])}],!1,null,"a9df601e",null);e.a=component.exports},190:function(t,e,n){"use strict";var c=n(183);n.n(c).a},191:function(t,e,n){(e=n(46)(!1)).push([t.i,".a[data-v-4c95e4ba]{fill:none;stroke:#fff;stroke-width:5px}",""]),t.exports=e},193:function(t,e,n){"use strict";var c=n(1).a.extend({components:{}}),r=(n(190),n(20)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0"},[n("svg",{staticClass:"mx-4 my-2 cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 34.477 33.593"},on:{click:function(e){return t.$router.go(-1)}}},[n("g",{attrs:{transform:"translate(-3482.761 -1101.703)"}},[n("line",{staticClass:"a",attrs:{x2:"31",y2:"30",transform:"translate(3484.5 1103.5)"}}),t._v(" "),n("line",{staticClass:"a",attrs:{x1:"31",y2:"30",transform:"translate(3484.5 1103.5)"}})])])])}),[],!1,null,"4c95e4ba",null);e.a=component.exports},194:function(t,e,n){"use strict";var c=n(1),title=n(184),r=n(189),l=c.a.extend({props:["name"],data:function(){return{scrolled:!1}},components:{titleApp:title.a,scrollApp:r.a},mounted:function(){var t=this;window.addEventListener("scroll",(function(e){var n=e.target.scrollingElement.scrollTop;console.log(n),t.scrolled=n>50}))}}),o=n(20),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"h-screen"},[e("div",{staticClass:"h-full flex justify-center items-end"},[e("div",{staticClass:"text-center flex flex-col justify-between",staticStyle:{height:"60%"}},[e("titleApp",{attrs:{name:this.name}}),this._v(" "),this.scrolled?this._e():e("scrollApp")],1)])])}),[],!1,null,"8c9616b6",null);e.a=component.exports},197:function(t,e,n){"use strict";n.r(e);n(33);var c=n(5),r=n(1),l=n(34),o=n.n(l),m=n(194),f=n(188),title=n(184),d=r.a.extend({props:["gridItems"]}),x=n(20),v=Object(x.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap justify-center m-2"},[t._l(t.gridItems,(function(img){return[""!==img?n("img",{key:img,staticClass:"w-full p-2 md:w-1/2",attrs:{src:img,alt:""}}):t._e()]}))],2)}),[],!1,null,"252fd680",null).exports,h=r.a.extend({props:["name","bio","gridItems"],components:{categoryOpenSection:m.a,bioApp:f.a,titleApp:title.a,imgGrid:v}}),_=Object(x.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-black"},[e("div",{staticClass:"text-center"},[e("titleApp",{staticClass:"pt-12",attrs:{name:this.name}}),this._v(" "),e("bioApp",{staticClass:"py-4",attrs:{bio:this.bio}}),this._v(" "),e("imgGrid",{attrs:{gridItems:this.gridItems}})],1)])}),[],!1,null,"68ce029b",null).exports,w=n(187),k=n(193),y=r.a.extend({asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,r,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,c="".concat("http://localhost:3000","/users/dani_krol/tag/").concat(n.id,"/"),e.next=4,o.a.get(c);case 4:return r=e.sent,l=r.data,e.abrupt("return",{project:l});case 7:case"end":return e.stop()}}),e)})))()},components:{appProject:_,absoluteContactButton:w.a,absoluteBackButton:k.a}}),C=Object(x.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bg-black min-h-screen pb-24"},[e("absoluteBackButton"),this._v(" "),e("appProject",{attrs:{name:this.project.title,bio:this.project.desc,"grid-items":this.project.keywords}})],1)}),[],!1,null,"4207a749",null);e.default=C.exports}}]);