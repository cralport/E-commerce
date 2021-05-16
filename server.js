const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');
const api = require('./routes/api');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);
app.use('/api',  require('./routes/api'));

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})