module.exports = {


  friendlyName: 'Prophecy',


  description: 'Receive a free prophecy.',


  inputs: {
    userId: {
      description: 'The ID of the user to look up.',
      type: 'number',
      required: true,
    }
  },


  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/welcome'
    },
    notFound: {
      description: 'No user with the specified ID was found in the db.',
      responseType: 'not found yo!'
    }
  },


  fn: async function ({userId}) {

    // All done.
    var user = await User.findOne({ id: userId });

    if (!user) { throw 'notFound'; }
    return {
      name: user.name
    };
  }
};
