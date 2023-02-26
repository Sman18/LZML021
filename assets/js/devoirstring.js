// Element en + je savais pas sur quelle page html le mettre 

function exercices() {
    var div = document.getElementById("exercices");
    div.style.display = "block";
}

// exercice 1
function prenom() {
	var prenom = document.getElementById("prenom").value;
    document.getElementById("holder1").innerHTML = prenom;
}

function nomdefamille() {
    var nomfam = document.getElementById("nomdefamille").value;
    document.getElementById("holder1").innerHTML = nomfam;
}

function nomcomplet() {
    var prenom = document.getElementById("prenom").value;
    var nomfam = document.getElementById("nomdefamille").value;
    var nomcomplet = prenom + " " + nomfam;
    document.getElementById("holder1").innerHTML = nomcomplet;
}


// exercice 2
function segmentText() {
	var texte = document.getElementById("texte").value;
    var mots = texte.split(" ");
    var motsString = mots.join(" | ");
    document.getElementById("holder2").innerHTML = motsString;
}
