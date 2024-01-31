<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $nombre = $_POST["nombre"];
    $celular = $_POST["celular"];
    $correo = $_POST["correo"];
    $comentario = $_POST["comentario"];
    $aceptar = isset($_POST["aceptar"]) ? "Sí" : "No";

    // Correo de destino
    $destinatario = "juanramirezfu@gmail.com";

    // Asunto del correo
    $asunto = "Nuevo mensaje de contacto desde el formulario";

    // Contenido del correo
    $mensaje = "Nombre: $nombre\n";
    $mensaje .= "Celular: $celular\n";
    $mensaje .= "Correo Electrónico: $correo\n";
    $mensaje .= "Comentario:\n$comentario\n";
    $mensaje .= "Acepta el uso de sus datos: $aceptar\n";

    // Encabezados del correo
    $encabezados = "From: $correo\r\n";

    // Enviar el correo
    mail($destinatario, $asunto, $mensaje, $encabezados);
}
?>
