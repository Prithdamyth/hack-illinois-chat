


function onSubmit (){
    alert("Done")
}

window.onload = function() {
    let nameBtn = document.getElementById("getName")
    nameBtn.addEventListener("click", onSubmit)
}