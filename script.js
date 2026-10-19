let tamanhoFonte = 100;

function aplicarFonte() {
    document.body.style.fontSize = tamanhoFonte + "%";
    try {
        localStorage.setItem("tamanhoFonte", tamanhoFonte);
    } catch (e) {}
}

function aumentarFonte() {
    if (tamanhoFonte < 150) {
        tamanhoFonte += 10;
        aplicarFonte();
    }
}

function diminuirFonte() {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        aplicarFonte();
    }
}

function alternarContraste() {
    
    let ativado = document.body.classList.toggle("alto-contraste");

   
    document.getElementById("btn-contraste").setAttribute("aria-pressed", ativado);

   
    try {
        localStorage.setItem("altoContraste", ativado);
    } catch (e) {}
}


try {
    if (localStorage.getItem("altoContraste") === "true") {
        document.body.classList.add("alto-contraste");
        document.getElementById("btn-contraste").setAttribute("aria-pressed", true);
    }

    let fonteSalva = parseInt(localStorage.getItem("tamanhoFonte"));
    if (fonteSalva) {
        tamanhoFonte = fonteSalva;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
} catch (e) {}
