import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query GetAllPosts($skipContent: Boolean! = true) {
    getAllPosts {
      id
      title
      category
      content @skip(if: $skipContent)
    }
  }
`;
