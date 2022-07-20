const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Post, Comment } = require("../models");
const sequelize=require('../config/connection.js');

router.use("/api", apiRoutes);



router.get("/", async (req, res) => {
  res.redirect("/home");
});


//LOGIN ROUTE
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.render("home", { logged_in: req.session.logged_in ,username: req.session.username });
  } else {
    res.render("login", { logged_in: req.session.logged_in});
  }
});


//SIGN UP ROUTE

router.get("/signup", async (req, res) => {
  if (req.session.logged_in) {
    res.render("home", { logged_in: req.session.logged_in ,username: req.session.username });
  } else {
    res.render("signup", { logged_in: req.session.logged_in});
  }
});


//LOGOUT ROUTE

router.get("/logout", async (req, res) => {
  res.render("home", { logged_in: req.session.logged_in });
});


//HOME ROUTE


router.get("/home", async (req, res) => {
  console.log("He;llo");
  try {
  
    const postData = await Post.findAll({
      attributes: ["id", "title", "content", "created_at"],
      include: [
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });


    let posts = postData.map((post) => post.get({ plain: true }));

    posts = posts.map((post) => {
      return {
        ...post,
        formattedDate:
          new Date(post.created_at).getMonth() +
          "/" +
          new Date(post.created_at).getDate() +
          "/" +
          new Date(post.created_at).getFullYear(),
      };
    });

    res.render("home", {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      username: req.session.username,
      posts,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get("/post", async (req, res) => {
   console.log("Entered /post");
   try{

       //post data-we have post id
       //comment data
    //    const postData=await Post.findOne({
    //     include:[{
    //         model:Comment,  
    //         required:true,
    //         attributes:['comment','user_id'],
    //     },
    //     {
    //         model:User,
    //         attributes:['username'],
    //     }
        
    //     ],
    //     attributes:['title','content','created_at'],
    //     where:{
    //         id:req.session.post_id
    //     }
    //    });

    console.log("post id in /post",req.session.post_id);
    const postData=await sequelize.query(
        `select distinct P.id as post_id,title,content,P.created_at as post_created_date ,(select user.username from user where user.id=P.user_id) as posted_user,C.comment ,(select username from user where id=C.user_id) as commented_user,C.created_at as comment_created_on from post as P join comment C on P.id=C.post_id where P.id=${req.session.post_id}`
      );


    //    const userData=await User.findAll({
    //     include:[{
    //       model:Song,
    //       through:Library,
    //       as:'user_song_list',
    //       attributes:['id','artist_name','album_name','media_image','song_title','media_url'] 
    //     } 
    //     ],
    //     where:{
    //       id:req.session.user_id
    //     }
    //   });



    //    let post=postData.get({plain:true});
    console.log(postData);
    let postDate=postData[0][0].post_created_date;
    let post={
        id:postData[0][0].post_id,
        title:postData[0][0].title,
        content:postData[0][0].content,
        postedBy:postData[0][0].posted_user,
        postenOn:new Date(postDate).getMonth() + "/" +new Date(postDate).getDate() +"/" + new Date(postDate).getFullYear()
        
    };
   
     const comments=[];


        for(let j=0;j<postData[0].length;j++){

           let date=postData[0][j].comment_created_on;

            comments.push({ 
                content:postData[0][j].comment,
                commentedBy:postData[0][j].commented_user,
                commentedOn:new Date(date).getMonth() + "/" +new Date(date).getDate() +"/" + new Date(date).getFullYear()
        })

        
       
      }
      console.log(comments);

       res.render("postDetail",{post,comments,logged_in:req.session.logged_in});
   }
   catch(e){
    console.log(e);
   }

});

//DASHBOARD

router.get("/dashboard", async (req, res) => {

    const postData=await Post.findAll({
        attributes:['id','title','content','created_at'],
        where:{user_id:req.session.user_id}
    })

    let posts = postData.map((post) => post.get({ plain: true }));

    posts = posts.map((post) => {
      return {
        ...post,
        formattedDate:
          new Date(post.created_at).getMonth() +
          "/" +
          new Date(post.created_at).getDate() +
          "/" +
          new Date(post.created_at).getFullYear(),
          //not able to directly pass it hence added to posts
          username: req.session.username
      };
    });
   
    console.log(postData);
    // console.log(username);
   
    res.render("myposts", { logged_in: req.session.logged_in,posts});

  });

//NEW POST ---TO DO

router.get("/newpost", async (req, res) => {

  res.render("newpost",{ logged_in: req.session.logged_in});

});

module.exports = router;
