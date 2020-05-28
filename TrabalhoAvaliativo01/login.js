$( "#btnLogin" ).click(function() {
    if($("#email").val() == "" || $("#senha").val() == ""){
        alert( "Preencha os campos de login e senha" );
        return;
    }
    location.href = "./home/home.html";
});