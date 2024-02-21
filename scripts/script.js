// Referências para os elementos HTML
const novaTarefa = document.getElementById("novaTarefa");
const adicionarTarefa = document.getElementById("adicionarTarefa");
const listaDeTarefas = document.getElementById("listaDeTarefas");
const modal = document.getElementById("modal");
const modal2 = document.getElementById("modal2");
const modal3 = document.getElementById("modal3");
const confirmDelete = document.getElementById("confirmDelete");
const cancelDelete = document.getElementById("cancelDelete");
const closeButton = document.querySelector(".close-button");
const closeButton2 = document.querySelector(".close-button2");
const closeButton3 = document.querySelector(".close-button3");
const contador = document.getElementById("contador");
const somExclusao = new Audio("./assets/recycle.mp3");
// Função para atualizar o contador de tarefas
function atualizarContador() {
  const numeroDeTarefas = listaDeTarefas.getElementsByTagName("li").length;
  contador.textContent = "Número de tarefas: " + numeroDeTarefas;
}
// Função para adicionar uma tarefa quando o botão "Adicionar" é clicado
function adicionarTarefaClick() {
  const valor = novaTarefa.value;
  if (valor === "") {
    modal.style.display = "block"; // Mostra o modal se o valor for vazio
    return;
  }
  const tarefas = listaDeTarefas.getElementsByTagName("li");
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].getElementsByTagName("span")[0].textContent === valor) {
      modal2.style.display = "block"; // Mostra o modal se a tarefa já existir
      return;
    }
  }
  // Cria um novo item de lista para a tarefa
  const li = document.createElement("li");
  // Cria um checkbox para marcar a tarefa como concluída
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      tarefa.style.textDecoration = "line-through";
    } else {
      tarefa.style.textDecoration = "none";
    }
  });
  li.appendChild(checkbox);
  // Cria um elemento span para o texto da tarefa
  const tarefa = document.createElement("span");
  tarefa.textContent = valor;
  li.appendChild(tarefa);
  // Cria um botão para remover a tarefa
  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover");
  // Cria um ícone de lixeira para o botão de remover
  const lixeiraSVG = document.getElementById("lixeira").cloneNode(true);
  lixeiraSVG.style.display = "block";
  botaoRemover.appendChild(lixeiraSVG);
  // Adiciona um event listener ao botão de remover para mostrar o modal de confirmação de exclusão
  botaoRemover.addEventListener("click", function () {
    modal3.style.display = "block";
    modal3.tarefaParaExcluir = this.parentNode;
  });
  li.appendChild(botaoRemover);
  // Adiciona a nova tarefa à lista de tarefas
  listaDeTarefas.appendChild(li);
  novaTarefa.value = "";
  atualizarContador(); // Atualiza o contador de tarefas
}
// Função para fechar os modais quando a tecla "Escape" é pressionada
function keydownEvent(event) {
  if (event.key === "Escape") {
    if (modal.style.display == "block") {
      modal.style.display = "none";
    }
    if (modal2.style.display == "block") {
      modal2.style.display = "none";
    }
  }
}
// Função para confirmar a exclusão de uma tarefa
function confirmDeleteClick() {
  const lixeiraSVG =
    modal3.tarefaParaExcluir.querySelector(".botao-remover svg");
  lixeiraSVG.classList.add("lixeira-girando");
  // Tocar o som de exclusão
  somExclusao.play();

  setTimeout(() => {
    modal3.tarefaParaExcluir.classList.add("desintegrando");
    setTimeout(() => {
      modal3.tarefaParaExcluir.remove();
      lixeiraSVG.classList.remove("lixeira-girando");
      atualizarContador(); // Atualiza o contador de tarefas após a exclusão
    }, 500);
  }, 300);
  modal3.style.display = "none";
}
// Função para cancelar a exclusão de uma tarefa
function cancelDeleteClick() {
  modal3.style.display = "none";
}
// Event listeners para várias ações do usuário
novaTarefa.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    adicionarTarefa.click();
  }
});
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
closeButton2.addEventListener("click", function () {
  modal2.style.display = "none";
});
closeButton3.addEventListener("click", function () {
  modal3.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
});
adicionarTarefa.addEventListener("click", adicionarTarefaClick);
document.addEventListener("keydown", keydownEvent);
confirmDelete.addEventListener("click", confirmDeleteClick);
cancelDelete.addEventListener("click", cancelDeleteClick);
