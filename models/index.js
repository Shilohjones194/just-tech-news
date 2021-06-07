// this file will become more important as we create more models, but for now itll just be for collection and exporting the User model data.
// 13.1.5//
const User = require('./User');
const Post = require('./Post');
const Vote = require('./Vote');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
// statement above we are defining, the relation ship of Post model to the User
User.belongsToMany(Post, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'user_id'
});

Post.belongsToMany(User, {
    through: Vote,
    as: 'voted_posts',
    foreignKey: 'post_id'
});
Vote.belongsTo(User, {
    foreignKey: 'user_id'
});

Vote.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Vote, {
    foreignKey: 'user_id'
});

Post.hasMany(Vote, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Vote };
