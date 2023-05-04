function contar() {
    var inicio  = parseInt(document.getElementById("inicio").value)
    var fim  = parseInt(document.getElementById("fim").value)
    var passo  = parseInt(document.getElementById("passo").value)
    var res = document.getElementById("res")

    console.log(!isNaN(inicio))

    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        res.innerHTML = "<p>Impossivel contar!</p>"
        alert("Não pode haver campos vazios.")
    } else if(passo <= 0) {
        alert("Passo não pode ser igual ou menor que 0.\nMundando o valor para 1")
        passo = 1;
    } else {
        res.innerHTML = "Contando:<br>"
        if (inicio < fim) {
            for(inicio; inicio <= fim ; inicio += passo) {
                res.innerHTML += `${inicio} \u{1F449}`
            }
            
        } else {
            for(inicio; inicio >= fim ; inicio -= passo) {
                res.innerHTML += `${inicio} \u{1F449}`
            }
        }
        res.innerHTML += ` \u{1F3F3}`
    }

}