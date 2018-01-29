import App from '../components/app';

import {graphql} from 'react-apollo';

import gql from 'graphql-tag';

const query = gql`
  query pokemons {
    pokemons(first: 10) {
      id
      name
      image
    }
  }
`;

const queryOptions = {
  props: ({data}) => ({
    ...data
  })
};

export default graphql(query, queryOptions)(App);
