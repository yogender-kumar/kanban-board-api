'use strict';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';
import { makeExecutableSchema } from 'graphql-tools';
import { buildSchema } from 'graphql';
import taskSchema from './task/index';
import userSchema from './user/index';
import boardSchema from './board/index';


// List of all Types/Queries
const types = [
    userSchema.typeDefs,
    taskSchema.typeDefs,
    boardSchema.typeDefs
];
// List of all Resolvers
const resolvers = [
		userSchema.resolvers.Query,
    userSchema.resolvers.Mutation,
    taskSchema.resolvers.Query,
    taskSchema.resolvers.Mutation
];

// Merge all types and resolvers
const RootQuery = mergeTypes(types);
const RootResolvers = mergeResolvers(resolvers);

export default makeExecutableSchema({
    typeDefs: [RootQuery],
    resolvers: RootResolvers
});