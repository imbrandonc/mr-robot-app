(this.webpackJsonpmrrobot=this.webpackJsonpmrrobot||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(7),i=t.n(c),o=(t(14),t(1)),s=t(2),l=t(4),m=t(3),h=t(5),g=(t(6),function(e){var a=e.name,t=e.actor,r=(e.id,e.image);return n.a.createElement("div",{className:"tc bg-near-black dib br3 ma2 grow bw2 shadow-5 Main-card",style:{backgroundImage:"url(".concat(r,")")}},n.a.createElement("div",{className:"Main-img"}),n.a.createElement("div",{className:"Character-info"},n.a.createElement("h2",null,a),n.a.createElement("p",{className:"Actor"},t)))}),u=function(e){var a=e.robots;return n.a.createElement("div",{className:"white"},a.map((function(e,t){return n.a.createElement(g,{key:a[t].id,id:a[t].id,name:a[t].character,actor:a[t].actor,image:a[t].image})})))},d=function(e){var a=e.searchChange;return n.a.createElement("div",{className:"pa3"},n.a.createElement("input",{className:"pa3 ba b--near-black bg-dark-gray Search-characters",type:"search",placeholder:"Search Characters",onChange:a}))},p=[{id:1,character:"Elliot Alderson",image:"./images/rami.jpg",actor:"Rami Malek"},{id:2,character:"Mr. Robot",image:"./images/christian.jpg",actor:"Christian Slater"},{id:3,character:"Darlene",image:"./images/darlene.jpg",actor:"Carly Chaikin"},{id:4,character:"Tyrell Wellick",image:"./images/tyrell.jpg",actor:"Martin Wallstr\xf6m"},{id:5,character:"Angela Moss",image:"./images/angela.jpg",actor:"Portia Doubleday"},{id:6,character:"Phillip Price",image:"./images/phillip.jpg",actor:"Michael Cristofer"},{id:7,character:"Dominique DiPierro",image:"./images/dominique.jpg",actor:"Grace Gummer"},{id:8,character:"Whiterose",image:"./images/whiterose.jpg",actor:"BD Wong"},{id:9,character:"Joanna Wellick",image:"./images/joanna.jpg",actor:"Stephanie Corneliussen"},{id:10,character:"Elliot's Mother",image:"./images/elliots-mom.jpg",actor:"Vaishnavi Sharma"}],b=function(e){return n.a.createElement("div",{className:"Scroll-container"},e.children)},f=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(l.a)(this,Object(m.a)(a).call(this,e))).state={hasError:!1},t}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",null,"Ooops. Something went wrong."):this.props.children}}]),a}(r.Component),E=(t(15),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(l.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){this.setState({robots:p})}},{key:"render",value:function(){var e=this.state,a=e.robots,t=e.searchfield,r=a.filter((function(e){return e.character.toLowerCase().includes(t.toLowerCase())}));return a.length?n.a.createElement("div",{className:"tc"},n.a.createElement("h1",{className:"f1"},"Mr. Robot Characters"),n.a.createElement(d,{searchChange:this.onSearchChange}),n.a.createElement(b,null,n.a.createElement(f,null,n.a.createElement(u,{robots:r})))):n.a.createElement("h1",{className:"tc"},"Loading...")}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(16);i.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,a,t){},9:function(e,a,t){e.exports=t(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.ddac4180.chunk.js.map