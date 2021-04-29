
//función utilizada en los inputs donde se quieren que solo se ingresen datos numéricos
function onlyNumbers(e) {
    key = e.keyCode || e.which;
    keys = String.fromCharCode(key).toLowerCase();
    letters = " 0123456789";
    specials = [8, 37, 39, 46];

    specialKey = false
    for (var i in specials) {
        if (key == specials[i]) {
            specialKey = true;
            break;
        }
    }

    if (letters.indexOf(keys) == -1 && !specialKey)
        return false;
}

//función que se encarga de validar que los campos no vengan vacíos y con valores correctos
function validacionCampos(id) {
 
    if ($(id).val() == "#")
    {
        $("#resultado").html("Todos los campos son requeridos");
        return false;
    } else if ($(id).val() == "") {
        $("#resultado").html("Todos los campos son requeridos");
        return false;
    } else if (id == "#edad") {
        if ($(id).val() < "0" || $(id).val() > "101") {
            $("#resultado").html("La edad debe ser estar en un rango de 0 a 100");
            return false;
        } else {
            return true;
        }

    } else if (id == "#nota") {
        if ($(id).val() < "0" || $(id).val() > "101") {
            $("#resultado").html("La nota debe estar en un rango de 0 a 100");
            return false;
        } else {
            return true;
        }

    } else {
        return true;
    }
}

/*Formulario 1
 * Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario
 * */

function calculoEuclidesEstiloAprendizaje(registros) {

    ca = parseInt(document.estilo.c7.value) + parseInt(document.estilo.c11.value) + parseInt(document.estilo.c15.value) + parseInt(document.estilo.c19.value) + parseInt(document.estilo.c31.value) + parseInt(document.estilo.c35.value);
    ec = parseInt(document.estilo.c5.value) + parseInt(document.estilo.c9.value) + parseInt(document.estilo.c13.value) + parseInt(document.estilo.c17.value) + parseInt(document.estilo.c25.value) + parseInt(document.estilo.c29.value);
    ea = parseInt(document.estilo.c4.value) + parseInt(document.estilo.c12.value) + parseInt(document.estilo.c24.value) + parseInt(document.estilo.c28.value) + parseInt(document.estilo.c32.value) + parseInt(document.estilo.c36.value);
    or = parseInt(document.estilo.c2.value) + parseInt(document.estilo.c10.value) + parseInt(document.estilo.c22.value) + parseInt(document.estilo.c26.value) + parseInt(document.estilo.c30.value) + parseInt(document.estilo.c34.value);
    console.log(ca + ', ' + ec + ', ' + ea + ', ' + or);
    var distancia = 0;
    var distanciaAux = 0;
    var estiloAprendizaje = "";
    for (var i = 0; i < registros.length; i++) {
        distancia = Math.sqrt(Math.pow(ca - registros[i].CA, 2) + Math.pow(ec - registros[i].EC, 2) +
                Math.pow(ea - registros[i].EA, 2) + Math.pow(or - registros[i].OR, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia;
            estiloAprendizaje = registros[i].ESTILO;

        }
    }
    return estiloAprendizaje;
}
//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarEstiloAprendizaje() {

    estilo = "";
    document.final.ESTILOFINAL.value = estilo;

    $.ajax({
        url: '?controlador=Estudiante&accion=obtenerRecintoEstilo',
        type: 'post',
        success: function (response) {
            estudiantes = JSON.parse(response);
            estilo = calculoEuclidesEstiloAprendizaje(estudiantes);
            document.final.ESTILOFINAL.value = estilo;

        }
    });

}

/*Formulario 2
 * El siguiente metodo se encarga de transformar los datos de la base de datos a valores numericos
 * esto para poder aplicar el algoritmo de Euclides
 * */
