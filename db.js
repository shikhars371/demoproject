const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    id: { type: Number, unique: true },
    sportname: { type: String, unique: true },
    months: { type: String, unique: true }
});

mongoose.connect("mongodb://localhost:27017/mydata", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(result => {
    console.log("mydata is connected to 27017 port");
}).catch(error => {
    console.log("mydata connection failed", error);
})

var User = mongoose.model('User', Post)

module.exports = {
    User
}