
let imagem = document.querySelector("#img-principal")
let troca = document.querySelector("#troca-cor")
let text = document.querySelector("h3")
let button = document.querySelector("button")
let icon = document.querySelectorAll("i")
let principal = document.querySelector("#logo-airmax")

console.log(icon)

function trocaImagem(endereco) {
    imagem.src = endereco
    text.innerHTML = "Design e Qualidade"
    
}

function myButton(cor) {
    button.style.backgroundColor = cor
    button.style.transition = "5s"
}

function colors(cor) {
     

}
