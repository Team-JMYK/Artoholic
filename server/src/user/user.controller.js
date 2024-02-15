const userModel = require("./user.model");

module.exports = {
    async getAll(req,res){
        try {
            const allUsers = await userModel.getAllUsers()
            res.send(allUsers);
        } catch (error) {
            console.log(error.message);
        }
    },
    async getSingle(req,res){
        try {
            const id = parseInt(req.params.id);
            const singleUser = userModel.getSingleUser(id);
            res.send(singleUser)
        } catch (error) {
            console.log(error.message);
        }
    },
    async addANewUser(req,res){
        try {
            const {
                first_name,
                last_name,
                username,
                email,
                password,
                bio,
                image,
            } = req.body;

            const newUserData = await userModel.addNewUser
        } catch (error) {
            
        }
    }
}