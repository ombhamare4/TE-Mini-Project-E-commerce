import React, { useState, useContext, createContext } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  gql,
} from "@apollo/client";

import { url } from "./url";

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();

  return (
    <authContext.Provider value={auth}>
      <ApolloProvider client={auth.createApolloClient()}>
        {children}
      </ApolloProvider>
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [authToken, setAuthToken] = useState(null);
  const [userID, setUserId] = useState(null);
  // const [authToken, setAuthToken] = useState(null)

  const isSignedIn = () => {
    if (authToken) {
      return true;
    } else {
      return false;
    }
  };

  const getAuthHeaders = () => {
    if (!authToken) return null;

    return {
      authorization: `Bearer ${authToken}`,
    };
  };

  const createApolloClient = () => {
    const link = new HttpLink({
      uri: url,
      headers: getAuthHeaders(),
    });

    return new ApolloClient({
      link,
      cache: new InMemoryCache(),
    });
  };

  const signIn = async ({ email, password }) => {
    const client = createApolloClient();
    const LoginMutation = gql`
      mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
          userID
          token
          tokenExpiration
        }
      }
    `;

    const result = await client.mutate({
      mutation: LoginMutation,
      variables: { email, password },
    });

    if (result?.data?.login?.token) {
      setAuthToken(result.data.login.token);
      setUserId(result.data.login.userID);
    }
  };

  const signOut = () => {
    setAuthToken(null);
  };

  // const userId = ()=>{
  //   return userID
  // }

  return {
    setAuthToken,
    setUserId,
    userID,
    isSignedIn,
    signIn,
    signOut,
    createApolloClient,
  };
}
