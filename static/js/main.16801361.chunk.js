(this["webpackJsonpreact-hw-02-phonebook"]=this["webpackJsonpreact-hw-02-phonebook"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),o=n.n(c),l=n(5),i=n(3),u=n(4),m=n(7),d=n(6),s=function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,t),r.a.createElement("div",null,n))},b=function(e){var t=e.contacts,n=e.onRemoveContact;return r.a.createElement("ul",null,t.map((function(e){var t=e.id,a=e.name,c=e.number;return r.a.createElement("li",{key:t},r.a.createElement("p",{style:{display:"inline-block",margin:"10px"}},a," - ",c),r.a.createElement("button",{type:"button",onClick:function(){return n(t)}},"Del"))})))},f=function(e){var t=e.onAddContact;return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:t},"Add Contact"))},p=function(){return r.a.createElement("p",null,"Filter")},E=n(15),v=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[{id:"1",name:"qwe1",number:"1-123-456"},{id:"2",name:"qwe2",number:"2-123-456"},{id:"3",name:"qwe3",number:"3-123-456"},{id:"4",name:"qwe4",number:"4-123-456"},{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(){var t={id:Object(E.a)(),name:"qwe0",number:"0-123-456"};e.setState((function(e){return{contacts:[t].concat(Object(l.a)(e.contacts))}}))},e.removeContact=function(t){console.log(t),e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s,{title:"Phonebook"},r.a.createElement(f,{onAddContact:this.addContact})),r.a.createElement(s,{title:"Contacts"},r.a.createElement(p,null),r.a.createElement(b,{contacts:this.state.contacts,onRemoveContact:this.removeContact})))}}]),n}(a.Component);var h=function(){return r.a.createElement(v,null)};o.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.16801361.chunk.js.map