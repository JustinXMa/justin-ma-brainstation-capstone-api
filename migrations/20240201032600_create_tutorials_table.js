/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('tutorials', function (table) {
        table.increments('id').primary();
        table.string('build_name');
        table.string('build_creator');
        table.string('category');
        table.string('description');
        table.text('instructions');
        table.integer('views').defaultTo(0);
        table.integer('likes').defaultTo(0);
        table.string('image_path');
        table.timestamp('create_time').defaultTo(knex.fn.now());
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
