(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{195:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(71),s=a.n(l),o=(a(81),a(1)),c=a(2),i=a(3),u=a(4),m=a(30),h=a(15),p=(a(82),a(14)),d=a.n(p),b=a(18),g=a(10),v=a(23),E=a.n(v),f="https://system-liczenia-frekwencji.herokuapp.com/auth/",y=E.a.create({baseURL:f,timeout:5e3,headers:{Authorization:localStorage.getItem("access_token")?"JWT "+localStorage.getItem("access_token"):null,"Content-Type":"application/json",accept:"application/json"}});y.interceptors.response.use((function(e){return e}),(function(e){var t=e.config;if(401===e.response.status&&t.url===f+"token/refresh/")return window.location.href="/login/",Promise.reject(e);if("token_not_valid"===e.response.data.code&&401===e.response.status&&"Unauthorized"===e.response.statusText){var a=localStorage.getItem("refresh_token");if(a){var n=JSON.parse(atob(a.split(".")[1])),r=Math.ceil(Date.now()/1e3);if(console.log(n.exp),n.exp>r)return y.post("/token/refresh/",{refresh:a}).then((function(e){return localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh),y.defaults.headers.Authorization="JWT "+e.data.access,t.headers.Authorization="JWT "+e.data.access,y(t)})).catch((function(e){console.log(e)}));console.log("Refresh token is expired",n.exp,r),window.location.href="/login/"}else console.log("Refresh token not available."),window.location.href="/login/"}return Promise.reject(e)}));var k=y,w=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleLogout=e.handleLogout.bind(Object(g.a)(e)),e}return Object(c.a)(a,[{key:"handleLogout",value:function(){var e=Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.location.reload(),e.prev=1,e.next=4,k.post("/blacklist/",{refresh_token:localStorage.getItem("refresh_token")});case 4:return t=e.sent,localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),k.defaults.headers.Authorization=null,e.abrupt("return",t);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"System liczenia frekwencji"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{to:"./login"},"Logowanie")))))}}]),a}(n.Component),C=a(74),j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={type:n.props.selectedChart,data:{labels:e.labels,datasets:[{label:"Liczba os\xf3b",fill:!0,backgroundColor:"rgba(220,20,60,0.4)",borderColor:"rgba(220,20,60,1)",borderDashOffset:0,pointBackgroundColor:"#fff",pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"#000",pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:5,data:e.numbers}]},options:{scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0,suggestedMax:100}}]},responsive:!0}},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(C.a,{data:this.state.data,options:this.state.options,redraw:!0}))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({selectedChart:e.target.value,typeOfChart:e.target.id})},n.handleSubmit=function(){n.props.selectChart(n.state.typeOfChart),n.setState({activeChart:n.state.selectedChart})},n.state={selectedChart:null,typeOfChart:"today",activeChart:"dzisiaj"},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"list-group"},r.a.createElement("div",{className:"card text-white bg-primary mb-3"},r.a.createElement("div",{className:"card-header"},"Statystyki z ",this.state.activeChart)),r.a.createElement("button",{id:"today",value:"dzisiaj",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z dzisiaj"),r.a.createElement("button",{id:"yesterday",value:"wczoraj",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z wczoraj"),r.a.createElement("button",{id:"week",value:"tygodnia",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z tygodnia"),r.a.createElement("button",{id:"month",value:"miesi\u0105ca",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z miesi\u0105ca"),r.a.createElement("button",{id:"year",value:"roku",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z roku"),r.a.createElement("button",{id:"all",value:"ca\u0142ego okresu",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z ca\u0142ego okresu"),r.a.createElement("button",{id:"unstandardized",value:"okersu niestandardowego",onClick:this.handleSubmit,onMouseEnter:this.handleChange,className:"list-group-item list-group-item-action"},"Statystyki z okresu niestandardowego"))}}]),a}(n.Component),S=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleDateChange=function(e){n.setState({selectedChart:e})},n.setDateChange=function(){n.props.onDateChange("date1","date2")},n.state={firstDate:null,secondDate:null},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-6 input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect01"},"Do:")),r.a.createElement("input",{type:"date"})),r.a.createElement("div",{className:"col-6 input-group"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect02"},"Do:")),r.a.createElement("input",{type:"date"})))}}]),a}(n.Component),O=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onChartSelect=function(e){n.setState({selectedChart:e})},n.onDateChange=function(e,t){n.setState({earlyDate:e,lateDate:t})},n.state={selectedChart:"today",earlyDate:null,lateDate:null},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-3"},r.a.createElement(N,{chartType:this.state.chartType,selectChart:this.onChartSelect})),r.a.createElement("div",{className:"col-8"},r.a.createElement("div",{className:"row"},r.a.createElement(S,null)),r.a.createElement("br",null),r.a.createElement(j,{labels:this.props.labels,numbers:this.props.numbers,selectedChart:this.props.selectedChart,onDateChange:this.onDateChange}))))}}]),a}(n.Component),z=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={connectionCharacter:"Poprawnie",camera1Character:"Niepoprawnie",camera2Character:"Niepoprawnie",routerConnectionCharacter:"W trakcie testu"},n}return Object(c.a)(a,[{key:"checkSystem",value:function(){E.a.post("URL",{data1:"Data1",data2:"Data2"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"printCharacter",value:function(e){return""}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("h4",null,"Diagnostyka systemu"),r.a.createElement("button",{onClick:this.checkSystem,type:"button",className:"btn btn-info"},"Rozpocznij test")),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie z serwerem",r.a.createElement("span",{className:"badge badge-success badge-pill"},this.state.connectionCharacter)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie z routerem",r.a.createElement("span",{className:"badge badge-warning badge-pill"},this.state.routerConnectionCharacter)),r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie serwera z kamer\u0105 [nazwa kamery 1]",r.a.createElement("span",{className:"badge badge-danger badge-pill"},this.state.camera1Character)))))}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChangeFrom=function(e){n.setState({from:e.target.value})},n.handleChangeTo=function(e){n.setState({from:e.target.value})},n.handleSubmit=function(){},n.state={from:"00:00",to:"00:00",number:"0"},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-md"},r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"col-12 input-group justify-content-center"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect02"},"Od:")),r.a.createElement("input",{type:"time",onChange:this.handleChangeFrom})),r.a.createElement("div",{className:"col-12 input-group justify-content-center"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("label",{className:"input-group-text",htmlFor:"inputGroupSelect02"},"Do:")),r.a.createElement("input",{type:"time",onChange:this.handleChangeTo}))),r.a.createElement("br",null),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("button",{type:"button",class:"btn btn-primary",onSubmit:this.handleSubmit},"Sprawd\u017a")),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement("div",{className:"alert alert-dismissible alert-info"},r.a.createElement("strong",null,"Liczba os\xf3b wykrytych przez kamer\u0119:"),r.a.createElement("br",null),r.a.createElement("h3",null,this.state.number))),r.a.createElement("hr",null))}}]),a}(n.Component),x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={camera1:!1,camera2:!1},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col"},r.a.createElement(z,null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",null,"Opcje administratora")),r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-primary",type:"button"},"W\u0142acz kamer\u0119")),r.a.createElement("select",{className:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},r.a.createElement("option",{value:"1"},"Kamera 1"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-warning",type:"button"},"Resetuje kamer\u0119")),r.a.createElement("select",{className:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},r.a.createElement("option",{value:"1"},"Kamera 1"))),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-danger",type:"button"},"Wy\u0142\u0105cz kamer\u0119")),r.a.createElement("select",{className:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},r.a.createElement("option",{value:"1"},"Kamera 1"))))))))}}]),a}(n.Component),I=a(31),L=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={email:"",password:""},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleSubmitWThen=n.handleSubmitWThen.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"handleSubmitWThen",value:function(e){e.preventDefault(),k.post("/token/obtain/",{email:this.state.email,password:this.state.password}).then((function(e){k.defaults.headers.Authorization="JWT "+e.data.access,localStorage.setItem("access_token",e.data.access),localStorage.setItem("refresh_token",e.data.refresh)})).catch((function(e){throw e}))}},{key:"handleSubmit",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var a,n,r,l,s,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.post("/token/obtain/",{email:this.state.email,password:this.state.password});case 4:return a=e.sent,k.defaults.headers.Authorization="JWT "+a.data.access,localStorage.setItem("access_token",a.data.access),localStorage.setItem("refresh_token",a.data.refresh),n=localStorage.getItem("access_token"),r=n.split(".")[1],l=window.atob(r),s=JSON.parse(l),o=s.user_email,c=o.split("@")[0],localStorage.setItem("role",c),this.props.onLogIn(!0,c),console.log(c),e.abrupt("return",a);case 20:throw e.prev=20,e.t0=e.catch(1),e.t0;case 23:case"end":return e.stop()}}),e,this,[[1,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Strona w trakcie wystawiania, w razie problem\xf3w prosimy spr\xf3bowa\u0107 p\xf3\u017aniej... (3.1)"),"Login",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Email:",r.a.createElement("input",{name:"email",type:"text",value:this.state.email,onChange:this.handleChange})),r.a.createElement("label",null,"Password:",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),_=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={username:"",password:"",email:"",errors:{}},n.handleChange=n.handleChange.bind(Object(g.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(I.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(b.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,k.post("/user/create/",{username:this.state.username,email:this.state.email,password:this.state.password});case 4:return a=e.sent,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.stack),this.setState({errors:e.t0.response.data});case 12:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,"Signup",r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Username:",r.a.createElement("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange}),this.state.errors.username?this.state.errors.username:null),r.a.createElement("label",null,"Email:",r.a.createElement("input",{name:"email",type:"email",value:this.state.email,onChange:this.handleChange}),this.state.errors.email?this.state.errors.email:null),r.a.createElement("label",null,"Password:",r.a.createElement("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange}),this.state.errors.password?this.state.errors.password:null),r.a.createElement("input",{type:"submit",value:"Submit"})))}}]),a}(n.Component),P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).onLogIn=function(e,t){e?(n.setState({logIn:e,role:t}),console.log(t),console.log(e),n.forceUpdate()):n.setState({logIn:e,role:t})},n.state={logIn:!1,role:"non"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return console.log("RENDER"),r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(w,null),r.a.createElement("div",{className:"row justify-content-around"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"./Projekt-zespolowy/statistics"},r.a.createElement(O,{labels:["Dzie\u0144 1","Dzie\u0144 2","Dzie\u0144 3","Dzie\u0144 4","Dzie\u0144 5","Dzie\u0144 6","Dzie\u0144 7"],numbers:[35,48,60,54,56,83,42],type:"D"})),r.a.createElement(h.a,{path:"./Projekt-zespolowy/diagnostic"},r.a.createElement(z,null)),r.a.createElement(h.a,{path:"./Projekt-zespolowy/portier"},r.a.createElement(D,null)),r.a.createElement(h.a,{path:"./Projekt-zespolowy/administrator"},r.a.createElement(x,null)),r.a.createElement(h.a,{path:"./Projekt-zespolowy/login",render:function(t){t.match;return e.state.logIn?(console.log("Weszlo w true"),"analityk"==e.state.role?(console.log("Analityk"),r.a.createElement(O,{labels:["Dzie\u0144 1","Dzie\u0144 2","Dzie\u0144 3","Dzie\u0144 4","Dzie\u0144 5","Dzie\u0144 6","Dzie\u0144 7"],numbers:[35,48,60,54,56,83,42],type:"D"})):"technik"==e.state.role?(console.log("Diagnostic"),r.a.createElement(z,null)):"portier"==e.state.role?(console.log("Portier"),r.a.createElement(D,null)):void 0):r.a.createElement(L,{onLogIn:e.onLogIn})}}),r.a.createElement(h.a,{path:"/login"},r.a.createElement(L,{onLogIn:this.onLogIn})),r.a.createElement(h.a,{path:"./Projekt-zespolowy/signup"},r.a.createElement(_,null)),r.a.createElement(h.a,{render:function(){return r.a.createElement(L,{onLogIn:e.onLogIn})}})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(195)},81:function(e,t,a){},82:function(e,t,a){}},[[76,1,2]]]);
//# sourceMappingURL=main.01d348de.chunk.js.map