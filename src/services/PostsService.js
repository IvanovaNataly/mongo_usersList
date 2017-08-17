let $ = require("jquery");

class PostsService{

    getPosts(userId){
        return $.get(`/api/users/${userId}/posts`);
    }

}

module.exports = new PostsService();
