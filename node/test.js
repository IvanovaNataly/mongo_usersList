var najax = require("../node_modules/najax/lib/najax");

najax
    .get("https://jsonplaceholder.typicode.com/users/5")
    .then(function(user) {
        console.log(user);
    });
