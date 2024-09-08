import {Product, Clothing, Appliance} from "../data/products.js";

describe('test suite: Product', () =>{

  let product;

  beforeEach(() => {
    product = new Product({
     
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      image: "images/products/athletic-cotton-socks-6-pairs.jpg",
      name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      rating: {
        stars: 4.5,
        count: 87
      },
      priceCents: 1090,
      keywords: [
        "socks",
        "sports",
        "apparel"
      ]
    });
  });

  it('has the correct properties', () => {
    expect(product.id).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(product.image).toEqual('images/products/athletic-cotton-socks-6-pairs.jpg');
  });

  it('get the stars url', () => {
    expect(product.getStarsUrl()).toEqual('images/ratings/rating-45.png');
  });

  it('gets the price',() => {
    expect(product.getPrice()).toEqual('$10.90');
  });
  
  it('gets the rating correct', () => {
    expect(product.rating.stars).toEqual(4.5);
  });

  it('gets the name right', () => {
    expect(product.name).toEqual('Black and Gray Athletic Cotton Socks - 6 Pairs');
  });
 });

 describe('test suite: Clothing', () => {
  let clothing;

  beforeEach(() => {
    clothing = new Clothing({
    
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
   })
  });


  it('gets the id right', () => {
    expect(clothing.id).toEqual('5968897c-4d27-4872-89f6-5bcb052746d7');
  });

  it('gets the image link right', () => {
    expect(clothing.image).toEqual('images/products/women-chiffon-beachwear-coverup-black.jpg');
  });

  it('gets the size chart link right',() => {
    expect(clothing.sizeChartLink).toEqual('images/clothing-size-chart.png')
  });

  it('displays a size chart link in extraInfoHTML', () => {

    expect(clothing.extraInfoHTML()).toContain(
      `  <a href = "images/clothing-size-chart.png" target= "_blank">
    Size chart</a>
    `);
  });

  it('gets the price correct' , () => {
    expect(clothing.getPrice()).toEqual('$20.70');
  })
 })
 

describe('test suite: Appliance', () => {
    let appliance;

    beforeEach(() => {
      appliance = new Appliance({

      id: "54e0eccd-8f36-462b-b68a-8182611d9add",
      image: "images/products/black-2-slot-toaster.jpg",
      name: "2 Slot Toaster - Black",
      rating: {
        stars: 5,
        count: 2197
      },
      priceCents: 1899,
      keywords: [
        "toaster",
        "kitchen",
        "appliances"
      ],
      type: "appliance",
      instructionsLink: "images/appliance-instructions.png",
      warrantyLink: "images/appliance-warranty.png"
      });
    });

    it('gets the Appliance id correctly', () => {
      expect(appliance.id).toEqual('54e0eccd-8f36-462b-b68a-8182611d9add');
    });

    it('gets the image link correct', () => {
      expect(appliance.image).toEqual('images/products/black-2-slot-toaster.jpg');
    });

    it('gets the name right', () => {
      expect(appliance.name).toEqual('2 Slot Toaster - Black');
    })

    it('gets the instructions link correct', () => {
      expect(appliance.extraInfoHTML()).toContain(`
    <a href = "images/appliance-instructions.png" target = "_blank">
    Instructions Warranty </a>`)
    })
    
    it('gets the price correctly', () => {
      expect(appliance.getPrice()).toEqual('$18.99')
    });
    
    it('gets the warranty image link correct',() => {
      expect(appliance.extraInfoHTML()).toContain(`<a href = "images/appliance-warranty.png" target ="_blank" >`)

    expect(appliance.extraInfoHTML()).toContain(' Warranty');
  });
  
    });

  