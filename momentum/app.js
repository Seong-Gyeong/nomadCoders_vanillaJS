// document 객체를 이용해서 HTML 요소에 접근하고 변경할 수 있다
// document.title = "Hi, this is momentum"

// const title = document.getElementById("title");
// console.log(title);

// title.innerText = "Got you!";


/* id가 아닌 class 값으로 받아오는 방법 */
const hellos = document.getElementsByClassName("hello");
console.log(hellos);

//div, anchor, section, button 과 같은 tag를 이용해서 값 받아보는 방법 
let title = document.getElementsByTagName("Hello");

title = document.querySelector(".hello h1"); //CSS selector를 이용해서 class hello를 찾고 그 안의 h1을 가져오는 방법 
console.log(title); //h1이 많아도 무조건 처음 h1만 읽어옴 

//title = document.querySelectorAll(".hello h1"); //배열로 모든 h1을 받아옴
//console.log(title); 