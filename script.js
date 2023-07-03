
let imagem = document.querySelector("#img-principal")
let troca = document.querySelector("#troca-cor")
let text = document.querySelector("p")
let button = document.querySelector("button")
let icon = document.querySelectorAll("i")
let principal = document.querySelector("#logo-airmax")
let flutuar = document.getElementsByClassName("elemento")
let apagar = document.querySelector("body")

function transition() {
    alert(`Ao clicar nas imagens abaixo aparecera sobre a historia
    de cada air max obs: a pagina ainda esta em manutenção`)

}

function manutenção() {
    apagar.style.display = "none"
    alert("pagina em manutenção")
   
}

manutenção()

function trocaImagem(endereco, mudei) {
    imagem.src = endereco
    text.innerHTML = mudei
}

function myButton(cor) {
    button.style.backgroundColor = cor
    button.style.transition = "5s"
}

function colors(cor) {
     

}
