const {postModel} = require('../models');

function getPosts(req, res, next) {
    return postModel.find()
        .then(posts => res.json(posts))
        .catch(next);
};

function addNewPost(req, res, next) {
    const newPost = req.body.post;
    postModel.find({ author: newPost.author,
        description: newPost.description,
        title: newPost.title
    }).then(exist => {
        if(exist) {
            res.status(409).send({message: `The post is already published!`});
            return;
        }
        return postModel.create(newPost)
            .then(post => {
                res.status(201).send({message: 'Successful added dish!'})
            }).catch(next)
    })



}


module.exports = {
    getPosts,
    addNewPost
}