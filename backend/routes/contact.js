const express = require('express');
const router = express.Router();


// optional: accept enquiries saved to DB or forwarded via email in future
router.post('/enquiry', (req, res) => {
// For now just echo — frontend will create WA / tel links directly.
const { name, phone, message } = req.body;
// You could save to DB later.
return res.json({ status: 'ok' });
});


module.exports = router;