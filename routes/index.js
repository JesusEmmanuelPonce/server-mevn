const { Router } = require('express')
const categoriaController = require('../controllers/categoria')
const router = Router()

router.get('/', categoriaController.home);

module.exports = router