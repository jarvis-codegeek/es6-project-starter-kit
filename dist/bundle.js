(()=>{var e={393:e=>{e.exports={heading:"Welcome",calculations:(e,t,i)=>"html"===i?alert(e+t):e+t,multiplication:(e,t)=>alert(e*t),division:(e,t)=>alert(e/t),Rectangle:class{calc(e,t){return alert(e*t)}}}}},t={};function i(l){if(t[l])return t[l].exports;var n=t[l]={exports:{}};return e[l](n,n.exports,i),n.exports}(()=>{"use strict";var e=i(393);let t=(0,e.calculations)(4,8,"jsfile");document.getElementById("heading").innerHTML=e.heading,window.calculations=e.calculations,window.multi=e.multiplication,window.division=e.division;let l=new e.Rectangle;window.rectangleCalc=l.calc,console.log(t)})()})();