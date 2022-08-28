

//    document.getElementById("main").addEventListener("submit",ship)

function ship() {

  event.preventDefault()
  let email = document.getElementById("email").value;
  let con = document.getElementById("corn").value;
  let address = document.getElementById("address").value;
  let code = document.getElementById("code").value;
  let state = document.getElementById("state").value;
  let room = document.getElementById("room").value;



  let u1 = new obj(email, con, address, code, state, room)

  localStorage.setItem("shipping", JSON.stringify(u1))

  window.location.href = "shipping.html"
  //   console.log(email)

}

class obj {

  constructor(e, c, a, d, s, r) {
    this.email = e;
    this.con = c;
    this.address = a;
    this.code = d;
    this.state = s;
    this.room = r;

  }
}
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
