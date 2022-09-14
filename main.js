const form = document.getElementById('form-contato');
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    sortTable();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if (contatos.includes(inputNome.value)) {
        alert(`O contato: ${inputNome.value} já existe`)

    } else if (numeros.includes(parseInt(inputNumero.value))){
        alert(`O Número: ${inputNumero.value} já existe`);
    } else {
        contatos.push(inputNome.value);
        numeros.push(parseInt(inputNumero.value));

        const contactar = `<a href="tel:+55${parseInt(inputNumero.value)}" title="Ligar"><img src="./images/phone.png" alt="Ligar"/></a><a href="https://wa.me/+55${parseInt(inputNumero.value)}" target="_blank" title='Mensagem por Whatsapp'><img src="./images/whatsapp-logo.png" alt="Whatsapp" /></a>`;
    
        let linha = '<tr>';
        linha += `<td><div class="contato ${inputNome.value}">${criaLetra(inputNome.value.charAt(0))}<p>${inputNome.value}</p></div></td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `<td>${contactar}</td>`;
        linha += '</tr>';
    
        linhas += linha;

        inputNome.value = '';
        inputNumero.value = '';

    }
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function criaLetra(nome) {
    const cores = ['3456b3', 'b38034', '49b334', '9a34b3', '34b3ad', 'a6b334', 'b33434', 'b33473', 'b35834'];
    let corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    return `<span class="dot" style="background-color: #${corAleatoria};">${nome.toUpperCase()}</span>`;

}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("lista");
    switching = true;
    while (switching) {
    switching = false;
    rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
            }}
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}