let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.bid
    let euro = moedas.EURBRL.bid
    let btc = moedas.BTCBRL.bid * 1000


    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }

    if (select.value === "€ Euro") {
        let valorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", { style: "currency", currency: "EUR" })

    }

    if (select.value === "₿ Bitcoin") {
        let valorEmBtc = inputValorEmReais / btc
        inputMoedas.innerHTML = valorEmBtc.toLocaleString("de-DE", { style: "currency", currency: "BTC", minimumFractionDigits: 8 })

    }

    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")

    if (select.value === "US$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./Imagens/eua.png"
    }

    if (select.value === "₿ Bitcoin") {
        textoMoedas.innerHTML = "Bitcoin"
        bandeiraMoedas.src = "./Imagens/btc.png"
    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./Imagens/euro.png"
    }
    converterMoedas()
}

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)