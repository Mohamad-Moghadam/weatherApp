const getData = async () => {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=tehran&appid=1263413d5c995d8016261a77ed19bd33&units=metric`)
    const response = await data.json
    console.log(response)
}

getData()