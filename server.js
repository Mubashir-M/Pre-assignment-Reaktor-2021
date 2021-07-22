const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

app.use(cors({
  origin: '*'
}));




app.get('/*', (req, res) => {
  let endpoint = process.env.API_BASE_URL
  axios.get(endpoint)
    .then(response => {
      res.json(response.data)
    })
    .catch(error => {
      res.json(error)
    })
})
app.listen(process.env.PORT || 3000);