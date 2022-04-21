import classes from "./CatalogMenu.module.css";
import Link from "next/link";
const CatalogItem = [
  {
    id: "c1",
    title: "CPU Cabinet",
    image:
      "https://www.pcstudio.in/wp-content/uploads/2021/04/Phanteks-Eclipse-P360A-Cabinet-White-1-300x300.jpg",
  },
  {
    id: "c2",
    title: "Monitor",
    image:
      "https://i.pcmag.com/imagery/reviews/030uIY8hJoQnRWRHUtVurXq-10.fit_lim.size_625x365.v1609291325.png",
  },
  {
    id: "c3",
    title: "Keyboard",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXaRltkvYNT1-OyIeLWRphYn-Q6O__2222wGzdZMI5Ohln-XP5oyvMTzR3gWbzGAQSOGc&usqp=CAU",
  },
  {
    id: "c4",
    title: "Mouse",
    image: "https://www.businessinsider.in/photo/77628871/Master.jpg",
  },
  {
    id: "c5",
    title: "Speaker",
    image:
      "https://img.joomcdn.net/7254ccd121dd3129e0787bf4ac6b9ebced58d484_1024_1024.jpeg",
  },
  {
    id: "c6",
    title: "Headphones",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/4104I9o4EdL._AC._SR180,230.jpg",
  },
  {
    id: "c7",
    title: "Motherboard",
    image:
      "https://bestmotherboardsforgaming.com/wp-content/uploads/2016/09/9-MSI-Computer-DIMM-LGA-2011-3-Motherboard-X99A-GODLIKE-GAMING-CARBON.jpg",
  },
  {
    id: "c8",
    title: "Processor",
    image:
      "https://www.easeus.com/images/en/screenshot/partition-manager/cpu.png",
  },
  {
    id: "c9",
    title: "RAM",
    image: "https://www.memoryc.com/images/products/bb/image_4170691.jpg",
  },
  {
    id: "c10",
    title: "HDD & SSD",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ46KG1YRx18YQ92uKREeYEKyAB6v1wHLkdIg&usqp=CAU",
  },
  {
    id: "c11",
    title: "Graphic Card",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSpY7Y2j5FBXyaSuEt8IRspPrPY6SRaF-pj7iw-IJSSB8AoLL5mZubskxdktfM6J678W8&usqp=CAU",
  },
  {
    id: "c12",
    title: "CD Drive",
    image: "https://m.media-amazon.com/images/I/61Iv-HkR4xL._SL1500_.jpg",
  },
  {
    id: "c13",
    title: "Cooling Fans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QebDkFuffxSidhsqk5mb2MQSz_TYmVg40Q&usqp=CAU",
  },
  {
    id: "c14",
    title: "Power Supply",
    image: "https://m.media-amazon.com/images/I/51oB1WBy29L.jpg",
  },
  {
    id: "c15",
    title: "Proccessor Cooler",
    image: "https://p.globalsources.com/IMAGES/PDT/B5199579862/CPU-Cooler.png",
  },
  {
    id: "c16",
    title: "Mic",
    image: "https://m.media-amazon.com/images/I/61t++2sHiHL._SL1500_.jpg",
  },
  {
    id: "c17",
    title: "Webcam",
    image: "https://m.media-amazon.com/images/I/71iNwni9TsL._SL1500_.jpg",
  },
  {
    id: "c18",
    title: "Operating System",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-LipsxF1ljnwIbopVsjoiZHkPV8GnawsoKY_zeVeNEdMQY_rD_aP5JLOkAjaxDYNf5U&usqp=CAU",
  },
  {
    id: "c19",
    title: "Assembled CPU",
    image: "https://images-na.ssl-images-amazon.com/images/I/91kXZN089WL.jpg",
  },
  {
    id: "c20",
    title: "Laptop",
    image:
      "https://in-media.apjonlinecdn.com/wysiwyg/buying_guides/gaming_pc/omen_laptop.jpg",
  },
  {
    id: "c21",
    title: "Cables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFrDJuhvXflX3KFufjrYuxtvfOsDjXFjKX4y3j5K2M0z7PHOAKABbY-0QM3HUThU-AcM&usqp=CAU",
  },
  {
    id: "c22",
    title: "Consoles",
    image:
      "https://www.ubuy.co.in/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFuUGo3UmItNEwuX1NMMTEwMF8uanBn.jpg",
  },
  {
    id: "c23",
    title: "Games",
    image: "https://m.media-amazon.com/images/I/81Ow0EK3azL._SL1500_.jpg",
  },
  {
    id: "c24",
    title: "Gaming Chair",
    image: "https://m.media-amazon.com/images/I/51V5budxXHL._SL1010_.jpg",
  },
];

const CatalogMenu = () => {
  return (
    <ul className={classes.layout}>
      {CatalogItem.map((item) => {
        return (
          <Link href={`/catlog/${item.title}`}  key={item.id}>
            <li
              className={classes.element}
              key={item.id}
            >
              <div className=" p-3 rounded-lg  flex items-center justify-center  overflow-hidden object-cover w-full">
                <img
                  src={item.image}
                  className="bg-white  transition-all duration-500 ease-in-out transform bg-center bg-cover object-center object-contain hover:scale-100"
                />
              </div>
              <h3 className="text-red-500">{item.title}</h3>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default CatalogMenu;
