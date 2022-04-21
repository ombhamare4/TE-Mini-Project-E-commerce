import HProductCard from "../ProductCard/HProductCard";
import { currencyConverter } from "../../hooks/currencyConverter";
const ProductHorizontalItem = (props) => {
  return (
    <div>
      <HProductCard
        id={props.id}
        image={props.image}
        name={props.name}
        originalPrice={currencyConverter(props.originalPrice)}
        discountPrice={currencyConverter(props.discountPrice)}
        category={props.category}
      />
    </div>
  );
};
export default ProductHorizontalItem;
