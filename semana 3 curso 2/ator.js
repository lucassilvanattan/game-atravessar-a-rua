//ator
let xAtor = 80;
let yAtor = 366;
let colisao = false;
let pontos = 0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 40, 40);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
      if(seAtorPodeSeMover()){
      yAtor += 3;
      }}
      if (keyIsDown(RIGHT_ARROW) && xAtor < 461){
      xAtor += 3
      }
      if (keyIsDown(LEFT_ARROW) && xAtor > 0) {
        xAtor -= 3
      }
}


function verificaColisao() {
  for(let i = 0; i < imagensCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor + 4, 15)
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
  yAtor = 366
}

function incluiPontos() {
    textAlign(CENTER)
    textSize(25)
    fill(color(255,255,0))
    text(pontos, width/5, 27) 
}

function marcaPonto(){
    if(yAtor < 12){
        pontos++;
        somDoPonto.play()
        voltaAtorParaPosicaoInicial();
    }
}

function pontosMaiorQueZero() {
    return pontos > 0
}

function seAtorPodeSeMover() {
    return yAtor < 366
}