const x = document.querySelector('.number')
const y = document.getElementById('change')

function check() {

    if (x.value.length >= 7) {
        alert('Numero de Serie Valido!')
        x.className = 'cantChange';
    }

    if (x.value.length == 3) {
        x.value += "."
    }
}

function funcVolta() {
    if (x.className == "cantChange") {
        x.className = "number";
    }
}

var produtos = JSON.parse(localStorage.getItem("produtos"))
if (produtos == null) {
    produtos = []
}


function pPush(e) {
    produtos.push({
        "Nome do Produto": document.getElementById("name").value,
        "Numero de Serie": document.getElementById("numberId").value,
        "Tipo": document.getElementById("select").value,
        "Caracteristicas": document.getElementById("textA").value
    });




    var produtos_json = JSON.stringify(produtos)

    localStorage.produtos = produtos_json
    localStorage.setItem("produtos", produtos_json);

}