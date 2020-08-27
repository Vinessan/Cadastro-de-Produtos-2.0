var produtos = JSON.parse(localStorage.getItem('produtos'))

console.log(produtos)

var tabela = document.getElementById('table')

for (i = 0; i < produtos.length; i++) {
    var produto = produtos[i]
    var nome = produto['Nome do Produto']
    var numeroserie = produto['Numero de Serie']
    var tipo = produto['Tipo']
    var caracteres = produto['Caracteristicas']

    var tr = table.insertRow(1)
    var td = [tr.insertCell(0), tr.insertCell(1), tr.insertCell(2), tr.insertCell(3)]
    td[0].innerText = numeroserie
    td[1].innerText = nome
    td[2].innerText = tipo
    td[3].innerText = caracteres
};







