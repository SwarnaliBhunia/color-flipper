window.onload=function(){
 var color=["red","blue","grey","rgb(241, 170, 170)","white"];

 const btn= document.getElementById('btn');
 const text= document.querySelector('.color');


  btn.addEventListener('click', function(){
     console.log("color changed");
      // console.log(color[random]);
     const cont=document.querySelector('.cont');
    
     const randomnum=getRandomNumber();
     console.log(randomnum);
     cont.style.backgroundColor=color[randomnum];
     text.textContent=color[randomnum];
 });
  function getRandomNumber(){
    return Math.floor(Math.random() * color.length);
  }

};