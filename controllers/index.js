const router = require("express").Router();
const apiRoutes = require("./api");
const { User, Post, Comment } = require("../models");

router.use("/api", apiRoutes);



router.get("/", async (req, res) => {
  res.redirect("/home");
});


//LOGIN ROUTE
router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.render("home", { logged_in: req.session.logged_in });
  } else {
    res.render("login", { logged_in: req.session.logged_in });
  }
});


//SIGN UP ROUTE

router.get("/signup", async (req, res) => {
  if (req.session.logged_in) {
    res.render("home", { logged_in: req.session.logged_in });
  } else {
    res.render("signup", { logged_in: req.session.logged_in });
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


//COMMENT ROUTE

router.get("/addComment", async (req, res) => {


    if(req.session.logged_in){

        res.render('comment');
    }

    else{

        res.redirect('/login');
    }
});



//NEW POST ---TO DO

router.get("/home/newpost", async (req, res) => {
  res.render("newpost", { logged_in: req.session.logged_in });
});

module.exports = router;
