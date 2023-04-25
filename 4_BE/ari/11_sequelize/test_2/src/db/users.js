const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgurl: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      interests: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: true,
      },
      xp: { type: DataTypes.INTEGER, defaultValue: 0 },
      level: { type: DataTypes.INTEGER, defaultValue: 0 },
      coins: { type: DataTypes.INTEGER, defaultValue: 0 },
      role: { type: DataTypes.STRING, defaultValue: "user" },
    },
    {
      hooks: {
        beforeCreate: async function (user) {
          const salt = await bcrypt.genSalt(12);
          user.password = await bcrypt.hash(user.password, salt);
        },
        beforeBulkUpdate: async function (user) {
          if (user.attributes.password) {
            const salt = await bcrypt.genSalt(12);
            user.attributes.password = await bcrypt.hash(
              user.attributes.password,
              salt
            );
          }
        },
      },
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Post);
    User.hasMany(models.Comment);
    User.hasMany(models.Like);
  };

  return User;
};
