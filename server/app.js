const express = require('express');
const path = require('path');

(async () => {
    const app = express();
    const serverRoutes = require('./api/routes')
    const port = process.env.PORT || 9000;
    app.use(express.urlencoded({ extended: true })); // Body Parser
    app.use(express.json()); // Body Parser
    app.use(serverRoutes); // Apply Routes
    
    // app.get('*', (req, res) => handle(req, res));

    app.use(express.static(path.join(__dirname,'../client/index.html')));
    
    app.listen(port, (err) => {
        if (err) throw err
        console.log(`> 🚀 Ready on http://localhost:${port} <`)
    });

})();