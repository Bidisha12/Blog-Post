(this["webpackJsonpcontact-book-using-redux-react"]=this["webpackJsonpcontact-book-using-redux-react"]||[]).push([[0],{67:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(14),r=n.n(a),s=n(19),l=n(5),o=n(11),i=n(20),u=n(18),d=n(1),j=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{addContact:function(t){e({type:"ADD_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.addContact,a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],u=r[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),h=b[0],m=b[1],O=Object(c.useState)(""),x=Object(i.a)(O,2),f=x[0],p=x[1],v=Object(l.e)();return Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("h1",{className:"text-center text-dark py-3 display-2",children:"Add Post"}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-md-6 p-5 mx-auto shadow",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.filter((function(e){return e.catagory===h?e:null})),a=t.filter((function(e){return e.content===f?e:null}));if(!h||!s||!f)return o.b.warning("Please fill in all fields!!");if(c.length>0)return o.b.error("This catagory already exists!!");if(a.length>0)return o.b.error("This content number already exists!!");var r={id:t.length>0?t[t.length-1].id+1:0,catagory:h,title:s,content:f};n(r),o.b.success("Contact added successfully!!"),v.push("/")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Title",value:s,onChange:function(e){return u(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Categories",value:h,onChange:function(e){return m(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",type:"text",placeholder:"Content",value:f,onChange:function(e){return p(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"btn btn-block btn-dark",type:"submit",value:"Submit"})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"btn btn-block btn-dark",type:"button",value:"Cancel",onClick:function(){return v.push("/")}})})]})})})]})})),b=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{updateContact:function(t){e({type:"UPDATE_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.updateContact,a=Object(l.f)().id,r=Object(l.e)(),s=t.find((function(e){return e.id===parseInt(a)}));Object(c.useEffect)((function(){h(s.title),f(s.catagory),N(s.content)}),[s]);var u=Object(c.useState)(""),j=Object(i.a)(u,2),b=j[0],h=j[1],m=Object(c.useState)(""),O=Object(i.a)(m,2),x=O[0],f=O[1],p=Object(c.useState)(""),v=Object(i.a)(p,2),g=v[0],N=v[1];return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex flex-column",children:[Object(d.jsx)("button",{className:"btn btn-dark ml-auto my-5",onClick:function(){return r.push("/")},children:"Go back"}),Object(d.jsx)("div",{className:"col-md-6 mx-auto shadow p-5",children:s?Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c=t.filter((function(e){return e.catagory===x&&e.id!==s.id?e:null})),a=t.filter((function(e){return e.content===g&&e.id!==s.id?e:null}));if(!x||!b||!g)return o.b.warning("Please fill in all fields!!");if(c.length>0)return o.b.error("This catagory already exists!!");if(a.length>0)return o.b.error("This content number already exists!!");var l={id:s.id,catagory:x,title:b,content:g};n(l),o.b.success("Contact updated successfully!!"),r.push("/")},children:[Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:b,placeholder:"Title",onChange:function(e){return h(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:x,placeholder:"Catagories",onChange:function(e){return f(e.target.value)}})}),Object(d.jsx)("div",{className:"form-group",children:Object(d.jsx)("input",{className:"form-control",value:g,placeholder:"Content",onChange:function(e){return N(e.target.value)}})}),Object(d.jsxs)("div",{className:"form-group d-flex align-items-center justify-content-between my-2",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Update"}),Object(d.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(){return r.push("/")},children:"cancel"})]})]}):Object(d.jsx)("h1",{className:"text-center",children:"No Contact Found"})})]})})})),h=n(91),m=n(90),O=n(50),x=n.n(O),f=n(49),p=n.n(f),v=Object(u.b)((function(e){return{contacts:e}}),(function(e){return{deleteContact:function(t){e({type:"DELETE_CONTACT",payload:t})}}}))((function(e){var t=e.contacts,n=e.deleteContact;return Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row d-flex flex-column",children:[Object(d.jsx)(s.b,{to:"/add",className:"btn btn-outline-dark my-5 ml-auto ",children:"Add Post"}),Object(d.jsx)("div",{className:"col-md-10 mx-auto my-4",children:Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{className:"table-header bg-dark text-white",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"Id"}),Object(d.jsx)("th",{scope:"col",children:"Title"}),Object(d.jsx)("th",{scope:"col",children:"Catagory"}),Object(d.jsx)("th",{scope:"col",children:"Content"}),Object(d.jsx)("th",{scope:"col"})]})}),Object(d.jsx)("tbody",{children:t.length>0?t.map((function(e,t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:e.catagory}),Object(d.jsx)("td",{children:e.content}),Object(d.jsxs)("td",{children:[Object(d.jsx)(s.b,{to:"/edit/".concat(e.id),className:"btn btn-sm btn-primary mr-1",children:"Edit"}),Object(d.jsx)("button",{type:"button",onClick:function(){return n(e.id)},className:"btn btn-sm btn-danger",children:"Delete"}),Object(d.jsx)(h.a,{control:Object(d.jsx)(m.a,{icon:Object(d.jsx)(p.a,{}),checkedIcon:Object(d.jsx)(x.a,{}),name:"checkedH"}),label:"Like",style:{marginLeft:10}})]})]},t)})):Object(d.jsx)("tr",{children:Object(d.jsx)("th",{children:"No post found"})})})]})})]})})})),g=function(){return Object(d.jsx)("div",{className:"col-md-12 bg-dark py-2",children:Object(d.jsx)("nav",{className:"navbar bg-dark navbar-dark",children:Object(d.jsx)(s.b,{to:"/",className:"navbar-brand ml-5",children:"back to index page"})})})},N=(n(67),function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(o.a,{}),Object(d.jsx)(g,{}),Object(d.jsx)(l.a,{exact:!0,path:"/",component:function(){return Object(d.jsx)(v,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/add",component:function(){return Object(d.jsx)(j,{})}}),Object(d.jsx)(l.a,{exact:!0,path:"/edit/:id",component:function(){return Object(d.jsx)(b,{})}})]})}),y=(n(68),n(69),n(24)),C=n(52),T=[{id:0,name:"Raman Sharma",email:"email@email.com",phone:1234567890},{id:1,name:"Test Name",email:"test@test.com",phone:4567891230}],k=n(51),A=Object(y.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_CONTACT":return e=[].concat(Object(C.a)(e),[t.payload]);case"DELETE_CONTACT":var n=e.filter((function(e){return e.id===t.payload?null:e}));return e=n;case"UPDATE_CONTACT":var c=e.filter((function(e){return e.id===t.payload.id?Object.assign(e,t.payload):e}));return e=c;case"RESET_CONTACT":return e=[{name:null,email:null,phone:null}];default:return e}}),Object(k.composeWithDevTools)()),E=document.getElementById("root");r.a.render(Object(d.jsx)(u.a,{store:A,children:Object(d.jsx)(s.a,{children:Object(d.jsx)(N,{})})}),E)}},[[71,1,2]]]);
//# sourceMappingURL=main.aed06b80.chunk.js.map