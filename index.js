let bodyE1 = document.querySelector("body");
let h1=document.querySelector("h1");
// h1.style.color=aqua;
// bodyE1.innerHTML=h1
document.addEventListener("mousemove",(event)=>{
let xpos=event.offsetX;
let ypos=event.offsetY;
let div1=document.createElement("div");
div1.style.bottom=xpos +"px";
div1.style.top=ypos +"px";
let color= callColor();
div1.style.backgroundcolor=color
div1.style.boxShadow=`0 0 30px ${color}`;
bodyE1.appendChild(div1)
setTimeout(()=>{
div1.remove();
},250)
})


document.addEventListener("mousemove",(event)=>{
  let xpos=event.offsetX;
  let ypos=event.offsetY;
  let spanE1=document.createElement("span");
  spanE1.style.left=xpos+"px";
  spanE1.style.top=ypos+"px";
let size = Math.random()*100;
spanE1.style.height=size+"px";

spanE1.style.width=size+"px";
  bodyE1.appendChild(spanE1);

  setTimeout(()=>{
spanE1.remove()
  },250)

})  




function callColor(){
let red=Math.floor(Math.random()*100);
let blue=Math.floor(Math.random()*100);
let green=Math.floor(Math.random()*100);

let finalColor=`rgba(${red}, ${green} ,${blue})`;
return finalColor;
}