<?php
/*
 * Clase profesor controler encargada de comunicar el modelo y la vista(a travez del javascript)
 * Muestra las principales vistas relacionadas al profesor
 */
class ProfesorController {

    public function __construct() {
        $this->view = new View();
    }

    public function mostrarTipoProfesor() {
        $this->view->show("tipoProfesorView.php", null);
    }

    public function obtenerProfesores() {
        require 'model/ProfesorModel.php';
        $registros = ProfesorModel::singleton();
        $resultado = $registros->obtenerProfesores();
        echo json_encode($resultado);
    }

}
