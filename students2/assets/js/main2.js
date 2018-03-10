function redirect() {
	var textValue = document.getElementById("text").value;
	if((textValue == "Conciertos") || (textValue == "conciertos") || (textValue == "concierto") || (textValue == "Concierto"))
    {
        location.href = "chat.html"
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

