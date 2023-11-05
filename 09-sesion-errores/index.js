// console.log("Hola Pantalla")
// console.info("Mensaje informativo")
// console.warn("Mensaje advertencia")
// console.debug("Mensaje debug")
// console.error("Mensaje error")

// instalación npm install winston, se instalan modulos en esta carpeta
// se crea carpeta con las configuraciones de logger
const logger = require('./logger')

logger.info("Mensaje informativo")
logger.debug("Mensaje debug")
logger.warn("Mensaje advertencia")
logger.error("Mensaje error")

// Ejecuta npm start y se crean archivos logs error.log y combined.log - Atención en el Nivel Info ó Debug
// Revisar https://www.npmjs.com/package/winston
