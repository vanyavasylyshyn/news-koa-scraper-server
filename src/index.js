const Koa = require('koa');

const app = new Koa();
const routes = require('./routes');

const helmet = require('koa-helmet');
const logger = require('koa-logger');

if (process.env.NODE_ENV === 'development') require('dotenv').config();

const { PORT, HOST } = process.env;

app.use(helmet());
app.use(logger());
app.use(routes);
app.listen(PORT, () => {
  console.log(`started in http://${HOST}:${PORT}`);
});
