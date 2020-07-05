require('dotenv/config');

const app = require('./app');

app.listen(process.env.DEPLOY_PORT || 3333);

console.log("Server running...");