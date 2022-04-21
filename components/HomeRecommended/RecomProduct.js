import VProductCard from "../ProductCard/VProductCard";
import classes from "./RecomProduct.module.css";

const products = [ {
    id: 1,
    name: "Core i9",
    price: "70000",
    comparedPrice: "90000",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 2,
    name: "Core i3",
    price: "7939",
    comparedPrice: "9870",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/71rkvn6ASDL._AC_UY218_.jpg",
  },
  {
    id: 3,
    name: "Core i5",
    price: "14,990",
    comparedPrice: "24999",
    category: "CPU",
    image: "https://m.media-amazon.com/images/I/61CSx8SOBXL._AC_UY218_.jpg",
  },

  //Cooler
  {
    id: 4,
    name: "ARCTIC Freezer 50",
    price: "4999",
    comparedPrice: "5999",
    category: "CPU Cooler",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 5,
    name: "Ant Esports ICE-C612 with RGB CPU Cooler",
    price: "1525",
    comparedPrice: "9870",
    category: "CPU Cooler",
    image: "https://m.media-amazon.com/images/I/51gMmADy+OS._AC_UY218_.jpg",
  },

  //MotherBoard
  {
    id: 6,
    name: "ASUS Prime B550M-A (AMD AM4 Socket Ryzen 5000/4000G/3000) Micro ATX",
    price: "11300",
    comparedPrice: "16300",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/71JEcduJrXL._AC_UY218_.jpg",
  },
  {
    id: 7,
    name: "ASUS ProArt B550-Creator (AMD Ryzen 5000/ 5000 G/ 4000 G/ 3000) ATX motherboard",
    price: "24949",
    comparedPrice: "37000",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/71V3xOm6zVL._AC_UY218_.jpg",
  },
  {
    id: 8,
    name: "GIGABYTE AMD A320, AM4 Socket,Ultra Durable Motherboard with Fast Onboard Storage",
    price: "4990",
    comparedPrice: "8800",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/81lTPWJ+QZL._AC_UY218_.jpg",
  },
  {
    id: 9,
    name: "ASUS ROG Strix B550-F Gaming WiFi 6 (AMD AM4 Socket for 3rd Gen AMD Ryzen)",
    price: "20499",
    comparedPrice: "24949",
    category: "motherboard",
    image: "https://m.media-amazon.com/images/I/511QDSquq0L._AC_UY218_.jpg",
  },

  //Memory
  {
    id: 10,
    name: "Crucial RAM 8GB DDR4",
    price: "2830",
    comparedPrice: "4100",
    category: "memory",
    image: "https://m.media-amazon.com/images/I/81njJG57-FL._AC_UY218_.jpg",
  },

  //Storage
  {
    id: 11,
    name: "Crucial P2 500GB 3D NAND NVMe PCIe M.2 SSD - CT500P2SSD8",
    price: "4201",
    comparedPrice: "7800",
    category: "storage",
    subcategory: "ssd",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 12,
    name: "Western Digital Blue SN570 NVMe 1TB SSD",
    price: "42086531",
    comparedPrice: "13500",
    category: "storage",
    subcategory: "sdd",
    image: "https://m.media-amazon.com/images/I/91gpmhtA+KL._AC_UY218_.jpgg",
  }];
const RecomProduct = () => {
  return (
     <div className="bg-white shadow-2xl ">
       <h1 className={classes.h1}>Recommended</h1>
    <ul className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
      {products.map((products) => (
        <li key={products.id}>
          <VProductCard
            id={products.id}
            image={products.image}
            name={products.name}
            price={products.price}
            comparedPrice={products.comparedPrice}
            category={products.category}
            subcategory={products.subcategory}
          />
        </li>
      ))}
    </ul>
    </div>
  );
};

export default RecomProduct;
