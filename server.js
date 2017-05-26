import path from 'path';
import Express from 'express';
// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import { StaticRouter } from 'react-router';
// import Routes from '../src/js/Routes';

// initialize the server
const app = new Express();

// define the folder that will be used for static assets
app.use(Express.static(path.resolve(__dirname, "src/static/")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "src/index.html"));
  // universal routing and rendering
  /*const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Routes/>
    </StaticRouter>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.write(`
      <!doctype html>
      <div id="app">${html}</div>
    `);
    res.end();*/
  // }
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
