import { ApolloClient, InMemoryCache } from "@apollo/client";
import {url} from "./url"
const client = new ApolloClient({
    uri: url,
    cache: new InMemoryCache(),
  });

export default client;