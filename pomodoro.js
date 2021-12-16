const btn = document.querySelector('.btn');

btn.addEventListener('click', handlebtn);
 let sbtn = 0;

 function handlebtn(){
     sbtn++;

     if (sbtn == 1){
         btn.innerHTML = `Stop`;
     }
     else {
         btn.innerHTML = `Start`;
     }
     if (sbtn > 1){
         sbtn = 0;
     }
    }


    let currentTime= ()=>{
        futureTime = new Date("Sep 15 2021 00:00:00").getTime();
    }
    console.log(futureTime);