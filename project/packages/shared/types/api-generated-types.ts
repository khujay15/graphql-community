import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  author: Scalars['String'];
  content: Scalars['String'];
  created_date: Scalars['String'];
  id: Scalars['Int'];
  parent: Scalars['Int'];
  post_id: Scalars['Int'];
  updated_date?: Maybe<Scalars['String']>;
};

export type CreateCommentInput = {
  content: Scalars['String'];
  parent?: Maybe<Scalars['Float']>;
  post_id: Scalars['Int'];
};

export type CreateLikeableInput = {
  like_dislike: Scalars['Int'];
  likeable_id: Scalars['Int'];
  likeable_type: Scalars['String'];
};

export type CreateMyInput = {
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type CreatePostInput = {
  category: Scalars['String'];
  content: Scalars['String'];
  title: Scalars['String'];
};

export type GetCommentInput = {
  author?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  post_id?: Maybe<Scalars['Float']>;
};

export type GetLikeableInput = {
  likeable_id?: Maybe<Scalars['Float']>;
  likeable_type: Scalars['String'];
  user_id?: Maybe<Scalars['String']>;
};

export type GetPostInput = {
  author?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
};

export type Likeable = {
  __typename?: 'Likeable';
  created_date: Scalars['String'];
  id: Scalars['Int'];
  like_dislike: Scalars['Int'];
  likeable_id: Scalars['Int'];
  likeable_type: Scalars['String'];
  user_id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment: Comment;
  createLikeable: Likeable;
  createMyPage: MyPage;
  createPost: Post;
};


export type MutationcreateCommentArgs = {
  input: CreateCommentInput;
};


export type MutationcreateLikeableArgs = {
  input: CreateLikeableInput;
};


export type MutationcreateMyPageArgs = {
  createMyInput: CreateMyInput;
};


export type MutationcreatePostArgs = {
  input: CreatePostInput;
};

export type MyPage = {
  __typename?: 'MyPage';
  id: Scalars['Int'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  author: Scalars['String'];
  category: Scalars['String'];
  content: Scalars['String'];
  created_date: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updated_date?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllComments: Array<Comment>;
  getAllLikes: Array<Likeable>;
  getAllPosts: Array<Post>;
  getComment: Comment;
  getLikeable: Likeable;
  getPost: Post;
  getSomeComments: Array<Comment>;
  getSomePosts: Array<Post>;
  getTotalLikes: Scalars['Float'];
  myPage: Array<MyPage>;
};


export type QuerygetCommentArgs = {
  id: Scalars['Float'];
};


export type QuerygetLikeableArgs = {
  id: Scalars['Float'];
};


export type QuerygetPostArgs = {
  id: Scalars['Float'];
};


export type QuerygetSomeCommentsArgs = {
  input: GetCommentInput;
};


export type QuerygetSomePostsArgs = {
  input: GetPostInput;
};


export type QuerygetTotalLikesArgs = {
  input: GetLikeableInput;
};
