(this.webpackJsonpporten=this.webpackJsonpporten||[]).push([[0],{140:function(e,t,s){},145:function(e,t,s){},146:function(e,t,s){},441:function(e,t,s){},442:function(e,t,s){},443:function(e,t,s){},444:function(e,t,s){},445:function(e,t,s){},446:function(e,t,s){},447:function(e,t,s){},448:function(e,t,s){},449:function(e,t,s){"use strict";s.r(t);var c=s(0),i=s(2),n=s.n(i),a=s(22),r=s.n(a),o=(s(140),s(32)),l=s(21),j=s(4),d=function(){return Object(c.jsx)("button",{type:"submit",className:"btn btn-success w-25 mt-4",children:"Buy"})},m=function(){return Object(c.jsx)("div",{className:"alert alert-dark",role:"alert",children:"Your basket is empty.."})},u="/",b="/goods",h="/account",O="/basket",x=function(){return Object(c.jsx)(l.b,{to:u,className:"navbar__logo",children:"porten"})},p=n.a.createContext(),g=function(e){var t=e.children,s=e.value;return Object(c.jsx)(p.Provider,{value:s,children:t})},_=(s(145),function(){var e=Object(i.useContext)(p),t=Object(o.a)(e,2),s=t[0],n=(t[1],"menu__item");return s.length&&(n+=" not-empty"),Object(c.jsxs)("ul",{className:"navbar__menu menu",children:[Object(c.jsx)("li",{className:"menu__item",children:Object(c.jsx)(l.b,{to:b,children:"\u0422\u043e\u0432\u0430\u0440\u044b"})}),Object(c.jsx)("li",{className:"menu__item",children:Object(c.jsx)(l.b,{to:h,children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(c.jsx)("li",{className:n,children:Object(c.jsx)(l.b,{to:O,children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})})]})}),f=(s(146),function(){return Object(c.jsx)("nav",{className:"header__navbar navbar",id:"navbar",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(x,{}),Object(c.jsx)(_,{})]})})}),v=s(82),N=(s(147),[{id:Date.now()+10*Math.random(),category:"watches",name:"Jacques Lemans",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"http://pngimg.com/uploads/watches/watches_PNG9888.png"},{id:Date.now()+100*Math.random(),category:"watches",name:"Jacques Lemans",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"http://pngimg.com/uploads/watches/watches_PNG9888.png"},{id:Date.now()+12*Math.random(),category:"watches",name:"Jacques Lemans",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"http://pngimg.com/uploads/watches/watches_PNG9888.png"},{id:Date.now()+13*Math.random(),category:"suits",name:"SMM",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2311551344_w700_h500_korichnevyj-muzhskoj-kostyum.jpg"},{id:Date.now()+14*Math.random(),category:"suits",name:"SMM",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2311551344_w700_h500_korichnevyj-muzhskoj-kostyum.jpg"},{id:Date.now()+15*Math.random(),category:"suits",name:"SMM",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2311551344_w700_h500_korichnevyj-muzhskoj-kostyum.jpg"},{id:Date.now()+20*Math.random(),category:"shoes",name:"Rosso Avangard",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2543577563_w700_h500_lofery-muzhskie-kozhanye.jpg"},{id:Date.now()+30*Math.random(),category:"shoes",name:"Rosso Avangard",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2543577563_w700_h500_lofery-muzhskie-kozhanye.jpg"},{id:Date.now()+2*Math.random(),category:"shoes",name:"Rosso Avangard",desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, id.",img_url:"https://images.ua.prom.st/2543577563_w700_h500_lofery-muzhskie-kozhanye.jpg"}]),w=function(e){var t=e.name;return Object(c.jsx)("li",{className:"list-group-item",children:t})},y=(s(441),function(e){var t,s=e.storedProducts,i=[],n=Object(v.a)(s);try{for(n.s();!(t=n.n()).done;){var a,r=t.value,o=Object(v.a)(N);try{for(o.s();!(a=o.n()).done;){var l=a.value;r===l.id&&i.push(l)}}catch(j){o.e(j)}finally{o.f()}}}catch(j){n.e(j)}finally{n.f()}return Object(c.jsx)("ul",{className:"list-group basket-list",children:i.map((function(e){return Object(c.jsx)(w,{name:e.name},e.id*Math.random())}))})}),k=(s(442),function(e){var t=e.storedProducts;return Object(c.jsxs)("div",{className:"basket",children:[Object(c.jsx)(f,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h1",{children:"Basket"}),t.length?Object(c.jsx)(y,{storedProducts:t}):Object(c.jsx)(m,{}),t.length?Object(c.jsx)(d,{}):null]})]})}),L=s(135),M=function(e){var t=e.name,s=e.desc,n=e.img,a=e.id,r=Object(i.useContext)(p),l=Object(o.a)(r,2),j=(l[0],l[1]);return Object(c.jsx)("div",{className:"col-md-4 mr-auto",children:Object(c.jsxs)("div",{className:"card mb-4",children:[Object(c.jsx)("img",{src:n,className:"card-img-top",alt:"..."}),Object(c.jsxs)("div",{className:"card-body",children:[Object(c.jsx)("h5",{className:"card-title",children:t}),Object(c.jsx)("p",{children:s}),Object(c.jsx)("button",{className:"btn btn-outline-light btn-sm mt-3",onClick:function(){return j((function(e){return[].concat(Object(L.a)(e),[a])}))},children:"Add to cart"})]})]})})},A=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"Goods"}),Object(c.jsx)("div",{className:"jumbotron",children:Object(c.jsx)("div",{className:"row justify-content-around",children:N.map((function(e){return Object(c.jsx)(M,{name:e.name,desc:e.desc,img:e.img_url,id:e.id},e.id)}))})})]})},P=function(){return Object(c.jsx)("a",{href:"#navbar",className:"to-top-btn",children:Object(c.jsx)("span",{children:"\u2191"})})},S=(s(443),function(e){var t=e.isScrolled;return function(e){var t=function(){window.scrollY>300?e(!0):e(!1)};Object(i.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}))}(e.setIsScrolled),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(f,{}),Object(c.jsx)("section",{className:"goods container",children:Object(c.jsx)(A,{})}),t?Object(c.jsx)(P,{}):null]})}),D=(s(444),function(){return Object(c.jsx)("div",{className:"brands",children:Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{className:"brands__header",children:"\u043d\u0430\u0448\u0438 \u0431\u0440\u0435\u043d\u0434\u044b"}),Object(c.jsxs)("ul",{className:"brands__list list",children:[Object(c.jsx)("li",{className:"list__item",children:Object(c.jsx)("img",{src:"https://bit.ly/2HA5mSu",alt:""})}),Object(c.jsx)("li",{className:"list__item",children:Object(c.jsx)("img",{src:"https://bit.ly/2HA5mSu",alt:""})}),Object(c.jsx)("li",{className:"list__item",children:Object(c.jsx)("img",{src:"https://bit.ly/2HA5mSu",alt:""})})]})]})})}),H="https://s3-alpha-sig.figma.com/img/d11a/1541/569288727bc9b16906a1f66e649f02ee?Expires=1604880000&Signature=CE1YJ4-Rr3ExfX1Qz5HmvoV8gybOUYN3tOiKaoFrSkdFi0yRsaPFgmMaPvYZ4dILzc8yniJgk6o9Asartg5NONmL9W6Dgjdn43grpyBGp1yeLyhDepBRB0diu9qT5RCa71B9lPYxPF~5a929waJZiPdG5MNu2xcdLnMWH6voCZIO4AoEmwZkM-0f1Obndu9PHpke5hXuG-YnK--1dBiXMuTqotmIZLxC8HHMBwvNUcQ1ucB9XLO-yOiBQ1Zubl3L5ivwjLxSbD6Vg6BED9-ZGL3dWBU2gvaitMwdUj3APLQ7uI39rYoXUMPrE~f8WYHXD0cHez3JlmcmVnm1MeqMDw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",B=function(){return Object(c.jsxs)("ul",{className:"content__watches watches row",children:[Object(c.jsxs)("li",{className:"watches__item col-3",children:[Object(c.jsx)("img",{src:H,alt:""}),Object(c.jsxs)("p",{children:["Louis XVI ATHOS",Object(c.jsx)("br",{}),"56.000 \u0433\u0440\u043d"]})]}),Object(c.jsxs)("li",{className:"watches__item col-3",children:[Object(c.jsx)("img",{src:H,alt:""}),Object(c.jsxs)("p",{children:["Louis XVI ATHOS",Object(c.jsx)("br",{}),"56.000 \u0433\u0440\u043d"]})]}),Object(c.jsxs)("li",{className:"watches__item col-3",children:[Object(c.jsx)("img",{src:H,alt:""}),Object(c.jsxs)("p",{children:["Louis XVI ATHOS",Object(c.jsx)("br",{}),"56.000 \u0433\u0440\u043d"]})]})]})},z=(s(445),function(){return Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("div",{className:"row no-gutters",children:[Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("h2",{className:"content__header",children:"\u0421\u0435\u0437\u043e\u043d 2020/21"}),Object(c.jsx)(B,{})]}),Object(c.jsxs)("div",{className:"col-6",children:[Object(c.jsx)("h2",{className:"content__header",children:"\u041d\u043e\u0432\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f"}),Object(c.jsx)(l.b,{to:b,children:"\u043a\u0430\u0442\u0430\u043b\u043e\u0433"})]})]})})}),I=(s(446),function(){return Object(c.jsx)("footer",{className:"footer",children:Object(c.jsxs)("div",{className:"container d-flex",children:[Object(c.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b"}),Object(c.jsx)("p",{className:"footer__developer ml-auto",children:"\u0415\u0433\u043e\u0440 \u0411\u0435\u043b\u043e\u043a\u0440\u0438\u043d\u0438\u0446\u043a\u0438\u0439"})]})})}),E=function(){return Object(c.jsxs)("div",{className:"hero__logo",children:[Object(c.jsx)("h1",{children:"porten"}),Object(c.jsx)("p",{children:"\u0423\u043a\u0440\u0430\u0438\u043d\u0430"})]})},X=(s(447),function(){return Object(c.jsxs)("div",{className:"header__hero hero",children:[Object(c.jsx)("div",{className:"overlay"}),Object(c.jsx)(E,{}),Object(c.jsx)("p",{className:"hero__text",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra."})]})}),G=(s(448),function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)(f,{}),Object(c.jsx)(X,{})]}),Object(c.jsx)(z,{}),Object(c.jsx)(D,{}),Object(c.jsx)(I,{})]})}),J=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),s=t[0],n=t[1],a=Object(i.useState)(!1),r=Object(o.a)(a,2),d=r[0],m=r[1];return Object(c.jsx)(l.a,{children:Object(c.jsx)(g,{value:[s,n],children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{path:O,children:Object(c.jsx)(k,{storedProducts:s})}),Object(c.jsx)(j.a,{path:b,children:Object(c.jsx)(S,{isScrolled:d,setIsScrolled:m})}),Object(c.jsx)(j.a,{path:u,component:G,exact:!0})]})})})};var Y=function(){return Object(c.jsx)(J,{})};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Y,{})}),document.getElementById("root"))}},[[449,1,2]]]);
//# sourceMappingURL=main.62155aa4.chunk.js.map