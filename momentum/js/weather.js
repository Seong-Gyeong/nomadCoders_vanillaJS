const API_KEY = "2675399b00f045312fcb1aff72bc60b7";

//브라우저에서 위치 좌표를 준다. 
function onGeoOk(position) {//JS가 Success 함수에 매개변수로 GeolocationPosition Object를 준다
    const lat = position.coords.latitude;
    const lon = position.coords.longitude ;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metirc`;
    //units=metirc => 화씨온도를 섭씨온도로 바꿈
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText=  data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`; //날씨 / 기온 
    }); //JS가 URL을 부름 -> seoul clouds
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

