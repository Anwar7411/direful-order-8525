
let arr=[];
let signup=()=>{
    event.preventDefault()
    let firstname=document.getElementById("first").value;
    let lastname=document.getElementById("last").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("psswrd").value;

    let obj={
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password

    }

    arr.push(obj);
    localStorage.setItem("data",JSON.stringify(arr))
    window.location="signin.html"
    console.log(arr)
}


