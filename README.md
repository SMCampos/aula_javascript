# aula_javascript

Introdução JavaScript

Criando uma página HTML5 básica para demonstração de funcionalidades de JavaScript.

Inserido um elemento do tipo button com evento onclick que retorna uma mensagem de agradecimento em forma de alerta
e com mensagem abaixo do button
Ao clicar sobre a mensagem abaixo do button será redirecionado para um site externo.

function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar!!!");
}

function redirecionar(){
    window.open("https://uol.com.br/");
    window.location.href = "https://uol.com.br/";
} 

Inserindo parágrafos com evento onmouseover e onmouseout

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

Inserindo um select com função onchange
function funcaoChange(elemento){
    console.log(elemento.value)
}

Colocando uma função que exibe um alert que a página foi carregada
function load(){
    alert("Página carregada!");
}

Criando funções que vão fazer validação e gerar alertas na página.

Função que percorre um array insere e remove elemento, verifica o tamanho do array,
inverte as posições dos elementos no array e exibe a lista de elementos em um alert.

Função que verifica os dados em um array e mostra em um alert um atributo do objeto.

Função que verifica a idade e retorna uma mensagem em um alert.

Função que percorre os valores através de um for e mostra os resultdos em um alert.

Função que retorna em um alert a data e hora atual.

Função que pega um valor dos parâmetros e substitui por outro valor e retorna em um alert
