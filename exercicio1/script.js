function somar(){
    let num1 = 0;
    let num2 = 0;
    // Entrada de dados pelo usaário e atribuição nas variaveis 
    num1 = Number( window.prompt('digite um numero: '));
    num2 = Number( window.prompt('digite outro numero:'));
    
    // a variável soma a receber o resultado da soma das variáveis nu1m e num2
    let soma = num1 + num2;

    alert(soma);

    if(soma > 10) {
        alert("O resulado é maior do qeue 10");
    } else{
        alert("não é maior do que 10");
    }
}
