<?php

class application{
	function __construct(){
        	session_start();
        
		include('vue/vue.php');
        include("model/bd.php");
		
		//Parse URL
		$chemin = parse_url($_SERVER["REQUEST_URI"])["path"];
		$chemin = array_filter(explode("/", $chemin));

		//Obtenir le controlleur
		if (isset($chemin[1]))
		{
			$controleur = $chemin[1];
		}
		else
		{
			$controleur = "gest_accueil";
		}

		if(file_exists("controleur/$controleur.php"))
		{
			include("controleur/$controleur.php");
			$controleur = new $controleur($chemin);
		}
		else
		{
			vue::Afficher("404.html");
		}
	}
 }
 
 
 ?>
