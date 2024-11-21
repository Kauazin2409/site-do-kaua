const botaoMudarCor = document.getElementById("botaoMudarCor");


function mudarCor() {

  const cores = ["#FF6347", "#4682B4", "#32CD32", "#FFD700", "#8A2BE2"];
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  

  document.body.style.backgroundColor = corAleatoria;
}


botaoMudarCor.addEventListener("click", mudarCor);