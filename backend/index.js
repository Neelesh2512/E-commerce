const express = require('express');
const cors = require('cors');
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register", async (req, resp) => {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})

app.post("/login", async (req, resp) => {
     let user = await User.findOne(req.body).select('-password');
     console.log(req.body);
     if(req.body.password && req.body.email){
        if(user){
            resp.send(user);
        }else{
            resp.send("Invalid Email or Password");
        }
     }else{
        resp.send("Invalid Email or Password");
    }
        
})

app.post("/add-product", async (req, resp) => {
    let product = new Product(req.body);
    let result = await product.save();
    resp.send(result);
})

app.listen(5000);