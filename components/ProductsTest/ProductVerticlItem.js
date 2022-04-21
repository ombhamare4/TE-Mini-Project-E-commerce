import VProductCard from "../ProductCard/VProductCard";
import {currencyConverter} from "../../hooks/currencyConverter"

const ProductVerticlItem = (props) => {
  return (
    <div>
      <VProductCard
        id={props.id}
        image={props.image}
        name={props.name}
        originalPrice = {currencyConverter(props.originalPrice)}
        discountPrice = {currencyConverter( props.discountPrice)}
        category={props.category}
      />
    </div>
  );
};
export default ProductVerticlItem;
