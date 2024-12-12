let emailInput=document.getElementById("email");
let passInput=document.getElementById("password");
let nameInput=document.getElementById("name");
let signup=document.getElementById("signup");
let success=document.getElementById("success");
let error=document.getElementById("error");
let invalidEmail=document.getElementById("emailRe")


let database=[];
let users = localStorage.getItem('users');
if (users !== null) {
    database = JSON.parse(users);
}

signup.addEventListener("click" ,function(e){
    
    e.preventDefault();

    let userinfo={
        email:emailInput.value,
        name:nameInput.value,
        pass:passInput.value
    }
        if (emailValidation() && nameValidation() && passValidation()) {
            let emailExists=false;
            for(i=0 ;i<database.length;i++){
                if(emailInput.value == database[i].email ){
                    emailExists=true
                    break; 

                }
            }
            if(emailExists){
                invalidEmail.classList.remove("d-none")
                success.classList.add("d-none")
                error.classList.add("d-none")

            }
                else{
                    database.push(userinfo);
                    localStorage.setItem('users', JSON.stringify(database));
                    success.classList.remove("d-none")
                    invalidEmail.classList.add("d-none");
                    error.classList.add("d-none")
                }
          
        }
        else{
            error.classList.remove("d-none")
            success.classList.add("d-none")
            invalidEmail.classList.add("d-none");
        }
  
})





//let emailValidation=emailInput.addEventListener("input" ,
function emailValidation(){

        var regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        var text=emailInput.value;
        var msgEmail=document.getElementById("msgEmail")

        if(regex.test(text)){
            emailInput.classList.add("is-valid");
            emailInput.classList.remove("is-invalid");
            msgEmail.classList.add("d-none")
          
        
          return true
        
        }else{
        
            emailInput.classList.add("is-invalid");
            emailInput.classList.remove("is-valid");
            msgEmail.classList.remove("d-none")
        
          return false
        }
}
        

//name
function nameValidation(){

    var regex=/^[a-zA-Z\s]{2,50}$/;
    var text=nameInput.value;
    var msgName=document.getElementById("msgName")
   
    if(regex.test(text)){
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid");
        msgName.classList.add("d-none")
       
    
      return true
    
    }else{
    
        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        msgName.classList.remove("d-none")

    
      return false
    }
}


function passValidation(){

    var regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var text=passInput.value;
    var msgPass=document.getElementById("msgPass")

   
    if(regex.test(text)){
        passInput.classList.add("is-valid");
        passInput.classList.remove("is-invalid");
        msgPass.classList.add("d-none")
        

      return true
    
    }else{
    
        passInput.classList.add("is-invalid");
        passInput.classList.remove("is-valid");
        msgPass.classList.remove("d-none")
    
      return false
    }
}



     








