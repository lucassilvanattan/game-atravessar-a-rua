


function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraPokemon();
  movimentaPokemon();
  movimentaAtor();
  voltaPosicaoInicialDoPokemon();
  verificaColisao();
  incluiPontos();
  marcaPonto()
  console.log(verificaColisao)
}


