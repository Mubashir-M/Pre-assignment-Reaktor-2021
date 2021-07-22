const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const port = process.env.PORT || 3000;
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
app.listen(port);