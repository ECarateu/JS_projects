// by:@helloucode

function CalcularCombustivel (tanque, preco,quilometragem){
    var tanque = document.getElementById("tanque").value;
    var preco = document.getElementById("preco").value;
    var quilometragem = document.getElementById("quilometragem").value;

    var resultadoconsumo =(quilometragem / tanque).toFixed(2); 
    var totalgasto = (resultadoconsumo * preco).toFixed(2);
    document.getElementById("resultado-consumo").innerHTML = "Seu consumo é: " + resultadoconsumo + " km/litro";
    document.getElementById("resultado-gasto").innerHTML = "O total gasto com combustivel é: R$ "  + totalgasto;
}

