<?php

class utilisateur{
    private $m_ID; //Le ID de l'utilisateur.

    function __construct($_ID){
    	$this->m_ID = $_ID;
    }

    public static function connection($_Courriel, $_MDP)
    {
        $Courriel = $_Courriel;
        $MDP = $_MDP;

        $bd = bd::obtenir_bd();

        if(empty($Courriel) && empty($MDP))
        {
            echo "Vous devez fournir un nom d'utilisateur et un mot de passe!";
        }
        elseif(empty($Courriel))
        {
            echo "Vous devez fournir un nom d'utilisateur";
        }
        elseif(empty($MDP))
        {
            echo "Vous devez fournir un mot de passe";
        }
        else 
        {
            $Requete = $BD->prepare("SELECT UtiID,UtiMDP FROM Utilisateurs WHERE UtiEmail = :Email");
            $Requete->bindValue(":Email",$Courriel);

            $Requete->execute();

            if($Ligne = $Requete->fetch(PDO::FETCH_ASSOC)){
                if(password_verify($MotDePasse,$Ligne["UtiMDP"])){
	                $Utilisateur = new utilisateur((int)$Ligne["UtiID"]);
	                $Utilisateur->AjusterMises();
	                return $Utilisateur;
                }
                else
                {
	                echo "Mauvais mot de passe!";
                }
            }
            else
            {
                echo "Le nom d'utilisateur n'existe pas!";
            }
        }
       
    }
}
?>
