const e = require('express');
const Userdb = require('../model/model');

exports.create = (req , res) => {
    if(!req.body){
        res.status(400).send({message : "Content Can Not Be Empty..!"});
        return;
    }
    const user = new Userdb({
        name : req.body.name,
        email : req.body.email,
        gender : req.body.gender,
        status : req.body.status
    });

    user
    .save(user)
    .then(data =>{
        
        res.redirect('/add_user')
       
    })
    .catch(err =>{
      res.status(500).send({
          message : err.message || "Err While Creating User"
      })
    })
}

exports.find = (req , res) => {
            if(req.query.id){
                const id = req.query.id;
                Userdb.findById(id)
                .then(data =>{
                    if(!data){
                        res.status(501).send({message : "Not FOund  User With this Id..!"})
                    }else{
                        res.send(data);
                    }
                })
                .catch(err =>{
                    res.status(505).send({message : "Err While Dinding a user..!"});
                })
            }else{
                Userdb.find()
                .then(user =>{
                    res.send(user)
                })
                .catch(err =>{
                    res.status(500).send({message : err.message || "Err While Find Users"})
                }) 
            }
       
}

exports.update = (req , res) => {
    if(!req.body){
        return res.status(400).send({message : "Update Values Can Not Be empty..!"})
        
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id , req.body , {useFindAndModify : false})
    .then(data =>{
        if(!data){
            res.status(404).send({err : err.message || "User With This ID NOt Found..!"})
        }else{
            res.send(data);
        }
    })
    .catch(err =>{
        res.status(500).send({err : err.message || "Err While Updating User" })
    })

}

exports.delete = (req , res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(403).send({message : "Not FOund This Id To DELete..!"})
        }else{
            res.send({message : "User DELETED Successfully..!"})
        }
    })
    .catch(err =>{

res.status(500).send({ message : "Could not DeLEte User..!"})
    })

}
