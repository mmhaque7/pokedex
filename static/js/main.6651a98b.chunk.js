(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/Pokeball.f7b41b0b.png"},30:function(e,t,a){e.exports=a(62)},35:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},56:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),i=(a(35),a(6)),l=a(7),m=a(8),s=a(9),u=a(12),p=a(1),b=(a(36),a(37),a(28)),f=a.n(b),d=(a(38),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top"},r.a.createElement("a",{className:"navbar-brand col-sm-2 col-md-1 mr-0 align-items-center",href:" "},r.a.createElement("img",{src:f.a,alt:"pokeball",className:"poke-ball"}),"PokeDex")))}}]),a}(n.Component)),v=a(4),k=a(10),h=a.n(k),j=(a(56),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",imgUrl:"",gifUrl:"",pokemonIndex:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.url.split("/")[6],n="https://img.pokemondb.net/sprites/bank/normal/".concat(t,".png");this.setState({name:t,imgUrl:n,pokemonIndex:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3 col-sm-1 mb-5",id:"container"},r.a.createElement(u.b,{to:"pokemon/".concat(this.state.pokemonIndex),className:"link-map"},r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"card-header",id:"pokemon-index"},this.state.pokemonIndex),r.a.createElement("div",{className:"card-body mx-auto"},r.a.createElement("h2",{className:"pokemon-name"},this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")),r.a.createElement("img",{src:this.state.imgUrl,alt:this.state.name,className:"pokemon-img"})))))}}]),a}(n.Component));function O(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("https://pokeapi.co/api/v2/pokemon"),i=Object(v.a)(c,2),l=i[0],m=i[1],s=Object(n.useState)(""),u=Object(v.a)(s,2),p=u[0],b=u[1],f=Object(n.useState)(""),d=Object(v.a)(f,2),k=d[0],O=d[1],E=Object(n.useState)(!0),g=Object(v.a)(E,2),x=g[0],y=g[1];if(Object(n.useEffect)((function(){var e;return y(!0),h.a.get(l,{cancelToken:new h.a.CancelToken((function(t){return e=t}))}).then((function(e){y(!1),b(e.data.next),O(e.data.previous),o(e.data.results)})),function(){return e()}}),[l]),x)return"Loading Pokemon.....";return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(j,{key:e.name,name:e.name,url:e.url})})),r.a.createElement("button",{onClick:function(){m(p)}},"NextPage"),r.a.createElement("button",{onClick:function(){m(k)}},"PreviousPage"))}var E=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement(O,null)))}}]),a}(n.Component);function g(e){var t=Object(n.useState)(""),a=Object(v.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)("https://img.pokemondb.net/sprites/bank/normal/".concat(o,".png")),l=Object(v.a)(i,2),m=l[0],s=l[1],u=Object(n.useState)([]),b=Object(v.a)(u,2),f=b[0],d=b[1],k=Object(n.useState)(""),j=Object(v.a)(k,2),O=j[0],E=j[1],g=Object(n.useState)(""),x=Object(v.a)(g,2),y=x[0],N=x[1],w=Object(p.f)();return Object(n.useEffect)((function(){h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(w.pokemonIndex,"/")).then((function(e){c(e.data.name),s("https://img.pokemondb.net/sprites/bank/normal/".concat(e.data.name,".png")),d(e.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}))),E(e.data.base_experience)})),h.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(w.pokemonIndex)).then((function(e){N(e.data.flavor_text_entries.map((function(e){if("en"===e.language.name){if("firered"===e.version.name)return e.flavor_text;if("heartgold"===e.version.name)return e.flavor_text;if("omega-ruby"===e.version.name)return e.flavor_text;if("diamond"===e.version.name)return e.flavor_text;if("black-2"===e.version.name)return e.flavor_text;if("x"===e.version.name)return e.flavor_text;if("sword"===e.version.name)return e.flavor_text}})))}))}),[f,w.pokemonIndex,o,O,y]),r.a.createElement("div",null,r.a.createElement("h1",null,o),r.a.createElement("img",{src:m,alt:o}),f.map((function(e,t){return r.a.createElement("p",{key:t},e)})),r.a.createElement("h1",null),r.a.createElement("h1",null,O),r.a.createElement("p",null,y))}var x=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/",component:E}),r.a.createElement(p.a,{exact:!0,path:"/pokemon/:pokemonIndex",render:function(){return r.a.createElement(g,null)}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.6651a98b.chunk.js.map