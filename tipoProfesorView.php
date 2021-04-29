<?php
include 'public/header.php';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>

        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <title>Estilo de profesor</title>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8">
        <meta name="generator" content="Bluefish 2.2.2" >

    </head> 
    <body>
    <center>
        <div class="container">
            <h3>Tipo de profesor</h3>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="notaLbl">Edad:</label>
                    <input onkeypress="return onlyNumbers(event)" type="text" class="form-control" id="edad" placeholder="Anote su edad" name="edad" style="width:50%">
                </div>

                <div class="form-group">
                    <label for="sexoLbl">Sexo:</label>
                    <select id="sexo" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Femenino</option>
                        <option value="2">Masculino</option>
                        <option value="3">No aplica</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Experiencia:</label>
                    <select id="experiencia" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Principiante</option>
                        <option value="2">Intermedio</option>
                        <option value="3">Avanzado</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Numero de veces que ha dado los cursos:</label>
                    <select id="cursos" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Nunca</option>
                        <option value="2">De 1 a 5</option>
                        <option value="3">Más de 5</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Disciplina o área de especialización del profesor:</label>
                    <select id="diciplina" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="2">Toma de decisiones</option>
                        <option value="1">Diseño de red</option>
                        <option value="3">Otros</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Habilidades usando computadoras:</label>
                    <select id="habilidades" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="3">Bajo</option>
                        <option value="1">Medio</option>
                        <option value="2">Alto</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Experiencia del docente en el uso de tecnología basada en la Web para la enseñanza:</label>
                    <select id="usoTecnologia" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Nunca</option>
                        <option value="2">A veces</option>
                        <option value="3">A menudo</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Experiencia del docente en el uso de sitios web:</label>
                    <select id="usoWeb" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Nunca</option>
                        <option value="2">A veces</option>
                        <option value="3">A menudo</option>
                    </select>
                </div>
                
                <div class="alert-danger">
                    <span id="resultado" style="color:black;"></span>
                </div>
                <br>
                <input class="btn btn-dark" value="CALCULAR" onclick="detectarTipoProfesor()" type="button">


            </form>

        </div>
    </center>
</body>


</html>

<?php
include_once 'public/footer.php';
?>