const pool = require('../database/pool');

exports.query = (queryText,queryParams) => {
    return new Promise((resolve,reject) => {
        //here it will put thread of the connection in the model and continue the step
        // IT SHOULD WAIT UNTIL THE RESULT GET BACK, await will do this
        pool.query(queryText,queryParams).then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        } )
    
    })
}
