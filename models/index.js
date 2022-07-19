const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');

/* Relation between User and Post :One to Many relation,Where User has Many Posts and Post belongs to one user */

Post.belongsTo(User,{
    foreignKey:'user_id',

});

User.hasMany(Post,{
    foreignKey:'user_id',
    onDelete:'CASCADE'
})




/*Relation between Post and Comment:One to Many relation where Post has many Comment and comment belong to a post */

Comment.belongsTo(Post);

Post.hasMany(Comment,{

    foreignKey:'post_id',
    onDelete: 'CASCADE'
})



/*Relation between Comment and User:One to Many relation where User has many Comment and comment belong to a user */

Comment.belongsTo(User);

User.hasMany(Comment,{

    foreignKey:'user_id',
    onDelete: 'CASCADE'
})




module.exports = {User,Comment,Post};

