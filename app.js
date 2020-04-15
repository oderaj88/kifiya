const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello Kifiya!");
});
 
module.exports.app = app;
