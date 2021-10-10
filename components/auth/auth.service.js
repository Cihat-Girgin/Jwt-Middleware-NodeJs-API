const {sha256} = require('js-sha256');
const fake_user =require("../user/fake_user")
const userCheck = async (username,password) =>{
const admin =fake_user.admin;
    if(admin.username=== username && admin.password === sha256(password)){
        return admin;
    }
    return null;
}


module.exports = {
    userCheck
}