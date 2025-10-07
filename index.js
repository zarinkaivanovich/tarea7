const express = require('express')
const app = express()
const path = require('path')
const webSocket = require('express-ws')
webSocket(app)

app.use(express.static('public'))
    app.listen(8000,()  => {
    console.log('Aplicacion corriendo en parto 8000')
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'public/index.html'))

})
app.ws('/',handleWs)

function handleWs(ws){
    console.log('nuevo web socket,')

    ws.on('message',(m) => {
        console.log(m)
    })
    
 }