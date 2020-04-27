function getFatorial(){
    var numero = Number(document.getElementById("numero").value);  
    var fatorial = 1;

    if(numero<0) {
        alert ("Valor deve ser maior ou igual a zero");

      } else if ( (numero != 0) && (numero != 1) )  {     
        for(x=numero;x>1;x--) {
          fatorial = fatorial * x;
        }
      } 
    
    alert("O fatorial do número "+ numero + " é " + fatorial);
}