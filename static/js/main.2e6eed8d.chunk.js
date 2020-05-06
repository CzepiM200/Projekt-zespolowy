(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{190:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(67),c=a.n(r),o=(a(77),a(15)),s=a(13),i=(a(78),a(3)),m=a(4),u=a(5),p=a(6),E=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"System liczenia frekwencji"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(o.b,{to:"./statistics"},"Analityka"),l.a.createElement("span",{className:"sr-only"},"(current)")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"./diagnostic"},"Diagnostyka")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"./portier"},"Portier")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(o.b,{to:"./administrator"},"Administrator")))))}}]),a}(n.Component),d=a(70),b=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={type:"D",data:{labels:e.labels,datasets:[{label:"Liczba os\xf3b",fill:!0,backgroundColor:"rgba(220,20,60,0.4)",borderColor:"rgba(220,20,60,1)",borderDashOffset:0,pointBackgroundColor:"#fff",pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"#000",pointHoverBorderWidth:2,pointRadius:4,pointHitRadius:5,data:e.numbers}]},options:{scales:{yAxes:[{display:!0,ticks:{beginAtZero:!0,suggestedMax:100}}]},responsive:!0}},n}return Object(m.a)(a,[{key:"render",value:function(){return console.log(this.state.data),l.a.createElement("div",null,l.a.createElement(d.a,{data:this.state.data,options:this.state.options,redraw:!0}))}}]),a}(n.Component),v=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"list-group"},l.a.createElement("a",{href:"/today",class:"list-group-item list-group-item-action active disabled"},"Statystyki z wybranego okresu:"),l.a.createElement("a",{href:"/tomorrow",class:"list-group-item list-group-item-action"},"Statystyki z dzisiaj"),l.a.createElement("a",{href:"/yesterday",class:"list-group-item list-group-item-action"},"Statystyki z wczoraj"),l.a.createElement("a",{href:"/week",class:"list-group-item list-group-item-action"},"Statystyki z tygodnia"),l.a.createElement("a",{href:"/month",class:"list-group-item list-group-item-action"},"Statystyki z miesi\u0105ca"),l.a.createElement("a",{href:"/year",class:"list-group-item list-group-item-action"},"Statystyki z roku"),l.a.createElement("a",{href:"/all",class:"list-group-item list-group-item-action"},"Statystyki z ca\u0142ego okresu"),l.a.createElement("a",{href:"/unstandard",class:"list-group-item list-group-item-action"},"Statystyki z okresu niestandardowego"))}}]),a}(n.Component),h=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement("div",{className:"col-3"},l.a.createElement(v,null)),l.a.createElement("div",{className:"col-8"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-6 input-group"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect01"},"Od:")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Dzie\u0144"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Miesi\u0105c"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Rok"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three"))),l.a.createElement("div",{className:"col-6 input-group"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("label",{class:"input-group-text",for:"inputGroupSelect01"},"Do:")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Dzie\u0144"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Miesi\u0105c"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")),l.a.createElement("select",{className:"custom-select"},l.a.createElement("option",{selected:""},"Rok"),l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three")))),l.a.createElement("br",null),l.a.createElement(b,{labels:this.props.labels,numbers:this.props.numbers,type:this.props.type}))))}}]),a}(n.Component),g=a(37),y=a.n(g),f=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={connectionCharacter:"Poprawnie",camera1Character:"Niepoprawnie",camera2Character:"Niepoprawnie",routerConnectionCharacter:"W trakcie testu"},n}return Object(m.a)(a,[{key:"checkSystem",value:function(){y.a.post("URL",{data1:"Data1",data2:"Data2"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}},{key:"printCharacter",value:function(e){return""}},{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-12"},l.a.createElement("ul",{class:"list-group"},l.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},l.a.createElement("h4",null,"Diagnostyka systemu"),l.a.createElement("button",{onClick:this.checkSystem,type:"button",class:"btn btn-info"},"Rozpocznij test")),l.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie z serwerem",l.a.createElement("span",{class:"badge badge-success badge-pill"},this.state.connectionCharacter)),l.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie z routerem",l.a.createElement("span",{class:"badge badge-warning badge-pill"},this.state.routerConnectionCharacter)),l.a.createElement("li",{class:"list-group-item d-flex justify-content-between align-items-center"},"Po\u0142\u0105czenie serwera z kamer\u0105 [nazwa kamery 1]",l.a.createElement("span",{class:"badge badge-danger badge-pill"},this.state.camera1Character)))))}}]),a}(n.Component),w=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={frequencyInMinutes:1},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement("div",{className:"col-4"},l.a.createElement("table",{class:"table"},l.a.createElement("thead",{class:"thead-dark"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Godzina"),l.a.createElement("th",{scope:"col"},"Liczba os\xf3b wchodz\u0105cych"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"0:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"1:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"2:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"3:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"4:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"5:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"6:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"7:00"),l.a.createElement("td",null,"0")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"8:00"),l.a.createElement("td",null,"3")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"9:00"),l.a.createElement("td",null,"5")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"10:00"),l.a.createElement("td",null,"9"))))),l.a.createElement("div",{className:"col-4"},l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement("form",null,l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleSelect2"},"Co ile minut liczba go\u015bci ma by\u0107 aktualizowana?"),l.a.createElement("select",{multiple:"",class:"form-control",id:"exampleSelect2"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"),l.a.createElement("option",null,"15"),l.a.createElement("option",null,"30"),l.a.createElement("option",null,"60"))))),l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement("div",{class:"alert alert-dismissible alert-info"},l.a.createElement("strong",null,"Aktualna liczna zwiedzaj\u0105cych:"),l.a.createElement("br",null),l.a.createElement("h3",null,"17"))))))}}]),a}(n.Component),k=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={camera1:!1,camera2:!1},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"col"},l.a.createElement(f,null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{class:"card mb-3"},l.a.createElement("div",{class:"card-header"},l.a.createElement("h4",null,"Opcje administratora")),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("button",{class:"btn btn-primary",type:"button"},"W\u0142acz kamer\u0119")),l.a.createElement("select",{class:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},l.a.createElement("option",{value:"1"},"Kamera 1"))),l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("button",{class:"btn btn-warning",type:"button"},"Resetuje kamer\u0119")),l.a.createElement("select",{class:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},l.a.createElement("option",{value:"1"},"Kamera 1"))),l.a.createElement("div",{class:"input-group mb-3"},l.a.createElement("div",{class:"input-group-prepend"},l.a.createElement("button",{class:"btn btn-danger",type:"button"},"Wy\u0142\u0105cz kamer\u0119")),l.a.createElement("select",{class:"custom-select",id:"inputGroupSelect03","aria-label":"Example select with button addon"},l.a.createElement("option",{value:"1"},"Kamera 1"))))))))}}]),a}(n.Component),j="http://localhost:3000/";var N=function(){return l.a.createElement("div",null,l.a.createElement(o.a,null,l.a.createElement(E,null),l.a.createElement("div",{className:"row justify-content-around"},l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/statistics"},l.a.createElement(h,{url:j,labels:["Dzie\u0144 1","Dzie\u0144 2","Dzie\u0144 3","Dzie\u0144 4","Dzie\u0144 5","Dzie\u0144 6","Dzie\u0144 7"],numbers:[35,48,60,54,56,83,42],type:"D"})),l.a.createElement(s.a,{path:"/diagnostic"},l.a.createElement(f,{url:j})),l.a.createElement(s.a,{path:"/portier"},l.a.createElement(w,{url:j})),l.a.createElement(s.a,{path:"/administrator"},l.a.createElement(k,{url:j}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(190)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.2e6eed8d.chunk.js.map