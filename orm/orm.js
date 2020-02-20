const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'toorTOOR11$$',
    database: 'burger_db'
})

connection.connect(function(err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Connected to DB')
})

const orm = {
    select: function () {
        return new Promise(resolve => {
            const sqlSelect = `SELECT * FROM burgers`
            connection.query(sqlSelect, function (err, results) {
                if (err) {console.log(err)
                }
                resolve(results) 
            })
        })
    }, 
    insert: function (bName) {
        const sqlInsert = `INSERT INTO burgers(burger_name, devoured)
                            VALUES(?,?)`
        connection.query(sqlInsert, [bName, false],function (err, results) { 
            if (err) {console.log(err)
            }
        })
    }, 
    update: function (id) {
        const sqlUpdate = `UPDATE burgers SET devoured = true WHERE id = ${id}`
        connection.query(sqlUpdate, function (err, results) { 
            if (err) {console.log(err)
            }
        })
    }
}

module.exports = orm 
