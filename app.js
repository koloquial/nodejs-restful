const express = require('express');
const app = express();

//middleware
app.use((req, res, next) => {
    res.status(200).json({
        message: 'Working.',
    });
});

module.exports = app;