const { getLocationLatLng } = require('./Lugar/lugar');

const { getClima } = require('./Clima/clima');

const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Direción de la ciudad que se desea saber el clima.',
            demand: true
        }
    })
    .help()
    .argv;

const getInfo = async(direccion) => {

    try {
        temperatura = await getClima(direccion);

        return `El clima de ${direccion} es de ${temperatura}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

}

// getLocationLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);