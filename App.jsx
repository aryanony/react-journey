import React,{ useState, useEffect } from 'react'

function App() {
  /*--- Creating state vaaibles ---*/
  const [weather,setWeather]=useState(null);
  const [loading,setLoading] = useState(true)

  //using use effect hook
  useEffect(()=>{
    // fetching data from rest api
      fetch("https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=6af70401a345ce40bed6bce8459641a1&units=metric").then((res)=>res.json()) // convert response to json
    .then((data) =>{
      setWeather(data)  //to save data into state variable
      setLoading(false)//stop loading
    })
    .catch((err) =>{
      console.error("Error in fetching data : "+err)
      setLoading(false)
    })
  },[]); //empty array for after component mounts
  
  /*--- UI designing ---*/
  return (
    <>
     <div>
              <h1> Fetching data from rest api </h1>
              {loading ? (<p>Data loading</p>) : (
                  <div>
                      City: {weather.name}
                      <br />Temperature: {weather.main.temp}
                      <br />Humidity: {weather.main.humidity}%
                      <br />Wind Speed: {weather.wind.speed} m/s
                  </div>

              )}
     </div>
    </>
  )
}

export default App
