//window.onload= li.style.backgrounColor = 'white'

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
        
/*      
    function colorBackground() {
            listaLi[i].addEventListener("click", mudaCor);
        
        
            item.target.style.backgroundColor = 'rgb(128,128,128)'    
        }
      
 */


