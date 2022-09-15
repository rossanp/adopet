let conteudo = document.getElementById('main__cards')

let listaAnimais = [
    {
        img: "../../img/Dunga.svg",
        nome: "Dunga",
        idade: "2 anos",
        tamanho: "Porte pequeno",
        jeito: "Calmo e educado",
        cidade: "Rio de Janeiro (RJ)"
    },
    {
        img: "../../img/Felicia.svg",
        nome: "Felicia",
        idade: "3 meses",
        tamanho: "Porte pequeno",
        jeito: "Ativa e carinhosa",
        cidade: "Nova Iguaçu (RJ)"
    },
    {
        img: "../../img/Sirius.svg",
        nome: "Sirius",
        idade: "6 meses",
        tamanho: "Porte grande",
        jeito: "Ativo e educado",
        cidade: "Duque de Caxias (RJ)"
    },
    {
        img: "../../img/Fiona.svg",
        nome: "Fiona",
        idade: "3 anos",
        tamanho: "Porte pequeno",
        jeito: "Calma e educada",
        cidade: "São Gonçalo (RJ)"
    },
    {
        img: "../../img/Sid.svg",
        nome: "Sid",
        idade: "8 meses",
        tamanho: "Porte médio/grande",
        jeito: "Brincalhão e amável",
        cidade: "Rio de Janeiro (RJ)"
    },
    {
        img: "../../img/Yoda.svg",
        nome: "Yoda",
        idade: "1 anos",
        tamanho: "Porte médio",
        jeito: "Ativo e carinhoso",
        cidade: "Nova Iguaçu (RJ)"
    },
    {
        img: "../../img/Lua.svg",
        nome: "Lua",
        idade: "6 meses",
        tamanho: "Porte médio",
        jeito: "Ativa e carinhosa",
        cidade: "Duque de Caxias (RJ)"
    },
    {
        img: "../../img/Amora.svg",
        nome: "Amora",
        idade: "45 dias",
        tamanho: "Porte grande",
        jeito: "Calma e carinhosa",
        cidade: "São Gonçalo (RJ)"
    },
    {
        img: "../../img/Zelda.svg",
        nome: "Zelda",
        idade: "5 meses",
        tamanho: "Porte médio",
        jeito: "Ativa e amável",
        cidade: "Rio de Janeiro (RJ)"
    },
]

let animais = ""

for ( i = 0; i < listaAnimais.length; i++) {
    animais += `<div class="main__card">`
    animais += `<img src="${listaAnimais[i].img}" alt="Imagem do cão Dunga" class="main__img-animal">`
    animais += `<div class="main__card-dados">`
    animais += `<h2>${listaAnimais[i].nome}</h2>`
    animais += `<p class="main__card-idade">${listaAnimais[i].idade}</p>`
    animais += `<p class="main__card-tamanho">${listaAnimais[i].tamanho}</p>`
    animais += `<p class="main__card-jeito">${listaAnimais[i].jeito}</p>`
    animais += `<p class="main__card-local">${listaAnimais[i].cidade}</p>`
    animais += `<div class="main__card-contato">`
    animais += `<a href="#">`
    animais += `<img src="../../img/icone-mensagem.svg" alt="Ícone de mensagem" class="main__card-icone-msgn">`
    animais += `<p>Falar com responsável</p>`
    animais += `</a>`
    animais += `</div>`
    animais += `</div>`
    animais += `</div>`
}

conteudo.innerHTML = animais

/* console.log(nomesAnimais) */