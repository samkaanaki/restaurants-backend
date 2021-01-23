const app = require('./app');

// listening on open port and console log proves server is up and running
const port = 9000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
