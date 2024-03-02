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

function atualizarContador() {
  const numeroDeTarefas = listaDeTarefas.getElementsByTagName("li").length;
  contador.textContent = "Número de tarefas: " + numeroDeTarefas;
}

function lerTarefasSalvas() {
  let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  if (tarefasSalvas) {
    console.log(tarefasSalvas);
  } else {
    console.log("Não há tarefas salvas.");
  }
}

function recuperarTarefasSalvas() {
  let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  if (tarefasSalvas) {
    for (let i = 0; i < tarefasSalvas.length; i++) {
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = tarefasSalvas[i].concluida;
      li.appendChild(checkbox);
      const tarefa = document.createElement("span");
      tarefa.textContent = tarefasSalvas[i].texto;
      if (tarefasSalvas[i].concluida) {
        tarefa.style.textDecoration = "line-through";
      }
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
    }
  } else {
    console.log("Não há tarefas salvas.");
  }
}

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
  
    let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
    const index = tarefasSalvas.findIndex(
      (tarefaSalva) => tarefaSalva.texto === tarefa.textContent
    );
    if (index > -1) {
      tarefasSalvas[index].concluida = this.checked;
    }
    localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));
    lerTarefasSalvas();
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
  atualizarContador();


  let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
  if (!tarefasSalvas) {
    tarefasSalvas = [];
  }
  tarefasSalvas.push({ texto: valor, concluida: false });
  localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

  lerTarefasSalvas();
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
  const lixeiraSVG =
    modal3.tarefaParaExcluir.querySelector(".botao-remover svg");
  lixeiraSVG.classList.add("lixeira-girando");
  somExclusao.play();

  setTimeout(() => {
    modal3.tarefaParaExcluir.classList.add("desintegrando");
    setTimeout(() => {
      let tarefasSalvas = JSON.parse(localStorage.getItem("tarefas"));
      const index = tarefasSalvas.findIndex(
        (tarefaSalva) =>
          tarefaSalva.texto ===
          modal3.tarefaParaExcluir.getElementsByTagName("span")[0].textContent
      );
      if (index > -1) {
        tarefasSalvas.splice(index, 1);
      }
      localStorage.setItem("tarefas", JSON.stringify(tarefasSalvas));

      lerTarefasSalvas();

      modal3.tarefaParaExcluir.remove();
      lixeiraSVG.classList.remove("lixeira-girando");
      atualizarContador();
    }, 500);
  }, 300);
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

window.onload = recuperarTarefasSalvas;