const router = require('express').router
const mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    //your username
    user: 'root',

    //your password
    password: 'Bruno18!',
    database:  'shoesApp'
})

router.get('/products', (req,res)=>{
    connection.query('SELECT Products.product_name, Proces.price, Products.URL FROM Procucts INNER JOIN PricesON Products.product_id = Prices.productsid;', function (err, data){
        if(err){
            throw err
        }

        res.send(data)
        console.log(err)
    })
})

module.export = router 
