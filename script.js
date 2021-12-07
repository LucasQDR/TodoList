let tarefas = []

//Adicionar a tarefa 
function add(){
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}

function render(){
    const ul = document.querySelector("ul")
    ul.innerHTML = null

    tarefas.forEach(function(tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa 
        ul.appendChild(li)
    })
}

//Excluir dados da tela
function linparTabela(){
    var limpar = document.getElementsByTagName("ul");
    limpar[0].innerHTML = ""
}

//Marcar como concluido as tarefas
var list = document.querySelector("ul");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);