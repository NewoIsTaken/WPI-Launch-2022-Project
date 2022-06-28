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

            ipInt = ipToInt(ip);

            actionCell.innerHTML = `<button class="btn btn-success" onclick="start(` + ipInt + `, ` + response.i.Id + `)">Start</button>
            <button class="btn btn-danger" onclick="stop(` + ipInt + `, ` + response.i.Id + `)">Stop</button>
            <a href="./" class="btn btn-danger">SSH</a>
            <button class="btn btn-danger" onclick="delete(` + ipInt + `, ` + response.i.Id + `)">Delete</button>`;

        }
    }
    xhr.send();
}

function ipToInt(ip) {
    var parts = ip.split(".");
    var res = 0;

    res += parseInt(parts[0], 10) << 24;
    res += parseInt(parts[1], 10) << 16;
    res += parseInt(parts[2], 10) << 8;
    res += parseInt(parts[3], 10);

    return res;
}

function intToIP(int) {
    var part1 = int & 255;
    var part2 = ((int >> 8) & 255);
    var part3 = ((int >> 16) & 255);
    var part4 = ((int >> 24) & 255);

    return part4 + "." + part3 + "." + part2 + "." + part1;
}