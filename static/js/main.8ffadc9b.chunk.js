(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],{34:function(e,a,t){e.exports=t(49)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),m=t(7),s=t(8),o=t(10),i=t(9),d=t(11),p=t(13),u=t(2),E=t(33),b=t(18),x=t(19);function h(){var e=Object(b.a)(["\n  list-style: none;\n  display: flex;\n  flex-flow: row nowrap;\n  z-index:9;\n  li {\n    padding: 18px 20px;\n  }\n  li a{\n    font-size: 14px;\n    padding: 0 21px;\n  }\n  @media (max-width: 1023px) {\n    flex-flow: column nowrap;\n    background-color: #fff;\n    position: fixed;\n    transform: ",";\n    top: 0;\n    right: 0;\n    height: 100vh;\n    width: 300px;\n    padding-top: 3.5rem;\n    transition: transform 0.3s ease-in-out;\n    box-shadow: -1px 3px 5px rgba(0, 0, 0, 0.2);\n  }\n  @media (max-width: 501px) and (min-width: 320px){\n    width: 290px;\n  }\n"]);return h=function(){return e},e}var w=x.a.ul(h(),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),g=function(e){var a=e.open;return r.a.createElement(w,{open:a,className:"navbar-ul"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login"},"Login")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/register"},"Register")))};function N(){var e=Object(b.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 15px;\n  right: 20px;\n  z-index: 20;\n  display: none;\n  @media (max-width: 1023px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n    margin-top: 40px;\n  }\n  @media (max-width: 500px) and (min-width: 320px){\n    margin-top: 15px;\n  }\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: #861657;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n    @media (max-width: 500px) and (min-width: 320px){\n      width: 1.6rem;\n      height: 0.2rem;\n    }\n  }\n"]);return N=function(){return e},e}var f=x.a.div(N(),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),v=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{open:t,onClick:function(){return l(!t)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(g,{open:t}))},y=(t(44),function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"logo"},r.a.createElement(p.b,{to:"/"},r.a.createElement("img",{src:"images/logo.png",className:"img-fluid",alt:""}))),r.a.createElement(v,null))}),j=(t(45),function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"message"},r.a.createElement("h3",null,"Welcome to Homepage!")))}}]),a}(r.a.Component)),O=(t(46),function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"},r.a.createElement("div",{className:"card card0 border-0"},r.a.createElement("div",{className:"row d-flex"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card1 pb-5"},r.a.createElement("div",{className:"row px-3 justify-content-center mt-4 mb-5 border-line"}," ",r.a.createElement("img",{src:"images/login-foreground.png",className:"image",alt:""})," "))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card2 card border-0 px-4 py-5"},r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Username"))," ",r.a.createElement("input",{className:"mb-4",type:"text",name:"email",placeholder:"Enter username"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Password"))," ",r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row px-3 mb-4"},r.a.createElement("div",{className:"custom-control custom-checkbox custom-control-inline"}," ",r.a.createElement("input",{id:"chk1",type:"checkbox",name:"chk",className:"custom-control-input"})," ",r.a.createElement("label",{htmlFor:"chk1",className:"custom-control-label text-sm"},"Remember me")," ")," ",r.a.createElement("a",{href:"javascript:void(0)",className:"ml-auto mb-0 text-sm"},"Forgot Password?")),r.a.createElement("div",{className:"row mb-3 px-3"}," ",r.a.createElement("button",{type:"submit",className:"btn login-btn text-center"},"Login")," "),r.a.createElement("div",{className:"row mb-4 px-3"}," ",r.a.createElement("small",{className:"font-weight-bold"},"Don't have an account? ",r.a.createElement("a",{className:"text-danger "},"Register"))," ")))))))}}]),a}(r.a.Component)),k=(t(47),function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement("div",{className:"container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"},r.a.createElement("div",{className:"card card0 border-0"},r.a.createElement("div",{className:"row d-flex"},r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card1 pb-5"},r.a.createElement("div",{className:"row px-3 justify-content-center mt-4 mb-5 border-line"}," ",r.a.createElement("img",{src:"images/login-foreground.png",className:"image",alt:""})," "))),r.a.createElement("div",{className:"col-lg-6"},r.a.createElement("div",{className:"card2 card border-0 px-4 py-5"},r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Username"))," ",r.a.createElement("input",{className:"mb-4",type:"text",name:"email",placeholder:"Enter username"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"First name"))," ",r.a.createElement("input",{className:"mb-4",type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Last name"))," ",r.a.createElement("input",{className:"mb-4",type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Email"))," ",r.a.createElement("input",{className:"mb-4",type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Password"))," ",r.a.createElement("input",{className:"mb-4",type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row px-3"}," ",r.a.createElement("label",{className:"mb-1"},r.a.createElement("h6",{className:"mb-0 text-sm"},"Confirm Password"))," ",r.a.createElement("input",{className:"mb-4",type:"password",name:"password",placeholder:"Enter password"})," "),r.a.createElement("div",{className:"row mb-3 px-3"}," ",r.a.createElement("button",{type:"submit",className:"btn register-btn text-center"},"Register")," "),r.a.createElement("div",{className:"row mb-4 px-3"}," ",r.a.createElement("small",{className:"font-weight-bold"},"Already have an account? ",r.a.createElement("a",{href:"javascript:void(0)",className:"text-danger"},"Login"))," ")))))))}}]),a}(r.a.Component)),_=function(e){function a(){return Object(m.a)(this,a),Object(o.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(u.a,{path:"/login"},r.a.createElement(O,null)),r.a.createElement(u.a,{path:"/register"},r.a.createElement(k,null)))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(32),F=t(15),X=t(31),L={project_title:"Data fetching Application"},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;arguments.length>1&&arguments[1];return e},R=Object(F.c)({global:P}),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||F.d,S=Object(F.e)(R,D(F.a.apply(void 0,[X.a])));window.store=S;var z=S;c.a.render(r.a.createElement(C.a,{store:z},r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.8ffadc9b.chunk.js.map