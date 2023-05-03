function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 0 && hora < 12) {
        imagem.src = './img/manha.jpg'
        document.body.style.background = '#e2cd9f'

    } else if(hora >=12 && hora <= 18) {
        imagem.src = './img/tarde.jpg'
        document.body.style.background = '#b9846f'

    } else {
        imagem.src = './img/noite.jpg'
        document.body.style.background = '#515154'

    }
}