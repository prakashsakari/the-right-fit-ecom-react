import { v4 as uuid } from "uuid";
import menShoes from "../../assets/mens-shoes.jpg";
import womenShoes from "../../assets/women-shoes-new.jpg";
import girlShoes from "../../assets/girls-shoes.jpg";
import boyShoes from "../../assets/boys-shoes.jpg";

const categories = [
  {
    _id: uuid(),
    imgUrl: menShoes,
    alt: "category-img",
    category: "men"
  },
  {
    _id: uuid(),
    imgUrl: womenShoes,
    alt: "category-img",
    category: "women"
  },
  {
    _id: uuid(),
    imgUrl: boyShoes,
    alt: "category-img",
    category: "boys"
  },
  {
    _id: uuid(),
    imgUrl: girlShoes,
    alt: "category-img",
    category: "girls"
  }
];

export { categories };

