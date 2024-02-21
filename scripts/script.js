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

function adicionarTarefaClick() {
  const valor = novaTarefa.value;
  if (valor === "") {
    modal.style.display = "block";
    return;
  }

  const tarefas = listaDeTarefas.getElementsByTagName("li");
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].getElementsByTagName("span")[0].textContent === valor) {
      modal2.style.display = "block";
      return;
    }
  }

  const li = document.createElement("li");

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

  const tarefa = document.createElement("span");
  tarefa.textContent = valor;
  li.appendChild(tarefa);

  const botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover");

  const lixeiraSVG = document.getElementById("lixeira").cloneNode(true);
  lixeiraSVG.style.display = "block";
  botaoRemover.appendChild(lixeiraSVG);

  botaoRemover.addEventListener("click", function () {
    modal3.style.display = "block";
    modal3.tarefaParaExcluir = this.parentNode;
  });
  li.appendChild(botaoRemover);

  listaDeTarefas.appendChild(li);
  novaTarefa.value = "";
}

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

function confirmDeleteClick() {
  modal3.tarefaParaExcluir.classList.add("desintegrando");
  setTimeout(() => modal3.tarefaParaExcluir.remove(), 500);
  modal3.style.display = "none";
}

function cancelDeleteClick() {
  modal3.style.display = "none";
}

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
