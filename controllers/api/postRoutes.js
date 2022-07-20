
const router=require('express').Router();

const {User,Post,Comment}=require('../../models');


router.post('/addComment', async (req, res) => {

    console.log("Entering add comment");  
    try {
      req.body.user_id=req.session.user_id;
      const commentData = await Comment.create(req.body);
     console.log("comment id in request",req.body.user_id);
      req.session.save(() => {
        req.session.post_id = req.body.post_id;
        
        res.json({
          message: "Comment Created",
        });
      });
      
      }

   
      
  
    
    catch (err) {
      res.status(400).json(err);
    }
  });

  router.post('/newpost', async (req, res) => {

    console.log("Entering /newpost");

try {
      req.body.user_id=req.session.user_id;
      const postData = await Post.create(req.body);

      req.session.save(() => {
        req.session.post_id = req.body.post_id;
        
        res.json(postData);

      });
      
      }
      catch(e){console.log(e);}
    }
    
    
    );



  module.exports=router;