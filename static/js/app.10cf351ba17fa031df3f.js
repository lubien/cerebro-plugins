webpackJsonp([1],{104:function(t,e){},105:function(t,e){},106:function(t,e){},107:function(t,e){},108:function(t,e){},206:function(t,e,n){n(108);var a=n(66)(n(75),n(208),null,null);t.exports=a.exports},207:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},208:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"hero is-primary is-small"},[n("div",{staticClass:"hero-head"},[n("header",{staticClass:"nav"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"nav-right nav-menu"},[n("router-link",{staticClass:"nav-item is-active",attrs:{to:{name:"Home"}}},[t._v("\n              Home\n            ")]),t._v(" "),t._m(2)],1)])])]),t._v(" "),n("div",{staticClass:"hero-body"},[n("div",{staticClass:"container"},[n("div",[n("div",{staticClass:"field has-addons"},[n("p",{staticClass:"control is-expanded"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:"Find a plugins. Esc to clear this input."},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"esc",27))return null;t.resetQuery(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}})])])])])])]),t._v(" "),n("div",{staticClass:"container search-container"},t._l(t.plugins,function(e){return n("article",{staticClass:"media"},[n("div",{staticClass:"media-content"},[n("div",{staticClass:"content"},[n("p",[n("strong",[n("a",{attrs:{href:"https://www.npmjs.com/package/"+e.name,target:"_blank"}},[t._v("\n                "+t._s(e.name)+"\n              ")])]),t._v(" "),n("small",[n("a",{attrs:{href:"https://www.npmjs.com/~"+e.author.username,target:"_blank"}},[t._v("\n                @"+t._s(e.author.username)+"\n              ")])]),t._v(" "),n("small",[t._v(t._s(e.version))]),t._v(" "),n("br"),t._v("\n            "+t._s(e.description)+"\n          ")])]),t._v(" "),n("nav",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[e.repo?n("a",{staticClass:"level-item",attrs:{href:e.repo,target:"_blank"}},[t._m(3,!0),t._v(" Repository\n            ")]):t._e(),t._v(" "),e.homepage?n("a",{staticClass:"level-item",attrs:{href:e.homepage,target:"_blank"}},[t._m(4,!0),t._v(" Homepage\n            ")]):t._e()])])])])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-left"},[n("a",{staticClass:"nav-item"},[t._v("\n              Cerebro"),n("b",[t._v("Plugins")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"nav-toggle"},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"nav-item"},[n("a",{staticClass:"button is-primary is-inverted",attrs:{href:"https://github.com/lubien/cerebro-plugins",target:"_blank"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-github"})]),t._v(" "),n("span",[t._v("Contribute")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-github"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"icon"},[n("i",{staticClass:"fa fa-globe"})])}]}},211:function(t,e){},69:function(t,e,n){"use strict";var a=n(38),s=n(209),r=n(206),i=n.n(r);a.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"Home",component:i.a}]})},70:function(t,e,n){n(107);var a=n(66)(n(74),n(207),null,null);t.exports=a.exports},73:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(38),s=n(70),r=n.n(s),i=n(69),o=n(71),c=n.n(o),u=n(72),l=n.n(u);a.a.use(c.a),a.a.use(l.a);var v=new c.a;a.a.config.productionTip=!1,new a.a({el:"#app",router:i.a,nprogress:v,render:function(t){return t(r.a)}})},74:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(104),s=(n.n(a),n(106)),r=(n.n(s),n(105));n.n(r);e.default={name:"App"}},75:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(77),s=n.n(a),r=n(205),i=(n.n(r),function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}}),o=function(t){return function(e){return e.map(t)}},c=function(t){return function(e){return e.sort(t)}},u=function t(e){var n=s()(e),a=n[0],r=n.slice(1);return function(e){return r.length?t(r)(e[a]):e[a]}},l=function(t){return function(e,a){var s=n.i(r.compareTwoStrings)(t,e.name);return n.i(r.compareTwoStrings)(t,a.name)-s}},v=c(function(){return Math.random()-Math.random()});e.default={name:"Home",data:function(){return{query:"",packages:[]}},computed:{plugins:function(){return c(l(this.query))(this.packages)}},created:function(){var t=this,e={from:0,size:500,text:"keywords:cerebro-plugin "+this.query};this.$http.get("https://registry.npmjs.com/-/v1/search",{params:e}).then(i(u(["data","objects"]),o(function(t){var e=t.package;return{name:e.name,version:e.version,description:e.description,homepage:e.links.homepage,repo:e.links.repository,author:e.author}}),v,function(e){t.packages=e}))},methods:{resetQuery:function(){this.query=""}}}}},[73]);
//# sourceMappingURL=app.10cf351ba17fa031df3f.js.map