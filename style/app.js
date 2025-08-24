const getData = async () => {
    const data = fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt=10&appid={API key}')
    const response = await data.json
    console.log(response)
}

const createData = async () => {
    const container = document.createElement("div")
}