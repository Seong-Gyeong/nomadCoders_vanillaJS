let h1 = document.querySelector(".hello h1"); //CSS selector를 이용해서 class hello를 찾고 그 안의 h1을 가져오는 방법 
console.log(h1); //h1이 많아도 무조건 처음 h1만 읽어옴 

//h1 = document.querySelectorAll(".hello h1"); //배열로 모든 h1을 받아옴
//console.log(h1); 

function handleh1Click() {
    /*const clickedClass = "clicked" //raw string 사용으로 인한 오류 줄이기 위해
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass); //원래 존재하는 class를 완전히 변경하지 않고 class 요소를 추가하는 방법
    } else {
        h1.classList.add(clickedClass);
    }*/

    h1.classList.toggle("clicked");
    //toggle : clickedClass에 "clicked"가 있는지 확인해서 있다면 제거, 없다면 추가해주는 역할 
}

h1.addEventListener("click", handleh1Click); //함수 이름만 넘겨준다 (클릭하면 함수를 실행해주는 역할)
























// document 객체를 이용해서 HTML 요소에 접근하고 변경할 수 있다
// document.h1 = "Hi, this is momentum"
// const h1 = document.getElementById("h1");
// h1.innerText = "Got you!";

/* id가 아닌 class 값으로 받아오는 방법 */
//const hellos = document.getElementsByClassName("hello");    

//div, anchor, section, button 과 같은 tag를 이용해서 값 받아보는 방법 
//let h1 = document.getElementsByTagName("Hello");




/*
function handleMouseEnter() {
    h1.innerText= "Mouse is here!";
}

function handleMouseLeave() {
    h1.innerText= "Mouse is gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOffline() {
    alert("SOS no wifi!");
}

function handleWindowOnline() {
    alert("ALL GOOD");
}


//h1.onclick = handleh1Click; ---> 이것보다 addEventListener로 하면 removeEventListener도 쓸 수 있어서 좋다 
h1.addEventListener("mouseenter", handleMouseEnter);
//h1.onmouseenter = handleMouseEnter;
h1.addEventListener("mouseleave", handleMouseLeave);
//h1.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/