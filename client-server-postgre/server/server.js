const express = require('express')
const bodyParser = require('body-parser')
const select = require('react-select')
const path = require('path');

require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'development.env')
});

const {Pool, Client} = require('pg');
const app = express()

app.pool = new Pool ({
    host: process.env.HOST,
    database: process.env.DATABASE,
    port: process.env.PORT
});

app.use(bodyParser.json())
app.get("/api", (req, res) => {
    res.send("from server")
})

app.post("/api/logIn", (req, res) => {
    app.pool = new Pool ({
        user: req.body.UserName,
        host: process.env.HOST,
        database: process.env.DATABASE,
        password: req.body.Password,
        port: process.env.PORT
    });
    (async () => {
        try{
            const client = await app.pool.connect();
            const {rows} = await client.query('SELECT current_user');
            const currentUser = rows[0]['current_user'];
            console.log(currentUser === req.body.UserName)
            res.json({"message": "Success"})
            return currentUser === req.body.UserName;
        } catch (err) {
            console.error(err);
            res.json({"message": "Error"})
            return false;
        }
    })();
})

app.post("/api/addUser", (req, res) => {
    (async () => {
        const client = await app.pool.connect();
        try{
            await client.query('INSERT INTO "Ron_Shani".users("first_name" , "last_name", "address", "phone_number") VALUES ($1, $2, $3, $4)', [req.body.FirstName, req.body.LastName, req.body.Address, req.body.Phone]);
            return true;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
        
    })();

    console.log(req.body)
    res.json({"message": "User added successfully"})
})


app.post("/api/hobbies", (req, res) => {
    (async () => {
        const client = await app.pool.connect();
        try{
            await client.query('INSERT INTO "Ron_Shani".users("first_name" , "last_name", "address", "phone_number") VALUES ($1, $2, $3, $4)', [req.body.FirstName, req.body.LastName, req.body.Address, req.body.Phone]);
            return true;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
        
    })();

    console.log(req.body)
    res.json({"message": "User added successfully"})
})



app.listen(5000, () => {console.log("Server Started at port 5000")})

