
var botao = document.getElementById('criar-tarefa');
var listaTarefas = document.getElementById('lista-tarefas')

function criarTarefa() {
    botao.addEventListener('click', itemLi);
  
    function itemLi() {
      var li = document.createElement('li');
      var input = document.getElementById('texto-tarefa').value;//aprendi sobre input.value para armazenar o valor digitado no input....neste video ...https://www.youtube.com/watch?v=bC5Mp37L5hA&ab_channel=MatheusBattisti-HoradeCodar

      li.innerText = input;
      li.className = 'item-list'
     
      document.getElementById('lista-tarefas').appendChild(li);
      document.getElementById('texto-tarefa').value = '';//aqui indforma que input volta a ficar vazio após criar a lista com o valor do input.

    } 
}
  criarTarefa();


 
    ///ideias tiradas de uma conversa com Lalá na Metala


listaTarefas.addEventListener('click', function(event){
    let listaItemSelecionado = document.querySelectorAll('.selected');
    let selecionaItem = document.querySelector('.selected');

    if (listaItemSelecionado.length>0){
        selecionaItem.classList.remove('selected');
        selecionaItem = event.target;
        event.target.classList.add('selected');
    } else {
        event.target.classList.add('selected');
    }
})

listaTarefas.addEventListener('dblclick', function(event){  //referencia ao dblclick >>>>https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event
    let selecionaItem = document.querySelector('.completed');

        if(selecionaItem!=true){
            selecionaItem = event.target;
            event.target.classList.toggle('completed');//toggle tirei referencia no mdn >>>> https://developer.mozilla.org/en-US/search?q=toggle
        }
    
})

let botaoApagaTudo = document.querySelector("#apaga-tudo");


botaoApagaTudo.addEventListener('click', function (event){

    while(listaTarefas.firstChild){
        listaTarefas.removeChild(listaTarefas.firstChild)
    }//https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
    //while funciona como for, no caso enquanto lista de tarefas tiver primeiro filho ele vai executar a remoção deste primeiro filho. não existindo mais o primeiro o segundo passa a ser primeiro e ai é removido tambem.
    
})

