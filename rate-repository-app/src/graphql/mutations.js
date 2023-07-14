import { gql } from '@apollo/client';
import { REVIEW } from './fragments';

export const LOGIN = gql`
  mutation Login($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  ${REVIEW}
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      ...ReviewFields
      repositoryId
    }
  }
`;
