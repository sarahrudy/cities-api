
exports.up = function(knex) {
  // return Promise.all([
  return knex.schema
    .createTable('cities', function (table) {
      // this creates our primary row
      table.increments('id').primary().unsigned().unique();
      table.string('city');
      table.string('state');
      table.string('city_and_state');
      table.string('image');
      table.integer('num_on_best_paying_cities_list');
      table.integer('median_software_developer_salary_adj');
      table.integer('median_income_of_all_jobs');
      table.integer('num_software_developer_jobs');
      table.integer('median_home_price');
      table.string('big_companies');
      table.integer('population_2019');
      table.string('population_change_since_2020');
      table.text('city_blurb');

      table.timestamps(true, true);
    });
  // ])
};

exports.down = function(knex) {
  return knex.schema 
    .dropTable('cities');
};
