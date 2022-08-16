const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

//todo 추가하는 함수 
function painTodo(newTodo) {
   const li = document.createElement("li");
   const span = document.createElement("span");
   li.appendChild(span);
   span.innerText = newTodo;
   toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //투두 적은 거 변수에 넣고
    toDoInput.value = ""; //투두 적는 칸 비우기
    painTodo(newTodo); //변수에 넣은 todo 추가하기
}

toDoForm.addEventListener("submit", handleToDoSubmit);