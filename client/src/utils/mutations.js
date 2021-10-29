import { gql } from '@apollo/client';


/*
[] `SAVE_BOOK` will execute the `saveBook` mutation.
[] `REMOVE_BOOK` will execute the `removeBook` mutation. */


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    user {
      _id
      username
    }
  }
`;



