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
  });

  let imagelink1 = [
    "img1.webp", "img2.webp", "img3.webp","img4.webp","img5.webp","img6.webp", "img7.webp", "img8.webp"
  ]
  let leftbtn1 = document.getElementById("left1");
  let rightbtn1 = document.getElementById("right1");
  let slider1 = document.getElementById("slider1");

  let imagestate1 = 0;
  rightbtn1.addEventListener("click", function () {
    imagestate1++;
    if(imagestate1===imagelink1.length){
      imagestate1=0;
    }
    slider1.src = imagelink1[imagestate1];
  })

  leftbtn1.addEventListener("click", function () {
    imagestate1--;
    if(imagestate1<0){
      imagestate1=imagelink1.length-1;
    }
    slider1.src = imagelink1[imagestate1];
  })

  
  setInterval(function(){   
    if(imagestate===imagelink.length){
      imagestate = 0;                
    } 
    slider.src = imagelink[imagestate];
   imagestate++;
   

},2000);
setInterval(function(){   
  if(imagestate1===imagelink1.length){
    imagestate1 = 0;                
  } 
  slider1.src = imagelink1[imagestate1];
 imagestate1++;
 

},2000);
function view_arrival(){
  window.location.href="clothing.html"
}
 function view_trending(){
  window.location.href="clothing.html"
 }