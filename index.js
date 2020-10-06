const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const capabilitiesRouter = require('./routes/capabilities');
const homePageRouter = require('./routes/home');
const adminRouter = require('./routes/auth');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({
  keys: ['lalalala']
}));

app.use(homePageRouter);
app.use(capabilitiesRouter);
app.use(adminRouter);


app.listen(3800, () => {
    console.log('listening');
});
