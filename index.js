const express = require('express');

const capabilitiesRouter = require('./routes/capabilities');
const homePageRouter = require('./routes/home');

const app = express();

app.use(express.static('public'));

app.use(homePageRouter);
app.use(capabilitiesRouter);

app.listen(3600, () => {
    console.log('listening');
});
