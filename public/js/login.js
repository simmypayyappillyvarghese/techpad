const signupLink=document.querySelector('#signup-link');


function redirectHandler(event){

    document.location.redirect('/signup');
}

signupLink.addEventListener('click',redirectHandler);


function loginHandler(event){

    
}


loginForm.addEventListener('submit',loginHandler);