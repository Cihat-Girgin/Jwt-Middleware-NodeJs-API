const router = require('express').Router()
const {list} = require('./user.index')
const {auth} = require('../../middlewares/auth_middleware')

router.post('/list',auth,list)

module.exports=router
