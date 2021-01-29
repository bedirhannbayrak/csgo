const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  request(
    { url: 'https://hltv-api.vercel.app/api/results' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});

app.get('/results', (req, res) => {
  request(
    { url: 'https://hltv-api.vercel.app/api/matches' },
    (error, response, body) => {
      if (error || response.statusCode !== 200) {
        return res.status(500).json({ type: 'error', message: err.message });
      }

      res.json(JSON.parse(body));
    }
  )
});


const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`listening on ${PORT}`));