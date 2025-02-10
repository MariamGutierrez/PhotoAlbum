document.addEventListener("DOMContentLoaded", function () {
    // Obtener datos de la URL
    const params = new URLSearchParams(window.location.search);
    const imgSrc = params.get("img");
    const titulo = params.get("titulo");
    const descripcion = params.get("desc");

    // Elementos del DOM
    const imagenElement = document.getElementById("imagen");
    const tituloElement = document.getElementById("titulo");
    const descripcionElement = document.getElementById("descripcion");
    const comentariosLista = document.getElementById("comentarios-lista");
    const comentarioInput = document.getElementById("comentario");
    const enviarBtn = document.getElementById("enviar-comentario");

    // Verificar si la imagen existe antes de asignarla
    if (imgSrc) {
        imagenElement.src = "assets/imagenes/" + imgSrc;
    } else {
        imagenElement.src = "assets/imagenes/default.jpg"; // Imagen por defecto si falta el parámetro
    }

    // Verificar y asignar título y descripción
    tituloElement.textContent = titulo || "Sin título";
    descripcionElement.textContent = descripcion || "Sin descripción disponible";

    // Manejo de comentarios
    let comentarios = JSON.parse(localStorage.getItem(imgSrc)) || [];

    function renderizarComentarios() {
        comentariosLista.innerHTML = "";
        comentarios.forEach(com => {
            const li = document.createElement("li");
            li.textContent = com;
            comentariosLista.appendChild(li);
        });
    }

    enviarBtn.addEventListener("click", () => {
        const nuevoComentario = comentarioInput.value.trim();
        if (nuevoComentario !== "") {
            comentarios.push(nuevoComentario);
            localStorage.setItem(imgSrc, JSON.stringify(comentarios));
            renderizarComentarios();
            comentarioInput.value = "";
        }
    });

    // Cargar comentarios guardados
    renderizarComentarios();
});
