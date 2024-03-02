# Lista de Tarefas

Este projeto é uma aplicação web simples para gerenciar uma lista de tarefas. Foi desenvolvido usando HTML, CSS e JavaScript.

## Funcionalidades

1. **Adicionar Tarefas**: Os usuários podem adicionar novas tarefas à lista. Para isso, basta digitar a tarefa no campo de texto e clicar no botão "Adicionar". As tarefas são salvas no `localStorage`, então elas persistirão mesmo depois que a página for recarregada.

2. **Marcar Tarefas como Concluídas**: As tarefas podem ser marcadas como concluídas ao clicar na caixa de seleção ao lado de cada tarefa. As tarefas concluídas são mostradas com um risco através do texto. O status de conclusão da tarefa também é salvo no `localStorage`.

3. **Remover Tarefas**: Cada tarefa tem um botão de lixeira que, quando clicado, exibe um modal de confirmação. Os usuários podem confirmar ou cancelar a exclusão da tarefa. As tarefas excluídas são removidas do `localStorage`.

4. **Contador de Tarefas**: O número total de tarefas é exibido no topo da lista.

5. **Persistência de Dados**: Todas as tarefas são salvas no `localStorage` do navegador. Isso significa que as tarefas, seu status de conclusão e a ordem das tarefas serão preservados mesmo quando a página for recarregada ou fechada.

## Exemplos

Aqui estão alguns exemplos de como usar a aplicação:

- Para adicionar uma tarefa, digite "Comprar leite" no campo de texto e clique em "Adicionar". A tarefa "Comprar leite" será adicionada à lista.

- Para marcar a tarefa "Comprar leite" como concluída, clique na caixa de seleção ao lado da tarefa. O texto da tarefa será riscado.

- Para remover a tarefa "Comprar leite", clique no botão da lixeira ao lado da tarefa. Um modal de confirmação será exibido. Clique em "Sim" para confirmar a exclusão.

## Executando o Projeto

Para executar este projeto localmente, siga estas etapas:

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.

## Contribuindo

Contribuições são bem-vindas! Por favor, leia as diretrizes de contribuição antes de enviar uma solicitação de pull.

## Licença

Este projeto está licenciado sob a licença MIT.
