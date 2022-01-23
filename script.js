// Variáveis

const botao = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const tarefaI = [];
let selecionaItem = document.querySelector('.completed');
const botaoApagaTudo = document.querySelector('#apaga-tudo');
const botaoApagaCompleted = document.querySelector('#remover-finalizados');
const botaoSalvarLista = document.getElementById('salvar-tarefas');
const tarefaSalva = JSON.parse(localStorage.getItem('tarefas'));
const tarefasSalvas = [];


// functions
const itemLi = () => {
  const li = document.createElement('li');
  const input = document.getElementById('texto-tarefa').value; // aprendi sobre input.value para armazenar o valor digitado no input....neste video ...https://www.youtube.com/watch?v=bC5Mp37L5hA&ab_channel=MatheusBattisti-HoradeCodar

  li.innerText = input;
  li.className = 'item-list';
  tarefaI.push({
    listaT: input,
  });

  listaTarefas.appendChild(li);

  document.getElementById('texto-tarefa').value = ''; // aqui indforma que input volta a ficar vazio após criar a lista com o valor do input.
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
  if (selecionaItem !== true) {
    selecionaItem = event.target;
    event.target.classList.toggle('completed'); //toggle tirei referencia no mdn >>>> https://developer.mozilla.org/en-US/search?q=toggle
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
  while (selecionaItem) {
    listaTarefas.removeChild(selecionaItem);
  }
};
// tive ajuda do colega Leo Araujo para desenrolar o localStorage
const salvar = () => localStorage.setItem('tarefas', JSON.stringify(tarefaI));
const recuperarLista = () => {
  for (let index = 0; index < tarefaSalva.length; index += 1) {
    const li = document.createElement('li');
    li.innerText = tarefaSalva[index].listaT;
    li.className = 'item-list';
    tarefasSalvas.push(tarefaSalva[index]);
    listaTarefas.appendChild(li);
  }
};

// Eventos

botao.addEventListener('click', itemLi);
listaTarefas.addEventListener('click', selecionado);
listaTarefas.addEventListener('dblclick', completed); // referencia ao dblclick >>>> https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
botaoApagaCompleted.addEventListener('click', removerCompleto);
botaoApagaTudo.addEventListener('click', apagarLista);
botaoSalvarLista.addEventListener('click', salvar);

window.onload = function atualizar() {
  if (localStorage.length > 0) {
    recuperarLista();
  }
};
