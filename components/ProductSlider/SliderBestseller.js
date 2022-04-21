import React from "react";

import Carousel from "react-elastic-carousel";

import Card from "../UI/Card";
import Item from "./Item";
import classes from './slider.module.css';


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const BestSeller = [
  {
    id: "n1",
    image: "https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_SX679_.jpg",
    title: "AMD Ryzen 5 5600X 6-core",
    price: "16000",
  },
  {
    id: "n2",
    image: "https://images-eu.ssl-images-amazon.com/images/I/71sYAire3TL._AC._SR360,460.jpg",
    title: "GIGABYTE AMD A68, FM2+ and FM2 Socket",
    price: "4500",
  },
  {
    id: "n3",
    image: "https://m.media-amazon.com/images/I/81w0f+QufZL._AC_SX679_.jpg",
    title: "Crucial MX500 500GB external SSD",
    price: "4500",
  },
  {
    id: "n4",
    image: "https://m.media-amazon.com/images/I/81tZgYJBFgS._AC_SX679_.jpg",
    title: "EVGA GeForce RTX 3070 Ti FTW3",
    price: "68000",
  },
  {
    id: "n5",
    image: "https://m.media-amazon.com/images/I/91t48GBv8TL._AC_SX466_.jpg",
    title: "Noctua NH-D15 chromax.Black",
    price: "7600",
  },
  {
    id: "n6",
    image: "https://images-eu.ssl-images-amazon.com/images/I/41VbQsn8yRL._SY445_SX342_QL70_FMwebp_.jpg",
    title: "Ant Esports Superflow 120 ",
    price: "400",
  },
  {
    id: "n7",
    image: "https://m.media-amazon.com/images/I/71SvgLer5wL._AC_SX679_.jpg",
    title: "Samsung Electronics (MZ-V8V500B/AM) 980 SSD",
    price: "5000",
  },
];

const SliderBestseller = () => {
  return (
    <>
      <h1 className={classes.h1}>Best Sellers</h1>
      <div style={{backgroundColor:"White"}}>
        <Carousel breakPoints={breakPoints} pagination={null}>
        
            {BestSeller.map((item)=>{
              return(<Item className={classes.container}>
                <div className={classes.container}>
                <div className={classes.image}><img src={item.image} /></div>
                <div className={classes.textBox}>
                <h3>{item.title}</h3>
                <h5>₹{item.price}</h5>
                </div>
                </div>
              </Item>);
            })}
        </Carousel>
      </div>
    </>
  );
};

export default SliderBestseller;
