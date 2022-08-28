let slide=document.getElementById('slide');
let headline=['Welcome To Bluefly:Luxury Brands At Discounted Prices','Free Shiping on Order Over $99'];
let count=0;
let h3=document.createElement('h3')
h3.setAttribute("id","slide_text")
setInterval(() => {
   if(count==headline.length){
    count=0;
   }
h3.innerText=headline[count];
slide.append(h3);
count++;
}, 9000);
let Products=[
    {
      "id": "1",
      "Category": "cloth",
      "type":"Dress",
      "gender":"Women",
      "title": "WOMENS EMBELLISHED TRUMPET EVENING DRESS",
      "description": ["Manufacturer: Aidan Mattox","Style Type: Sheath","Sleeve Length: Spaghetti Strap"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/zKIWJxPFDEK6lrmq1KVS55A2lubomKYi-25_large.jpg?v=1661330356",
      "price": 110.99,
      "strike_off": 150.00
    },
    {
      "id": "17",
      "Category": "cloth",
      "type":"Jacket",
      "gender":"Men",
      "title": "MONCLER LAPPE VEST",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Zukl2BZ7G1YRAg2H0zHGL9dPdHG1MJTc-25_large.jpg?v=1661410651",
      "price": 899.99,
      "strike_off": 1089.00
    },
    {
      "id": "18",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",    
      "title": "IMPERIAL MEN'S SHIRT IN BLACK",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/98274186_360x.jpg?v=1657846344",
      "price": 150.99,
      "strike_off": 389.00
    },
    {
      "id": "2",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "WOMENS LACE FLORAL EVENING DRESS",
      "description": ["Manufacturer: BCBGMAXAZRIA","Material: 100% Polyester","Fabric Type: Polyester"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/eJGeOZ65cTRusiZtduE3OuzXbLRp7aVx-25_360x.jpg?v=1661163613",
      "price": 155.99,
      "strike_off": 468.00
    },
    {
      "id": "49",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "BUSY BEES DIANA BUTTON FRONT SUNDRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511236566_RLLZ_1_360x.jpg?v=1661224639",
      "price": 79.99,
      "strike_off": 109.00
    },
    {
      "id": "50",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "OFF-WHITE HOODIE DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511181835_RLLZ_1_360x.jpg?v=1657310947",
      "price": 179.99,
      "strike_off": 199.00
    },
    {
      "id": "3",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "VIOLET WOMENS METALLIC PLEATED EVENING DRESS",
      "description": ["Manufacturer: BCBGMAXAZRIA","Closure: Hidden Back Zipper","Material: 100% Polyester"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/xPGzJ9v1zb9XhIKiLVHKBakUftQLRmNd-25_360x.jpg?v=1660839609",
      "price": 165.99,
      "strike_off": 448.00
    },
    {
      "id": "16",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "MULTICOLOR SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2034907_360x.jpg?v=1635773383",
      "price": 99.99,
      "strike_off": 110.00
    },
    
    {
      "id": "19",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "BURBERRY T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010274815_RLLZ_1_360x.jpg?v=1657825705",
      "price": 763.99,
      "strike_off": 906.00
    },
    {
      "id": "4",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "THEORY PEPLUM JACKET",
      "description": ["About The Brand: Expertly Tailored. Effortless Style.","Peplum Jacket In Black With Textured Design, Zippered Cuffs And Peplum Hem","Model Is 5'9 And Is Wearing A Size 4. Measurements May Vary Slightly By Size."],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/xPGzJ9v1zb9XhIKiLVHKBakUftQLRmNd-25_360x.jpg?v=1660839609",
      "price": 165.99,
      "strike_off": 448.00
    },
    {
      "id": "5",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "WOMENS FLORAL EMBROIDERED ILLUSION EVENING DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/TDsIkPgdKkyzk9tobtXQxt512lGJmoHf-25_360x.jpg?v=1660867652",
      "price": 79.99,
      "strike_off": 348.00
    },
    {
      "id": "47",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "IMOGA MESH DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511116425_RLLZ_1_360x.jpg?v=1660481024",
      "price": 59.99,
      "strike_off": 99.00
    },
    {
      "id": "48",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "IMOGA MESH DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511116425_RLLZ_1_360x.jpg?v=1660481024",
      "price": 59.99,
      "strike_off": 99.00
    },
    {
      "id": "10",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "MENS COTTON CREWNECK T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/jSibiqPaBJXVvCpTwUMT1royLERAN39y-25_360x.jpg?v=1661076146",
      "price": 29.99,
      "strike_off": 89.00
    },
    {
      "id": "11",
      "Category": "cloth",
      "gender":"Men",
      "type":"Suit",
      "title": "ENGLISH LAUNDRY 2PC SLIM FIT SUIT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1011346133_RLLZ_1_360x.jpg?v=1660911177",
      "price": 89.99,
      "strike_off": 389.00
    },
    {
      "id": "45",
      "Category": "cloth",
      "gender":"Kid",
      "title": "FLOWERS BY ZOE DRESS",
      "type":"Dress",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1875369_large.jpg?v=1637943586",
      "price": 59.99,
      "strike_off": 108.00
    },
    {
      "id": "46",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "FLOWERS BY ZOE CHIFFON DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511234014_RLLZ_1_360x.jpg?v=1660432091",
      "price": 98.99,
      "strike_off": 159.00
    }, 
    {
      "id": "6",
      "Category": "cloth",
      "gender":"Women",
      "title": "GRACIA BELTED SHIRTDRESS",
      "type":"Dress",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411331318_RLLZ_1_1d955553-1abf-4117-a588-af0b94d20385_360x.jpg?v=1660848419",
      "price": 56.99,
      "strike_off": 149.00
    },
    {
      "id": "7",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "NATALIA WOMENS V-NECK PLEATED EVENING DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1t3LuEwerD0NPeHjt5oHkSETD0BXQR8T-25_large.jpg?v=1661528430",
      "price": 140.99,
      "strike_off": 349.00
    },
    {
      "id": "14",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "TRUTH GRAPHIC T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010176504_RLLZ_1_360x.jpg?v=1660858337",
      "price": 38.99,
      "strike_off": 56.00
    },
    {
      "id": "15",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "REAL CASHMERE BROWN V-NECK CASHMERE BLEND MENS SWEATER",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/83911-83913_a_360x.jpg?v=1657179332",
      "price": 59.99,
      "strike_off": 199.00
    },
    {
      "id": "43",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "CATAMINI DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511916647_RLLZ_1_360x.jpg?v=1660515841",
      "price": 64.99,
      "strike_off": 85.00
    },
    {
      "id": "44",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "FLOWERS BY ZOE CHIFFON DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511234014_RLLZ_1_360x.jpg?v=1660432091",
      "price": 79.99,
      "strike_off": 108.00
    },
    {
      "id": "8",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "JUDE CONNALLY LYLA DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411912460_RLLZ_1_360x.jpg?v=1660862988",
      "price": 132.99,
      "strike_off": 249.00
    },
    {
      "id": "9",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "STELLAH MINI DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411273866_RLLZ_1_360x.jpg?v=1661179332",
      "price": 79.99,
      "strike_off": 253.00
    },
    
    {
      "id": "12",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "NOAH MENS TWILL KHAKI CHINO PANTS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/z7jno4rI8ZFGAnjxFFnh6mdiwPTeQSac-25_360x.jpg?v=1661286212",
      "price": 75.99,
      "strike_off": 89.00
    },
    {
      "id": "13",
      "Category": "cloth",
      "gender":"Men",
      "type":"Jacket",
      "title": "COLE HAAN QUILTED DOWN JACKET",
      "description": ["Design Details: Quilted Design, Wrap Around Hooded Back With Faux Fur Lining, Two Front Flap Pockets, Two Slip Pockets, Three Interior Pockets","Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010964177_RLLZ_1_360x.jpg?v=1661252680",
      "price": 84.99,
      "strike_off": 150.00
    },  
    {
      "id": "43",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "CATAMINI DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511916647_RLLZ_1_360x.jpg?v=1660515841",
      "price": 64.99,
      "strike_off": 85.00
    },
    {
      "id": "44",
      "Category": "cloth",
      "gender":"Kid",
      "type":"Dress",
      "title": "FLOWERS BY ZOE CHIFFON DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511234014_RLLZ_1_360x.jpg?v=1660432091",
      "price": 79.99,
      "strike_off": 108.00
    },
    {
      "id": "20",
      "Category": "cloth",
      "gender":"Women",
      "type":"Dress",
      "title": "ELIE TAHARI METALLIC BLAZER",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411382701_RLLZ_1_360x.jpg?v=1660404247",
      "price": 102.99,
      "strike_off": 395.00
    },
    {
      "id": "51",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "GUESS RED COTTON LOGO PRINT MEN CASUAL TOP PERFORATED T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/IMG_4276-scaled_2d65b617-ce97-4a9f-9d05-84f502936a3b_360x.jpg?v=1657584997",
      "price": 72.99,
      "strike_off": 105.00
    },
    {
      "id": "52",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "RON TOMSON T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010176504_RLLZ_2_large.jpg?v=1661663449",
      "price": 17.99,
      "strike_off": 52.00
    },
    {
      "id": "53",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "DOLCE & GABBANA DG EMBROIDERY T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1211274442_RLLZ_2_large.jpg?v=1661494231",
      "price": 317.99,
      "strike_off": 452.00
    },
    {
      "id": "54",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "ZADIG & VOLTAIRE HECTOR HC ADDRESS T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010465631_RLLZ_1_360x.jpg?v=1661398218",
      "price": 57.99,
      "strike_off": 92.00
    },
    {
      "id": "55",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "ORIGINAL PAPERBACKS SOUTH SEA SPIRAL MINERAL TIE-DYE T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010096210_RLLZ_1_360x.jpg?v=1660206569",
      "price": 27.99,
      "strike_off": 75.00
    },
    {
      "id": "56",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "CLUB ROOM MENS CHRISTMAS BULLDOG GRAPHIC HOLIDAY T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/YPIqzJtGNhqw6ACbmJ5kxv0eAOhiBl8d-25_360x.jpg?v=1641736764",
      "price": 27.99,
      "strike_off": 45.00
    },
    {
      "id": "57",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "NWT MAHARISHI BLACK ORGANIC COTTON GOLDEN LONG SLEEVE T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/5e073fbb-9a9c-445d-a508-6431092e7093_360x.jpg?v=1607744937",
      "price": 127.99,
      "strike_off": 155.00
    },
    {
      "id": "58",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "VLONE X POP SMOKE BLACK COTTON 'HAWK EM' SHORT SLEEVE T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/d1caf2e0-1bed-4609-9d7a-a3e7397e0776_360x.jpg?v=1612510994",
      "price": 117.99,
      "strike_off": 145.00
    },
    {
      "id": "59",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "MARCELO BURLON BLACK MULTICOLOR 'FLUO GEOM WINGS' T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/92089fbb-d65a-47c8-9551-ed7fdb9baa15_360x.jpg?v=1612567241",
      "price": 107.99,
      "strike_off": 135.00
    },
    {
      "id": "60",
      "Category": "cloth",
      "gender":"Men",
      "type":"T-shirt",
      "title": "CHINATOWN MARKET PINK COTTON 'DOG' T-SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1754619_360x.jpg?v=1661373437",
      "price": 47.99,
      "strike_off": 85.00
    },
    {
      "id": "61",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "MENS MID-RISE FIT 3 CLASSIC JEANS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/6tEUmTHd28ruIO8IvIDfGPytS0kCi9AL-25_360x.jpg?v=1661136807",
      "price": 67.99,
      "strike_off": 85.00
    },
    {
      "id": "62",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "G-STAR HIGA STRETCH DENIM 3D COBLER PROCESSED TOBOG 3D RELAXED TAPERED JEAN",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010899990_RLLZ_1_f484b5da-1f33-45ff-a7e9-d191887c97f3_360x.jpg?v=1661366272",
      "price": 87.99,
      "strike_off": 105.00
    },
    {
      "id": "63",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "FIT 3 MENS MID-RISE STRETCH CLASSIC JEANS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Kd6DeWA6ehC7raulUp48jUBuoA3dAQqP-25_c309473d-23c9-4fce-bcdc-2dc1a4f5d1aa_360x.jpg?v=1661153455",
      "price": 67.99,
      "strike_off": 95.00
    },
    {
      "id": "64",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "7 FOR ALL MANKIND AUSTYN SUNDANCE RELAXED STRAIGHT LEG JEAN",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010070723_RLLZ_1_360x.jpg?v=1660964041",
      "price": 97.99,
      "strike_off": 125.00
    },
    {
      "id": "65",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "JOE'S JEANS THE CLASSIC GAVEN STRAIGHT JEAN",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010251465_RLLZ_1_360x.jpg?v=1661487035",
      "price": 79.99,
      "strike_off": 95.00
    },
    {
      "id": "66",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "JOE'S JEANS THE CLASSIC DIXUS STRAIGHT JEAN",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/GChOQSGxh7M8puLWqQ23ct0LfPOJVAg1-25_c6dce0bc-c4fb-40b6-8f6a-03edb0e64545_large.jpg?v=1661523354",
      "price": 99.99,
      "strike_off": 135.00
    },
    {
      "id": "67",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "JOE'S JEANS THE CLASSIC GAVEN STRAIGHT JEAN",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010251465_RLLZ_1_360x.jpg?v=1661487035",
      "price": 79.99,
      "strike_off": 95.00
    },
    {
      "id": "68",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "FIT 3 MENS MID-RISE STRETCH CLASSIC JEANS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Kd6DeWA6ehC7raulUp48jUBuoA3dAQqP-25_c309473d-23c9-4fce-bcdc-2dc1a4f5d1aa_360x.jpg?v=1661153455",
      "price": 69.99,
      "strike_off": 95.00
    },
    {
      "id": "68",
      "Category": "cloth",
      "gender":"Men",
      "type":"Pant",
      "title": "OFF-WHITE C/O VIRGIL ABLOH WHITE DIAG RELAXED SKATE JEANS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1924531_360x.jpg?v=1656894380",
      "price": 569.99,
      "strike_off": 695.00
    },
    {
      "id": "69",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "J.MCLAUGHLIN CARNEGIE SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010051100_RLLZ_1_360x.jpg?v=1656152645",
      "price": 56.99,
      "strike_off": 95.00
    },
    {
      "id": "70",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "J.MCLAUGHLIN CARNEGIE SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010051116_RLLZ_1_360x.jpg?v=1656035772",
      "price": 52.99,
      "strike_off": 95.00
    },
    {
      "id": "71",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "OVERSIZE SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1445323_1800x1800.jpg?v=1632870672",
      "price": 156.99,
      "strike_off": 195.00
    },
    {
      "id": "72",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "HICKEY FREEMAN TAILORED FIT WOVEN SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010048499_RLLZ_1_360x.jpg?v=1650577522",
      "price": 75.99,
      "strike_off": 85.00
    },
    {
      "id": "73",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "TARTAN FLANNEL SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1618059_1800x1800.jpg?v=1635184769",
      "price": 65.99,
      "strike_off": 89.00
    },
    {
      "id": "74",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "NAVY IP CHECK SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1933574_1800x1800.jpg?v=1635441319",
      "price": 265.99,
      "strike_off": 289.00
    },
    {
      "id": "75",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "CHECK SHIRT",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1614264_1800x1800.jpg?v=1635422831",
      "price": 165.99,
      "strike_off": 189.00
    },
    {
      "id": "76",
      "Category": "cloth",
      "gender":"Men",
      "type":"Shirt",
      "title": "WHITE SHIRT WITH MAXI VERTICAL LOGO",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1624458_5636ccb8-d554-4774-b202-9a517c1ad12c_1800x1800.jpg?v=1659344809",
      "price": 245.99,
      "strike_off": 289.00
    },
    {
      "id": "21",
      "Category": "shoes",
      "gender":"Others",
      "title": "BLACK SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2232557_1800x1800.jpg?v=1649100955",
      "price": 352.99,
      "strike_off": 795.00
    },
    {
      "id": "22",
      "Category": "shoes",
      "gender":"Others",
      "title": "RICK OWENS GREY SUEDE SNEAKERS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1878980_360x.jpg?v=1636579467",
      "price": 601.99,
      "strike_off": 906.00
    },
    {
      "id": "23",
      "Category": "shoes",
      "gender":"Others",
      "title": "GUCCI TIGER LOAFER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312396491_RLLZ_1_360x.jpg?v=1660681673",
      "price": 506.99,
      "strike_off": 770.00
    },
    {
      "id": "24",
      "Category": "shoes",
      "gender":"Others",
      "title": "GUCCI JORDAAN SATIN & LEATHER LOAFER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312396493_RLLZ_1_360x.jpg?v=1660681548",
      "price": 550.99,
      "strike_off": 799.00
    },
    {
      "id": "25",
      "Category": "shoes",
      "gender":"Others",
      "title": "CHRISTIAN LOUBOUTIN LOU SUEDE SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312261737_RLLZ_1_360x.jpg?v=1659629898",
      "price": 799.99,
      "strike_off": 999.00
    },
    {
      "id": "26",
      "Category": "shoes",
      "gender":"Others",
      "title": "BALENCIAGA BLACK LEATHER LACE UP COMBAT BOOTS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/cefad834-c63a-4559-afcd-467821b34ee3_360x.jpg?v=1614095762",
      "price": 593.99,
      "strike_off": 799.00
    },
    {
      "id": "27",
      "Category": "shoes",
      "gender":"Others",
      "title": "CHRISTIAN LOUBOUTIN LOU SUEDE SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312261737_RLLZ_1_360x.jpg?v=1659629898",
      "price": 799.99,
      "strike_off": 999.00
    },
    {
      "id": "28",
      "Category": "shoes",
      "gender":"Others",
      "title": "SALVATORE FERRAGAMO PATENT & SUEDE LOAFER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312402405_RLLZ_1_360x.jpg?v=1660576497",
      "price": 549.99,
      "strike_off": 899.00
    },
    {
      "id": "29",
      "Category": "shoes",
      "gender":"Others",
      "title": "CHRISTIAN LOUBOUTIN LOU SUEDE SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312261737_RLLZ_1_360x.jpg?v=1659629898",
      "price": 799.99,
      "strike_off": 999.00
    },
    {
      "id": "30",
      "Category": "shoes",
      "gender":"Others",
      "title": "CLUB C COAST MENS TENNIS LIFESTYLE FASHION SNEAKERS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/G93tyTprQDThlEJRPckrwKCsXsjlbk82-25_be76ebb2-a111-4cd4-96cb-b0ba2d6d255b_360x.jpg?v=1661158720",
      "price": 60.99,
      "strike_off": 89.00
    },
    {
      "id": "31",
      "Category": "shoes",
      "gender":"Others",
      "title": "HOVR INFINITE 3 MENS PERFORMANCE RUNNING SMART SHOES",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/CxYl8EhVhZpnzfRgrDYKxDMF7Hb4nl5R-25_360x.jpg?v=1660732738",
      "price": 80.99,
      "strike_off": 189.00
    },
    {
      "id": "32",
      "Category": "shoes",
      "gender":"Others",
      "title": "KARL LAGERFELD SUEDE & MESH SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312371343_RLLZ_1_360x.jpg?v=1660948189",
      "price": 70.99,
      "strike_off": 159.00
    },
    {
      "id": "33",
      "Category": "shoes",
      "gender":"Others",
      "title": "DONALD PLINER SOFT TUMBLE LEATHER LOAFER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312100563_RLLZ_1_360x.jpg?v=1660959107",
      "price": 118.99,
      "strike_off": 256.00
    },
    {
      "id": "34",
      "Category": "shoes",
      "gender":"Others",
      "title": "ALBORGPLUS MENS LACE UP WINTER ANKLE BOOTS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/O3kZANiQg6AyAXRzhAocQpOTtv3VaQX2-25_360x.jpg?v=1661045895",
      "price": 68.99,
      "strike_off": 156.00
    },
    {
      "id": "35",
      "Category": "shoes",
      "gender":"Others",
      "title": "HOVR SONIC 3 MENS PERFORMANCE BLUETOOTH SMART SHOES",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/O3kZANiQg6AyAXRzhAocQpOTtv3VaQX2-25_360x.jpg?v=1661045895",
      "price": 68.99,
      "strike_off": 156.00
    },
    {
      "id": "36",
      "Category": "shoes",
      "gender":"Others",
      "title": "BRODHI MENS CANVAS LACELESS CASUAL AND FASHION SNEAKERS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/ukVB0iYl6lQLl95wg5mRupLKd6aQbdjX-25_360x.jpg?v=1660982608",
      "price": 51.99,
      "strike_off": 99.00
    },
    {
      "id": "37",
      "Category": "shoes",
      "gender":"Others",
      "title": "CHRISTIAN LOUBOUTIN LOUIS SUEDE & LEATHER SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312391921_RLLZ_1_360x.jpg?v=1659461685",
      "price": 851.99,
      "strike_off": 999.00
    },
    {
      "id": "38",
      "Category": "shoes",
      "gender":"Others",
      "title": "GUCCI BROWN GG EMBROIDERED SKULL LOAFERS",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1577710_360x.jpg?v=1650022470",
      "price": 551.99,
      "strike_off": 799.00
    },
    {
      "id": "39",
      "Category": "shoes",
      "gender":"Others",
      "title": "BURBERRY VINTAGE CHECK CANVAS SNEAKER",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312357470_RLLZ_1_360x.jpg?v=1661201670",
      "price": 592.99,
      "strike_off": 899.00
    },
    {
      "id": "40",
      "Category": "shoes",
      "gender":"Others",
      "title": "BALENCIAGA MEN'S TRIPLE S ALL OVER LOGO SNEAKERS BLACK",
      "description": ["Men's Sneakers","Black Leather Heel","White Rubber Midsole","Comes With Dust Bags"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/536737-w2fa1-1090_201_360x.jpg?v=1659725359",
      "price": 892.99,
      "strike_off": 1099.00
    },
    {
      "id": "41",
      "Category": "cloth",
      "gender":"Kid",
      "title": "LA FAUTE A VOLTAIRE ALIZEE DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511252836_RLLZ_1_23f01f52-805b-45dc-bf62-49b2a5e52fb2_360x.jpg?v=1661168744",
      "price": 65.99,
      "strike_off": 95.00
    },
    {
      "id": "42",
      "Category": "cloth",
      "gender":"Kid",
      "title": "NELLYSTELLA PEACH SILK-BLEND DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1543133694_RLLZ_1_260ea824-d386-4972-95b3-ec56f52ba730_360x.jpg?v=1659584945",
      "price": 74.99,
      "strike_off": 85.00
    },
  ]
let head_line=document.getElementById('head_line');
 function main(){
    let data= Products.filter((ele)=>{      
       return ele.Category==='cloth'
         })
         append(data);
        }
main();
function append(data){
    let cloth=document.getElementById('clothing')
    cloth.innerHTML=null;
    data.forEach(el => {
        let div=document.createElement('div');
        div.addEventListener('click',()=>{
          clicked_prod(el)
        })
        let img=document.createElement('img');
          img.src=el.image;
        let head=document.createElement('h4');
           head.innerText=el.title  
           head.style.color='#40ace3'
        let price=document.createElement('h4');
           price.innerText='$'+Number(el.price)+"         ";
         let strile_price=document.createElement('del');
         strile_price.innerText=el.strike_off; 
         price.append(strile_price)
          div.append(img,head,price)
          cloth.append(div)
    });

}
function fiter_prod(){
let sort_val=document.getElementById("sort").value;
if(sort_val==='All'){
  head_line.innerText=(`${sort_val} Clothing`)
  return main()
}
let filter_data=Products.filter((ele)=>{
  return ele.gender===sort_val
})
head_line.innerText=(`${sort_val} Clothing`)
append(filter_data);
}

function fiter_prod_price(){
  let sort_val=document.getElementById("sort_price").value;
  if(sort_val==='All'){
    head_line.innerText=(`All Clothing`)
    return main()
  }
  let filter_data=Products.filter((ele)=>{
    return ele.price<=sort_val && ele.Category==='cloth'
  })
  head_line.innerText=(`All Clothing`)
  append(filter_data);
}

function clicked_prod(el){
  let arr=[];
  arr.push(el);
  localStorage.setItem("add",JSON.stringify(arr));
  window.location.href="./cart.html"
}

function fiter_prod_type(){
  let sort_val=document.getElementById("sort_type").value;
  if(sort_val==='All'){
    head_line.innerText=(`Mens ${sort_val}`)
    return main()
  }
  let filter_data=Products.filter((ele)=>{
    return ele.type==sort_val
  })
  head_line.innerText=(`Mens ${sort_val}`)
  append(filter_data);
}













