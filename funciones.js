document.getElementById("info_personal").onclick = function() {
    document.getElementById('sector2').style.display = 'none';
    document.getElementById('sector3').style.display = 'none';
    document.getElementById('sector4').style.display = 'none';
    document.getElementById('sector1').style.display = 'block';
}

document.getElementById("experiencia").onclick = function() {
    document.getElementById('sector1').style.display = 'none';
    document.getElementById('sector3').style.display = 'none';
    document.getElementById('sector4').style.display = 'none';
    document.getElementById('sector2').style.display = 'block';
}

document.getElementById("habilidad").onclick = function() {
    document.getElementById('sector1').style.display = 'none';
    document.getElementById('sector2').style.display = 'none';
    document.getElementById('sector4').style.display = 'none';
    document.getElementById('sector3').style.display = 'block';
}

document.getElementById("enviar").onclick = function() {
    document.getElementById('sector1').style.display = 'none';
    document.getElementById('sector2').style.display = 'none';
    document.getElementById('sector3').style.display = 'none';
    document.getElementById('sector4').style.display = 'block';
}

var datos = {
    "personales": {
        apellido: 'GONZALEZ',
        nombre: 'José Ariel',
        dni: '23.123.456',
        cuil: '20-23123456-0',
        fecnac: '1973-01-27',
        domicilio: 'La Rioja 68',
        localidad: 'Monteros',
        provincia: 'Tucumán',
        telefono: '38634654875',
        correo: 'prueba1@gmail.com'
    },  
    "experiencia": {
        empresa0: 'SINTESIS SRL',
        cargo0: 'Operador de sistemas',
        antig0: '3 años',
        empresa1: 'SANTISTA TEXTIL SA',
        cargo1: 'Analista de sistemas',
        antig1: '3 años',
        empresa2: 'UNT-Facultad de Medicina',
        cargo2: 'Jefe Dpto. Administrativo',
        antig2: '26 años'
    }  
};   

document.getElementById("apellido").value = datos.personales.apellido;
document.getElementById("nombre").value = datos.personales.nombre;
document.getElementById("dni").value = datos.personales.dni;
document.getElementById("cuil").value = datos.personales.cuil;
document.getElementById("fecnac").value = datos.personales.fecnac;
document.getElementById("domicilio").value = datos.personales.domicilio;
document.getElementById("localidad").value = datos.personales.localidad;
document.getElementById("provincia").value = datos.personales.provincia;
document.getElementById("telefono").value = datos.personales.telefono;
document.getElementById("correo").value = datos.personales.correo;

document.getElementById("empresa0").value = datos.experiencia.empresa0;
document.getElementById("cargo0").value = datos.experiencia.cargo0;
document.getElementById("antig0").value = datos.experiencia.antig0;
document.getElementById("empresa1").value = datos.experiencia.empresa1;
document.getElementById("cargo1").value = datos.experiencia.cargo1;
document.getElementById("antig1").value = datos.experiencia.antig1;
document.getElementById("empresa2").value = datos.experiencia.empresa2;
document.getElementById("cargo2").value = datos.experiencia.cargo2;
document.getElementById("antig2").value = datos.experiencia.antig2;

function validar(){

    var todo_correcto = true;
            
    if(document.getElementById("apellido").value.length < 2){
        todo_correcto = false;
    }
    if(document.getElementById("nombre").value.length < 2){
        todo_correcto = false;
    }
    if(document.getElementById("dni").value.length < 9 ){
        todo_correcto = false;
    }
    if(document.getElementById("cuil").value.length < 11 ){
        todo_correcto = false;
    }
    if(document.getElementById("domicilio").value.length < 10 ){
        todo_correcto = false;
    }
    if(document.getElementById("localidad").value.length < 5 ){
        todo_correcto = false;
    }
    if(document.getElementById("provincia").value.length < 5 ){
        todo_correcto = false;
    }
    if(isNaN(document.getElementById("telefono").value)){
        todo_correcto = false;
    }
    if(document.getElementById("correo").value.length < 5 ){
        todo_correcto = false;
    }

    if(!todo_correcto){
        alert('Algunos campos no están correctos, vuelva a revisarlos');
    }else{    
        alert('El curriculum se envió con éxito!');
    }
    
    return todo_correcto;
}