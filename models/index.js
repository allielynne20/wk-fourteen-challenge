// import all models
const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment');

// create associations
// User.hasMany(Post, {
//   foreignKey: 'user_id'
// });

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// User.belongsToMany(Post, {
//   through: Vote,
//   as: 'voted_posts',

//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Post.belongsToMany(User, {
//   through: Vote,
//   as: 'voted_posts',
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(User, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

// Vote.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Vote, {
//   foreignKey: 'user_id'
// });

// Post.hasMany(Vote, {
//   foreignKey: 'post_id'
// });

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Post, {
//   foreignKey: 'post_id',
//   onDelete: 'SET NULL'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id',
//   onDelete: 'SET NULL'
// });

Post.hasMany(Comment, {
  foreignKey: 'postId', 
  onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };
