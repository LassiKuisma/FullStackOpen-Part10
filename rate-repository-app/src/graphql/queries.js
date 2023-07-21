import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REVIEW } from './fragments';

export const GET_REPOSITORIES = gql`
  ${REPOSITORY_INFO}
  query GetRepositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
  ${REVIEW}
  query RepositoryInfo($id: ID!) {
    repository(id: $id) {
      ...RepositoryInfo
      url
      reviews {
        edges {
          node {
            ...ReviewFields
          }
        }
      }
    }
  }
`;
