import{W as n}from"./index.609b8329.js";const s=parseInt("1500"),r=parseInt("300"),m=n("list",{state:()=>({items:[],currentItem:"",finishedItems:[],id:1,timeLeft:s,break:!1}),actions:{addItem(t){this.items.push({id:this.id++,name:t})},delItem(t){const e=this.items.findIndex(i=>i.id===t);e<0||this.items.splice(e,1)},setCurrentItem(){this.currentItem=this.break?"Take a Break":this.items.shift().name},countdown(){this.timeLeft--},setFinishItem(){this.break||this.finishedItems.push({name:this.currentItem,id:this.id++}),this.currentItem="",this.items.length>0&&(this.break=!this.break),this.timeLeft=this.break?r:s},delFinishedItem(t){const e=this.finishedItems.findIndex(i=>i.id===t);e<0||this.finishedItems.splice(e,1)}},persist:{key:"pomodoro-list"}});export{m as u};
