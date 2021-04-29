<?php
/*
 * Clase estudiante model encargada de comunicar el modelo la base de datos 
 * extrae datos relacionados al estudiante
 */
class EstudianteModel
{

    protected $db;
    private static $instance = null;
    protected $providerID = null;

    // constructor
    private function __construct()
    {
        include_once __DIR__ . '/../libs/SPDO.php';
        $this->db = SPDO::singleton();
    }

    public static function singleton()
    {
        if (self::$instance == null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    //obtiene los registros de recinto estilo
    public function obtenerRecintoEstilo()
    {
        $consulta = $this->db->prepare("CALL  `sp_obtener_recinto_estilo`();");
        $consulta->execute();
        $resultado = $consulta->fetchAll();
        $consulta->closeCursor();

        return $resultado;
    }

        public function obtenerEstiloSexoPromedioRecinto()
    {
        $consulta = $this->db->prepare("CALL  `sp_obtener_estilo_sexo_promedio_recinto`();");
        $consulta->execute();
        $resultado = $consulta->fetchAll();
        $consulta->closeCursor();

        return $resultado;
    }
}
