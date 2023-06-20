import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';

const baseUrl = Constants.manifest.extra.dbUrl;

const httpLink = createHttpLink({
  uri: `${baseUrl}/graphql`,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
