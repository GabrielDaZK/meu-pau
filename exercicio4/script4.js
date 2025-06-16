function media(){

    let nota1 = Number(window.prompt("digite a primeira nota:"));
    let nota2 = Number(window.prompt("digite a segunda nota:"));
    let nota3 = Number(window.prompt("digite a terceira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;
 
    let resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>O resultado é ${media} </p>`;


    console.log(resultado);

    if(media >=  60){
        resultado.innerHTML = `<p>Você passou na media: ${media}</p>`;
    }
    
    else {
        let dif = 60 - media;

        console.log(media = 60);

        resultado.innerHTML = `<p>Você não atingiu a média. Faltam: ${dif} pontos`;
        
    }


}
