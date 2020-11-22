import gql from 'graphql-tag'

export const SHOW_ALL_PACKAGE = gql`
  query {
    ShowAllPackage {
      id
      service {
        id
        serviceName
      }
      packageName
      packagePrice
      serviceCovered {
        id
        serviceName
        servicePrice
        parentType
      }
      createdAt
      updatedAt
      msg
      code
    }
  }
`;
