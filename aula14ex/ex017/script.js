function tabuada() {
    var num  = document.querySelector('#num').value
    var select = document.querySelector('select#tabuada')

    console.log(select)
    if (isNaN(num)) {
        alert("Não pode enviar vazio.")
    } else {
        select.innerHTML = ''
        for (var i = 1 ; i <=10 ; i++) {
            var option = document.createElement('option')
            option.setAttribute('value',`${i}`)
            option.innerHTML = `${num} x ${i} = ${num*i}`
            select.appendChild(option)
        }
    }
}