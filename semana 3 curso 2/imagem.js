let imagemDaEstrada;
let imagemDoAtor;
let pokemon;
let pokemon2;
let pokemon3;

// sons

let somDaTrilha;
let somDoPonto;
let somDaColisao;


function preload(){
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
  somDaColisao = loadSound("sons/colidiu.mp3")

  imagemDaEstrada = loadImage("./imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/gengar.png");
  pokemon = loadImage("imagens/pokemon-1.png");
  pokemon2 = loadImage("imagens/pokemon-2.png");
  pokemon3 = loadImage("imagens/pokemon-3.png"); 
  imagensPokemons = [pokemon, pokemon2, pokemon3, pokemon, pokemon2, pokemon3]
}