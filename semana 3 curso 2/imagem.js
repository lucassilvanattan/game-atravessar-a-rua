let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

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
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png"); 
  imagensCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3]
}