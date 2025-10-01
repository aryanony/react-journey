import React,{ useState} from 'react'

function CityWeather()
{
    const [city_name, setCity_name] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    //creating a function to fetch weather of the city
    const fetchweather = () => {
        if (!city_name) return

        //fetching data from api
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=6af70401a345ce40bed6bce8459641a1&units=metric`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                setWeather(data)
                setLoading(false)
            }).catch((err) => {
                console.error("Error in fetching data : " + err)
                setLoading(false)
            })

    }

    /*--- UI designing --- */
    return (
        <div>
            <h1> Weather Forecating for Given City</h1>
            <input type="text" placeholder="Enter city name" value={city_name}
                onChange={(e) => setCity_name(e.target.value)} />

            <button onClick={fetchweather}> Search</button>

            {loading ? (<p>Data loading</p>) : (
                <div>
                    City: {weather.name}
                    <br />Temperature: {weather.main.temp}
                    <br />Humidity: {weather.main.humidity}%
                    <br />Wind Speed: {weather.wind.speed} m/s
                </div>

            )}
        </div>
    )
}

export default CityWeather
