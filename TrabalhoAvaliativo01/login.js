$( "#btnLogin" ).click(function() {
    if($("#myInput").val() != "" || $("#myInput").val() != ""){
        alert( "Preencha os campos de login e senha" );
        return;
    }
    location.href = "./home/home.html";
});