let lista = []
var res = document.querySelector("div#res")
var maior 
var menor
var media
var soma = 0

function adicionarLista() {
    var num = Number(document.querySelector("input#num").value)
    var select = document.querySelector("select#lista")

    if(!(num > 0 && num <= 100 && !numeroDuplicado(num,lista))) {
        alert('numero invalido ou igual ja adicionado!')
    } else {
        lista.push(num)
        if(lista.length == 1) {
            maior = menor = num
        } else {
            for(let i = 0; i < lista.length; i++) {
                if(lista[i] > maior) {
                    maior = lista[i]
                    
                } else if(lista[i] < menor) {
                    menor = lista[i]
                    
                }
            }
        }

        soma += num
        media = soma/lista.length
        select.innerHTML = ''
        res.innerHTML = ``
        for(let i = 0; i < lista.length; i++) {
            var option = document.createElement('option')
            option.setAttribute('valor',`${i}`)
            option.innerHTML = `Valor ${lista[i]} adicionado.`
            select.appendChild(option)
        }
        
    }
}

function apresentarDados() {
    res.innerHTML = ``
    if( lista.length ) {
        res.innerHTML =`<p>Quantidade de elementos na lista ${lista.length}</p>`
        res.innerHTML +=`<p>Maior valor: ${maior}</p>`
        res.innerHTML +=`<p>Menor valor: ${menor}</p>`
        res.innerHTML +=`<p>A soma: ${soma}</p>`
        res.innerHTML +=`<p>A média: ${media}</p>`
    } else {
        res.innerHTML = `<p>Lista Vazia</p>`
    }
}

function numeroDuplicado(numero, array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === numero) {
        return true;
      }
    }
    return false;
  }
  