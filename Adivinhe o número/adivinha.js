function Adivinha (){

    var NumeroMaquina = Math.round(Math.random() * 10);
    var NumeroUsuario = document.getElementById("entrada-numero").value;

    console.log(NumeroUsuario);
    if (NumeroMaquina == NumeroUsuario){
        alert("Você é um mestre da adivinhação!" + "\n" + "Seu número " + NumeroUsuario + " é  igual ao da máquina " + NumeroMaquina + ":D");
    } else {
        alert("Hoje não é o seu dia de sorte :(" + "\n" + "O numero correto era: " + NumeroMaquina);
    }


}


