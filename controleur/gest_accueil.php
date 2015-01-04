<?php
class gest_accueil{
	function __construct($_chemin){
		if (isset($_chemin[2]))
		{
			$methode = $_chemin[2];

            echo $methode;
			if(method_exists($this, $methode))
			{
				$this->$methode();
			}
			else
			{
				$vue = new vue();
			    $vue->render("vue/404.html");	
			}
		}
		else
		{
			$vue = new vue();
			$vue->render("vue/news.html");	
		}
	}
	
    function connection(){
        include("model/utilisateur.php");
        
        utilisateur::connection($_POST["txtCourriel"],  $_POST["txtMDP"]);
    }
}
?>
