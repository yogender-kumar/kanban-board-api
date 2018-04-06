'use strict';
import User from './type';
import queryResolvers from './query.resolver';
import mutationResolvers from './mutation.resolver';
import Query from './query';
import Mutation from './mutation';

const UserQuery = `
    ${User}
    ${Query}
    ${Mutation}
`;

export default {
    typeDefs: UserQuery,
    resolvers: {
        Query: queryResolvers,
        Mutation: mutationResolvers
    }
};