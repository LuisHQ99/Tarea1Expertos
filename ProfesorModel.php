<?php
/*
 * Clase profesor model encargada de comunicar el modelo la base de datos 
 * extrae datos relacionados al profesor
 */
class ProfesorModel
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

    //obtiene los registros de los proferosres
    public function obtenerProfesores()
    {
        $consulta = $this->db->prepare("CALL  `sp_obtener_profesores`();");
        $consulta->execute();
        $resultado = $consulta->fetchAll();
        $consulta->closeCursor();

        return $resultado;
    }

}

