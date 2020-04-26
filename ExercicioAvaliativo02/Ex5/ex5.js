function getResultado(){
    var numero1 = Number(document.getElementById("numero1").value);
    var numero2 = Number(document.getElementById("numero2").value);
    var numero3 = Number(document.getElementById("numero3").value);
    
    var total = numero1 + numero2 + numero3;

    var parImpar = "";
    if(total % 2 == 0){
        parImpar = "par"
    }
    else{
        parImpar = "ímpar"
    }
    
    alert("A soma dos números é "+ total + " que é " + parImpar);
}