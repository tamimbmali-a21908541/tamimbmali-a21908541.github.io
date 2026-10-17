document.addEventListener("DOMContentLoaded", () => {
  // ---------- variáveis ----------
  const passa = document.querySelector("#passa");
  const linhaCor = document.querySelector("#linha-cor");
  const contador = document.querySelector("#contador");
  const duplos = document.querySelector("#duplos");
  const movimentos = document.querySelector("#movimentos");
  const guardado = document.querySelector("#guardado");
  const texto = document.querySelector("#texto");
  const ola = document.querySelector("#ola");
  const caixaFlex = document.querySelector("#caixa-flex");
  const carregou = document.querySelector("#carregou");
  const scrolls = document.querySelector("#scrolls");
  const redimensoes = document.querySelector("#redimensoes");
  const automatico = document.querySelector("#automatico");

  let corAtual = 0;
  let total = 0;
  let totalDuplos = 0;
  let totalMovimentos = 0;
  let totalScrolls = 0;
  let totalRedimensoes = 0;
  let segundos = 0;

  // Se não existe a chave counter em localStorage, inicializamos.
  if (!localStorage.getItem("counter")) {
    localStorage.setItem("counter", 0);
  }

  // ---------- event handlers ----------
  // rato
  const passou = () => {
    passa.textContent = "Passa por aqui!";
  };

  const saiu = () => {
    passa.textContent = "Obrigado por passares!";
  };

  const contar = () => {
    total++;
    contador.textContent = total;
  };

  const duploClique = () => {
    totalDuplos++;
    duplos.textContent = totalDuplos;
  };

  const moverRato = () => {
    totalMovimentos++;
    movimentos.textContent = totalMovimentos;
  };

  const incrementar = () => {
    let counter = localStorage.getItem("counter");
    counter++;
    guardado.textContent = counter;
    localStorage.setItem("counter", counter);
  };

  const decrementar = () => {
    let counter = localStorage.getItem("counter");
    counter--;
    guardado.textContent = counter;
    localStorage.setItem("counter", counter);
  };

  const reiniciar = () => {
    guardado.textContent = 0;
    localStorage.setItem("counter", 0);
  };

  // teclado
  const mudarCor = () => {
    corAtual++;
    if (corAtual === 5) {
      corAtual = 1;
    }

    if (corAtual === 1) {
      texto.style.backgroundColor = "lightblue";
    } else if (corAtual === 2) {
      texto.style.backgroundColor = "lightgreen";
    } else if (corAtual === 3) {
      texto.style.backgroundColor = "lightyellow";
    } else {
      texto.style.backgroundColor = "lightpink";
    }
  };

  // formulário
  const cumprimentar = (e) => {
    e.preventDefault(); // para não recarregar a página
    const nome = document.querySelector("#nome").value;
    const idade = document.querySelector("#idade").value;
    ola.textContent = `Olá, o ${nome} tem ${idade}!`;
  };

  // janela
  const aoCarregar = () => {
    const agora = new Date();
    carregou.textContent = `A página carregou às ${agora.toLocaleTimeString("pt-PT")}!`;
  };

  const aoRolar = () => {
    totalScrolls++;
    scrolls.textContent = totalScrolls;
  };

  const aoRedimensionar = () => {
    totalRedimensoes++;
    redimensoes.textContent = totalRedimensoes;
  };

  const contarAutomatico = () => {
    segundos++;
    automatico.textContent = segundos;
  };

  // ---------- event listeners ----------
  // rato
  passa.addEventListener("mouseover", passou);
  passa.addEventListener("mouseout", saiu);

  // um só código para todos os botões; a cor vem do atributo data-color
  document.querySelectorAll("button.color").forEach((button) => {
    button.addEventListener("click", () => {
      linhaCor.style.color = button.dataset.color;
    });
  });

  document.querySelector("#conta").addEventListener("click", contar);
  document
    .querySelector("#caixa-duplo")
    .addEventListener("dblclick", duploClique);
  document
    .querySelector("#caixa-rato")
    .addEventListener("mousemove", moverRato);
  document.querySelector("#incrementar").addEventListener("click", incrementar);
  document.querySelector("#decrementar").addEventListener("click", decrementar);
  document.querySelector("#reset").addEventListener("click", reiniciar);

  // teclado
  texto.addEventListener("keydown", mudarCor);

  // function normal (e não arrow) para podermos usar this
  document.querySelector("#cor-tecla").addEventListener("keyup", function () {
    document.querySelector("#frase").style.color = this.value;
  });

  // formulário
  document.querySelector("#cor").addEventListener("change", function () {
    document.querySelector("body").style.backgroundColor = this.value;
  });

  document.querySelector("#direcao").addEventListener("change", function () {
    caixaFlex.style.flexDirection = this.value;
  });

  document.querySelector("form").onsubmit = cumprimentar;

  // janela
  window.onload = aoCarregar;
  window.onscroll = aoRolar;
  window.onresize = aoRedimensionar;
  setInterval(contarAutomatico, 1000);

  // Quando carregada a página, mostramos o valor guardado
  guardado.textContent = localStorage.getItem("counter");
});
