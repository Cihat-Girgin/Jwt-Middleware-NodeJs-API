const users =require('./fake_user').users
const list = (req,res) =>{
    res.json(users)
}
module.exports={
    list
}