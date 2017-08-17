let express = require("express");
let bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.json());

let User = require("./UserModel");
let allPosts = require("./postsList");

let router = express.Router();

router.route("/users")
    .get((req, res) => {
        User.find(function(err, users){
           if(!err)
               res.json(users);
           else
               res.status(500).send(err);
        });
    })
    .post((req, res) => {
        var user = new User(req.body);
        user.save(function(err, user){
            if(!err)
                res.json(user);
            else
                res.status(500).send(err);
        })
    });

router.route("/users/:id")
    .get((req, res) => {
        let {id} = req.params;
        User.find({ _id: id }, function(err, user){
            if(!err)
                res.json(user[0]);
            else
                res.status(500).send(err);
        });
    });

router.route("/users/:id/posts")
    .get((req, res) => {
        let {id} = req.params;
        let posts = allPosts.filter(post => post.userId == id);
        res.json(posts);
    });

// router.route("/users/:id")
//     .get((req, res) => {
//         let {id} = req.params;
//         let [user] = users.filter(user => user.id == id);
//         res.json(user);
//     });

// router.route("/users/:id/posts")
//     .get((req, res) => {
//         let {id} = req.params;
//         let posts = allPosts.filter(post => post.userId == id);
//         res.json(posts);
//     });


app.use("/api", router);

app.listen(9090);
