import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    imgUrl: "https://therightfit.netlify.app/assets/shoes.jpg",
    isTrending: false,
    isFavourite: false,
    title: "Nike",
    productCategory: "Men Sneakers",
    newPrice: 1750,
    oldPrice: 2499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl:
      "https://rukminim2.flixcart.com/image/332/398/kthjy4w0/shoe/h/h/x/5-gug87-adidas-cblack-clelil-ftwwht-original-imag6tgyzy3tjf5v.jpeg?q=50",
    isTrending: true,
    isFavourite: false,
    title: "Adidas",
    productCategory: "Women Shoes",
    newPrice: 750,
    oldPrice: 1499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nikko_black_sandal.jpg/800px-Nikko_black_sandal.jpg",
    isTrending: false,
    isFavourite: false,
    title: "Bata",
    productCategory: "Boys Sandals",
    newPrice: 2750,
    oldPrice: 3499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl: "https://rukminim2.flixcart.com/image/714/857/jr83gy80/shoe/t/s/k/sx0131l-5-sparx-pinkblack-original-imafd2hgbs5dbpvx.jpeg?q=50",
    isTrending: true,
    isFavourite: false,
    title: "Sparx",
    productCategory: "Girls Shoes - Premium",
    newPrice: 3750,
    oldPrice: 4499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f64924b-0da5-49fd-857a-533684e27b96/blazer-mid-77-little-kids-shoes-Bnnf4k.png",
    isTrending: false,
    isFavourite: false,
    title: "Nike",
    productCategory: "Girls Shoes - Premium",
    newPrice: 3750,
    oldPrice: 4499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl:
      "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw72da6744/images/a_08/A01735C_A_08X1.jpg?sw=406",
    isTrending: true,
    isFavourite: false,
    title: "All Star",
    productCategory: "Boys Converse",
    newPrice: 1750,
    oldPrice: 2499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl:
      "https://cdn.lifestyleasia.com/wp-content/uploads/2019/08/20153351/6e03e37670a9089e01e24eeddc9eee8b.jpeg",
    isTrending: false,
    isFavourite: false,
    title: "Addidas Collection",
    productCategory: "Addidas Vintage for Men",
    newPrice: 3750,
    oldPrice: 4499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/81863d87-25de-4521-a419-6258ac8f5742/flex-experience-run-10-road-running-shoes-dw002X.png",
    isTrending: false,
    isFavourite: false,
    title: "Nike",
    productCategory: "Girls Running Shoes",
    newPrice: 2750,
    oldPrice: 3499,
    discount: Math.floor(Math.random() * 100)
  },
  {
    _id: uuid(),
    imgUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/193257/01/sv01/fnd/IND/fmt/png/Enzo-2-Metal-Women's-Running-Shoes",
    isTrending: true,
    isFavourite: false,
    title: "Puma",
    productCategory: "Women Running Shoes",
    newPrice: 3750,
    oldPrice: 4499,
    discount: Math.floor(Math.random() * 100)
  }
];
