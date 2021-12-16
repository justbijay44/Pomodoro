const start =document.querySelector('.start');
const reset =document.querySelector('.reset');
const stop =document.querySelector('.stop');

const wm = document.querySelector('.w_minute');
const ws = document.querySelector('.w_second');

const rm = document.querySelector('.r_minute');
const rs = document.querySelector('.r_second');

var watch;
var audio1 = new Audio('click1.wav');
var audio2 = new Audio('click2.wav');

start.addEventListener('click', function(){

    if (watch == undefined){
        watch = setInterval(timer, 1000);
    }
    audio2.play();
})

reset.addEventListener('click',function(){
    wm.innerText = 25;
    ws.innerText = "00";
   
    rm.innerText = 05;
    rs.innerText = "00";

     document.querySelector('.Ccount').innerText = 0;
     stopInterval();
     watch = undefined;
     audio1.play();
})

stop.addEventListener('click', function(){
   stopInterval();
   watch = undefined;
   audio2.play();
})

function timer(){
  //work count
    if(ws.innerText != 0){
        ws.innerText--;
    }else if (wm.innerText !=0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

  //rest count  
    if(wm.innerText == 0 && ws.innerText == 0){
        if( rs.innerText != 0){
            rs.innerText--;
        }else if (rm.innerText !=0 && rs.innerText == 0){
            rs.innerText = 59;
            rm.innerText--;
        }
    }

    //cycle count 
    if(wm.innerText == 0 && ws.innerText == 0 && rm.innerText == 0 && rs.innerText == 0 ){
       wm.innerText = 25;
       ws.innerText = "00";
      
       rm.innerText = 05;
       rs.innerText = "00";

        document.querySelector('.Ccount').innerText++;
    }
}

//stop the interval bro

function stopInterval(){
    clearInterval(watch);
}
