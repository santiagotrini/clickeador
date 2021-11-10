// imports
const express  = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// config vars
const PORT       = process.env.PORT       || 4000;
const DB         = process.env.DB         || 'mongodb://localhost/clickeador';
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
app.use(cors());
app.use(express.json());
// serve frontend
app.use(express.static('public'));
app.use('/', require('./routes/score'));
// listen
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
