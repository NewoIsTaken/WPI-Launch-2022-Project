

function pingServer() {
    let port = document.getElementById("port_grab").value;
    console.log("Server IP/Port logged as:", port);
    document.getElementById("server_ip").innerText = ("Server Port set as: " + port);
    const Http = new XMLHttpRequest();
    const url=(port);
    console.log('New Request Sent To:', port);
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = (e) => {
    const responce = Http.responseText;
    document.getElementById("request_output").innerText = (responce);
    console.log(responce);
    let success = responce.includes("OK");

    }


 }
