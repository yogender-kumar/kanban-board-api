export default `
type User {
    uId: String!
    name: String!
    status: String
    password: String!
    email: String!
}

type Token {
	email: String!
	password: String!
	token: String
}
`;