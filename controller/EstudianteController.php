

<?php
/*
 * Clase estudiante controler encargada de comunicar el modelo y la vista(a travez del javascript)
 * Muestra las principales vistas relacionadas al estudiante
 */
class EstudianteController {

    public function __construct() {
        $this->view = new View();
    }

    public function mostrarOrigenEstudiante() {
        $this->view->show("origenEstudianteView.php", null);
    }

    public function mostrarSexoEstudiante() {
        $this->view->show("sexoView.php", null);
    }

    public function mostrarEstiloAprendizaje2() {
        $this->view->show("estiloAprendizaje2View.php", null);
    }


    public function obtenerRecintoEstilo()
    {
        require 'model/EstudianteModel.php';
        $registros = EstudianteModel::singleton();
        $resultado = $registros->obtenerRecintoEstilo();
         echo json_encode($resultado);
    }
        public function obtenerEstiloSexoPromedioRecinto()
    {
        require 'model/EstudianteModel.php';
        $registros = EstudianteModel::singleton();
        $resultado = $registros->obtenerEstiloSexoPromedioRecinto();
         echo json_encode($resultado);
    }
}
