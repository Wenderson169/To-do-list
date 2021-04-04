function insertTask() {

    var element = document.getElementById("task");
    var task = element.value;
    var textTask = document.createTextNode(task);

    if (task.length > 0) {

        var a = document.createElement("p");
        a.appendChild(textTask);

        var b = document.createElement("input");
        b.setAttribute("type", "button");
        b.setAttribute("id", "done");
        b.setAttribute("value", "Done");
        b.setAttribute("onclick", "taskDone(this)");

        var c = document.createElement("input");
        c.setAttribute("type", "button");
        c.setAttribute("id", "delete");
        c.setAttribute("value", "Delete");
        c.setAttribute("onclick", "deleteTask(this);");

        var d = document.createElement("li");
        d.appendChild(a);
        d.appendChild(b);
        d.appendChild(c);
        
        var e = document.getElementById("cont");
        e.appendChild(d);

        element.value = "";

    }
}

function taskDone(este) {

    var a = este.parentNode;
    var b = a.firstChild;
    var task = b.innerHTML;
    var newElem = document.createElement("s");

    newElem.textContent = task;

    console.log(newElem);

    a.replaceChild(newElem, b);

    este.remove();

}

function deleteTask(este) {

    este.parentNode.remove();

} 