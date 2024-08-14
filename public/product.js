const products = [
    {
      productName: "Men's Classic T-Shirt",
      productImage: "https://example.com/images/mens-classic-tshirt.jpg",
      description: "A comfortable and stylish t-shirt made from 100% cotton.",
      price: 25.99,
      category: "Men's Clothing",
      ratings: 4.5,
      brandName: "Brand A",
      creationDateTime: "2024-08-14T09:30:00Z"
    },
    {
      productName: "Women's Denim Jacket",
      productImage: "https://example.com/images/womens-denim-jacket.jpg",
      description: "A versatile denim jacket that pairs well with any outfit.",
      price: 59.99,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand B",
      creationDateTime: "2024-08-14T10:00:00Z"
    },
    {
      productName: "Men's Leather Boots",
      productImage: "https://example.com/images/mens-leather-boots.jpg",
      description: "Durable leather boots perfect for outdoor activities.",
      price: 89.99,
      category: "Men's Shoes",
      ratings: 4.6,
      brandName: "Brand C",
      creationDateTime: "2024-08-14T10:15:00Z"
    },
    {
      productName: "Women's Floral Dress",
      productImage: "https://example.com/images/womens-floral-dress.jpg",
      description: "A beautiful floral dress for casual or formal occasions.",
      price: 45.99,
      category: "Women's Clothing",
      ratings: 4.8,
      brandName: "Brand D",
      creationDateTime: "2024-08-14T10:30:00Z"
    },
    {
      productName: "Men's Athletic Shorts",
      productImage: "https://example.com/images/mens-athletic-shorts.jpg",
      description: "Lightweight and breathable shorts for workouts.",
      price: 29.99,
      category: "Men's Clothing",
      ratings: 4.4,
      brandName: "Brand E",
      creationDateTime: "2024-08-14T11:00:00Z"
    },
    {
      productName: "Women's Yoga Pants",
      productImage: "https://example.com/images/womens-yoga-pants.jpg",
      description: "Stretchy and comfortable yoga pants for daily wear.",
      price: 39.99,
      category: "Women's Clothing",
      ratings: 4.9,
      brandName: "Brand F",
      creationDateTime: "2024-08-14T11:30:00Z"
    },
    {
      productName: "Men's Wool Sweater",
      productImage: "https://example.com/images/mens-wool-sweater.jpg",
      description: "A warm and cozy sweater for cold weather.",
      price: 79.99,
      category: "Men's Clothing",
      ratings: 4.7,
      brandName: "Brand G",
      creationDateTime: "2024-08-14T12:00:00Z"
    },
    {
      productName: "Women's Leather Handbag",
      productImage: "https://example.com/images/womens-leather-handbag.jpg",
      description: "A stylish leather handbag with multiple compartments.",
      price: 120.00,
      category: "Women's Accessories",
      ratings: 4.8,
      brandName: "Brand H",
      creationDateTime: "2024-08-14T12:30:00Z"
    },
    {
      productName: "Men's Slim Fit Jeans",
      productImage: "https://example.com/images/mens-slim-fit-jeans.jpg",
      description: "Stylish slim-fit jeans with a modern cut.",
      price: 65.99,
      category: "Men's Clothing",
      ratings: 4.6,
      brandName: "Brand I",
      creationDateTime: "2024-08-14T13:00:00Z"
    },
    {
      productName: "Women's Satin Blouse",
      productImage: "https://example.com/images/womens-satin-blouse.jpg",
      description: "Elegant satin blouse for office or evening wear.",
      price: 49.99,
      category: "Women's Clothing",
      ratings: 4.5,
      brandName: "Brand J",
      creationDateTime: "2024-08-14T13:30:00Z"
    },
    {
      productName: "Men's Casual Sneakers",
      productImage: "https://example.com/images/mens-casual-sneakers.jpg",
      description: "Comfortable and stylish sneakers for everyday wear.",
      price: 55.00,
      category: "Men's Shoes",
      ratings: 4.3,
      brandName: "Brand K",
      creationDateTime: "2024-08-14T14:00:00Z"
    },
    {
      productName: "Women's High Heels",
      productImage: "https://example.com/images/womens-high-heels.jpg",
      description: "Chic high heels perfect for a night out.",
      price: 75.99,
      category: "Women's Shoes",
      ratings: 4.7,
      brandName: "Brand L",
      creationDateTime: "2024-08-14T14:30:00Z"
    },
    {
      productName: "Men's Trench Coat",
      productImage: "https://example.com/images/mens-trench-coat.jpg",
      description: "Classic trench coat for a sharp, polished look.",
      price: 140.00,
      category: "Men's Outerwear",
      ratings: 4.8,
      brandName: "Brand M",
      creationDateTime: "2024-08-14T15:00:00Z"
    },
    {
      productName: "Women's Cashmere Sweater",
      productImage: "https://example.com/images/womens-cashmere-sweater.jpg",
      description: "Luxurious cashmere sweater for ultimate comfort.",
      price: 130.00,
      category: "Women's Clothing",
      ratings: 4.9,
      brandName: "Brand N",
      creationDateTime: "2024-08-14T15:30:00Z"
    },
    {
      productName: "Men's Formal Shirt",
      productImage: "https://example.com/images/mens-formal-shirt.jpg",
      description: "Crisp formal shirt for business or special occasions.",
      price: 45.00,
      category: "Men's Clothing",
      ratings: 4.4,
      brandName: "Brand O",
      creationDateTime: "2024-08-14T16:00:00Z"
    },
    {
      productName: "Women's Pleated Skirt",
      productImage: "https://example.com/images/womens-pleated-skirt.jpg",
      description: "A trendy pleated skirt that can be dressed up or down.",
      price: 55.00,
      category: "Women's Clothing",
      ratings: 4.6,
      brandName: "Brand P",
      creationDateTime: "2024-08-14T16:30:00Z"
    },
    {
      productName: "Men's Denim Jacket",
      productImage: "https://example.com/images/mens-denim-jacket.jpg",
      description: "A rugged denim jacket with a vintage feel.",
      price: 79.99,
      category: "Men's Clothing",
      ratings: 4.7,
      brandName: "Brand Q",
      creationDateTime: "2024-08-14T17:00:00Z"
    },
    {
      productName: "Women's Ankle Boots",
      productImage: "https://example.com/images/womens-ankle-boots.jpg",
      description: "Stylish ankle boots with a comfortable fit.",
      price: 85.99,
      category: "Women's Shoes",
      ratings: 4.8,
      brandName: "Brand R",
      creationDateTime: "2024-08-14T17:30:00Z"
    },
    {
      productName: "Men's Cargo Pants",
      productImage: "https://example.com/images/mens-cargo-pants.jpg",
      description: "Durable cargo pants with plenty of storage options.",
      price: 65.00,
      category: "Men's Clothing",
      ratings: 4.5,
      brandName: "Brand S",
      creationDateTime: "2024-08-14T18:00:00Z"
    },
    {
      productName: "Women's Knit Cardigan",
      productImage: "https://example.com/images/womens-knit-cardigan.jpg",
      description: "Cozy knit cardigan for layering on chilly days.",
      price: 60.00,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand T",
      creationDateTime: "2024-08-14T18:30:00Z"
    },
    {
      productName: "Men's Running Shoes",
      productImage: "https://example.com/images/mens-running-shoes.jpg",
      description: "Lightweight running shoes with excellent grip.",
      price: 95.00,
      category: "Men's Shoes",
      ratings: 4.6,
      brandName: "Brand U",
      creationDateTime: "2024-08-14T19:00:00Z"
    },
    {
      productName: "Women's Summer Sandals",
      productImage: "https://example.com/images/womens-summer-sandals.jpg",
      description: "Comfortable and stylish sandals for summer.",
      price: 35.99,
      category: "Women's Shoes",
      ratings: 4.5,
      brandName: "Brand V",
      creationDateTime: "2024-08-14T19:30:00Z"
    },
    {
      productName: "Men's Hoodie",
      productImage: "https://example.com/images/mens-hoodie.jpg",
      description: "Casual hoodie with a soft, comfortable feel.",
      price: 40.00,
      category: "Men's Clothing",
      ratings: 4.4,
      brandName: "Brand W",
      creationDateTime: "2024-08-14T20:00:00Z"
    },
    {
      productName: "Women's Midi Dress",
      productImage: "https://example.com/images/womens-midi-dress.jpg",
      description: "Elegant midi dress for a sophisticated look.",
      price: 70.00,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand X",
      creationDateTime: "2024-08-14T20:30:00Z"
    },
    {
      productName: "Men's Beanie",
      productImage: "https://example.com/images/mens-beanie.jpg",
      description: "Warm beanie for cold winter days.",
      price: 20.00,
      category: "Men's Accessories",
      ratings: 4.5,
      brandName: "Brand Y",
      creationDateTime: "2024-08-14T21:00:00Z"
    },
    {
      productName: "Women's Silk Scarf",
      productImage: "https://example.com/images/womens-silk-scarf.jpg",
      description: "Luxurious silk scarf to add a touch of elegance.",
      price: 45.00,
      category: "Women's Accessories",
      ratings: 4.8,
      brandName: "Brand Z",
      creationDateTime: "2024-08-14T21:30:00Z"
    },
    {
      productName: "Men's Leather Belt",
      productImage: "https://example.com/images/mens-leather-belt.jpg",
      description: "High-quality leather belt with a classic buckle.",
      price: 35.00,
      category: "Men's Accessories",
      ratings: 4.6,
      brandName: "Brand A1",
      creationDateTime: "2024-08-14T22:00:00Z"
    },
    {
      productName: "Women's Sports Bra",
      productImage: "https://example.com/images/womens-sports-bra.jpg",
      description: "Comfortable sports bra with excellent support.",
      price: 25.00,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand B1",
      creationDateTime: "2024-08-14T22:30:00Z"
    },
    {
      productName: "Men's Polo Shirt",
      productImage: "https://example.com/images/mens-polo-shirt.jpg",
      description: "Classic polo shirt for a smart-casual look.",
      price: 45.00,
      category: "Men's Clothing",
      ratings: 4.4,
      brandName: "Brand C1",
      creationDateTime: "2024-08-14T23:00:00Z"
    },
    {
      productName: "Women's Pencil Skirt",
      productImage: "https://example.com/images/womens-pencil-skirt.jpg",
      description: "Chic pencil skirt for a professional look.",
      price: 50.00,
      category: "Women's Clothing",
      ratings: 4.6,
      brandName: "Brand D1",
      creationDateTime: "2024-08-14T23:30:00Z"
    },
    {
      productName: "Men's Chinos",
      productImage: "https://example.com/images/mens-chinos.jpg",
      description: "Comfortable chinos with a modern fit.",
      price: 60.00,
      category: "Men's Clothing",
      ratings: 4.5,
      brandName: "Brand E1",
      creationDateTime: "2024-08-15T00:00:00Z"
    },
    {
      productName: "Women's Maxi Dress",
      productImage: "https://example.com/images/womens-maxi-dress.jpg",
      description: "Flowy maxi dress for a relaxed summer vibe.",
      price: 65.00,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand F1",
      creationDateTime: "2024-08-15T00:30:00Z"
    },
    {
      productName: "Men's Loafers",
      productImage: "https://example.com/images/mens-loafers.jpg",
      description: "Stylish loafers for both casual and formal occasions.",
      price: 85.00,
      category: "Men's Shoes",
      ratings: 4.6,
      brandName: "Brand G1",
      creationDateTime: "2024-08-15T01:00:00Z"
    },
    {
      productName: "Women's Ankle-Length Leggings",
      productImage: "https://example.com/images/womens-ankle-length-leggings.jpg",
      description: "Comfortable and stretchy leggings for everyday wear.",
      price: 35.00,
      category: "Women's Clothing",
      ratings: 4.8,
      brandName: "Brand H1",
      creationDateTime: "2024-08-15T01:30:00Z"
    },
    {
      productName: "Men's Puffer Jacket",
      productImage: "https://example.com/images/mens-puffer-jacket.jpg",
      description: "Warm puffer jacket with a lightweight design.",
      price: 110.00,
      category: "Men's Outerwear",
      ratings: 4.7,
      brandName: "Brand I1",
      creationDateTime: "2024-08-15T02:00:00Z"
    },
    {
      productName: "Women's Off-Shoulder Top",
      productImage: "https://example.com/images/womens-off-shoulder-top.jpg",
      description: "Trendy off-shoulder top for a stylish look.",
      price: 40.00,
      category: "Women's Clothing",
      ratings: 4.6,
      brandName: "Brand J1",
      creationDateTime: "2024-08-15T02:30:00Z"
    },
    {
      productName: "Men's Baseball Cap",
      productImage: "https://example.com/images/mens-baseball-cap.jpg",
      description: "Casual baseball cap with an adjustable strap.",
      price: 20.00,
      category: "Men's Accessories",
      ratings: 4.5,
      brandName: "Brand K1",
      creationDateTime: "2024-08-15T03:00:00Z"
    },
    {
      productName: "Women's High-Waist Shorts",
      productImage: "https://example.com/images/womens-high-waist-shorts.jpg",
      description: "Stylish high-waist shorts for a chic summer look.",
      price: 30.00,
      category: "Women's Clothing",
      ratings: 4.7,
      brandName: "Brand L1",
      creationDateTime: "2024-08-15T03:30:00Z"
    },
    {
      productName: "Men's Flip Flops",
      productImage: "https://example.com/images/mens-flip-flops.jpg",
      description: "Comfortable flip flops for casual wear.",
      price: 18.00,
      category: "Men's Shoes",
      ratings: 4.3,
      brandName: "Brand M1",
      creationDateTime: "2024-08-15T04:00:00Z"
    },
    {
      productName: "Women's Lace-Up Boots",
      productImage: "https://example.com/images/womens-lace-up-boots.jpg",
      description: "Durable lace-up boots with a stylish design.",
      price: 90.00,
      category: "Women's Shoes",
      ratings: 4.8,
      brandName: "Brand N1",
      creationDateTime: "2024-08-15T04:30:00Z"
    },
    {
      productName: "Men's Dress Shoes",
      productImage: "https://example.com/images/mens-dress-shoes.jpg",
      description: "Elegant dress shoes for formal events.",
      price: 105.00,
      category: "Men's Shoes",
      ratings: 4.7,
      brandName: "Brand O1",
      creationDateTime: "2024-08-15T05:00:00Z"
    },
    {
      productName: "Women's Trench Coat",
      productImage: "https://example.com/images/womens-trench-coat.jpg",
      description: "Classic trench coat for a timeless look.",
      price: 120.00,
      category: "Women's Outerwear",
      ratings: 4.9,
      brandName: "Brand P1",
      creationDateTime: "2024-08-15T05:30:00Z"
    }
  ];
  