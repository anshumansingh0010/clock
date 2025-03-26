// Vatiables and constants
const time=document.getElementById('time');
const timeformat=document.getElementById('timeformat');
const element=document.getElementsByClassName('digitalclock')[0];
const dialogbox= document.getElementById("dialogbox");
const btn=document.querySelector('.changebtn');
const image=document.querySelector('.icon');
let val=0;
let hrs=document.getElementById('hours');
let mins=document.getElementById('minutes');
let secs=document.getElementById('seconds');
const analog=document.querySelector(".container");

document.addEventListener('DOMContentLoaded', ()=>{
  setInterval(() => {
    showtime();
    
    // add another function

  }, 1000);
});

// function to generate time

const showtime=()=>{
  let date=new Date();
  let hr=date.getHours();
  let min=date.getMinutes();
  let sec=date.getSeconds();

  //analogclock
  let hrot=30*hr + min/2;
  let mrot= 6*min;
  let srot= 6*sec;

  hrs.style.transform=`rotate(${hrot}deg)`;
  mins.style.transform=`rotate(${mrot}deg)`;
  secs.style.transform=`rotate(${srot}deg)`;

  //digital clock
  if(hr==12){
    if(min==0)
    timeformat.innerHTML='MD';
    else
    timeformat.innerHTML='PM';
  }
  else if(hr==24){
    hr=0;
    if(min==0)
    timeformat.innerHTML='MN';
    else
    timeformat.innerHTML='AM';
  }
  else if(hr>12){
    hr=hr-12;
    timeformat.innerHTML='PM';
  }
  else{
    timeformat.innerHTML='AM';
  }
  hr=hr<10?`0${hr}`:hr;
  min=min<10 ? `0${min}`:min;
  sec=sec<10?`0${sec}`:sec;
  time.innerHTML=`${hr} : ${min} : ${sec}`;
}

// move the element
const move = function(element){
  element.addEventListener("mousedown", ()=>{
    // element.style.position="absolute"
    document.onmousemove=(e)=>{
      let x=e.pageX
      let y=e.pageY
      element.style.left= x +"px"
      element.style.top= y+40 +"px"
    };
    document.onmouseup = function(){
      document.onmousemove = null;
      document.onmouseup = null;
    } 
  });
}
// show dialogbox
time.addEventListener("click",()=>{
  dialogbox.showModal();
});

//hide dialogbox
dialogbox.addEventListener("click",(event)=>{
  if(event.target===dialogbox)
    dialogbox.close();
});

//controlling button 

btn.firstElementChild.addEventListener("click",()=>{
  if(val==0){
  btn.firstElementChild.style.left="62%";
  image.style.filter="drop-shadow(0 0 5px #00ffe2) drop-shadow(0 0 10px #00ffe2)";
  element.style.visibility="hidden";
  element.style.opacity="0";
  image.firstElementChild.style.fill="#ffffff";
  analog.style.visibility="visible";
  analog.style.opacity="1";
  val=1;
  
  }
  else{
    btn.firstElementChild.style.left="7.5px";
    image.style.filter="none";
    element.style.visibility="visible";
    element.style.opacity="1";
    image.firstElementChild.style.fill="#000000";
    analog.style.visibility="hidden";
    analog.style.opacity="0";
    val=0;
  }
})