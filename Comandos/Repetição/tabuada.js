var i = 0;
var j = 0;

for(i=0; i<=10; i++){
    //para facilitar visualização
    document.write ("Tabuada do " + i +"<br>" + "______________" + "<br>");

    //Calculando valores
    for(j=0;j<=10; j++){
        document.write ( i + "x" + j + " = " + (i * j) + "<br>" );
        
        //para facilitar visualização
        if(j== 10){
            document.write ("______________" + "<br>");
        }

    } 
}