const mysql = require('mysql2')

async function connection () {

   const con = await  mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'practice'
    })

    return con

} 


// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('Connected')
// })

module.exports = connection