const postContainer=document.querySelector('.post-div-container'); 




postContainer.addEventListener('click',postClickHandler);

async function postClickHandler(event){

    const isUserLoggedIn=postContainer.getAttribute('data-logged');
    console.log(isUserLoggedIn);

    if(!isUserLoggedIn){

        document.location.replace('/login');
    }
    else{

        document.location.replace('/addComment');
        
    }

   
}
