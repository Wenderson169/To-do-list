function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

function setChilds(el, childs) {
    for(var key in childs) {
        el.appendChild(childs[key]);
    }
}

function insertTask() {

    var element = document.getElementById("task");
    var task = element.value;
    var textTask = document.createTextNode(task);

    if (task.length > 0) {

        var p = document.createElement("p");
        p.appendChild(textTask);

        let done = document.createElement("input");
        setAttributes(done, { "type": "button", "id": "done", "value": "Done", "onclick": "taskDone(this)" });

        let del = document.createElement("input");
        setAttributes(del, { "type": "button", "id": "delete", "value": "Delete", "onclick": "deleteTask(this)" });

        var li = document.createElement("li");
        setChilds(li, { p, done, del });
        
        var cont = document.getElementById("cont");
        cont.appendChild(li);

        element.value = "";

    }
}

function taskDone(este) {

    var element = este.parentNode;
    var child = element.firstChild;
    var task = child.innerHTML;
    var newElem = document.createElement("s");

    newElem.textContent = task;

    element.replaceChild(newElem, child);

    este.remove();

}

function deleteTask(este) {

    este.parentNode.remove();

} 