const botones = document.querySelectorAll(".boton");
botones.forEach(boton => {
boton.addEventListener("click", function() {
    const num = this.dataset.num;
    const celda = document.getElementById("celda");
    celda.innerHTML += num;
})});

const operadores = document.querySelectorAll(".operador");
operadores.forEach(operador => {
operador.addEventListener("click", function() {
    const op = this.dataset.op;
    const celda = document.getElementById("celda");
    celda.innerHTML += op;
})});

const borra = document.querySelectorAll(".borrar");
borra.forEach(borrar => {
operador.addEventListener("click", function() {
    const op = this.dataset.op;
    const celda = document.getElementById("celda");
    celda.innerHTML += op;
})});
