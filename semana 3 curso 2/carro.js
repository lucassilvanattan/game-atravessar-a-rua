let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 152, 210, 270, 318];
let velocidadeCarros = [2, 3, 2.5, 4, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;
// carro 2
    
// carro 3

function mostraCarro(){
    for (let i = 0; i < imagensCarros.length; i++){
    image(imagensCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
  }
  
  function movimentaCarro(){
    for (let i = 0; i < imagensCarros.length; i++ ){
    xCarros[i] -= velocidadeCarros[i];
  }
  }
  function voltaPosicaoInicialDoCarro() {
    for (let i = 0; i < imagensCarros.length; i++)
    if(passouTodaATela(xCarros[i])) {
    xCarros[i] = 600;
    }
  }
  
  function passouTodaATela(xCarro) {
    return xCarro < -50;
  }