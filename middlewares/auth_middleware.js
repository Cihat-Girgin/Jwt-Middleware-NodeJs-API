const jwt = require("jsonwebtoken");

const auth = (req,res,next) =>{
    const token = req.headers["x-access-token"] || req.body.token || req.query.token;
    if (!token)
        res.send("Empty Token");
    else {
        jwt.verify(token, req.app.get("token_private_key"), (error, decoded) => {
            if (error)
                res.status(401).send("Invalid Token");
            else {
                req.decode = decoded;
                next();
            }
        });
    }
}

module.exports = {
 auth
};