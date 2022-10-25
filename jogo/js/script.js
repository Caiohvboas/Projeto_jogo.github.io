//Declaração de Variáveis
var altura = 0
var largura = 0
var tempo = 50
var vida = 3
var tempoCriaMosquito = 0

//Fim Declaração Variáveis

var nivel = window.location.search
nivel = nivel.replace('?', '')
if (nivel == 'normal') {
    tempoCriaMosquito = 1500
} else if (nivel == 'medio') {
    tempoCriaMosquito = 1000
} else if (nivel == 'chucknorris') {
    tempoCriaMosquito = 750
}

function iniciarJogo() {
    var nivel = document.getElementById('nivel').value
    if (nivel == "") {
        alert('Selecione um nível para iniciar o jogo!')
        return false
    }
    //Carrega Página do Jogo  - jogo.html, passando o nível como parâmetro
    window.location.href = "jogo.html?" + nivel

}

//Funçao para delimitar o tamanho da tela
function ajustarTamanhoTelaJogo() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustarTamanhoTelaJogo()


//Calcular nosso tempo, decrementar o mesmo e escrever no HTML 
var cronometro = setInterval(function () {
    //Decrementando o valor da variavel.
    tempo -= 1
    if (tempo < 0) {
        //clearinterval(cronometro)
        //window.location.href = "gameover.html"
    } else {

        document.getElementById('tempo').innerHTML = tempo
    }

}, 1000)

function posicaoRandomica() {

    //Remove o mosquito quando ele existir
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Verifica a quantidade de vidas e remove 1 vida
        if (vida <= 0) {
            window.location.href = 'gameover.html'
        } else {
            document.getElementById('v' + vida).src =
                'imagens/coracao_vazio.png'
            vida -= 1
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90
    //Operador Ternario ? - Então : Senão

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY


    var mosquito = document.createElement('img')
    mosquito.id = 'mosquito'
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoMosquito() + ' ' + lado()
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.style.left = posicaoX + 'px'
    document.body.appendChild(mosquito)
    mosquito.onclick = function () {
        this.remove()
    }
}

function tamanhoMosquito() {
    var aleatorio = Math.floor(Math.random() * 3)
    switch (aleatorio) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }

}

function lado() {
    var lado = Math.floor(Math.random() * 2)

    switch (lado) {
        case 0:
            return 'lado1'
        case 1:
            return 'lado2'
    }

}


