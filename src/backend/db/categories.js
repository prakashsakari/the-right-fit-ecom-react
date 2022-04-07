import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

const categories = [
  {
    _id: uuid(),
    imgUrl: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/11801932/2020/4/16/034bd2a6-b3df-4762-affb-a6b0baebeef71587031146104ColeHaanMenBrownSolidGrand20LeatherFormalDerbys4.jpg",
    alt: "category-img",
    category: "Men"
  },
  {
    _id: uuid(),
    imgUrl: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16892598/2022/2/22/09fc2ae7-f5fe-48bd-b077-ef0eca85cea51645502207058WalletsMANGOWomenEarringsMANGOWomenEarringsMANGOWomenWallets1.jpg",
    alt: "category-img",
    category: "Women"
  },
  {
    _id: uuid(),
    imgUrl: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16259982/2021/11/26/75ee3330-24ac-4b53-a7ac-1975804668b81637913547441maxBoysOliveGreenWovenDesignPUSneakers1.jpg",
    alt: "category-img",
    category: "Boys"
  },
  {
    _id: uuid(),
    imgUrl: "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/17490066/2022/3/11/c8ffde11-c9d3-4e7e-b549-b1d1749d7c391647022546151Sandals2.jpg",
    alt: "category-img",
    category: "Girls"
  }
];

export { categories };

