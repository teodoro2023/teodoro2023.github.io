document.getElementById("info_personal").onclick = function() {
    document.getElementById('sector2').style.display = 'none';
    document.getElementById('sector3').style.display = 'none';
    document.getElementById('sector1').style.display = 'block';
}

document.getElementById("experiencia").onclick = function() {
    document.getElementById('sector1').style.display = 'none';
    document.getElementById('sector3').style.display = 'none';
    document.getElementById('sector2').style.display = 'block';
}

document.getElementById("habilidad").onclick = function() {
    document.getElementById('sector1').style.display = 'none';
    document.getElementById('sector2').style.display = 'none';
    document.getElementById('sector3').style.display = 'block';
}

