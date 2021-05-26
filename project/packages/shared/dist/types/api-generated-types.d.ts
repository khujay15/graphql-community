export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Comment = {
    __typename?: 'Comment';
    author: Scalars['String'];
    content: Scalars['String'];
    created_date: Scalars['String'];
    id: Scalars['Int'];
    parent: Scalars['Int'];
    post_id: Scalars['Int'];
    updated_date?: Maybe<Scalars['String']>;
};
export declare type CreateCommentInput = {
    content: Scalars['String'];
    parent?: Maybe<Scalars['Float']>;
    post_id: Scalars['Int'];
};
export declare type CreateLikeableInput = {
    like_dislike: Scalars['Int'];
    likeable_id: Scalars['Int'];
    likeable_type: Scalars['String'];
};
export declare type CreateMyInput = {
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};
export declare type CreatePostInput = {
    category: Scalars['String'];
    content: Scalars['String'];
    title: Scalars['String'];
};
export declare type GetCommentInput = {
    author?: Maybe<Scalars['String']>;
    parent?: Maybe<Scalars['String']>;
    post_id?: Maybe<Scalars['Float']>;
};
export declare type GetLikeableInput = {
    likeable_id?: Maybe<Scalars['Float']>;
    likeable_type: Scalars['String'];
    user_id?: Maybe<Scalars['String']>;
};
export declare type GetPostInput = {
    author?: Maybe<Scalars['String']>;
    category?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['Float']>;
};
export declare type Likeable = {
    __typename?: 'Likeable';
    created_date: Scalars['String'];
    id: Scalars['Int'];
    like_dislike: Scalars['Int'];
    likeable_id: Scalars['Int'];
    likeable_type: Scalars['String'];
    user_id: Scalars['String'];
};
export declare type Mutation = {
    __typename?: 'Mutation';
    createComment: Comment;
    createLikeable: Likeable;
    createMyPage: MyPage;
    createPost: Post;
};
export declare type MutationcreateCommentArgs = {
    input: CreateCommentInput;
};
export declare type MutationcreateLikeableArgs = {
    input: CreateLikeableInput;
};
export declare type MutationcreateMyPageArgs = {
    createMyInput: CreateMyInput;
};
export declare type MutationcreatePostArgs = {
    input: CreatePostInput;
};
export declare type MyPage = {
    __typename?: 'MyPage';
    id: Scalars['Int'];
    name: Scalars['String'];
    type?: Maybe<Scalars['String']>;
};
export declare type Post = {
    __typename?: 'Post';
    author: Scalars['String'];
    category: Scalars['String'];
    content: Scalars['String'];
    created_date: Scalars['String'];
    id: Scalars['Int'];
    title: Scalars['String'];
    updated_date?: Maybe<Scalars['String']>;
};
export declare type Query = {
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
export declare type QuerygetCommentArgs = {
    id: Scalars['Float'];
};
export declare type QuerygetLikeableArgs = {
    id: Scalars['Float'];
};
export declare type QuerygetPostArgs = {
    id: Scalars['Float'];
};
export declare type QuerygetSomeCommentsArgs = {
    input: GetCommentInput;
};
export declare type QuerygetSomePostsArgs = {
    input: GetPostInput;
};
export declare type QuerygetTotalLikesArgs = {
    input: GetLikeableInput;
};
