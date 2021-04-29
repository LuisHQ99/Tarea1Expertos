
<html lang="es">

    <head>
        <title>Tarea 1</title>
        <meta charset="utf-8" />
        <meta name="description" content="Tarea 1" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Jquery  -->
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="public/js/jquery-3.2.1.js" type="text/javascript"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="public/css/style.css" />
        <script src="public/js/script.js" type="text/javascript"></script>

      
    </head>

    <body>
        <nav class="navbar navbar-expand-lg navbar-light sticky-top" style="background-color: bisque;">
            <a class="navbar-brand" href="?controlador=Index&accion=mostrar">Estilo aprendizaje 1</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="?controlador=Estudiante&accion=mostrarOrigenEstudiante">Origen estudiante<span class="sr-only">(current)</span></a>
                    <a class="nav-item nav-link" href="?controlador=Estudiante&accion=mostrarSexoEstudiante">Sexo</a>
                    <a class="nav-item nav-link" href="?controlador=Estudiante&accion=mostrarEstiloAprendizaje2">Estilo aprendizaje 2</a>
                    <a class="nav-item nav-link" href="?controlador=Profesor&accion=mostrarTipoProfesor">Tipo profesor</a>
                    <a class="nav-item nav-link" href="?controlador=Redes&accion=mostrarRedes">Redes</a>
                </div>
            </div>
        </nav>

    </body>