Array = []
calcular = () =>{
    var result = document.getElementById("result").value = document.getElementById("valorD").value / document.getElementById("interT").value
    const div = document.getElementById("eita");
    if(!isNaN(result) === true){
        Array.push(result)
        console.log(Array)
        let html = "<p>"+ result +"</p>";
        div.insertAdjacentHTML("afterbegin", html);
    }else{
        return
    }
}
limpar = () =>{
    document.getElementById("valorD").value = ""
    document.getElementById("interT").value = ""
    document.getElementById("result").value = ""
}