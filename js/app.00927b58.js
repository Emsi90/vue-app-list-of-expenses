(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],d=0,m=[];d<s.length;d++)i=s[d],r[i]&&m.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/<vue-app-list-of-expenses>/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-between align-items-center"},[a("h1",{staticClass:"text-center text-sm-left"},[t._v("List of expenses")]),a("app-exchange")],1),a("app-form"),a("app-table",{attrs:{data:t.data}})],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"mt-4"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"transactionTitle"}},[t._v("Title of transaction")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.title,expression:"data.title"}],staticClass:"form-control",attrs:{type:"text",id:"transactionTitle","aria-describedby":"Title of transaction",placeholder:"Title of transaction"},domProps:{value:t.data.title},on:{input:[function(e){e.target.composing||t.$set(t.data,"title",e.target.value)},t.validateTitle]}}),t.validateTitleError?a("small",{staticClass:"form-text text-danger",attrs:{id:"transactionTitleHelp"}},[t._v("Your title is too short! You need at least 5 characters.")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"amount"}},[t._v("Amount (in PLN)")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.data.amount,expression:"data.amount",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",id:"amount","aria-describedby":"Amount (in PLN)",placeholder:"Amount (in PLN)"},domProps:{value:t.data.amount},on:{input:[function(e){e.target.composing||t.$set(t.data,"amount",t._n(e.target.value))},t.validateDecimal],blur:function(e){return t.$forceUpdate()}}}),t.validateAmountError?a("small",{staticClass:"form-text text-danger",attrs:{id:"amountHelp"}},[t._v("Accept only two digits after the decimal.")]):t._e()]),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:t.validateTitleError||t.validateAmountError},on:{click:function(e){return e.preventDefault(),t.sendData(e)}}},[t._v("Add")])])},s=[],l=(a("28a5"),a("6762"),a("2fdb"),{data:function(){return{data:{title:"",amount:0},validateTitleError:!1,validateAmountError:!1}},methods:{validateTitle:function(t){var e=t.target.value.length;this.validateTitleError=e<5},validateDecimal:function(t){var e=t.target.value,a=(t.target.value.length,[]);e.includes(".")?(a=e.split("."),a[1].length>2?this.validateAmountError=!0:this.validateAmountError=!1):this.validateAmountError=!1},sendData:function(){""==this.data.title&&0==this.data.amount||void 0==this.data.title?(this.validateTitleError=!0,this.validateAmountError=!0):(this.$store.dispatch("setData",this.data),this.data={})}}}),c=l,u=a("2877"),d=Object(u["a"])(c,i,s,!1,null,null,null),m=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.data.length>0?a("table",{staticClass:"table table-responsive-sm table-striped mt-4"},[t._m(0),a("tbody",t._l(t.data,function(e,n){return a("tr",{key:n},[a("th",{attrs:{scope:"row"}},[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.amount))]),a("td",[t._v(t._s(t.currency(e.amount)))]),a("td",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.deleteItem(n)}}},[t._v("Delete")])])])}),0),a("tfoot",[a("tr",{staticClass:"bg-info"},[a("td",{staticClass:"text-white text-right",attrs:{colspan:"4"}},[a("b",[t._v("Sum:")]),t._v(" "+t._s(t.tableSum)+" PLN ("+t._s(t.tableSumMultipleByExchange)+" EUR)")])])])]):t._e()},h=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{staticStyle:{width:"40%"}},[t._v("Title")]),a("th",{staticStyle:{width:"20%"}},[t._v("(PLN)")]),a("th",{staticStyle:{width:"20%"}},[t._v("(EUR)")]),a("th",{staticStyle:{width:"20%"}},[t._v("Options")])])])}],p={data:function(){return{}},props:["data"],computed:{exchange:function(){return this.$store.getters.exchange},tableSum:function(){return this.data.reduce(function(t,e){return t+e.amount},0).toFixed(2)},tableSumMultipleByExchange:function(){return(this.data.reduce(function(t,e){return t+e.amount},0)*this.exchange).toFixed(2)}},methods:{deleteItem:function(t){this.$store.dispatch("removeItem",t)},currency:function(t){return(t*this.exchange).toFixed(2)}}},v=p,g=(a("76a5"),Object(u["a"])(v,f,h,!1,null,null,null)),b=g.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card mt-3"},[a("div",{staticClass:"card-body"},[a("b",[t._v("Sum:")]),t._v(" 430 PLN (100 EUR)")])])}],E={},y=E,C=Object(u["a"])(y,x,_,!1,null,null,null),w=C.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.showForm?a("div",{staticClass:"d-flex flex-column align-items-start form-box"},[a("div",{staticClass:"form-cont d-flex align-items-center"},[a("div",{staticClass:"form-group mb-0 form-group-cont"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.exchangeValue,expression:"exchangeValue",modifiers:{number:!0}}],staticClass:"form-control form-control-sm",attrs:{type:"number",id:"exchange","aria-describedby":"exchangeHelp",placeholder:"Enter exchange-rate"},domProps:{value:t.exchangeValue},on:{input:[function(e){e.target.composing||(t.exchangeValue=t._n(e.target.value))},t.validateDecimal],blur:function(e){return t.$forceUpdate()}}})]),a("button",{staticClass:"btn btn-success btn-sm exch-btn ml-2 mr-1",attrs:{disabled:t.validateAmountError},on:{click:t.saveExchange}},[t._v("Save")]),a("button",{staticClass:"btn btn-danger btn-sm exch-btn",on:{click:t.closeForm}},[t._v("Close")])]),t.validateAmountError?a("small",{staticClass:"form-text text-danger amount-error-text",attrs:{id:"amountHelp"}},[t._v("Accept only two digits after the decimal.")]):t._e()]):a("div",{staticClass:"d-flex align-items-center"},[a("p",{staticClass:"exchange-text mb-0 mr-2"},[t._v("1EUR = \n      "),t.loaderRate?a("span",[a("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v(t._s(t.exchangeVal))])])]):a("span",[t._v("\n        "+t._s(t.exchangeVal)+" PLN\n      ")])]),a("button",{staticClass:"btn btn-primary btn-sm exch-btn",on:{click:function(e){t.showForm=!t.showForm}}},[t._v("Edit")])])])},T=[],A=a("5118"),P={data:function(){return{exchangeValue:null,showForm:!1,validateAmountError:!1,loaderRate:!0}},computed:{exchangeVal:function(){var t=this;return 1===this.$store.getters.exchange?(this.loaderRate=!0,Object(A["setTimeout"])(function(){t.loaderRate=!1},5e3)):(this.loaderRate=!1,this.exchangeValue=this.$store.getters.exchange.toFixed(2)),this.$store.getters.exchange.toFixed(2)}},methods:{saveExchange:function(){this.showForm=!1,this.$store.dispatch("updateExchange",this.exchangeValue)},validateDecimal:function(t){var e=t.target.value,a=(t.target.value.length,[]);e.includes(".")&&(a=e.split("."),a[1].length>2?this.validateAmountError=!0:this.validateAmountError=!1)},closeForm:function(){this.showForm=!1,this.validateAmountError=!1,this.exchangeValue=this.$store.getters.exchange}}},S=P,j=(a("a328"),Object(u["a"])(S,$,T,!1,null,"14449bf7",null)),O=j.exports,F={components:{appForm:m,appTable:b,appTotal:w,appExchange:O},computed:{data:function(){return this.$store.getters.data}},mounted:function(){this.$store.dispatch("fetchExchange")}},D=F,N=(a("034f"),Object(u["a"])(D,r,o,!1,null,null,null)),V=N.exports,k=a("8c4f");n["a"].use(k["a"]);var L=new k["a"]({mode:"history",base:"/<vue-app-list-of-expenses>/",routes:[]}),R=a("2f62");n["a"].use(R["a"]);var I=new R["a"].Store({state:{data:[],exchange:1},getters:{data:function(t){return t.data},exchange:function(t){return t.exchange}},mutations:{updateData:function(t,e){t.data.push(e)},removeItem:function(t,e){t.data.splice(e,1)},updateExchange:function(t,e){t.exchange=e}},actions:{setData:function(t,e){var a=t.commit;a("updateData",e)},removeItem:function(t,e){var a=t.commit;a("removeItem",e)},updateExchange:function(t,e){var a=t.commit;a("updateExchange",e)},fetchExchange:function(t){var e=t.commit;fetch("https://api.ratesapi.io/api/latest").then(function(t){return t.json()}).then(function(t){setTimeout(function(){e("updateExchange",t.rates.PLN)},1e3)}).catch(function(t){return console.log(t)})}}});n["a"].config.productionTip=!1,new n["a"]({router:L,store:I,render:function(t){return t(V)}}).$mount("#app")},"64a9":function(t,e,a){},"76a5":function(t,e,a){"use strict";var n=a("dedf"),r=a.n(n);r.a},a328:function(t,e,a){"use strict";var n=a("eeeb"),r=a.n(n);r.a},dedf:function(t,e,a){},eeeb:function(t,e,a){}});
//# sourceMappingURL=app.00927b58.js.map