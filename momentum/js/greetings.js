const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
//const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기하는게 관습
const USERNAME_KEY = "username";

//어차피 form 태그의 특성상 엔터누르거나 버튼 누르면 제출이 되니까 '클릭'은 더이상 이슈가 아니라서 해당 함수 필요없음 
/*function onLoginBtnClick() {
    //유효성 검사 : html input 태그에서 수행 
    const username= loginInput.value;
    if(username=== "") {
        alert("Please write your name");
    } else if (username.length > 15) {
        alert("Your name is too long");
    } else {

    }
}*/

function onLoginSubmit(event) {
    event.preventDefault(); //submit되면 새로고침되는 것을 막는다
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME); //제출하면 폼 없어지게!
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerHTML = `Hello ${username}`; //"Hello " + username과 같음 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

/* function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("clicked!"); //창 닫으면 링크로 연결됨 
} */


const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUserName);
}


/*
    1. submit 발생 
    2. 브라우저는 브라우저 내에서 submit event로부터 정보를 잡아내고
    3. 그 정보를 onLoginSubmit에 인자로 넣어서 함수를 실행시킨다(onLoginSubmit(event))
*/
//onLoginSubmit() 이렇게 괄호까지 넣으면 바로 실행되어 버리고 onLoginSubmit만 쓰면 submit이 발생했을 때 함수가 실행됨

//link.addEventListener("click", handleLinkClick);

