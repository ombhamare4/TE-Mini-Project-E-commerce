import BillingAddressForm from "../../components/Checkout/BillingAddressForm";
import Layout from "../../components/Layout/Layout";
import classes from "./checkoutform.module.css";

const CheckoutForm = () => {
  return (
    <div className={classes.position}>
      <BillingAddressForm />
    </div>
  );
};

export default CheckoutForm;
