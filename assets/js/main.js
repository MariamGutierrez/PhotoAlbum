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
        { img: "photo1.jpg", titulo: "Catto u3u", desc: "Esta es la primera imagen" },
        { img: "photo2.jpg", titulo: "Kirby u0u", desc: "Esta es la segunda imagen" },
        { img: "photo3.jpg", titulo: "<3", desc: "Esta es la tercera imagen" },
        { img: "photo4.jpg", titulo: "Aster", desc: "Esta es la cuarta imagen" },
        { img: "photo5.jpg", titulo: "yae miko", desc: "Esta es la quinta imagen" },
        { img: "photo6.jpg", titulo: "Luca", desc: "Esta es la sexta imagen" },
        { img: "photo7.jpg", titulo: "Emma", desc: "Esta es la séptima imagen" },
        { img: "photo8.jpg", titulo: "Emma", desc: "Esta es la octava imagen" },
        { img: "photo9.jpg", titulo: "MyMelody", desc: "Esta es la novena imagen" },
    ];

    // Generar las tarjetas de imágenes
    fotos.forEach(foto => {
        const col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 mb-4";

        const link = document.createElement("a");
        link.href = `detalle.html?img=${foto.img}&titulo=${encodeURIComponent(foto.titulo)}&desc=${encodeURIComponent(foto.desc)}`;

        const card = document.createElement("div");
        card.className = "card"; // Se aplica la clase con los estilos de Polaroid
        
        const img = document.createElement("img");
        img.src = `assets/imagenes/${foto.img}`;
        img.className = "card-img-top";
        img.alt = foto.titulo;
        img.style.width = "100%";  
        img.style.height = "200px"; 
        img.style.objectFit = "cover";  
        img.style.borderRadius = "10px"; // Bordes redondeados como Polaroid
        
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = `${foto.titulo}.`;

        // Construcción de la estructura
        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        link.appendChild(card);
        col.appendChild(link);
        row.appendChild(col);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const header = document.getElementById("mainHeader");
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");

    // Verificar si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-theme");
        header.classList.add("dark-theme");
        themeIcon.src = "assets/imagenes/night.png"; // Imagen para el tema oscuro
    } else {
        body.classList.add("light-theme");
        header.classList.add("light-theme");
        themeIcon.src = "assets/imagenes/day.png"; // Imagen para el tema claro
    }

    // Evento de clic en el botón para cambiar el tema
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("light-theme")) {
            body.classList.remove("light-theme");
            body.classList.add("dark-theme");

            header.classList.remove("light-theme");
            header.classList.add("dark-theme");

            themeIcon.src = "assets/imagenes/night.png"; // Cambia la imagen del botón
            localStorage.setItem("theme", "dark");
        } else {
            body.classList.remove("dark-theme");
            body.classList.add("light-theme");

            header.classList.remove("dark-theme");
            header.classList.add("light-theme");

            themeIcon.src = "assets/imagenes/day.png"; // Cambia la imagen del botón
            localStorage.setItem("theme", "light");
        }
    });
});

