require('./server/db/config');
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const birthdayRouter = require('./server/routes/birthdays');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

app.use('/birthdays', birthdayRouter);
// app.use('/birthdays', birthdayRouter);
// app.use('/birthdays', birthdayRouter);
// app.use('/birthdays', birthdayRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
