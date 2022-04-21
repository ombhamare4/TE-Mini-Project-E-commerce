import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query getProducts {
    products {
      _id
      name
      price {
        originalPrice
        discountPrice
      }
      available
      image
      company
      category
      description
      reviews {
        rating
        comment
      }
      createdAt
    }
  }
`;

export const GET_PRODUCT_BY_ID = gql`
  query Product($productId: String!) {
    productByID(productId: $productId) {
      _id
      name
      image
      price {
        originalPrice
        discountPrice
      }
      company
      category
      description
      weight
      available
      reviews {
        rating
        comment
      }
      createdAt
      updatedAt
    }
  }
`;

export const GET_PRODUCT_BY_CATEGORY = gql`
  query Product($productCategory: String!) {
    productByCollection(collectionName: $productCategory) {
      _id
      name
      image
      category
      price {
        originalPrice
        discountPrice
      }
    }
  }
`;

export const USER_BY_ID = gql`
  query userById($userId: String!) {
    userById(userId: $userId) {
      _id
      email
      cart {
        product {
          _id
          name
          description
          price {
            discountPrice
            originalPrice
          }
          company
          category
          image
          available
        }
      }
      name {
        firstName
        lastName
      }
    }
  }
`;

export const PROUDUT_BY_NAME = gql`
  query productByName($productName: String!, $collectionName: String!) {
    productByName(productName: $productName, collectionName: $collectionName) {
      _id
      name
      image
      category
      price {
        originalPrice
        discountPrice
      }
    }
  }
`;
