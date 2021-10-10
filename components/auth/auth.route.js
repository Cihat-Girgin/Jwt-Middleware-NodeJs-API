const router = require('express').Router()
const {login} = require('./auth.index')

router.post("/login",login)

module.exports=router;