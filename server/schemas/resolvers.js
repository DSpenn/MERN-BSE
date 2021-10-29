// Define the query and mutation functionality to work with the Mongoose models.
const { AuthenticationError } = require('apollo-server-express');
const { User, Book } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('books');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('books');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('books');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },


Mutation: {
  addUser: async (parent, { username, email, password }) => {
    const user = await User.create({ username, email, password });
    const token = signToken(user);
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });

    if (!user) {
      throw new AuthenticationError('No user found with this email address');
    }

    const correctPw = await user.isCorrectPassword(password);

    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }

    const token = signToken(user);

    return { token, user };
  },
   saveBook: async (parent, { book }, context) => {
     console.log("bookData",bookData);
    Book.push(bookData.book);
      const result = {
        success: true,
        book: bookData.book,
      };
      return result;
    },
  removeBook: async (parent, { bookId }) => {
    return Book.findOneAndDelete({ _id: bookId });
  },
},

};


module.exports = resolvers;



/* saveBook: async (parent, { bookData, token }) => {
  return User.findOneAndUpdate(
    { _id: context.user._id },
    {
      $addToSet: { savedBooks: { bookData } },
    },
    {
      new: true,
      runValidators: true,
    }
  );
}, */