const axios = require('axios');




const getClima = async(dir) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=340fd142b4bd0cbd4c94b32d679085e7&units=metric`)

    return `${resp.data.main.temp}°C.`;

}

module.exports = {
    getClima
}