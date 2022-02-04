const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllBtn = document.querySelector('.footer button');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if (userData.trim() != 0) {
        addBtn.classList.add('active');
    } else {
        addBtn.classList.remove('active');
    }
}    

showTasks();

addBtn.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem('New Todo');
    if (getLocalStorage == null) {
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
    addBtn.classList.remove('active');
}


function showTasks() {
    let getLocalStorage = localStorage.getItem('New Todo');
    if (getLocalStorage == null) {
        listArr = [];
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNumb = document.querySelector('.pendingNumb');
    pendingNumb.textContent = listArr.length;
    if(listArr.length > 0) {
        deleteAllBtn.classList.add('active');
    } else {
        deleteAllBtn.classList.remove('active');
    }
    let newLiTag = "";
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick = "deleteTask(${index})"; ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index) {
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);

    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}

deleteAllBtn.onclick = () => {
    listArr = [];
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    showTasks();
}


/*var body = document.querySelector('body');
body.style.backgroundColor = "blue";

const bouton = document.querySelector('button');
var liste = document.querySelector('.liste');


const body = document.querySelector('body');
//crea.setAttribute.add('division');

bouton.addEventListener("click", (e) => {
    e.preventDefault();
    
    var crea = document.createElement(liste);  //important de le mettre DANS la fonction
    body.appendChild(crea);


})
var crea = document.createElement(liste);
var texte = document.getElementById('texte');
console.log(liste)
console.log(crea)
*/
