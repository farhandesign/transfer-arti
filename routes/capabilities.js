const express = require('express');

const smartInsightsTemplate = require('../views/capabilities/smart-insights');
const momentMarketingTemplate = require('../views/capabilities/moment-marketing');
const predictiveAdAudienceTemplate = require('../views/capabilities/predictive-ad-audience');
const purchasePatternTemplate = require('../views/capabilities/purchase-pattern');
const campaignTriggerTemplate = require('../views/capabilities/campaign-portal');

const router = express.Router();

router.get('/insights', (req, res) => {
    res.send(smartInsightsTemplate());
});

router.get('/marketing', (req, res) => {
    res.send(momentMarketingTemplate());
});

router.get('/ad-audience', (req, res) => {
    res.send(predictiveAdAudienceTemplate());
});

router.get('/purchase-pattern', (req, res) => {
    res.send(purchasePatternTemplate());
});

router.get('/campaign-portal', (req, res) => {
    res.send(campaignTriggerTemplate());
});

module.exports = router;
