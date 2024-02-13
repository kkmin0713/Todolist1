let TaskInput = document.getElementById("task-input")
let AddButton = document.getElementById("add-button")
let TaskList = []

AddButton.addEventListener("click",addTask)

function addTask(){
    let TaskValue = TaskInput.value
    TaskList.push(TaskValue)
    console.log(TaskList)
    render()
}

function render(){
    let resultHTML = ``
    for(let i=0;i<TaskList.length;i++){
        resultHTML += `<div class="task">
        <div>${TaskList[i]}</div>
        <div>
            <button>Check</button>
            <button>Delete</button>
        </div>
    </div>`;
    }
    document.getElementById("task-board").innerHTML = resultHTML
}