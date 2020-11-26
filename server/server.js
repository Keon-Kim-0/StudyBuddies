const express = require('express');
const path = require('path');

const dbURL =
  'postgres://snftdhbf:h6uNFI_iKcB-BG9f1uA81D6xKAnZA7G2@suleiman.db.elephantsql.com:5432/snftdhbf';

//---------------------------------------------
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: dbURL,
});
const db = {
  query: async function (text, params, callback) {
    console.log('executed query', text);
    let data = await pool.query(text, params, callback);
    return data;
  },
};

//----------------------------------------------

const app = express();

app.use(express.json());
app.use('/', express.static('./client'));

app.post('/insert', (req, res, err) => {
  let datBody = req.body;
  console.log(datBody);
  if (err) {
    console.log(err.stack);
  }
  let queryString =
    'INSERT INTO public.tester (name) values (' +
    "'" +
    datBody.query +
    "'" +
    ')';
  console.log(queryString);
  db.query(queryString);
});

app.listen(3000);
