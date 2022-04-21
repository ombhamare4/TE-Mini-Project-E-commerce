import VProductCard from "../ProductCard/VProductCard";

const products = [
  //CPU
  {
    id: 1,
    name: "Core i9",
    price: "70000",
    comparedPrice: "90000",
    category: "CPU",
    company: "Intel",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 2,
    name: "Ryzen",
    price: "7939",
    comparedPrice: "9870",
    category: "CPU",
    company: "Ryzen",
    image: "https://m.media-amazon.com/images/I/71rkvn6ASDL._AC_UY218_.jpg",
  },
  {
    id: 3,
    name: "Core i5",
    price: "14,990",
    comparedPrice: "24999",
    category: "CPU",
    company: "Intel",
    image: "https://m.media-amazon.com/images/I/61CSx8SOBXL._AC_UY218_.jpg",
  },

  //MotherBoard
  {
    id: 6,
    name: "ASUS Prime B550M-A (AMD AM4 Socket Ryzen 5000/4000G/3000) Micro ATX",
    price: "11300",
    comparedPrice: "16300",
    category: "motherboard",
    company: "Asus",
    image: "https://m.media-amazon.com/images/I/71JEcduJrXL._AC_UY218_.jpg",
  },
  {
    id: 7,
    name: "ASUS ProArt B550-Creator (AMD Ryzen 5000/ 5000 G/ 4000 G/ 3000) ATX motherboard",
    price: "24949",
    comparedPrice: "37000",
    category: "motherboard",
    company: "Asus",
    image: "https://m.media-amazon.com/images/I/71V3xOm6zVL._AC_UY218_.jpg",
  },
  {
    id: 8,
    name: "GIGABYTE AMD A320, AM4 Socket,Ultra Durable Motherboard with Fast Onboard Storage",
    price: "4990",
    comparedPrice: "8800",
    category: "motherboard",
    company: "Gigabyte",
    image: "https://m.media-amazon.com/images/I/81lTPWJ+QZL._AC_UY218_.jpg",
  },
  {
    id: 9,
    name: "MSI ROG Strix B550-F Gaming WiFi 6 (AMD AM4 Socket for 3rd Gen AMD Ryzen)",
    price: "20499",
    comparedPrice: "24949",
    category: "motherboard",
    company: "MSI",
    image: "https://m.media-amazon.com/images/I/511QDSquq0L._AC_UY218_.jpg",
  },

  //Memory
  {
    id: 10,
    name: "Corsair RAM 8GB DDR4",
    price: "2830",
    comparedPrice: "4100",
    category: "memory",
    company: "Corsair",
    image: "https://m.media-amazon.com/images/I/81njJG57-FL._AC_UY218_.jpg",
  },
  {
    id: 111,
    name: "HyperX RAM 8GB DDR4",
    price: "2830",
    comparedPrice: "4100",
    category: "memory",
    company: "HyperX",
    image: "https://m.media-amazon.com/images/I/81njJG57-FL._AC_UY218_.jpg",
  },

  //Storage
  {
    id: 11,
    name: "Crucial P2 500GB 3D NAND NVMe PCIe M.2 SSD - CT500P2SSD8",
    price: "4201",
    comparedPrice: "7800",
    category: "storage",
    company: "SSD",
    image: "https://m.media-amazon.com/images/I/61pI7loWpZS._SL1339_.jpg",
  },
  {
    id: 12,
    name: "Western Digital Blue SN570 NVMe 1TB SSD",
    price: "42086531",
    comparedPrice: "13500",
    category: "storage",
    company: "SSD",
    image: "https://m.media-amazon.com/images/I/91gpmhtA+KL._AC_UY218_.jpgg",
  },
  {
    id: 13,
    name: "Seagate BarraCuda 1 TB Internal Hard Drive HDD",
    price: "4201",
    comparedPrice: "7800",
    category: "storage",
    company: "HDD",
    image: "https://m.media-amazon.com/images/I/81rOuSWZtvL._AC_UY218_.jpg",
  },
  //Video Card
  {
    id: 14,
    name: "GALAX GEFORCE RTX 3070",
    price: "85999",
    comparedPrice: "7800",
    category: "graphics card",
    company: "Nvidia",
    image: "https://m.media-amazon.com/images/I/81Vr3jzftaL._AC_UL320_.jpg",
  },
  {
    id: 15,
    name: "Zotac Gaming Geforce GTX 1650 OC 4GB GDDR6 Graphics Card",
    price: "26628",
    comparedPrice: "45000",
    category: "graphics card",
    company: "AMD",
    image: "https://m.media-amazon.com/images/I/61ItfhQmaFL._AC_UL320_.jpg",
  },

  //OS
  {
    id: 17,
    name: "Windows 11 Professional 64bit on USB 3.1",
    price: "13,300",
    comparedPrice: "22,799",
    category: "operatingsystem",
    company: "Windows 11",
    image: "https://m.media-amazon.com/images/I/81mLxU0CcAL._AC_UL320_.jpg",
  },
  {
    id: 18,
    name: "Microsoft Windows 10 Home English",
    price: "9826",
    comparedPrice: "11999",
    category: "operatingsystem",
    image: "https://m.media-amazon.com/images/I/914o5xV1+8L._AC_UL320_.jpg",
  },
];

const ComponentObtained = (props) => {
  
  return (
    <>
      <div>
        <h1>Ram</h1>
        {products.map((item) => {
          if (item.company === props.rselected) {
            <li key={item.id}>
              <VProductCard
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                comparedPrice={item.comparedPrice}
                category={item.category}
                subcategory={item.subcategory}
              />
            </li>
          }
        })}
      </div>
    </>
  );
};

export default ComponentObtained;
