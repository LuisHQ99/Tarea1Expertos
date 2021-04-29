<?php
/*
 * Clase index controler encargada de comunicar el modelo y la vista(a travez del javascript)
 * Muestra la vista principal 
 */
class IndexController {

    public function __construct() {
        $this->view = new View();
    }

    public function mostrar() {
        $this->view->show("indexView.php", null);
    }



}
