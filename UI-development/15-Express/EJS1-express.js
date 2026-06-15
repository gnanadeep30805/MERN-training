var express = require("express")
var app = express()
var port = 8002

//default route
app.get('/', (req, res) => {
    res.send("hello express")
})

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
