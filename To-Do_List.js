const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alertbox.render({
            alertIcon: 'warning',
            title: 'please write someting',
            message: 'write your todu Message',
            btnTitle: 'Ok',
            border:true
          });
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; // Corrected: inputBox.value
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Corrected Unicode escape
        li.appendChild(span); // Corrected: appendChild
        
        inputBox.value = "";
    }
}
