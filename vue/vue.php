<?php
class vue{

    private $m_donnee = array();  
             
    public function __set($clef, $value)
    {
        $this->m_donnee[$clef] = $value;
    }
      
    public function __get($clef)
    {
        if(isset($this->m_donnee[$clef])) {
            return $this->m_donnee[$clef];
        }
        else {
            return false;
        }
    }
    public function render($chemin, $donnee = null)
    {
        if(isset($donnee))
        {
            $this->m_donnee = array_merge($this->m_donnee, $donnee);
        }

        if(file_exists($chemin)) {
            include($chemin);  
        }
    }
}
?>
