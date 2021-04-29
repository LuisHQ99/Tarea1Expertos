<?php
/*
 * Clase redes model encargada de comunicar el modelo la base de datos 
 * extrae datos relacionados a las redes
 */
class RedesModel
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

    //obtiene los registros de las redes 
    public function obtenerRedes()
    {
        $consulta = $this->db->prepare("CALL  `sp_obtener_redes`();");
        $consulta->execute();
        $resultado = $consulta->fetchAll();
        $consulta->closeCursor();

        return $resultado;
    }

}

