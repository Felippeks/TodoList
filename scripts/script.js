document.getElementById("novaTarefa").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        document.getElementById("adicionarTarefa").click();
    }
});

document.getElementById("adicionarTarefa").addEventListener("click", function() {
    let valor = document.getElementById("novaTarefa").value;
    if (valor === "") return;

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            tarefa.style.textDecoration = "line-through";
        } else {
            tarefa.style.textDecoration = "none";
        }
    });
    li.appendChild(checkbox);

    let tarefa = document.createElement("span");
    tarefa.textContent = valor;
    li.appendChild(tarefa);

    let botaoRemover = document.createElement("button");
    botaoRemover.textContent = "x";
    botaoRemover.addEventListener("click", function() {
        this.parentNode.classList.add("desintegrando");
        setTimeout(() => this.parentNode.remove(), 500);
    });
    li.appendChild(botaoRemover);

    document.getElementById("listaDeTarefas").appendChild(li);
    document.getElementById("novaTarefa").value = "";
});
