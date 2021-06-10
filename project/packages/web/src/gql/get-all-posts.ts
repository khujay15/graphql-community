import gql from 'graphql-tag';

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    getAllPosts {
      id
      title
      category
    }
  }
`;
