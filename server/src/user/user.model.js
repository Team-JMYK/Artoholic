const knex = require("../../db/knex");

const USER_TABLE = 'user_table';

module.exports = {
    USER_TABLE,

    getAllUsers(){
        return knex('user_table').select('*');
    },

    getSingleUser(id){
        return knex('user_table')
        .where('id', '=', id)
        .select('*');
    },

    addNewUser(reqbody){
        console.log("knex");
        return knex('user_table')
        .insert({
          "first_name": reqbody.first_name,
          "last_name": reqbody.last_name,
          "username": reqbody.username,
          "email": reqbody.email,
          "password": reqbody.password,
          "bio": reqbody.bio,
          "image": reqbody.image
        })
        .returning('*');
    },

    deleteUser(id){
        return knex('user_table').where('id', '=', id).del();
    },

    updateUser(id, updateInfo){
        return knex('user_table').where('id', '=', id).update(updateInfo);
    }
}