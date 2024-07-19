const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    const icon = document.querySelector("#dl-icon");
    icon.setAttribute("class", "bi bi-sun-fill");
    icon.classList.remove("text-dark");
    icon.classList.add("text-warning"); // Cambia el color del icono del sol
    localStorage.setItem("theme", "dark");
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    const icon = document.querySelector("#dl-icon");
    icon.setAttribute("class", "bi bi-moon-fill");
    icon.classList.remove("text-warning");
    icon.classList.add("text-dark"); // Cambia el color del icono de la luna
    localStorage.setItem("theme", "light");
}

const cambiarTema = () => {
    if (document.querySelector("body").getAttribute("data-bs-theme") === "light") {
        temaOscuro();
    } else {
        temaClaro();
    }
}

// Inicializar el tema basado en localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    temaOscuro();
} else {
    temaClaro();
}
