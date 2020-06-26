const db = require('../database/connection');

function find() {
  return db('plants');
}

function findById(id) {
  return db('plants').where({ id });
}

// function findSteps(id) {
//   return db('steps as s')
//     .select('s.id', 'schemes.scheme_name', 's.step_number', 's.instructions')
//     .join('schemes as sch', 'sch.id', 's.scheme_id')
//     .where( 'scheme_id' , id )
//     .orderBy('s.step_number', 'asc');
// }

function findPlants(id) {
  return db('steps')
      .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
      .join('schemes', 'steps.scheme_id', 'schemes.id')
      .where('schemes.id', id)
      .orderBy('steps.step_number', 'asc');
}

function add(plantData) {
  return db('plants').insert(plantData);
}

function update(id, changes) {
  return db('plants').where({ id }).update(changes);
}

function remove(id) {
  return db('plants').where({ id }).del();
}

module.exports = {
  find, 
  findById,
  findPlants,
  add, 
  update, 
  remove
};