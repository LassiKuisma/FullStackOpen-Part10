import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_INFO}
  query GetRepositories {
    repositories {
      edges {
        node {
          ...RepositoryInfo
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
  ${REPOSITORY_INFO}
  query RepositoryInfo($id: ID!) {
    repository(id: $id) {
      ...RepositoryInfo
      url
    }
  }
`;
