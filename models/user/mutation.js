export default `
type Mutation {
	createUser(
        status: String!
        name: String!
        email: String!
        password: String!
    ): User

    updateUser(
        uId: String!
        status: String
        name: String!
    ): User

    updatePassword(
    	uId: String!
    	password: String!
    ): User
}
`;