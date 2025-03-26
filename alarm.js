const headleft=document.getElementById("head2");
const headright=document.getElementById("head1");
const selectMenu= document.querySelectorAll("select");
const menubar = document.querySelector(".time");
const btn=document.querySelector("button");
const sts =document.querySelector(".status");
var music= new Audio('bedside-clock-alarm-95792.mp3');
// music.play();
let currenttime=document.querySelector("h1");
let val=0, time;
const perform=(obj,operation)=>{
  if(op=="st"){
   return document.querySelector(obj).style;
  }else if(op=="sl"){
    return document.querySelector(obj);
  }

}
document.addEventListener("DOMContentLoaded",()=>{
  setInterval(showtime,1000);
})

setInterval( ()=>{
        if(currenttime.innerHTML== time){
          ring(); } },600);
function ring(){
if(val==0){
  headleft.style.d= "path('M16.83 35.21c-1.23.36-2.55-.32-2.93-1.54c-3.24-10.35.96-21.61 11.12-26.84c10.23-5.27 21.34-1.81 27.81 7.02c.73.99.56 2.38-.36 3.19c-2.09 1.85-6.73 5.33-15.98 10.01c-9.77 4.94-16.47 7.22-19.66 8.16z')";
  headright.style.d= "path('M111.17 35.21c1.23.36 2.55-.32 2.93-1.54c3.24-10.35-.96-21.61-11.12-26.84c-10.23-5.27-21.34-1.81-27.81 7.02c-.73.99-.56 2.38.36 3.19c2.09 1.85 6.73 5.33 15.98 10.01c9.77 4.94 16.47 7.22 19.66 8.16z')";
  val=1;
}
else{
  headleft.style.d= "path('M16.83 36.21c-1.23.36-2.55-.32-2.93-1.54c-3.24-10.35.96-21.61 11.12-26.84c10.23-5.27 21.34-1.81 27.81 7.02c.73.99.56 2.38-.36 3.19c-2.09 1.85-6.73 5.33-15.98 10.01c-9.77 4.94-16.47 7.22-19.66 8.16z')";
  headright.style.d= "path('M111.17 36.21c1.23.36 2.55-.32 2.93-1.54c3.24-10.35-.96-21.61-11.12-26.84c-10.23-5.27-21.34-1.81-27.81 7.02c-.73.99-.56 2.38.36 3.19c2.09 1.85 6.73 5.33 15.98 10.01c9.77 4.94 16.47 7.22 19.66 8.16z')";
  val=0;
}
}

for(let i=1 ; i<=12 ; i++){
  i= i<10 ? "0"+i : i;
  let option = `<option value ="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend",option);
}
for(let i=0 ; i<60 ; i++){
  i= i<10 ? "0"+i : i;
  let option = `<option value ="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend",option);
}

const showtime=()=>{
  let date=new Date();
  let hr=date.getHours();
  let min=date.getMinutes();

  hr=hr<10? "0"+hr:hr;
  min=min<10 ? "0"+min:min;
  
  if(hr<12){
    currenttime.innerHTML=`${hr} : ${min} AM`;
  }
  else{
    hr=hr-12;
    currenttime.innerHTML=`${hr} : ${min} PM`;
  }

    if(selectMenu[0].value==12){
     if(selectMenu[2].value=="AM" && currenttime.innerHTML.includes("AM") || selectMenu[2].value=="PM" && currenttime.innerHTML.includes("PM")){
      if(selectMenu[1].value-min>=0){
        sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+12} hr : ${selectMenu[1].value-min} min`;}
      else{
        sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+11} hr : ${selectMenu[1].value-min+60} min`;}
      }
    else{
      if(selectMenu[1].value-min>=0){
        sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr} hr : ${selectMenu[1].value-min} min`;}
      else{
        sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr-1} hr : ${selectMenu[1].value-min+60} min`;}
      }
   }

   else if(currenttime.innerHTML.includes("AM") && selectMenu[2].value=="AM" || currenttime.innerHTML.includes("PM") && selectMenu[2].value=="PM"){
    if(selectMenu[0].value-hr==0 && selectMenu[1].value-min==0){
      sts.innerHTML="Wake Up, Alarm is ringing !!!";}
    else if(selectMenu[0].value-hr>=0 && selectMenu[1].value-min>=0){
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr} hr : ${selectMenu[1].value-min} min`;}
    else if(selectMenu[0].value-hr>0 && selectMenu[1].value-min<0){
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr-1} hr : ${selectMenu[1].value-min+60} min`;}
    else  if(selectMenu[0].value-hr<0 && selectMenu[1].value-min>=0){
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+24} hr : ${selectMenu[1].value-min} min`;}
    else  if(selectMenu[0].value-hr<=0 && selectMenu[1].value-min<0){
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+23} hr : ${selectMenu[1].value-min+60} min`;}
    }

   else if(currenttime.innerHTML.includes("AM") && selectMenu[2].value=="PM" || currenttime.innerHTML.includes("PM") && selectMenu[2].value=="AM"){
    if(selectMenu[1].value-min>=0){
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+12} hr : ${selectMenu[1].value-min} min`;}
    else{
      sts.innerHTML=`Alarm will ring in ${selectMenu[0].value-hr+11} hr : ${selectMenu[1].value-min+60} min`;}
  }
  
}
function setAlarm(){
  time =`${selectMenu[0].value} : ${selectMenu[1].value} ${selectMenu[2].value}`
  if(time.includes("Hour") || time.includes("Minute") || time.includes("AM/PM") ){
    return alert("Please Select a valid time to set Alarm !!!");
  }
  menubar.classList.add("disable");
  btn.innerHTML="Clear Alarm";
  sts.style.visibility="visible";
}

function clearAlarm(){
  menubar.classList.remove("disable");
  btn.innerHTML="Set Alarm";  
  sts.style.visibility="hidden";
}

btn.addEventListener("click", ()=>{
  if(btn.innerHTML=="Clear Alarm"){
    clearAlarm();
  }
  else{
    setAlarm();
  }
});
