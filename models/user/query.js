export default `
type Query {
    generateToken(
    email: String!
    password: String!
    ): [Token]

    authToken(
    token: String!
    ): [User]
}
`;