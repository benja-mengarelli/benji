const palabras = [
    "Te amo",
    "Sos hermosa",
    "Que linda estas hoy",
    "Gracias x existir",
    "Ñoquis",
    "Nunca cambies",
    "❤️❤️❤️❤️",
    "Que linda sonrisa",
    "Te extraño",
    "Hasta la luna, siempre",
    "Es linda la vida contigo",
    "sos una personita muy especial",
    "Gracias x elegirme",];

function mostrarPalabra() {
    const circle = document.querySelector('.circle');
    const palabra = document.createElement('div');
    palabra.classList.add('word-float');
    palabra.textContent = palabras[Math.floor(Math.random() * palabras.length)];

    palabra.style.left = '50%';
    palabra.style.top = '50%';
    palabra.style.transform = 'translate(-50%, -50%)';


    // X: de -80 a +80 px (izquierda o derecha)
    const deltaX = (Math.random() * 250) - 125;
    // Y: de -100 a -50 px (siempre hacia arriba)
    const deltaY = - (80 + Math.random() * 80);

    const animName = `flotar${Date.now()}${Math.floor(Math.random() * 1000)}`;

    // Creamos los keyframes dinámicamente
    const styleSheet = document.styleSheets[0];
    const keyframes =
        `@keyframes ${animName} {
            0% {
                opacity: 1;
                transform: translate(-50%, -50%) translate(0, 0);
            }
            100% {
                opacity: 0;
                transform: translate(-50%, -50%) translate(${deltaX}px, ${deltaY}px);
            }
        }`;

    // Insertamos la animación en el stylesheet
    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

    // Asignamos la animación al elemento
    palabra.style.animation = `${animName} 1.5s ease-out forwards`;

    circle.appendChild(palabra);

    // Eliminamos el elemento al terminar la animación
    palabra.addEventListener('animationend', () => {
        palabra.remove();
    });
}

const circulo = document.getElementById("circle")
circulo.addEventListener("click", () =>{
    mostrarPalabra()
})
