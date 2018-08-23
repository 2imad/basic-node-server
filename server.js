const http = require('http')
const server = http.createServer(( request , response )=>{
    console.log('methode' , request.headers )
    
    const user = {
        name : 'firstUser',
        age : 50,
        net_usage : true
        
    }
    response.setHeader('Content-Type' , 'application/json' )
    response.end(JSON.stringify(user))
})

server.listen(3000)