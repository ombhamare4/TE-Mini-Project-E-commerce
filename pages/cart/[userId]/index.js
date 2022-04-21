import Layout from "../../../components/Layout/Layout";
import CartData from "../../../components/Cart/CartData";
import { useQuery } from "@apollo/client";

import { USER_BY_ID } from "../../../graphql/query";

import NewLoading from "../../../components/Message/NewLoading";
import NewError from "../../../components/Message/NewError";

const Cart = ({ params }) => {
  const userId = params.userId;
  const { data, loading, error } = useQuery(USER_BY_ID, {
    variables: { userId },
  });

  if (loading) return <NewLoading />;
  if (error) return <NewError />;
  return (
    <Layout>
      <CartData cartData={data.userById.cart} />
    </Layout>
  );
};

export default Cart;

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}
// export async function getStaticPaths() {
//   const { data } = await client.query({
//     query: gql`
//       query user {
//         users {
//           _id
//         }
//       }
//     `,
//   });

//   return {
//     paths: data.users.map((user) => ({
//       params: {
//         userId: user._id,
//       },
//     })),
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const userId = context.params.userId;
//   const { data, loading } = await client.query({
//     query:USER_BY_ID,
//     variables: { userId },
//   });

//   return {
//     props: {
//       userId: userId,
//       userData: data.userById,
//       loading: loading,
//     },
//   };
// }

// export const getServerSideProps = async ({ params }) => {
//   return {
//     props: {
//       productId: params.productId,
//     },
//   };
// };
