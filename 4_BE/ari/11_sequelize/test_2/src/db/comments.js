const db = require("./users");

module.exports = (sequelize, DataTypes) => {
  const User = db(sequelize, DataTypes);
  const Comment = sequelize.define(
    "comment",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: async function (comment) {
          try {
            const userWhoComment = await User.findByPk(comment.userId);
            if (userWhoComment.role === "Premium") {
              await User.update(
                {
                  xp: userWhoComment.xp + 20,
                  level: Math.trunc(userWhoComment.xp / 100),
                  coins: Math.trunc(userWhoComment.level * 20),
                },
                { where: { id: comment.userId } }
              );
            } else {
              await User.update(
                {
                  xp: userWhoComment.xp + 2,
                  level: Math.trunc(userWhoComment.xp / 100),
                  coins: Math.trunc(userWhoComment.level * 10),
                },
                { where: { id: comment.userId } }
              );
            }
          } catch (error) {
            console.log(error);
          }
        },
      },
    }
  );
  Comment.associate = (models) => {
    Comment.belongsTo(models.Post);
    Comment.belongsTo(models.User);
  };
  return Comment;
};
