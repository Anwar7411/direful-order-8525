let imagelink = [
    "img1.webp", "img2.webp", "img3.webp","img4.webp","img5.webp","img6.webp", "img7.webp", "img8.webp"
  ]
  let leftbtn = document.getElementById("left");
  let rightbtn = document.getElementById("right");
  let slider = document.getElementById("slider");

  let imagestate = 0;
  rightbtn.addEventListener("click", function () {
    imagestate++;
    if(imagestate===imagelink.length){
      imagestate=0;
    }
    slider.src = imagelink[imagestate];
  })

  leftbtn.addEventListener("click", function () {
    imagestate--;
    if(imagestate<0){
      imagestate=imagelink.length-1;
    }
    slider.src = imagelink[imagestate];
  })

  
  setInterval(function(){   
    if(imagestate===imagelink.length){
      imagestate = 0;                
    } 
    slider.src = imagelink[imagestate];
   imagestate++;
   

},2000);
function view_arrival(){
  window.location.href="clothing.html"
}
 function view_trending(){
  window.location.href="clothing.html"
 }