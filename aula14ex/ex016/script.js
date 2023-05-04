function contar() {
    var inicio  = parseInt(document.getElementById("inicio").value)
    var fim  = parseInt(document.getElementById("fim").value)
    var passo  = parseInt(document.getElementById("passo").value)
    var res = document.getElementById("res")

    console.log(!isNaN(inicio))

    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        alert("Não pode haver campos vazios.")
    } else if(passo == 0) {
        alert("Passo não pode ser igual a 0.\nMundando o valor para 1")
        passo = 1;
    } else if(inicio >= fim) {
        alert("Impossivel fazer uma contagem crescente sendo Inicio maior ou igual ao Fim")
    } else {
        res.innerHTML = "Contando:<br>"
        for(inicio; inicio <= fim ; inicio += passo) {
            res.innerHTML += `${inicio} 👉`;
        }
        res.innerHTML += " 🏳️";
    }

}