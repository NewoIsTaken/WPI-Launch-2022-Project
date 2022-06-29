

function reloadPage() {
    location.reload();
}

function changeFile() {
    let new_file = document.getElementById('CHANGED_FILE').value;

}

function createNewUser() {
    document.cookie = "status = started";
    document.cookie = "user = active";
    document.getElementById("output_area").innerHTML = document.cookie;

}

