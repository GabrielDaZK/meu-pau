//função que vai calcular os valores
function calculo(){
    //declaração das variaveis 
    let anoNascimento = 0;
    let idade = 0;

    //entrada de dados do usario a atribuição as vaiaveis 
    anoNascimento = Number( window.prompt('Digite o ano que você nasceu: '));

    //a variavel diminiu seu ano de 2025 para descobrir sua iade 
    idade = 2025 - anoNascimento;

    //mostre a sua idade 
    alert("Sua idade é: " + idade);

    //verifica se a sua idade é maior ou menor que 18
    if (idade > 18){
        alert("Você pode tirar carteira de motorista ");
    } else {

        //caos seja maior que 18, mostra essa frase para o usuario 
        //variavel de diferença  caso seja de maior

        let dif = 18 - idade;
        //caso seja de maior, mosttra essa frasse 
        
        alert("você não pode tirar carteira de motorista pois ainda não faltam " + dif + "anos para completar 18 anos");
    }
}
