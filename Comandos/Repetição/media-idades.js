let TotaldeFamiliares = parseInt(prompt("Digite o número de familiares"));

for (let i=1; i <= TotaldeFamiliares; i++){
    var idades = parseInt(prompt ("Digite as idades"));
    idades = idades+idades ;

}
document.write ("A media das idades dos familiares é: " + Math.round(idades/TotaldeFamiliares));