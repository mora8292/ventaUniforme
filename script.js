const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("activa");
});

/* Script Ventas*/
const tallas = document.querySelectorAll(".talla");

tallas.forEach(boton => {
    boton.addEventListener("click", () => {

        tallas.forEach(b => b.classList.remove("activa"));
        boton.classList.add("activa");

    });
});
