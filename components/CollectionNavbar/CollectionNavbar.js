import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./CollectionNavabr.module.css"
/*
Collection List:
CPU
CPU Cooler
MotherBoard
Memory
Storage
Video Card
Case
Power Supply
Operating System
Monitor
*/

const Collections = [
  {
    id: 10,
    name: "All",
  },
  {
    id: 1,
    name: "CPU",
  },
  {
    id: 2,
    name: "CPU Cooler",
  },
  {
    id: 3,
    name: "Motherboard",
  },
  {
    id: 4,
    name: "Memory",
  },
  {
    id: 5,
    name: "Storage",
  },
  {
    id: 6,
    name: "Graphics Card",
  },
  {
    id: 7,
    name: "Power Supply",
  },
  {
    id: 8,
    name: "Operating System",
  },
  {
    id: 9,
    name: "Monitor",
  },
];

const CollectionNavbar = () => {
  const router = useRouter();

  return (
    <div className="border-b-2 border-red-500 transition ease-in-out">
      <ul className="flex justify-evenly lg:block shadow-xl">
        {Collections.map((collections) => (
          <li
            className={styles.btn1}
            key={collections.id}
          >
            <Link href={`/collections/${encodeURIComponent(collections.name)}`}>
              {collections.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionNavbar;
