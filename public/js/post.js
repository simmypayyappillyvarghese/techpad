

const postContainer=document.querySelector('.post-div-container'); 
const commentElements=document.querySelectorAll('[data-commentId]'); 


async function commentHandler(event){
    event.preventDefault();
    const comment=this.previousElementSibling.value;
    const post_id=this.parentElement.getAttribute('data-commentId');
    console.log("Post Id on submitting the comment",post_id);

    const response=await fetch('/api/post/addComment',{
    
        method: 'POST',
        body: JSON.stringify({ comment,post_id}),
        headers: { 'Content-Type': 'application/json' },
    });

    console.log(response.ok);
    if(response.ok){

     document.location.replace('/post');
    }
}

async function postClickHandler(event){
    event.preventDefault();

  if(event.target.classList.contains('post-header')){
   
     //Flag indicating user is logged in 
     const isUserLoggedIn=postContainer.getAttribute('data-logged');


    if(!isUserLoggedIn){

        document.location.replace('/login');
    }
    else{
        


    const parent=event.target.parentElement;
    const postId=parent.getAttribute('data-postId');

    

    let commentElement=commentElements[postId-1];
    commentElement.classList.remove('comment-div');
    commentElement.classList.add('displayComment');

    commentElement.querySelector('.btn').addEventListener('click',commentHandler);
   

    }

  }
    
   
}

postContainer.addEventListener('click',postClickHandler);
