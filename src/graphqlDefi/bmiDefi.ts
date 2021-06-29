
import {
  BMICalculator,
  generatedDataSet,
  givenDataSet,
} from "../module/bmiCalculator";
import { dataSet } from "../data.json";
import { ApolloServer, gql } from 'apollo-server-express';
// The GraphQL schema
const typeDefs = gql`
  type Query {
    questionOne: [generatedDataSet],
    questionTwo: Int
  }
  """
  FNK generatedDataSet Schema
  """
  type generatedDataSet{
    id: ID
    Gender: String
    HeightCm: Int
    WeightKg: Int
    bmi: Int
    risk: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    questionOne: (): Array<generatedDataSet> => {
      const bmiCalculator: BMICalculator = new BMICalculator();
      return bmiCalculator.getBMI(dataSet);
    },
    questionTwo: ():number => {
      const bmiCalculator: BMICalculator = new BMICalculator();
      const questionOne: Array<generatedDataSet> = bmiCalculator.getBMI(dataSet);
      return bmiCalculator.getTotalOverWeight(
        questionOne,
        "very_high_risk"
      )
    },
  },
};

export {
  typeDefs,
  resolvers
}

// server less graphql API computes 
// the details store the details and dyanomo Db ....