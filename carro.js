let xPokemons = [600, 600, 600, 600, 600, 600];
let yPokemons = [43, 93, 135, 220, 268, 310];
let velocidadePokemon = [2, 3, 2.5, 4, 3.3, 2.3];
let comprimentoPokemon = 90;
let alturaPokemon = 50;
// carro 2
    
// carro 3

function mostraPokemon(){
    for (let i = 0; i < imagensPokemons.length; i++){
    image(imagensPokemons[i], xPokemons[i], yPokemons[i], comprimentoPokemon, alturaPokemon);
  }
  }
  
  function movimentaPokemon(){
    for (let i = 0; i < imagensPokemons.length; i++ ){
    xPokemons[i] -= velocidadePokemon[i];
  }
  }
  function voltaPosicaoInicialDoPokemon() {
    for (let i = 0; i < imagensPokemons.length; i++)
    if(passouTodaATela(xPokemons[i])) {
    xPokemons[i] = 600;
    }
  }
  
  function passouTodaATela(xPokemons) {
    return xPokemons < -50;
  }