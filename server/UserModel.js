let db = require("./db");

let scheme = db.Schema({
    "name": { type: String, required: true },
    "email": { type: String, required: true },
    "phone": String,
});

let User = db.model("User", scheme);

module.exports = User;
