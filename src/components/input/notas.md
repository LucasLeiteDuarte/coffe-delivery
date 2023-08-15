Este código define um componente reutilizável chamado Input, que é projetado para renderizar um campo de entrada (input) estilizado.
Ele aceita várias propriedades, incluindo a possibilidade de fornecer um texto de erro e um texto à direita do input.
O uso de forwardRef permite que a ref seja passada para o componente, permitindo que ele seja manipulado diretamente.

O componente renderiza o input estilizado dentro de um container, podendo mostrar um texto à direita do input, caso fornecido.
Se houver um erro, também renderiza uma mensagem de erro usando o componente estilizado RegularText.
Os estilos do componente são importados de um arquivo de estilos separado. Isso permite que você crie campos de entrada estilizados e personalizáveis em seu aplicativo React.
