function onSubmit (){
    let data = {name: document.getElementById("firstname").value};
    console.log(data)
    fetch("http://127.0.0.1:3000/login", {
    method : "POST",
    body : JSON.stringify(data),
    headers: {
        'Content-Type' : 'application/json'
    }
    }).then(
        //Check the login
        fetch("http://127.0.0.1:3000/whoami", {
            method: "GET"
        }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
    )
}

window.onload = function() {
    let nameBtn = document.getElementById("name-button")
    nameBtn.addEventListener("click", onSubmit)
}