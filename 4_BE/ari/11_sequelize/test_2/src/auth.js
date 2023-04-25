const UserDB = require("./db").User;
const jwt = require("jsonwebtoken");

const jwt_key = process.env.JWT_KEY;
const jwt_refresh = process.env.JWT_REFRESH_KEY;

const authenticate = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (accessToken) {
    try {
      const decodedToken = jwt.verify(accessToken, jwt_key);
      console.log("decoded token", decodedToken);

      const user = await UserDB.findByPk(decodedToken.id);
      console.log("user", user);

      if (!user) {
        throw new Error("User not found");
      }

      req.user = user;
      next();
    } catch (err) {
      console.error(err);
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(401);
  }
};
const verifyRefresh = (token) => {
  new Promise((res, rej) =>
    jwt.verify(token, jwt_refresh, (err, decodedToken) => {
      if (err) rej(err);
      res(decodedToken);
    })
  );
};

const refreshToken = async (oldToken) => {
  const decodedToken = await verifyRefresh(oldToken);

  const accessToken = await jwt.sign({ id: decodedToken.id }, jwt_key, {
    expiresIn: "15m",
  });

  const refreshToken = await jwt.sign({ id: decodedToken.id }, jwt_refresh, {
    expiresIn: "1w",
  });

  return { accessToken, refreshToken };
};

module.exports = { authenticate, refreshToken };
