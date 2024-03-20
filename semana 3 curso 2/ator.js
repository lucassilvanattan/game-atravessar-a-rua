//ator
let xAtor = 80;
let yAtor = 345;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 100, 60);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
      if(seAtorPodeSeMover()){
        yAtor += 3;
      }}
      if (keyIsDown(RIGHT_ARROW) && xAtor < 430){
        xAtor += 3
      }
      if (keyIsDown(LEFT_ARROW) && xAtor > 0) {
        xAtor -= 3
      }
}


function verificaColisao() {
  for(let i = 0; i < imagensPokemons.length; i++){
    colisao = collideRectRect(xPokemons[i], yPokemons[i], comprimentoPokemon - 60, 40, xAtor, yAtor + 10, 22, 28)
    if (colisao) {
      voltaAtorParaPosicaoInicial()
      somDaColisao.play()
      if (pontosMaiorQueZero()) {
        pontos--
      }
    }
  }
}

function voltaAtorParaPosicaoInicial() {
  yAtor = 345
}

function incluiPontos() {
    textAlign(CENTER)
    textSize(25)
    fill(color(255,255,0))
    text(pontos, width/5, 27) 
}

function marcaPonto(){
    if(yAtor < 8){
        pontos++;
        somDoPonto.play()
        voltaAtorParaPosicaoInicial();
    }
}

function pontosMaiorQueZero() {
    return pontos > 0
}

function seAtorPodeSeMover() {
    return yAtor < 345
}