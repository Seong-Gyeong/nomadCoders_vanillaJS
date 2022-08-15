// document 객체를 이용해서 HTML 요소에 접근하고 변경할 수 있다
document.title = "Hi, this is momentum"

const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!";