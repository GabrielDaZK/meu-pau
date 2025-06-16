let num1;
let num2;
let resultado;
let nu;


function sobra(){
    num1 = Number(window.prompt("digite o primeiro numero:"));
    num2 = Number(window.prompt("digite o segundo numero:"));

    resultado = num1 % num2;
    nu = resultado % 2;

    alert("o resultado é: " + resultado + ".");

    if (nu == 0){
    alert("este numero é par")    
    }
    else{
        alert("este numero é impar")
    }

 }   


function multiplicacao() {
    num1 = Number(window.prompt("digite o primeiro numero:"));
    num2 = Number(window.prompt("digite o segundo numero:"));

    resultado = num1 * num2;
    nu = resultado % 2;
 

    alert("o resultado é: " + resultado + ".");

    if (nu == 0){
    alert("este numero é par")    
    }
    else{
        alert("este numero é impar")
    }
    // resultado par ou impar dac multiplicação
}


function divisao() {
    num1 = Number(window.prompt("digite o primeiro numero:"));
    num2 = Number(window.prompt("digite o segundo numero:"));

    resultado = num1 / num2;
    nu = resultado % 2;

    alert("o resultado é: " + resultado + ".");

    if (nu == 0){
    alert("este numero é par")    
    }
    else{
        alert("este numero é impar")
    }
    // resultado par ou impar da divisão
}


function subtracao() {
    num1 = Number(window.prompt("digite o primeiro numero:"));
    num2 = Number(window.prompt("digite o segundo numero:"));

    resultado = num1 - num2;
    nu = resultado % 2;

    alert("o resultado é: " + resultado + ".");

    if (nu == 0){
    alert("este numero é par")    
    }
    else{
        alert("este numero é impar")
    }
    // resultado par ou impar da subtração
}

function adicao() {
    num1 = Number(window.prompt("digite o primeiro numero:"));
    num2 = Number(window.prompt("digite o segundo numero:"));

    resultado = num1 + num2;
    nu = resultado % 2;

    alert("o resultado é: " + resultado + ".");

    if (nu == 0){
    alert("este numero é par")    
    }
    else{
        alert("este numero é impar")
    }
    // resultado par ou impar da adição
}