const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.PORT || 3001);
app.locals.title = 'Cities';

app.get('/', (request, response) => {
  response.json('Welcome to our API')
})

app.get('/cities', async (request, response) => {
  try {
    const cities = await database('cities').select();
    console.log(cities)
    response.status(200).json(cities);
  } catch(error) {
    response.status(500).json({ error });
  }
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

