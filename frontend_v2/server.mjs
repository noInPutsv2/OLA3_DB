import express from "express";
import cors from 'cors'
import neo4j from 'neo4j-driver';

// Application start and config
const app = express();
const port = 3000;
app.use(cors())

// DB Config
const URI = 'bolt://localhost:7687'
const USER = 'neo4j'
const PASSWORD = 'abcd1234'

app.get('/answer1', (req, res) => {
  (async () => {
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

app.get('/answer6', (req, res) => {
  (async () => {
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report) WHERE r.land_area_in_square_km Is NOT NULL AND TOSTRING(r.land_area_in_square_km) <> "NaN" RETURN r.land_area_in_square_km, r.city ORDER BY r.land_area_in_square_km DESC',
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

app.get('/answer7', (req, res) => {
  (async () => {
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (c:Country)<-[:COUNTRY_ORIGIN]-(r:Report)-[:FROM_ORGANISATION]->(o:Organisation) WHERE c.name ="Denmark" RETURN r, o',
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

app.get('/answer8', (req, res) => {
  (async () => {
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report) WHERE r.cdp_region IS NOT NULL AND TOSTRING(r.city) <> "NaN" RETURN r.city, r.cdp_region',
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

app.get('/answer9', (req, res) => {
  (async () => {
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report) WHERE r.baseline_emissions_metric_tonnes_co2e IS NOT NULL RETURN r.city, r.baseline_year, r.baseline_emissions_metric_tonnes_co2e',
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

app.get('/answer10', (req, res) => {
  (async () => {
    let driver

    try {
      driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD))
      const { records, summary, keys } = await driver.executeQuery(
        'MATCH (r:Report) WHERE r.city IS NOT NULL AND TOSTRING(r.city) <> "NaN" RETURN r.city, count (*) as count order by count DESC',
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