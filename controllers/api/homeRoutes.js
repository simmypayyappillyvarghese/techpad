const router=require('express').Router();

router.get('/home', async (req, res) => {
    try {
     
        res.render('home');

    } catch (err) {
      res.status(400).json(err);
    }
  });


  module.exports=router;