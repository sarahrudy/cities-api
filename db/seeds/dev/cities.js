const cityData = require('../../../cityData');

const createCity = async (knex, city) => {
  const cityId = await knex('cities').insert({
    id: city.id,
    city: city.city,
    state: city.state,
    city_and_state: city.city_and_state,    
    image: city.image,
    num_on_best_paying_cities_list: city.num_on_best_paying_cities_list,
    median_software_developer_salary_adj: city.median_software_developer_salary_adj,
    median_income_of_all_jobs: city.median_income_of_all_jobs,
    num_software_developer_jobs: city.num_software_developer_jobs,
    median_home_price: city.median_home_price,
    big_companies: city.big_companies,
    population_2019: city.population_2019,
    population_change_since_2020: city.population_change_since_2020,
    city_blurb: city.city_blurb,
  });
  return cityId
}

exports.seed = async (knex) => {
  try {
    await knex('cities').del()

    let cityPromises = cityData.map(city => {
      return createCity(knex, city)
    })

    return Promise.all(cityPromises)
  } catch (error) {
    console.log(`ERROR`)
  }
}

