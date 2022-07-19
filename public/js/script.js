const signupLink=document.querySelector('#signup-link');
const username=document.querySelector('#username').value.trim();
const password=document.querySelector('#password').value.trim();
const error_message=document.querySelector('.error-message');

const validateUsername=()=>{
    return username.match(/^[a-zA-Z]+$/);
}

async function signUpHandler(event){

    event.preventDefault();
    console.log("Clicked Sign Up",username,password);

    let validInput=true;
    error_message.innerHTML=``;

    //Username and Password Validation

    if(username.length<=0 || validateUsername()){

        errorMessage.innerHTML+=`Username is not valid.Please try again`;
        validInput=false;
    }

    if(password.length<8){

        errorMessage.innerHTML+=`Password is not valid(min length:8).Please try again`;
        validInput=false;
    }

      if(validInput){
        try{
        const response=await fetch('/api/user/signup',{
    
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
    
    
        if(response.ok){
    
            document.location.redirect('/home');
        }
        else {
            alert(response.statusText);
          }

         }
        catch(e){
            console.log(e);
        } 

      }
       
}
signupLink.addEventListener('click',signUpHandler);




