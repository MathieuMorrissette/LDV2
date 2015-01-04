<?php

//Classe qui représente la base de données.
class bd
{
	private static $m_BD; //L'instance de la connection de la base de données.
	
	//Méthode pour le singleton.
	public static function obtenir_bd()
	{
		if (!isset(static::$m_BD)) {
			static::$m_BD = new PDO("mysql:host=localhost;dbname=ldv2", "root", "");
		}
		return static::$m_BD;
	}

	//Empêcher l'instanciation de la classe.
	private function __construct(){}
}

?>
