/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const existingUserId = await knex('user_table').pluck('id');

  await knex('post_table').del();
  await knex('post_table').insert([
    {
      slug: 'first-post',
      title: 'First Post',
      description: 'This is the first post.',
      body: 'This is the first post body',
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
      userId: existingUserId[0],
      img: "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707964956/artoholic/h6jrzlhdbpdm7yd1nwj4.webp"
    },
    {
      slug: 'second-post',
      title: 'Second Post',
      description: 'This is the second post.',
      body: 'This is the secons post body',
      createdAt: new Date().toISOString(),
      updateAt: new Date().toISOString(),
      userId: existingUserId[1],
      img: "https://res.cloudinary.com/dbegmxgyd/image/upload/v1707965007/artoholic/jaapxus2qcmdnyce5mnj.webp"
    },
  ]);
};
