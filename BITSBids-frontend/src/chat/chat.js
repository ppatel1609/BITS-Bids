var mysql = require('mysql');
const express = require('express')
var cors = require('cors');
const bodyParser = require('body-parser');
const {isNumber} = require("util"); // Middleware
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors);
const port = 5000;
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Metal_door38",
});
app.use(cors());
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
app.post('/api/product/add', (req, res) => {

    let productId;
    let sellerId;
    setTimeout(() => {con.query("SELECT id FROM bitsbids.product", function (err, result, fields) {
        if (err) throw err;
        result = JSON.parse(JSON.stringify(result));
        productId = result.length;
        sellerId = req.body.sellerId;
        console.log(sellerId);
        con.query("UPDATE bitsbids.product SET seller_id = " + sellerId + " WHERE id = " + productId,
            function (err, result, fields) {
                if (err) throw err;
                console.log("SET")
            });
    })},200);


});

app.post("/chat/retrieve",(req,res) => {
    if(req.body.sellerId != null && typeof(req.body.productId) === 'number' && req.body.userId != null)
    {
    console.log(req.body.sellerId);
    console.log(req.body.productId);
    console.log(req.body.userId);
    console.log("over");
    con.query("SELECT message,sender FROM bitsbids.chat WHERE product_id = " + req.body.productId + " AND seller_id = " + req.body.sellerId + " AND user_id = " + req.body.userId,function (err,result,fields) {
        if (err) throw err;
        result = JSON.parse(JSON.stringify(result))
        console.log(result);
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(result));
    })

    }
})




app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


