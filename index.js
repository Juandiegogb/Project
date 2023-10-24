const os = require('node:os')
console.log("Hola como estas este es una app que te da info")
console.log(os.platform())
console.log(os.cpus())
console.log(os.totalmem()/1024/1024/1024)
console.log("tiempo en linea",os.uptime()/60/60/24)
console.log("memoria libre",os.freemem()/1024/1024/1024)

