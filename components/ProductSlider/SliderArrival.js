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

const NewArrival = [
  {
    id: "n1",
    image: "https://m.media-amazon.com/images/I/61XXptYTe1L._AC_SX679_.jpg",
    title: "GIGABYTE GeForce RTX 3080",
    price: "98072",
  },
  {
    id: "n2",
    image: "https://images-na.ssl-images-amazon.com/images/I/71G0QXj9T+L._AC_UL604_SR604,400_.jpg",
    title: "CORSAIR Dominator Platinum RGB",
    price: "24000",
  },
  {
    id: "n3",
    image: "https://m.media-amazon.com/images/I/71OgOx2JGXL._AC_SX679_.jpg",
    title: "Fuma 2 Rev.B CPU Air Cooler",
    price: "4800",
  },
  {
    id: "n4",
    image: "https://m.media-amazon.com/images/I/51V+MalhMHL._AC_SX679_.jpg",
    title: "Intel Core i5-12400",
    price: "15000",
  },
  {
    id: "n5",
    image: "https://m.media-amazon.com/images/I/81BDHkrfgGL._AC_SX679_.jpg",
    title: "GIGABYTE B660M DS3H",
    price: "8000",
  },
  {
    id: "n6",
    image: "https://m.media-amazon.com/images/I/61PlHFXGALL._AC_SX679_.jpg",
    title: "External DVD Drive",
    price: "800",
  },
  {
    id: "n7",
    image: "https://m.media-amazon.com/images/I/71+FZCQnUjL._AC_SX679_.jpg" ,
    title: "ARESGAME Power Supply 500W PSU",
    price: "1000",
  },
];

const SliderArrival = () => {
  return (
    <>
      <h1 className={classes.h1}>New Arrivals</h1>
      <div style={{backgroundColor:"White"}}>
        <Carousel breakPoints={breakPoints} pagination={null}>
            {NewArrival.map((item)=>{
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

export default SliderArrival;
