(this.webpackJsonpspotistics=this.webpackJsonpspotistics||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),s=a.n(r),c=(a(15),a(4)),o=a(5),l=a(9),u=a(6),m=a(1),p=a(8),d=window.location.hash.substring(1).split("&").reduce((function(e,t){if(t){var a=t.split("=");e[a[0]]=decodeURIComponent(a[1])}return e}),{});window.location.hash="";var f=d,h=(a(16),["user-read-recently-played"]);var v=function(){return i.a.createElement("a",{className:"btn btn--loginApp-link",href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("49c1e8e2a2474e76a62429a01cc8176d","&redirect_uri=").concat("https://arthurwerle.github.io/Spotistics/","&scope=").concat(h.join("%20"),"\n                &response_type=token&show_dialog=true")},"Login to Spotify")};var y=function(e){return i.a.createElement("div",null,i.a.createElement("div",null,"Bem-vindo, ",e.user),i.a.createElement("div",null,"Aqui est\xe3o alguns dados sobre a sua conta do Spotify"))};var E=function(e){return i.a.createElement("div",{className:"track container"},i.a.createElement("img",{className:"track item",src:e.img}),i.a.createElement("label",{className:"track item"},e.name),i.a.createElement("label",{className:"track item"},e.artist))};var b=function(e){return e.items.map((function(e){return i.a.createElement(E,{name:e.name,artist:e.artists[0].name,img:e.album.images[1].url})}))};var k=function(e){return e.items.map((function(e){return i.a.createElement(E,{name:e.track.name,artist:e.track.artists[0].name,img:e.track.album.images[1].url})}))};var g=function(e){return e.items.map((function(e){return i.a.createElement(E,{artist:e.name,img:e.images[1].url})}))},w=a(7),j=function(e,t,a,n){w.ajax({url:e,type:t,beforeSend:function(e){e.setRequestHeader("Authorization","Bearer "+a)},success:function(e){n(e)},error:function(e){console.log(e)}})},N=function(e,t,a){j("https://api.spotify.com/v1/me/top/".concat(e),"GET",t,(function(e){a&&a(e)}))},S=function(e,t){j("https://api.spotify.com/v1/me","GET",e,(function(e){t&&t(e)}))},A=function(e,t){j("https://api.spotify.com/v1/me/player/recently-played","GET",e,(function(e){t&&t(e)}))},O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={user:null,token:null,topTracks:[],topArtists:[],recentlyPlayed:[]},e.getUser=S.bind(Object(m.a)(e)),e.getRecentlyPlayed=A.bind(Object(m.a)(e)),e.getUserTop=N.bind(Object(m.a)(e)),e}return Object(p.a)(t,e),Object(o.a)(t,[{key:"executeQueries",value:function(e){var t=this;S(e,(function(e){t.setState({user:e})})),A(e,(function(e){t.setState({recentlyPlayed:e.items})})),N("tracks",e,(function(e){t.setState({topTracks:e.items})})),N("artists",e,(function(e){t.setState({topArtists:e.items})}))}},{key:"componentDidMount",value:function(){var e=f.access_token;e&&(this.setState({token:e}),this.executeQueries(e))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},!this.state.token&&i.a.createElement("div",{className:"app header"},"Spotistics"),!this.state.token&&i.a.createElement(v,null),this.state.user&&i.a.createElement(y,{user:this.state.user.display_name})),i.a.createElement("body",{className:"app body"},i.a.createElement("div",{className:"main container"},i.a.createElement(k,{items:this.state.recentlyPlayed}),i.a.createElement(g,{items:this.state.topArtists}),i.a.createElement(b,{items:this.state.topTracks}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.44fe348f.chunk.js.map