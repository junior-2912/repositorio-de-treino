function calcular() {
    let pes = document.getElementById ("txtpeso")
    let alt = document.getElementById ("txtaltura")
    let peso = Number(pes.value)
    let altura = Number(alt.value)
    let result = document.getElementById ('res')
    if (pes.value.length == 0 || alt.value.length == 0) {
        window.alert ("[ERRO] Complete os campos abaixo com os valores pedidos!!")
    } else if (peso / altura ^ 2 < 18.5){
        result.innerHTML = 'Voce esta abaixo do peso!!'
    } else if (peso / altura ^ 2 > 18.5 ) {
            result.innerHTML = 'Voce esta no peso ideal!!'
        }
    }