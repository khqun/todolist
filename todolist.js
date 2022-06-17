async function getTodo() {
    try {
        return await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    } catch (error) {
        throw new Error(error);
    }
}

function addToDo() {
    let addValue = document.getElementById("getText");
    let newText = document.createElement("li");
    let newBreak = document.createElement("br");
    newText.innerHTML = `<input class="form-check-input me-2" type="checkbox" value="" aria-label="..."  />` + `<li>${addValue.value}</li>`;
    toDoTable.prepend(newText);
    toDoTable.prepend(newBreak);
    addValue.value = "";
}

function add(title, valiCheck) {
    let newText = document.createElement("li");
    let newBreak = document.createElement("br");
    let checked = ""
    if (valiCheck) {
        checked = "checked"
    }
    newText.innerHTML = `<input class="form-check-input me-2" type="checkbox" value="" aria-label="..." ${checked} />` + `<li>${title}</li>`;
    toDoTable.append(newText);
    toDoTable.append(newBreak);
}

let toDoTable = document.getElementById("toDoTable");


let addText = document.getElementById("addText");
addText.addEventListener("click", addToDo);

// for (let i = 1; i <= 100; i++) {
//     let res = getTodo(i);
//     res.then(respone => {
//         add(respone.data.title, respone.data.completed)
//     }).catch(error => {
//         console.log(error);
//     })
// }
const promise = getTodo();
promise.then(respone => {
    respone.data.forEach((todo) => {
        add(todo.title, todo.completed)
    });
})