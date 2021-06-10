import gql from 'graphql-tag';

export const GET_SOME_POSTS = gql`
  query GetSomePosts($input: GetPostInput!) {
    getSomePosts(input: $input) {
      category
      id
      author
      title
      created_date
    }
  }
`;
