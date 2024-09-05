/**
 * All resolvers related to users
 * @typedef {Object}
 */
export default {
	Query: {
		topics: async (parent, args, context) => {
			context.di.authValidation.ensureThatUserIsLogged(context);
			context.di.authValidation.ensureThatUserIsAdministrator(
				context
			);
			const sortCriteria = {
				isAdmin: 'desc',
				registrationDate: 'asc',
			};
			return context.di.model.Users.find().sort(sortCriteria).lean();
		},
	},
	Mutation: {
		// Add a mutation to update the user's records field
		updateUserRecords: async (parent, { uuid, records }, context) => {
			context.di.authValidation.ensureThatUserIsLogged(context);
			const user = await context.di.model.Users.findOneAndUpdate(
				{ uuid },
				{ $push: { records } },
				{ new: true }
			).lean();
			return user;
		},
	},
};
