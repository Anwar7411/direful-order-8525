

//    document.getElementById("main").addEventListener("submit",ship)

   function ship(){

     event.preventDefault()
      let email=document.getElementById("email").value;
      let con=document.getElementById("corn").value;
      let address=document.getElementById("address").value;
      let code=document.getElementById("code").value;
      let  state=document.getElementById("state").value;
      let   room=document.getElementById("room").value;
     
     

      let u1= new obj(email,con,address,code,state,room)

      localStorage.setItem("shipping",JSON.stringify(u1))

    //   console.log(email)
   
   }

    class obj{

        constructor(e,c,a,d,s,r){
            this.email=e,
            this.con=c;
            this.address=a;
            this.code=d,
            this.state=s,
            this.room=r

        }
    }