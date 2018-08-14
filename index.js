const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//pending connection to the test database running on localhost and get notified
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', function(){
    console.log("connection is started");
});

//defind the User Schema for the database
let UserSchema = new Schema({
    name: {type: String, required: [true, 'Your name is required']},
    email: {type: String, required: [true, 'you shouldn\'t forget your E-mail']},
    phone_num : {type: Number, required: [true, 'please enter you phone']},
    pass: {type: String, required: [true, 'you can\'t go in without password']},
    id: {type: String, required: true, unique: true},
});



//compiling the Schema into model
let newUser = mongoose.model('newUser', UserSchema);

