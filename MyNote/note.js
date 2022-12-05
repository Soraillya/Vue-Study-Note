var note_id = 0;

function addNote(params) {
    let add_note = document.querySelector(".add-note");
    let note_ul = document.querySelector("#note-ul");
    let note = document.querySelector(".li-none");
    add_note.onclick = function (e) {
        let node = document.createElement("LI");
        node.innerHTML = note.innerHTML;
        node.setAttribute("id", "id_" + note_id++);
        note_ul.appendChild(node);
        console.log(node);
        console.log(note_ul);
    };
    
}

function saveNote(e) {
    console.log(e);
    console.log(e.parentNode.parentNode.parentNode); //  获取到li
    console.log(e.parentNode.parentNode.parentNode.id); //  获取到li
}

function editNote(e) {
    console.log(e);
    console.log(e.parentNode.parentNode.parentNode); //  获取到li
    console.log(e.parentNode.parentNode.parentNode.id); //  获取到li
}

function removeNote(e) {
    let note_ul = document.querySelector("#note-ul");

    console.log(e);
    console.log(e.parentNode.parentNode.parentNode); //  获取到li
    console.log(e.parentNode.parentNode.parentNode.id); //  获取到li
    let rNote = e.parentNode.parentNode.parentNode;

    // var r = confirm("确认删除吗？");
    // if (r === true) {
    note_ul.removeChild(rNote);
    // }
}

addNote();
