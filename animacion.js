
// Whatsapp flotante
document.addEventListener("DOMContentLoaded", function () {
    const whatsappFlotante = document.querySelector('.whatsapp-flotante');

    function vibrateIcon() {
        // Aplica la vibración
        whatsappFlotante.classList.toggle('vibrar');
    }

    // Llama a la función de vibración cada 20 segundos
    setInterval(vibrateIcon, 20000);
});





// Texto porque es bueno contratar nuestros servicios (Preguntas frecuentes)

function toggleAnswer(id, element) {
    const answer = document.getElementById(id);
    const arrowIcon = element.querySelector('.arrow-icon');

    // Oculta todas las respuestas excepto la actual
    document.querySelectorAll('.answer').forEach(ans => {
        if (ans.id !== id) {
            ans.style.display = 'none';
        }
    });

    // Cambia el estado de la respuesta actual
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';

    // Cambia el icono de flecha
    document.querySelectorAll('.arrow-icon').forEach(icon => icon.classList.replace('bx-up-arrow-alt', 'bx-down-arrow-alt'));

    if (answer.style.display === 'block') {
        arrowIcon.classList.replace('bx-down-arrow-alt', 'bx-up-arrow-alt');
    } else {
        arrowIcon.classList.replace('bx-up-arrow-alt', 'bx-down-arrow-alt');
    }
}

// Boton contactanos en la pagina nosotros
const contactanosBtn = document.getElementById('contactanosBtn');
let llenado = 0;

contactanosBtn.addEventListener('mouseover', () => {
    llenarVaso();
});

contactanosBtn.addEventListener('mouseout', () => {
    reiniciarLlenado();
});

function llenarVaso() {
    const intervalo = setInterval(() => {
        llenado += 1;
        contactanosBtn.style.backgroundPosition = `${llenado}% 0`;

        if (llenado >= 100) {
            clearInterval(intervalo);
        }
    }, 20); // Puedes ajustar la velocidad cambiando el valor dentro de setInterval
}

function reiniciarLlenado() {
    llenado = 0;
    contactanosBtn.style.backgroundPosition = `${llenado}% 0`;
}



















