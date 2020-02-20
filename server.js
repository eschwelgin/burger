
const express = require('express')
const exphbs = require('express-handlebars')
const orm = require('./orm/orm.js')

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/', async function (req, res) {
    const result = await orm.select()
    console.log(result)
    res.render('home', {burgers: result})
})

app.post('/', async function (req, res) {
    orm.insert(req.body.name) 
    res.status(200).end()
    //curl --data "val=testBurger" http://localhost:3001
})

app.put('/', async function (req, res) {
    orm.update(req.body.id) 
    const result = await orm.select()
    res.json(result)
    //curl -X PUT -d val=1 localhost:3001
})

app.listen(PORT, function() {
    console.log('Server listening on ' + PORT)
})

