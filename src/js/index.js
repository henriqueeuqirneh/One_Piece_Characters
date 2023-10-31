const botoes = document.querySelectorAll(".botao");

botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {

        const botaoSeleconado = document.querySelector(".botao.selecionado");
        botaoSeleconado.classList.remove("selecionado");
        botao.classList.add("selecionado");


        const personagens = document.querySelectorAll(".personagem")

        botoes.forEach((botao, indice) => {
            botao.addEventListener("click", () => {
                desselecionarBotao();
                desselecionarPersonagem();

                botao.classList.add("selecionado");
                personagens[indice].classList.add("selecionado");

            })
        })
    })
})

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSeleconado = document.querySelector(".botao.selecionado");
    botaoSeleconado.classList.remove("selecionado");
}

