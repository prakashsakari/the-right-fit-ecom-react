import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const categories = [
  {
    _id: uuid(),
    imgUrl: "https://cdn.shopify.com/s/files/1/0343/9037/6585/products/spartacus-sandal-430520_1000x.jpg?v=1628679972",
    alt: "category-img",
    category: "Men"
  },
  {
    _id: uuid(),
    imgUrl: "https://www.kindpng.com/picc/m/175-1756344_ladies-sandal-png-photo-ladies-sandals-image-png.png",
    alt: "category-img",
    category: "Women"
  },
  {
    _id: uuid(),
    imgUrl: "https://stylesatlife.com/wp-content/uploads/2017/04/Stylish-Shoe-for-Boys.jpg.webp",
    alt: "category-img",
    category: "Boys"
  },
  {
    _id: uuid(),
    imgUrl: "https://media.istockphoto.com/photos/baby-girl-small-pink-sport-shoes-isolated-on-white-background-picture-id926424240?b=1&k=20&m=926424240&s=170667a&w=0&h=7urJAsY6t1DIi8MXxmSX1wqv7AdGk3FfDQlZgDo05Fo=",
    alt: "category-img",
    category: "Girls"
  }
];

export { categories };