function convertirRegistrosANumeros(registros) {
    for (var i = 0; i < registros.length; i++) {
        if (registros[i].Sexo == 'M') {
            registros[i].Sexo = 1;
        } else {
            registros[i].Sexo = 2;
        }

        if (registros[i].Recinto == 'Paraiso') {
            registros[i].Recinto = 1;
        } else {
            registros[i].Recinto = 2;
        }

        if (registros[i].Estilo.toLowerCase() == 'acomodador') {
            registros[i].Estilo = 1;
        } else if (registros[i].Estilo.toLowerCase() == 'divergente') {
            registros[i].Estilo = 2;
        } else if (registros[i].Estilo.toLowerCase() == 'asimilador') {
            registros[i].Estilo = 3;
        } else if (registros[i].Estilo.toLowerCase() == 'convergente') {
            registros[i].Estilo = 4;
        }
    }
    return registros;
}

//Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario
function calculoEuclidesOrigenEstudiante(registros) {

    estudiantes = convertirRegistrosANumeros(registros);

    sexoUsuario = parseInt($("#sexo").val());
    notaUsuario = parseInt($("#nota").val());
    estiloUsuario = parseInt($("#estilo").val());

    var distancia = 0;
    var distanciaAux = 0;
    var recinto = "";
    for (var i = 0; i < estudiantes.length; i++) {
        distancia = Math.sqrt(Math.pow(sexoUsuario - estudiantes[i].Sexo, 2) + Math.pow(notaUsuario - estudiantes[i].Promedio, 2) +
                Math.pow(estiloUsuario - estudiantes[i].Estilo, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia;
            recinto = estudiantes[i].Recinto;

        }
    }
    if (recinto == 1) {
        return 'Paraíso';
    } else {
        return 'Turrialba';
    }
}

//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarOrigenEstudiante() {
    $("#resultado").html("");
    if (validacionCampos("#estilo") && validacionCampos("#nota") && validacionCampos("#sexo")) {

        $.ajax({
            url: '?controlador=Estudiante&accion=obtenerEstiloSexoPromedioRecinto',
            type: 'post',
            success: function (response) {
                estudiantes = JSON.parse(response);
                recinto = calculoEuclidesOrigenEstudiante(estudiantes);
                $("#resultado").html("Su recinto de origen es: " + recinto);

            }
        });
    }


}

/*Formulario 3
*Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario
*/
function calculoEuclidesSexoEstudiante(registros) {

    estudiantes = convertirRegistrosANumeros(registros);

    recintoUsuario = parseInt($("#recinto").val());
    notaUsuario = parseInt($("#nota").val());
    estiloUsuario = parseInt($("#estilo").val());


    var distancia = 0;
    var distanciaAux = 0;
    var sexo = "";
    for (var i = 0; i < estudiantes.length; i++) {
        distancia = Math.sqrt(Math.pow(recintoUsuario - estudiantes[i].Recinto, 2) + Math.pow(notaUsuario - estudiantes[i].Promedio, 2) +
                Math.pow(estiloUsuario - estudiantes[i].Estilo, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia;
            sexo = estudiantes[i].Sexo;

        }
    }
    if (sexo == 1) {
        return 'Masculino';
    } else {
        return 'Femenino';
    }

}

//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarSexoEstudiante() {

    $("#resultado").html("");
    if (validacionCampos("#estilo") && validacionCampos("#nota") && validacionCampos("#recinto")) {
        $.ajax({
            url: '?controlador=Estudiante&accion=obtenerEstiloSexoPromedioRecinto',
            type: 'post',
            success: function (response) {
                estudiantes = JSON.parse(response);
                sexo = calculoEuclidesSexoEstudiante(estudiantes);
                $("#resultado").html("Su sexo es: " + sexo);

            }
        });
    }

}



