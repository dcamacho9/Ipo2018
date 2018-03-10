function redirect() {
	var textValue = document.getElementById("text").value;
	if((textValue == "Conciertos") || (textValue == "conciertos") || (textValue == "concierto") || (textValue == "Concierto"))
    {
        location.href = "concert.html"
    }
    else if((textValue == "Museos") || (textValue == "museos") || (textValue == "museo") || (textValue == "Museo"))
    {
        location.href = "museum.html"
    }
    else if((textValue == "Teatros") || (textValue == "teatros") || (textValue == "teatro") || (textValue == "Teatro"))
    {
        location.href = "teatro.html"
    }
}

function insertar(){
    var textoId = document.getElementById("texto").value;
    var filaId = document.getElementById("seleccion").value;
    document.getElementById(filaId).innerHTML=textoId;
}