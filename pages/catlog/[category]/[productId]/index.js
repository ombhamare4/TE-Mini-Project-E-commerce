import ProductDetails from "../../../../components/ProductDetails/ProductDetail";
import Layout from "../../../../components/Layout/Layout";
import { useQuery } from "@apollo/client";
import NewLoading from "../../../../components/Message/NewLoading";
import NewError from "../../../../components/Message/NewError";
import { GET_PRODUCT_BY_ID } from "../../../../graphql/query";

const products = ({ params }) => {
  const productId = params.productId;

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: productId },
  });
  if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <Layout>
      <ProductDetails productData={data.productByID} />
    </Layout>
  );
};

export default products;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
};