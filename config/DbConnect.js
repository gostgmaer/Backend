const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect MongoDB at default port 27017.
const dbConnect = () => {
    const conn = mongoose.connect('mongodb://localhost:27017/react_ecommerce', {
        useNewUrlParser: true,

    }, (err) => {
        if (!err) {
            console.log('MongoDB Connection Succeeded.')
        } else {
            console.log('Error in DB connection: ' + err)
        }
    });
}
module.exports = dbConnect