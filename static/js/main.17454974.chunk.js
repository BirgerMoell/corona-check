(this["webpackJsonpcorona-diagnosis-test"]=this["webpackJsonpcorona-diagnosis-test"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),l=a.n(s),c=(a(30),a(9),a(8)),o=a(5);var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Corona Map"),r.a.createElement("iframe",{title:"Corona Map",src:"https://www.google.com/maps/d/embed?mid=1TMOByi-En0vrRnxSiI3GqAh9rOaPe-zo",width:"80%",height:"800px"})))};var m=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"Check-header"},r.a.createElement("p",null,"Check Symptoms"),r.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfaGZObLVHKC7FfOnRM8kA8klKXQU3NA-mgruc-BA0UovDOVQ/viewform?embedded=true",width:"640",height:"2300",frameborder:"0",marginheight:"0",marginwidth:"0"},"Loading\u2026")))},u=a(11),h=a.n(u),d=a(17),p=a(18),E=a(19),v=a(23),f=a(20),g=a(24),w=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={},a.getCoronaVirusData=Object(d.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thevirustracker.com/free-api?global=stats");case 2:return t=e.sent,console.log("the result is",t),e.next=6,t.json();case 6:n=e.sent,console.log("the json result is",n),a.setState({results:n.results[0]});case 9:case"end":return e.stop()}}),e)}))),a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.getCoronaVirusData(),setInterval(this.getCoronaVirusData(),6e4)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"Corona Cases"),this.state.results&&this.state.results.total_cases&&r.a.createElement("div",null,r.a.createElement("h4",null,"Total Cases"),r.a.createElement("hr",null),r.a.createElement("h4",null,this.state.results.total_cases)),this.state.results&&this.state.results.total_deaths&&r.a.createElement("div",null,r.a.createElement("h4",null,"Total Deaths"),r.a.createElement("hr",null),r.a.createElement("h4",null,this.state.results.total_deaths)),this.state.results&&this.state.results.total_new_cases_today&&r.a.createElement("div",null,r.a.createElement("h4",null,"Total New Cases Today"),r.a.createElement("hr",null),r.a.createElement("h4",null,this.state.results.total_new_cases_today))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement((function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement("nav",{className:"Nav-header"},r.a.createElement("div",{className:"Nav-item"},r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("div",{className:"Nav-item"},r.a.createElement(c.b,{to:"/Check"},"Check Symptoms")),r.a.createElement("div",{className:"Nav-item"},r.a.createElement(c.b,{to:"/Map"},"Map"))),r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/map"},r.a.createElement(i,null)),r.a.createElement(o.a,{path:"/check"},r.a.createElement(m,null)),r.a.createElement(o.a,{path:"/"},r.a.createElement(w,null)))))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){}},[[25,1,2]]]);
//# sourceMappingURL=main.17454974.chunk.js.map