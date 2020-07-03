import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary().unique();
        table.float('userID').notNullable();
        table.string('name').notNullable();
        table.string('msm').notNullable();
        table.string('course').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('messages');
}
