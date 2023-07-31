import{Q as m}from"./QBtn.395b63a1.js";import{Q as w}from"./QPage.68464a78.js";import{u as O}from"./todo.4660e996.js";import{R as p,r as U,c as d,x as r,y as n,z as b,C as l,S,U as v,G as q,V as A}from"./index.609b8329.js";import{u as z}from"./settings.33103470.js";import"./QIcon.f07cddf8.js";const B=l("img",{src:"https://tomaful.com/dist/img/index/hull.svg",class:"absolute",style:{top:"24px"}},null,-1),G={class:"col-12 text-center"},H={__name:"HomePage",setup(Q){const h=O(),{items:c,currentItem:a,timeLeft:u}=p(h),{countdown:T,setCurrentItem:x,setFinishItem:_}=h,k=z(),{selectedAlarmFile:y}=p(k),e={STOP:0,COUNTING:1,PAUSE:2},s=U(e.STOP);let i=0;const f=()=>{s.value===e.STOP&&c.value.length>0&&x(),a.value.length!==0&&(s.value=e.COUNTING,i=setInterval(()=>{T(),u.value===0&&g()},1e3))},C=()=>{s.value=e.PAUSE,clearInterval(i)},g=()=>{clearInterval(i),s.value=e.STOP;const t=new Audio;t.src=y.value,t.play(),_(),c.value.length>0&&f()},N=d(()=>a.value.length>0?a.value:c.value.length>0?"Press Start":"No Task Left"),I=d(()=>{const t=Math.floor(u.value/60).toString().padStart(2,"0"),o=(u.value%60).toString().padStart(2,"0");return t+":"+o}),P=d(()=>{const t=`
  height: 70vh;
  width: 70vh;
  border-radius:50%;
  background-color:#cc3736;
  `,o=`
  height: 70vh;
  width: 70vh;
  border-radius:50%;
  background-color:#f9bf45;
  `;return a.value.length>0?t:o});return(t,o)=>(r(),n(w,{class:"q-pa-xl flex flex-center"},{default:b(()=>[B,l("div",{class:"row text-white flex-center q-pa-xl q-mt-xl",style:A(P.value)},[l("div",G,[l("h1",null,S(N.value),1),l("h2",null,S(I.value),1),s.value!==e.COUNTING?(r(),n(m,{key:0,outline:"",round:"",size:"lg",icon:"play_arrow",onClick:f,class:"q-ma-md"})):v("",!0),s.value===e.COUNTING?(r(),n(m,{key:1,outline:"",round:"",size:"lg",icon:"pause",onClick:C,class:"q-ma-md"})):v("",!0),q(a).length>0?(r(),n(m,{key:2,outline:"",round:"",size:"lg",icon:"skip_next",onClick:g,class:"q-ma-md"})):v("",!0)])],4)]),_:1}))}};export{H as default};
