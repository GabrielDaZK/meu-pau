let mostraResultado = document.querySelector("#resultado")
let inscritos = 0;
let times = 0;

function inscrever() {
    inscritos++;
    times = parseInt(inscritos / 3);

    mostraResultado.innerHTML = `<p>número de isncrito: ${inscritos}.</p><p> numero de times ${times}</p>`

if(times >= 4) {
  alert ("é possivel iniciar o campeonato, pois temos 4 equipes! ")
  
}
}