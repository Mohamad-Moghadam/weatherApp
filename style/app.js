const getData = async () => {
    const data = fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=10&appid=${APIkey}`)
    const response = await data.json
    console.log(response)
}