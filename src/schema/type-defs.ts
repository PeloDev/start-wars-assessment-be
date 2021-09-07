import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`

  type Planet {
    climate: String!
    created: String!
    diameter: String!
    edited: String!
    films: [String]!
    gravity: String!
    name: String!
    orbital_period: String!
    population: String!
    residents: [String]!
    rotation_period: String!
    surface_water: String!
    terrain: String!
    url: String!
  }

  type Image {
    url: String!
    thumbnail: String!
    snippet: String!
    context: String!
  }

  type Person {
    id: String!
    birth_year: String!
    eye_color: String!
    films: [String]!
    gender: String!
    height: String!
    homeworldOb: Planet
    homeworld: String!
    mass: String!
    name: String!
    skin_color: String!
    created: String!
    edited: String!
    species: [String]!
    url: String!
    starships: [String]!
    vehicles: [String]!
    images: [Image] # from image-search-google
    image: String # from cloudinary
  }

  type People {
    count: Int!
    total: Int!
    people: [Person]!
  }

  type Query {
    getAllPeople(page: Int): People!
    getPersonById(id: String!) : Person
    searchPerson(name: String!): [Person]!
    fetchHomeworldDetails(url: String!): Planet
  }

  # type Film {
  #   title: String!
  #   episode_id: Int!
  #   opening_crawl: String!
  #   director: String!
  #   producer: String!
  #   release_date: String!
  #   species: [String]!
  #   starships: [String]!
  #   vehicles: [String]!
  #   characters: [String]!
  #   planets: [String]!
  #   url: String!
  #   created: String!
  #   edited: String!
  # }

  # type Starship {
  #   MGLT: String!
  #   cargo_capacity: String!
  #   consumables: String!
  #   cost_in_credits: String!
  #   created: String!
  #   crew: String!
  #   edited: String!
  #   hyperdrive_rating: String!
  #   length: String!
  #   manufacturer: String!
  #   max_atmosphering_speed: String!
  #   model: String!
  #   name: String!
  #   passengers: String!
  #   films: [String]!
  #   pilots: [String]!
  #   starship_class: String!
  #   url: String!
  # }

  # type Vehicle {
  #   cargo_capacity: String!
  #   consumables: String!
  #   cost_in_credits: String!
  #   created: String!
  #   crew: String!
  #   edited: String!
  #   length: String!
  #   manufacturer: String!
  #   max_atmosphering_speed: String!
  #   model: String!
  #   name: String!
  #   passengers: String!
  #   pilots: [String]!
  #   films: [String]!
  #   url: String!
  #   vehicle_class: String!
  # }

  # type Species {
  #   average_height: String!
  #   average_lifespan: String!
  #   classification: String!
  #   created: String!
  #   designation: String!
  #   edited: String!
  #   eye_colors: String!
  #   hair_colors: String!
  #   homeworld: String!
  #   language: String!
  #   name: String!
  #   people: [String]!
  #   films: [String]!
  #   skin_colors: String!
  #   url: String!
  # }
`;