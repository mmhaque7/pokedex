(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/Pokeball.f7b41b0b.png"},30:function(e,t,n){e.exports=n(62)},35:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(27),r=n.n(o),l=(n(35),n(6)),i=n(7),m=n(8),s=n(9),u=n(11),p=n(1),b=(n(36),n(37),n(28)),d=n.n(b),f=(n(38),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},c.a.createElement("a",{className:"navbar-brand col-sm-2 col-md-1 mr-0 align-items-center",href:" "},c.a.createElement("img",{src:d.a,alt:"pokeball",className:"poke-ball"}),"PokeDex")))}}]),n}(a.Component)),k=n(5),h=n(12),v=n.n(h),j=(n(56),function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",imgUrl:"",gifUrl:"",pokemonIndex:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,n=e.url.split("/")[6],a="https://img.pokemondb.net/sprites/bank/normal/".concat(t,".png");this.setState({name:t,imgUrl:a,pokemonIndex:n})}},{key:"render",value:function(){return c.a.createElement("div",{className:"col-md-3 col-sm-1 mb-5",id:"container"},c.a.createElement(u.b,{to:"pokemon/".concat(this.state.pokemonIndex),className:"link-map"},c.a.createElement("div",{className:"card"},c.a.createElement("h2",{className:"card-header",id:"pokemon-index"},this.state.pokemonIndex),c.a.createElement("div",{className:"card-body mx-auto"},c.a.createElement("h2",{className:"pokemon-name"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),c.a.createElement("img",{src:this.state.imgUrl,alt:this.state.name,className:"pokemon-img"})))))}}]),n}(a.Component));function E(){var e=Object(a.useState)([]),t=Object(k.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("https://pokeapi.co/api/v2/pokemon"),l=Object(k.a)(r,2),i=l[0],m=l[1],s=Object(a.useState)(""),u=Object(k.a)(s,2),p=u[0],b=u[1],d=Object(a.useState)(""),f=Object(k.a)(d,2),h=f[0],E=f[1],O=Object(a.useState)(!0),g=Object(k.a)(O,2),x=g[0],N=g[1];if(Object(a.useEffect)((function(){var e;return N(!0),v.a.get(i,{cancelToken:new v.a.CancelToken((function(t){return e=t}))}).then((function(e){N(!1),b(e.data.next),E(e.data.previous),o(e.data.results)})),function(){return e()}}),[i]),x)return"Loading Pokemon.....";return c.a.createElement("div",{className:"row"},n.map((function(e){return c.a.createElement(j,{key:e.name,name:e.name,url:e.url})})),c.a.createElement("button",{onClick:function(){m(p)}},"NextPage"),c.a.createElement("button",{onClick:function(){m(h)}},"PreviousPage"))}var O=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement(E,null)))}}]),n}(a.Component);function g(e){var t=Object(a.useState)(""),n=Object(k.a)(t,2),o=n[0],r=n[1],l=Object(a.useState)("https://img.pokemondb.net/sprites/bank/normal/".concat(o,".png")),i=Object(k.a)(l,2),m=i[0],s=i[1],u=Object(p.f)();return Object(a.useEffect)((function(){v.a.get("https://pokeapi.co/api/v2/pokemon/".concat(u.pokemonIndex,"/")).then((function(e){r(e.data.name),s("https://img.pokemondb.net/sprites/bank/normal/".concat(e.data.name,".png"))}))}),[u.pokemonIndex,o]),c.a.createElement("div",null,c.a.createElement("h1",null,o),c.a.createElement("img",{src:m,alt:o}))}var x=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(f,null),c.a.createElement("div",{className:"container"},c.a.createElement(p.c,null,c.a.createElement(p.a,{exact:!0,path:"/",component:O}),c.a.createElement(p.a,{exact:!0,path:"/pokemon/:pokemonIndex",render:function(){return c.a.createElement(g,null)}})))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.05f3ff11.chunk.js.map