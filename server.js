const express = require('express');
const storeRoute = require('./routers/routerStore');
const bookRoute = require('./routers/routerBook');
const cors = require('cors');
var app = express();
const PORT = 3000;
app.use(cors());
// Parse application /x-www-form-urlencoded
app.use(express.urlencoded({extended:false}));
// Parse application json
app.use(express.json());
app.use('/api/v1',storeRoute)
app.use('/api/v1',bookRoute)
app.get('/',(request,response) => {
    response.send('START SERVER')
});
app.listen(PORT, () => {
    console.log(`SERVER IS ACTIVE ${PORT}`);
})
