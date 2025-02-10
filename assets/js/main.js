document.addEventListener("DOMContentLoaded", function () {
    // Verificar si los elementos ya existen para evitar duplicaciones
    if (!document.querySelector("header")) {
        const header = document.createElement("header");
        header.className = "text-center py-4";
        header.innerHTML = "<h1>Photo Album</h1>";
        document.body.appendChild(header);
    }

    let container = document.querySelector(".container");
    if (!container) {
        container = document.createElement("div");
        container.className = "container";
        document.body.appendChild(container);
    }

    let row = document.querySelector(".row");
    if (!row) {
        row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
    }

    // Limpiar el contenido anterior para evitar duplicados
    row.innerHTML = "";

    // Datos de las imágenes
    const fotos = [
        { img: "photo1.jpg", titulo: "Foto 1", desc: "Esta es la primera imagen" },
        { img: "photo2.jpg", titulo: "Foto 2", desc: "Esta es la segunda imagen" },
        { img: "photo3.jpg", titulo: "Foto 3", desc: "Esta es la tercera imagen" },
        { img: "photo4.jpg", titulo: "Foto 4", desc: "Esta es la cuarta imagen" },
        { img: "photo5.jpg", titulo: "Foto 5", desc: "Esta es la quinta imagen" },
        { img: "photo6.jpg", titulo: "Foto 6", desc: "Esta es la sexta imagen" },
        { img: "photo7.jpg", titulo: "Foto 7", desc: "Esta es la séptima imagen" },
        { img: "photo8.jpg", titulo: "Foto 8", desc: "Esta es la octava imagen" },
        { img: "photo9.jpg", titulo: "Foto 9", desc: "Esta es la novena imagen" },
    ];

    // Generar las tarjetas de imágenes
    fotos.forEach(foto => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 mb-4";

        const link = document.createElement("a");
        link.href = `detalle.html?img=${foto.img}&titulo=${encodeURIComponent(foto.titulo)}&desc=${encodeURIComponent(foto.desc)}`;

        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = `assets/imagenes/${foto.img}`;
        img.className = "card-img-top";
        img.alt = foto.titulo;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = `Descripción de ${foto.titulo}.`;

        // Construcción de la estructura
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        link.appendChild(card);
        col.appendChild(link);
        row.appendChild(col);
    });
});
