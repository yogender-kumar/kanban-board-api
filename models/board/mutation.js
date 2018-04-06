export default `
type Mutation {
	createBoard(
        status: String!
        uId: [String!]
        name: String!
    ): Board

    updateBoard(
        bId: String!
        status: String
        name: String!
    ): Board

    addUserToBoard(
    	bId: String!
    	uId: String!
    ): Board
}
`;