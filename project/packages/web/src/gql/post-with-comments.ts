import gql from 'graphql-tag';

export const GET_POST_WITH_COMMENTS = gql`
  query GetPostWithComments($post_id: Float!, $inputComment: GetCommentInput!) {
    getPost(id: $post_id) {
      id
      author
      category
      created_date
      title
      content
    }
    getSomeComments(input: $inputComment) {
      id
      author
      content
      created_date
    }
  }
`;
