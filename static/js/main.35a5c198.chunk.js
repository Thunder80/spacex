(this.webpackJsonpspacex=this.webpackJsonpspacex||[]).push([[0],{23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a.n(c),l=a(16),s=a.n(l),u=(a(23),a(4)),o=a(5),i=a.n(o),r=a(1);function d(e){var t=e.text,a=e.className,c=e.onClick;return Object(r.jsx)("button",{className:"px-2 py-1 border rounded-md bg-blue transition text-white text-md hover:text-blue hover:bg-white duration-500 ".concat(a),onClick:c,children:t})}var j=a(17),h=a(18),m=a(6);function x(e){var t=e.title,a=e.value;return Object(r.jsxs)("p",{className:"text-lg font-semibold mt-2"+("string"!==typeof a?" flex items-center ":""),children:[t," -"," ",Object(r.jsx)("span",{className:"font-normal text-md"+("string"!==typeof a?" ml-2 mt-1 ":""),children:a})]})}function b(e){var t=e.rocket,a=new Date(t.launch_date_local),c=a.getDate(),n=a.getMonth(),l=a.getFullYear();return Object(r.jsx)("div",{className:"p-4 m-4 w-full lg:w-5/12 flex justify-center rounded-md shadow-xl hover:shadow-2xl transition duration-300 height-transition overflow-hidden",children:Object(r.jsxs)("div",{className:"w-full block md:flex",children:[Object(r.jsxs)("div",{className:"w-full md:w-2/3",children:[Object(r.jsx)("div",{className:"text-3xl font-bold justify-self-start underline",children:t.mission_name}),Object(r.jsxs)("div",{className:"mt-4",children:[Object(r.jsx)(x,{title:"Launch Date",value:" ".concat(c," ").concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][n],", ").concat(l)}),Object(r.jsx)(x,{title:"Launch Time",value:" ".concat(a.getHours(),":").concat(a.getMinutes())}),Object(r.jsx)(x,{title:"Launch Site",value:t.launch_site.site_name}),Object(r.jsx)(x,{title:"Launch Summary",value:t.details}),Object(r.jsx)(x,{title:"Rocket Name",value:t.rocket.rocket_name}),Object(r.jsx)(x,{title:"Rocket Type",value:t.rocket.rocket_type}),Object(r.jsx)(x,{title:"Launch Success",value:t.launch_success?Object(r.jsx)(m.a,{color:"#63c642"}):Object(r.jsx)(m.b,{color:"#da1f26"})})]})]}),Object(r.jsxs)("div",{className:"w-full md:w-1/3 flex flex-col justify-center",children:[Object(r.jsx)("img",{style:{width:"75%"},src:t.links.mission_patch,className:"mx-auto mt-2",alt:"mission_patch"}),Object(r.jsxs)("div",{className:"mt-6 flex justify-around",children:[Object(r.jsx)(j.a,{onClick:function(){return window.open("".concat(t.links.article_link),"_blank")},size:30,className:"hover:text-blue cursor-pointer"}),Object(r.jsx)(h.a,{onClick:function(){return window.open("".concat(t.links.video_link),"_blank")},size:30,className:"hover:text-red-600 cursor-pointer"}),Object(r.jsx)(m.c,{onClick:function(){return window.open("".concat(t.links.wikipedia),"_blank")},size:30,className:"hover:text-gray-500 cursor-pointer"})]})]})]})})}function f(e){var t=e.name,a=e.options,c=e.defaultValue,n=e.onChange;return Object(r.jsxs)("div",{className:"flex flex-col w-full p-2 md:w-auto",children:[Object(r.jsx)("label",{className:"mb-2 text-lg font-semibold",htmlFor:t,children:t}),Object(r.jsxs)("select",{name:t,className:"p-1 w- rounded-md",onChange:n,value:c,children:[Object(r.jsx)("option",{value:"",children:"None"}),a.map((function(e){return Object(r.jsx)("option",{value:e.value,children:e.key})}))]})]})}var v=function(e){var t=Object(c.useState)(null),a=Object(u.a)(t,2),n=a[0],l=a[1],s=Object(c.useState)(null),o=Object(u.a)(s,2),j=o[0],h=o[1],m=Object(c.useState)(null),x=Object(u.a)(m,2),v=x[0],p=x[1],O=Object(c.useState)(null),w=Object(u.a)(O,2),y=w[0],k=w[1],g=[{key:"Success",value:"true"},{key:"Failure",value:"false"}];return Object(c.useEffect)((function(){var e=new URL(window.location.href).searchParams,t="";console.log(e.get("launch_success"),e.get("land_success"),e.get("launch_year")),e.get("launch_success")&&(t+="&launch_success=".concat(e.get("launch_success")),h(e.get("launch_success"))),e.get("land_success")&&(t+="&land_success=".concat(e.get("land_success")),p(e.get("land_success"))),e.get("launch_year")&&(t+="&launch_year=".concat(e.get("launch_year")),k(e.get("launch_year"))),i.a.get("https://api.spaceXdata.com/v3/launches?limit=100"+t).then((function(e){return l(e.data)}))}),[]),Object(r.jsxs)("div",{className:"bg-grey flex flex-col justify-center items-center",children:[Object(r.jsx)("div",{className:"text-5xl underline font-extrabold mb-16",children:"Space X"}),Object(r.jsxs)("div",{className:"w-full flex flex-wrap justify-around items-center",children:[Object(r.jsx)(f,{name:"Launch Successfully",options:g,onChange:function(e){return h(e.target.value)},defaultValue:j||""}),Object(r.jsx)(f,{name:"Landed Successfully",onChange:function(e){return p(e.target.value)},options:g,defaultValue:v||""}),Object(r.jsx)(f,{name:"Year",onChange:function(e){return k(e.target.value)},options:[{key:"2006",value:"2006"},{key:"2007",value:"2007"},{key:"2008",value:"2008"},{key:"2009",value:"2009"},{key:"2010",value:"2010"},{key:"2011",value:"2011"},{key:"2012",value:"2012"},{key:"2013",value:"2013"},{key:"2014",value:"2014"},{key:"2015",value:"2015"},{key:"2016",value:"2016"},{key:"2017",value:"2017"},{key:"2018",value:"2018"},{key:"2019",value:"2019"},{key:"2020",value:"2020"},{key:"2021",value:"2021"}],defaultValue:y||""}),Object(r.jsxs)("div",{className:"self-end mb-2",children:[Object(r.jsx)(d,{className:"h-1/2 p-4 mr-3",text:"Apply",onClick:function(){l(null);var e="";j&&(e+="&launch_success=".concat(j)),v&&(e+="&land_success=".concat(v)),y&&(e+="&launch_year=".concat(y)),i.a.get("https://api.spaceXdata.com/v3/launches?limit=100"+e).then((function(e){return l(e.data)}));var t=window.location.protocol+"//"+window.location.host+window.location.pathname+"?".concat(e.substring(1));window.history.pushState({path:t},"",t)}}),Object(r.jsx)(d,{text:"Clear",onClick:function(){h(null),p(null),k(null),l(null),i.a.get("https://api.spaceXdata.com/v3/launches?limit=100").then((function(e){return l(e.data)}));var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState({path:e},"",e)}})]})]}),n?Object(r.jsx)("div",{className:"w-full flex flex-wrap justify-around",children:n.map((function(e){return Object(r.jsx)(b,{rocket:e,expand:!1})}))}):"Loading..."]})};s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.35a5c198.chunk.js.map