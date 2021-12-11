var botao = document.getElementById('criar-tarefa');

function criarTarefa() {
    botao.addEventListener('click', itemLi);
  
    function itemLi() {
      var li = document.createElement('li');
      var input = document.getElementById('texto-tarefa').value;//aprendi sobre input.value para armazenar o valor digitado no input....neste video ...https://www.youtube.com/watch?v=bC5Mp37L5hA&ab_channel=MatheusBattisti-HoradeCodar

      li.innerText = input;
      document.getElementById('lista-tarefas').appendChild(li);
      document.getElementById('texto-tarefa').value = '';//aqui indforma que input volta a ficar vazio após criar a lista com o valor do input.
    }
  }
  criarTarefa();