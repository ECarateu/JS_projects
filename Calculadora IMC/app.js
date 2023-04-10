function CalculadoraIMC (){

    var peso;
    var altura;
    var resultado;
    var exibicao;

    peso = document.getElementById ("peso").value;
    altura = document.getElementById ("altura").value;
    resultado = (peso /(altura ** 2 )).toFixed(2);
    exibicao = document.getElementById("exibir-resultado");

    exibicao.innerHTML = "Seu IMC é: " + resultado;
}

