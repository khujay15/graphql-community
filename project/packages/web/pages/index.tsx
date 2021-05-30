import { GetPostInput, Post } from "@graphql-community/shared";
import { useQuery, gql } from "@apollo/client";
import { message } from "antd";

const GET_SOME_POST_QUERY = gql`
  query GetSomePosts($getSomePostInput: GetPostInput!) {
    getSomePosts(input: $getSomePostInput) {
      author
      category
    }
  }
`;

const Index = () => {
  const { data, error } = useQuery<
    { getSomePosts: Post[] },
    { getSomePostInput: GetPostInput }
  >(GET_SOME_POST_QUERY, {
    variables: {
      getSomePostInput: {
        id: 1,
      },
    },
  });
  if (error) console.log(JSON.stringify(error, null, 2));

  return (
    <>
      <div onClick={() => message.success("hi")}>index </div>
      <div>{data?.getSomePosts[0].author}</div>
      <div>{data?.getSomePosts[0].category}</div>
    </>
  );
};

export default Index;
