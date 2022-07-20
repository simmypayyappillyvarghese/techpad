
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

    //   const comment=commentData.map((comment) => comment.get({ plain: true }));
    //   console.log(comment);  
    //     req.session.save(() => {
    //     req.session.comment = comment;
    //     res.status(200).json();
    //   });
      
  
    
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



// router.post('/addComment', async (req, res) => {
//     try {

//       console.log(req.body);  
//       req.body.user_id=req.session.user_id
//       const commentData = await Comment.create(req.body);
//       console.log(commentData);  

//     //     req.session.save(() => {
//     //     req.session.user_id = userData.id;
//     //     req.session.logged_in = true;
//     //     req.session.username=userData.username;
//     //     res.status(200).json(userData);

//     //   });
      
    

//     if(commentData){

//         // const postData=Post.findOne({
//         //     attributes:['title','content','user_id','created_at'],
//         //     where:{post_id:req.body.post_id},
//         //     include:{
//         //         model:Comment,
//         //         attributes:['comment','user_id','created_at']
//         //     }
//         // })

//         // const postDetail=postData.map((post)=>post.get({plain:true}));

//         // // res.render("post-detail",{postData});
//         // res.render("post-detail", {postDetail});
        
//     }

    
//     } catch (err) {
//       res.status(400).json(err);
//     }
//   });


//   router.get("/post", async (req, res) => {
//     res.render("post-detail", { logged_in: req.session.logged_in });
//   });

  module.exports=router;