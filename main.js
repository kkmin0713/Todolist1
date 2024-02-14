let TaskInput = document.getElementById("task-input")
let AddButton = document.getElementById("add-button")
let TaskList = []

AddButton.addEventListener("click",addTask)

function addTask(){
    let task = {
        id: newID(),
        TaskContent: TaskInput.value,
        isComplete:false
    }
    TaskList.push(task)
    console.log(TaskList)
    render()
}

function render(){
    let resultHTML = ``
    for(let i=0;i<TaskList.length;i++){
      if(TaskList[i].isComplete==true){
        resultHTML += `<div class="task">
        <div class="task-done">${TaskList[i].TaskContent}</div>
        <div>
            <button onclick="toggleComplete('${TaskList[i].id}')"><i class="fa-solid fa-rotate-left"></i></button>
            <button onclick="deleteTask('${TaskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`
      }else{
        resultHTML += `<div class="task">
        <div>${TaskList[i].TaskContent}</div>
        <div>
            <button onclick="toggleComplete('${TaskList[i].id}')"><i class="fa-solid fa-check"></i></button>
            <button onclick="deleteTask('${TaskList[i].id}')"><i class="fa-solid fa-trash-can"></i></button>
        </div>
    </div>`
      }
    }
    document.getElementById("task-board").innerHTML = resultHTML
}

function toggleComplete(id){
    console.log("id:",id)
    for(let i=0;i<TaskList.length;i++){
        if(TaskList[i].id==id){
            TaskList[i].isComplete = !TaskList[i].isComplete
            break
        }
    }
    render()
    console.log(TaskList)
}

function deleteTask(id){
    for(let i=0;i<TaskList.length;i++){
        if(TaskList[i].id==id){
            TaskList.splice(i,1)
            break
        }
    }
    render()
}

function newID(){
    return Math.random().toString(36).substr(2, 16)}