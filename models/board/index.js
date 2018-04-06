'use strict';
import Board from './type';
import Mutation from './mutation';
import mutationResolver from './mutation.resolver';

const BoardQuery = `
    ${Board}
    ${Mutation}
`;

export default {
    typeDefs: BoardQuery,
    resolvers: {
        Mutation: mutationResolver
    }
};