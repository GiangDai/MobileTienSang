
const { updateOne } = require('../models/mobilephone');
const mobilephone = require('../models/mobilephone');
const oder = require('../models/oder');
const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject } = require('../util/mongoose');
class adminControllers{

    //[GET]/admin
    home(req,res){
        
        mobilephone.find({})
        .then(mobilephone =>{
            // res.json(mobilephone);
            res.render('mobilephone/mymobilephone',{
                mobilephone:mutipleMogooseToObject(mobilephone)
            });
        });

        
  

    }

    //[get]/admin/oder
    oder(req,res,next){
        oder.find({})
        .then(oder =>{
            // res.json(oder);
            res.render('mobilephone/oder',{
                oder:mutipleMogooseToObject(oder)
            });
        });
    }


    

   
    //[GET]/admin/add
    add(req,res){
        res.render("mobilephone/add");
    }

    //[POST]/admin/store
    store(req,res,next){
        // const formData = req.body; 
        // res.json(formData)
        // slugPhone = req.body
        // res.json(req.body);
        const phone = new mobilephone({
            name:req.body.name,
            price:req.body.price,
            creator:req.body.creator,
            img:req.body.img,
            cameraAfter:req.body.cameraAfter,
            cameraBefore:req.body.cameraBefore,
            ram:req.body.ram,
            memory:req.body.memory,
            network:req.body.network,
            SIM:req.body.SIM,
            battery:req.body.battery,
            chargingPort:req.body.chargingPort,
            CPU:req.body.CPU,
            GPU:req.body.GPU,
            system:req.body.system,
            warranty:req.body.warranty
            
          });

        phone.save();
        res.redirect('/admin');
    
    

    }

    //[GET]/admin/edit/:slug
    edit(req,res,next){
        mobilephone.findOne({slug:req.params.slug})
        .then(mobilephone => {res.render('mobilephone/edit',{
            mobilephone:mongoosesToObject(mobilephone)
        });
        });
    }
    //[PUT]/admin/:slug
    update(req,res,next){
        mobilephone.updateOne({slug:req.params.slug}, req.body)
        .then(() =>
            res.redirect('/admin')
            )
        .catch(next);
    }
    //[delete]/admin/:slug
    delete(req,res,next){
        mobilephone.deleteOne({slug:req.params.slug})
        .then(() =>
            res.redirect('/admin')
            )
        .catch(next);
    }

    //[delete]/admin/oder/:_id
    confirm(req,res,next){
        //res.json(req.params._id)
      
        oder.deleteOne({_id:req.params._id})
        .then(() =>
            res.redirect('/admin/oder')
            )
        .catch(next);
    }
}

module.exports = new adminControllers;