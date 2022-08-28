function navbar(){
    return `<div id="navbar">
        <div id="nav1">
                
              <a href="./home.html">  <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1574278243" alt=""></a>
    
        </div> 
            <div id="search">
                
                <input type="text" placeholder="Search our store" id="srch">
               <button id="submit" type="submit"><i class="fa fa-search"></i> </button>
               <a href="./signin.html"> <i style="color: black" id="user" class="fas fa-user"></i></a>
               <i style="color: black" onclick="popcart()" id="bag" class="fa fa-shopping-bag"></i>
            </div>     
         
     </div>
     <div id="list">
     <ul>
        <li id="clear" ><a href="./clothing.html">CLOTHING</a></li>
        <li id="clear" ><a href="#"></a>SHOES</li>
        <li id="clear" ><a href="#"></a>HANDBAGS & ACCESSORIES</li>
        <li id="clear" ><a href="#"></a>DESIGNERS</li>
        <li id="clear" ><a href="#"></a>SUNGLASSES</li>
        <li id="clear" ><a href="#"></a>JEWELRY & WATCHES</li>
        <li id="clear" ><a href="#"></a>UNDER $50</li>
        <li id="clear" ><a href="#"></a>BEAUTY</li>
      </ul>  

      <ul>
        <li id="clear" style="color:red;margin-top:20px;margin-bottom: 30px">CLEARANCE</li>
      </ul>
    </div>`
}

function footer(){
    return `<div id="footer">
    <div id="shop">
        <div id="denim">
            <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/denim_720x.jpg" alt="" width="430px" height="330px">
            <h2 style="font-family: Tiemann,serif;line-height:35px;font-weight:lighter">UP TO 85% OFF THE DENIM SHOP FOR HIM & HER</h2>
            <h4 style="margin-top:10px;margin-bottom:10px;font-family:sans-serif;font-weight:lighter">From Hudson Jeans, Joe's Jeans, J Brand & More</h4>
            <a href="#"><button id="btn">SHOP DENIM</button></a>
        </div>
        <div id="jumpsuits">
            <img src="https://images.herzindagi.info/image/2022/May/jumpsuits-mistakes-not-to-make.jpg" alt="" width="430px" height="330px">
            <h2 style="font-family: Tiemann,serif;font-weight:lighter">UP TO 90% OFF TRENDING JUMPSUITS & ROMPERS</h2>
            <h4 style="margin-top:10px;margin-bottom:10px;font-family:sans-serif;font-weight:lighter">Must-Haves From Halston, BCBGMAXAZRIA, Iro & More</h4>
            <a href="#"><button id="btn">SHOP JUMPSUITS</button></a>
        </div>
        <div id="acces">
            <img src="https://i0.wp.com/www.usmagazine.com/wp-content/uploads/2021/04/Woman-Wearing-Statement-Necklace-Stock-Photo.jpg?crop=0px%2C0px%2C2000px%2C1131px&resize=1600%2C900&ssl=1&quality=86&strip=all" alt="" width="430px" height="330px">
            <h2 style="font-family: Tiemann,serif;width:90%;font-weight:lighter">UP TO 90% OFF WOMEN'S MUST-HAVE ACCESSORIES</h2>
            <h4 style="margin-top:10px;margin-bottom:10px;font-family:sans-serif;font-weight:lighter">Shop Wallets, Belts, Hats, Sunglasses & More</h4>
            <a href="#"><button id="btn">SHOP WOMEN'S ACCESSORIES</button></a>
        </div>
        
    </div>
</div>
<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>ABOUT US</h4>
                <ul>
                    <li><a href="https://www.bluefly.com/pages/contact-us">Contact Us</a></li>
                    <li><a href="https://www.bluefly.com/pages/faq">Frequently Asked Questions</a></li>
                    <li><a href="https://www.bluefly.com/pages/returns">Shipping & Returns</a></li>
                    <li><a href="https://www.bluefly.com/pages/pre-owned-condition-guide">Pre-Owned Guide</a></li>
                </ul>
            </div>
            <div class="footer-col">
                
                <ul>
                    <li><a href="https://www.bluefly.com/pages/partner-with-bluefly">Sell on Bluefly</a></li>
                    <li><a href="https://www.bluefly.com/policies/privacy-policy">Privacy Policy</a></li>
                    <li><a href="https://www.bluefly.com/policies/terms-of-service">Terms & Conditions
                    </a></li>
                    <li><a href="https://www.bluefly.com/pages/ccpa-opt-out">Do not sell my personal information</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>SIGN UP AND SAVE</h4>
                <p>Subscribe to get exclusive offers on designer brands</p>
                <input type="email" placeholder="Enter your email">
                <div class="btn-sub">
                    <button>Subscribe</button>
                </div>
               
                <div class="social-links">
                    <a href="https://www.instagram.com/bluefly/"><i id="insta" style="width:30px" class="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/Bluefly/"><i id="fb" class="fab fa-facebook-f"></i></a>
                    
                </div>
            </div>
        </div>
        <div class="footer-bluefly">
            <a href="./home.html">  <img src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Untitled_2_.png_5_x104@2x.png?v=1620852820" alt=""> </a>
        </div>
        <p class="copyright">© 2022 Bluefly 1998-2020 BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
    </div>
</footer>`
}

export {navbar,footer}




