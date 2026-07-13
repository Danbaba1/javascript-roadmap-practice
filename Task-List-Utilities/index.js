function addTask(tasks, title) {
    let maxId = 0;
    for (let task of tasks) {
        maxId = Math.max(task.id, maxId);
    }
    return [...tasks, { id: maxId + 1, title, completed: false }];
}

function completeTask(tasks, taskId) {
    return tasks.map((task) => {
        if (task.id === taskId) {
            return { ...task, completed: true }
        }
        return task;
    })
}

function removeTask(tasks, taskId) {
    return tasks.filter((task) => task.id !== taskId);
}

function countIncompleteTasks(tasks) {
    let count = 0;
    for (let task of tasks) {
        if (task.completed === false) {
            count++;
        }
    }
    return count;
}

const tasks = [
    { id: 1, title: 'Review variables', completed: true },
    { id: 2, title: 'Practice functions', completed: false },
];

const withNewTask = addTask(tasks, 'Build task utilities');
console.log(withNewTask.map((task) => task.title));

const completed = completeTask(withNewTask, 2);
console.log(countIncompleteTasks(completed));

console.log(removeTask(completed, 1).map((task) => task.id));
console.log(tasks.length);
console.log(countIncompleteTasks(tasks));