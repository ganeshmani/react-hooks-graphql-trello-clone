const mutationResolvers = require("./mutationResolvers");
const queryResolvers = require("./queryResolvers");

const { gql } = require("apollo-server-express");
const cardTypeDefs = gql`
  input insertCardInput {
    title: String!
    label: String!
    sectionId: ID!
    pos: Int!
  }

  input updateCardPosInput {
    cardId: String!
    sectionId: String!
    pos: Int!
  }

  input cardSectionInput {
    sectionId: String!
  }

  type Card {
    id: ID
    title: String!
    label: String!
    description: String
    pos: Int
    sectionId: String!
  }

  type Query {
    card: String
    fetchCardsBySectionId(request: cardSectionInput): [Card]
  }

  type Mutation {
    insertCard(request: insertCardInput): Card
    updateCardPos(request: updateCardPosInput): Card
  }
`;

const cardResolvers = {
  Query: {
    ...queryResolvers,
  },
  Mutation: {
    ...mutationResolvers,
  },
};

module.exports = {
  cardTypeDefs,
  cardResolvers,
};
