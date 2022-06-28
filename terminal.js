let file = "~/.bash_history"
let reader = new FileReader();
// let text = reader.readAsText(file);
text = "This text is a replacement of what is normally the ~/.bash_history file, replace my VARIABLE!"
const output = document.getElementById("outputField");
output.textContent = text;

function reloadPage() {
    location.reload();
}

function changeFile() {
    let new_file = document.getElementById('CHANGED_FILE').value;
    console.log(new_file);
    let new_text = reader.readAsText(new_file)
    output.textContent= new_text;
}

function createCall() {
    
}