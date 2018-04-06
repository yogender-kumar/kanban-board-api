export default `
type Mutation {
    createTask(
        status: String!
        title: String!
        description: String!
    ): Task
}
`;