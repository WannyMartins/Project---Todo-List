var elementOl = document.getElementById("#lista-tarefas");
var elementoLi;
var inputName= document.getElementById("texto-tarefa");
var botao = document.getElementById('criar-tarefa'); 
 


botao.addEventListener('click', function (){
    let criaLi=document.createElement('li');
    let listaOrdenada = document.querySelector("#lista-tarefas");
    var value = inputName.value;
    criaLi.innerHTML= value;
    listaOrdenada.appendChild(criaLi);
    console.log(value)
    
    
    }  )
    


  
