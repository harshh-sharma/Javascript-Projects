const highPriorityTask = [] , lowPriorityTask = [] ;
const task = [];

var highPriorityContainer = document.getElementById('highPriorityContainer');
var lowPriorityContainer = document.getElementById('lowPriorityContainer');
var taskInput = document.getElementById('taskInput');
var deadlineInput = document.getElementById('deadlineInput');


const todoItem = document.createElement('div');
todoItem.classList.add('todo-item');
// console.log(todoItem);

const checkBoxInput = document.createElement('input');
checkBoxInput.type = ('checkBox');
// console.log(checkBoxInput);

const taskLabel = document.createElement('label');

let date = new Date();
date = date.toLocaleDateString();
// console.log(date);


addButton.addEventListener('click',() => {
    
        const description = taskInput.value;
        const deadLine = deadlineInput.value ;
        console.log('d', deadLine);
        console.log('c', date);
        if(deadLine < date){
            console.log(deadLine);
        }

        if(description)
        {
            if(deadLine != '' ){
                if(deadLine < date ){
                    highPriorityTask.push(description);
                    displayTask(description,deadLine);
                }
                else{
                    lowPriorityTask.push(description);
                    displayTask(description,deadLine);
                }
            }
            else{
                lowPriorityTask.push(description);
                displayTask(description,deadLine);
            }
        }
        else{
            alert('Task is required before submit');
        }

});


function displayTask(description,deadLine){
    var todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');

    var checkBoxInput = document.createElement('input');
    checkBoxInput.type = ('checkBox');
    todoItem.appendChild(checkBoxInput);

    var taskLabel = document.createElement('label');
    if(deadLine != ''){
        taskLabel.innerHTML = `${description} (DeadLine : ${deadLine})`;
    }
    else{
        taskLabel.innerHTML = `${description} (DeadLine : )`;
    }
    todoItem.appendChild(taskLabel);
    todoItem.appendChild(deleteButton);

    if(deadLine === ''){
        lowPriorityContainer.appendChild(todoItem);
        taskInput.value = '';
        deadLine = '';
    }
    else{
        if(date > deadLine ){
            highPriorityContainer.appendChild(todoItem);
            taskInput.value = '';
            deadLine= '';
        }
        if(date < deadLine){
            lowPriorityContainer.appendChild(todoItem);
            taskInput.value = '';
            deadLine = '';
        }
    }
}

for( let i = 0 ; i<highPriorityTask.length ; i++){
    highPriorityContainer.innerHTML = highPriorityTask[i];
}