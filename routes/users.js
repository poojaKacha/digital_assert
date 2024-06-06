var express = require('express');
var router = express.Router();
var userC = require('../controller/user')

/* GET users listing. */
router.post('/signup',userC.create)
router.post('/login',userC.login)
router.get('/',userC.sequre,userC.find)
router.put('/:id',userC.sequre,userC.update)
router.delete('/:id',userC.sequre,userC.delete)

module.exports = router;
