const boton = document.getElementById("menuBtn");
const menu = document.getElementById("menuOpciones");

boton.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("activo");
    boton.classList.toggle("activo");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu-contenedor")) {
        menu.classList.remove("activo");
        boton.classList.remove("activo");
    }
});
