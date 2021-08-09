// window.onload() = function(){
  const hex=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B","C", "D", "E", "F"];
  
  const btn=document.getElementById("btn");
  const text=document.querySelector(".color");
     var hexColor;
  btn.addEventListener('click', function(){
     console.log("color changed");
      let hexColor='#';
      for(var i=0;i<6;i++){       //getting random no.so as to point to the index of the array and we acan take the element of the array from that index
        var randomnum=  Math.floor( Math.random()*hex.length);
        console.log(randomnum);
        var element=hex[randomnum];
        console.log(element);
        hexColor +=element;
        
      }
      console.log(hexColor);
      const cont=document.querySelector('.cont');
      cont.style.backgroundColor = hexColor; 
      text.textContent=hexColor; 
      
  });
  
