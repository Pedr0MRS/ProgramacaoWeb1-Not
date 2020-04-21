var telefones = ['47 1234-5678', '47 8765-4321', '48 1122-3344'];
var emails = ['email@email.com', 'contato@contato.com', 'email@contato.com'];

function criarLista(){   
    document.getElementById('telefone1').innerHTML = telefones[0];
    document.getElementById('telefone2').innerHTML = telefones[1];
    document.getElementById('telefone3').innerHTML = telefones[2];

    document.getElementById('email1').innerHTML = emails[0];
    document.getElementById('email2').innerHTML = emails[1];
    document.getElementById('email3').innerHTML = emails[2];
}

console.log(telefones);
criarLista();