"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[665],{665:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var r=t(6582),i=t(824),a=t(4420),s=t(3553),u=function(e){return e.contacts.items},o=function(e){return e.contacts.isLoading},c=function(e){return e.contacts.error},l=(0,s.P1)(u,(function(e){return e.contacts.filter}),(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.trim().toLowerCase())}))})),m=t(3634),d=t(5705),f=t(1986),h=t(5350),x=t(7438),j=t(7236),p=t(9055),b=t(3329),v=function(){var e=(0,a.I0)(),n=(0,a.v9)(u),t=(0,f.p)(),s=(0,d.TA)({initialValues:{name:"",number:""},onSubmit:function(n){o(n.name)?t({title:n.name+" is already in contacts.",status:"warning",isClosable:!0,duration:3e3,position:"top"}):(e((0,m.uK)(n)),s.resetForm())}}),o=function(e){return n.some((function(n){return n.name.toLowerCase()===e.toLowerCase()}))};return(0,b.jsx)(i.xu,{w:500,borderRadius:10,py:3,children:(0,b.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,b.jsxs)(h.NI,{isRequired:!0,px:5,children:[(0,b.jsx)(x.l,{htmlFor:"email",children:"Name"}),(0,b.jsx)(j.I,{id:"name",name:"name",type:"name",variant:"filled",onChange:s.handleChange,value:s.values.name})]}),(0,b.jsxs)(h.NI,{isRequired:!0,px:5,children:[(0,b.jsx)(x.l,{htmlFor:"number",children:"Phone"}),(0,b.jsx)(j.I,{id:"number",name:"number",type:"number",variant:"filled",onChange:s.handleChange,value:s.values.number})]}),(0,b.jsx)(r.k,{justifyContent:"center",mt:5,children:(0,b.jsx)(p.z,{type:"submit",colorScheme:"orange",mt:15,w:140,children:"Add contact"})})]})})},y=t(2791),C=t(6867),g=function(){var e=(0,a.v9)(l),n=(0,a.v9)(o),t=(0,a.v9)(c),r=(0,a.I0)();(0,y.useEffect)((function(){r((0,m.yF)())}),[r]);return(0,b.jsx)(C.E,{display:"flex",direction:"column",children:!n&&!t&&e.length>0&&e.map((function(e){return(0,b.jsxs)(C.U,{w:500,justifyContent:"space-around",alignItems:"center",pt:3,children:[(0,b.jsxs)("span",{style:{width:"300px"},children:[e.name," : ",e.number]}),(0,b.jsx)(p.z,{type:"button",onClick:function(){return n=e.id,void r((0,m.GK)(n));var n},children:"Delete"})]},e.id)}))})},w=t(1538),I=function(){var e=(0,a.I0)();return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(i.xu,{w:500,display:"flex",alignItems:"center",flexDirection:"column",children:(0,b.jsxs)(h.NI,{px:5,py:5,children:[(0,b.jsx)(x.l,{htmlFor:"email",children:"Find contacts by name:"}),(0,b.jsx)(j.I,{id:"filter",name:"filter",type:"filter",variant:"filled",onChange:function(n){var t=n.target.value;e((0,w.T)(t))}})]})})})},k=function(){return(0,b.jsx)(r.k,{flexDirection:"column",justifyContent:"center",alignItems:"center",mt:75,children:(0,b.jsxs)(i.xu,{bg:"#e3cbb7",borderRadius:15,pb:7,children:[(0,b.jsx)(v,{}),(0,b.jsx)(I,{}),(0,b.jsx)(g,{})]})})}}}]);
//# sourceMappingURL=665.dbdd5bac.chunk.js.map