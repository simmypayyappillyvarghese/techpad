
const newPostForm=document.querySelector('#new-post-form');
const newPostBtn=document.querySelector('#new-post-btn');





function redirectToPostHandler(){

   document.location.replace('/home/newpost');

}




newPostBtn.addEventListener('click',redirectToPostHandler);






