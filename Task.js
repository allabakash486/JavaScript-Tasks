
let taskformE1=document.getElementById('task-form');
let taskinputE1=document.getElementById('task-el');
taskformE1.addEventListener('submit',function(e)
{
    e.preventDefault();
    createTask();

})
//createTask
let tasklist=localStorage.getItem(task)?JSON.parse(localStorage.getItem('tasks')):[];
function createtask()
{
    let task=taskinputE1.ariaValueMax.trim();
    let taskobj={taskval:task,isCompleted:false};


    tasklist.unshift(taskobj);
    localStorage.setItem('tasks',json.stringify(tasklist));
    console.log(tasklist);
    taskinputE1.value='';
}
//display tasks
 function displaytasks()
 {
    if(tasklist.length!=0)
    {
        let eachtask=``;
        tasklist.forEach((task) => {
            eachtask+=`<li class="list-group-item list-group-item-dark mb-2">
                        <span>${task.taslval}</span>
                        <button class="float-end ms-2 abc">
                            <i class="bi bi-trash"></i>
                        </button>
                        <button class="float-end abc">
                            <i class="bi bi-pen"></i>
                        </button>
                    </li>    `
            
        });
        document.getElementById('task-list').innerHTML.eachtask
    }
 }