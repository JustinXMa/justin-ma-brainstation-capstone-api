/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { user_id: 1, user_name: 'Jerstin', user_email: 'jerstin@example.com', user_password: 'hashed_password_1' },
    { user_id: 2, user_name: 'Steve', user_email: 'steve@example.com', user_password: 'hashed_password_2' },
    { user_id: 3, user_name: 'Alex', user_email: 'alex@example.com', user_password: 'hashed_password_3' }
  ]);
};
