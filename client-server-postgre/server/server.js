const express = require('express')
const bodyParser = require('body-parser')
const select = require('react-select')
const path = require('path');
const { getPool } = require('./DAL/db');

require('dotenv').config({
    override: true,
    path: path.join(__dirname, 'development.env')
});

const app = express()

app.pool = getPool()

app.use(bodyParser.json())
app.get("/api", (req, res) => {
    res.send("from server")
})

app.post("/api/logIn", async (req, res) => {
    try{
        const result = login(req.body.UserName, req.body.Password)
        res.json(result)
    } catch (err) {
        res.json({"message": "Error"})
    }
})

app.post("/api/addUser", async (req, res) => {
    const {FirstName, LastName, Address, Phone} = req.body;

    db.addUser(FirstName, LastName, Address, Phone);

    const client = await app.pool.connect();
    try{
        await client.query('INSERT INTO "Ron_Shani".users("first_name" , "last_name", "address", "phone_number") VALUES ($1, $2, $3, $4)', 
                            [req.body.FirstName, req.body.LastName, req.body.Address, req.body.Phone]);
        return true;
    } catch (err) {
        console.error(err);
    } finally {
        client.release();
    }        
    res.json({"message": "User added successfully"})
})


app.get("/api/hobbies", (req, res) => {
    (async () => {
        const client = await app.pool.connect();
        try{
            let users_list = await client.query('SELECT u.first_name, u.last_name FROM "Ron_Shani".users u');
            let users_parsed = "";
            for(i = 0; i<users_list.rowCount; i++) {
                users_parsed += users_list.rows[i].first_name + ' ' + users_list.rows[i].last_name+',';
                
            }
            res.json({"users": users_parsed, "message": "Success"})
            return true;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    })();
})



app.listen(5000, () => {console.log("Server Started at port 5000")})

