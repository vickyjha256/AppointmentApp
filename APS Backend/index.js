const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./Config/db');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/api', require("./Routes/authRoute"));
app.use('/api', require("./Routes/userRoute"));
app.use('/api', require("./Routes/appointmentRoute"));

sequelize.sync()
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on port 5000');
    });
  })
  .catch(err => console.log('Error: ' + err));
