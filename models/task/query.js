export default `
type Query {
    getTaskById(taskId: String!): [Task]
}
`;