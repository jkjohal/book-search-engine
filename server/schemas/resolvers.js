const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

Query: {
    if (context.user) {
        const userData = await User.findOne({ _id: user._id }).select('password');

        return userData;
      }
}

Mutation: {
    createUser: async (parent, args) => {
        const user = await User.create;
        const token = User.token;
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
}}


module.exports = resolvers;
