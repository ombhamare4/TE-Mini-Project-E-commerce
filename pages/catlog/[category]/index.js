import Layout from "../../../components/Layout/Layout";
import { useQuery } from "@apollo/client";
import ProductList from "../../../components/ProductsTest/ProductList";
import { GET_PRODUCT_BY_CATEGORY } from "../../../graphql/query";
import NewLoading from "../../../components/Message/NewLoading";
import NewError from "../../../components/Message/NewError";
const CategoryPage = ({ params }) => {
  const productCategory = params.category;

  const { data, loading, error } = useQuery(GET_PRODUCT_BY_CATEGORY, {
    variables: { productCategory },
  });
  if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <Layout>
      <div className="bg-white p-10">
        <ProductList products={data.productByCollection} />
      </div>
    </Layout>
  );
};

export default CategoryPage;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
