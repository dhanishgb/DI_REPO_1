var express = require('express');
var Program = require('../models/programs');
var router = express.Router();

router.get('/test',async (req,res)=>{
    ctx={
        message: "Welcome to the programs page"
    }

    res.render('test',ctx);

});

router.get('/',async (req,res)=>{
    if (req.session.user){
        user=req.session.user;
    }else{
        user=null;
    }
    program=await Product.findAll(); //retrieve all products from database 
    ctx={
        programs: programs, //add products to context
        user: user
    }

    res.render('products',ctx); //bind the context to the view
});


router.get('/:id',async (req,res)=>{
    id=req.params.id;
    program=await Program.findOne({
        where: {
            id: id
        }
    });
    
    ctx={
        program: program
    }

    res.render('program',ctx);
});


module.exports = router;
