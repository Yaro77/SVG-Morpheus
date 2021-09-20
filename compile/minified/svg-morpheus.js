/*! SVG Morpheus v0.3.2 License: MIT */!function(){"use strict";var u={"circ-in":function(t){return-1*(Math.sqrt(1-t*t)-1)},"circ-out":function(t){return Math.sqrt(1-(t-=1)*t)},"circ-in-out":function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},"cubic-in":function(t){return t*t*t},"cubic-out":function(t){return--t*t*t+1},"cubic-in-out":function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},"elastic-in":function(t){var e=1.70158,a=0,o=1;return 0==t?0:1==t?1:(a=a||.3,e=o<Math.abs(1)?(o=1,a/4):a/(2*Math.PI)*Math.asin(1/o),-(o*Math.pow(2,10*--t)*Math.sin((t-e)*(2*Math.PI)/a)))},"elastic-out":function(t){var e=1.70158,a=0,o=1;return 0==t?0:1==t?1:(a=a||.3,e=o<Math.abs(1)?(o=1,a/4):a/(2*Math.PI)*Math.asin(1/o),o*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/a)+1)},"elastic-in-out":function(t){var e=1.70158,a=0,o=1;return 0==t?0:2==(t/=.5)?1:(a=a||.3*1.5*1,e=o<Math.abs(1)?(o=1,a/4):a/(2*Math.PI)*Math.asin(1/o),t<1?o*Math.pow(2,10*--t)*Math.sin((t-e)*(2*Math.PI)/a)*-.5:o*Math.pow(2,-10*--t)*Math.sin((t-e)*(2*Math.PI)/a)*.5+1)},"expo-in":function(t){return 0==t?0:Math.pow(2,10*(t-1))},"expo-out":function(t){return 1==t?1:1-Math.pow(2,-10*t)},"expo-in-out":function(t){return 0==t?0:1==t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},linear:function(t){return t},"quad-in":function(t){return t*t},"quad-out":function(t){return t*(2-t)},"quad-in-out":function(t){return t<.5?2*t*t:(4-2*t)*t-1},"quart-in":function(t){return t*t*t*t},"quart-out":function(t){return 1- --t*t*t*t},"quart-in-out":function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},"quint-in":function(t){return t*t*t*t*t},"quint-out":function(t){return 1+--t*t*t*t*t},"quint-in-out":function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t},"sine-in":function(t){return 1-Math.cos(t*(Math.PI/2))},"sine-out":function(t){return Math.sin(t*(Math.PI/2))},"sine-in-out":function(t){return.5*(1-Math.cos(Math.PI*t))}},r=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.oRequestAnimationFrame,o=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.oCancelAnimationFrame;function l(t,e,a){var o,r={};for(o in t)switch(o){case"fill":case"stroke":r[o]=m(t[o]),r[o].r=t[o].r+(e[o].r-t[o].r)*a,r[o].g=t[o].g+(e[o].g-t[o].g)*a,r[o].b=t[o].b+(e[o].b-t[o].b)*a,r[o].opacity=t[o].opacity+(e[o].opacity-t[o].opacity)*a;break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":r[o]=t[o]+(e[o]-t[o])*a;break;case"stroke-linecap":case"stroke-linejoin":r[o]=e[o]}return r}function p(t){var e,a,o,r={};for(e in t)switch(e){case"fill":case"stroke":r[e]=(a=t[e],o=void 0,"rgba("+[(o=Math.round)(a.r),o(a.g),o(a.b),+a.opacity.toFixed(2)]+")");break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":case"stroke-linecap":case"stroke-linejoin":r[e]=t[e]}return r}function f(t,e){var a,o=[{},{}];for(a in t)switch(a){case"fill":case"stroke":o[0][a]=s(t[a]),void 0===e[a]&&(o[1][a]=s(t[a]),o[1][a].opacity=0);break;case"opacity":case"stroke-linecap":case"stroke-linejoin":case"fill-opacity":case"stroke-opacity":case"stroke-width":o[0][a]=t[a],void 0===e[a]&&(o[1][a]=1)}for(a in e)switch(a){case"fill":case"stroke":o[1][a]=s(e[a]),void 0===t[a]&&(o[0][a]=s(e[a]),o[0][a].opacity=0);break;case"opacity":case"fill-opacity":case"stroke-opacity":case"stroke-width":case"stroke-linecap":case"stroke-linejoin":o[1][a]=e[a],void 0===t[a]&&(o[0][a]=1)}return o}function m(t){if(t instanceof Array){for(var e=[],a=0,o=t.length;a<o;a++)e[a]=m(t[a]);return e}if(t instanceof Object){for(var r in e={},t)t.hasOwnProperty(r)&&(e[r]=m(t[r]));return e}return t}function g(t){if(!(t=_(t))||!t.length)return[["M",0,0]];var e,a=[],o=0,r=0,s=0,n=0,i=0;"M"==t[0][0]&&(s=o=+t[0][1],n=r=+t[0][2],i++,a[0]=["M",o,r]);for(var c,h,u=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),l=i,p=t.length;l<p;l++){if(a.push(c=[]),(e=(h=t[l])[0])!=e.toUpperCase())switch(c[0]=e.toUpperCase(),c[0]){case"A":c[1]=h[1],c[2]=h[2],c[3]=h[3],c[4]=h[4],c[5]=h[5],c[6]=+h[6]+o,c[7]=+h[7]+r;break;case"V":c[1]=+h[1]+r;break;case"H":c[1]=+h[1]+o;break;case"R":for(var f=[o,r].concat(h.slice(1)),m=2,d=f.length;m<d;m++)f[m]=+f[m]+o,f[++m]=+f[m]+r;a.pop(),a=a.concat(x(f,u));break;case"O":a.pop(),(f=v(o,r,h[1],h[2])).push(f[0]),a=a.concat(f);break;case"U":a.pop(),a=a.concat(v(o,r,h[1],h[2],h[3])),c=["U"].concat(a[a.length-1].slice(-2));break;case"M":s=+h[1]+o,n=+h[2]+r;default:for(m=1,d=h.length;m<d;m++)c[m]=+h[m]+(m%2?o:r)}else if("R"==e)f=[o,r].concat(h.slice(1)),a.pop(),a=a.concat(x(f,u)),c=["R"].concat(h.slice(-2));else if("O"==e)a.pop(),(f=v(o,r,h[1],h[2])).push(f[0]),a=a.concat(f);else if("U"==e)a.pop(),a=a.concat(v(o,r,h[1],h[2],h[3])),c=["U"].concat(a[a.length-1].slice(-2));else for(var y=0,I=h.length;y<I;y++)c[y]=h[y];if("O"!=(e=e.toUpperCase()))switch(c[0]){case"Z":o=+s,r=+n;break;case"H":o=c[1];break;case"V":r=c[1];break;case"M":s=c[c.length-2],n=c[c.length-1];default:o=c[c.length-2],r=c[c.length-1]}}return a}function M(t,e,a,o){return[t,e,a,o,a,o]}function b(t,e,a,o,r,s){return[1/3*t+2/3*a,1/3*e+2/3*o,1/3*r+2/3*a,1/3*s+2/3*o,r,s]}function d(t,e){for(var s=g(t),n=e&&g(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},r=function(t,e,a){var o,r;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(t[0]in{T:1,Q:1}||(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"].concat(k.apply(0,[e.x,e.y].concat(t.slice(1))));break;case"S":r="C"==a||"S"==a?(o=2*e.x-e.bx,2*e.y-e.by):(o=e.x,e.y),t=["C",o,r].concat(t.slice(1));break;case"T":"Q"==a||"T"==a?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"].concat(b(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"].concat(b(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"].concat(M(e.x,e.y,t[1],t[2]));break;case"H":t=["C"].concat(M(e.x,e.y,t[1],e.y));break;case"V":t=["C"].concat(M(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"].concat(M(e.x,e.y,e.X,e.Y))}return t},i=function(t,e){if(7<t[e].length){t[e].shift();for(var a=t[e];a.length;)h[e]="A",n&&(u[e]="A"),t.splice(e++,0,["C"].concat(a.splice(0,6)));t.splice(e,1),m=Math.max(s.length,n&&n.length||0)}},c=function(t,e,a,o,r){t&&e&&"M"==t[r][0]&&"M"!=e[r][0]&&(e.splice(r,0,["M",o.x,o.y]),a.bx=0,a.by=0,a.x=t[r][1],a.y=t[r][2],m=Math.max(s.length,n&&n.length||0))},h=[],u=[],l="",p="",f=0,m=Math.max(s.length,n&&n.length||0);f<m;f++){"C"!=(l=s[f]?s[f][0]:l)&&(h[f]=l,f&&(p=h[f-1])),s[f]=r(s[f],a,p),"A"!=h[f]&&"C"==l&&(h[f]="C"),i(s,f),n&&("C"!=(l=n[f]?n[f][0]:l)&&(u[f]=l,f&&(p=u[f-1])),n[f]=r(n[f],o,p),"A"!=u[f]&&"C"==l&&(u[f]="C"),i(n,f)),c(s,n,a,o,f),c(n,s,o,a,f);var d=s[f],y=n&&n[f],I=d.length,_=n&&y.length;a.x=d[I-2],a.y=d[I-1],a.bx=parseFloat(d[I-4])||a.x,a.by=parseFloat(d[I-3])||a.y,o.bx=n&&(parseFloat(y[_-4])||o.x),o.by=n&&(parseFloat(y[_-3])||o.y),o.x=n&&y[_-2],o.y=n&&y[_-1]}return n?[s,n]:s}function y(t){for(var e,a,o=0,r=0,s=[],n=[],i=0,c=t.length;i<c;i++)"M"==(a=t[i])[0]?(o=a[1],r=a[2],s.push(o),n.push(r)):(e=function(t,e,a,o,r,s,n,i){for(var c,h,u,l,p,f=[],m=[[],[]],d=0;d<2;++d)p=0==d?(h=6*t-12*a+6*r,c=-3*t+9*a-9*r+3*n,3*a-3*t):(h=6*e-12*o+6*s,c=-3*e+9*o-9*s+3*i,3*o-3*e),Math.abs(c)<1e-12?Math.abs(h)<1e-12||0<(u=-p/h)&&u<1&&f.push(u):(l=h*h-4*p*c,p=Math.sqrt(l),l<0||(0<(l=(-h+p)/(2*c))&&l<1&&f.push(l),0<(p=(-h-p)/(2*c))&&p<1&&f.push(p)));for(var y,I=f.length,_=I;I--;)u=f[I],m[0][I]=(y=1-u)*y*y*t+3*y*y*u*a+3*y*u*u*r+u*u*u*n,m[1][I]=y*y*y*e+3*y*y*u*o+3*y*u*u*s+u*u*u*i;return m[0][_]=t,m[1][_]=e,m[0][_+1]=n,m[1][_+1]=i,m[0].length=m[1].length=_+2,{min:{x:Math.min.apply(0,m[0]),y:Math.min.apply(0,m[1])},max:{x:Math.max.apply(0,m[0]),y:Math.max.apply(0,m[1])}}}(o,r,a[1],a[2],a[3],a[4],a[5],a[6]),s=s.concat(e.min.x,e.max.x),n=n.concat(e.min.y,e.max.y),o=a[5],r=a[6]);var h=Math.min.apply(0,s),u=Math.min.apply(0,n),l=Math.max.apply(0,s),p=Math.max.apply(0,n);return h=l-(l=h),u=p-(p=u),null==l&&(l=p=h=u=0),null==p&&(p=l.y,h=l.width,u=l.height,l=l.x),{x:l,y:p,w:h,h:u,cx:l+h/2,cy:p+u/2}}function i(t,e,a,o){return{r:t=Math.round(255*t),g:e=Math.round(255*e),b:a=Math.round(255*a),opacity:isFinite(o)?o:1}}function s(t){if(!t||(t=String(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,opacity:-1,error:1};if("none"==t)return{r:-1,g:-1,b:-1,opacity:-1};if(!(t=!h[w](t.toLowerCase().substring(0,2))&&"#"!=t.charAt()?N(t):t))return{r:-1,g:-1,b:-1,opacity:-1,error:1};var e,a,o,r,s,n=t.match(A);return n?(n[2]&&(o=parseInt(n[2].substring(5),16),a=parseInt(n[2].substring(3,5),16),e=parseInt(n[2].substring(1,3),16)),n[3]&&(o=parseInt((t=n[3].charAt(3))+t,16),a=parseInt((t=n[3].charAt(2))+t,16),e=parseInt((t=n[3].charAt(1))+t,16)),n[4]&&(s=n[4].split(C),e=parseFloat(s[0]),"%"==s[0].slice(-1)&&(e*=2.55),a=parseFloat(s[1]),"%"==s[1].slice(-1)&&(a*=2.55),o=parseFloat(s[2]),"%"==s[2].slice(-1)&&(o*=2.55),"rgba"==n[1].toLowerCase().slice(0,4)&&(r=parseFloat(s[3])),s[3]&&"%"==s[3].slice(-1)&&(r/=100)),n[5]?(s=n[5].split(C),e=parseFloat(s[0]),"%"==s[0].slice(-1)&&(e/=100),a=parseFloat(s[1]),"%"==s[1].slice(-1)&&(a/=100),o=parseFloat(s[2]),"%"==s[2].slice(-1)&&(o/=100),"deg"!=s[0].slice(-3)&&"°"!=s[0].slice(-1)||(e/=360),"hsba"==n[1].toLowerCase().slice(0,4)&&(r=parseFloat(s[3])),s[3]&&"%"==s[3].slice(-1)&&(r/=100),q(e,a,o,r)):n[6]?(s=n[6].split(C),e=parseFloat(s[0]),"%"==s[0].slice(-1)&&(e/=100),a=parseFloat(s[1]),"%"==s[1].slice(-1)&&(a/=100),o=parseFloat(s[2]),"%"==s[2].slice(-1)&&(o/=100),"deg"!=s[0].slice(-3)&&"°"!=s[0].slice(-1)||(e/=360),"hsla"==n[1].toLowerCase().slice(0,4)&&(r=parseFloat(s[3])),s[3]&&"%"==s[3].slice(-1)&&(r/=100),P(e,a,o,r)):(e=Math.min(Math.round(e),255),a=Math.min(Math.round(a),255),o=Math.min(Math.round(o),255),r=Math.min(Math.max(r,0),1),(n={r:e,g:a,b:o}).opacity=isFinite(r)?r:1,n)):{r:-1,g:-1,b:-1,opacity:-1,error:1}}var t="\t\n\v\f\r   ᠎             　\u2028\u2029",e=new RegExp("([a-z])["+t+",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?["+t+"]*,?["+t+"]*)+)","ig"),c=new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)["+t+"]*,?["+t+"]*","ig"),_=function(t){if(!t)return null;if(typeof t==typeof[])return t;var s={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},n=[];return String(t).replace(e,function(t,e,a){var o=[],r=e.toLowerCase();if(a.replace(c,function(t,e){e&&o.push(+e)}),"m"==r&&2<o.length&&(n.push([e].concat(o.splice(0,2))),r="l",e="m"==e?"l":"L"),"o"==r&&1==o.length&&n.push([e,o[0]]),"r"==r)n.push([e].concat(o));else for(;o.length>=s[r]&&(n.push([e].concat(o.splice(0,s[r]))),s[r]););}),n},x=function(t,e){for(var a=[],o=0,r=t.length;o<r-2*!e;o+=2){var s=[{x:+t[o-2],y:+t[o-1]},{x:+t[o],y:+t[o+1]},{x:+t[o+2],y:+t[o+3]},{x:+t[o+4],y:+t[o+5]}];e?o?r-4==o?s[3]={x:+t[0],y:+t[1]}:r-2==o&&(s[2]={x:+t[0],y:+t[1]},s[3]={x:+t[2],y:+t[3]}):s[0]={x:+t[r-2],y:+t[r-1]}:r-4==o?s[3]=s[2]:o||(s[0]={x:+t[o],y:+t[o+1]}),a.push(["C",(-s[0].x+6*s[1].x+s[2].x)/6,(-s[0].y+6*s[1].y+s[2].y)/6,(s[1].x+6*s[2].x-s[3].x)/6,(s[1].y+6*s[2].y-s[3].y)/6,s[2].x,s[2].y])}return a},v=function(t,e,a,o,r){var s,n,i;return null==r&&null==o&&(o=a),t=+t,e=+e,a=+a,o=+o,null!=r?(s=Math.PI/180,n=t+a*Math.cos(-o*s),i=t+a*Math.cos(-r*s),[["M",n,e+a*Math.sin(-o*s)],["A",a,a,0,+(180<r-o),0,i,e+a*Math.sin(-r*s)]]):[["M",t,e],["m",0,-o],["a",a,o,0,1,1,0,2*o],["a",a,o,0,1,1,0,-2*o],["z"]]},k=function(t,e,a,o,r,s,n,i,c,h){function u(t,e,a){return{x:t*Math.cos(a)-e*Math.sin(a),y:t*Math.sin(a)+e*Math.cos(a)}}var l=120*Math.PI/180,p=Math.PI/180*(+r||0),f=[];h?(M=h[0],b=h[1],_=h[2],g=h[3]):(t=(d=u(t,e,-p)).x,e=d.y,i=(d=u(i,c,-p)).x,c=d.y,Math.cos(Math.PI/180*r),Math.sin(Math.PI/180*r),1<(I=(y=(t-i)/2)*y/(a*a)+(m=(e-c)/2)*m/(o*o))&&(a*=I=Math.sqrt(I),o*=I),d=a*a,I=o*o,_=(d=(s==n?-1:1)*Math.sqrt(Math.abs((d*I-d*m*m-I*y*y)/(d*m*m+I*y*y))))*a*m/o+(t+i)/2,g=d*-o*y/a+(e+c)/2,M=Math.asin(((e-g)/o).toFixed(9)),b=Math.asin(((c-g)/o).toFixed(9)),M=t<_?Math.PI-M:M,b=i<_?Math.PI-b:b,M<0&&(M=2*Math.PI+M),b<0&&(b=2*Math.PI+b),n&&b<M&&(M-=2*Math.PI),!n&&M<b&&(b-=2*Math.PI));var m,d,y,I=b-M;Math.abs(I)>l&&(m=b,d=i,y=c,b=M+l*(n&&M<b?1:-1),i=_+a*Math.cos(b),c=g+o*Math.sin(b),f=k(i,c,a,o,r,0,n,d,y,[b,m,_,g]));var I=b-M,_=Math.cos(M),g=Math.sin(M),M=Math.cos(b),b=Math.sin(b),I=Math.tan(I/4),a=4/3*a*I,o=4/3*o*I,I=[t,e],_=[t+a*g,e-o*_],M=[i+a*b,c-o*M],c=[i,c];if(_[0]=2*I[0]-_[0],_[1]=2*I[1]-_[1],h)return[_,M,c].concat(f);for(var x=[],v=0,w=(f=[_,M,c].concat(f).join().split(",")).length;v<w;v++)x[v]=v%2?u(f[v-1],f[v],p).y:u(f[v],f[v+1],p).x;return x},I=/,?([a-z]),?/gi,h={hs:1,rg:1},w="hasOwnProperty",A=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,C=new RegExp("["+t+"]*,["+t+"]*"),N=function(t){var e=window.document.getElementsByTagName("head")[0]||window.document.getElementsByTagName("svg")[0],a="rgb(255, 0, 0)";return(N=function(t){if("red"==t.toLowerCase())return a;e.style.color=a,e.style.color=t;t=window.document.defaultView.getComputedStyle(e,"").getPropertyValue("color");return t==a?null:t})(t)},q=function(t,e,a,o){var r,s,n;return typeof t==typeof{}&&"h"in t&&"s"in t&&"b"in t&&(a=t.b,e=t.s,o=(t=t.h).o),t=(t*=360)%360/60,s=(n=a*e)*(1-Math.abs(t%2-1)),a=e=r=a-n,i(a+=[n,s,0,0,s,n][t=~~t],e+=[s,n,n,s,0,0][t],r+=[0,0,s,n,n,s][t],o)},P=function(t,e,a,o){var r,s,n;return typeof t==typeof{}&&"h"in t&&"s"in t&&"l"in t&&(a=t.l,e=t.s,t=t.h),(1<t||1<e||1<a)&&(t/=360,e/=100,a/=100),t=(t*=360)%360/60,s=(n=2*e*(a<.5?a:1-a))*(1-Math.abs(t%2-1)),a=e=r=a-n/2,i(a+=[n,s,0,0,s,n][t=~~t],e+=[s,n,n,s,0,0][t],r+=[0,0,s,n,n,s][t],o)};function a(t,e,a){if(!t)throw new Error('SVGMorpheus > "element" is required');if("string"==typeof t&&!(t=document.querySelector(t)))throw new Error('SVGMorpheus > "element" query is not related to an existing DOM node');if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus > "options" parameter must be an object');if(e=e||{},a&&"function"!=typeof a)throw new Error('SVGMorpheus > "callback" parameter must be a function');var o=this;this._icons={},this._curIconId=e.iconId||"",this._toIconId="",this._curIconItems=[],this._fromIconItems=[],this._toIconItems=[],this._morphNodes=[],this._morphG,this._startTime,this._defDuration=e.duration||750,this._defEasing=e.easing||"quad-in-out",this._defRotation=e.rotation||"clock",this._defCallback=a||function(){},this._duration=this._defDuration,this._easing=this._defEasing,this._rotation=this._defRotation,this._callback=this._defCallback,this._rafid,this._fnTick=function(t){o._startTime||(o._startTime=t);t=Math.min((t-o._startTime)/o._duration,1);o._updateAnimationProgress(t),t<1?o._rafid=r(o._fnTick):""!=o._toIconId&&o._animationEnd()},"SVG"===t.nodeName.toUpperCase()?this._svgDoc=t:this._svgDoc=t.getSVGDocument(),this._svgDoc?o._init():t.addEventListener("load",function(){o._svgDoc=t.getSVGDocument(),o._init()},!1)}a.prototype._init=function(){if("SVG"!==this._svgDoc.nodeName.toUpperCase()&&(this._svgDoc=this._svgDoc.getElementsByTagName("svg")[0]),this._svgDoc){for(var t,e,a,o,r="",s=this._svgDoc.childNodes.length-1;0<=s;s--){var n=this._svgDoc.childNodes[s];if("G"===n.nodeName.toUpperCase()&&(t=n.getAttribute("id"))){for(e=[],a=0,o=n.childNodes.length;a<o;a++){var i=n.childNodes[a],c={path:"",attrs:{},style:{}};switch(i.nodeName.toUpperCase()){case"PATH":c.path=i.getAttribute("d");break;case"CIRCLE":var h=+i.getAttribute("cx"),u=+i.getAttribute("cy"),l=+i.getAttribute("r");c.path="M"+(h-l)+","+u+"a"+l+","+l+" 0 1,0 "+2*l+",0a"+l+","+l+" 0 1,0 -"+2*l+",0z";break;case"ELLIPSE":var h=+i.getAttribute("cx"),u=+i.getAttribute("cy"),p=+i.getAttribute("rx"),f=+i.getAttribute("ry");c.path="M"+(h-p)+","+u+"a"+p+","+f+" 0 1,0 "+2*p+",0a"+p+","+f+" 0 1,0 -"+2*p+",0z";break;case"RECT":var m=+i.getAttribute("x"),d=+i.getAttribute("y"),y=+i.getAttribute("width"),I=+i.getAttribute("height"),p=+i.getAttribute("rx"),f=+i.getAttribute("ry");c.path=p||f?"M"+(m+p)+","+d+"l"+(y-2*p)+",0a"+p+","+f+" 0 0,1 "+p+","+f+"l0,"+(I-2*f)+"a"+p+","+f+" 0 0,1 -"+p+","+f+"l"+(2*p-y)+",0a"+p+","+f+" 0 0,1 -"+p+",-"+f+"l0,"+(2*f-I)+"a"+p+","+f+" 0 0,1 "+p+",-"+f+"z":"M"+m+","+d+"l"+y+",0l0,"+I+"l-"+y+",0z";break;case"POLYGON":for(var _=i.getAttribute("points").split(/\s+/),g="",M=0,b=_.length;M<b;M++)g+=(M?"L":"M")+_[M];c.path=g+"z";break;case"LINE":m=+i.getAttribute("x1"),d=+i.getAttribute("y1"),I=+i.getAttribute("x2"),y=+i.getAttribute("y2");c.path="M"+m+","+d+"L"+I+","+y+"z"}if(""!=c.path){for(var M=0,x=i.attributes.length;M<x;M++){var v=i.attributes[M];if(v.specified){var w=v.name.toLowerCase();switch(w){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":case"stroke-linecap":case"stroke-linejoin":c.attrs[w]=v.value}}}for(var k=0,A=i.style.length;k<A;k++){var C=i.style[k];switch(C){case"fill":case"fill-opacity":case"opacity":case"stroke":case"stroke-opacity":case"stroke-width":case"stroke-linecap":case"stroke-linejoin":c.style[C]=i.style[C]}}e.push(c)}}0<e.length&&(this._icons[t]={id:t,items:e}),this._morphG?this._svgDoc.removeChild(n):(r=t,this._morphG=document.createElementNS("http://www.w3.org/2000/svg","g"),this._svgDoc.replaceChild(this._morphG,n))}}var N=this._curIconId||r;""!==N&&(this._setupAnimation(N),this._updateAnimationProgress(1),this._animationEnd())}},a.prototype._setupAnimation=function(t){if(t&&this._icons[t]){var e;for(this._toIconId=t,this._startTime=void 0,this._fromIconItems=m(this._curIconItems),this._toIconItems=m(this._icons[t].items),n=0,e=this._morphNodes.length;n<e;n++){var a=this._morphNodes[n];a.fromIconItemIdx=n,a.toIconItemIdx=n}for(var o,r,s=Math.max(this._fromIconItems.length,this._toIconItems.length),n=0;n<s;n++)this._fromIconItems[n]||(this._toIconItems[n]?(o=y(d(this._toIconItems[n].path)),this._fromIconItems.push({path:"M"+o.cx+","+o.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,o.cx,o.cy]}})):this._fromIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),this._toIconItems[n]||(this._fromIconItems[n]?(o=y(d(this._fromIconItems[n].path)),this._toIconItems.push({path:"M"+o.cx+","+o.cy+"l0,0",attrs:{},style:{},trans:{rotate:[0,o.cx,o.cy]}})):this._toIconItems.push({path:"M0,0l0,0",attrs:{},style:{},trans:{rotate:[0,0,0]}})),this._morphNodes[n]||(r=document.createElementNS("http://www.w3.org/2000/svg","path"),this._morphG.appendChild(r),this._morphNodes.push({node:r,fromIconItemIdx:n,toIconItemIdx:n}));for(n=0;n<s;n++){var i=this._fromIconItems[n],c=this._toIconItems[n],h=d(this._fromIconItems[n].path,this._toIconItems[n].path);i.curve=h[0],c.curve=h[1];h=f(this._fromIconItems[n].attrs,this._toIconItems[n].attrs);i.attrsNorm=h[0],c.attrsNorm=h[1],i.attrs=p(i.attrsNorm),c.attrs=p(c.attrsNorm);h=f(this._fromIconItems[n].style,this._toIconItems[n].style);i.styleNorm=h[0],c.styleNorm=h[1],i.style=p(i.styleNorm),c.style=p(c.styleNorm),o=y(c.curve),c.trans={rotate:[0,o.cx,o.cy]};var u,h=this._rotation;switch(h="random"===h?Math.random()<.5?"counterclock":"clock":h){case"none":i.trans.rotate&&(c.trans.rotate[0]=i.trans.rotate[0]);break;case"counterclock":i.trans.rotate?(c.trans.rotate[0]=i.trans.rotate[0]-360,u=-i.trans.rotate[0]%360,c.trans.rotate[0]+=u<180?u:u-360):c.trans.rotate[0]=-360;break;default:i.trans.rotate?(c.trans.rotate[0]=i.trans.rotate[0]+360,u=i.trans.rotate[0]%360,c.trans.rotate[0]+=u<180?-u:360-u):c.trans.rotate[0]=360}}this._curIconItems=m(this._fromIconItems)}},a.prototype._updateAnimationProgress=function(t){var e,a,o,r,s,n;for(t=u[this._easing](t),e=0,r=this._curIconItems.length;e<r;e++)this._curIconItems[e].curve=function(t,e,a){for(var o=[],r=0,s=t.length;r<s;r++){o.push([t[r][0]]);for(var n=1,i=t[r].length;n<i;n++)o[r].push(t[r][n]+(e[r][n]-t[r][n])*a)}return o}(this._fromIconItems[e].curve,this._toIconItems[e].curve,t),this._curIconItems[e].path=this._curIconItems[e].curve.join(",").replace(I,"$1"),this._curIconItems[e].attrsNorm=l(this._fromIconItems[e].attrsNorm,this._toIconItems[e].attrsNorm,t),this._curIconItems[e].attrs=p(this._curIconItems[e].attrsNorm),this._curIconItems[e].styleNorm=l(this._fromIconItems[e].styleNorm,this._toIconItems[e].styleNorm,t),this._curIconItems[e].style=p(this._curIconItems[e].styleNorm),this._curIconItems[e].trans=function(t,e,a){var o,r={};for(o in t)if("rotate"===o){r[o]=[0,0,0];for(var s=0;s<3;s++)r[o][s]=t[o][s]+(e[o][s]-t[o][s])*a}return r}(this._fromIconItems[e].trans,this._toIconItems[e].trans,t),this._curIconItems[e].transStr=(s=this._curIconItems[e].trans,void 0,n="",s.rotate&&(n+="rotate("+s.rotate.join(" ")+")"),n);for(e=0,r=this._morphNodes.length;e<r;e++){var i=this._morphNodes[e];i.node.setAttribute("d",this._curIconItems[e].path);var c=this._curIconItems[e].attrs;for(a in c)i.node.setAttribute(a,c[a]);var h=this._curIconItems[e].style;for(o in h)i.node.style[o]=h[o];i.node.setAttribute("transform",this._curIconItems[e].transStr)}},a.prototype._animationEnd=function(){for(var t=this._morphNodes.length-1;0<=t;t--){var e=this._morphNodes[t];this._icons[this._toIconId].items[t]?e.node.setAttribute("d",this._icons[this._toIconId].items[t].path):(e.node.parentNode.removeChild(e.node),this._morphNodes.splice(t,1))}this._curIconId=this._toIconId,this._toIconId="",this._callback()},a.prototype.to=function(t,e,a){if(t!==this._toIconId){if(e&&typeof e!=typeof{})throw new Error('SVGMorpheus.to() > "options" parameter must be an object');if(e=e||{},a&&"function"!=typeof a)throw new Error('SVGMorpheus.to() > "callback" parameter must be a function');o(this._rafid),this._duration=e.duration||this._defDuration,this._easing=e.easing||this._defEasing,this._rotation=e.rotation||this._defRotation,this._callback=a||this._defCallback,this._setupAnimation(t),this._rafid=r(this._fnTick)}},a.prototype.registerEasing=function(t,e){u[t]=e},"function"==typeof define&&define.amd?define(function(){return a}):"undefined"!=typeof module&&void 0!==module.exports?module.exports=a:window.SVGMorpheus=a}();