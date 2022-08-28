

let data = JSON.parse(localStorage.getItem("shipping"))
getData(data)
function getData(data) {

    let mail = document.getElementById("mail")
    mail.innerText = data.email

    let addres = document.getElementById("add")
    addres.innerText = `${data.room},${data.address},${data.state}`;
    // addres.innertext=
    // console.log(mail)
}



function change() {

    window.location.href = "payment.html"
}

document.getElementById("change").addEventListener("click", change)



function succes() {

    window.location.href = "success.html";
    console.log("yes")
}


document.getElementById("back1").addEventListener("click", succes)

function change1() {

    window.location.href = "payment.html"
}

document.getElementById("change1").addEventListener("click", change1)

let hitman=document.getElementById("hitman")

function get(){
  let data=JSON.parse(localStorage.getItem("cart"))
   hitman.innerHTML=null;
   data.forEach(function(el){
    let div=document.createElement("div");
    let image=document.createElement("img");
    image.src=el.image;
    let Title=document.createElement("h2");
    Title.innerText=el.title;
    // let color=document.createElement("p")
    // color.innerText=

    div.append(image,Title)
    hitman.append(div);
   })
}

get();
