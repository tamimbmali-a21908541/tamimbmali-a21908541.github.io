let contador = 0;

const numeroContador = document.querySelector('#contador');
const mensagem = document.querySelector('#mensagem');
const imagem = document.querySelector('#imagem');
const coordenadas = document.querySelector('#coordenadas');

function aumentarContador() {
  contador++;
  numeroContador.textContent = contador;
  mensagem.textContent = 'Clicaste no botão.';
  numeroContador.style.color = '#d66631';
}

function reiniciarContador() {
  contador = 0;
  numeroContador.textContent = contador;
  mensagem.textContent = 'O contador foi reiniciado.';
  numeroContador.style.color = '#215a6d';
}

function destacarImagem() {
  mensagem.textContent = 'O rato está sobre a imagem.';
  imagem.style.transform = 'scale(1.04)';
  imagem.style.boxShadow = '0 8px 20px #20303c66';
}

function normalizarImagem() {
  mensagem.textContent = 'O rato saiu da imagem.';
  imagem.style.transform = 'scale(1)';
  imagem.style.boxShadow = 'none';
}

function mostrarCoordenadas(evento) {
  coordenadas.textContent = `Posição do rato: ${evento.offsetX}, ${evento.offsetY}`;
  coordenadas.style.color = '#215a6d';
}

function pintar(cor) {
  const caixaCor = document.querySelector('#caixa-cor');
  caixaCor.style.background = cor;
  caixaCor.style.color = 'white';
  caixaCor.textContent = 'Fui pintada de ' + cor + '!';
  mensagem.textContent = 'Clicaste no botão ' + cor + '.';
}
