<?php
class gest_accueil{
	function __construct($_chemin){
		if (isset($_chemin[2]))
		{
			$methode = $_chemin[2];
			if(method_exists($this, $methode))
			{
				$this->$methode();
			}
			else
			{
				vue::afficher("404.html");
			}
		}
		else
		{
			$vue = new vue();
			$vue->render("vue/news.html");	
		}
	}
	
	function AfficherHautPage()
	{
		if(isset($_SESSION["Utilisateur"]))
		{

		}
		vue::AfficherAvecData("index_haut.html");
	}

	function AfficherBasPage()
	{
		vue::Afficher("index_bas.html");
	}

	function news()
	{
		
		
	}
}
?>
