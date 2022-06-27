function list(ip) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", ip + "/v1.41/containers/json?all=true");
    xhr.onload = () => {
        const response = JSON.parse(xhr.response);
        const instanceList = document.getElementById("instance-list");

        for (let i = 0; i < response.length; i++) {
            const row = instanceList.insertRow();

            let idCell = row.insertCell();
            let nameCell = row.insertCell();
            let statusCell = row.insertCell();
            let actionCell = row.insertCell();

            idCell.innerText = response.i.Id;
            nameCell.innerText = response.i.Names[0];
            statusCell.innerText = response.i.State;

            actionCell.innerHTML = "";

        }
    }
    xhr.send();
}

let xhr = new XMLHttpRequest();
xhr.open("POST", "api.php");

xhr.onload = () => console.log(xhr.responseText);

let data = `{
    "container": ___,
    "action":
}`;