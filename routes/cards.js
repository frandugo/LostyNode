const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('card', { prompt: "Texto alternativo!" });
});

module.exports = router;