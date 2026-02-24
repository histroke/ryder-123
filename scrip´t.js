function mostrarDia() {
    let valor = document.getElementById("dia").value;
    let mensaje = "";

    switch (valor) {
        case "1":
            mensaje = "Seleccionaste Lunes";
            break;
        case "2":
            mensaje = "Seleccionaste Martes";
            break;
        case "3":
            mensaje = "Seleccionaste Miércoles";
            break;
        case "4":
            mensaje = "Seleccionaste Jueves";
            break;
        case "5":
            mensaje = "Seleccionaste Viernes";
            break;
        case "6":
            mensaje = "Seleccionaste Sábado";
            break;
        case "7":
            mensaje = "Seleccionaste Domingo";
            break;
        default:
            mensaje = "No seleccionaste un día válido";
    }

    document.getElementById("resultado").innerText = mensaje;
}
