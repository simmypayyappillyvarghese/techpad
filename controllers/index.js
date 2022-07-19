const router=require('express').Router();

const apiRoutes=require('./api');

router.use('/api',apiRoutes);


router.get('/',async (req,res)=>{

    console.log("Reaching /");

    if(req.session.logged_in){

        res.render('home',{logged_in:req.session.logged_in});
    }
    else{
        res.render('login',{logged_in:req.session.logged_in});
    }
    
});

router.get('/home', async (req, res) => {
   
   
      try {
       
        if(req.session.logged_in){
            res.render('home',{logged_in:req.session.logged_in});
        }
        else{
            res.render('login',{logged_in:req.session.logged_in});
        }
          
  
      } catch (err) {
        res.status(400).json(err);
      }
    });


router.get('/login',async (req,res)=>{



    if(req.session.logged_in){

        res.render('home',{logged_in:req.session.logged_in});
    }
    else{
        res.render('login',{logged_in:req.session.logged_in});
    }
    
});



router.get('/signup',async (req,res)=>{

   

    if(req.session.logged_in){
        res.render('home',{logged_in:req.session.logged_in});
    }
    else{
        res.render('signup',{logged_in:req.session.logged_in});
    }
    
})

router.get('/logout',async (req,res)=>{

   
        res.render('home',{logged_in:req.session.logged_in});
 
    
});

module.exports=router;