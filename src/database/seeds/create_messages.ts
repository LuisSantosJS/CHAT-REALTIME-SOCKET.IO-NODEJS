import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex('messages').insert([
        {
            id: 1,
            userID: 1,
            name: 'Luis Santos',
            msm: 'Olá pessoal, como vocês estão?',
            course: 'REDES DE COMPUTADORES'
        }
    ]);
}