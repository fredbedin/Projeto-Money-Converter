const button = document.getElementById(`convert-button`)
const select = document.getElementById(`currency-select`)

const dolar = 5.30
const euro = 5.61
const bitcoin = 131369.00

changeCurrencyFormat = () =>{
    const input = document.getElementById(`input-value`).value
    const fromcurrency = document.getElementById(`from-currency`)
    const tocurrency = document.getElementById(`to-currency`)
    
    fromcurrency.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input)

    if(select.value === `U$D Dolar Americano`){
    tocurrency.innerHTML  = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(input / dolar)}

    if(select.value === `€ Euro`){
    tocurrency.innerHTML  = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    }).format(input / euro)}

    if(select.value === `bitcoin`){
        tocurrency.innerHTML  = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
        }).format(input / bitcoin)}
}

selectCurrency = () =>{
    const toCurrencyName = document.getElementById("to-currency-name")
    const toCurrencyIcon = document.getElementById("to-currency-icon")

    if(select.value === `€ Euro`){
        toCurrencyName.innerHTML = `Euro`
        toCurrencyIcon.src = "./assets/euro.png"
    }

    if(select.value === `U$D Dolar Americano`){
        toCurrencyName.innerHTML = `Dolar Americano`
        toCurrencyIcon.src = "./assets/estados-unidos.png"
    }

    if(select.value === `bitcoin`){
        toCurrencyName.innerHTML = `bitcoin`
        toCurrencyIcon.src = "./assets/bitcoin.png"
    }
    changeCurrencyFormat()
}

button.addEventListener("click", changeCurrencyFormat)
select.addEventListener("change", selectCurrency)