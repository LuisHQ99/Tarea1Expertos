<?php
/*
 * Clase redes controler encargada de comunicar el modelo y la vista(a travez del javascript)
 * Muestra las principales vistas relacionadas a las redes
 */
class RedesController {

    public function __construct() {
        $this->view = new View();
    }

    public function mostrarRedes() {
        $this->view->show("redesView.php", null);
    }
    
    public function obtenerRedes() {
        require 'model/RedesModel.php';
        $registros = RedesModel::singleton();
        $resultado = $registros->obtenerRedes();
        echo json_encode($resultado);
    }
}
