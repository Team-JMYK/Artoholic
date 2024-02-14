const knex = require("../../db/knex");

const POST_TABLE = 'post_table';

module.exports = {
    POST_TABLE,

    getAllPosts(){
        return knex('post_table').select('*')
    },

    getSinglePost(){
        return knex('post_table')
        .where('id', '=', id)
        .select('*');
    },

    addNewPost(){
        return knex('post_table')
        .insert({
          slug,
          title,
          description,
          body,
          createdAt: timeStamp,
          updateAt: timeStamp,
          userId,
        })
        .select('*');
    }
}