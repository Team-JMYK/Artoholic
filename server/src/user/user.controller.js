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
            const singleUser = await userModel.getSingleUser(id);
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

            const newUserData = await userModel.addNewUser(req.body);
            res.status(200).send(newUserData);
        } catch (error) {
            console.log(error.message);
            res.status(400).send("no");
        }
    },
    async deleteAUser(req,res){
        try {
            const id = parseInt(req.params.id);
            const deleteTheUser = await userModel.deleteUser(id);
            res.send(`User ${id} was deleted`)
        } catch (error) {
            console.log(error.message);
        }
    },
    async updateAUser(req,res){
        try {
            const id = parseInt(req.params.id);
            const updateTheUser = await userModel.updateUser(id);
            res.send(updateTheUser)
        } catch (error) {
            console.log(error.message)
        }
    },
}