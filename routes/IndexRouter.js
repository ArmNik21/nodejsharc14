const express = require('express');
const { indexView,elekView } = require('../controllers/IndexController');
const router = express.Router();

/* GET home page. */
router.get('/',indexView );


module.exports = router;
