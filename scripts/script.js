function setAttributes(el, attrs) {
    for(let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function setChilds(el, childs) {
    for(let key in childs) {
        el.appendChild(childs[key]);
    }
}

function insertTask() {

    let element = document.getElementById("task");
    let task = element.value;
    let textTask = document.createTextNode(task);

    if (task.length > 0) {

        let p = document.createElement("p");
        p.appendChild(textTask);

        let done = document.createElement("input");
        setAttributes(done, { "type": "button", "id": "done", "value": "Done", "onclick": "taskDone(this)" });

        let del = document.createElement("input");
        setAttributes(del, { "type": "button", "id": "delete", "value": "Delete", "onclick": "deleteTask(this)" });

        let li = document.createElement("li");
        setChilds(li, { p, done, del });
        
        let cont = document.getElementById("cont");
        cont.appendChild(li);

        element.value = "";

    }
}

function taskDone(este) {

    let element = este.parentNode;
    let child = element.firstChild;
    let task = child.innerHTML;
    let newElem = document.createElement("s");

    newElem.textContent = task;

    element.replaceChild(newElem, child);

    este.remove();

}

function deleteTask(este) {

    este.parentNode.remove();

} 
