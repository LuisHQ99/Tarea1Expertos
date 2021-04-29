<?php
include 'public/header.php';
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
    <head>

        <meta content="text/html; charset=UTF-8" http-equiv="content-type">
        <title>Sexo del estudiante</title>
        <meta http-equiv="CONTENT-TYPE" content="text/html; charset=utf-8">
        <meta name="generator" content="Bluefish 2.2.2" >

    </head> 
    <body>
    <center>
        <div class="container">
            <h3>Tipo de red</h3>
            <form action="/action_page.php">
                <div class="form-group">
                    <label for="estiloLbl">Confiabilidad de la red:</label>
                    <select id="confiabilidad" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">El numero de enlaces:</label>
                    <select id="enlaces" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Capacidad total de la red:</label>
                    <select id="capacidad" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alta</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="estiloLbl">Costo de la red:</label>
                    <select id="costo" class="form-control" style="width:50%">
                        <option value="#">Seleccione...</option>
                        <option value="1">Baja</option>
                        <option value="2">Media</option>
                        <option value="3">Alto</option>
                    </select>
                </div>
                
                <div class="alert-danger">
                    <span id="resultado" style="color:black;"></span>
                </div>
                <br>
                <input class="btn btn-dark" value="CALCULAR" onclick="detectarTipoRed()" type="button">
            </form>

        </div>
    </center>
</body>


</html>

<?php
include_once 'public/footer.php';
?>