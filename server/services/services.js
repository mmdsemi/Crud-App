
const axios = require("axios");

exports.homeroutes = (req , res) => {
    axios.get("http://localhost:3000/api/users")
    .then(response =>{
        res.render("index" ,{users : response.data});
    })
    .catch(err =>{
        res.send(err);
    })
}


exports.add_user = (req , res) => {
        res.render("add_user");
}




exports.updateuser = (req , res) => {
    axios.get("http://localhost:3000/api/users" , {params: {id :req.query.idd}})
    .then(userdata=>{
        res.render("update_user" , {user : userdata.data});
    })
    .catch(err =>{
        res.send(err);
    })

   
}