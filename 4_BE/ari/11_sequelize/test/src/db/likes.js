const dbuser = require("./users");

module.exports = (sequelize, DataTypes) => {
  const User = dbuser(sequelize, DataTypes);

  const Like = sequelize.define(
    "like",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    },
    {
      timestamps: true,
      hooks: {
        beforeCreate: async function (like) {
          const userWhoLiked = await User.findByPk(like.userId);
          try {
            if (userWhoLiked.role === "Premium") {
              await User.update(
                {
                  xp: userWhoLiked.xp + 10,
                  level: Math.trunc(userWhoLiked.xp / 100),
                  coins: Math.trunc(userWhoLiked.level * 20),
                },
                { where: { id: like.userId } }
              );
            } else {
              await User.update(
                {
                  xp: userWhoLiked.xp + 2,
                  level: Math.trunc(userWhoLiked.xp / 100),
                  coins: Math.trunc(userWhoLiked.level * 10),
                },
                { where: { id: like.userId } }
              );
            }
          } catch (error) {
            console.log(error);
          }
        },
        afterCreate: async (like, options) => {
          const post = await like.getPost();
          const user = await like.getUser();

          const topic = post.topic;

          const interest = user.interests.find((i) => i.name === topic);

          if (interest) {
            interest.weight += 1;
          } else {
            user.interests.push({ name: topic, weight: 1 });
          }

          await user.save();
        },
      },
    }
  );
  Like.associate = (models) => {
    Like.belongsTo(models.User);
    Like.belongsTo(models.Post);
  };
  return Like;
};
