let details=JSON.parse(localStorage.getItem("data"))

            function signin(){

           event.preventDefault()
                let Email=document.getElementById("email").value;
                let Password=document.getElementById("psswrd").value;

              for(let i=0;i<details.length;i++){

              if(Email==details[i].email && Password==details[i].password){
                 
                alert("SuccesFull Login")
                 window.location="./home.html"
              } else{

                alert("Try Again")
           
                  console.log(details[i].email)
              }  
              if(Email=="" || Password==""){

                alert("Fill All Detail")
                window.location="signup.html"
              }

              }

            }