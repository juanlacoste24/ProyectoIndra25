document.addEventListener("DOMContentLoaded", function () {
    
    const carruselImg = document.getElementById("carrusel-img");

    if (carruselImg) {
        const imagenes = [
            "images/evento1.jpg",
            "images/evento2.jpg",
            "images/evento3.jpg"
        ];

        let indice = 0;

        setInterval(() => {
            indice = (indice + 1) % imagenes.length;
            carruselImg.src = imagenes[indice];
        }, 3000);
    }

   

    const contenedor = document.getElementById("contenido-evento");

    if (contenedor) {
        const params = new URLSearchParams(window.location.search);
        const eventoId = params.get("id");

        const eventos = {
            1: {
                titulo: "Reforestación Urbana",
                imagen: "images/evento1.jpg",
                fecha: "2025-06-12",
                duracion: "4 horas",
                ubicacion: "Parque Central, Madrid",
                organizador: "Asociación Verde",
                categoria: "Actividad",
                descripcion: "Plantación comunitaria de árboles para mejorar el entorno urbano y promover la sostenibilidad."
            },
            2: {
                titulo: "Charla sobre Reciclaje",
                imagen: "images/evento2.jpg",
                fecha: "2025-06-18",
                duracion: "2 horas",
                ubicacion: "Centro Cívico Norte, Valencia",
                organizador: "EcoConCiencia",
                categoria: "Conferencia",
                descripcion: "Una conferencia sobre buenas prácticas de reciclaje y cómo reducir la contaminación desde casa."
            },
            3: {
                titulo: "Ruta en Bicicleta",
                imagen: "images/evento3.jpg",
                fecha: "2025-07-03",
                duracion: "5 horas",
                ubicacion: "Vía Verde del Tajuña, Madrid",
                organizador: "Pedal Verde",
                categoria: "Actividad",
                descripcion: "Paseo en grupo por una ruta natural para fomentar el uso de transporte no contaminante."
            },
            4: {
                titulo: "Taller de Compostaje",
                imagen: "images/evento4.jpg",
                fecha: "2025-07-10",
                duracion: "3 horas",
                ubicacion: "Centro Cultural Verde, Sevilla",
                organizador: "Fundación EcoVida",
                categoria: "Taller",
                descripcion: "Aprende a reutilizar tus residuos orgánicos para mejorar tu jardín y reducir tu huella de carbono."
            }
        };

        const evento = eventos[eventoId];

        if (evento) {
            contenedor.innerHTML = `
                <section class="evento-detalle">
                    <h2>${evento.titulo}</h2>
                    <img src="${evento.imagen}" alt="${evento.titulo}" class="detalle-img">
                    <p><strong>Fecha:</strong> ${evento.fecha}</p>
                    <p><strong>Duración:</strong> ${evento.duracion}</p>
                    <p><strong>Ubicación:</strong> ${evento.ubicacion}</p>
                    <p><strong>Organizador:</strong> ${evento.organizador}</p>
                    <p><strong>Categoría:</strong> ${evento.categoria}</p>
                    <p><strong>Descripción:</strong> ${evento.descripcion}</p>
                </section>
            `;
        } else {
            contenedor.innerHTML = "<p>Evento no encontrado.</p>";
        }
    }
});

  let currentIndex = 0;

  function showSlide(index) {
    const slides = document.getElementById('slides');
    const totalSlides = 4;
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  setInterval(() => {
    nextSlide();
  }, 5000);

