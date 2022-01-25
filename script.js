// Variáveis

const botao = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const tarefaI = [];
let completedItem = document.getElementsByClassName('completed');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaCompleted = document.querySelector('#remover-finalizados');
const botaoSalvarLista = document.getElementById('salvar-tarefas');
const botaoParaCima = document.getElementById('mover-cima');
const botaoParaBaixo = document.getElementById('mover-baixo');
const botaoRemoveSelecionado = document.getElementById('remover-selecionado');

// functions
const itemLi = () => {
  const li = document.createElement('li');
  // aprendi sobre input.value para armazenar o valor digitado no input....neste video ...https://www.youtube.com/watch?v=bC5Mp37L5hA&ab_channel=MatheusBattisti-HoradeCodar
  if (input.value !== '') {
    li.innerText = input.value;
    li.className = 'item-list';
    tarefaI.push({
      listaT: input,
      completo: false,
    });
    listaTarefas.appendChild(li);
  }

  document.getElementById('texto-tarefa').value = ''; // aqui indforma que input volta a ficar vazio após criar a lista com o valor do input.
};

const itemLiEnter = (event) => {
  if (event.key === 'Enter') {
    itemLi();
  }
};

const selecionado = (event) => {
  const listaItemSelecionado = document.querySelectorAll('.selected');
  let selecionaItem = document.querySelector('.selected');
  if (listaItemSelecionado.length > 0) {
    selecionaItem.classList.remove('selected');
    selecionaItem = event.target;
    event.target.classList.add('selected');
  } else {
    event.target.classList.add('selected');
  }
};

const completed = (event) => {
  if (completedItem !== true) {
    completedItem = event.target;
    event.target.classList.toggle('completed'); // toggle tirei referencia no mdn >>>> https://developer.mozilla.org/en-US/search?q=toggle
    tarefaI.completo = true;
  }
};

const apagarLista = () => {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  } // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
  // while é um for, no caso enquanto lista de tarefas tiver primeiro filho ele vai executar a remoção deste primeiro filho. não existindo mais o primeiro o segundo passa a ser primeiro e ai é removido tambem.
  tarefaI.splice(0, tarefaI.length);
  localStorage.clear('tarefas');
};

const removerCompleto = () => {
  const itensCompletos = document.querySelectorAll('.completed');
  for (let index = 0; index < itensCompletos.length; index += 1) {
    listaTarefas.removeChild(itensCompletos[index]);
  }
};

// tive ajuda do colega Leo Araujo para desenrolar o localStorage
const salvar = () => {
  localStorage.clear();
  const listaItens = listaTarefas.children;
  for (let i = 0; i < listaItens.length; i += 1) {
    localStorage.setItem(`${i + 1}`, `${listaItens[i].outerHTML}`);
    // Raphael Martins no code reviw me ajudou a ver que localStorage setitem pode receber chave, valor como strings em templates literals. a propriedade do DOM outerHTML traz tudo o que o nó tem, como as classes dele e tudo mais...
  }
};

const recuperarLista = () => {
  for (let i = 0; i < localStorage.length; i += 1) {
    const listaSalvaOuterHTML = localStorage.getItem(`${i + 1}`);
    const criaListaSalva = document.createElement('li');
    listaTarefas.appendChild(criaListaSalva);
    criaListaSalva.outerHTML = listaSalvaOuterHTML;
  }
};
// tive ajuda do ncolega Joarez Ximenez para relembrar parentNode do DOM e a dica do insertBefore() o qual li a documentação e entendi >> https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
const moverParaCima = () => {
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado !== itemSelecionado.parentNode.firstChild) {
    listaTarefas.insertBefore(itemSelecionado, itemSelecionado.previousSibling);
  }
};

const moverParaBaixo = () => {
  const itemSelecionado = document.querySelector('.selected');
  if (itemSelecionado !== itemSelecionado.parentNode.lastChild) {
    listaTarefas.insertBefore(itemSelecionado, itemSelecionado.nextSibling.nextSibling);
  }
};

const removerSelecionado = () => {
  const liSelecionado = document.getElementsByClassName('.selected');
  listaTarefas.remove(liSelecionado);
};

// Eventos

botao.addEventListener('click', itemLi);
input.addEventListener('keypress', itemLiEnter); // Raphael Martins me lembrou que addEvewnteListener pode receber mais keys alem do click...
listaTarefas.addEventListener('click', selecionado);
listaTarefas.addEventListener('dblclick', completed); // referencia ao dblclick >>>> https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
botaoApagaCompleted.addEventListener('click', removerCompleto);
botaoApagaTudo.addEventListener('click', apagarLista);
botaoSalvarLista.addEventListener('click', salvar);
botaoParaCima.addEventListener('click', moverParaCima);
botaoParaBaixo.addEventListener('click', moverParaBaixo);
botaoRemoveSelecionado.addEventListener('click', removerSelecionado);

window.onload = function atualizar() {
  if (localStorage.length > 0) {
    recuperarLista();
  }
};
