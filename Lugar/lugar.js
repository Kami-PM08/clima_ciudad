const axios = require('axios');


const getLocationLatLng = async(dir) => {
    const encodeUrl = encodeURI(dir);



    // const instance = axios.create({
    //     baseURL: `https://geocode.xyz/?locate=${encodeUrl}&json=1`,
    //     headers: { 'auth': '276650510155875726392x7093' }
    // });
    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${dir}&appid=340fd142b4bd0cbd4c94b32d679085e7`
    });

    const resp = await instance.get();
    // .then(resp => {
    //         console.log(resp.data);
    //     })
    //     .catch(err => console.log('Error!!', err))

    if (resp.data.length === 0) {
        throw new Error(`No se encontrarón resultados para ${dir}`);
    }

    // const data = resp.data.alt.loc;
    // const direccion = data.city;
    // const lat = data.latt;
    // const lng = data.longt;
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLocationLatLng
}