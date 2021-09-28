const {Pool} = require('pg');
const dotenv = require('dotenv');
dotenv.config();
db_config = {
  connectionString:process.env.DATABASE_URL,
 
  connectionTimeoutMillis: 300,
 
  idleTimeoutMillis: 20,
 
  max: 20
  
}
const pool = new Pool(db_config);
pool.on('connect',client => {
    console.log('DATABASE IS CONNECTED');
})
pool.on('remove',client => {
    console.log('DATABASE CONNECTION IS REMOVED');
})
module.exports = pool ;