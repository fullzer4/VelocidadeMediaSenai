calcular = () =>{
    var result = document.getElementById("result").value = document.getElementById("valorD").value / document.getElementById("interT").value
    const div = document.getElementById("resultUser");
    if(!isNaN(result) === true){
        let html = "<p>"+ result +"</p>";
        div.insertAdjacentHTML("afterend", html);
    }else{
        return
    }
}
limpar = () =>{
    document.getElementById("valorD").value = ""
    document.getElementById("interT").value = ""
    document.getElementById("result").value = ""
}