
const router=require('express').Router();

const {User,Post,Comment}=require('../../models');

//Route /user/signup

router.post('/signup', async (req, res) => {
    try {

      console.log(req.body);  
      const userData = await User.create(req.body);
      console.log(userData);  

        req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.logged_in = true;
       
        res.status(200).json(userData);

      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

  //LOGOUT ROUTE

/*
  Destroy the session for the user,if user is logged in
  */
 

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

 

  module.exports=router;