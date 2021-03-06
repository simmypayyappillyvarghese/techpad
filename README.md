# Techpad


## Project Description

CMS style blog site based on MVC paradigm utilizing Handlebar.js as Templating Language and Sequalize as ORM and  express-session npm package for authentication.

TechPad allows user to create post,add comments(need to be signed in),view all the posts by other useras well in home tab,access their own posts from dasboard ,edit the post and delete the post as well.

### User Story
<br>

AS A developer who writes about tech I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions


### Acceptance Criteria
<br>



```
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments
```

## Links

Heroku Link : https://damp-woodland-35630.herokuapp.com/ 

Repo Link: https://github.com/simmypayyappillyvarghese/techpad/

## Technologies/Packages Used

* LANGUAGES/FRAMEWORKS

    * HTML
    * CSS
    * FLEXBOX
    * JAVASCRIPT

* PACKAGES

    * EXPRESS
    * EXPRESS-HANDLEBARS
    * EXPRESS-SESSION
    * CONNECT SESSION SEQUELIZE
    * SEQUELIZE
    * MYSQL2
    * BCRYPT


## Screenshots

Below is the Login screenshot

<br>

![Login Screenshot](./public/images/login_screenshot.png)

Below is the Home screenshot

<br>

![Home Screenshot](./public/images/home_screenshot.png)

Below is the Dashboard screenshot

<br>

![Dashboard Screenshot](./public/images/edit_post-screenshot.png)

Below is the Create Post screenshot

<br>

![Create Post Screenshot](./public/images/create_post_screenshot.png)


Below is the Screenshot when Uer is logged in and clicks on a post

![ Post Screenshot](./public/images/post_screenshot.png)

Below is teh screenshot with update delete post options


![Edit Delete Post](./public/images/update-delete-post-screenshot.png)