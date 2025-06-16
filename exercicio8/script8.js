
function estacao() {
   
    let mes = window.prompt("Digite o nome de um mês do ano:");

    
    mes = mes.toUpperCase();

    
    let estacao = "";

    
    if (mes == "DEZEMBRO" || mes == "JANEIRO" || mes == "FEVEREIRO") {
        estacao = "Verão";
        document.body.style.backgroundColor = "#B8860B";
    } else if (mes == "MARÇO" || mes == "ABRIL" || mes == "MAIO") {
        estacao = "Outono";
        document.body.style.backgroundColor = "#F4A460"; 
    } else if (mes == "JUNHO" || mes == "JULHO" || mes == "AGOSTO") {
        estacao = "Inverno";
        document.body.style.backgroundColor = "#40E0D0"; 
    } else if (mes == "SETEMBRO" || mes == "OUTUBRO" || mes == "NOVEMBRO") {
        estacao = "Primavera";
        document.body.style.backgroundColor = "#008000"; 
    } else {
        alert("Mês inválido. Tente outro novamente.");
        return;
    }

    
    alert(`O mês de ${mes} pertence à estação: ${estacao}`);
    document.getElementById("resultado").innerHTML = `<p>O mês de ${mes} pertence à estação: ${estacao}</p>`;

}
