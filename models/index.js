const User=require('./User');
const Post=require('./Post');
const Comment=require('./Comment');

/* Relation between User and Post :One to Many relation,Where User has Many Posts and Post belongs to one user */

User.hasMany('Post',{

    foreignKey:'user_id',
    onDelete: 'CASCADE'
})

Post.belongsTo('User');

/*Relation between Post and Comment:One to Many relation where Post has many Comment and comment belong to a post */

Post.hasMany('Comment',{

    foreignKey:'post_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo('Post');

/*Relation between Comment and User:One to Many relation where User has many Comment and comment belong to a user */

User.hasMany('Comment',{

    foreignKey:'user_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo('User');


module.export={User,Post,Comment};



