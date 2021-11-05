const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Cities';

app.get('/', (request, response) => {
  response.send('Cities will show up here!');
});

app.get('/cities', (request, response) => {
  const cities = app.locals.cities;

  response.json({ cities });
});

app.get('/api/v1/cities', async (request, response) => {
  try {
    const cities = await database('cities').select();
    response.status(200).json(cities);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

