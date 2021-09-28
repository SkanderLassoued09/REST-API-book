const queries = require('../database/queries');
const connection = require('../database/connection');
const storeCodeUtil = require('../Util/utility');
exports.getAllStores = async (request,response) => {
    // To handle errors we had better use try catch
    try {
        var query = queries.queryList.GET_STORE_LIST_QUERY;
        //Here it will connect to database and get back the values, wait for the result 
        /* await : block this code until we get the result */
        var result = await connection.query(query)
        // result returned as json object 
        return response.status(200).send(JSON.stringify(result))
    } catch (error) {
        console.log(error);
        return response.status(500).send(error , 'FAILED TO LIST STORES')
    }
}
exports.saveStore = async (request,response) => {

    try {
        
    var storeName = request.body.storeName;
    var storeAddress = request.body.storeAddress;
    console.log(storeName);
    console.log(storeAddress);
    if(!storeName || !storeAddress){
        return response.status(500).send( `fields shouldn't be empty`);
    }
    var storeCode = storeCodeUtil.generateStoreCode()
    var values = [storeName,storeAddress,storeCode]
    var SaveQuery = queries.queryList.SAVE_STORE_QUERY;
    await connection.query(SaveQuery,values)
    return response.status(201).send('DATA SAVED SUCCESSFULLY')

    } catch (error) {
        console.log(error);
        response.status(500).send('FAILED TO INSERT DATA' )
        
    }

}
