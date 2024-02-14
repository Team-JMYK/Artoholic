const knex = require("../../db/knex");

const POST_TABLE = 'post_table';

module.exports = {
    POST_TABLE,

    getAllPosts(){
        return knex('post_table').select('*')
    },

    getSinglePost(id){
        return knex('post_table')
        .where('id', '=', id)
        .select('*');
    },

// Not sure what we need to pass as a parameter to addNewPost in the MVC model - Matt

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
    },

    deletePost(){
        return knex('post_table').where('id', '=', id).del()
    },

    updatePost(){
        return knex('post_table')
        .where('id', '=', id)
        .update(updatedPost);
    },
};