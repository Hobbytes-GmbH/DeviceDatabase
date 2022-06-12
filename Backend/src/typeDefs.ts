import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    pcs: [PC]!
    pc(id: ID, hostname: String, ip: String): PC
    houses: [House]!
    house(id: ID, number: Int): House
    rooms: [Room]!
    room(id: ID, name: String): Room
    networks: [Network]!
    network(id: ID, name: String): Network
  }

  type Mutation {
    # Create Mutations
    addPc(
      hostname: String!
      ip: String!
      network: String
      networkId: ID
      house: Int
      houseId: ID
      room: String
      roomId: ID
    ): PC
    addHouse(number: Int!): House
    addRoom(name: String!, house: Int, houseId: ID): Room
    addNetwork(name: String!): Network
    # Delete Mutations
    delPc(id: ID, hostname: String, ip: String): PC
    delNetwork(id: ID, name: String): Network
    delHouse(id: ID, number: String): House
    delRoom(id: ID, name: String): Room
  }

  type PC {
    id: ID!
    hostname: String!
    ip: String
    network: Network
    house: House
    room: Room
  }

  type House {
    id: ID
    number: Int!
    rooms: [Room]
    pcs: [PC]
  }

  type Room {
    id: ID!
    name: String!
    house: House!
    pcs: [PC]
  }

  type Network {
    id: ID!
    name: String!
  }
`;
