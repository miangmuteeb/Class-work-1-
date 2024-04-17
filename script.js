function toastifyError (text){

  Toastify({
      text: text || "This is a toast",
      duration: 2500,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "red",
      },
     
    }).showToast();
}

function toastifySuccess (text){

  Toastify({
      text: text || "This is a toast",
      duration: 2500,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
     
    }).showToast();
}

let users =[];

function registration () {
  let input = document.getElementById("register").value
  if(!input){
      toastifyError("Please enter your email ")
      return
  }
  let adding = users.push(input)
  
}

function login () {
  let loginInput=document.getElementById("login").value
  if(!loginInput){
      toastifyError("Please enter your email ")
      return
  }

  for (let i = 0; i < users.length; i++) {
      if (users[i]==loginInput) {
       toastifySuccess("you are are login successfully")
       document.getElementById("msg").innerHTML = "Your email is " + "<span style='color:green'>" + loginInput + "</span>";
       return
      }
      if (users.length === 0) { // Check if users array is empty
          toastifyError("User is not found and try to register first");
          console.log("User is not found and try to register first");
          return;
      }
      else{
       toastifyError("User is not found and try to register first")
       return
      }
       
   }
}




 




 