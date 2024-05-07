//  import json server 
const jsonServer = require('json-server')
//create a server for media player a app
const MPServer = jsonServer.create()
// create middleware used byJSON server
const middleware = jsonServer.defaults()
// set up route for json file server S
const route = jsonServer.router('db.json')
// set up port for running server app
const PORT =  3000 || process.env.PORT 

MPServer.use(middleware)
MPServer.use(route)
MPServer.listen(PORT,()=>{
    console.log(`Media Player Server Started at port ${PORT} and waiting for client request`);
})