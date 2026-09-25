/* Tema claro/escuro das aulas.
   Carregado sem defer/async no <head>, para marcar o tema antes da página
   aparecer na tela. Três estados no botão: automático (segue o sistema),
   claro e escuro. Só grava a escolha quando o leitor clica. */
(function () {
  var root = document.documentElement;
  var CHAVE = 'tema';
  var sistemaClaro = window.matchMedia ? window.matchMedia('(prefers-color-scheme: light)') : null;
  var imprimindo = false;

  function lerEscolha() {
    try {
      var v = localStorage.getItem(CHAVE);
      return v === 'light' || v === 'dark' ? v : 'auto';
    } catch (e) {
      return 'auto';
    }
  }

  function gravarEscolha(v) {
    try {
      if (v === 'auto') localStorage.removeItem(CHAVE);
      else localStorage.setItem(CHAVE, v);
    } catch (e) {}
  }

  function aplicar() {
    var escolha = lerEscolha();
    var tema = escolha === 'auto'
      ? (sistemaClaro && sistemaClaro.matches ? 'light' : 'dark')
      : escolha;
    root.setAttribute('data-theme', imprimindo ? 'light' : tema);
    atualizarBotao(escolha);
  }

  var ROTULOS = { auto: 'Automático', light: 'Claro', dark: 'Escuro' };
  var ICONES = { auto: '◐', light: '☀', dark: '☾' };
  var PROXIMO = { auto: 'light', light: 'dark', dark: 'auto' };

  function atualizarBotao(escolha) {
    var b = document.querySelector('.tema-toggle');
    if (!b) return;
    b.textContent = ICONES[escolha] + ' ' + ROTULOS[escolha];
    b.setAttribute('aria-label',
      'Tema: ' + ROTULOS[escolha] + '. Clique para mudar para ' + ROTULOS[PROXIMO[escolha]] + '.');
  }

  aplicar();

  if (sistemaClaro) {
    if (sistemaClaro.addEventListener) sistemaClaro.addEventListener('change', aplicar);
    else if (sistemaClaro.addListener) sistemaClaro.addListener(aplicar);
  }

  // Impressão e "Salvar como PDF" sempre saem no tema claro
  window.addEventListener('beforeprint', function () { imprimindo = true; aplicar(); });
  window.addEventListener('afterprint', function () { imprimindo = false; aplicar(); });

  document.addEventListener('DOMContentLoaded', function () {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'tema-toggle';
    b.addEventListener('click', function () {
      gravarEscolha(PROXIMO[lerEscolha()]);
      aplicar();
    });
    document.body.appendChild(b);
    atualizarBotao(lerEscolha());
  });
})();
