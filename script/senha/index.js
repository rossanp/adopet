var mostrarSenha = document.getElementById('form__inpt-olho')
var mostrarConfSenha = document.getElementById('form__inpt-conf-olho')
var cadastrar = document.getElementById('btn-cadastrar')

mostrarSenha.addEventListener( 'click', function() {
    var senha = document.getElementById('senha')
    
    if ( senha.type === "password" ) {
        senha.type = "text"
    } else {
        senha.type = "password"
    }
});

mostrarConfSenha.addEventListener( 'click', function() {
    var confSenha = document.getElementById('confirma-senha')
    
    if ( confSenha.type === "password" ) {
        confSenha.type = "text"
    } else {
        confSenha.type = "password"
    }
})

var senha = document.getElementById('senha')
var confSenha = document.getElementById('confirma-senha')
var senhaIncorreta = document.getElementById('senha-incorreta')

cadastrar.addEventListener( 'click', function() {
    if ( senha && confSenha === "" || "undefinded") {
        if ( confSenha.value != senha.value ) {
            senhaIncorreta.innerHTML = "As senhas não são as mesmas"
        }
    }
})