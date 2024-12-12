let emailInput=document.getElementById("email");
let passInput=document.getElementById("password");
let login=document.getElementById("login");
let empty=document.getElementById("empty")
let invalid=document.getElementById("invalid")



let database=[];
let users = localStorage.getItem('users');
if (users !== null) {
  database = JSON.parse(users);
}
// console.log(database)

login.addEventListener("click" , function(e){
  e.preventDefault();

    let inputs={
        email:emailInput.value,
        pass:passInput.value
    }

    if(emailInput.value.length==0 && passInput.value.length==0){
      empty.classList.remove("d-none")
      invalid.classList.add("d-none")
    }
    else{

    let InputExists=false;
    for(i=0;i<database.length;i++){
      if(emailInput.value == database[i].email && passInput.value == database[i].pass){
        localStorage.setItem('loggedInUser', JSON.stringify(database[i]));
        InputExists=true
       
        break; 
      }
    }

    if(InputExists){
      
      window.location.replace('./home.html');
      invalid.classList.add("d-none")
      empty.classList.add("d-none")

    }
    else{
      invalid.classList.remove("d-none")
      empty.classList.add("d-none")

    }
  }


})











