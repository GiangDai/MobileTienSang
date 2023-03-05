
const mobilephone = require('../models/mobilephone');
const oder = require('../models/oder');
const { mutipleMogooseToObject } = require('../util/mongoose');
const { mongoosesToObject } = require('../util/mongoose');
class siteControllers{

   
    //[get]/
    home(req,res,next){
        mobilephone.find({}, function (err, mobilephone) {
            if(!err){
                // res.render('home',{
                //    //mobilephone:mobilephone 
                //(handlebars có lỗi bảo mật và k cho truy cập) nếu như này thì ra ngoài sẽ k truy cập trưc  tiếp được 
                //    //phải làm theo cách dưới   
                // })
                
                res.render('home',{
                    mobilephone: mutipleMogooseToObject(mobilephone),
                });

            }else {
                res.status(400).json({
                    error: 'loi',
                })
            }
          });
    }

    //[GET]/phone
    phone(req,res){
        //cach 1 dung callback
        mobilephone.find({}, function (err, mobilephone) {
            if(!err){
                // res.render('home',{
                //    //mobilephone:mobilephone 
                //(handlebars có lỗi bảo mật và k cho truy cập) nếu như này thì ra ngoài sẽ k truy cập trưc  tiếp được 
                //    //phải làm theo cách dưới   
                // })
                
                res.render('mobilephone/phone',{
                    mobilephone: mutipleMogooseToObject(mobilephone),
                });

            }else {
                res.status(400).json({
                    error: 'loi',
                })
            }
          });

      
          

    }
    //[GET]/search
    search(req,res,next){
        mobilephone.find({name:req.query.search})
        .then(mobilephone => {
            res.render('mobilephone/search',{
                mobilephone:mutipleMogooseToObject(mobilephone)
            })
        })
        .catch(next)
    }
    // tam(req,res,next){
    //     // mobilephone.find({name:req.query.search})
    //     // .then(mobilephone => {
    //     //     res.render('mobilephone/search',{
    //     //         mobilephone:mutipleMogooseToObject(mobilephone)
    //     //     })
    //     // })
    //     // .catch(next)
    //     res.render('mobilephone/tam')
    // }
    details(req,res,next){
        mobilephone.findOne({slug:req.params.slug})
        .then(mobilephone => {
            // res.json(mobilephone)
            res.render('mobilephone/details',{
                mobilephone:mongoosesToObject(mobilephone)
            })
        })
        .catch(next)
        // res.render('mobilephone/details');
        // //res.send('details')
    }

    //[get]/oder-client
    oderClient(req,res,next){
        // res.render('mobilephone/oderClient');
        var tam1 = req.query.slugOder;
        // res.json(tam1);
        //console.log(Object.keys(tam1).length)
        var oderIndex = Object.keys(tam1).length;
        

        mobilephone.find({ slug: tam1
    //             for (let index = 0; index < oderIndex; index++) {
    //                 slug:tam1[index]
    //             }
            })
        .then(mobilephone => {
            res.render('mobilephone/oderClient',{
                mobilephone:mutipleMogooseToObject(mobilephone)
            })
        })
        .catch(next)
    }


    //[post]/stoded
    storeoder(req,res,next){
        var temp = req.body.nameproduct;
        // res.json(temp[1])
        for (let index = 0; index < temp.length; index++) {
            const oderstore = new oder({
                name:req.body.nameproduct[index],
                price:req.body.price[index],
                img:req.body.img[index],
                username:req.body.username,
                phonenumber:req.body.sdt,
                email:req.body.email,
                address:req.body.address
            });
            oderstore.save();
        }
      
        
          
        // res.json(temp);
        res.send('bạn đã đặt hàng thành công');
    }

    introduce(req,res){
        res.render('introduce/introduce');
    }
}

module.exports = new siteControllers;