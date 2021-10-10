const router = require('express').Router();
const authRoute = require('./components/auth/auth.route')
const usersRoute = require('./components/user/user.route')

const {auth} = require('./middlewares/auth_middleware')

router.use('/auth',authRoute)
router.use('/users',auth,usersRoute)


module.exports = router;