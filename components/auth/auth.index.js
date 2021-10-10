const jwt = require("jsonwebtoken");
const AuthService =require("./auth.service")

const login = async (req,res)=>{
    
    const{username,password} = req.body;
    if(!username || !password){
        res.json(global.StandartResponse(false,'Username or password is required',{}))
    }
    
    try{
        const user = await AuthService.userCheck(username,password)
        if(user){
           
            const payload = { username:user.username ,name: user.name, age:user.age,job:user.job};
            const token = jwt.sign(payload, req.app.get("token_private_key"), {expiresIn:'24h'});
            res.json(global.StandartResponse(true,"Login Success",{
                ...payload,
                access_token:token
            }));
        }   
        else{
            res.json(global.StandartResponse(false,"User not found!",{}))
        }
    }
    catch (e) {
        res.json(global.StandartResponse(false,"Something went wrong!",{}))
    }
    
    
}
module.exports = {
    login
}