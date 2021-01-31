const app = require('./app');

// listening on open port and console log proves server is up and running
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
