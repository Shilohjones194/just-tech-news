// this file will become more important as we create more models, but for now itll just be for collection and exporting the User model data.
// 13.1.5//
const User = require('./User');
const Post = require('./Post');

// create associations
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
});
// statement above we are defining, the relation ship of Post model to the User

module.exports = { User, Post };
