function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";

    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!!!");
}

function redirecionar(){
    window.open("https://uol.com.br/");
    window.location.href = "https://uol.com.br/";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!!";
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
   //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
}

function load(){
    alert("Página carregada!");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}

//função para validar a idade ao acessar a página
var validar;
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
validaIdade(idade);
console.log(validar);


//Função que pega um valor dos parâmetros e substitui por outro valor e retorna em um alert
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão", "Japão", "Brasil"));

//função que retorna em um alert a soma de dois números
function soma(n1, n2){
    return n1 + n2;
}
alert(soma(5, 2));

//Função que retorna em um alert a data e hora atual
var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getDay());
alert(d.getHours());

//Função que percorre os valores através de um for e mostra os resultdos em um alert
var count;
for (count=0; count <=5; count++){
    alert(count);
};

var count = 0;
while(count < 5){
    console.log(count);
    alert(count);
    count++;
}

//Função que verifica a idade e retorna uma mensagem em um alert
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!");
};

//Função que verifica os dados em um array e mostra em um alert um objeto na posição indicada do array
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"pera", cor:"verde"}];
console.log(frutas);
alert(frutas[1].nome);

//Função que verifica os dados em um array e mostra em um alert um atributo do objeto
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"pera", cor:"verde"}];
console.log(fruta);
alert(fruta[0, 1].cor); 

//Função que percorre um array insere e remove elemento, verifica o tamanho do array,
// inverte as posições dos elementos no array e exibe a lista de elementos em um alert.
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
lista.pop([3]);
console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
console.log(lista.length);
console.log(lista.reverse());
alert(lista);