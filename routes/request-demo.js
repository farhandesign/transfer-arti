const express = require('express');
const request = require('request');

const requestDemoTemplate = require('../views/demo/request-demo');

const router = express.Router();

router.get('/demo', (req, res) => {
    res.send(requestDemoTemplate());
});

router.post('/demo', (req, res) => {
    const { firstName, lastName, email, company, phone } = req.body;
    //Make sure fields are filled
    if(!firstName || !lastName || !email || !company || !phone) {
        res.send('Please make sure the fields are filled correctly');
        return;
    } 
    // Construct req data
    const data = {
        members: [
            {
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                    PHONE: phone,
                    COMPANY: company
                }
            }
        ]
    }

    const postData = JSON.stringify(data);
    
    const options = {
        url: 'https://us2.api.mailchimp.com/3.0/lists/629c3edff2',
        method: 'POST',
        headers: {
            Authorization: 'auth fd71a0e12983feef6fbcee68cc4d5e1f-us2'
        },
        body: postData
    }

    request(options, (err, response, body) => {
        if(err) {
            console.log(err);
            res.send('Failed');
          
        } else {
            if(response.statusCode === 200) {
                res.send('success');
            } else {
                res.send('Nope Failed');
            }
        }
    });
});

module.exports = router;