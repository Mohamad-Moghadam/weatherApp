const getData = async (city, day) => {
    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=1263413d5c995d8016261a77ed19bd33&units=metric`)
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err);
    }
}

function showData(card, forecast, dayIndex){
    const dailyData = forecast.list.filter((_, i) => i % 6 === 0)
    const data = dailyData[dayIndex]
    const city = card.children[1]
    const tempfield = card.lastElementChild
    tempfield.textContent = `${data.main.temp} °C`
    city.textContent = forecast.city.name
}

async function main(cityinput){
    const forecast = await getData(cityinput)
    const allCards = [...document.querySelectorAll('.card-1')]
    allCards.forEach((val, index) => {
        showData(val, forecast, index)
    })
}

const btn = document.querySelector(".btn")
const inp = document.querySelector(".input")
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const input = inp.value
    main(input)
})