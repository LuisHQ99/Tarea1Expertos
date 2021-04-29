<?php
include 'public/header.php';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>

        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <title>Origen del estudiante</title>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8">
        <meta name="generator" content="Bluefish 2.2.2" >

    </head>
    <body>
    <center>
        <div class="container">
            <h3>Origen del estudiante</h3>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="estiloLbl">Estilo de aprendizaje:</label>
                    <select id="estilo" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="2">Divergente</option>
                        <option value="4">Convergente</option>
                        <option value="3">Asimilador</option>
                        <option value="1">Acomodador</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="notaLbl">Último promedio para matrícula:</label>
                    <input onkeypress="return onlyNumbers(event)" type="text" class="form-control" id="nota" placeholder="Escriba su nota" name="nota" style="width:50%">
                </div>
                <div class="form-group">
                    <label for="estiloLbl">Sexo:</label>
                    <select id="sexo" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="2">Femenino</option>
                        <option value="1">Masculino</option>
                    </select>
                </div>
                <div class="alert-danger">
                    <span id="resultado" style="color:black;"></span>
                </div>
                <br>
                <input class="btn btn-dark" value="CALCULAR" onclick="detectarOrigenEstudiante()" type="button">

            </form>

        </div>
    </center>
</body>


</html>

<?php
include_once 'public/footer.php';
?>