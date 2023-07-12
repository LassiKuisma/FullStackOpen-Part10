import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories {
    repositories {
      edges {
        node {
          id
          ownerAvatarUrl
          fullName
          description
          language
          stargazersCount
          forksCount
          reviewCount
          ratingAverage
        }
      }
    }
  }
`;

export const CURRENT_USER = gql`
  query CurrentUser {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query RepositoryInfo($id: ID!) {
    repository(id: $id) {
      id
      fullName
      url
      ownerAvatarUrl
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
    }
  }
`;
