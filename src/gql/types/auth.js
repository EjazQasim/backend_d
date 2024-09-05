import { gql } from 'apollo-server-express';

export default gql`
  input RecordInput {
    topic: TopicNameInput!
  }

  input TopicNameInput {
    name: String!
    percent: Float!
    timeFrame: String!
    text: String!
  }

  type Token {
    token: String
  }

  type Mutation {
    """
    It allows users to register
    """
    registerUser(
      name: String!
      email: String!
      password: String!
      records: [RecordInput!]!
    ): Token

    """
    It allows users to authenticate
    """
    authUser(email: String!, password: String!): Token

    """
    It allows to user to delete their account permanently
    """
    deleteMyUserAccount: DeleteResult
  }
`;
