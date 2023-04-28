const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
    }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id'
      }
    },
    // created_at: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: DataTypes.NOW
    // },
    // updated_at: {
    //   type: DataTypes.DATE,
    //   allowNull: true,
    //   defaultValue: DataTypes.NOW
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
    // getterMethods: {
    //   created_at() {
    //     const date = this.getDataValue('created_at');
    //     return date ? date.toLocaleString() : null;
    //   },
    //   updated_at() {
    //     const date = this.getDataValue('updated_at');
    //     return date ? date.toLocaleString() : null;
    //   }
    // }
  }
);

module.exports = Comment;
