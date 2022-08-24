let slide=document.getElementById('slide');
let headline=['Welcome To Bluefly:Luxury Brands At Discounted Prices','Free Shiping on Order Over $99'];
let count=0;
let h3=document.createElement('h3')
setInterval(() => {
   if(count==headline.length){
    count=0;
   }
h3.innerText=headline[count];
slide.append(h3);
count++;
}, 2000);
let Products=[
    {
      "id": "1",
      "Category": "cloth",
      "gender":"Women",
      "title": "WOMENS EMBELLISHED TRUMPET EVENING DRESS",
      "description": ["Manufacturer: Aidan Mattox","Style Type: Sheath","Sleeve Length: Spaghetti Strap"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/eK7sZ5IVyl7NzVWHQJH3sYvsC4YX3Eq7-25_e16f1bc4-bb08-446d-8d26-a07b78c1523a_360x.jpg?v=1660095289",
      "price": 110.99,
      "strike_off": 150.00
    },
    {
      "id": "17",
      "Category": "cloth",
      "gender":"Men",
      "title": "MONCLER LAPPE VEST",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010391566_RLLZ_1_360x.jpg?v=1658861803",
      "price": 899.99,
      "strike_off": 1089.00
    },
    {
      "id": "18",
      "Category": "cloth",
      "gender":"Men",
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
      "title": "JACK JONES MEN'S SHIRT IN BLUE",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/79708321_360x.jpg?v=1658003837",
      "price": 99.99,
      "strike_off": 110.00
    },
    
    {
      "id": "19",
      "Category": "cloth",
      "gender":"Men",
      "title": "COTTON HOODIE WITH EMBROIDERED LOGO PATCH",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1439107_1800x1800.jpg?v=1633858308",
      "price": 763.99,
      "strike_off": 906.00
    },
    {
      "id": "4",
      "Category": "cloth",
      "gender":"Women",
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
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1511234010_RLLZ_1_70caef00-a63d-49c1-8e3c-c5f2c2350482_360x.jpg?v=1660947124",
      "price": 59.99,
      "strike_off": 108.00
    },
    {
      "id": "46",
      "Category": "cloth",
      "gender":"Kid",
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
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411331318_RLLZ_1_1d955553-1abf-4117-a588-af0b94d20385_360x.jpg?v=1660848419",
      "price": 56.99,
      "strike_off": 149.00
    },
    {
      "id": "7",
      "Category": "cloth",
      "gender":"Women",
      "title": "NATALIA WOMENS V-NECK PLEATED EVENING DRESS",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/El1Hucf1bOotxTSDnxO06aKQJtaVbjmV-25_be76b768-d5b5-4c67-999b-b1beb79fc4fe_360x.jpg?v=1660982995",
      "price": 140.99,
      "strike_off": 349.00
    },
    {
      "id": "14",
      "Category": "cloth",
      "gender":"Men",
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
      "title": "ELIE TAHARI METALLIC BLAZER",
      "description": ["Manufacturer: JS Collections","Closure: Hidden Back Zipper","Material: 100% Polyester","Approximately 45In From Shoulder To Hem"],
      "image": "https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411382701_RLLZ_1_360x.jpg?v=1660404247",
      "price": 102.99,
      "strike_off": 395.00
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

 function main(){
    let data= Products.filter((ele)=>{      
       return ele.Category==='cloth'
         })
         append(data);
        }
main();
function append(data){
    let cloth=document.getElementById('clothing')
    data.forEach(el => {
        let div=document.createElement('div');
        let img=document.createElement('img');
          img.src=el.image;
        let head=document.createElement('h3');
           head.innerText=el.title  
        let price=document.createElement('h3');
           price.innerText=el.price;
          div.append(img,head,price)
          cloth.append(div)
    });

}















