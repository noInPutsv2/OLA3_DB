import express from "express";
import cors from 'cors'
import mssql from 'mssql'

// Application start and config
const app = express();
const port = 3000;
app.use(cors())

// DB Config
const sql = mssql

async function dbQuery(query) {
  await sql.connect('Server=localhost;Database=ola1_db;User Id=sa;Password=StrPass2222123;TrustServerCertificate=yes;')
  const result = await sql.query(query)
  return result
}

app.get('/answer1', (req, res) => {
  dbQuery("select DISTINCT cityName FROM city WHERE c40=1").then(result => {
    res.send(result);
  }).catch(err => {
    console.log(err);
    res.sendStatus("Error");
  });
});

app.get('/answer2', (req, res) => {
  dbQuery("SELECT organization_id FROM city WHERE cityName='"+ req.query.city+"'").then(result => {
    const org_id = result.recordset[0].organization_id
    dbQuery("SELECT population, population_year FROM city_reduction WHERE organization="+org_id).then(result => {
      console.log(result)
    }).catch(err => {
      console.log(err);
      res.sendStatus("Error");
    });
  }).catch(err => {
    console.log(err);
    res.sendStatus("Error");
  });
});

app.get('/answer3', (req, res) => {
res.send('Welcome to my server!');
});

app.get('/answer4', (req, res) => {
res.send('Welcome to my server!');
});

app.get('/answer5', (req, res) => {
res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});