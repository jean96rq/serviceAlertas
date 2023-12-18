const express = require("express");
const userSchema = require("../models/modelAlerta");
const router = express.Router();
 

router.get('/alerta',(req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});


router.post('/alerta', (req, res) => {
    const alerta = userSchema(req.body);
    alerta
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});








module.exports = router;