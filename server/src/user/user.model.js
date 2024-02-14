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

    addNewUser(){
        return knex('user_table')
        .insert({
          first_name,
          last_name,
          username,
          email,
          password,
          bio,
          image,
        })
        .returning('*');
    },

    deleteUser(id){
        return knex('post_table').where('id', '=', id).del();
    },

    updateUser(id){
        return knex('user_table').where('id', '=', id).update(updatedUser);
    }
}