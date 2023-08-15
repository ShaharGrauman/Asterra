const {Pool, Client} = require('pg');


export const login = async (userName, password) => {
  const pool = new Pool ({
    user: userName,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: password,
    port: process.env.PORT
  });  

  const client = await pool.connect();
  const {rows} = await client.query('SELECT current_user');
  const currentUser = rows[0]['current_user'];
  return {"message": "Success"}
}

