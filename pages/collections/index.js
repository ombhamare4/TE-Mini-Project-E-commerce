import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import AllCollectionsDetails from "../../components/AllCollectionsDetails/AllCollectionsDetails";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../graphql/query";
import NewLoading from "../../components/Message/NewLoading";
import NewError from "../../components/Message/NewError";
const AllCollectionPage = () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);
  if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <Layout>
      <Head>
        <title>All Collections</title>
        <meta name="description" content="All Collections" />
      </Head>
      <AllCollectionsDetails productsData={data.products} />
    </Layout>
  );
};

export default AllCollectionPage;
