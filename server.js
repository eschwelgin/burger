
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const orm = require('./orm/orm.js')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', async function (req, res) {
    const result = await orm.select()
    res.json(result)
})


//route / submit button post req INSERT
app.post('/', async function (req, res) {
    orm.insert(req.body.val) 
    const result = await orm.select()
    res.json(result)
    //curl --data "val=testBurger" http://localhost:3001
})



//route / devour button put req UPDATE
app.put('/', async function (req, res) {
    orm.update(req.body.val) 
    const result = await orm.select()
    res.json(result)
    //curl -X PUT -d val=1 localhost:3001
})


app.listen(PORT, function() {
    console.log('Server listening on ' + PORT)
})

