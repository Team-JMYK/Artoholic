const postModel = require("./post.model");

module.exports = {
    async allPost(req,res) {
        try {
            const allPosts = await postModel.getAllPosts();
            res.send(allPosts);
        } catch (error) {
            console.log(error.message);
        }
    },

    async singlePost(req,res) {
        try {
            const id = parseInt(req.params.id);
            const onePost = await postModel.getSinglePost(id);
            res.send(onePost); 
        } catch (error) {
            console.log(error.message);
        }
    },


 // not quite sure I'm adding createdAt, and UpdateAt correctly here - Matt   
    async addPost(req, res) {
        try {
            const {
                slug,
                title,
                description,
                body,
                createdAt,
                updateAt,
                userId,
                } = req.body;
        
                const newPost = await postModel.addNewPost(req.body);
                res.send(req.body);
        } catch (error) {
            console.log(error.message)
        }
    },

    async deleteAPost(req,res) {
        try {
            const id = parseInt(req.paramas.id);
            const deleteThePost = await postModel.deletePost(id);
            res.send(`You deleted post ${id}`);
        } catch (error) {
            console.log(error.message)
        }
    },

    async updateAPost(req,res) {
        try {
            const id =  parseInt(req.paramas.id);
            const updateThePost = await postModel.updatePost(id)
        } catch (error) {
            console.log(error.message);
        }
    }
}