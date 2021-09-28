// this this file of constants of queries 
const queries = require('../database/queries');
// we need to connect to database to retrieve data
const connection = require('../database/connection');
// To generate a code for a book
const codeBookUtil = require('../Util/utility');
// function to list books 
exports.getListBook = async (request,response) => {
    // To handle error we had better to use Try Catch statement 
    try {
        // Store our query in variable to use it in Promise function we did in connection.js 
        var query = queries.queryList.GET_BOOK_LIST_QUERY;
        // We need to connect to database and pass the query as parameter
        // query function required two parameter here but but in our case all we need is to retrieve data  
        var result = await connection.query(query);
        // if everything goes right will return the result 
        return response.status(201).send(JSON.stringify(result))

    } catch (error) {
        // in case of fail happens
        return response.status(500).send(error , 'FAILED TO GET DATA')
    }

}

// Get book details
exports.getBookDetails = async (request,response) => {
   try {
        var bookId = request.params.id;
        var bookDetailsRequest = queries.queryList.GET_BOOK_DETAILS;
        var result = await connection.query(bookDetailsRequest)
        return response.status(200).send(JSON.stringify(result.rows[0]))
       
   } catch (error) {
       return response.status(500).send(`FAILED TO GET DETAILS BOOK ${bookId}`)
       
   }

}

exports.saveBook = async (request,response) => {
    try {
        // we need to get data from request and put it variable 
        var bookTitle = request.body.bookTitle;
        var bookDesc = request.body.bookDesc;
        var publisher = request.body.publisher;
        var author = request.body.author;
        var pages = request.body.pages;
        // we need to make these values are not empty
        if(!bookTitle || !bookDesc || !publisher || !author || !pages ){
            return response.status(500).send('The fields should be filled');
        }
        // here we generate a random code for the id 
        var bookId = codeBookUtil.generateStoreCode();
        // save data in array to send it in the response 
        var values = [bookTitle,bookDesc,publisher,author,pages]
        // connection to database 
        // await to tell to thread to wait until you get the result then continue
        var query = await queries.queryList.SAVE_BOOK_QUERY;
        // all we need to send data I have nothing to get back
        await connection.query(query,values)
        // finally if everything oes right, data will send to database successfully
        return response.status(201).send('DATA SENT SUCCESSFULLY'); 


    } catch (error) {
        return response.status(500).send(error , 'FAILED TO SEND DATA');
    }

}
