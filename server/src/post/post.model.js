const knex = require("../../db/knex");

const POST_TABLE = 'post_table';

module.exports = {
    POST_TABLE,

    getAllPosts(){
        return knex(POST_TABLE).select('*')
    },

    getSinglePost(id){
        return knex(POST_TABLE)
        .where('id', '=', id)
        .select('*');
    },

// Not sure what we need to pass as a parameter to addNewPost in the MVC model - Matt

    addNewPost(){
        return knex(POST_TABLE)
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

    deletePost(id){
        return knex(POST_TABLE).where('id', '=', id).del()
    },

    updatePost(id){
        return knex(POST_TABLE)
        .where('id', '=', id)
        .update(updatedPost);
    },
};
