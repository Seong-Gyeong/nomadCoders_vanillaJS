const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText=`${hours}:${minutes}:${seconds}`; 
}

getClock(); //바로 실행하고 
setInterval(getClock,1000); //그 후에 1초에 한 번씩 실행

