exports.seed = function(knex) {
  return knex('user').del()
    .then(() => {
      return knex('user').insert([
        {name: 'Kyle'},
        {name: 'Elyse'},
        {name: 'Duncan'}
      ]);
    });
};
