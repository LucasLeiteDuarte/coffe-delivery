Este código define um contexto para gerenciar um carrinho de compras de itens de café.
O contexto fornece várias funções e valores para controlar os itens no carrinho, incluindo adicionar, alterar a quantidade, remover e limpar o carrinho.
O estado do carrinho é armazenado localmente usando o localStorage para que os itens persistam mesmo quando a página é recarregada.
A biblioteca immer é utilizada para produzir um novo estado imutável ao modificar os itens do carrinho. Isso garante que as mudanças no estado sejam gerenciadas de maneira segura e eficiente.
