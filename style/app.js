const getData = async (city) => {
    try {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1263413d5c995d8016261a77ed19bd33&units=metric`)
    const response = await data.json()
    console.log(response)
    showData(response)

    } catch (err) {
        console.log(err);
    }
}

getData()

function showData(data){
    const card = document.querySelector('.card-1')
    const city = card.childNodes[3]
    const temp = card.lastElementChild
    document.querySelector(".input")
}   
getData(cityName)