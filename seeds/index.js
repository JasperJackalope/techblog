const sequelize = require('../config/connection.js');
const { User, Post, Comment } = require('../models');

const userData = require('./userSeedData.json');
const postData = require('./postSeedData.json');
const commentData = require('./commentSeedData.json');

const seedDatabase = async () => {
    const sequelize = require('../config/connection.js');
    const { User, Post, Comment } = require('../models');
    
    const userData = require('./userSeedData.json');
    const postData = require('./postSeedData.json');
    const commentData = require('./commentSeedData.json');
    
    const seedDatabase = async () => {
      await sequelize.sync({ force: true });
    
      await User.bulkCreate(userData);
      console.log('Users seeded');
    
      await Post.bulkCreate(postData);
      console.log('Posts seeded');
    
      await Comment.bulkCreate(commentData);
      console.log('Comments seeded');
    
      process.exit(0);
    };
    
    seedDatabase();
    
};

seedDatabase();