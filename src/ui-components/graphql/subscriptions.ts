/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      createdAt
      description
      id
      image
      name
      products {
        nextToken
        __typename
      }
      styles
      updatedAt
      __typename
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      category {
        createdAt
        description
        id
        image
        name
        styles
        updatedAt
        __typename
      }
      categoryProductsId
      createdAt
      current_stock
      description
      id
      image
      name
      price
      rating
      style
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      createdAt
      description
      id
      image
      name
      products {
        nextToken
        __typename
      }
      styles
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      category {
        createdAt
        description
        id
        image
        name
        styles
        updatedAt
        __typename
      }
      categoryProductsId
      createdAt
      current_stock
      description
      id
      image
      name
      price
      rating
      style
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      createdAt
      description
      id
      image
      name
      products {
        nextToken
        __typename
      }
      styles
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      category {
        createdAt
        description
        id
        image
        name
        styles
        updatedAt
        __typename
      }
      categoryProductsId
      createdAt
      current_stock
      description
      id
      image
      name
      price
      rating
      style
      updatedAt
      __typename
    }
  }
`;
