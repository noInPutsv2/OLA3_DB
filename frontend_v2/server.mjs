import express from "express";
import cors from 'cors'
import neo4j from 'neo4j-driver';

// Application start and config
const app = express();
const port = 3000;
app.use(cors())

app.get('/answer1', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver
    var res_list = []

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report) WHERE r.c40 = true RETURN DISTINCT r.city',
        {},
        { database: 'dbmain' }
      )

      records.forEach(record => {
        if(typeof record._fields[0] === "string") {
          res_list.push(record._fields[0])
        }
      })
      res.send(res_list);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

app.get('/answer2', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (n:Report) WHERE n.city = "'+ req.query.city +'" RETURN n.population, n.city',
        {},
        { database: 'dbmain' }
      )

      res.send(records[0]._fields);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

app.get('/answer3', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report)-[:REPORT_YEAR]->(y:Year) WHERE y.year = 2016 AND r.percentage_reduction_target IS NOT NULL RETURN avg(r.percentage_reduction_target)',
        {},
        { database: 'dbmain' }
      )
      res.send(records[0]._fields);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

app.get('/answer4', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report)-[:FROM_ORGANISATION]->(o:Organisation) WHERE r.gases_included =~ ".*'+req.query.gas+'.*"  RETURN DISTINCT o, r.gases_included',
        {},
        { database: 'dbmain' }
      )

      res.send(records);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

app.get('/answer5', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report)-[:COUNTRY_ORIGIN]->(c:Country) WHERE r.gdp =~ "EUR.*" RETURN DISTINCT c, r.gdp',
        {},
        { database: 'dbmain' }
      )

      res.send(records);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

// TODO
app.get('/answer6', (req, res) => {
  (async () => {
    const URI = 'bolt://localhost:7687'
    const USER = 'neo4j'
    const PASSWORD = 'abcd1234'
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report)-[:COUNTRY_ORIGIN]->(c:Country) WHERE r.gdp =~ "EUR.*" RETURN DISTINCT c, r.gdp',
        {},
        { database: 'dbmain' }
      )

      res.send(records);
      await driver.close()
    } catch(err) {
      res.sendStatus(`Connection error\n${err}\nCause: ${err.cause}`)
      await driver.close()
    }
  })();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});