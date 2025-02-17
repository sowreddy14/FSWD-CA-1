const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req , res) => {
    const {email , password} = req.query;

    if (email){
        if (email.length < 1){
            return res.send("Email cannot be empty")
        }
    }
    
    if (password){
        if (password.length < 8 || password.length > 16){
            return res.send("Password length should be greater than 8 or less than or equal to 16")
        }
    }
    res.send("Password reset successful!")
})
app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`))