let db = require("./db");

let scheme = db.Schema({
    "userId": { type: String, required: true },
    "title": { type: String, required: true },
    "body": { type: String, required: true }
});

let Post = db.model("Post", scheme);

module.exports = Post;
