const mongoose = require('mongoose');
const uri = "mongodb+srv://maulak1588:nsCFAter952M0GOM@cluster0.kgh7z.mongodb.net/?retryWrites=true&w=majority";
//const uri = 'mongodb://127.0.0.1:27017/origen'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

