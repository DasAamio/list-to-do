import gql from "graphql-tag";

export const OWNER_LOGIN = gql`
  mutation OwnerLogin($email: String, $password: String, $deviceToken: String) {
    OwnerLogin(email: $email, password: $password, deviceToken: $deviceToken) {
      firstName
      lastName
      email
      jwt
    }
  }
`
