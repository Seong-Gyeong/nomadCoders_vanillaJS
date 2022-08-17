const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

//localStorage에 투두 저장하는 함수
function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


//todo 삭제하는 함수 
function deleteTodo(event) {
    const li = event.target.parentElement;
    //target : 클릭된 HTML 요소(버튼) , parentElement : target의 부모(li)
    console.log(li.id);
    li.remove();
}

//todo 화면에 그리는 함수
function paintTodo(newTodoObj) {
   const li = document.createElement("li");
   li.id = newTodoObj.id;
   const span = document.createElement("span");
   span.innerText = newTodoObj.text;
   const button = document.createElement("button",deleteTodo);
   button.addEventListener("click", deleteTodo);
   button.innerText = "❌";
   li.appendChild(span);
   li.appendChild(button);
   toDoList.appendChild(li);
}

//투두를 추가하고 저장하고 화면에 보여주는 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //투두 적은 거 변수에 넣고
    toDoInput.value = ""; //투두 적는 칸 비우기
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), 
        //랜덤 아이디 부여
    };
    toDos.push(newTodoObj); //배열에 todo 추가하기 
    paintTodo(newTodoObj); //변수에 넣은 todo 화면에 그려주기
    saveTodos(); //todo 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/*
function sayHello(item){ //item:JS는 이 함수가 실행되는 item(parsedToDos)를 제공해줌! event처럼
    console.log("this is the turn of " + item);
} 
*/

const savedTodos = localStorage.getItem(TODOS_KEY); //문자열

if(savedTodos !== null) { //saveTodos가 있다면 
    const parsedToDos = JSON.parse(savedTodos); //배열(객체)
    toDos = parsedToDos; //새로고침할 때마다 예전에 적은 투두들이 날아가지 않게!
    //parsedToDos.forEach((item) => console.log("this is the turn of " + item));
    //forEach : 배열에 있는 요소의 개수만큼 인자로 들어간 함수를 실행함 
    parsedToDos.forEach(paintTodo); //paintTodo의 인자에 배열의 요소를 JS가 집어넣어줌 
}

