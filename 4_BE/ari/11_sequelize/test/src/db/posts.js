const db = require("./users");

module.exports = (sequelize, DataTypes) => {
  const User = db(sequelize, DataTypes);

  const Post = sequelize.define(
    "post",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgurl: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      topic: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: async function (post) {
          try {
            const userWhoPosted = await User.findByPk(post.userId);
            if (userWhoPosted.role === "Premium") {
              await User.update(
                {
                  xp: userWhoPosted.xp + 10,
                  level: Math.trunc(userWhoPosted.xp / 100),
                  coins: Math.trunc(userWhoPosted.level * 20),
                },
                { where: { id: like.userId } }
              );
            } else {
              await User.update(
                {
                  xp: userWhoPosted.xp + 2,
                  level: Math.trunc(userWhoPosted.xp / 100),
                  coins: Math.trunc(userWhoPosted.level * 10),
                },
                { where: { id: like.userId } }
              );
            }
          } catch (error) {
            console.log(error);
          }
        },
      },
    }
  );
  Post.associate = (models) => {
    Post.belongsTo(models.User);
    Post.hasMany(models.Comment);
    Post.hasMany(models.Like);
  };
  return Post;
};

// const hosam = {
//   username: "bbb",
//   email: "jogn@ssds.de",
//   interests: [
//     { name: "photography", weight: 5 },
//     { name: "travel", weight: 3 },
//     { name: "cooking", weight: 2 },
//   ],
// };

// new_weight = old_weight * (decay_rate * time_since_last_interaction)