/*Formulario 4 
*Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario
*/
function calculoEuclidesEstilo2(registros) {

    estudiantes = convertirRegistrosANumeros(registros);

    recintoUsuario = parseInt($("#recinto").val());
    notaUsuario = parseInt($("#nota").val());
    sexoUsuario = parseInt($("#sexo").val());


    var distancia = 0;
    var distanciaAux = 0;
    var estilo = "";
    for (var i = 0; i < estudiantes.length; i++) {
        distancia = Math.sqrt(Math.pow(recintoUsuario - estudiantes[i].Recinto, 2) + Math.pow(notaUsuario - estudiantes[i].Promedio, 2) +
                Math.pow(sexoUsuario - estudiantes[i].Sexo, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia;
            estilo = estudiantes[i].Estilo;

        }
    }

    if (estilo == 1) {
        return estilo = 'ACOMODADOR';
    } else if (estilo == 2) {
        return estilo = 'DIVIRGENTE';
    } else if (estilo == 3) {
        return estilo = 'ASIMILADOR';
    } else if (estilo == 4) {
        return estilo = 'CONVERGENTE';
    }

}


//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarEstilo2Estudiante() {

    $("#resultado").html("");
    if (validacionCampos("#recinto") && validacionCampos("#nota") && validacionCampos("#sexo")) {
        $.ajax({
            url: '?controlador=Estudiante&accion=obtenerEstiloSexoPromedioRecinto',
            type: 'post',
            success: function (response) {
                estudiantes = JSON.parse(response);
                sexo = calculoEuclidesEstilo2(estudiantes);
                $("#resultado").html("Su estilo es: " + sexo);

            }
        });
    }

}


/*Formulario 5
 * El siguiente metodo se encarga de transformar los datos de la base de datos a valores numericos
 * esto para poder aplicar el algoritmo de Euclides
 * */
function convertirRegistrosProfesorANumeros(registros) {
    for (var i = 0; i < registros.length; i++) {
        if (registros[i].B == 'F') {
            registros[i].B = 1;
        } else if (registros[i].B == 'M') {
            registros[i].B = 2;
        } else {
            registros[i].B = 3;
        }

        if (registros[i].C == 'B') {
            registros[i].C = 1;
        } else if (registros[i].C == 'I') {
            registros[i].C = 2;
        } else {
            registros[i].C = 3;
        }

        if (registros[i].E == 'ND') {
            registros[i].E = 1;
        } else if (registros[i].E == 'DM') {
            registros[i].E = 2;
        } else {
            registros[i].E = 3;
        }

        if (registros[i].F == 'A') {
            registros[i].F = 1;
        } else if (registros[i].F == 'H') {
            registros[i].F = 2;
        } else {
            registros[i].F = 3;
        }

        if (registros[i].G == 'N') {
            registros[i].G = 1;
        } else if (registros[i].G == 'S') {
            registros[i].G = 2;
        } else {
            registros[i].G = 3;
        }

        if (registros[i].G == 'N') {
            registros[i].G = 1;
        } else if (registros[i].G == 'S') {
            registros[i].G = 2;
        } else {
            registros[i].G = 3;
        }

        if (registros[i].H == 'N') {
            registros[i].H = 1;
        } else if (registros[i].H == 'S') {
            registros[i].H = 2;
        } else {
            registros[i].H = 3;
        }
    }
    return registros;
}

//Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario

