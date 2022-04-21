import "../styles/globals.css";
import { AuthProvider } from "../api/authentication";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { url } from "../api/url";
const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  );
}

export default MyApp;
