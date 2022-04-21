import classes from "./ProductImage.module.css";
import image from './cap.jpg';

const ProductImage = () => {
  const size = 'classes.hover-zoom';
  return (
   <div className={classes.content}>
      <img src={image} alt="Captain America" className='size'/>
  </div>
  );
};

export default ProductImage;
