import gql from "graphql-tag";

export const post = gql`
  query($id: ID!) {
    post(id: $id) {
      id
    }
  }
`;
