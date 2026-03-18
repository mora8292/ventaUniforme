const botones = document.querySelectorAll(".filtro-btn");
const escuelas = document.querySelectorAll(".escudo-card");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        botones.forEach(b => b.classList.remove("activo"));

        boton.classList.add("activo");

        const filtro = boton.dataset.filtro;

        escuelas.forEach(escuela => {
            if (filtro === "todas") {
                escuela.style.display = "flex";
            } else {
                if (escuela.classList.contains(filtro)) {
                    escuela.style.display = "flex";
                } else {
                    escuela.style.display = "none";
                }
            }
        });
    });
});