(this["webpackJsonpreact-timer"]=this["webpackJsonpreact-timer"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),s=a.n(r),m=(a(13),a(14),a(3)),l=a(4),i=a(6),o=a(5),u=a(7);function d(){var e=document.getElementById("time-in-ms").value,t=(e=(e-e%1e3)/1e3)%60,a=(e=(e-t)/60)%60,n=(e-a)/60;n=n<10?"0"+n:n,a=a<10?"0"+a:a,t=t<10?"0"+t:t,document.getElementById("hours").innerHTML=n,document.getElementById("minutes").innerHTML=a,document.getElementById("secondes").innerHTML=t}var p=function(e){function t(){return Object(m.a)(this,t),Object(i.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"inputDivision"},c.a.createElement("label",null,c.a.createElement("h1",null,"Pour commencer merci d'ecrire un nbr en millisecondes")),c.a.createElement("input",{id:"time-in-ms",type:"number",name:"ms",onKeyUp:d})),c.a.createElement("div",{className:"main-container-output"},c.a.createElement("div",{className:"output"},c.a.createElement("div",{className:"output-flex"},c.a.createElement("span",{id:"hours"},"00"),c.a.createElement("span",{className:"date-text"},"Hours")),c.a.createElement("div",{className:"output-flex"},c.a.createElement("span",{id:"hours"},":"),c.a.createElement("span",{className:"date-text"},":")),c.a.createElement("div",{className:"output-flex"},c.a.createElement("span",{id:"minutes"},"00"),c.a.createElement("span",{className:"date-text"},"Minutes")),c.a.createElement("div",{className:"output-flex"},c.a.createElement("span",{id:"hours"},":"),c.a.createElement("span",{className:"date-text"},":")),c.a.createElement("div",{className:"output-flex"},c.a.createElement("span",{id:"secondes"},"00"),c.a.createElement("span",{className:"date-text"},"Secondes")))))}}]),t}(n.Component);var E=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a8e06710.chunk.js.map