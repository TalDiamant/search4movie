(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(48)},35:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(3),c=n.n(i),o=(n(35),n(5)),s=n(6),l=n(9),u=n(7),h=n(10),m=n(15),p=n(8),v=n(13),d=n.n(v),f=n(19),b=n(14),O=n(26),g=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={movieName:""},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({movieName:this.props.m.Title})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Movie"},r.a.createElement("input",{className:"movieTitle",name:"movieName",type:"text",value:this.state.movieName,onChange:this.handleChangeTitle.bind(this),onBlur:this.ChangeTitle.bind(this)}),r.a.createElement("br",null),r.a.createElement("img",{src:this.props.m.Poster,alt:""}))}},{key:"handleChangeTitle",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"ChangeTitle",value:function(){this.props.ChangeTitle(this.state.movieName)}}]),t}(a.Component),E=Object(p.b)(null,function(e){return{ChangeTitle:function(t){return e(function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=[],n({type:"TITLE_CHANGE",data:e}),a.push(e);case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(g),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"alert alert-info",role:"alert"},this.props.msg),r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"OMDb API"),r.a.createElement("h3",null,"Search for your movie:"),r.a.createElement(b.c,null,r.a.createElement(b.b,{type:"text",name:"searchedMovie",onChange:this.handleChange.bind(this)}),r.a.createElement(b.d,{addonType:"append"},r.a.createElement(b.a,{color:"info",type:"button",onClick:this.SearchMovie.bind(this)},r.a.createElement(O.a,{icon:"search"})),r.a.createElement("br",null)))),r.a.createElement("div",{className:"allMovies"},this.props.movies.map(function(e){return r.a.createElement(E,{key:e.imdbID,m:e})})))}},{key:"handleChange",value:function(e){this.setState(Object(m.a)({},e.target.name,e.target.value))}},{key:"SearchMovie",value:function(){this.props.SearchMovie(this.state.searchedMovie)}}]),t}(a.Component),y=Object(p.b)(function(e){return{movies:e.movies,msg:e.msg}},function(e){return{SearchMovie:function(t){return e((n=t,function(){var e=Object(f.a)(d.a.mark(function e(t){var a,r;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"START_SEARCHING",data:null}),e.next=3,fetch("http://www.omdbapi.com/?s=".concat(n,"&apikey=fe9450d0"));case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,t({type:"MOVIES_FOUND",data:r.Search}),t({type:"FINISH_DOWNLOADING",data:null});case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()));var n}}})(j),N=n(12),w=n(28);N.b.add(w.a);var C=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(46);var k={movies:[],msg:"Welcome!"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,n={};switch(t.type){case"START_SEARCHING":return n=Object.assign({},e,{msg:"start searching..."});case"MOVIES_FOUND":return n=Object.assign({},e,{movies:t.data});case"FINISH_DOWNLOADING":return n=Object.assign({},e,{msg:"Movies found"});case"TITLE_CHANGE":return(n=Object.assign({},e,{msg:"title changed"})).date=Date.now(),n;default:return e}},T=n(11),I=n(29),M=Object(T.c)(S,Object(T.a)(I.a));c.a.render(r.a.createElement(p.a,{store:M},r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.d76921d3.chunk.js.map