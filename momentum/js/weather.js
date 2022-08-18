//브라우저에서 위치 좌표를 준다. 

function onGeoOk() {//JS가 Success 함수에 매개변수로 GeolocationPosition Object를 준다
    const lat = position.coords.latitude;
    const lng = position.coords.longitude ;
    console.log("You live in", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);