import { gql } from 'apollo-server-express';

export default /* GraphQL */ gql`
  type User {
    email: String
    name: String
    isAdmin: Boolean
    isActive: Boolean
    uuid: String
    registrationDate: String
    lastLogin: String
    records: [Record]
  }

  type Record {
    topic: TopicName
  }

  type TopicName {
    name: String
    percent: Float
    timeFrame: String
    text: String
  }

  type Query {
    """
    Get list of all users registered on database
    """
    topics: [User]
  }

  type Mutation {
    """
    Update a user's records
    """
    updateUserRecords(uuid: String!, records: [RecordInput]!): User
  }

  input RecordInput {
    topic: TopicNameInput
  }

  input TopicNameInput {
    name: String
    percent: Float
    timeFrame: String
    text: String
  }
`;
