const form = document.getElementById("formulario");
const messagemSucesso = document.querySelector("p.success-message");
const messagemErro = document.querySelector("p.error-message");

form.addEventListener("submit", function(e) {
    let valor1 = document.getElementById("campoA");
    let valor2 = document.getElementById("campoB");

    if(valor1.value < valor2.value) {
        messagemSucesso.value = "Comparação concluída, o ${valor1} é menor do que ${valor2}.";
        messagemSucesso.style.display = "block";
    }else {
        messagemErro.style.display = "block";
    }

    e.preventDefault();
})