const miModulo=(()=>{"use strict";let d=[],e=["C","D","H","S"],f=["A","J","Q","K"],g=[],h=[0,0],a=document.querySelector("#btnPedir"),b=document.querySelector("#btnDetener"),c=document.querySelector("#btnNuevo"),i=document.querySelectorAll(".divCartas"),j=document.querySelectorAll("small"),k=document.querySelectorAll("b"),l=(e=2)=>{d=m(),g=[];for(let c=0;c<e;c++)g.push(0);j.forEach(a=>a.innerText=0),i.forEach(a=>a.innerHTML=""),a.disabled=!1,b.disabled=!1},m=()=>{d=[];for(let a=2;a<=10;a++)for(let b of e)d.push(a+b);for(let c of e)for(let g of f)d.push(g+c);return _.shuffle(d)},n=()=>{if(0===d.length)throw"No hay cartas en el deck";return d.pop()},o=b=>{let a=b.substring(0,b.length-1);return isNaN(a)?"A"===a?11:10:1*a},p=(b,a)=>(g[a]=g[a]+o(b),j[a].innerText=g[a],g[a]),q=(b,c)=>{let a=document.createElement("img");a.src=`assets/cartas/${b}.png`,a.classList.add("carta"),i[c].append(a)},r=()=>{let[a,b]=g;setTimeout(()=>{b===a?alert("Empate"):a>21?(h[1]++,k[1].innerText=h[1],alert("Computadora gana")):b>21?(h[0]++,k[0].innerText=h[0],alert("Jugador gana")):(h[1]++,k[1].innerText=h[1],alert("Computadora gana"))},300)},s=a=>{let b=0;do{let c=n();b=p(c,g.length-1),q(c,g.length-1)}while(b<a&&a<=21)r()};a.addEventListener("click",()=>{let d=n(),c=p(d,0);q(d,0),c>21?(console.warn("Perdiste"),a.disabled=!0,b.disabled=!0,s(c)):21===c&&(console.warn("Genial!"),a.disabled=!0,b.disabled=!0,s(c))}),b.addEventListener("click",()=>{a.disabled=!0,b.disabled=!0,s(g[0])}),c.addEventListener("click",()=>{l()})})()