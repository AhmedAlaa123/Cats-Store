(this.webpackJsonpcatstore=this.webpackJsonpcatstore||[]).push([[0],{24:function(t){t.exports=JSON.parse('[{"id":1,"name":"White Cat","price":100,"image":"/imgs/1.jpg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\\n          industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"id":2,"name":"Angry Cat","price":1000,"image":"/imgs/2.jpg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\\n          industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"id":3,"name":"Bengal cat","price":2000,"image":"/imgs/3.jpg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\\n          industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},{"id":4,"name":"Persian cat","price":150,"image":"/imgs/4.webp","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the\\n          industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}]')},33:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),c=n(14),s=n.n(c),i=(n(33),n(10)),o=n(9),d=n(3),u=n(0);var l=Object(i.b)((function(t){return{totalQuantity:t.cartReducer.reduce((function(t,e){return t+parseInt(e.quantity)}),0)}}),null)((function(t){return Object(u.jsx)(o.b,{to:"/Cart",children:Object(u.jsxs)("div",{className:"cart-icon",children:[Object(u.jsx)("i",{className:"fa fa-shopping-cart fa-2x"}),Object(u.jsx)("span",{className:"badge badge-danger",children:t.totalQuantity})]})})}));function j(t){return Object(u.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-ligh",children:[Object(u.jsx)(o.c,{className:"navbar-brand",to:"/",children:"Cate Store"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(u.jsx)("li",{className:"nav-item ",children:Object(u.jsxs)(o.c,{exact:!0,className:"nav-link",to:"/",children:["Home",Object(u.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{exact:!0,className:"nav-link",to:"/Products",children:"Products"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(o.c,{exact:!0,className:"nav-link",to:"/Cart",children:"Cart"})})]})}),Object(u.jsx)(l,{})]})}var p=function(t){return Object(u.jsxs)("div",{className:"text-center home-page",children:[Object(u.jsx)("h1",{children:"Cats Store"}),Object(u.jsx)("p",{children:"Somthing short and leading about the collection below  its contents the creator ,etc Make it short and sweet but not too short so folks. don't simply skip over it enternly."}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-primary",children:"Main Call To Action"}),Object(u.jsx)("button",{className:"btn btn-secondary",children:"Secondary  Action"})]})]})},b=n(6),m=n.n(b),h=n(11),x=n(16),O=n(17),y=n(19),f=n(18),v=n(24),g=function(){var t=Object(h.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve(v);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),N=function(){var t=Object(h.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=v.find((function(t){return parseInt(t.id)===parseInt(e)})),t.next=3,Promise.resolve(n);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(t){return Object(u.jsxs)("div",{className:"card",style:{width:"auto"},children:[Object(u.jsx)("img",{src:t.product.image,className:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h3",{className:"card-title",children:t.product.name}),Object(u.jsxs)("p",{className:"card-text",children:["Price ",t.product.price," $"]}),Object(u.jsx)(o.b,{to:"/Products/"+t.product.id,className:"btn btn-primary",children:"Details"})]})]})},k=function(t){Object(y.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={products:[]},t.componentDidMount=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g().then((function(e){t.setState({products:e})}));case 2:case"end":return e.stop()}}),e)}))),t}return Object(O.a)(n,[{key:"render",value:function(){var t=this.state.products.map((function(t){return Object(u.jsx)("div",{className:"col-md-4 ",style:{marginTop:"10px"},children:Object(u.jsx)(w,{product:t})},t.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Products"}),Object(u.jsx)("div",{className:"row",children:t})]})}}]),n}(r.a.Component),C="ADD_TO_CART",I="DELETE_FROM_CART",P="PAY_NOW";var S=Object(i.b)(null,(function(t){return{deleteProductFromCart:function(e){return t(function(t){return{type:I,id:t}}(e))}}}))((function(t){var e=t.item,n=e.product;return Object(u.jsxs)("div",{className:"card",style:{width:"auto"},children:[Object(u.jsx)("img",{src:n.image,className:"card-img-top",alt:"..."}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h3",{className:"card-title",children:n.name}),Object(u.jsxs)("p",{className:"card-text",children:["Price : ",n.price," $",Object(u.jsx)("br",{}),"Quantity :",e.quantity,Object(u.jsx)("br",{}),"Total : ",e.quantity*n.price," $"]}),Object(u.jsxs)("button",{className:"btn btn-danger",onClick:function(){return t.deleteProductFromCart(parseInt(n.id))},children:[Object(u.jsx)("i",{className:"fa fa-trash"}),"  Delete"]})]})]})})),T=Object(i.b)((function(t){return{cartItems:t.cartReducer,totalPrice:t.cartReducer.reduce((function(t,e){return t+e.quantity*e.product.price}),0)}}),(function(t){return{payNow:function(){return t({type:P})}}}))((function(t){var e=t.cartItems.map((function(t){return Object(u.jsx)("div",{className:"col-md-3",id:"cart-product",children:Object(u.jsx)(S,{item:t})},t.product.id)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Cart"}),Object(u.jsx)("div",{className:"row",children:e}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("h3",{children:["Total :",t.totalPrice," $"]}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-block btn-primary",onClick:t.payNow,children:"Pay Now"})]})})),_=function(t){Object(y.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={loading:!0,product:{},quantity:0,totalPrice:0},t.handdelQuntityChange=function(e){var n=e.target.value,a=t.state.product.price;t.setState({quantity:n,totalPrice:n*a})},t.handdelAddToCart=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.props.addProductToCart(t.state.product,t.state.quantity);case 2:t.setState({quantity:0,totalPrice:0});case 3:case"end":return e.stop()}}),e)}))),t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=Object(h.a)(m.a.mark((function t(){var e,n=this;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.id,N(e).then((function(t){n.setState({product:t,loading:!1})}));case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return Object(u.jsx)("h1",{children:"Loading ......."});var t=this.state.product;return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsx)("img",{className:"img-fluid",src:t.image,alt:"Cat"})}),Object(u.jsxs)("div",{className:"col-md-6",children:[Object(u.jsx)("h1",{children:t.name}),Object(u.jsxs)("h4",{children:[t.price," $"]}),Object(u.jsx)("p",{className:"lead",children:t.description}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"number",min:"0",value:this.state.quantity,onChange:this.handdelQuntityChange}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsxs)("p",{children:["Total Price : ",this.state.totalPrice]}),Object(u.jsx)("button",{disabled:!(parseInt(this.state.quantity)>0),className:"btn btn-primary",onClick:this.handdelAddToCart,children:"Add To Cart"})]})]})}}]),n}(r.a.Component),q=Object(i.b)(null,(function(t){return{addProductToCart:function(e,n){return t(function(t,e){return{type:C,productInfo:t,quantity:e}}(e,n))}}}))(_),L=function(t){return Object(u.jsxs)("div",{style:{padding:"50px"},children:[Object(u.jsx)("h1",{children:"Error: 404"}),Object(u.jsx)("p",{children:"page Not Found"}),Object(u.jsx)("h5",{children:t.location.pathname})]})},E=n(25),A=n(26),D=n(28),R=n.n(D),F=Object(A.a)({cartReducer:function(t,e){var n=[];if(e.type===C){var a=t.findIndex((function(t){return t.product.id===e.productInfo.id}));return a>-1?(t[a].quantity+=parseInt(e.quantity),n=Object(E.a)(t)):n=[].concat(Object(E.a)(t),[{product:e.productInfo,quantity:parseInt(e.quantity)}]),n}return e.type===I?(n=t.filter((function(t){return t.product.id!==e.id})),console.log("products",n),n):e.type===P||void 0===t?[]:t}}),M=Object(A.b)(F,function(){try{var t=localStorage.getItem("cart");if(null!==t)return JSON.parse(t)}catch(e){}return[]}(),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());M.subscribe(R()((function(){!function(t){try{localStorage.setItem("cart",JSON.stringify(t))}catch(e){console.log(e)}}(M.getState())}),1e3));var J=M;function Q(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:" container",children:[Object(u.jsx)(j,{}),Object(u.jsxs)(d.c,{children:[Object(u.jsx)(d.a,{path:"/",exact:!0,component:p}),Object(u.jsx)(d.a,{path:"/Products",exact:!0,component:k}),Object(u.jsx)(d.a,{path:"/Cart",component:T}),Object(u.jsx)(d.a,{path:"/Products/:id",exact:!0,component:q}),Object(u.jsx)(d.a,{component:L})]})]})})}var $=function(){return Object(u.jsx)(i.a,{store:J,children:Object(u.jsx)(Q,{})})},X=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),c(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)($,{})}),document.getElementById("root")),X()}},[[40,1,2]]]);
//# sourceMappingURL=main.833d4db8.chunk.js.map