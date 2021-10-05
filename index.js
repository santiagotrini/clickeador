// imports
const express  = require('express');
const mongoose = require('mongoose');
// config vars
const PORT       = process.env.PORT       || 4000;
const DB         = process.env.DB         || 'mongodb://localhost/ecommerce';
// app instance
const app = express();
// db connection
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log(`DB connected @ ${DB}`))
  .catch(err => console.log(err));
// middleware
app.use(express.json());
// serve frontend
app.use(express.static('public'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
