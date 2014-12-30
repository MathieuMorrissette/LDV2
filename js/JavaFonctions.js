function ValiderPrenom(){
	var x=document.forms["FormulaireInscription"]["Prenom"].value; //On retrouve la valeur de l'input
	var Expression = /^[a-zA-Z ]*$/;
	var Result = true;

	if(x.length == 0){
		document.getElementById("PrenomErreur").innerHTML="* Ce champ ne peut être vide!";
		document.getElementById("PrenomErreur").style.color="red";
		Result = false;
	}
	else if(x.length < 3){
		document.getElementById("PrenomErreur").innerHTML="* Le prénom est trop court!";
		document.getElementById("PrenomErreur").style.color="red";
		Result = false;
	}
	else if(Expression.test(x)){
		document.getElementById("PrenomErreur").innerHTML="*";
		document.getElementById("PrenomErreur").style.color="green";
	}else{
		document.getElementById("PrenomErreur").innerHTML="* Ce champ n'est pas valide";
		document.getElementById("PrenomErreur").style.color="red";
		Result = false;
	}

	return Result;
}

function ValiderNom(Input){
	var x=Input.value; //On retrouve la valeur de l'input
	var Expression = /^[a-zA-Z ]*$/;
	var Result = true;
	if(x.length == 0){
		document.getElementById("NomErreur").innerHTML="* Ce champ ne peut être vide!";
		document.getElementById("NomErreur").style.color="red";
		Result = false;
	}
	else if(x.length < 3){
		document.getElementById("NomErreur").innerHTML="* Le nom est trop court!";
		document.getElementById("NomErreur").style.color="red";
		Result = false;
	}
	else if(Expression.test(x)){
		document.getElementById("NomErreur").innerHTML="*";
		document.getElementById("NomErreur").style.color="green";
	}else{
		document.getElementById("NomErreur").innerHTML="* Ce champ n'est pas valide";
		document.getElementById("NomErreur").style.color="red";
		Result = false;
	}

	return Result;
}

function ValiderCourriel(){
	var x=document.forms["FormulaireInscription"]["Email"].value; //On retrouve la valeur de l'input
	var Expression = /([\w\-]+\@[\w\-]+\.[\w\-]+)/;
	var Result = true;

	if(x.length == 0){
		document.getElementById("CourrielErreur").innerHTML="* Ce champ ne peut être vide!";
		document.getElementById("CourrielErreur").style.color="red";
		Result = false;
	}
	else if(Expression.test(x)){
		document.getElementById("CourrielErreur").innerHTML="*";
		document.getElementById("CourrielErreur").style.color="green";
	}else{
		document.getElementById("CourrielErreur").innerHTML="* Ce champ n'est pas valide";
		document.getElementById("CourrielErreur").style.color="red";
		Result = false;
	}

	return Result;
}

function ValiderMotDePasse(afficher){
	var x=document.forms["FormulaireInscription"]["MotDePasse"].value; //On retrouve la valeur de l'input
	var Result = true;
	
	if(x.length == 0){
		document.getElementById("MotDePasseErreur").innerHTML="* Ce champ ne peut être vide!";
		document.getElementById("MotDePasseErreur").style.color="red";
		Result = false;
	}
	else if(!(x.length < 8)){
		if(afficher){
			document.getElementById("MotDePasseErreur").innerHTML="*";
			document.getElementById("MotDePasseErreur").style.color="green";
		}
	}else{
		if(afficher){
			document.getElementById("MotDePasseErreur").innerHTML="* Le mot de passe est trop court!";
			document.getElementById("MotDePasseErreur").style.color="red";
		}
		Result = false;
	}

	return Result;	
}

function ValiderConfirmationMDP(){
	var Result = true;
	var x=document.forms["FormulaireInscription"]["MotDePasse"].value; //On retrouve la valeur de l'input
	var y=document.forms["FormulaireInscription"]["ConfirmMotDePasse"].value; //On retrouve la valeur de l'input
	if(ValiderMotDePasse(false)){ //Si le mot de passe est valide
		if(!(x == y)){ //Mot de passe pas pareil
			document.getElementById("ConfirmationMDP").innerHTML="* Les mots de passe ne correspondent pas!";
			document.getElementById("ConfirmationMDP").style.color="red";
			Result = false;
		}else{
			document.getElementById("ConfirmationMDP").innerHTML="*";
			document.getElementById("ConfirmationMDP").style.color="green";
		}
	}
	return Result;
}


function CheckAll(){
	var Check1 = ValiderPrenom();
	var Check2 = ValiderNom(document.getElementById("Nom"));
	var Check3 = ValiderCourriel();
	var Check4 = ValiderMotDePasse(true);
	var Check5 = ValiderConfirmationMDP();
	
	if(Check1 && Check2 && Check3 && Check4 && Check5){
		return true;
	}
	return false;
}
function timerbanni(compte){
	var count=compte;

	var counter=setInterval(timer, 1000); //1000 
	
	function timer(){
		count=count-1;
		if (count < 0)
		{
			clearInterval(counter);
			//fin du compteur
			location.reload();
			return;
		}

		document.getElementById("timer").innerHTML=count ;
	}
}

function CheckPersonnage(){
}
function AfficherInfoTeleport(Image){
	
	document.getElementById("Popup").style.visibility = "visible";
	
	document.getElementById("Popup").style.top = Image.offsetTop - 60;
	document.getElementById("Popup").style.left = Image.offsetLeft - 70;
}
function MasquerInfoTeleport(){
	document.getElementById("Popup").style.visibility = "hidden";
}