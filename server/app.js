const express = require('express');
const createConnection = require('./config/connection')
const cors = require('cors')

const app = express();
const serverRoutes = require('./api/routes')
const port = process.env.PORT || 8081;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(serverRoutes);

createConnection()

app.listen(port, (err) => {
    if (err) throw err
    console.log(`> 🚀 Ready on http://localhost:${port}`)
});