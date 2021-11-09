const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile.js')[environment];
const database = require('knex')(configuration);

const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 3001);
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.json('Welcome to our softWhere? Cities API. Please add '/cities' to the URL to access data.')
})

app.get('/cities', async (request, response) => {
  try {
    const cities = await database('cities').select();
    response.status(200).json(cities);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.get('/cities/:id', async (request, response) => {
  try {
    const cities = await database('cities').where('id', request.params.id).select();
    if (cities.length) {
      response.status(200).json(cities);
    } else {
      response.status(404).json({
        error: `Could not find a city with id ${request.params.id}`
      });
    }
  } catch (error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`Cities is running on http://localhost:${app.get('port')}.`);
});
