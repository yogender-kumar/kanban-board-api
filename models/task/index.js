'use strict';
import queryResolvers from './query.resolver';
import mutationResolvers from './mutation.resolver';
import Task from './type';
import Query from './query';
import Mutation from './mutation';

const TaskQuery = `
    ${Task}
    ${Query}
    ${Mutation}
`;

export default {
    typeDefs: TaskQuery,
    resolvers: {
        Query: queryResolvers,
        Mutation: mutationResolvers
    }
};