function calculoEuclidesTipoProfesor(registros) {

    profesores = convertirRegistrosProfesorANumeros(registros);

    edad = parseInt($("#edad").val());
    if (edad <= 30) {
        edad = 1;
    } else if (edad > 30 && edad <= 55) {
        edad = 2;
    } else if (edad > 55) {
        edad = 3;
    }
    sexo = parseInt($("#sexo").val());
    experiencia = parseInt($("#experiencia").val());
    curso = parseInt($("#curso").val());
    diciplina = parseInt($("#diciplina").val());
    habilidades = parseInt($("#habilidades").val());
    usoTecnologia = parseInt($("#usoTecnologia").val());
    usoWeb = parseInt($("#usoWeb").val());

    //console.log(profesores);
    var distancia = 0;
    var distanciaAux = 0;
    var estilo = "";
    for (var i = 0; i < profesores.length; i++) {
        distancia = Math.sqrt(Math.pow(edad - profesores[i].A, 2) + Math.pow(sexo - profesores[i].B, 2)
                + Math.pow(experiencia - profesores[i].C, 2) + Math.pow(curso - profesores[i].D, 2)
                + Math.pow(diciplina - profesores[i].E, 2) + Math.pow(habilidades - profesores[i].F, 2)
                + Math.pow(usoTecnologia - profesores[i].G, 2) + Math.pow(usoWeb - profesores[i].H, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia;

            estilo = profesores[i].Class;

        }
    }

    if (estilo == 'Beginner') {
        return estilo = 'Principiante';
    } else if (estilo == 'Intermediate') {
        return estilo = 'Intermedio';
    } else {
        return estilo = 'Avanzado';
    }

}


//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarTipoProfesor() {

    $("#resultado").html("");

    if (validacionCampos("#edad") && validacionCampos("#sexo") && validacionCampos("#experiencia")
            && validacionCampos("#curso") && validacionCampos("#diciplina")
            && validacionCampos("#habilidades") && validacionCampos("#usoTecnologia")
            && validacionCampos("#usoWeb")
            ) {
        $.ajax({
            url: '?controlador=Profesor&accion=obtenerProfesores',
            type: 'post',
            success: function (response) {
                profesores = JSON.parse(response);
                tipo = calculoEuclidesTipoProfesor(profesores);
                $("#resultado").html("Su tipo es: " + tipo);

            }
        });
    }
}

/*Formulario 6
 * El siguiente metodo se encarga de transformar los datos de la base de datos a valores numericos
 * esto para poder aplicar el algoritmo de Euclides
 * */
function convertirRegistrosRedesANumeros(registros) {
    for (var i = 0; i < registros.length; i++) {
        if (registros[i].Capacity_Ca == 'Low') {
            registros[i].Capacity_Ca = 1;
        } else if (registros[i].Capacity_Ca == 'Medium') {
            registros[i].Capacity_Ca = 2;
        } else {
            registros[i].Capacity_Ca = 3;
        }

        if (registros[i].Costo_Co == 'Low') {
            registros[i].Costo_Co = 1;
        } else if (registros[i].Costo_Co == 'Medium') {
            registros[i].Costo_Co = 2;
        } else {
            registros[i].Costo_Co = 3;
        }

    }
    return registros;
}

//Se aplica el el algoritmo de Euclides, y el ordenamiento del valor más similar al del usuario

function calculoEuclidesTipoRed(registros) {

    redes = convertirRegistrosRedesANumeros(registros);
    confiabilidad = parseInt($("#confiabilidad").val());
    enlaces = parseInt($("#enlaces").val());
    capacidad = parseInt($("#capacidad").val());
    costo = parseInt($("#costo").val());


    //console.log(redes);
    var distancia = 0;
    var distanciaAux = 0;
    var estilo = "";
    for (var i = 0; i < redes.length; i++) {
        distancia = Math.sqrt(Math.pow(confiabilidad - redes[i].Reliability_R, 2) +
                Math.pow(enlaces - redes[i].Number_of_links_L, 2) + Math.pow(capacidad - redes[i].Capacity_Ca, 2)
                + Math.pow(costo - redes[i].Costo_Co, 2));

        if (distancia < distanciaAux || i == 0) {
            distanciaAux = distancia

            estilo = redes[i].Class;

        }
    }

    return estilo;

}


//Metodo ajax para extraer datos de la base de datos, utilizando el modelo MVC
function detectarTipoRed() {

    $("#resultado").html("");
    if (validacionCampos("#confiabilidad") && validacionCampos("#enlaces")
            && validacionCampos("#capacidad") && validacionCampos("#costo")) {
        $.ajax({
            url: '?controlador=Redes&accion=obtenerRedes',
            type: 'post',
            success: function (response) {
                redes = JSON.parse(response);
                tipo = calculoEuclidesTipoRed(redes);
                $("#resultado").html("Su red es: " + tipo);

            }
        });
    }

}